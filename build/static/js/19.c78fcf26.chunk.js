(this.webpackJsonpflight_board=this.webpackJsonpflight_board||[]).push([[19],{1091:function(e,a,t){"use strict";var n=t(13);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),i=(0,n(t(14)).default)(r.default.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");a.default=i},1181:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return M}));var n=t(22),r=t(0),i=t.n(r),s=t(18),l=t(980),c=t(1005),o=t(1006),d=t(75),u=t(1008),m=t(1010),p=t(1020),g=t(1051),f=t(1091),h=t.n(f),v=t(17),b=t(54),w=t(279),E=t.n(w),j=t(300),y=t(16),O=t(12),x=t(8),N=t(280),k=t.n(N),S=t(2),R=t(65),T=t(1024),V=t(967),C=t(64),z=(t(206),{email:{presence:{allowEmpty:!1,message:"is required"},email:!0},password:{presence:{allowEmpty:!1,message:"is required"}}}),B=Object(l.a)((function(e){return{root:{},fields:{margin:e.spacing(-1),display:"flex",flexWrap:"wrap","& > *":{flexGrow:1,margin:e.spacing(1)}},submitButton:{marginTop:e.spacing(2),width:"100%"}}})),_=function(e){var a=e.className,t=Object(x.a)(e,["className"]),s=B(),l=Object(C.a)(),c=(Object(R.c)(),Object(r.useState)({isValid:!1,values:{},touched:{},errors:{}})),o=Object(O.a)(c,2),d=o[0],u=o[1];Object(r.useEffect)((function(){var e=k()(d.values,z);u((function(a){return Object(y.a)(Object(y.a)({},a),{},{isValid:!e,errors:e||{}})}))}),[d.values]);var m=function(e){e.persist(),u((function(a){return Object(y.a)(Object(y.a)({},a),{},{values:Object(y.a)(Object(y.a)({},a.values),{},Object(n.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value)),touched:Object(y.a)(Object(y.a)({},a.touched),{},Object(n.a)({},e.target.name,!0))})}))},p=function(){var e=Object(j.a)(E.a.mark((function e(a){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),l.history.push("/");case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),g=function(e){return!(!d.touched[e]||!d.errors[e])};return i.a.createElement("form",Object.assign({},t,{className:Object(S.a)(s.root,a),onSubmit:p}),i.a.createElement("div",{className:s.fields},i.a.createElement(T.a,{error:g("email"),fullWidth:!0,helperText:g("email")?d.errors.email[0]:null,label:"Email address",name:"email",onChange:m,value:d.values.email||"",variant:"outlined"}),i.a.createElement(T.a,{error:g("password"),fullWidth:!0,helperText:g("password")?d.errors.password[0]:null,label:"Password",name:"password",onChange:m,type:"password",value:d.values.password||"",variant:"outlined"})),i.a.createElement(V.a,{className:s.submitButton,color:"secondary",disabled:!d.isValid,size:"large",type:"submit",variant:"contained"},"Sign in"))},H=Object(l.a)((function(e){return{root:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",padding:e.spacing(6,2)},card:{width:e.breakpoints.values.md,maxWidth:"100%",overflow:"unset",display:"flex",position:"relative","& > *":{flexGrow:1,flexBasis:"50%",width:"50%"}},content:{padding:e.spacing(8,4,3,4)},media:Object(n.a)({borderTopRightRadius:4,borderBottomRightRadius:4,padding:e.spacing(3),color:e.palette.white,display:"flex",flexDirection:"column",justifyContent:"flex-end"},e.breakpoints.down("md"),{display:"none"}),icon:{backgroundImage:b.a.green,color:e.palette.white,borderRadius:e.shape.borderRadius,padding:e.spacing(1),position:"absolute",top:-32,left:e.spacing(3),height:64,width:64,fontSize:32},loginForm:{marginTop:e.spacing(3)},divider:{margin:e.spacing(2,0)},person:{marginTop:e.spacing(2),display:"flex"},avatar:{marginRight:e.spacing(2)}}})),M=function(){var e=H();return i.a.createElement(v.h,{className:e.root,title:"Login"},i.a.createElement(c.a,{className:e.card},i.a.createElement(o.a,{className:e.content},i.a.createElement(h.a,{className:e.icon}),i.a.createElement(d.a,{gutterBottom:!0,variant:"h3"},"Sign in"),i.a.createElement(d.a,{variant:"subtitle2"},"Sign in on the internal platform"),i.a.createElement(_,{className:e.loginForm}),i.a.createElement(u.a,{className:e.divider}),i.a.createElement(m.a,{align:"center",color:"secondary",component:s.a,to:"/auth/register",underline:"always",variant:"subtitle2"},"Don't have an account?")),i.a.createElement(p.a,{className:e.media,image:"/images/auth.png",title:"Cover"},i.a.createElement(d.a,{color:"inherit",variant:"subtitle1"},"Hella narvwhal Cosby sweater McSweeney's, salvia kitsch before they sold out High Life."),i.a.createElement("div",{className:e.person},i.a.createElement(g.a,{alt:"Person",className:e.avatar,src:"/images/avatars/avatar_2.png"}),i.a.createElement("div",null,i.a.createElement(d.a,{color:"inherit",variant:"body1"},"Ekaterina Tankova"),i.a.createElement(d.a,{color:"inherit",variant:"body2"},"Manager at inVision"))))))}}}]);
//# sourceMappingURL=19.c78fcf26.chunk.js.map