import{d as X,R as N,D as W,B as j,S as Y,s as Z,a as h,U as tt,r as et,t as at,V as y,x as P,y as u,z as m,b as C,C as t,N as k,a1 as T,E as c,F as H,O as ot,M as st,J as nt,K as it}from"./index-cdcf547c.js";import"./use-menu-b48628b9.js";import{H as lt}from"./HeaderCustomer-c7f48903.js";import{_ as rt}from"./_plugin-vue_export-helper-c27b6911.js";const ct=X({components:{"a-form":N,"a-form-item":N.Item,"a-drawer":W,"a-button":j,"a-input-number":Y,Header:lt},setup(){const s=Z(),i="http://localhost:9000";s.params.id;const $=h([]),S=h([]),w=h(!1),f=h(!1),_=h(0),I=h(null),b=tt(),e=JSON.parse(localStorage.getItem("auth")),n=JSON.parse(localStorage.getItem("token")),p=h([]),D=h(""),l=et({currentPage:1,pageSize:5,totalItems:0,totalPages:0}),B=()=>{history.length>1?history.go(-1):this.$router.push("/")},z=()=>{w.value=!0,L()},F=()=>{f.value=!0},A=()=>{f.value=!1},O=()=>{w.value=!1},g=async(a,o,r="")=>{try{const d=await axios.get(`${i}/api/v1/customer/cartitem/view`,{headers:{Authorization:`Bearer ${n}`},params:{page:a,size:o,keyword:r}});console.log(d.data,"data"),$.value=d.data.data,l.totalItems=d.data.pagination.totalItems,l.totalPages=d.data.pagination.totalPages,_.value=0,await d.data.data.forEach(K=>{_.value+=K.priceTotal})}catch(d){console.error(d)}},V=(a,o)=>{l.currentPage=a,l.pageSize=o,g(a,o,D.value)},x=()=>{l.currentPage=1,g(l.currentPage,l.pageSize,D.value)},M=async()=>{const a=await axios.get(`${i}/api/v1/customer/favor/view`,{headers:{Authorization:`Bearer ${n}`}});S.value=a.data.data},q=async a=>{try{await axios.get(`${i}/api/v1/customer/order/delete/${a}`,{headers:{Authorization:`Bearer ${n}`}}),y.success("Hủy thành công"),setTimeout(()=>{window.location.reload()},350)}catch(o){console.error(o)}},G=async a=>{const o=new FormData;o.append("storeid",a);try{await axios({method:"delete",url:`${i}/api/v1/customer/favor/remove`,data:o,headers:{Authorization:`Bearer ${n}`,"Content-Type":"multipart/form-data"}}),y.success("Hủy thành công"),setTimeout(()=>{window.location.reload()},350)}catch(r){console.error(r)}},L=async()=>{try{const a=await axios.get(`${i}/api/v1/customer/orderdetail/view`,{headers:{Authorization:`Bearer ${n}`}});console.log(a.data,"data"),p.value=a.data.data}catch(a){console.error(a)}},U=async a=>{const o=new FormData;o.append("cartitemid",a),await axios.post(`${i}/api/v1/customer/order/insert/cartitem`,o,{headers:{Authorization:`Bearer ${n}`}}),alert("Mua thành công"),g()};console.log(_,"1");const E=async a=>{new FormData;try{const o=await axios.get(`${i}/api/v1/customer/cartitem/delete?cartitemid=${a}`,{headers:{Authorization:`Bearer ${n}`}});g()}catch(o){console.error(o)}},J=async a=>{try{if(a.quantity<=1){new FormData().append("cartitemid",a.cartItemId);const r=await axios.get(`${i}/api/v1/customer/cartitem/delete?cartitemid=${a.cartItemId}`,{headers:{Authorization:`Bearer ${n}`}})}else{const o=new FormData,r=a.quantity-1;o.append("quantity",r),o.append("cartitemid",a.cartItemId),console.log(r);const d=await axios.put(`${i}/api/v1/customer/cartitem/update`,o,{headers:{Authorization:`Bearer ${n}`}})}g()}catch(o){console.error(o)}},Q=async a=>{try{const o=new FormData,r=a.quantity+1;o.append("quantity",r),o.append("cartitemid",a.cartItemId),console.log(r);const d=await axios.put(`${i}/api/v1/customer/cartitem/update`,o,{headers:{Authorization:`Bearer ${n}`}});g()}catch(o){console.error(o)}},R=()=>{I.value.validateFields(a=>{a?y.error("Please input the correct quantity!"):(y.success("Quantity submitted successfully!"),O())})};return at(()=>{g(l.currentPage,l.pageSize),M(),new window.BroadcastChannel("sw-messages").addEventListener("message",o=>{console.log(123),y.success(o)})}),{router:b,route:s,product:$,userLocal:e,deleteProduct:E,decrement:J,increment:Q,allTotal:_,byProductCart:U,goBack:B,isDrawerVisible:w,showDrawer:z,handleClose:O,handleSubmit:R,isDrawerVisible2:f,handleClose2:A,showDrawer2:F,cancelOderMyFarvor:G,myOrder:p,myFarve:S,cancelOder:q,searchKeyword:D,pageParam:l,onChange:V,onSearch:x}}}),v=s=>(nt("data-v-5e401986"),s=s(),it(),s),dt={id:"wrapper"},ht={id:"main"},ut={class:"orderbox"},mt={class:"dieuhuong"},pt={class:"giohang orderhome"},gt={method:"post",name:"giohang",id:"cart"},vt={class:"listcart"},_t={class:"oimg"},yt=["href","title"],wt=["src","alt"],ft=["onClick","title"],bt={class:"oname"},Ct=["onClick"],$t={class:"ArrCount"},St=["onClick"],It=["value"],Dt=["onClick"],Pt={class:"total flexJus"},kt=v(()=>t("span",null,"Tổng tiền:  ",-1)),Tt={class:"total_money"},Ot=v(()=>t("input",{type:"submit",name:"_w_action[UpdatePOST]",style:{display:"none"}},null,-1)),Nt=v(()=>t("input",{type:"hidden",name:"_w_action",value:"UpdatePOST"},null,-1)),Ht={class:"col-12"},Bt=ot('<div id="footer" data-v-5e401986><div class="f" style="padding:40px 0;" data-v-5e401986><div class="wrap flexJus" data-v-5e401986><div class="f flex" data-v-5e401986><div class="fotb" style="width:30%;padding-right:30px;" data-v-5e401986><img src="https://denled.com/Content/img/logo-foot.png" alt="Denled.com" width="286" height="60" data-v-5e401986></div><div class="fotb" style="width:50%;padding:0 40px 0 60px;" data-v-5e401986><label data-v-5e401986>SHOWROOM</label><div class="muahang f flexC" data-v-5e401986><div class="showrooms" data-v-5e401986><ul data-v-5e401986><li data-v-5e401986>Hệ thống hỗ trợ quản lí và bán hàng tạp hóa</li><li data-v-5e401986><span data-v-5e401986>Địa chỉ 1 : </span>21C Trần Duy Hưng, Cầu Giấy, HN </li><li data-v-5e401986><span data-v-5e401986>Hotline : </span><a href="tel:0933665115" data-v-5e401986>0933.66.5115</a></li></ul></div></div></div><div class="fotb" data-v-5e401986><label data-v-5e401986>THÔNG TIN - HƯỚNG DẪN</label><ul data-v-5e401986><li data-v-5e401986><a title="Giới Thiệu Hệ Thống" rel="nofollow" href="/" data-v-5e401986>Giới Thiệu Hệ Thống</a></li><li data-v-5e401986><a title="Giao hàng &amp; Thanh toán" rel="nofollow" href="/" data-v-5e401986>Giao hàng &amp; Thanh toán</a></li><li data-v-5e401986><a title="Hướng dẫn mua hàng Online" rel="nofollow" href="/" data-v-5e401986>Hướng dẫn mua hàng Online</a></li><li data-v-5e401986><a title="Quy chế hoạt động" rel="nofollow" href="/" data-v-5e401986>Quy chế hoạt động</a></li></ul></div></div></div></div><div class="f p10 cen trang copyright" data-v-5e401986> © 2024 bản quyền thuộc về HungNL@gmail.com <a href="https://denled.com" title="Siêu thị đèn LED" data-v-5e401986>denled.com</a></div><ul id="panel" data-v-5e401986><li data-v-5e401986><img src="https://denled.com/Content/img/totop.svg" alt="To top" width="45" height="45" data-v-5e401986></li><li style="padding-top:10px;padding-bottom:10px;" data-v-5e401986><img alt="Messenger" src="https://denled.com/Content/img/messenger.svg" width="45" height="45" data-v-5e401986></li><li data-v-5e401986><img alt="Phone" src="https://denled.com/Content/img/phone.svg" width="45" height="45" data-v-5e401986></li></ul><div class="zalo-chat-widget" data-oaid="2839194858446814357" data-welcome-message="Rất vui khi được hỗ trợ bạn!. Nếu bạn không thể chờ thì hãy gọi hoặc nhắn tin đến số điện thoại này 0973.66.5115." data-autopopup="1800" data-width="500" data-height="500" style="right:12px;" data-v-5e401986></div></div>',1),zt={class:"giohang orderhome"},Ft={name:"giohang",id:"cart"},At={class:"listcart"},Vt={class:"oimg"},xt=["src","alt"],Mt={class:"oname"},qt={style:{float:"left"}},Gt={key:0,style:{float:"right"}},Lt=["onClick"],Ut=v(()=>t("input",{type:"submit",name:"_w_action[UpdatePOST]",style:{display:"none"}},null,-1)),Et=v(()=>t("input",{type:"hidden",name:"_w_action",value:"UpdatePOST"},null,-1)),Jt={class:"giohang orderhome"},Qt={name:"giohang",id:"cart"},Rt={class:"listcart"},Kt={class:"oimg"},Xt=["src","alt"],Wt={class:"oname"},jt={style:{float:"right"}},Yt=["onClick"],Zt=v(()=>t("input",{type:"submit",name:"_w_action[UpdatePOST]",style:{display:"none"}},null,-1)),te=v(()=>t("input",{type:"hidden",name:"_w_action",value:"UpdatePOST"},null,-1));function ee(s,i,$,S,w,f){const _=P("Header"),I=P("a-pagination"),b=P("a-drawer");return u(),m("div",dt,[C(_),t("div",ht,[t("div",ut,[t("div",mt,[t("a",{onClick:i[0]||(i[0]=(...e)=>s.goBack&&s.goBack(...e))},"Giỏ hàng của bạn")]),t("div",pt,[t("form",gt,[t("ul",vt,[(u(!0),m(k,null,T(s.product,e=>{var n;return u(),m("li",{key:e.id,class:"cartitem"},[t("div",_t,[t("a",{href:e.href,title:e.title},[t("img",{src:e.productImg,alt:e.title},null,8,wt)],8,yt),t("a",{onClick:p=>s.deleteProduct(e.cartItemId),class:"odel",rel:"nofollow",title:`Xóa ${e.title} khỏi đơn hàng`},"XÓA",8,ft)]),t("div",bt,[t("h3",null,c(e.productName),1),t("label",null,c((n=e.priceTotal)==null?void 0:n.toLocaleString())+"₫",1),t("h6",null,"Cửa hàng: "+c(e.storeName),1),t("span",{class:"bynow",onClick:p=>s.byProductCart(e.cartItemId),style:{float:"right","padding-top":"10px",cursor:"'pointer'"}},"Mua ngay",8,Ct),t("div",$t,[t("span",{onClick:p=>s.decrement(e),class:"sub"},"-",8,St),t("input",{type:"text",value:e.quantity,readonly:""},null,8,It),t("span",{onClick:p=>s.increment(e),class:"cre"},"+",8,Dt)])])])}),128))]),t("div",Pt,[t("div",null,[kt,t("b",Tt,c(s.allTotal.toLocaleString())+"₫",1)])]),Ot,Nt]),t("div",Ht,[C(I,{onChange:s.onChange,current:s.pageParam.currentPage,"onUpdate:current":i[1]||(i[1]=e=>s.pageParam.currentPage=e),total:s.pageParam.totalItems,pageSize:s.pageParam.pageSize,"show-total":(e,n)=>`${n[0]}-${n[1]} của ${e} sản phẩm`,class:"mt-2 text-end"},null,8,["onChange","current","total","pageSize","show-total"])])])])]),Bt,t("div",null,[C(b,{title:"Danh sách đơn hàng đã đặt",visible:s.isDrawerVisible,width:850,onClose:s.handleClose,destroyOnClose:!0},{default:H(()=>[t("div",zt,[t("form",Ft,[t("ul",At,[(u(!0),m(k,null,T(s.myOrder,e=>{var n;return u(),m("li",{key:e.orderDetailId,class:"cartitem"},[t("div",Vt,[t("a",null,[t("img",{src:e.productImg,alt:s.product.title},null,8,xt)])]),t("div",Mt,[t("h3",null,c(e.productName),1),t("label",null,c(e.orderStatusName),1),t("label",qt,c((n=e.priceTotal)==null?void 0:n.toLocaleString())+"₫",1),e.orderStatusName=="Đặt hàng thành công"?(u(),m("div",Gt,[t("button",{type:"button",onClick:p=>s.cancelOder(e.orderDetailId),class:"btn"}," Hủy đơn ",8,Lt)])):st("",!0)])])}),128))]),Ut,Et])])]),_:1},8,["visible","onClose"]),C(b,{title:"Danh sách cửa hàng bạn thích",visible:s.isDrawerVisible2,width:850,onClose:s.handleClose2,destroyOnClose:!0},{default:H(()=>[t("div",Jt,[t("form",Qt,[t("ul",Rt,[(u(!0),m(k,null,T(s.myFarve,e=>(u(),m("li",{key:e.orderDetailId,class:"cartitem"},[t("div",Kt,[t("a",null,[t("img",{src:e.image,alt:e.title},null,8,Xt)])]),t("div",Wt,[t("h3",null,c(e.storeName),1),t("label",null,c(e.orderStatusName),1),t("p",null,c(e.storeAddress),1),t("div",jt,[t("button",{type:"button",onClick:n=>s.cancelOderMyFarvor(e.storeId),class:"btn"}," Hủy thích ",8,Yt)])])]))),128))]),Zt,te])])]),_:1},8,["visible","onClose"])])])}const ie=rt(ct,[["render",ee],["__scopeId","data-v-5e401986"]]);export{ie as default};
