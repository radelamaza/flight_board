(this.webpackJsonpflight_board=this.webpackJsonpflight_board||[]).push([[17],{1063:function(e,t,a){"use strict";var n=a(1),c=a(5),r=a(0),o=(a(7),a(2)),l=a(291),i=a(60),s=Object(i.a)(r.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),m=Object(i.a)(r.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),u=a(15),p=Object(i.a)(r.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),d=a(10),f=a(9),b=r.createElement(m,null),g=r.createElement(s,null),h=r.createElement(p,null),E=r.forwardRef((function(e,t){var a=e.checkedIcon,i=void 0===a?b:a,s=e.classes,m=e.color,u=void 0===m?"secondary":m,p=e.icon,f=void 0===p?g:p,E=e.indeterminate,v=void 0!==E&&E,j=e.indeterminateIcon,O=void 0===j?h:j,k=e.inputProps,y=e.size,N=void 0===y?"medium":y,C=Object(c.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),w=v?O:f,x=v?O:i;return r.createElement(l.a,Object(n.a)({type:"checkbox",classes:{root:Object(o.a)(s.root,s["color".concat(Object(d.a)(u))],v&&s.indeterminate),checked:s.checked,disabled:s.disabled},color:u,inputProps:Object(n.a)({"data-indeterminate":v},k),icon:r.cloneElement(w,{fontSize:void 0===w.props.fontSize&&"small"===N?N:w.props.fontSize}),checkedIcon:r.cloneElement(x,{fontSize:void 0===x.props.fontSize&&"small"===N?N:x.props.fontSize}),ref:t},C))}));t.a=Object(f.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(u.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(u.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(E)},1090:function(e,t,a){"use strict";var n=a(13);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=n(a(0)),r=(0,n(a(14)).default)(c.default.createElement("path",{d:"M7 10l5 5 5-5z"}),"ArrowDropDown");t.default=r},1172:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return q}));var n=a(0),c=a.n(n),r=a(980),o=a(17),l=a(8),i=a(18),s=a(2),m=a(1022),u=a(75),p=a(967),d=a(165),f=a.n(d),b=Object(r.a)((function(e){return{root:{},addIcon:{marginRight:e.spacing(1)}}})),g=function(e){var t=e.className,a=Object(l.a)(e,["className"]),n=b();return c.a.createElement("div",Object.assign({},a,{className:Object(s.a)(n.root,t)}),c.a.createElement(m.a,{alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},c.a.createElement(m.a,{item:!0},c.a.createElement(u.a,{component:"h2",gutterBottom:!0,variant:"overline"},"Browse projects"),c.a.createElement(u.a,{component:"h1",variant:"h3"},"See the latest opportunities")),c.a.createElement(m.a,{item:!0},c.a.createElement(p.a,{color:"primary",component:i.a,to:"/projects/create",variant:"contained"},c.a.createElement(f.a,{className:n.addIcon}),"Submit project"))))},h=a(71),E=a(12),v=a(6),j=a(1005),O=a(549),k=a(1008),y=a(1052),N=a(1026),C=a(1063),w=a(153),x=a.n(w),I=a(135),S=a.n(I),z=a(507),P=a(1014),B=a(1090),A=a.n(B),L=Object(r.a)((function(e){return{root:{},menuItem:{padding:0},formControlLabel:{padding:e.spacing(.5,2),width:"100%",margin:0}}})),M=function(e){var t=e.label,a=e.options,r=e.value,o=e.onChange,l=L(),i=Object(n.useRef)(null),s=Object(n.useState)(!1),m=Object(E.a)(s,2),u=m[0],d=m[1],f=function(e){var t=Object(h.a)(r);e.target.checked?t.push(e.target.value):t=t.filter((function(t){return t!==e.target.value})),o&&o(t)};return c.a.createElement(n.Fragment,null,c.a.createElement(p.a,{onClick:function(){d(!0)},ref:i},t,c.a.createElement(A.a,null)),c.a.createElement(z.a,{anchorEl:i.current,className:l.menu,onClose:function(){d(!1)},open:u,PaperProps:{style:{width:250}}},a.map((function(e){return c.a.createElement(P.a,{className:l.menuItem,key:e},c.a.createElement(N.a,{className:l.formControlLabel,control:c.a.createElement(C.a,{checked:r.indexOf(e)>-1,color:"primary",onClick:f,value:e}),label:e}))}))))},T=Object(r.a)((function(e){return{root:{},keywords:{padding:e.spacing(2),display:"flex",alignItems:"center"},searchIcon:{color:e.palette.icon,marginRight:e.spacing(2)},chips:{padding:e.spacing(2),display:"flex",alignItems:"center",flexWrap:"wrap"},chip:{margin:e.spacing(1)},selects:{display:"flex",alignItems:"center",flexWrap:"wrap",backgroundColor:v.a.grey[50],padding:e.spacing(1)},inNetwork:{marginLeft:"auto"}}})),R=[{label:"Type",options:["Freelance","Full Time","Part Time","Internship"]},{label:"Level",options:["Novice","Expert"]},{label:"Location",options:["Africa","Asia","Australia","Europe","North America","South America"]},{label:"Roles",options:["Android","Web Developer","iOS"]}],W=function(e){var t=e.className,a=Object(l.a)(e,["className"]),r=T(),o=Object(n.useState)(""),i=Object(E.a)(o,2),m=i[0],u=i[1],p=Object(n.useState)(["Freelance","Full Time","Novice","Europe","Android","Web Developer"]),d=Object(E.a)(p,2),f=d[0],b=d[1],g=function(e){b(e)};return c.a.createElement(j.a,Object.assign({},a,{className:Object(s.a)(r.root,t)}),c.a.createElement("div",{className:r.keywords},c.a.createElement(S.a,{className:r.searchIcon}),c.a.createElement(O.a,{disableUnderline:!0,onChange:function(e){e.persist(),u(e.target.value)},onKeyUp:function(e){e.persist(),13===e.keyCode&&m&&(f.includes(m)||(b((function(e){return[].concat(Object(h.a)(e),[m])})),u("")))},placeholder:"Enter a keyword",value:m})),c.a.createElement(k.a,null),c.a.createElement("div",{className:r.chips},f.map((function(e){return c.a.createElement(y.a,{className:r.chip,deleteIcon:c.a.createElement(x.a,null),key:e,label:e,onDelete:function(){return function(e){b((function(t){return t.filter((function(t){return e!==t}))}))}(e)}})}))),c.a.createElement(k.a,null),c.a.createElement("div",{className:r.selects},R.map((function(e){return c.a.createElement(M,{key:e.label,label:e.label,onChange:g,options:e.options,value:f})})),c.a.createElement(N.a,{className:r.inNetwork,control:c.a.createElement(C.a,{color:"primary",defaultChecked:!0}),label:"In network"})))},D=a(1012),F=a(1055),H=a(1027),V=a(451),$=a.n(V),_=a(30),J=Object(r.a)((function(e){return{root:{},header:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",marginBottom:e.spacing(2)},title:{position:"relative","&:after":{position:"absolute",bottom:-8,left:0,content:'" "',height:3,width:48,backgroundColor:e.palette.primary.main}},actions:{display:"flex",alignItems:"center"},sortButton:{textTransform:"none",letterSpacing:0,marginRight:e.spacing(2)},paginate:{marginTop:e.spacing(3),display:"flex",justifyContent:"center"}}})),U=function(e){var t=e.className,a=Object(l.a)(e,["className"]),r=J(),i=Object(n.useRef)(null),d=Object(n.useState)(!1),f=Object(E.a)(d,2),b=f[0],g=f[1],h=Object(n.useState)("Most popular"),v=Object(E.a)(h,2),j=v[0],O=v[1],k=Object(n.useState)("grid"),y=Object(E.a)(k,2),N=y[0],C=y[1],w=Object(n.useState)([]),x=Object(E.a)(w,2),I=x[0],S=x[1];Object(n.useEffect)((function(){var e=!0;return _.a.get("/api/projects").then((function(t){e&&S(t.data.projects)})),function(){e=!1}}),[]);return c.a.createElement("div",Object.assign({},a,{className:Object(s.a)(r.root,t)}),c.a.createElement("div",{className:r.header},c.a.createElement(u.a,{className:r.title,variant:"h5"},"Showing ",I.length," projects"),c.a.createElement("div",{className:r.actions},c.a.createElement(p.a,{className:r.sortButton,onClick:function(){g(!0)},ref:i},j,c.a.createElement(A.a,null)),c.a.createElement(F.a,{exclusive:!0,onChange:function(e,t){C(t)},size:"small",value:N},c.a.createElement(H.a,{value:"grid"},c.a.createElement($.a,null))))),c.a.createElement(m.a,{container:!0,spacing:3},I.map((function(e){return c.a.createElement(m.a,{item:!0,key:e.id,md:"grid"===N?4:12,sm:"grid"===N?6:12,xs:12},c.a.createElement(o.k,{project:e}))}))),c.a.createElement("div",{className:r.paginate},c.a.createElement(o.i,{pageCount:3})),c.a.createElement(z.a,{anchorEl:i.current,className:r.menu,onClose:function(){g(!1)},open:b},["Most recent","Popular","Price high","Price low","On sale"].map((function(e){return c.a.createElement(P.a,{className:r.menuItem,key:e,onClick:function(){return O(e),void g(!1)}},c.a.createElement(D.a,{primary:e}))}))))},K=Object(r.a)((function(e){return{root:{width:e.breakpoints.values.lg,maxWidth:"100%",margin:"0 auto",padding:e.spacing(3)},header:{marginBottom:e.spacing(3)},filter:{marginTop:e.spacing(3)},results:{marginTop:e.spacing(6)}}})),q=function(){var e=K();return c.a.createElement(o.h,{className:e.root,title:"Projects List"},c.a.createElement(g,{className:e.header}),c.a.createElement(W,{className:e.filter}),c.a.createElement(U,{className:e.results}))}}}]);
//# sourceMappingURL=17.df51420d.chunk.js.map