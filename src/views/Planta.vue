<template>
  <b-container class="login-page" fluid>
    <b-row class="rowPerfil">
      <b-col>
        <b-form class="formp" v-if="show">
          <div class="adicionarPlanta">Adicionar Planta</div>
          <div class="divs">Imagem</div>
          <b-form-group>
            <b-form-file
              accept=".jpg, .png"
              v-on:change="onFileChange"
              label="Small:"
              label-cols-sm="3"
              label-size="sm"
              placeholder="Escolha uma foto"
              drop-placeholder="Drop file here..."
            ></b-form-file
          ></b-form-group>
          <div class="divs">Descrição</div>
          <b-form-group id="input-group-2">
            <b-form-input id="input-2" v-model="imagem.description" required>
            </b-form-input>
          </b-form-group>
          <hr />
          <b-button v-on:change="onFileChange" @click="postImagem"
            >Adicionar imagem</b-button
          >
          <div class="divs">Tipo Planta</div>
          <b-form-group id="input-group-2">
            <b-form-input id="input-2" v-model="form.tipo_planta" required>
            </b-form-input>
          </b-form-group>
          <div class="divs">Preço:</div>
          <b-form-group id="input-group-2">
            <b-form-input
              id="input-2"
              v-model="form.preco"
              required
            ></b-form-input>
          </b-form-group>
          <div class="divs">Nome:</div>
          <b-form-group id="input-group-2">
            <b-form-input
              id="input-2"
              v-model="form.nome"
              required
            ></b-form-input>
          </b-form-group>
          <div class="divs">Descrição:</div>
          <b-form-group id="input-group-2">
            <b-form-input
              id="input-2"
              v-model="form.desc"
              required
            ></b-form-input>
          </b-form-group>
          <b-button
            class="btnperfil"
            type="submit"
            @click.prevent="adicionarPlanta"
            >Adicionar Planta</b-button
          >
        </b-form>
      </b-col>
      <b-col>
        <div class="plantas">
          <span>Plantas</span>
          <b-card
            img-alt="Image"
            img-top
            tag="article"
            style="height: 250px; width: 850px"
            class="titlep mb-1"
            v-for="planta in plantas"
            :key="planta.id"
          >
            <div class="titulo5">{{ planta.nome }} - ID: {{ planta.id }}</div>
            <div class="buttons">
              <b-button
                class="btn1"
                :to="getPlantaUrl(planta.id)"
                variant="primary"
                >Ir para a planta</b-button
              >
              <b-button @click="deletarPlanta" class="btn2">
                <b-icon icon="trash" class="b-0"></b-icon>
                Excluir ></b-button
              >
              <b-button @click="alteraPlanta" class="btn3">
                Alterar Planta</b-button
              >
            </div>
            <span></span> <span></span>
            <div class="formulario">
              <b-form class="formularioAlterar">
                <div class="tipoPlanta">Tipo Planta</div>
                <b-form-group id="input-group-2">
                  <b-form-input
                    id="input-2"
                    v-model="formAlterar.tipo_planta"
                    required
                  >
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
                <div>Descrição:</div>
                <b-form-group id="input-group-2">
                  <b-form-input
                    id="input-2"
                    v-model="formAlterar.desc"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-form>
            </div>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "perfil",
  data() {
    return {
      form: {
        tipo_planta: "",
        preco: "",
        nome: "",
        desc: "",
      },
      formAlterar: {
        tipo_planta: "",
        preco: "",
        nome: "",
        desc: "",
      },
      imagem: {
        file: null,
        description: "",
      },
      show: true,
      planta: {},
      plantas: [],
      aparecerForm: false,
    };
  },
  async created() {
    this.getPlanta();
  },

  methods: {
    async getPlanta() {
      this.plantas = await this.$get("plantas/");
    },
    getPlantaUrl(id) {
      return `/produto/${id}`;
    },
    async adicionarPlanta() {
      try {
        await this.$post(`/plantas/`, this.form);
        alert("Planta adicionada com sucesso!");
      } catch {
        alert("Erro");
      }
    },
    async postImagem() {
      try {
        await this.$post(`/api/media/imagesUpload`, this.imagem);
        alert("Imagem adicionada com sucesso");
      } catch {
        alert("Erro");
      }
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
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
  },
  computed: {
    ...mapState("auth", ["loggedIn", "user", "id"]),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

.formp {
  border-radius: 2px;
  padding: 50px;
  margin-left: 60px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}
.rowPerfil {
  width: 100%;
  margin-left: 1px;
  background-color: white;
}
.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
.formularioAlterar {
  display: flex;
  flex-direction: row;
}
.plantas .form-control {
  width: 150px;
  flex-wrap: wrap;
}
.tipoPlanta {
  flex-wrap: nowrap;
}
.login-page {
  background: #09b388; /* fallback for old browsers */
  background: -webkit-(
    to top,
    #001510,
    #00bf8f
  ); /* Chrome 10-25, Safari 5.1-6 */
  width: 100%;
  height: 1900px;
}
.card-body {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
a.btn.btn1.btn-primary {
  background: #15d5a5;
  background: linear-gradient(7deg, #1d583b 0%, #41a17b 66%);
  border-radius: 5px;
  border: 0;
  padding: 10px;
  font-size: 17px;
  height: 50px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  white-space: nowrap;
  margin-left: 40px;
}
.btn2 {
  background: #e81828;
  border-radius: 5px;
  border: 0;
  font-size: 17px;
  height: 50px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  white-space: nowrap;
  padding-top: 5px;
}
.btn2:hover {
  opacity: 70%;
  background: #e81828;
}
.btn3 {
  background: #7cb9e8;
  border-radius: 5px;
  border: 0;
  font-size: 17px;
  height: 50px;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  white-space: nowrap;
  padding-top: 5px;
  margin-left: 20px;
}
.btn3:hover {
  background: #4c708b;
}
a.btn.btn1.btn-primary:hover {
  background: #328051a1;
}
.adicionarPlanta {
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  color: black;
  padding: 25px;
  margin: 0 0 0 30%;
}
.divs {
  color: black;
  font-style: normal;
  font-weight: 500;
  white-space: nowrap;
  font-size: 19px;
  margin: 5% 0 0 0;
}
.form-control {
  background: white;
  border-style: none none solid none;
  border-color: rgba(62, 150, 97, 0.95);
  width: 480px;
}
.btnperfil {
  background: rgb(21, 213, 165);
  background: linear-gradient(
    7deg,
    rgba(21, 213, 165, 1) 0%,
    rgba(54, 131, 100, 1) 66%
  );
  border: 0;
  padding: 13px;
  width: 180px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 10px;
  margin: 10% 0 0 25%;
  font-family: "Roboto", sans-serif;
  padding-top: 10px;
  white-space: nowrap;
}
.btnperfil:hover {
  opacity: 80%;
}
.plantas {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
}
.plantas span {
  font-family: "Roboto", sans-serif;
  font-size: 1.7rem;
  color: black;
  text-align: center;
}
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.titulo5 {
  color: #328051a1; /* fallback for old browsers */
  color: -webkit-(to top, #001510, #00bf8f); /* Chrome 10-25, Safari 5.1-6 */
  color: #328051a1; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  opacity: 100%;
  font-family: "Josefin Sans", sans-serif;
  text-align: left;
  margin-top: 10px;
  margin-left: 20px;
  max-width: 306px;
  font-size: 21px;
  font-weight: bold;
  white-space: nowrap;
}
.formulario {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

@media (max-width: 844px) {
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-left: 0.2%;
  }

  .imgperfil {
    margin-left: 25%;
  }

  .login-page {
    width: 390px;
    height: 1230px;
    padding: 0;
  }
  .formp {
    width: 370px;
    flex-direction: column;
    height: 1200px;
    margin-left: 0.4%;
  }
  .parte1 {
    width: 300px;
    height: 380px;
    justify-content: center;
    margin-left: 30px;
  }
  .NomeCliente {
    text-align: center;
    margin: 0px;
  }
  .EmailCliente {
    text-align: center;
    margin: 0px;
  }

  .parte3 {
    width: 320px;
    height: 700px;
    margin-left: 30px;
    font-size: 10px;
  }
  .Titulo2Perfil {
    font-size: 20px;
  }
  .divs {
    font-size: 18px;
  }
  .form-control {
    width: 320px;
  }

  .parte5 {
    width: 300px;
    height: 400px;
    margin: 10% 0% 10% 8%;
  }
  .col {
    padding: 0px;
    margin: 0px;
    width: 390px;
  }
  .parte2 {
    display: none;
  }
  .parte4 {
    display: none;
  }

  .hrlay {
    display: none;
  }
  #footer {
    color: #3e9661;
    font-size: 16px;
    margin: 10% 10% 7% 5%;
    width: 340px;
  }
  .footer1 {
    margin: 3%;
    width: 250px;
    padding: 5%;
  }
  .footer2 {
    margin: 3%;
    width: 250px;
    padding: 5%;
  }
  .TituloPerfil {
    font-size: 20px;
  }
}
</style>
