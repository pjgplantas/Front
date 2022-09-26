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
            maxlength="14"
          ></b-form-input>
        </div>
        <div class="subsubtitle">RG:</div>
        <div>
          <b-form-input
            placeholder="Ex: 0.000.000"
            class="form-control rg-mask"
          ></b-form-input>
        </div>
        <div class="subsubtitle">Endereço:</div>
        <div>
          <b-form-input placeholder="Insira seu endereço:"></b-form-input>
        </div>
        <div class="subsubtitle">Complemento:</div>
        <div>
          <b-form-input placeholder="Insira seu complemento"></b-form-input>
        </div>
      </b-col>
      <b-col class="col2">
        <div class="subtitle">Dados de Compra</div>
        <div class="subsubtitle">Escolha a forma de pagamento</div>
        <b-form-select class="mb-3 drop1" aria-placeholder="Forma de Pagamento">
          <b-form-select-option value="1"
            >Cartão de Crédito</b-form-select-option
          >
          <b-form-select-option value="1">Pix</b-form-select-option>
          <b-form-select-option value="1">Boleto</b-form-select-option>
        </b-form-select>
        <div class="subsubtitle">Nome do titular</div>
        <div>
          <b-form-input placeholder="Digite o nome do titular"></b-form-input>
        </div>
        <div class="subsubtitle">Numero do Cartão</div>
        <div>
          <b-form-input placeholder="Digite o numero do cartão"></b-form-input>
        </div>
        <div class="subsubtitle">CVV</div>
        <div>
          <b-form-input placeholder="Digite o CVV"></b-form-input>
        </div>
        <div class="subsubtitle">Validade</div>
        <div>
          <b-form-select class="mb-3 drop2">
            <b-form-select-option value="1">Janeiro</b-form-select-option>
            <b-form-select-option value="1">Fevereiro</b-form-select-option>
            <b-form-select-option value="1">Março</b-form-select-option>
            <b-form-select-option value="1">Abril</b-form-select-option>
            <b-form-select-option value="1">Maio</b-form-select-option>
            <b-form-select-option value="1">Junho</b-form-select-option>
            <b-form-select-option value="1">Julho</b-form-select-option>
            <b-form-select-option value="1">Agosto</b-form-select-option>
            <b-form-select-option value="1">Setembro</b-form-select-option>
            <b-form-select-option value="1">Outubro</b-form-select-option>
            <b-form-select-option value="1">Novembro</b-form-select-option>
            <b-form-select-option value="1">Dezembro</b-form-select-option>
          </b-form-select>
          <b-form-select class="mb-3 drop3">
            <b-form-select-option value="1">2020</b-form-select-option>
            <b-form-select-option value="1">2021</b-form-select-option>
            <b-form-select-option value="1">2022</b-form-select-option>
            <b-form-select-option value="1">2023</b-form-select-option>
            <b-form-select-option value="1">2024</b-form-select-option>
            <b-form-select-option value="1">2025</b-form-select-option>
            <b-form-select-option value="1">2026</b-form-select-option>
            <b-form-select-option value="1">2027</b-form-select-option>
            <b-form-select-option value="1">2028</b-form-select-option>
          </b-form-select>
        </div>
        <div class="imagens">
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
      </b-col>
      <b-button class="button">FINALIZAR</b-button>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      mes: "",
      Ano: "",
      Numero: "",
    };
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
  padding: 5px;
  text-align: center;
  margin: 30px;
  text-transform: uppercase;
}
.subtitle {
  font-family: "Jomolhari";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 32px;
  padding: 15px;
  margin: 0 0 0 25%;
}
.drop1 {
  background: rgb(23, 184, 144);
  background: linear-gradient(
    90deg,
    rgba(23, 184, 144, 1) 0%,
    rgba(1, 94, 57, 1) 100%
  );
  border: 0;
  font-size: 19px;
  color: white;
  text-align: center;
}
.drop2,
.drop3 {
  background: rgb(23, 184, 144);
  background: linear-gradient(
    90deg,
    rgba(23, 184, 144, 1) 0%,
    rgba(1, 94, 57, 1) 100%
  );
  border: 0;
  font-size: 17px;
  text-align: center;
  width: 110px;
  margin: 10px;
}
.drop2::before {
  background: rgb(23, 184, 144);
  background: linear-gradient(
    90deg,
    rgba(23, 184, 144, 1) 0%,
    rgba(1, 94, 57, 1) 100%
  );
}
option {
  color: #e6e6e6;
  background: rgb(23, 184, 144);
  background: linear-gradient(
    90deg,
    rgba(23, 184, 144, 1) 0%,
    rgba(1, 94, 57, 1) 100%
  );
}
.btn-secondary.dropdown-toggle {
  background: rgb(23, 184, 144);
  background: linear-gradient(
    90deg,
    rgba(23, 184, 144, 1) 0%,
    rgba(1, 94, 57, 1) 100%
  );
  color: black;
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
  margin: 3% 0 0 0;
  display: grid;
}
.col2 {
  margin: 0 0 0 20%;
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
  margin: 1% 0 0 0%;
  width: 190px;
  height: 50px;
}
.button:hover {
  background: #ff691e;
  opacity: 80%;
  color: white;
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
  }
  .col2 {
    margin: 0 10% 0 5%;
    flex-grow: 2;
  }
  .row {
    margin-top: 0px;
  }
  .subtitle {
    text-align: center;
    margin: 0%;
  }
  .subsubtitle {
    width: 280px;
  }
  .button {
    margin: 2% 0 10% 30%;
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
    width: 340px;
  }
  .btn-group {
    padding: 5px;
  }
  #footer {
    margin: 0 0 0 5%;
    display: flex;
  }
  .footer1 {
    margin: 5% 0 0 0;
    text-align: center;
  }
  .footer2 {
    margin: 0 20% 0 0;
    text-align: center;
  }
}
</style>
