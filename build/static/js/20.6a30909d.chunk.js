(this.webpackJsonpflight_board=this.webpackJsonpflight_board||[]).push([[20],{1089:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return W}));var n=t(0),c=t.n(n),r=t(903),o=t(890),l=t(16),i=t(22),s=t(15),m=t(9),u=t(2),d=t(6),p=t(922),f=t(934),b=t(923),g=t(962),v=t(68),j=Object(r.a)((function(e){return{root:{},option:{border:"1px solid ".concat(e.palette.divider),display:"flex",alignItems:"flex-start",padding:e.spacing(2),maxWidth:560,"& + &":{marginTop:e.spacing(2)}},selectedOption:{backgroundColor:d.a.grey[50]},optionRadio:{margin:-10},optionDetails:{marginLeft:e.spacing(2)}}})),E=function(e){var a=e.className,t=Object(m.a)(e,["className"]),r=j(),o=Object(n.useState)("freelancer"),l=Object(s.a)(o,2),d=l[0],E=l[1];return c.a.createElement(p.a,Object.assign({},t,{className:Object(u.a)(r.root,a)}),c.a.createElement(f.a,{title:"Who are you exactly?"}),c.a.createElement(b.a,null,[{value:"freelancer",title:"I'm a freelancer",description:"I'm looking for teamates to join in a personal project"},{value:"projectOwner",title:"I\u2019m a project owner",description:"I'm looking for freelancer or contractors to take care of my project"},{value:"affiliate",title:"I want to join affiliate",description:"I'm looking for freelancer or contractors to take care of my project"}].map((function(e){return c.a.createElement("div",{className:Object(u.a)(r.option,Object(i.a)({},r.selectedOption,d===e.value)),key:e.value},c.a.createElement(g.a,{checked:d===e.value,className:r.optionRadio,color:"primary",onClick:function(a){return function(e,a){E(a.value)}(0,e)}}),c.a.createElement("div",{className:r.optionDetails},c.a.createElement(v.a,{gutterBottom:!0,variant:"h5"},e.title),c.a.createElement(v.a,{variant:"body1"},e.description)))}))))},h=t(91),O=t(17),N=t(5),y=t.n(N),k=t(941),C=t(966),D=t(961),x=t(144),I=t.n(x),P=t(133),w=t.n(P),z=Object(r.a)((function(e){return{root:{},alert:{marginBottom:e.spacing(3)},formGroup:{marginBottom:e.spacing(3)},fieldGroup:{display:"flex",alignItems:"center"},fieldHint:{margin:e.spacing(1,0)},tags:{marginTop:e.spacing(1),"& > * + *":{marginLeft:e.spacing(1)}},flexGrow:{flexGrow:1},dateField:{"& + &":{marginLeft:e.spacing(2)}}}})),S=function(e){var a=e.className,t=Object(m.a)(e,["className"]),r=z(),d={name:"",tag:"",tags:["Full-Time","ReactJS"],startDate:y()(),endDate:y()().add(1,"day")},g=Object(n.useState)(Object(O.a)({},d)),j=Object(s.a)(g,2),E=j[0],N=j[1],x=Object(n.useState)(null),P=Object(s.a)(x,2),S=P[0],T=P[1],B=function(e,a,t){e.persist&&e.persist(),N((function(e){return Object(O.a)(Object(O.a)({},e),{},Object(i.a)({},a,t))}))},G=function(e){T(e)},Y=Boolean(S),M="startDate"===S?y()():y()(E.startDate).add(1,"day"),A=E[S];return c.a.createElement(p.a,Object.assign({},t,{className:Object(u.a)(r.root,a)}),c.a.createElement(f.a,{title:"About this project"}),c.a.createElement(b.a,null,c.a.createElement("form",null,c.a.createElement(l.b,{className:r.alert,message:"Once you choose the project name you can\u2019t change it unless you contact customer support."}),c.a.createElement("div",{className:r.formGroup},c.a.createElement(k.a,{fullWidth:!0,label:"Project Name",name:"name",onChange:function(e){return B(e,"name",e.target.value)},value:E.name,variant:"outlined"})),c.a.createElement("div",{className:r.formGroup},c.a.createElement("div",{className:r.fieldGroup},c.a.createElement(k.a,{className:r.flexGrow,label:"Project Tags",name:"tag",onChange:function(e){return B(e,"tag",e.target.value)},value:E.tag,variant:"outlined"}),c.a.createElement(o.a,{className:r.addButton,onClick:function(){N((function(e){var a=Object(O.a)({},e);return a.tag&&!a.tags.includes(a.tag)&&(a.tags=Object(h.a)(a.tags),a.tags.push(a.tag)),a.tag="",a}))},size:"small"},c.a.createElement(I.a,{className:r.addIcon}),"Add")),c.a.createElement(v.a,{className:r.fieldHint,variant:"body2"},"Tags will be colored depending the technology if the system recognises."),c.a.createElement("div",{className:r.tags},E.tags.map((function(e){return c.a.createElement(C.a,{deleteIcon:c.a.createElement(w.a,null),key:e,label:e,onDelete:function(){return function(e){N((function(a){var t=Object(O.a)({},a);return t.tags=t.tags.filter((function(a){return a!==e})),t}))}(e)}})})))),c.a.createElement("div",{className:r.formGroup},c.a.createElement("div",{className:r.fieldGroup},c.a.createElement(k.a,{className:r.dateField,label:"Start Date",name:"startDate",onClick:function(){return G("startDate")},value:y()(E.startDate).format("DD/MM/YYYY"),variant:"outlined"}),c.a.createElement(k.a,{className:r.dateField,label:"End Date",name:"endDate",onClick:function(){return G("endDate")},value:y()(E.endDate).format("DD/MM/YYYY"),variant:"outlined"}))))),c.a.createElement(D.a,{minDate:M,onAccept:function(e){N((function(a){return Object(O.a)(Object(O.a)({},a),{},Object(i.a)({},S,e))}))},onChange:function(){},onClose:function(){T(!1)},open:Y,style:{display:"none"},value:A,variant:"dialog"}))},T=Object(r.a)((function(){return{root:{}}})),B=function(e){var a=e.className,t=Object(m.a)(e,["className"]),n=T();return c.a.createElement("div",Object.assign({},t,{className:Object(u.a)(n.root,a)}),c.a.createElement(v.a,{component:"h2",gutterBottom:!0,variant:"overline"},"New Project"),c.a.createElement(v.a,{component:"h1",variant:"h3"},"Apply for listing project"))},G=t(943),Y=t(975),M=Object(r.a)((function(e){return{root:{},options:{marginTop:e.spacing(2),display:"flex",flexDirection:"column"}}})),A=function(e){var a=e.className,t=Object(m.a)(e,["className"]),n=M();return c.a.createElement(p.a,Object.assign({},t,{className:Object(u.a)(n.root,a)}),c.a.createElement(f.a,{title:"Preferences"}),c.a.createElement(b.a,null,c.a.createElement(v.a,{gutterBottom:!0,variant:"h6"},"Privacy"),c.a.createElement(v.a,{variant:"body2"},"You will recieve emails in your business email address"),c.a.createElement("div",{className:n.options},c.a.createElement(G.a,{control:c.a.createElement(Y.a,{color:"primary",defaultChecked:!0}),label:"Allow teamates invite others"}),c.a.createElement(G.a,{control:c.a.createElement(Y.a,{color:"primary",defaultChecked:!0}),label:"Private Project"}))))},H=Object(r.a)((function(){return{root:{}}})),L=function(e){var a=e.className,t=Object(m.a)(e,["className"]),n=H();return c.a.createElement(p.a,Object.assign({},t,{className:Object(u.a)(n.root,a)}),c.a.createElement(f.a,{title:"Project cover"}),c.a.createElement(b.a,null,c.a.createElement(l.d,null)))},F=Object(r.a)((function(){return{root:{}}})),R=function(e){var a=e.className,t=Object(m.a)(e,["className"]),n=F();return c.a.createElement(p.a,Object.assign({},t,{className:Object(u.a)(n.root,a)}),c.a.createElement(f.a,{title:"Project details"}),c.a.createElement(b.a,null,c.a.createElement(l.q,{placeholder:"Say something about the product..."})))},V=Object(r.a)((function(e){return{root:{width:e.breakpoints.values.lg,maxWidth:"100%",margin:"0 auto",padding:e.spacing(3,3,6,3)},aboutAuthor:{marginTop:e.spacing(3)},aboutProject:{marginTop:e.spacing(3)},projectCover:{marginTop:e.spacing(3)},projectDetails:{marginTop:e.spacing(3)},preferences:{marginTop:e.spacing(3)},actions:{marginTop:e.spacing(3)}}})),W=function(){var e=V();return c.a.createElement(l.k,{className:e.root,title:"Project Create"},c.a.createElement(B,null),c.a.createElement(E,{className:e.aboutAuthor}),c.a.createElement(S,{className:e.aboutProject}),c.a.createElement(L,{className:e.projectCover}),c.a.createElement(R,{className:e.projectDetails}),c.a.createElement(A,{className:e.preferences}),c.a.createElement("div",{className:e.actions},c.a.createElement(o.a,{color:"primary",variant:"contained"},"Create project")))}},975:function(e,a,t){"use strict";var n=t(1),c=t(4),r=t(0),o=(t(7),t(2)),l=t(261),i=t(53),s=Object(i.a)(r.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=Object(i.a)(r.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),u=t(14),d=Object(i.a)(r.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=t(10),f=t(8),b=r.createElement(m,null),g=r.createElement(s,null),v=r.createElement(d,null),j=r.forwardRef((function(e,a){var t=e.checkedIcon,i=void 0===t?b:t,s=e.classes,m=e.color,u=void 0===m?"secondary":m,d=e.icon,f=void 0===d?g:d,j=e.indeterminate,E=void 0!==j&&j,h=e.indeterminateIcon,O=void 0===h?v:h,N=e.inputProps,y=e.size,k=void 0===y?"medium":y,C=Object(c.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),D=E?O:f,x=E?O:i;return r.createElement(l.a,Object(n.a)({type:"checkbox",classes:{root:Object(o.a)(s.root,s["color".concat(Object(p.a)(u))],E&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:u,inputProps:Object(n.a)({"data-indeterminate":E},N),icon:r.cloneElement(D,{fontSize:void 0===D.props.fontSize&&"small"===k?k:D.props.fontSize}),checkedIcon:r.cloneElement(x,{fontSize:void 0===x.props.fontSize&&"small"===k?k:x.props.fontSize}),ref:a},C))}));a.a=Object(f.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(u.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(u.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(j)}}]);
//# sourceMappingURL=20.6a30909d.chunk.js.map