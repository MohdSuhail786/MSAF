(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{155:function(e,t,n){},157:function(e,t,n){},161:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),c=n(12),o=n.n(c),r=n(18),i=n(2),l=function(){return Object(i.jsx)("h1",{children:"THIS IS ADMIN PAGE"})},j=n(7),u=function(e){var t=Object(a.useState)(),n=Object(j.a)(t,2),s=n[0],c=n[1],o=Object(a.useState)(),l=Object(j.a)(o,2),u=l[0],d=l[1],b=Object(r.f)();return Object(i.jsxs)("form",{id:"login-form",className:"sign-in-form",children:[Object(i.jsx)("h2",{className:"title",children:"Sign in"}),Object(i.jsxs)("div",{className:"input-field",children:[Object(i.jsx)("i",{className:"fas fa-user"}),Object(i.jsx)("input",{type:"text",name:"email",placeholder:"Email",value:s,onChange:function(e){c(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-field",children:[Object(i.jsx)("i",{className:"fas fa-lock"}),Object(i.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:u,onChange:function(e){d(e.target.value)}})]}),Object(i.jsx)("input",{type:"button",value:"Login",className:"btn solid",onClick:function(){console.log(s,u);var t={email:s,password:u},n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};fetch("http://localhost:7860/login",n).then((function(e){return e.json()})).then((function(t){console.log(t),void 0!==t.error?(e.setMessage(t.error),e.setSeverity("error"),e.setOpen(!0)):"Login successfuly"===t.message?(localStorage.accessToken=t.accessToken,localStorage.refreshToken=t.refreshToken,localStorage.name=t.name,localStorage.email=t.email,localStorage.userId=t.userId,e.setMessage(t.message),e.setSeverity("success"),e.setOpen(!0),setTimeout((function(){2===t.type?b.push("/form"):1===t.type&&b.push("/admin")}),2e3)):(e.setMessage(t.message),e.setSeverity("warning"),e.setOpen(!0))}))}})]})},d=function(e){var t=Object(a.useState)(),n=Object(j.a)(t,2),s=n[0],c=n[1],o=Object(a.useState)(),r=Object(j.a)(o,2),l=r[0],u=r[1],d=Object(a.useState)(),b=Object(j.a)(d,2),h=b[0],m=b[1];return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("form",{name:"signup",id:"signupForm",className:"sign-up-form",children:[Object(i.jsx)("h2",{className:"title",children:"Sign up"}),Object(i.jsxs)("div",{className:"input-field",children:[Object(i.jsx)("i",{className:"fas fa-user"}),Object(i.jsx)("input",{type:"text",name:"name",placeholder:"Username",value:s,onChange:function(e){return c(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-field",children:[Object(i.jsx)("i",{className:"fas fa-envelope"}),Object(i.jsx)("input",{type:"email",name:"email",placeholder:"Email",value:l,onChange:function(e){return u(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-field",children:[Object(i.jsx)("i",{className:"fas fa-lock"}),Object(i.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:h,onChange:function(e){return m(e.target.value)}})]}),Object(i.jsx)("input",{type:"button",onClick:function(){var t={name:s,email:l,password:h},n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)};fetch("/register",n).then((function(e){return e.json()})).then((function(t){void 0!==t.error?(e.setMessage(t.error),e.setSeverity("error"),e.setOpen(!0)):"User registered successfully"===t.message?(e.setMessage(t.message),e.onChange("container"),e.setSeverity("success"),e.setOpen(!0)):(e.setMessage(t.message),e.setSeverity("warning"),e.setOpen(!0)),console.log(t)}))},className:"btn",value:"Sign up"})]})})},b=n.p+"static/media/register.270edb26.svg",h=n.p+"static/media/log.cd046e1a.svg",m=function(e){return Object(i.jsxs)("div",{className:"panels-container",children:[Object(i.jsxs)("div",{className:"panel left-panel",children:[Object(i.jsxs)("div",{className:"content",children:[Object(i.jsx)("h3",{children:"New here ?"}),Object(i.jsx)("p",{children:"Lets move towards the signup page"}),Object(i.jsx)("button",{className:"btn transparent",id:"sign-up-btn",onClick:function(){e.onChange("container sign-up-mode")},children:"Sign up"})]}),Object(i.jsx)("img",{src:h,className:"image",alt:""})]}),Object(i.jsxs)("div",{className:"panel right-panel",children:[Object(i.jsxs)("div",{className:"content",children:[Object(i.jsx)("h3",{children:"One of us ?"}),Object(i.jsx)("p",{children:"Lets move towards the signin page"}),Object(i.jsx)("button",{className:"btn transparent",id:"sign-in-btn",onClick:function(){e.onChange("container")},children:"Sign in"})]}),Object(i.jsx)("img",{src:b,className:"image",alt:""})]})]})},O=(n(155),n(36)),f=n(222),p=n(219),g=function(e){return Object(i.jsx)(p.a,Object(O.a)({elevation:6,variant:"filled"},e))},x=function(e){var t=s.a.useState(!0),n=Object(j.a)(t,2),a=n[0],c=n[1],o=function(t,n){"clickaway"!==n&&(c(!1),e.setOpen(!1))};return Object(i.jsx)(f.a,{open:a,autoHideDuration:3e3,onClose:o,style:{marginTop:50},anchorOrigin:{vertical:"top",horizontal:"center"},children:Object(i.jsx)(g,{onClose:o,severity:e.severity,children:e.message})})},v=function(e){var t=Object(a.useState)("container"),n=Object(j.a)(t,2),s=n[0],c=n[1],o=Object(a.useState)(!1),r=Object(j.a)(o,2),l=r[0],b=r[1],h=Object(a.useState)(""),O=Object(j.a)(h,2),f=O[0],p=O[1],g=Object(a.useState)("success"),v=Object(j.a)(g,2),N=v[0],y=v[1];return Object(i.jsxs)("div",{className:s,children:[Object(i.jsx)("div",{className:"forms-container",children:Object(i.jsxs)("div",{className:"signin-signup",children:[Object(i.jsx)(u,{callback:function(){return e.callback()},setOpen:function(e){b(e)},setMessage:function(e){p(e),console.log(e)},setSeverity:function(e){return y(e)}}),Object(i.jsx)(d,{onChange:function(e){c(e)},setOpen:function(e){b(e)},setMessage:function(e){p(e),console.log(e)},setSeverity:function(e){return y(e)}})]})}),Object(i.jsx)(m,{onChange:function(e){c(e)}}),l&&Object(i.jsx)(x,{setOpen:function(e){b(!1)},message:f,severity:N})]})},N=n(68),y=n.n(N),S=n(97),k="http://localhost:7860";function C(e,t){return w.apply(this,arguments)}function w(){return(w=Object(S.a)(y.a.mark((function e(t,n){var a,s=this;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.headers=Object(O.a)(Object(O.a)({},n.headers),{},{Authorization:localStorage.accessToken}),console.log(n),e.next=4,fetch(k+t,n).then((function(e){return e.json()})).then(function(){var e=Object(S.a)(y.a.mark((function e(c){var o,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Unauthorized"===c.message){e.next=5;break}console.log("AUTHORIZED"),a=c,e.next=11;break;case 5:return console.log("Message is unauthorized Try to refresh session"),o={refreshToken:localStorage.refreshToken},r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)},console.log("Generate new key with refresh token"),e.next=11,fetch("http://localhost:7860/refresh_session",r).then((function(e){return e.json()})).then((function(e){"session refreshed"===e.message?(console.log("access token refreshed by using refreshtoken",e),localStorage.accessToken=e.accessToken,localStorage.refreshToken=e.refreshToken,a=s.fetchData(t,n,o)):(console.log("Refresh token is also expired"),a=null)}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:return e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(157);var T=n(39),I=n(4),F=n(33),P=n(220),M=n(59),D=n(167),E=n(216),L=n(168),B=n(171),J=n(217),U=n(117),R=n.n(U),z=n(116),A=n.n(z),G=n(218),H=n(212),q=n(70),W=n(58),V=n(118),_=n.n(V),K=n(213),Z=n(214),Q=n(215),X=n(114),Y=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1];return Object(a.useEffect)((function(){var e={id:localStorage.userId};C("/getList",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){console.log(e),s(e)}))}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{style:{height:window.innerHeight-60,width:"100%"},children:Object(i.jsx)(X.a,{rows:n,columns:[{field:"id",headerName:"No.",width:80,disableClickEventBubbling:!0},{field:"consumerName",headerName:"Consumer name",width:130,disableClickEventBubbling:!0},{field:"fatherName",headerName:"Father name",width:130,disableClickEventBubbling:!0},{field:"meterId",type:"number",headerName:"Meter Id",width:130,disableClickEventBubbling:!0}],pageSize:8})})})},$=Object(F.a)({list:{width:250},fullList:{},root:{flexGrow:1},menuButton:{marginRight:20},title:{flexGrow:1}});function ee(e){var t,n=$(),c=Object(r.f)(),o=Object(a.useState)("Form"),l=Object(j.a)(o,2),u=l[0],d=l[1],b=Object(a.useState)(!1),h=Object(j.a)(b,2),m=h[0],f=h[1],p=Object(a.useState)({top:!1,left:!1,bottom:!1,right:!1}),g=Object(j.a)(p,2),v=g[0],N=g[1],y=function(e,t){return function(n){(!n||"keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&N(Object(O.a)(Object(O.a)({},v),{},Object(T.a)({},e,t)))}},S=function(){d("Form")},k=function(){d("Recent")};return Object(i.jsxs)("div",{children:[Object(i.jsx)(G.a,{position:"sticky",style:{background:"rgb(47 123 255)"},children:Object(i.jsxs)(H.a,{children:[Object(i.jsx)(W.a,{edge:"start",className:n.menuButton,color:"inherit",onClick:y("left",!0),"aria-label":"menu",children:Object(i.jsx)(_.a,{})}),Object(i.jsx)(q.a,{variant:"h6",className:n.title,children:u}),Object(i.jsx)(M.a,{color:"inherit",onClick:function(){localStorage.removeItem("accessToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("name"),localStorage.removeItem("email"),localStorage.removeItem("userId"),f(!0),setTimeout((function(){c.push("/")}),2e3)},children:"Logout"})]})}),Object(i.jsx)(s.a.Fragment,{children:Object(i.jsx)(P.a,{anchor:"left",open:v.left,onClose:y("left",!1),onOpen:y("left",!0),children:(t="left",Object(i.jsxs)("div",{className:Object(I.a)(n.list,Object(T.a)({},n.fullList,"top"===t||"bottom"===t)),role:"presentation",onClick:y(t,!1),onKeyDown:y(t,!1),children:[Object(i.jsx)(K.a,{className:n.root,children:Object(i.jsx)(Z.a,{children:Object(i.jsxs)(Q.a,{children:[Object(i.jsx)(q.a,{gutterBottom:!0,variant:"h5",component:"h2",children:localStorage.name}),Object(i.jsxs)(q.a,{variant:"body2",color:"textSecondary",component:"p",children:[localStorage.email,Object(i.jsx)("br",{}),"Hi ",localStorage.name,", Thanks for choosing us"]})]})})}),Object(i.jsx)(E.a,{}),Object(i.jsxs)(D.a,{children:[Object(i.jsxs)(L.a,{button:!0,onClick:S,children:[Object(i.jsx)(B.a,{children:Object(i.jsx)(A.a,{})}),Object(i.jsx)(J.a,{primary:"Form"})]},"Form"),Object(i.jsxs)(L.a,{button:!0,onClick:k,children:[Object(i.jsx)(B.a,{children:Object(i.jsx)(R.a,{})}),Object(i.jsx)(J.a,{primary:"Recent"})]},"Recent")]})]}))})},"left"),"Form"===u&&Object(i.jsx)(te,{}),"Recent"===u&&Object(i.jsx)(Y,{}),m&&Object(i.jsx)(x,{setOpen:function(e){f(!1)},message:"Logout successfully",severity:"success"})]})}var te=function(){var e=Object(r.f)(),t=Object(a.useState)("No file"),n=Object(j.a)(t,2),s=n[0],c=n[1],o=Object(a.useState)(),l=Object(j.a)(o,2),u=l[0],d=l[1],b=Object(a.useState)(),h=Object(j.a)(b,2),m=h[0],f=h[1],p=Object(a.useState)(),g=Object(j.a)(p,2),v=g[0],N=g[1],y=Object(a.useState)(),S=Object(j.a)(y,2),k=S[0],w=S[1],T=Object(a.useState)(),I=Object(j.a)(T,2),F=I[0],P=I[1],M=Object(a.useState)(),D=Object(j.a)(M,2),E=D[0],L=D[1],B=Object(a.useState)(),J=Object(j.a)(B,2),U=J[0],R=J[1],z=Object(a.useState)(),A=Object(j.a)(z,2),G=A[0],H=A[1],q=Object(a.useState)(),W=Object(j.a)(q,2),V=W[0],_=W[1],K=Object(a.useState)(),Z=Object(j.a)(K,2),Q=Z[0],X=Z[1],Y=Object(a.useState)(),$=Object(j.a)(Y,2),ee=$[0],te=$[1],ne=Object(a.useState)(),ae=Object(j.a)(ne,2),se=ae[0],ce=ae[1],oe=Object(a.useState)(),re=Object(j.a)(oe,2),ie=re[0],le=re[1],je=Object(a.useState)(),ue=Object(j.a)(je,2),de=ue[0],be=ue[1],he=Object(a.useState)(),me=Object(j.a)(he,2),Oe=me[0],fe=me[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:"background-color"}),Object(i.jsx)("div",{className:"backcontainer ",children:Object(i.jsx)("div",{className:"card-container",children:Object(i.jsxs)("div",{className:"wrapper card",children:[window.innerWidth>480&&Object(i.jsx)("h2",{children:" Data Form "}),Object(i.jsxs)("form",{action:"http://localhost:7860/upload",method:"post",encType:"multipart/form-data",children:[Object(i.jsxs)("div",{className:"input-name",children:[Object(i.jsx)("i",{className:"fa fa-user lock"}),Object(i.jsx)("input",{type:"text",placeholder:"Consumer Name",value:u,required:!0,onChange:function(e){return d(e.target.value)},className:"name"})]}),Object(i.jsxs)("div",{className:"input-name",children:[Object(i.jsx)("i",{className:"fa fa-user lock"}),Object(i.jsx)("input",{type:"text",placeholder:"Father Name",required:!0,className:"name",value:m,onChange:function(e){return f(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-name",children:[Object(i.jsx)("i",{className:"fa fa-address-card"}),Object(i.jsx)("input",{type:"text",placeholder:"Address(village)",className:"text-name",value:v,onChange:function(e){return N(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-name",children:[Object(i.jsx)("i",{className:"fa fa-user circle-o"}),Object(i.jsx)("input",{type:"text",placeholder:"Account Id",className:"text-name",value:k,onChange:function(e){return w(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-name",children:[Object(i.jsx)("i",{className:"fa fa-calculator"}),Object(i.jsx)("input",{type:"text",placeholder:"Meter Id",className:"text-name",requiredz:!0,value:F,onChange:function(e){return P(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-name",children:[Object(i.jsx)("i",{className:"fa fa-location-arrow"}),Object(i.jsx)("input",{type:"text",placeholder:"District",className:"text-name",value:E,onChange:function(e){return L(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-name",children:[Object(i.jsx)("i",{className:"fa fa-line-chart"}),Object(i.jsx)("input",{type:"text",placeholder:"Meter position",className:"text-name",value:V,onChange:function(e){return _(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-name",children:[Object(i.jsx)("i",{className:"fa fa-book"}),Object(i.jsx)("input",{type:"text",placeholder:"Selling book No.",className:"text-name",value:U,onChange:function(e){return R(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-name",children:[Object(i.jsx)("i",{className:"fa fa-file-text-o"}),Object(i.jsx)("input",{type:"text",placeholder:"Selling page No.",className:"text-name",value:G,onChange:function(e){return H(e.target.value)}})]}),Object(i.jsxs)("div",{className:"input-name",children:[Object(i.jsx)("span",{style:{marginLeft:"0px"},children:"Installation date"}),Object(i.jsx)("input",{type:"date",required:!0,value:Q,onChange:function(e){return X(e.target.value)},className:"text-name"})]}),Object(i.jsxs)("div",{className:"input-name",children:[Object(i.jsx)("i",{className:"fa fa-map-pin"}),Object(i.jsx)("input",{type:"text",placeholder:"Plastic seal",className:"text-name",value:ee,onChange:function(e){return te(e.target.value)}})]}),Object(i.jsxs)("div",{className:" input-name",children:[Object(i.jsx)("input",{type:"file",id:"fileUploaded",name:"fileUploaded",hidden:"hidden",onChange:function(e){return function(e){var t=e.target.files[0].name;ce(e.target.files[0]),t.length>=15&&(t=t.slice(0,13)+"..."+t.slice(t.length-5,t.length)),c(t)}(e)}}),Object(i.jsx)("label",{type:"button",htmlFor:"fileUploaded",className:"label-button",children:"Choose photo"}),Object(i.jsxs)("span",{id:"custom-text",children:[s," "]})]}),Object(i.jsx)("div",{className:"input-name",children:Object(i.jsx)("input",{className:"button",type:"button",onClick:function(){console.log(u,m,v,k,F,E,V,U,G,Q,ee,s);var t=new FormData;t.append("fileUploaded",se),console.log(t);var n={consumerName:u,fatherName:m,address:v,accountId:k,meterId:F,district:E,meterPosition:V,sellingBookNo:U,sellingPageNo:G,installationDate:Q,plasticSeal:ee,originalFileName:se?se.name:null},a=function(e){var t={message:"",status:!0};return""===e.meterId&&(t.message="Please enter meter id",t.status=!1),""===e.fatherName&&(t.message="Please enter father's name",t.status=!1),""===e.consumerName&&(t.message="Please enter consumer name",t.status=!1),t}(n);if(!a.status)return be("warning"),le(a.message),void fe(!0);console.log(n),C("/upload",{method:"POST",body:t}).then((function(t){null==t&&(be("error"),le("Unable to submit the form. Please login again."),fe(!0),setTimeout((function(){return e.push("/")}),2e3)),n=Object(O.a)(Object(O.a)({},n),{},{fileName:t.filename}),C("/submitForm",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){le(e.message),be("success"),fe(!0),d(""),f(""),N(""),w(""),P(""),_(""),L(""),H(""),R(""),X(new Date),X(void 0),te(""),c("No file"),ce("")}))}))},value:"submit"})})]})]})})}),Oe&&Object(i.jsx)(x,{setOpen:function(e){fe(!1)},message:ie,severity:de})]})},ne=function(){return Object(i.jsxs)(i.Fragment,{children:[window.innerWidth>480&&Object(i.jsx)(te,{}),window.innerWidth<=480&&Object(i.jsx)(ee,{})]})},ae=function(e){var t=Object(r.f)();console.log(e);var n=e.Comp;return Object(a.useEffect)((function(){var e={accessToken:localStorage.accessToken},n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};fetch("http://localhost:7860/validate",n).then((function(e){return e.json()})).then((function(e){if("Done"===e.message)console.log("Validation done"),2===e.type?t.push("/form"):t.push("/admin");else{console.log("Validation of accesstoken failed");var n={refreshToken:localStorage.refreshToken},a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};console.log("Generate new key with refresh token"),fetch("http://localhost:7860/refresh_session",a).then((function(e){return e.json()})).then((function(e){"session refreshed"===e.message?(console.log("access token refreshed by using refreshtoken"),localStorage.accessToken=e.accessToken,localStorage.refreshToken=e.refreshToken,2===e.type?t.push("/form"):t.push("/admin")):(console.log("Refresh token is also expired"),t.push("/"))}))}}))}),[t]),Object(i.jsx)(n,{})},se=function(){return Object(i.jsx)("main",{children:Object(i.jsxs)(r.c,{children:[Object(i.jsx)(r.a,{path:"/",exact:!0,children:Object(i.jsx)(ae,{Comp:v})}),Object(i.jsx)(r.a,{exact:!0,path:"/form",children:Object(i.jsx)(ae,{Comp:ne})}),Object(i.jsx)(r.a,{exact:!0,path:"/admin",children:Object(i.jsx)(ae,{Comp:l})})]})})},ce=n(52);o.a.render(Object(i.jsx)(ce.a,{children:Object(i.jsx)(se,{})}),document.getElementById("root"))}},[[161,1,2]]]);
//# sourceMappingURL=main.b732465c.chunk.js.map