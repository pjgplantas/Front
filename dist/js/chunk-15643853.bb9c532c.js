(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15643853"],{"0172":function(e,t,r){},"14d9":function(e,t,r){"use strict";var o=r("23e7"),a=r("7b0b"),s=r("07fa"),n=r("3a34"),i=r("3511"),l=r("d039"),c=l((function(){return 4294967297!==[].push.call({length:4294967296},1)})),u=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}}();o({target:"Array",proto:!0,arity:1,forced:c||u},{push:function(e){var t=a(this),r=s(t),o=arguments.length;i(r+o);for(var l=0;l<o;l++)t[r]=arguments[l],r++;return n(t,r),r}})},3511:function(e,t){var r=TypeError,o=9007199254740991;e.exports=function(e){if(e>o)throw r("Maximum allowed index exceeded");return e}},"3a34":function(e,t,r){"use strict";var o=r("83ab"),a=r("e8b5"),s=TypeError,n=Object.getOwnPropertyDescriptor,i=o&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=i?function(e,t){if(a(e)&&!n(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},"695d":function(e,t,r){"use strict";r("0172")},b399:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"login-page",attrs:{fluid:""}},[r("b-row",{staticClass:"rowPerfil"},[r("b-col",[e.show?r("b-form",{staticClass:"formCadastro",on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[r("div",{staticClass:"superuser"},[r("h2",[e._v("Cadastro superuser")])]),r("div",{staticClass:"subTitle"},[e._v("Prmeiro Nome:")]),r("b-form-group",{attrs:{id:"input-group-1"}},[r("b-form-input",{staticStyle:{background:"white","border-style":"none none solid none","border-color":"rgba(62, 150, 97, 0.95)"},attrs:{type:"text",placeholder:"Insira seu primeiro nome"},model:{value:e.form.first_name,callback:function(t){e.$set(e.form,"first_name",t)},expression:"form.first_name"}})],1),r("div",{staticClass:"emsen"},[e._v("Sobrenome:")]),r("b-form-group",{attrs:{id:"input-group-1"}},[r("b-form-input",{staticStyle:{background:"white","border-style":"none none solid none","border-color":"rgba(62, 150, 97, 0.95)"},attrs:{type:"text",required:"",placeholder:"Insira sua senha"},model:{value:e.form.last_name,callback:function(t){e.$set(e.form,"last_name",t)},expression:"form.last_name"}})],1),r("div",{staticClass:"emsen",staticStyle:{"white-space":"nowrap"}},[e._v("Email:")]),r("b-form-input",{staticStyle:{background:"white","border-style":"none none solid none","border-color":"rgba(62, 150, 97, 0.95)"},attrs:{type:"email",required:"",placeholder:"Insira seu email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),r("div",{staticClass:"emsen",staticStyle:{"white-space":"nowrap"}},[e._v("Usuario:")]),r("b-form-group",{attrs:{id:"input-group-1"}},[r("b-form-input",{staticStyle:{background:"white","border-style":"none none solid none","border-color":"rgba(62, 150, 97, 0.95)"},attrs:{type:"text",required:"",placeholder:"Insira sua senha"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("div",{staticClass:"emsen",staticStyle:{"white-space":"nowrap"}},[e._v("Senha:")]),r("b-form-group",{attrs:{id:"input-group-1"}},[r("b-form-input",{staticStyle:{background:"white","border-style":"none none solid none","border-color":"rgba(62, 150, 97, 0.95)"},attrs:{type:"password",required:"",placeholder:"Insira sua senha"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("div",{staticClass:"emsen",staticStyle:{"white-space":"nowrap"}},[e._v("Confirmar Senha:")]),r("b-form-group",{attrs:{id:"input-group-1"}},[r("b-form-input",{staticStyle:{background:"white","border-style":"none none solid none","border-color":"rgba(62, 150, 97, 0.95)"},attrs:{type:"password",required:"",placeholder:"Insira sua senha"},model:{value:e.form.password_confirmation,callback:function(t){e.$set(e.form,"password_confirmation",t)},expression:"form.password_confirmation"}})],1),r("b-form-checkbox",{attrs:{id:"checkbox-1",value:"true","unchecked-value":"false"},model:{value:e.form.is_superuser,callback:function(t){e.$set(e.form,"is_superuser",t)},expression:"form.is_superuser"}},[e._v(" Superuser ")]),r("div",{staticClass:"buttons"},[r("b-button",{staticClass:"btnCadastro",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.register.apply(null,arguments)}}},[e._v("Cadastrar")])],1)],1):e._e()],1),r("b-col",{staticClass:"col2"},[e.show?r("b-form",{staticClass:"formCadastro",on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[r("div",{staticClass:"superuser"},[r("h2",[e._v("Cadastrar Pix")])]),r("div",{staticClass:"subTitle"},[e._v("Banco:")]),r("b-form-group",{attrs:{id:"input-group-1"}},[r("b-form-input",{staticStyle:{background:"white","border-style":"none none solid none","border-color":"rgba(62, 150, 97, 0.95)"},attrs:{type:"text",placeholder:"Insira seu primeiro nome"},model:{value:e.pix.banco,callback:function(t){e.$set(e.pix,"banco",t)},expression:"pix.banco"}})],1),r("div",{staticClass:"emsen"},[e._v("CNPJ:")]),r("b-form-group",{attrs:{id:"input-group-1"}},[r("b-form-input",{staticStyle:{background:"white","border-style":"none none solid none","border-color":"rgba(62, 150, 97, 0.95)"},attrs:{type:"text",required:"",placeholder:"Insira sua senha"},model:{value:e.pix.cnpj,callback:function(t){e.$set(e.pix,"cnpj",t)},expression:"pix.cnpj"}})],1),r("div",{staticClass:"emsen",staticStyle:{"white-space":"nowrap"}},[e._v("Email:")]),r("b-form-input",{staticStyle:{background:"white","border-style":"none none solid none","border-color":"rgba(62, 150, 97, 0.95)"},attrs:{type:"email",required:"",placeholder:"Insira seu email"},model:{value:e.pix.email,callback:function(t){e.$set(e.pix,"email",t)},expression:"pix.email"}}),r("div",{staticClass:"buttons"},[r("b-button",{staticClass:"btnCadastro",attrs:{type:"submit"},on:{click:e.pixRegister}},[e._v("Cadastrar")])],1)],1):e._e()],1)],1)],1)},a=[],s=(r("14d9"),r("2f62")),n={name:"perfil",data(){return{form:{email:"",password:"",password_confirmation:"",username:"",last_name:"",first_name:"",is_superuser:""},pix:{banco:"",cnpj:"",email:""},show:!0}},methods:{async register(){try{await this.$post("auth/",this.form),this.$router.push({name:"Login"}),alert("Cadastro de Admin feito com sucesso")}catch{alert("Erro")}},async pixRegister(){try{await this.$post("pixs/",this.pix),alert("Pix criado")}catch{alert("erro")}}},computed:{...Object(s["c"])("auth",["loggedIn","user","id"])}},i=n,l=(r("695d"),r("2877")),c=Object(l["a"])(i,o,a,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-15643853.bb9c532c.js.map