(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-004ca1fb"],{1222:function(t,a,e){},"14d9":function(t,a,e){"use strict";var r=e("23e7"),i=e("7b0b"),s=e("07fa"),n=e("3a34"),o=e("3511"),l=e("d039"),p=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),c=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:p||c},{push:function(t){var a=i(this),e=s(a),r=arguments.length;o(e+r);for(var l=0;l<r;l++)a[e]=arguments[l],e++;return n(a,e),e}})},3511:function(t,a){var e=TypeError,r=9007199254740991;t.exports=function(t){if(t>r)throw e("Maximum allowed index exceeded");return t}},"3a34":function(t,a,e){"use strict";var r=e("83ab"),i=e("e8b5"),s=TypeError,n=Object.getOwnPropertyDescriptor,o=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=o?function(t,a){if(i(t)&&!n(t,"length").writable)throw s("Cannot set read only .length");return t.length=a}:function(t,a){return t.length=a}},5368:function(t,a,e){"use strict";e("9c7e")},"709d":function(t,a,e){"use strict";e("1222")},"9c7e":function(t,a,e){},a699:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{staticClass:"login-page",attrs:{fluid:""}},[e("b-row",{staticClass:"rowPerfil"},[e("b-col",[t.show?e("b-form",{staticClass:"formp"},[e("div",{staticClass:"adicionarPlanta"},[t._v("Adicionar Planta")]),e("div",{staticClass:"divs"},[t._v("Imagem")]),e("input",{ref:"file",attrs:{type:"file"},on:{change:t.uploadFile}}),e("div",{staticClass:"divs"},[t._v("Descrição")]),e("b-form-group",{attrs:{id:"input-group-2"}},[e("b-form-input",{ref:"desc",attrs:{id:"input-2"}})],1),e("hr"),e("b-button",{on:{click:t.submitFile}},[t._v("Adicionar imagem")]),e("div",{staticClass:"divs"},[t._v("Imagens")]),e("input",{ref:"file",attrs:{type:"file"},on:{change:t.uploadFiles}}),e("div",{staticClass:"divs"},[t._v("Tipo Planta")]),e("b-form-group",{attrs:{id:"input-group-2"}},[e("b-form-input",{attrs:{id:"input-2",required:""},model:{value:t.form.tipo_planta,callback:function(a){t.$set(t.form,"tipo_planta",a)},expression:"form.tipo_planta"}})],1),e("div",{staticClass:"divs"},[t._v("Preço:")]),e("b-form-group",{attrs:{id:"input-group-2"}},[e("b-form-input",{attrs:{id:"input-2",required:""},model:{value:t.form.preco,callback:function(a){t.$set(t.form,"preco",a)},expression:"form.preco"}})],1),e("div",{staticClass:"divs"},[t._v("Nome:")]),e("b-form-group",{attrs:{id:"input-group-2"}},[e("b-form-input",{attrs:{id:"input-2",required:""},model:{value:t.form.nome,callback:function(a){t.$set(t.form,"nome",a)},expression:"form.nome"}})],1),e("div",{staticClass:"divs"},[t._v("Descrição:")]),e("b-form-group",{attrs:{id:"input-group-2"}},[e("b-form-input",{attrs:{id:"input-2",required:""},model:{value:t.form.desc,callback:function(a){t.$set(t.form,"desc",a)},expression:"form.desc"}})],1),e("b-button",{staticClass:"btnperfil",attrs:{type:"submit"},on:{click:function(a){return a.preventDefault(),t.submitFiles.apply(null,arguments)}}},[t._v("Adicionar Planta")])],1):t._e()],1),e("b-col",[e("div",{staticClass:"plantas"},[e("span",[t._v("Plantas")]),t._l(t.plantas,(function(t){return e("PlantaComp",{key:t.id,attrs:{planta:t}})}))],2)])],1)],1)},i=[],s=(e("14d9"),e("2f62")),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-card",{staticClass:"titlep mb-1",staticStyle:{height:"600px",width:"850px"},attrs:{"img-alt":"Image","img-top":"",tag:"article"}},[e("div",{staticClass:"titulo5"},[t._v(t._s(t.planta.nome)+" - ID: "+t._s(t.planta.id))]),e("div",{staticClass:"buttons"},[e("b-button",{staticClass:"btn1",attrs:{to:t.getPlantaUrl(t.planta.id),variant:"primary"}},[t._v("Ir para a planta")]),e("b-button",{staticClass:"btn2",on:{click:t.deletarPlanta}},[e("b-icon",{staticClass:"b-0",attrs:{icon:"trash"}}),t._v(" Excluir >")],1),e("b-button",{staticClass:"btn3",on:{click:function(a){return a.preventDefault(),t.submitFile.apply(null,arguments)}}},[t._v(" Alterar Planta")])],1),e("span"),t._v(" "),e("span"),e("div",{staticClass:"formulario"},[e("b-form",{staticClass:"formularioAlterar"},[e("div",{staticClass:"tipoPlanta"},[t._v("Tipo Planta")]),e("b-form-group",{attrs:{id:"input-group-2"}},[e("b-form-input",{attrs:{id:"input-2",required:""},model:{value:t.formAlterar.tipo_planta,callback:function(a){t.$set(t.formAlterar,"tipo_planta",a)},expression:"formAlterar.tipo_planta"}})],1),e("div",[t._v("Preço:")]),e("b-form-group",{attrs:{id:"input-group-2"}},[e("b-form-input",{attrs:{id:"input-2",required:""},model:{value:t.formAlterar.preco,callback:function(a){t.$set(t.formAlterar,"preco",a)},expression:"formAlterar.preco"}})],1),e("div",[t._v("Nome:")]),e("b-form-group",{attrs:{id:"input-group-2"}},[e("b-form-input",{attrs:{id:"input-2",required:""},model:{value:t.formAlterar.nome,callback:function(a){t.$set(t.formAlterar,"nome",a)},expression:"formAlterar.nome"}})],1),e("br"),e("div",[t._v("Descrição:")]),e("b-form-group",{attrs:{id:"input-group-2"}},[e("b-form-input",{attrs:{id:"input-2",required:""},model:{value:t.formAlterar.desc,callback:function(a){t.$set(t.formAlterar,"desc",a)},expression:"formAlterar.desc"}})],1),e("br"),e("div",[t._v("Imagem:")]),e("input",{ref:"file",attrs:{type:"file"},on:{change:t.uploadFile}}),e("div",[t._v("Comentarios:")]),t._l(t.planta.comentarios,(function(a){return e("div",{key:a.id,staticClass:"Respostas"},[e("h4",[t._v(t._s(a.usuario)+" : "+t._s(a.texto))])])}))],2)],1)])},o=[],l=e("bc3a"),p=e.n(l),c={props:["planta"],data(){return{formAlterar:{tipo_planta:"",preco:"",nome:"",desc:"",imagem_attachment_key:"",comentarios:""},imagem:{},imagens:[]}},async created(){this.getImagens(),this.getPlanta()},methods:{async deletarPlanta(){try{await this.$delete(`/plantas/${this.planta.id}/`,this.planta),alert("Planta removida com sucesso!"),this.$router.push({name:"Home"})}catch{alert("Erro")}},async alteraPlanta(){try{this.formAlterar.planta=this.planta.id,await this.$patch(`/plantas/${this.planta.id}/`,this.formAlterar),alert("Planta editada com sucesso")}catch{alert("Erro")}},async getComentarios(){this.comentarios=await this.$get("comentarios/")},getPlantaUrl(t){return"/produto/"+t},async getImagens(){this.imagens=await this.$get("api/media/imagesUpload/")},uploadFile(){this.Images=this.$refs.file.files[0]},async submitFile(){const t=new FormData;t.append("file",this.Images);const a={"Content-Type":"multipart/form-data"},{data:e}=await p.a.post("https://jaummonster.pythonanywhere.com/api/media/imagesUpload/",t,{headers:a});this.formAlterar.imagem_attachment_key=e.attachment_key,await this.$put(`plantas/${this.planta.id}/`,this.formAlterar),this.$router.push({name:"Home"})},async getPlanta(){this.formAlterar.nome=this.planta.nome,this.formAlterar.preco=this.planta.preco,this.formAlterar.tipo_planta=this.planta.tipo_planta,this.formAlterar.desc=this.planta.desc,this.formAlterar.comentarios=this.planta.comentarios,await this.$get(`plantas/${this.planta.id}/`,this.formAlterar)},async deleteComentarios(){try{await this.$delete(`/comentarios/${this.comentarios.id}/`,this.planta),alert("Comentario removido com sucesso!")}catch{alert("Erro")}},computed:{...Object(s["c"])("auth",["loggedIn","user","id"])}}},m=c,u=(e("5368"),e("2877")),d=Object(u["a"])(m,n,o,!1,null,null,null),f=d.exports,h={name:"planta",components:{PlantaComp:f},data(){return{form:{tipo_planta:"",preco:"",nome:"",desc:"",imagem_attachment_key:"",comentarios:""},imagem:{},show:!0,planta:{},plantas:[]}},async created(){await this.getPlanta(),await this.getImagens()},methods:{async getPlanta(){this.plantas=await this.$get("plantas/")},async getImagens(){this.imagens=await this.$get("api/media/imagesUpload/")},async adicionarPlanta(){try{await this.$post("/plantas/",this.form),alert("Planta adicionada com sucesso!")}catch{alert("Erro")}},uploadFile(){this.Images=this.$refs.file.files[0],this.Desc=this.$refs.desc.Images},submitFile(){const t=new FormData;t.append("file",this.Images),t.append("description",this.Desc);const a={"Content-Type":"multipart/form-data"};p.a.post("https://jaummonster.pythonanywhere.com/api/media/imagesUpload/",t,{headers:a}).then(t=>{t.data.files,t.status})},uploadFiles(){this.Images=this.$refs.file.files[0]},async submitFiles(){const t=new FormData;t.append("file",this.Images);const a={"Content-Type":"multipart/form-data"},{data:e}=await p.a.post("https://jaummonster.pythonanywhere.com/api/media/imagesUpload/",t,{headers:a});this.form.imagem_attachment_key=e.attachment_key,await p.a.post("https://jaummonster.pythonanywhere.com/plantas/",this.form),alert("Planta adicionada com sucesso!"),this.$router.push({name:"Home"})},computed:{...Object(s["c"])("auth",["loggedIn","user","id"])}}},g=h,b=(e("709d"),Object(u["a"])(g,r,i,!1,null,null,null));a["default"]=b.exports}}]);
//# sourceMappingURL=chunk-004ca1fb.b5fcafd0.js.map