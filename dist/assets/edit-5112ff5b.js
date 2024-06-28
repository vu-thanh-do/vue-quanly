import{d as T,$ as F,a as k,q as j,U as E,s as G,r as I,t as z,a0 as H,x as i,y as c,W as U,F as s,V as y,C as n,b as t,I as v,z as L,M as g,E as K,a2 as Q}from"./index-cdcf547c.js";import{u as Y}from"./use-menu-b48628b9.js";import{A as O,B as J}from"./BaseCommon-4bb1467d.js";import{A as D}from"./ApiUser-6badb945.js";import{_ as X}from"./_plugin-vue_export-helper-c27b6911.js";const Z=T({components:{DeleteOutlined:F},setup(){Y().onSelectedKeys(["admin-users"]);const e=k(j().user.roleClaimDetail),l=E(),R=G(),f=I({optionsLevelManage:[],optionsRole:[],optionsStatus:[]}),_=k({}),w=k(),o=I({id:"",userName:"",fullName:"",email:"",passWord:"",rePassWord:"",levelManage:"",roleID:"",status:"",urlAvatar:"",fileAvatar:null,rmavatar:"no",change_password:!1}),p=k(null),C={userName:[{required:!0,message:"Tài khoản không để trống.",trigger:"change"}],fullName:[{required:!0,message:"Họ tên không để trống.",trigger:"change"}],email:[{required:!0,message:"email không để trống.",trigger:"change"}],passWord:[{required:!0,validator:async(a,d)=>d===""?Promise.reject("Please input the password"):(o.rePassWord!==""&&w.value.validateFields("rePassWord"),Promise.resolve()),trigger:"change"}],rePassWord:[{validator:async(a,d)=>d===""?Promise.reject("Please input the password again"):d!==o.passWord?Promise.reject("Two inputs don't match!"):Promise.resolve(),trigger:"change"}]},N={labelCol:{span:4},wrapperCol:{span:14}},m=()=>{O.GetOptionsLevelManage().then(a=>{f.optionsLevelManage=a.data,o.levelManage=a.data[0].value}).catch(a=>{console.log(a)})},u=(a,d)=>d.label.toLowerCase().indexOf(a.toLowerCase())>=0,A=()=>{O.GetOptionsRole().then(a=>{f.optionsRole=a.data,o.roleID=a.data[0].value}).catch(a=>{console.log(a)})},h=(a,d)=>d.label.toLowerCase().indexOf(a.toLowerCase())>=0,S=()=>{O.GetOptionsStatus().then(a=>{f.optionsStatus=a.data,o.status=a.data[0].value}).catch(a=>{console.log(a)})},M=(a,d)=>d.label.toLowerCase().indexOf(a.toLowerCase())>=0,b=()=>{D.GetItemById(R.params.id).then(a=>{o.id=a.data.id,o.userName=a.data.userName,o.fullName=a.data.fullName,o.email=a.data.email,o.levelManage=`${a.data.levelManage}`,o.roleID=`${a.data.roleID}`,o.status=`${a.data.status}`,o.urlAvatar=`${a.data.urlAvatar}`,o.urlAvatar=="null"&&(o.rmavatar="yes")}).catch(a=>{y.error(`Lỗi! ${a.response.statusText}`)})},r=()=>{history.length>1?history.go(-1):this.$router.push("/")},$=()=>{o.fileAvatar=p.value.files[0],D.EditItemById(o).then(a=>{a.status==200?(y.success("Cập nhật thành công!"),l.push({name:"admin-users"})):y.error("Lỗi! Thực hiện tác vụ không thành công.")}).catch(a=>{y.error(a.message),a.response.data.hasOwnProperty("errors")?_.value=a.response.data.errors:_.value=a.response.data})};z(()=>{m(),S(),A(),b()});const q=a=>{var d=J.GetBase64(a.target.files[0]);d.then(P=>{o.urlAvatar=P,o.rmavatar="no"}).catch(P=>{console.log(P)})},V=()=>{o.urlAvatar=null,o.rmavatar="yes"};return{...H(f),authStoreClaim:e,errors:_,formState:o,fileAvatar:p,formRef:w,rules:C,layout:N,filterOptionLevelManage:u,filterOptionRole:h,filterOptionStatus:M,users:f,getUsersEdit:b,updateUsers:$,handleChangeUpload:q,handleRemoveAvatar:V,goBack:r}}}),x={class:"row mb-3"},ee={class:"col-12"},ae=n("h1",null,null,-1),te={class:"col-12 col-sm-12 mb-3"},oe={class:"row"},se={class:"col-12 col-sm-3"},le={class:"col-12 d-flex justify-content-center mb-3"},re={class:"clearfix"},ne={key:0,class:"clearfix text-end text-danger"},ie={href:"#"},ue=["src"],de={class:"col-12 d-flex justify-content-center"},me={class:"col-12 col-sm-9"},fe={key:0,class:"text-danger"},pe={key:0,class:""},ce=n("span",null,"Quay lại",-1);function he(e,l,R,f,_,w){const o=i("router-link"),p=i("a-breadcrumb-item"),W=i("a-breadcrumb"),B=i("delete-outlined"),C=i("a-popconfirm"),N=i("a-avatar"),m=i("a-input"),u=i("a-form-item"),A=i("a-checkbox"),h=i("a-select"),S=i("a-button"),M=i("a-form"),b=i("a-card");return c(),U(b,{style:{width:"100%"}},{default:s(()=>[n("div",x,[n("div",ee,[t(W,null,{default:s(()=>[t(p,null,{default:s(()=>[t(o,{to:{name:"admin-dashboards"}},{default:s(()=>[v("Trang chủ")]),_:1})]),_:1}),t(p,null,{default:s(()=>[t(o,{to:{name:"admin-users"}},{default:s(()=>[v("Tài khoản")]),_:1})]),_:1}),t(p,null,{default:s(()=>[v("Sửa")]),_:1})]),_:1}),ae]),n("div",te,[t(M,Q({class:"p-3",name:"custom-validation",ref:"formRef",model:e.formState,rules:e.rules,onSubmit:e.updateUsers,onValidate:e.handleValidate,onFinishFailed:e.handleFinishFailed},e.layout),{default:s(()=>[n("div",oe,[n("div",se,[n("div",le,[n("div",re,[e.formState.rmavatar==="no"?(c(),L("div",ne,[t(C,{title:"Bạn muốn xóa Avatar?","ok-text":"Yes","cancel-text":"No",onConfirm:e.handleRemoveAvatar},{default:s(()=>[n("a",ie,[t(B,{style:{fontSize:"16px",color:"#ff0000",cursor:"pointer"}})])]),_:1},8,["onConfirm"])])):g("",!0),t(N,{shape:"circle",size:200},{icon:s(()=>[n("img",{src:e.formState.urlAvatar,alt:"Avatar"},null,8,ue)]),_:1})])]),n("div",de,[n("input",{ref:"fileAvatar",type:"file",onChange:l[0]||(l[0]=r=>e.handleChangeUpload(r))},null,544)])]),n("div",me,[t(u,{ref:"userName",label:"Tên tài khoản",required:"",name:"userName"},{default:s(()=>[t(m,{value:e.formState.userName,"onUpdate:value":l[1]||(l[1]=r=>e.formState.userName=r)},null,8,["value"]),e.errors&&e.errors.UserName?(c(),L("small",fe,K(e.errors.UserName[0]),1)):g("",!0)]),_:1},512),t(u,{ref:"fullName",label:"Họ tên",required:"",name:"fullName"},{default:s(()=>[t(m,{value:e.formState.fullName,"onUpdate:value":l[2]||(l[2]=r=>e.formState.fullName=r)},null,8,["value"])]),_:1},512),t(u,{ref:"email",label:"Email",rules:[{type:"email"}],required:"",name:"email"},{default:s(()=>[t(m,{value:e.formState.email,"onUpdate:value":l[3]||(l[3]=r=>e.formState.email=r)},null,8,["value"])]),_:1},512),t(u,{ref:"change_password",label:"*",name:"change_password"},{default:s(()=>[t(A,{checked:e.formState.change_password,"onUpdate:checked":l[4]||(l[4]=r=>e.formState.change_password=r)},{default:s(()=>[v(" Đổi Mật khẩu ")]),_:1},8,["checked"])]),_:1},512),e.formState.change_password==!0?(c(),L("div",pe,[t(u,{"has-feedback":"",label:"Mật khẩu",required:"",name:"passWord"},{default:s(()=>[t(m,{value:e.formState.passWord,"onUpdate:value":l[5]||(l[5]=r=>e.formState.passWord=r),type:"password",autocomplete:"off"},null,8,["value"])]),_:1}),t(u,{"has-feedback":"",label:"Re-Mật khẩu",required:"",name:"rePassWord"},{default:s(()=>[t(m,{value:e.formState.rePassWord,"onUpdate:value":l[6]||(l[6]=r=>e.formState.rePassWord=r),type:"password",autocomplete:"off"},null,8,["value"])]),_:1})])):g("",!0),t(u,{ref:"select",label:"Loại tài khoản",name:"levelManage"},{default:s(()=>[t(h,{value:e.formState.levelManage,"onUpdate:value":l[7]||(l[7]=r=>e.formState.levelManage=r),"show-search":"",placeholder:"Chọn loại tài khoản",style:{width:"100%"},options:e.users.optionsLevelManage,"filter-option":e.filterOptionLevelManage},null,8,["value","options","filter-option"])]),_:1},512),t(u,{label:"Vai trò",name:"roleID"},{default:s(()=>[t(h,{value:e.formState.roleID,"onUpdate:value":l[8]||(l[8]=r=>e.formState.roleID=r),"show-search":"",placeholder:"Chọn vai trò",style:{width:"100%"},options:e.users.optionsRole,"filter-option":e.filterOptionRole},null,8,["value","options","filter-option"])]),_:1}),t(u,{label:"Trạng thái",name:"status"},{default:s(()=>[t(h,{value:e.formState.status,"onUpdate:value":l[9]||(l[9]=r=>e.formState.status=r),"show-search":"",placeholder:"Chọn trạng thái",style:{width:"100%"},options:e.users.optionsStatus,"filter-option":e.filterOptionStatus},null,8,["value","options","filter-option"])]),_:1}),e.authStoreClaim["admin.users.edit"]==="1"?(c(),U(u,{key:1,"wrapper-col":{span:14,offset:4}},{default:s(()=>[t(S,{onClick:e.goBack,class:"me-0 me-sm-2 mb-3 mb-sm-0"},{default:s(()=>[ce]),_:1},8,["onClick"]),e.authStoreClaim["admin.users.edit"]==="1"?(c(),U(S,{key:0,type:"primary","html-type":"submit",class:"bg-success"},{default:s(()=>[v("Lưu")]),_:1})):g("",!0)]),_:1})):g("",!0)])])]),_:1},16,["model","rules","onSubmit","onValidate","onFinishFailed"])])])]),_:1})}const ke=X(Z,[["render",he]]);export{ke as default};
