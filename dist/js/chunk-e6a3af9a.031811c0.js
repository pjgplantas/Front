(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e6a3af9a"],{"950e":function(t,a,s){},baaf:function(t,a,s){"use strict";s("950e")},e9c2:function(t,a,s){"use strict";s.r(a);var o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("b-container",{staticClass:"produto",attrs:{fluid:""}},[s("b-row",{staticClass:"row"},[s("b-col",{staticClass:"col1"},[s("img",{attrs:{src:t.planta.imagem.url,alt:""}})]),s("b-col",{staticClass:"col2"},[s("h1",{attrs:{id:"h1Nome"}},[t._v(" "+t._s(t.planta.nome)+" ")]),s("br"),s("br"),s("h4",[s("div",{staticClass:"descricao"},[t._v(" "+t._s(t.planta.desc)+" ")])]),s("div",{staticClass:"subdescricao"},[t._v(" Por R$"+t._s(t.planta.preco)+" a vista "),s("br"),t._v(" ou 3x de R$ 19,50. "),s("br"),s("p"),t._v(" Quantidade: "),s("b-form-spinbutton",{attrs:{id:"demo-sb",min:"1",max:"10",inline:""},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1),s("h3",{attrs:{id:"TotalValue"}},[t._v(" TOTAL:"+t._s(t.planta.preco)+" "),s("b-button",{staticClass:"btncad",attrs:{type:"submit",href:"/dadoscompra"}},[t._v("Finalizar")])],1)])],1),s("div",{staticClass:"Comentarios"},[s("h1",[s("div",{staticClass:"TituloComentario"},[t._v("Comentários")])]),s("div",{staticClass:"FazerComentario"},[s("b-form-textarea",{staticClass:"TextoComentario",attrs:{id:"textarea-formatter","max-rows":"5","no-resize":"",placeholder:"Digite seu comentario"},model:{value:t.comentario.texto,callback:function(a){t.$set(t.comentario,"texto",a)},expression:"comentario.texto"}}),s("b-button",{staticClass:"BotaoComentario",attrs:{type:"submit"},on:{click:t.postComentarios}},[t._v("Comentar")])],1),t._l(t.planta.comentarios,(function(a){return s("div",{key:a.id,staticClass:"Respostas"},[t._v(" "+t._s(a.usuario)+" : "+t._s(a.texto)+" ")])}))],2)],1)},e=[],i=s("2f62"),n={name:"Comentarios",data(){return{value:1,comentario:{texto:"",usuario:0,planta:0},planta:{},texto:{}}},methods:{async getComentarios(){this.comentarios=await this.$get("comentarios/")},async postComentarios(){this.comentario.usuario=this.user.id,this.comentario.planta=this.planta.id,this.comentarios=await this.$post("comentarios/",this.comentario),await this.getPlanta(this.planta.id)},async deleteComentarios(){try{await this.$delete(`/plantas/${this.planta.id}/comentarios`,this.comentario),alert("Planta removida com sucesso!")}catch{alert("Erro")}},async getPlanta(t){const a=await this.$get(`plantas/${t}/`);this.planta=a}},computed:{...Object(i["c"])("auth",["loggedIn","user","id"])},async created(){await this.getPlanta(this.$route.params.id)}},r=n,c=(s("baaf"),s("2877")),l=Object(c["a"])(r,o,e,!1,null,null,null);a["default"]=l.exports}}]);
//# sourceMappingURL=chunk-e6a3af9a.031811c0.js.map