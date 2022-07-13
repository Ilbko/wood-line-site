"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[110],{3110:(e,t,o)=>{o.r(t),o.d(t,{default:()=>c});var r=o(629);function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var i="adminPanel.userManagement";const l={name:"UserFormDialog",data:function(){return{trans_prefix:i,show:!1,dialog:!1,confirmDialog:!1,hasItem:!1,form:{id:"",name:"",surname:"",patronymic:"",password:"",email:"",phone:"+380",role:1,getCallBackResponse:!1}}},mounted:function(){void 0!==this.item&&(this.form.id=this.item.id,this.form.name=this.item.name,this.form.surname=this.item.surname,this.form.patronymic=this.item.patronymic,this.form.email=this.item.email,this.form.phone=this.item.phone,this.form.role=this.item.roleId,this.form.getCallBackResponse=this.item.getCallBackResponse,this.hasItem=!0)},computed:s(s({},(0,r.Se)("userManagementStore",["roles"])),{},{disableRunAction:function(){var e=!0;return""!==this.form.name&&null!==this.form.name&&""!==this.form.surname&&null!==this.form.surname&&""!==this.form.patronymic&&null!==this.form.patronymic&&""!==this.form.email&&null!==this.form.email&&""!==this.form.phone&&null!==this.form.phone&&13===this.form.phone.length&&(this.hasItem||""!==this.form.password&&null!==this.form.password)&&(e=!1),e}}),props:{item:Object,title:String},methods:s(s({},(0,r.nv)("userManagementStore",["editUserAsync","getUsersAsync","addUserAsync"])),{},{runAction:function(){this.hasItem?this.edit():this.saveNewItem(),this.dialog=!1},edit:function(){var e=this;this.editUserAsync(this.form).then((function(t){t?e.$swal({icon:"success",showConfirmButton:!1,timer:2e3}):e.$swal({icon:"error",title:e.$t("".concat(i,".errorEditUser")),showConfirmButton:!1,timer:5e3}),e.getUsersAsync()}))},saveNewItem:function(){var e=this;this.addUserAsync(this.form).then((function(t){t?e.$swal({icon:"success",showConfirmButton:!1,timer:2e3}):e.$swal({icon:"error",title:e.$t("".concat(i,".errorAddUser")),showConfirmButton:!1,timer:5e3}),e.getUsersAsync()}))}})};const c=(0,o(1900).Z)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-row",{attrs:{justify:"center"}},[o("v-dialog",{attrs:{persistent:"",width:e.$vuetify.breakpoint.mdAndUp?"30%":"100%"},on:{"click:outside":function(t){e.dialog=!1}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,n=t.attrs;return[e.hasItem?o("v-btn",e._g(e._b({attrs:{color:"green darken-1",text:""}},"v-btn",n,!1),r),[o("v-icon",[e._v("edit")])],1):o("v-btn",e._g(e._b({attrs:{color:"blue darken-1",text:""}},"v-btn",n,!1),r),[o("v-icon",[e._v("add")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e._v(" "),o("v-card",[o("v-card-title",{staticClass:"text-h5"},[o("span",{staticClass:"display-0"},[e._v(e._s(e.title))])]),e._v(" "),o("v-card-text",[o("v-text-field",{attrs:{maxlength:"50",counter:"",outlined:"",clearable:"",label:e.$t("app.name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),o("v-text-field",{attrs:{maxlength:"50",counter:"",outlined:"",clearable:"",label:e.$t("app.surname")},model:{value:e.form.surname,callback:function(t){e.$set(e.form,"surname",t)},expression:"form.surname"}}),e._v(" "),o("v-text-field",{attrs:{maxlength:"50",counter:"",outlined:"",clearable:"",label:e.$t("app.patronymic")},model:{value:e.form.patronymic,callback:function(t){e.$set(e.form,"patronymic",t)},expression:"form.patronymic"}}),e._v(" "),o("v-text-field",{directives:[{name:"show",rawName:"v-show",value:!e.hasItem,expression:"!hasItem"}],attrs:{outlined:"","append-icon":e.show?"mdi-eye":"mdi-eye-off",type:e.show?"text":"password",counter:"",label:e.$t("app.password")},on:{"click:append":function(t){e.show=!e.show}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e._v(" "),o("v-text-field",{attrs:{maxlength:"50",counter:"",outlined:"",clearable:"",type:"email",label:e.$t("app.email")},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),o("v-text-field",{attrs:{outlined:"",clearable:"",counter:"",maxlength:"13",label:e.$t("app.phone")},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),e._v(" "),o("v-select",{attrs:{items:e.roles,label:e.$t("app.role"),"item-text":"name","item-value":"id",dense:"",outlined:""},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}}),e._v(" "),o("v-checkbox",{attrs:{label:e.$t(e.trans_prefix+".tableHeaders.getCallBackResponse")},model:{value:e.form.getCallBackResponse,callback:function(t){e.$set(e.form,"getCallBackResponse",t)},expression:"form.getCallBackResponse"}})],1),e._v(" "),o("v-card-actions",[o("v-spacer"),e._v(" "),o("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[o("v-icon",[e._v("close")])],1),e._v(" "),o("v-btn",{attrs:{disabled:e.disableRunAction,color:"green darken-1",text:""},on:{click:e.runAction}},[o("v-icon",[e._v("done")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);