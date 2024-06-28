import{d as I,$ as q,a as _,q as G,U as P,r as F,t as W,a0 as z,x as m,y as N,W as E,F as o,Q,V as J,C as u,b as t,I as v,z as L,E as U,M as R,a2 as K}from"./index-cdcf547c.js";import{u as j}from"./use-menu-b48628b9.js";import{A as y,B as H}from"./BaseCommon-4bb1467d.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";const Y=I({components:{DeleteOutlined:q},setup(){j().onSelectedKeys(["admin-users"]);const a=_(G().user.roleClaimDetail),l="http://localhost:9000",k=P(),d=F({optionsLevelManage:[],optionsRole:[],optionsStatus:[]}),w=_({}),b=_(),s=F({userName:"",fullName:"",email:"",passWord:"",rePassWord:"",levelManage:"",roleID:"",status:"",urlAvatar:"",fileAvatar:null,rmavatar:"yes",change_password:!1}),c=_(null),C=()=>{history.length>1?history.go(-1):this.$router.push("/")},p=e=>{const n=e.target.files[0];this.formState.avatarFile=n},i={},f={labelCol:{span:4},wrapperCol:{span:14}},h=()=>{b.value.resetFields()},g=()=>{y.GetOptionsLevelManage().then(e=>{d.optionsLevelManage=e.data,s.levelManage=e.data[0].value}).catch(e=>{console.log(e)})},r=(e,n)=>n.label.toLowerCase().indexOf(e.toLowerCase())>=0,O=()=>{y.GetOptionsRole().then(e=>{d.optionsRole=e.data,s.roleID=e.data[0].value}).catch(e=>{console.log(e)})},B=(e,n)=>n.label.toLowerCase().indexOf(e.toLowerCase())>=0,A=()=>{y.GetOptionsStatus().then(e=>{d.optionsStatus=e.data,s.status=e.data[0].value}).catch(e=>{console.log(e)})},M=(e,n)=>n.label.toLowerCase().indexOf(e.toLowerCase())>=0,$=JSON.parse(localStorage.getItem("token")),D=()=>{const e=new FormData;e.append("address",s.userName),e.append("phonenumber",s.fullName),e.append("name",s.email),e.append("image","a.png"),e.append("storetypeid",1),console.log("formState"),console.log(e,"formState"),Q.post(`${l}/api/v1/management/info/insert`,e,{headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${$}`}}).then(n=>{J.success("Tạo mới thành công!"),k.push({name:"admin-users"})}).catch(n=>{console.log(n)})};W(()=>{h(),g(),A(),O()});const T=e=>{var n=H.GetBase64(e.target.files[0]);n.then(S=>{s.urlAvatar=S,s.rmavatar="no"}).catch(S=>{console.log(S)})},V=()=>{s.urlAvatar=null,s.rmavatar="yes"};return{...z(d),authStoreClaim:a,errors:w,formState:s,fileAvatar:c,formRef:b,rules:i,layout:f,resetForm:h,handleFileUpload:p,getOptionsLevelManage:g,getOptionsStatus:A,getOptionsRole:O,filterOptionLevelManage:r,filterOptionRole:B,filterOptionStatus:M,users:d,createUsers:D,handleChangeUpload:T,handleRemoveAvatar:V,goBack:C}}}),Z={class:"row mb-3"},x={class:"col-12"},ee=u("h1",null,null,-1),ae={class:"col-12 col-sm-12 mb-3"},te={class:"row"},oe={class:"col-12 col-sm-9"},se={key:0,class:"text-danger"},le={key:0,class:"text-danger"},ne=u("span",null,"Quay lại",-1);function re(a,l,k,d,w,b){const s=m("router-link"),c=m("a-breadcrumb-item"),C=m("a-breadcrumb"),p=m("a-input"),i=m("a-form-item"),f=m("a-button"),h=m("a-form"),g=m("a-card");return N(),E(g,{style:{width:"100%"}},{default:o(()=>[u("div",Z,[u("div",x,[t(C,null,{default:o(()=>[t(c,null,{default:o(()=>[t(s,{to:{name:"admin-dashboards"}},{default:o(()=>[v("Trang chủ")]),_:1})]),_:1}),t(c,null,{default:o(()=>[t(s,{to:{name:"admin-users"}},{default:o(()=>[v("Info store")]),_:1})]),_:1}),t(c,null,{default:o(()=>[v("Thêm mới")]),_:1})]),_:1}),ee]),u("div",ae,[t(h,K({class:"p-3",name:"custom-validation",ref:"formRef",model:a.formState,rules:a.rules},a.layout,{onFinish:l[4]||(l[4]=r=>a.createUsers())}),{default:o(()=>[u("div",te,[u("div",oe,[t(i,{ref:"userName",label:"address",required:"",name:"userName"},{default:o(()=>[t(p,{value:a.formState.userName,"onUpdate:value":l[0]||(l[0]=r=>a.formState.userName=r)},null,8,["value"]),a.errors&&a.errors.UserName?(N(),L("small",se,U(a.errors.UserName[0]),1)):R("",!0)]),_:1},512),t(i,{ref:"fullName",label:"phonenumber",required:"",name:"fullName"},{default:o(()=>[t(p,{value:a.formState.fullName,"onUpdate:value":l[1]||(l[1]=r=>a.formState.fullName=r)},null,8,["value"]),a.errors&&a.errors.FullName?(N(),L("small",le,U(a.errors.FullName[0]),1)):R("",!0)]),_:1},512),t(i,{ref:"email",label:"name",required:"",name:"email"},{default:o(()=>[t(p,{value:a.formState.email,"onUpdate:value":l[2]||(l[2]=r=>a.formState.email=r)},null,8,["value"])]),_:1},512),t(i,{ref:"urlAvatar",label:"avatar",name:"urlAvatar"},{default:o(()=>[u("input",{type:"file",onChange:l[3]||(l[3]=(...r)=>a.handleFileUpload&&a.handleFileUpload(...r))},null,32)]),_:1},512),t(i,{"wrapper-col":{span:14,offset:4}},{default:o(()=>[t(f,{onClick:a.goBack,class:"me-0 me-sm-2 mb-3 mb-sm-0"},{default:o(()=>[ne]),_:1},8,["onClick"]),t(f,{class:"me-0 me-sm-2 mb-3 mb-sm-0 bg-info text-light",onClick:a.resetForm},{default:o(()=>[v("Reset")]),_:1},8,["onClick"]),t(f,{type:"primary","html-type":"submit",class:"bg-success"},{default:o(()=>[v("Lưu")]),_:1})]),_:1})])])]),_:1},16,["model","rules"])])])]),_:1})}const ce=X(Y,[["render",re]]);export{ce as default};
