<template>
  <b-container class="container">
    <div class="boleto">
      <img id="boleto" src="../assets/images/Boleto.jpg" alt="" />
      <b-button @click="exportToPDF">Imprimir</b-button>
    </div>
  </b-container>
</template>

<script>
import html2pdf from "html2pdf.js";

export default {
  name: "app",
  methods: {
    exportToPDF() {
      html2pdf(document.getElementById("boleto"), {
        margin: 1,
        filename: "boleto.pdf",
      });
    },
  },
};
</script>
<style>
.container {
  width: 100%;
}
img {
  width: 100%;
}

.boleto {
  display: flex;
  flex-direction: row;
}
.boleto button {
  height: 50px;
  width: 200px;
  margin: 25% 0 0 15%;
  background: rgb(23, 184, 144);
  background: linear-gradient(
    90deg,
    rgba(23, 184, 144, 1) 0%,
    rgba(1, 94, 57, 1) 100%
  );
  justify-content: center;
  border: 0px solid transparent;
  border-radius: 6px;
  font-weight: 500;
  font-style: normal;
  font-family: "Roboto", sans-serif;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  outline: 0;
  box-sizing: border-box;
  transition-property: all;
  transition-duration: 0.3s;
  text-decoration: none;
  font-size: 20px;
}
</style>
