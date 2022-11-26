<template>
  <b-card
    img-alt="Image"
    img-top
    tag="article"
    style="height: 250px; width: 850px"
    class="titlep mb-1"
  >
    <div class="titulo5">{{ planta.nome }} - ID: {{ planta.id }}</div>
    <div class="buttons">
      <b-button class="btn1" :to="getPlantaUrl(planta.id)" variant="primary"
        >Ir para a planta</b-button
      >
      <b-button @click="deletarPlanta" class="btn2">
        <b-icon icon="trash" class="b-0"></b-icon>
        Excluir ></b-button
      >
      <b-button @click.prevent="submitFile" class="btn3">
        Alterar Planta</b-button
      >
    </div>
    <span></span> <span></span>
    <div class="formulario">
      <b-form class="formularioAlterar">
        <div class="tipoPlanta">Tipo Planta</div>
        <b-form-group id="input-group-2">
          <b-form-input id="input-2" v-model="formAlterar.tipo_planta" required>
          </b-form-input>
        </b-form-group>
        <div>Preço:</div>
        <b-form-group id="input-group-2">
          <b-form-input
            id="input-2"
            v-model="formAlterar.preco"
            required
          ></b-form-input>
        </b-form-group>
        <div>Nome:</div>
        <b-form-group id="input-group-2">
          <b-form-input
            id="input-2"
            v-model="formAlterar.nome"
            required
          ></b-form-input>
        </b-form-group>
        <br />
        <div>Descrição:</div>
        <b-form-group id="input-group-2">
          <b-form-input
            id="input-2"
            v-model="formAlterar.desc"
            required
          ></b-form-input>
        </b-form-group>
        <br />
        <div>Imagem:</div>
        <input @change="uploadFile" type="file" ref="file" />
      </b-form>
    </div>
  </b-card>
</template>

<script>
import axios from "axios";
export default {
  props: ["planta"],
  data() {
    return {
      formAlterar: {
        tipo_planta: "",
        preco: "",
        nome: "",
        desc: "",
        imagem_attachment_key: "",
      },
      imagem: {},
      imagens: [],
    };
  },
  async created() {
    this.getImagens();
    this.getPlanta();
  },
  methods: {
    async deletarPlanta() {
      try {
        await this.$delete(`/plantas/${this.planta.id}/`, this.planta);
        alert("Planta removida com sucesso!");
        this.$router.push({ name: "Home" });
      } catch {
        alert("Erro");
      }
    },
    async alteraPlanta() {
      try {
        this.formAlterar.planta = this.planta.id;
        await this.$patch(`/plantas/${this.planta.id}/`, this.formAlterar);
        alert("Planta editada com sucesso");
      } catch {
        alert("Erro");
      }
    },
    getPlantaUrl(id) {
      return `/produto/${id}`;
    },
    async getImagens() {
      this.imagens = await this.$get("api/media/imagesUpload/");
    },
    uploadFile() {
      this.Images = this.$refs.file.files[0];
    },
    async submitFile() {
      const formData = new FormData();
      formData.append("file", this.Images);
      const headers = { "Content-Type": "multipart/form-data" };
      const { data } = await axios.post(
        "http://localhost:8000/api/media/imagesUpload/",
        formData,
        { headers }
      );
      this.formAlterar.imagem_attachment_key = data.attachment_key;
      await axios.put(
        `http://localhost:8000/plantas/${this.planta.id}/`,
        this.formAlterar
      );
    },
    async getPlanta() {
      this.formAlterar.nome = this.planta.nome;
      this.formAlterar.preco = this.planta.preco;
      this.formAlterar.tipo_planta = this.planta.tipo_planta;
      this.formAlterar.desc = this.planta.desc;
      await this.$get(`plantas/${this.planta.id}/`, this.formAlterar);
    },
  },
};
</script>

<style></style>
