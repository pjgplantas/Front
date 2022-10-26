<template>
  <div>
    <b-container class="login-page" fluid>
      <b-row class="rowPerfil">
        <b-col>
          <b-col>
            <b-form class="formp" v-if="show">
              <div class="parte1">
                <div class="imgperfil">
                  <img
                    class="rounded-circle mt-5"
                    width="150px"
                    src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                  />
                </div>
                <div class="NomeCliente">
                  {{ user.username }}
                </div>
                <div class="EmailCliente">{{ user.email }}</div>
              </div>
              <div class="parte2"><hr class="HrForm" /></div>
              <div class="parte3">
                <div class="TituloPerfil">Configurações do Perfil</div>
                <div class="divs">Primeiro Nome</div>
                <b-form-group id="input-group-2">
                  <b-form-input id="input-2" v-model="form.first_name" required>
                  </b-form-input>
                </b-form-group>
                <div class="divs">Sobrenome:</div>
                <b-form-group id="input-group-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.last_name"
                    required
                  ></b-form-input>
                </b-form-group>
                <div class="divs">Username:</div>
                <b-form-group id="input-group-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.username"
                    required
                  ></b-form-input>
                </b-form-group>
                <div class="divs">Senha:</div>
                <b-form-group id="input-group-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.password"
                    required
                  ></b-form-input>
                </b-form-group>
                <div class="divs">Confirmar Senha:</div>
                <b-form-group id="input-group-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.password_confirmation"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-button
                  class="btnperfil"
                  type="submit"
                  @click.prevent="editarPerfil"
                  >Alterar perfil</b-button
                >
              </div>
            </b-form>
          </b-col>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "perfil",
  data() {
    return {
      form: {
        username: "",
        last_name: "",
        first_name: "",
        password: "",
        password_confirmation: "",
      },
      show: true,
    };
  },
  async created() {
    console.log(this.user.id);
    await this.getPerfil();
  },
  methods: {
    async editarPerfil() {
      try {
        await this.$patch(`/auth/${this.user.id}/`, this.form);
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

.imgperfil {
  display: flex;
  width: 150px;
  margin-left: 7%;
}

.formp {
  border-radius: 2px;
  height: 90vh;
  width: 150vh;
  margin-top: 3%;
  align-content: center;
  background-color: white;
  display: flex;
}
.rowPerfil {
  margin: 0 0 0 10%;
}
.login-page {
  width: 1905px;
  height: 1000px;
  background: #09b388; /* fallback for old browsers */
  background: -webkit-(
    to top,
    #001510,
    #00bf8f
  ); /* Chrome 10-25, Safari 5.1-6 */
}
.parte1 {
  margin: 1% 0 0 13%;
  flex-grow: 1;
}
.parte3 {
  margin: 4% 4% 4% 5%;
  flex-grow: 1;
  width: 20%;
}

.NomeCliente {
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 600;
  margin-left:60px;
}

.EmailCliente {
  color: black;
  opacity: 50%;
  font-size: 19px;
  margin-left:40px;
}
.hr {
  margin-top: 0%;
}
.HrForm {
  border: 1px solid #808080;
  height: 86vh;
  margin-right: 40px;
}

.TituloPerfil {
  font-family: "Roboto", sans-serif;
  font-size: 1.5rem;
  color: black;
  padding: 0px;
  text-align: center;
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
  width: 170px;
  font-size: 23px;
  font-weight: bold;
  border-radius: 10px;
  margin: 5% 0 0 25%;
  font-family: "Roboto", sans-serif;
}
.btnperfil:hover{
  opacity: 80%;
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
