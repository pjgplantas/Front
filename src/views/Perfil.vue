<template>
  <div>
    <b-container class="login-page" fluid>
      <b-row align-v="center">
        <b-col></b-col>
        <b-col>
          <b-form
            class="formp border border-success"
            @submit.prevent="login"
            @reset="onReset"
            v-if="show"
          >
            <div class="dlogin">PERFIL</div>
            <div class="divs">Primeiro Nome:</div>
            <b-form-group id="input-group-2">
              <b-form-input id="input-2" v-model="form.first_name" required>
              </b-form-input>
            </b-form-group>
            <div class="divs">Sobrenome:</div>
            <b-form-group id="input-group-2">
              <b-form-input
                id="input-2"
                type="name"
                v-model="form.last_name"
                required
              ></b-form-input>
            </b-form-group>
            <div class="divs">Email:</div>
            <b-form-group id="input-group-2">
              <b-form-input
                id="input-2"
                v-model="form.email"
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
            <b-button class="btnp" type="submit" @click.prevent="editarPerfil"
              >Salvar</b-button
            >
          </b-form>
        </b-col>
        <b-col> </b-col>
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
        email: "",
        username: "",
        last_name: "",
        first_name: "",
      },
      show: true,
    };
  },
  methods: {
    async editarPerfil() {
      try {
        await this.$put("auth/", this.form);
      } catch {
        alert("Erro");
      }
    },
  },
  computed: {
    ...mapState("auth", ["loggedIn", "user"]),
  },
};
</script>

<style>
.dlogin {
  font-size: 2rem;
  color: black;
  padding: 20px;
  align-content: center;
}
.divs {
  margin-right: 520px;
  color: black;
}
.btnp {
  background-color: #3e9661;
  border-color: #3e9661;
  padding: 10px;
  margin-top: 5px;
  color: white;
  width: 120px;
  font-size: 18px;
  opacity: 63%;
}
.formp {
  background-color: white;
  border-color: #3e9661;
  border-radius: 8px;
  padding: 60px;
  margin-top: 70px;
  height: 720px;
  width: 75vh;
  align-content: center;
}
.forms {
  color: black;
  margin-right: 480px;
}
#input-group-2 {
  margin-right: 420px;
  color: black;
}
#input-2 {
  width: 60vh;
  background-color: whitesmoke;
}
</style>
