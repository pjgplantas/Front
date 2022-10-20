<template>
  <b-container fluid class="produto">
    <b-row class="row">
      <b-col class="col1">
        <img :src="planta.imagem.url" alt="" />
      </b-col>
      <b-col class="col2">
        <h1 id="h1Nome">
          {{ planta.nome }}
        </h1>
        <br />
        <br />
        <h4>
          <div class="descricao">
            {{ planta.desc }}
          </div>
        </h4>
        <div class="subdescricao">
          Por R${{ planta.preco }} a vista <br />
          ou 3x de R$ 19,50. <br />
          <p></p>
          Quantidade:
          <b-form-spinbutton
            id="demo-sb"
            v-model="value"
            min="1"
            max="10"
            inline
          ></b-form-spinbutton>
        </div>
        <h3 id="TotalValue">
          TOTAL:{{ planta.preco }}
          <b-button class="btncad" type="submit" href="/dadoscompra"
            >Finalizar</b-button
          >
        </h3>
      </b-col>
    </b-row>
    <div class="Comentarios">
      <h1><div class="TituloComentario">Comentários</div></h1>
      <div class="FazerComentario">
        <b-form-textarea
          class="TextoComentario"
          id="textarea-formatter"
          max-rows="5"
          no-resize
          v-model="comentario.texto"
          placeholder="Digite seu comentario"
        >
        </b-form-textarea>
        <b-button
          class="BotaoComentario"
          type="submit"
          @click.prevent="postComentarios"
          >Comentar</b-button
        >
      </div>
      <div
        class="Respostas"
        v-for="comentario in planta.comentarios"
        :key="comentario.id"
      >
        {{ comentario.usuario }} :
        {{ comentario.texto }}
      </div>
    </div>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Comentarios",
  data() {
    return {
      value: 1,
      //
      comentario: {
        texto: "",
        usuario: 0,
        planta: 0,
      },
      planta: {},
      texto: {},
    };
  },
  async created() {
    await this.getComentarios();
    console.log("oioioiio");
    console.log(this.$route.params.id);
    console.log(this.user.id);
    console.log(this.getPerfil);
    await this.getPlanta(this.$route.params.id);
  },
  methods: {
    async getComentarios() {
      this.comentarios = await this.$get("comentarios/");
    },
    async postComentarios() {
      this.comentario.usuario = this.user.id;
      this.comentario.planta = this.planta.id;
      this.comentarios = await this.$post("comentarios/", this.comentario);
      await this.getComentarios();
    },
    async getPlanta(id) {
      const res = await this.$get(`plantas/${id}/`);
      this.planta = res;
    },
  },
  computed: {
    ...mapState("auth", ["loggedIn", "user", "id"]),
  },
};
</script>

<style>
.dprincipal {
  background: rgb(21, 213, 165);
  background: linear-gradient(
    7deg,
    rgba(21, 213, 165, 1) 0%,
    rgba(54, 131, 100, 1) 66%
  );
}
.value {
  color: #000000;
  font-family: "Gill Sans", "Gill Sans MT", "Trebuchet MS", sans-serif;
  font-style: initial;
}

.produto {
  padding: 30px;
  font-family: "Jomolhari", serif;
}
.Comentarios {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: #ffffff;
  border-radius: 4px;
  margin-top: 30px;
  padding-top: 30px;
  padding-bottom: 30px;
}
.col1 {
  border-radius: 4px;
  padding: 1px;
  display: flex;
  width: 50%;
  background: white;
  height: 80vh;
}
.col2 {
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  background: white;
  height: 80vh;
}
h4 {
  color: #0f3406;
  text-align: center;
  font-size: 30px;
}
#h1Nome {
  color: #0f3406;
  text-align: center;
  font-size: 4rem;
  font-weight: 500;
  margin: 0% 0 0 9%;
}
.descricao {
  text-align: left;
  color: #0f3406;
  padding: 20px;
}
.subdescricao {
  text-align: left;
  color: #3e9661;
  opacity: 80%;
  font-size: 22px;
  padding: 25px;
}
.Total {
  margin: 0 0 0 5%;
  padding: 10px;
}
.btncad {
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-weight: bold;
  font-style: normal;
  font-family: "Roboto", sans-serif;
  color: #fff;
  background: #ff691e;
  text-transform: uppercase;
  cursor: pointer;
  outline: 0;
  box-sizing: border-box;
  transition-property: all;
  transition-duration: 0.3s;
  text-decoration: none;
  font-size: 20px;
  margin: 0% 0 0 15%;
  width: 190px;
  height: 50px;
}
.btncad:hover {
  background: #ff691e;
  opacity: 80%;
  color: white;
}
img {
  height: 85%;
  border-radius: 5px 0px 0px 5px;
}
#TotalValue {
  font-size: 40px;
  display: flex;
  margin: 10% 0 0 0;
}
.TituloComentario {
  font-family: "Jomolhari";
  text-align: center;
}
.FazerComentario {
  display: flex;
  justify-content: center;
}
.TextoComentario {
  margin: 2% 0 0 4%;
  background: rgba(226, 255, 238, 0.95);
  box-shadow: 0px 4px 4px rgba(35, 184, 94, 0.63);
  margin-bottom: 0 0% 0 5%;
}
.BotaoComentario {
  width: 300px;
  height: 50px;
  background: rgba(62, 150, 97, 0.95);
  border-radius: 5px;
  margin: 2% 25% 0 3%;
  font-size: 1.7rem;
  font-weight: 500;
  padding: 5px;
  border-color: rgba(62, 150, 97, 0.95);
}
.BotaoComentario:hover {
  opacity: 80%;
  background: rgba(62, 150, 97, 0.95);
  border-color: rgba(62, 150, 97, 0.95);
}
.Respostas {
  color: #000000;
  display: flex;
  font-size: 20px;
  margin: 4% 0 0 5%;
  padding-top: 10px;
  background: rgba(228, 255, 239, 0.95);
  width: 80vh;
  height: 50px;
  white-space: nowrap;
  padding: 10px;
  font-size: 23px;
  font-weight: 500;
  font-style: normal;
  font-family: "Roboto", sans-serif;
}

.hrlay {
  border-color: #ffffff;
}
#footer {
  margin: 0% 0 0 20%;
  background: linear-gradient(rgba(54, 131, 100, 1) 66%);
  color: white;
}

@media (max-width: 390px) {
  .row {
    border: 0;
    width: 350px;
    height: 120vh;
    margin: 4% 5%;
    flex-direction: column;
  }
  .produto {
    padding: 1%;
  }
  .col1 {
    width: 360px;
    box-shadow: none;
    border-style: solid none solid none;
    border-color: #0f3406;
    margin: 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
  }
  .navpr {
    box-shadow: none;
  }
  img {
    width: 300px;
    height: 300px;
    margin-left: 7%;
  }
  .col2 {
    width: 390px;
    box-shadow: none;
    height: 100px;
    margin: 0;
    padding: 0;
    margin: 0%;
    flex-grow: 2;
  }
  .dprincipal {
    width: 390px;
  }
  .nome {
    text-align: center;
    font-size: 30px;
  }
  .descricao {
    font-size: 20px;
  }
  .btncad {
    margin: 9% 0 0 35%;
  }
  #footer {
    color: #3e9661;
    font-size: 16px;
    margin: 5% 0 1% 0;
  }
  .footer1 {
    margin: 5%;
    width: 270px;
    padding: 5%;
  }
  .footer2 {
    margin: 5%;
    width: 270px;
    padding: 5%;
  }
  .container {
    width: 0%;
  }
  .Comentarios {
    border: 0;
    width: 350px;
    height: 150vh;
    margin: 4% 5%;
    flex-direction: column;
  }
  .TituloComentario {
    text-align: center;
    font-size: 30px;
  }
  .FazerComentario {
    display: grid;
    width: 367px;
    justify-content: flex-start;
    flex-grow: 1;
  }
  .TextoComentario {
    width: 250px;
    height: 20px;
  }
  #textarea {
    resize: none;
  }
  .Respostas {
    height: 300px;
    flex-grow: 1;
  }
  .aResposta {
    display: grid;
    font-size: 10px;
  }
  .BotaoComentario {
    width: 80px;
    height: 40px;
  }
}
</style>
