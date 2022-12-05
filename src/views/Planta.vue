<template>
  <b-container class="login-page" fluid>
    <b-row class="rowPerfil">
      <b-col>
        <b-form class="formp" v-if="show">
          <div class="adicionarPlanta">Adicionar Planta</div>
          <div class="divs">Imagem</div>
          <input type="file" @change="uploadFile" ref="file" />
          <div class="divs">Descrição</div>
          <b-form-group id="input-group-2">
            <b-form-input id="input-2" ref="desc"> </b-form-input>
          </b-form-group>
          <hr />
          <b-button @click="submitFile">Adicionar imagem</b-button>
          <div class="divs">Imagens</div>
          <input type="file" @change="uploadFiles" ref="file" />
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
          <b-button class="btnperfil" type="submit" @click.prevent="submitFiles"
            >Adicionar Planta</b-button
          >
        </b-form>
      </b-col>
      <b-col>
        <div class="plantas">
          <span>Plantas</span>
          <PlantaComp
            v-for="planta in plantas"
            :key="planta.id"
            :planta="planta"
          />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
import PlantaComp from "@/components/PlantaComp.vue";
import axios from "axios";
export default {
  name: "planta",
  components: { PlantaComp },
  data() {
    return {
      form: {
        tipo_planta: "",
        preco: "",
        nome: "",
        desc: "",
        imagem_attachment_key: "",
        comentarios: "",
      },

      imagem: {},
      show: true,
      planta: {},
      plantas: [],
    };
  },
  async created() {
    await this.getPlanta();
    await this.getImagens();
  },

  methods: {
    async getPlanta() {
      this.plantas = await this.$get("plantas/");
    },
    async getImagens() {
      this.imagens = await this.$get("api/media/imagesUpload/");
    },

    async adicionarPlanta() {
      try {
        await this.$post(`/plantas/`, this.form);
        alert("Planta adicionada com sucesso!");
      } catch {
        alert("Erro");
      }
    },
    uploadFile() {
      this.Images = this.$refs.file.files[0];
      this.Desc = this.$refs.desc.Images;
    },
    submitFile() {
      const formData = new FormData();
      formData.append("file", this.Images);
      formData.append("description", this.Desc);
      const headers = { "Content-Type": "multipart/form-data" };
      axios
        .post("http://jaummonster.pythonanywhere.com/api/media/imagesUpload/", formData, {
          headers,
        })
        .then((res) => {
          res.data.files; // binary representation of the file
          res.status; // HTTP status
        });
    },
    uploadFiles() {
      this.Images = this.$refs.file.files[0];
    },
    async submitFiles() {
      const formData = new FormData();
      formData.append("file", this.Images);
      const headers = { "Content-Type": "multipart/form-data" };
      const { data } = await axios.post(
        "https://jaummonster.pythonanywhere.com/api/media/imagesUpload/",
        formData,
        { headers }
      );
      this.form.imagem_attachment_key = data.attachment_key;
      await axios.post("https://jaummonster.pythonanywhere.com/plantas/", this.form);
      alert("Planta adicionada com sucesso!");
      this.$router.push({ name: "Home" });
    },

    computed: {
      ...mapState("auth", ["loggedIn", "user", "id"]),
    },
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
.formularioAlterar {
  display: flex;
  flex-direction: row;
}
.plantas .form-control {
  width: 340px;
  flex-wrap: wrap;
}
.tipoPlanta {
  flex-wrap: nowrap;
}
.custom-select {
  width: 70%;
  margin-left: 20px;
  border-style: none none solid none;
  border-color: rgba(62, 150, 97, 0.95);
}
.login-page {
  width: 100%;
}
.card-body {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  white-space: nowrap;
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
  background: linear-gradient(7deg, #931010 0%, #cd1b1b 66%);
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
  background: #1d86d6;
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
.btn-secondary {
  color: #fff;
  background-color: #20935e;
  border-color: #6c757d;
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
  background: linear-gradient(7deg, #1d583b 0%, #41a17b 66%);
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
  white-space: nowrap;
}
.plantas span {
  font-family: "Roboto", sans-serif;
  font-size: 1.7rem;
  color: black;
  margin-top: 10%;
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
.formularioAlterar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 10px;
}

@media (max-width: 844px) {
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-left: 0.2%;
  }
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
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
    margin: 105vh 10% 7% 5%;
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
  .card.titlep.mb-1 {
    height: 250px;
    width: 850px;
  }
}
</style>
