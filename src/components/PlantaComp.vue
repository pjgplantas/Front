<template>
  <b-card
    img-alt="Image"
    img-top
    tag="article"
    style="height: 450px; width: 850px"
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
        <div>Comentarios:</div>
        <div
          class="Respostas"
          v-for="comentario in planta.comentarios"
          :key="comentario.id"
        >
          <h4>{{ comentario.usuario }} : {{ comentario.texto }}</h4>
          <button
            @click.prevent="
              this.user.id = comentario.usuario.id;
              deleteComentarios;
            "
          >
            excluir
          </button>
        </div>
      </b-form>
    </div>
  </b-card>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
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
        comentarios: "",
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

    async getComentarios() {
      this.comentarios = await this.$get("comentarios/");
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
        "http://jaummonster.pythonanywhere.com/api/media/imagesUpload/",
        formData,
        { headers }
      );
      this.formAlterar.imagem_attachment_key = data.attachment_key;
      await axios.put(
        `http:/jaummonster.pythonanywhere.com/plantas/${this.planta.id}/`,
        this.formAlterar
      );
    },
    async getPlanta() {
      this.formAlterar.nome = this.planta.nome;
      this.formAlterar.preco = this.planta.preco;
      this.formAlterar.tipo_planta = this.planta.tipo_planta;
      this.formAlterar.desc = this.planta.desc;
      this.formAlterar.comentarios = this.planta.comentarios;
      await this.$get(`plantas/${this.planta.id}/`, this.formAlterar);
    },
    async deleteComentarios() {
      try {
        await this.$delete(`/comentarios/${this.comentarios.id}/`, this.planta);
        alert("Comentario removido com sucesso!");
      } catch {
        alert("Erro");
      }
    },
    computed: {
      ...mapState("auth", ["loggedIn", "user", "id"]),
    },
  },
};
</script>

<style>
.formulario {
  height: 1000px;
}
.Respostas {
  color: #000000;
  display: flex;
  font-size: 20px;
  margin: 4% 0 0 1%;
  padding-top: 10px;
  background: rgba(228, 255, 239, 0.95);
  width: 80vh;
  height: 50px;
  white-space: nowrap;
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
