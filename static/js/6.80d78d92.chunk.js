(this.webpackJsonpflight_board=this.webpackJsonpflight_board||[]).push([[6],{1167:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return fe}));var n=t(22),r=t(12),c=t(0),l=t.n(c),i=t(2),s=t(980),o=t(30),m=t(64),d=t(17),u=t(8),p=t(1003),g=t(549),h=t(1007),v=t(966),E=t(1008),f=t(968),b=t(135),N=t.n(b),j=t(18),y=t(4),O=t.n(y),x=t(6),w=t(969),k=t(1016),C=t(1051),S=t(1012),I=t(75),U=Object(s.a)((function(e){return{active:{boxShadow:"inset 4px 0px 0px ".concat(e.palette.primary.main),backgroundColor:x.a.grey[50]},avatar:{height:40,width:40},details:{marginLeft:e.spacing(2),display:"flex",flexDirection:"column",alignItems:"flex-end"},unread:{marginTop:2,padding:2,height:18,minWidth:18}}})),B=function(e){var a=e.active,t=e.conversation,r=e.className,c=Object(u.a)(e,["active","conversation","className"]),s=U(),o=t.messages[t.messages.length-1];return l.a.createElement(w.a,Object.assign({},c,{button:!0,className:Object(i.a)(Object(n.a)({},s.active,a),r),component:j.a,to:"/chat/".concat(t.id)}),l.a.createElement(k.a,null,l.a.createElement(C.a,{alt:"Person",className:s.avatar,src:t.otherUser.avatar})),l.a.createElement(S.a,{primary:t.otherUser.name,primaryTypographyProps:{noWrap:!0,variant:"h6"},secondary:"".concat(o.sender.name,": ").concat(o.content),secondaryTypographyProps:{noWrap:!0,variant:"body1"}}),l.a.createElement("div",{className:s.details},l.a.createElement(I.a,{noWrap:!0,variant:"body2"},O()(o.created_at).isSame(O()(),"day")?O()(o.created_at).format("LT"):O()(o.created_at).fromNow()),t.unread>0&&l.a.createElement(d.e,{className:s.unread,color:x.a.red[500],shape:"rounded"},t.unread)))},T=Object(s.a)((function(e){return{root:{backgroundColor:e.palette.white},searchInput:{flexGrow:1}}})),_=function(e){var a=e.conversations,t=e.className,n=Object(u.a)(e,["conversations","className"]),r=T(),c=Object(m.a)().match.params.id;return l.a.createElement("div",Object.assign({},n,{className:Object(i.a)(r.root,t)}),l.a.createElement(p.a,null,l.a.createElement(g.a,{className:r.searchInput,disableUnderline:!0,placeholder:"Search contacts"}),l.a.createElement(h.a,{title:"Search"},l.a.createElement(v.a,{edge:"end"},l.a.createElement(N.a,null)))),l.a.createElement(E.a,null),l.a.createElement(f.a,{disablePadding:!0},a.map((function(e,t){return l.a.createElement(B,{active:e.id===c,conversation:e,divider:t<a.length-1,key:e.id})}))))},L=t(161),R=t(507),A=t(1014),W=t(1011),D=t(490),G=t.n(D),P=t(491),$=t.n(P),M=t(162),J=t.n(M),X=t(120),z=t.n(X),F=t(492),H=t.n(F),q=t(114),K=t.n(q),Q=Object(s.a)((function(e){return{root:{backgroundColor:e.palette.white},backButton:{marginRight:e.spacing(2),"@media (min-width: 864px)":{display:"none"}},user:{flexShrink:0,flexGrow:1},activity:{display:"flex",alignItems:"center"},statusBullet:{marginRight:e.spacing(1)},search:Object(n.a)({height:42,padding:e.spacing(0,2),display:"flex",alignItems:"center",flexBasis:300,marginLeft:"auto"},e.breakpoints.down("sm"),{flex:"1 1 auto"}),searchIcon:{marginRight:e.spacing(2),color:e.palette.icon},searchInput:{flexGrow:1}}})),V=function(e){var a=e.conversation,t=e.className,n=Object(u.a)(e,["conversation","className"]),s=Q(),o=Object(c.useRef)(null),m=Object(c.useState)(!1),E=Object(r.a)(m,2),f=E[0],b=E[1];return l.a.createElement(p.a,Object.assign({},n,{className:Object(i.a)(s.root,t)}),l.a.createElement(h.a,{title:"Back"},l.a.createElement(v.a,{className:s.backButton,component:j.a,edge:"start",to:"/chat"},l.a.createElement(G.a,null))),l.a.createElement("div",{className:s.user},l.a.createElement(I.a,{variant:"h6"},a.otherUser.name),l.a.createElement("div",{className:s.activity},a.otherUser.active?l.a.createElement(c.Fragment,null,l.a.createElement(d.p,{className:s.statusBullet,color:"success",size:"small"}),l.a.createElement(I.a,{variant:"body2"},"Active now")):l.a.createElement(I.a,{variant:"body2"},"Active ",O()(a.otherUser.lastActivity).fromNow()))),l.a.createElement(L.a,{className:s.search,elevation:1},l.a.createElement(N.a,{className:s.searchIcon}),l.a.createElement(g.a,{className:s.searchInput,disableUnderline:!0,placeholder:"Search email"})),l.a.createElement(h.a,{title:"More options"},l.a.createElement(v.a,{onClick:function(){b(!0)},ref:o},l.a.createElement(K.a,null))),l.a.createElement(R.a,{anchorEl:o.current,keepMounted:!0,onClose:function(){b(!1)},open:f},l.a.createElement(A.a,null,l.a.createElement(W.a,null,l.a.createElement($.a,null)),l.a.createElement(S.a,{primary:"Block user"})),l.a.createElement(A.a,null,l.a.createElement(W.a,null,l.a.createElement(J.a,null)),l.a.createElement(S.a,{primary:"Delete conversation"})),l.a.createElement(A.a,null,l.a.createElement(W.a,null,l.a.createElement(z.a,null)),l.a.createElement(S.a,{primary:"Archive conversation"})),l.a.createElement(A.a,null,l.a.createElement(W.a,null,l.a.createElement(H.a,null)),l.a.createElement(S.a,{primary:"Mute notifications"}))))},Y=t(39),Z=t.n(Y),ee=t(1010),ae=Object(s.a)((function(e){return{root:{marginBottom:e.spacing(2)},authUser:{display:"flex",justifyContent:"flex-end","& $body":{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText}},inner:{display:"flex",maxWidth:500},avatar:{marginRight:e.spacing(2)},body:{backgroundColor:x.a.grey[100],color:e.palette.text.primary,borderRadius:e.shape.borderRadius,padding:e.spacing(1,2)},content:{marginTop:e.spacing(1)},image:{marginTop:e.spacing(2),height:"auto",width:380,maxWidth:"100%"},footer:{marginTop:e.spacing(1),display:"flex",justifyContent:"flex-end"}}})),te=function(e){var a=e.message,t=e.className,r=Object(u.a)(e,["message","className"]),c=ae();return l.a.createElement("div",Object.assign({},r,{className:Object(i.a)(c.root,Object(n.a)({},c.authUser,a.sender.authUser),t)}),l.a.createElement("div",{className:c.inner},l.a.createElement(C.a,{className:c.avatar,component:j.a,src:a.sender.avatar,to:"/profile/1/timeline"}),l.a.createElement("div",null,l.a.createElement("div",{className:c.body},l.a.createElement("div",null,l.a.createElement(ee.a,{color:"inherit",component:j.a,to:"/profile/1/timeline",variant:"h6"},a.sender.authUser?"Me":a.sender.name)),l.a.createElement("div",{className:c.content},"image"===a.contentType?l.a.createElement("img",{alt:"Attachment",className:c.image,src:a.content}):l.a.createElement(I.a,{color:"inherit",variant:"body1"},a.content))),l.a.createElement("div",{className:c.footer},l.a.createElement(I.a,{className:c.time,variant:"body2"},O()(a.created_at).fromNow())))))},ne=Object(s.a)((function(e){return{root:{flexGrow:1,overflow:"hidden",maxHeight:"100%"},inner:{padding:e.spacing(2)}}})),re=function(e){var a=e.messages,t=e.className,n=Object(u.a)(e,["messages","className"]),r=ne();return l.a.createElement("div",Object.assign({},n,{className:Object(i.a)(r.root,t)}),l.a.createElement(Z.a,null,l.a.createElement("div",{className:r.inner},a.map((function(e){return l.a.createElement(te,{key:e.id,message:e})})))))},ce=t(98),le=t.n(ce),ie=t(137),se=t.n(ie),oe=t(138),me=t.n(oe),de=Object(s.a)((function(e){return{root:{backgroundColor:e.palette.white,display:"flex",alignItems:"center",padding:e.spacing(1,2)},paper:{flexGrow:1,marginLeft:e.spacing(2),padding:e.spacing(.5,2)},input:{width:"100%"},divider:{width:1,height:24},fileInput:{display:"none"}}})),ue=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=de(),s=Object(c.useRef)(null),o=Object(c.useState)(""),m=Object(r.a)(o,2),d=m[0],p=m[1],f=function(){s.current.click()};return l.a.createElement("div",Object.assign({},t,{className:Object(i.a)(n.root,a)}),l.a.createElement(C.a,{alt:"Person",src:"/images/avatars/avatar_11.png"}),l.a.createElement(L.a,{className:n.paper,elevation:1},l.a.createElement(g.a,{className:n.input,disableUnderline:!0,onChange:function(e){e.persist(),p(e.target.value)},placeholder:"Leave a message"})),l.a.createElement(h.a,{title:"Send"},l.a.createElement(v.a,{color:d.length>0?"primary":"default"},l.a.createElement(le.a,null))),l.a.createElement(E.a,{className:n.divider}),l.a.createElement(h.a,{title:"Attach photo"},l.a.createElement(v.a,{edge:"end",onClick:f},l.a.createElement(se.a,null))),l.a.createElement(h.a,{title:"Attach file"},l.a.createElement(v.a,{edge:"end",onClick:f},l.a.createElement(me.a,null))),l.a.createElement("input",{className:n.fileInput,ref:s,type:"file"}))},pe=Object(s.a)((function(e){return{root:{display:"flex",flexDirection:"column",backgroundColor:e.palette.white}}})),ge=function(e){var a=e.conversation,t=e.className,n=Object(u.a)(e,["conversation","className"]),r=pe();return l.a.createElement("div",Object.assign({},n,{className:Object(i.a)(r.root,t)}),l.a.createElement(V,{conversation:a}),l.a.createElement(E.a,null),l.a.createElement(re,{messages:a.messages}),l.a.createElement(E.a,null),l.a.createElement(ue,null))},he=Object(s.a)((function(e){return{root:{display:"flex",alignItems:"center",justifyContent:"center"},inner:{textAlign:"center"},image:{maxWidth:400},title:{margin:e.spacing(4,0,1,0)}}})),ve=function(e){var a=e.className,t=Object(u.a)(e,["className"]),n=he();return l.a.createElement("div",Object.assign({},t,{className:Object(i.a)(n.root,a)}),l.a.createElement("div",{className:n.inner},l.a.createElement("img",{alt:"Select conversation",className:n.image,src:"/images/undraw_work_chat_erdt.svg"}),l.a.createElement(I.a,{className:n.title,variant:"h4"},"Select conversation to display"),l.a.createElement(I.a,{variant:"subtitle1"},"To start a conversation just click the message button from a person profile")))},Ee=Object(s.a)((function(e){return{root:{height:"100%",cursor:"pointer",display:"flex",overflow:"hidden","@media (max-width: 863px)":{"& $conversationList, & $conversationDetails":{flexBasis:"100%",width:"100%",maxWidth:"none",flexShrink:"0",transform:"translateX(0)"}}},openConversion:{"@media (max-width: 863px)":{"& $conversationList, & $conversationDetails":{transform:"translateX(-100%)"}}},conversationList:{width:300,flexBasis:300,flexShrink:0,"@media (min-width: 864px)":{borderRight:"1px solid ".concat(e.palette.divider)}},conversationDetails:{flexGrow:1},conversationPlaceholder:{flexGrow:1}}})),fe=function(){var e,a,t=Ee(),s=Object(m.a)(),u=Object(c.useState)([]),p=Object(r.a)(u,2),g=p[0],h=p[1];return Object(c.useEffect)((function(){var e=!0;return o.a.get("/api/chat/conversations").then((function(a){e&&h(a.data.conversations)})),function(){e=!1}}),[]),s.match.params.id&&(a=g.find((function(e){return e.id===s.match.params.id}))),l.a.createElement(d.h,{className:Object(i.a)((e={},Object(n.a)(e,t.root,!0),Object(n.a)(e,t.openConversion,a),e)),title:"Chat"},l.a.createElement(_,{className:t.conversationList,conversations:g}),a?l.a.createElement(ge,{className:t.conversationDetails,conversation:a}):l.a.createElement(ve,{className:t.conversationPlaceholder}))}}}]);
//# sourceMappingURL=6.80d78d92.chunk.js.map