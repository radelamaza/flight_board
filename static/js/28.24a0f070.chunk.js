(this.webpackJsonpflight_board=this.webpackJsonpflight_board||[]).push([[28],{1091:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return U}));var n=t(91),r=t(17),i=t(270),o=t(15),c=t(0),l=t.n(c),s=t(1079),d=t(990),m=t.n(d),p=t(3),u=t.n(p),f=t(903),g=t(27),b=t(16),v=t(9),h=t(2),E=t(939),O=t(68),j=t(890),y=Object(f.a)((function(e){return{root:{padding:e.spacing(3)}}})),N=function(e){var a=e.onListAdd,t=e.className,n=Object(v.a)(e,["onListAdd","className"]),r=y();return l.a.createElement("div",Object.assign({},n,{className:Object(h.a)(r.root,t)}),l.a.createElement(E.a,{alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},l.a.createElement(E.a,{item:!0},l.a.createElement(O.a,{component:"h2",gutterBottom:!0,variant:"overline"},"Organization"),l.a.createElement(O.a,{component:"h1",variant:"h3"},"Kanban Board")),l.a.createElement(E.a,{item:!0},l.a.createElement(j.a,{color:"primary",onClick:a,variant:"contained"},"Add list"))))},x=t(22),w=t(35),k=t.n(w),I=t(924),D=t(889),L=t(144),A=t.n(L),S=Object(f.a)((function(e){return{root:Object(x.a)({userSelect:"none",whiteSpace:"normal",height:"100%",display:"inline-flex",flexDirection:"column",verticalAlign:"top",width:500,padding:e.spacing(0,1),margin:e.spacing(0,1)},e.breakpoints.down("xs"),{width:300}),isDraggingOver:{},header:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,padding:e.spacing(.5,2),borderRadius:4,display:"flex",alignItems:"center"},counter:{marginLeft:e.spacing(1)},headerAction:{marginLeft:"auto"},content:{flexGrow:1,overflowY:"hidden"},inner:{padding:e.spacing(2,3)}}})),C=function(e){var a=e.title,t=e.total,n=e.provided,r=e.snapshot,i=e.className,o=e.children,c=Object(v.a)(e,["title","total","provided","snapshot","className","children"]),s=S();return l.a.createElement("div",Object.assign({},c,{className:Object(h.a)(s.root,i),ref:n.innerRef}),l.a.createElement("div",{className:s.header},l.a.createElement(O.a,{color:"inherit",variant:"h5"},a),l.a.createElement(O.a,{className:s.counter,color:"inherit",variant:"h6"},"- ",t),l.a.createElement("div",{className:s.headerAction},l.a.createElement(I.a,{title:"Add task"},l.a.createElement(D.a,{color:"inherit",edge:"end",variant:"contained"},l.a.createElement(A.a,null))))),l.a.createElement("div",{className:Object(h.a)(s.content,Object(x.a)({},s.isDraggingOver,r.isDraggingOver))},l.a.createElement(k.a,{options:{suppressScrollX:!0}},l.a.createElement("div",{className:s.inner},o))))},P=t(5),T=t.n(P),B=t(922),G=t(934),M=t(923),R=t(147),J=t.n(R),K=t(1024),X=t.n(K),Y=Object(f.a)((function(e){return{root:{outline:"none",marginBottom:e.spacing(2)},isDragging:{},content:{paddingTop:0},stats:{display:"flex",alignItems:"center"},flexGrow:{flexGrow:1},files:{color:e.palette.icon,marginLeft:e.spacing(2),display:"flex",alignItems:"center"},comments:{color:e.palette.icon,marginLeft:e.spacing(2),display:"flex",alignItems:"center"},date:{marginLeft:e.spacing(2)},progress:{marginTop:e.spacing(2)}}})),_=function(e){var a=e.task,t=(e.onOpen,e.provided),n=e.snapshot,i=e.className,o=e.style,c=Object(v.a)(e,["task","onOpen","provided","snapshot","className","style"]),s=Y();return l.a.createElement(B.a,Object.assign({},c,{ref:t.innerRef},t.draggableProps,t.dragHandleProps,{className:Object(h.a)(s.root,Object(x.a)({},s.isDragging,n.isDragging),i),style:Object(r.a)(Object(r.a)({},o),t.draggableProps.style)}),l.a.createElement(G.a,{action:l.a.createElement(b.e,null),subheader:"#".concat(a.ref),subheaderTypographyProps:{variant:"overline"},title:a.title,titleTypographyProps:{variant:"h5",gutterBottom:!0}}),l.a.createElement(M.a,{className:s.content},l.a.createElement("div",{className:s.stats},l.a.createElement(b.t,{avatars:a.members,limit:4}),a.files>0&&l.a.createElement("div",{className:s.files},l.a.createElement(J.a,null)),a.comments>0&&l.a.createElement("div",{className:s.comments},l.a.createElement(X.a,null)),l.a.createElement("div",{className:s.flexGrow}),l.a.createElement(O.a,{className:s.date,color:"textSecondary",variant:"body2"},T()(a.deadline).format("D MMM")))))};_.displayName="TaskListItem",_.defaultProps={style:{},onOpen:function(){}};var z=_,H=t(260),W=Object(f.a)((function(e){return{root:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",outline:"none",boxShadow:e.shadows[20],width:360,maxWidth:"100%"}}})),q=function(e){var a=e.open,t=e.onClose,n=e.task,r=e.className,i=Object(v.a)(e,["open","onClose","task","className"]),o=W();return a?l.a.createElement(H.a,{onClose:t,open:a},l.a.createElement(B.a,Object.assign({},i,{className:Object(h.a)(o.root,r)}),l.a.createElement(M.a,null,l.a.createElement(O.a,{variant:"h6"},n.title),l.a.createElement(O.a,{variant:"body1"},n.desc)))):null};q.displayName="TaskDetails",q.defaultProps={open:!1,onClose:function(){}};var F=q,Q=Object(f.a)((function(e){return{root:{height:"100%",display:"flex",flexDirection:"column"},content:{flexGrow:1,padding:e.spacing(0,3,3,1),overflowX:"auto",overflowY:"hidden",whiteSpace:"nowrap"}}})),U=function(){var e=Q(),a=Object(c.useState)([]),t=Object(o.a)(a,2),d=t[0],p=t[1],f=Object(c.useState)(null),v=Object(o.a)(f,2),h=v[0],E=v[1];Object(c.useEffect)((function(){var e=!0;return g.a.get("/api/kanban").then((function(a){if(e){var t,n=[],o=Object(i.a)(a.data.lists);try{for(o.s();!(t=o.n()).done;){var c=t.value;n.push(Object(r.a)(Object(r.a)({},c),{},{items:[]}))}}catch(m){o.e(m)}finally{o.f()}var l,s=Object(i.a)(a.data.tasks);try{var d=function(){var e=l.value;n.forEach((function(a){a.id===e.list&&a.items.push(e)}))};for(s.s();!(l=s.n()).done;)d()}catch(m){s.e(m)}finally{s.f()}p(n)}})),function(){e=!1}}),[]);return l.a.createElement(b.k,{className:e.root,title:"Kanban Board"},l.a.createElement(N,{onListAdd:function(){var e={id:u()(),title:"New list",items:[]};p((function(a){return[].concat(Object(n.a)(a),[e])}))}}),l.a.createElement("div",{className:e.content},l.a.createElement(s.a,{onDragEnd:function(e){var a=e.source,t=e.destination;if(t){var n=m.a.clone(d),r=n.find((function(e){return e.id===a.droppableId})),i=n.find((function(e){return e.id===t.droppableId})),c=r.items.splice(a.index,1),l=Object(o.a)(c,1)[0];a.droppableId===t.droppableId?(r.items.splice(t.index,0,l),p(n)):(l.list=t.droppableId,i.items.splice(t.index,0,l),p(n))}}},d.map((function(e){return l.a.createElement(s.c,{droppableId:e.id,key:e.id},(function(a,t){return l.a.createElement(C,{provided:a,snapshot:t,title:e.title,total:e.items.length},e.items.map((function(e,a){return l.a.createElement(s.b,{draggableId:e.id,index:a,key:e.id},(function(a,t){return l.a.createElement(z,{onOpen:function(){return function(e){E(e)}(e)},provided:a,snapshot:t,task:e})}))})),a.placeholder)}))})))),l.a.createElement(F,{onClose:function(){E(null)},open:Boolean(h),task:h}))}}}]);
//# sourceMappingURL=28.24a0f070.chunk.js.map