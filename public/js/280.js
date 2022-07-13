"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[280],{8850:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(8918);const n={required:function(e){return!!e||a.Z.t("validation.required")},email:function(e){return new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/).test(e)||a.Z.t("validation.wrongEmail")}}},4280:(e,t,r)=>{r.r(t),r.d(t,{default:()=>c});var a=r(629),n=r(8850);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const i={name:"Registr",data:function(){return{show:!1,show1:!1,form:{name:"",surname:"",patronymic:"",email:"",password:"",password_confirmation:"",phone:"+380"},rules:n.Z}},methods:s(s({},(0,a.nv)("authStore",["registerAsync","getCurrentUserAsync"])),{},{register:function(){var e=this;this.$refs.form.validate()&&(this.form.password_confirmation=this.form.password,this.registerAsync(this.form).then((function(t){t.result?(e.$swal({icon:"success",title:e.$t("auth.".concat(t.message),{name:t.name}),showConfirmButton:!1,timer:2e3}),e.$router.push({path:"/"}),e.getCurrentUserAsync()):e.$swal({icon:"error",title:e.$t("auth.".concat(t.message),{error:t.errors}),showConfirmButton:!1,timer:5e3})})))}})};const c=(0,r(1900).Z)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{ref:"form"},[r("v-card",{staticClass:"m-1 p-1 my-1 ",attrs:{width:"500px"}},[r("v-card-title",{staticClass:"text-center justify-center py-6 gen-ft-style"},[r("span",{staticClass:"display-0"},[e._v(e._s(e.$t("app.reg")))])]),e._v(" "),r("v-card-text",[r("v-text-field",{attrs:{rules:[e.rules.required],maxlength:"50",counter:"",outlined:"",clearable:"",label:e.$t("app.name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),r("v-text-field",{attrs:{rules:[e.rules.required],maxlength:"50",counter:"",outlined:"",clearable:"",label:e.$t("app.surname")},model:{value:e.form.surname,callback:function(t){e.$set(e.form,"surname",t)},expression:"form.surname"}}),e._v(" "),r("v-text-field",{attrs:{rules:[e.rules.required],maxlength:"50",counter:"",outlined:"",clearable:"",label:e.$t("app.patronymic")},model:{value:e.form.patronymic,callback:function(t){e.$set(e.form,"patronymic",t)},expression:"form.patronymic"}}),e._v(" "),r("v-text-field",{attrs:{rules:[e.rules.required,e.rules.email],maxlength:"50",counter:"",outlined:"",clearable:"",type:"email",label:e.$t("app.email")},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),r("v-text-field",{attrs:{rules:[e.rules.required],outlined:"","append-icon":e.show?"mdi-eye":"mdi-eye-off",type:e.show?"text":"password",counter:"",label:e.$t("app.password")},on:{"click:append":function(t){e.show=!e.show}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e._v(" "),r("v-text-field",{attrs:{rules:[e.rules.required],outlined:"",clearable:"",counter:"",maxlength:"13",label:e.$t("app.phone")},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.register}},[r("v-icon",[e._v("mdi-check-outline")])],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);