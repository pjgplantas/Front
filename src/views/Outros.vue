<template>
  <b-container class="login-page" fluid>
    <b-row class="rowPerfil">
      <b-col>
        <b-form class="formCadastro" @submit.prevent="login" v-if="show">
          <div class="superuser">
            <h2>Cadastro superuser</h2>
          </div>
          <div class="subTitle">Prmeiro Nome:</div>
          <b-form-group id="input-group-1">
            <b-form-input
              v-model="form.first_name"
              type="text"
              style="
                background: white;
                border-style: none none solid none;
                border-color: rgba(62, 150, 97, 0.95);
              "
              placeholder="Insira seu primeiro nome"
            >
            </b-form-input>
          </b-form-group>
          <div class="emsen">Sobrenome:</div>
          <b-form-group id="input-group-1">
            <b-form-input
              type="text"
              v-model="form.last_name"
              required
              style="
                background: white;
                border-style: none none solid none;
                border-color: rgba(62, 150, 97, 0.95);
              "
              placeholder="Insira sua senha"
            ></b-form-input>
          </b-form-group>
          <div class="emsen" style="white-space: nowrap">Email:</div>
          <b-form-input
            type="email"
            v-model="form.email"
            required
            style="
              background: white;
              border-style: none none solid none;
              border-color: rgba(62, 150, 97, 0.95);
            "
            placeholder="Insira seu email"
          ></b-form-input>
          <div class="emsen" style="white-space: nowrap">Usuario:</div>
          <b-form-group id="input-group-1">
            <b-form-input
              type="text"
              v-model="form.username"
              required
              style="
                background: white;
                border-style: none none solid none;
                border-color: rgba(62, 150, 97, 0.95);
              "
              placeholder="Insira sua senha"
            ></b-form-input>
          </b-form-group>
          <div class="emsen" style="white-space: nowrap">Senha:</div>
          <b-form-group id="input-group-1">
            <b-form-input
              type="password"
              v-model="form.password"
              required
              style="
                background: white;
                border-style: none none solid none;
                border-color: rgba(62, 150, 97, 0.95);
              "
              placeholder="Insira sua senha"
            ></b-form-input>
          </b-form-group>
          <div class="emsen" style="white-space: nowrap">Confirmar Senha:</div>
          <b-form-group id="input-group-1">
            <b-form-input
              type="password"
              v-model="form.password_confirmation"
              required
              style="
                background: white;
                border-style: none none solid none;
                border-color: rgba(62, 150, 97, 0.95);
              "
              placeholder="Insira sua senha"
            ></b-form-input>
          </b-form-group>
          <b-form-checkbox
            id="checkbox-1"
            v-model="form.is_superuser"
            value="true"
            unchecked-value="false"
          >
            Superuser
          </b-form-checkbox>
          <div class="buttons">
            <b-button
              class="btnCadastro"
              type="submit"
              @click.prevent="register"
              >Cadastrar</b-button
            >
          </div>
        </b-form>
      </b-col>
      <b-col>
        <b-form class="formCadastro" @submit.prevent="login" v-if="show">
          <div class="superuser">
            <h2>Cadastrar Pix</h2>
          </div>
          <div class="subTitle">Banco:</div>
          <b-form-group id="input-group-1">
            <b-form-input
              v-model="pix.banco"
              type="text"
              style="
                background: white;
                border-style: none none solid none;
                border-color: rgba(62, 150, 97, 0.95);
              "
              placeholder="Insira seu primeiro nome"
            >
            </b-form-input>
          </b-form-group>
          <div class="emsen">CNPJ:</div>
          <b-form-group id="input-group-1">
            <b-form-input
              type="text"
              v-model="pix.cnpj"
              required
              style="
                background: white;
                border-style: none none solid none;
                border-color: rgba(62, 150, 97, 0.95);
              "
              placeholder="Insira sua senha"
            ></b-form-input>
          </b-form-group>
          <div class="emsen" style="white-space: nowrap">Email:</div>
          <b-form-input
            type="email"
            v-model="pix.email"
            required
            style="
              background: white;
              border-style: none none solid none;
              border-color: rgba(62, 150, 97, 0.95);
            "
            placeholder="Insira seu email"
          ></b-form-input>
          <div class="emsen" style="white-space: nowrap">Usuario:</div>
          <div class="buttons">
            <b-button class="btnCadastro" type="submit" @click="pixRegister"
              >Cadastrar</b-button
            >
          </div>
        </b-form>
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
        email: "",
        password: "",
        password_confirmation: "",
        username: "",
        last_name: "",
        first_name: "",
        is_superuser: "",
      },
      pix: {
        banco: "",
        cnpj: "",
        email: "",
      },
      show: true,
    };
  },

  methods: {
    async register() {
      try {
        await this.$post("auth/", this.form);
        this.$router.push({ name: "Login" });
        alert("Cadastro de Admin feito com sucesso");
      } catch {
        alert("Erro");
      }
    },
    async pixRegister() {
      try {
        await this.$post("pixs/", this.pix);
        alert("Pix criado");
      } catch {
        alert("erro");
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
.superuser {
  margin-top: 30px;
  padding: 10px;
  text-align: center;
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
.formCadastro {
  border-radius: 8px;
  align-items: center;
  margin-left: 100px;
  margin-top: 10px;
}

.login-page {
  width: 100%;
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
