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
      <b-button @click="alteraPlanta" class="btn3"> Alterar Planta</b-button>
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
        <b-form-select class="mb-3 drop1">
          <b-form-select-option
            value=""
            v-for="imagem in imagens"
            :key="imagem.id"
            v-model="form.imagem"
          >
            ({{ imagem.description }} - {{ imagem.attachment_key }})
          </b-form-select-option>
        </b-form-select>
      </b-form>
    </div>
  </b-card>
</template>

<script>
export default {
  props: ["planta"],
  data() {
    return {
      formAlterar: {
        tipo_planta: "",
        preco: "",
        nome: "",
        desc: "",
      },
    };
  },
  methods: {
    async deletarPlanta() {
      try {
        await this.$delete(`/plantas/${this.planta.id}/`, this.planta);
        alert("Planta removida com sucesso!");
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
  },
};
</script>

<style></style>
