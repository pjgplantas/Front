<template>
  <b-container>
    <div class="title">DIGITE SEUS DADOS PARA COMPRA</div>
    <div class="pdt">
      <img
        src="https://http2.mlstatic.com/D_NQ_NP_963647-MLB48382302651_112021-W.webp"
        alt=""
        width="250px"
        height="250px"
        class="imgplanta"
      />
      <br />
      <div class="NomePDT">
        Areca Bambu <br />
        <div class="PreçoPDT">Total R$ 45,00</div>
        <hr class="PDThr" />
      </div>
    </div>
    <b-row>
      <b-col class="col1">
        <div class="subtitle">Dados Pessoais</div>
        <div class="subsubtitle">CPF:</div>
        <div>
          <b-form-input
            placeholder="Ex: 000.000.000-00"
            class="form-control cpf-mask"
            v-model="pedido.cpf"
            maxlength="14"
          ></b-form-input>
        </div>
        <div class="subsubtitle">RG:</div>
        <div>
          <b-form-input
            placeholder="Ex: 0.000.000"
            class="form-control rg-mask"
            v-model="pedido.rg"
          ></b-form-input>
        </div>
        <div class="subsubtitle">Endereço:</div>
        <div>
          <b-form-input
            v-model="pedido.endereco"
            placeholder="Insira seu endereço:"
          ></b-form-input>
        </div>
        <div class="subsubtitle">Complemento:</div>
        <div>
          <b-form-input
            v-model="pedido.complemento"
            placeholder="Insira seu complemento"
          ></b-form-input>
        </div>
      </b-col>
      <b-col class="col2">
        <div class="subtitle">Dados de Compra</div>
        <div class="subsubtitle">Escolha a forma de pagamento</div>
        <b-form-select class="mb-3 drop1" aria-placeholder="Forma de Pagamento">
          <b-form-select-option
            value="cartão"
            v-model="pedido.cartao"
            @click="cartão = !cartão"
            >Cartão de Crédito</b-form-select-option
          >
          <b-form-select-option v-model="pedido.pix" value="pix"
            >Pix</b-form-select-option
          >
          <b-form-select-option v-model="pedido.boleto1" value="boleto"
            >Boleto</b-form-select-option
          >
        </b-form-select>
        <div class="subsubtitle" v-if="cartão">Numero do Cartão</div>
        <div>
          <b-form-input
            v-if="cartão"
            placeholder="Digite o numero do cartão"
            v-model="cartao.numero"
          ></b-form-input>
        </div>
        <div class="subsubtitle" v-if="cartão">CVV</div>
        <div>
          <b-form-input
            v-if="cartão"
            type="number"
            placeholder="Digite o CVV"
            maxlength="3"
            minlength="3"
            v-model="cartao.cvv"
          ></b-form-input>
        </div>
        <div class="subsubtitle" v-if="cartão">Validade</div>
        <b-form-input
          v-if="cartão"
          placeholder="Digite a validade Ex: 12/29"
          v-model="cartao.validade"
          maxlength="5"
        ></b-form-input>
        <div class="subsubtitle" v-if="cartão">Nome do titular</div>
        <div>
          <b-form-input
            v-if="cartão"
            v-model="cartao.nometitular"
            placeholder="Digite o nome do titular"
          ></b-form-input>
        </div>
        <br />
        <div class="imagens" v-if="cartão">
          <img
            src="../assets/images/cartao/1200px-Hipercard_logo 1.png"
            alt=""
          />
          <img src="../assets/images/cartao/nu-icon 1.png" alt="" />
          <img src="../assets/images/cartao/2018.01.25-13.39 1.png" alt="" />
          <img src="../assets/images/cartao/MBR1uLe0_400x400 1.png" alt="" />
          <img src="../assets/images/cartao/unnamed 1.png" alt="" />
          <img src="../assets/images/cartao/1200x600wa 1.png" alt="" />
        </div>
        <b-button class="buttoncartao" @click="postCartao"
          >Adicionar cartão</b-button
        >
      </b-col>
      <b-button class="button">FINALIZAR</b-button>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "cartaos",
  data() {
    return {
      cartão: true,
      cartao: {
        numero: "",
        cvv: "",
        validade: "",
        nometitular: "",
        usuario: 0,
      },
      pedido: {
        valor: "",
        cpf: "",
        rg: "",
        endereco: "",
        complemento: "",
        boleto1: null,
        cartao1: null,
        pix: null,
        usuario: 0,
      },
    };
  },
  methods: {
    async postCartao() {
      this.cartao.usuario = this.user.id;
      this.cartaos = await this.$post("cartaos/", this.cartao);
      alert("Cartão adicionado");
    },
  },
  computed: {
    ...mapState("auth", ["loggedIn", "user", "id"]),
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
body {
  background-color: rgba(255, 255, 255, 0.95);
}

.row {
  margin-top: 4rem;
}

.title {
  font-family: "Jomolhari";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 40px;
  color: #067c5f;
  padding: 3px;
  text-align: center;
  text-transform: uppercase;
}
.subtitle {
  font-family: "Jomolhari";
  font-style: normal;
  font-weight: 300;
  font-size: 26px;
  line-height: 32px;
  padding: 10px;
  text-align: center;
  white-space: nowrap;
}
.drop1 {
  background: rgb(23, 184, 144);
  background: #0d9f7a;
  border: 0;
  font-size: 19px;
  color: white;
  text-align: center;
  width: 350px;
}
.drop2,
.drop3 {
  background: #0d9f7a;
  color: white;
  border: 0;
  font-size: 17px;
  text-align: center;
  width: 150px;
  margin: 10px;
}
input[type="number" i] {
  -moz-appearance: textfield;
}

option {
  color: white;
  background: #0d9f7a;
}
.btn-secondary.dropdown-toggle {
  background: rgb(23, 184, 144);
  background: linear-gradient(
    90deg,
    rgba(23, 184, 144, 1) 0%,
    rgba(1, 94, 57, 1) 100%
  );
  border: 0;
  font-size: 15px;
  color: white;
}
.btn-secondary.dropdown-toggle:hover {
  color: white;
  opacity: 80%;
}
.dropdown-menu {
  background: #e6e6e6;
  color: #067c5f;
  border-radius: 3px;
  font-family: "Jomolhari";
  line-height: 19px;
}
.dropdown-item:hover {
  background: rgba(62, 150, 97, 0.95);
  color: white;
}
.form-control {
  background: rgb(243, 247, 245);
  border-style: none none solid none;
  border-color: rgba(62, 150, 97, 0.95);
  width: 400px;
}
.col1 {
  margin: 0% 10% 0 0;
  display: grid;
}
.col2 {
  margin: 7px 0 0 10%;
  display: grid;
}
.imagens {
  padding: 10px;
}
.imagens img {
  padding: 8px;
}

.button {
  justify-content: center;
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
  margin: 5% 10% 0 10%;
  width: 190px;
  height: 50px;
}
.button:hover {
  background: #ff691e;
  opacity: 80%;
  color: white;
}
.buttoncartao {
  justify-content: center;
  border: 0;
  border-radius: 6px;
  font-weight: bold;
  font-style: normal;
  font-family: "Roboto", sans-serif;
  color: #fff;
  background: rgba(62, 150, 97, 0.95);
  text-transform: uppercase;
  cursor: pointer;
  outline: 0;
  box-sizing: border-box;
  transition-property: all;
  transition-duration: 0.3s;
  text-decoration: none;
  font-size: 15px;
  margin: 5% 10% 0 25%;
  width: 190px;
  height: 50px;
}

.pdt {
  background: whitesmoke;
  margin: 3% 0 0 0;
  display: flex;
  padding: 2px;
  white-space: nowrap;
  border-color: rgba(0, 0, 0, 0.95);
  border: 200px;
}
.NomePDT {
  color: #067c5f;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  text-align: left;
  font-size: 28px;
  font-weight: bold;
  white-space: nowrap;
  margin: 1% 0% 0 2%;
}
.PreçoPDT {
  color: black;
  margin: 10% 0 0 0;
  font-size: 20px;
  font-style: italic;
}
.subsubtitle {
  font-weight: bold;
  font-size: 17px;
  padding: 5px;
}
ul.dropdown-menu.show {
  background-color: white;
  height: 100px;
  width: 200px;
  display: block;
}

@media (max-width: 844px) {
  .col1 {
    flex-grow: 1;
    width: 280px;
    margin: 0 0% 0 5%;
  }
  .col2 {
    margin: 7px 0 0 8%;
    display: grid;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -10px;
    margin-left: -15px;
  }
  .subtitle {
    text-align: center;
    margin: 0% 0 0 -7%;
  }
  .subsubtitle {
    width: 280px;
  }
  .button {
    margin: 0 0 10% 30%;
  }
  .imagens {
    margin-bottom: 10%;
  }
  .pdt {
    flex-direction: column;
    align-items: center;
    width: 280px;
    align-content: center;
    margin: 3% 0 0 11.5%;
  }
  .imgplanta {
    margin: 10px;
  }
  .container {
    padding: 10px;
  }
  .form-control {
    width: 310px;
  }
  .btn-group {
    padding: 5px;
  }
  #footer {
    margin: 0 0 0 0;
    display: flex;
    justify-content: center;
  }
  .footer1 {
    margin: 5% 0 0 0;
    text-align: center;
  }
  .footer2 {
    text-align: center;
    margin: 0% 22% 0 22%;
    width: 150px;
    padding: 5%;
  }
  .drop2 {
    margin-left: 2px;
  }
  .imagens img {
    padding: 5px;
  }
  .drop1 {
    width: 310px;
  }
}
</style>
