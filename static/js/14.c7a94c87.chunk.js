(this.webpackJsonpflight_board=this.webpackJsonpflight_board||[]).push([[14],{1006:function(t,e,r){"use strict";var n=r(12);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(r(0)),o=(0,n(r(13)).default)(a.default.createElement("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"}),"Lock");e.default=o},1098:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return C}));var n=r(22),a=r(0),o=r.n(a),i=r(18),c=r(903),s=r(922),l=r(923),u=r(68),h=r(925),f=r(927),d=r(937),p=r(965),v=r(1006),m=r.n(v),g=r(16),y=r(49),w=r(982),b=r.n(w),E=r(984),x=r(17),j=r(15),O=r(9),L=r(251),N=r.n(L),k=r(2),_=r(59),S=r(941),T=r(890),P=r(58),G=(r(185),{email:{presence:{allowEmpty:!1,message:"is required"},email:!0},password:{presence:{allowEmpty:!1,message:"is required"}}}),R=Object(c.a)((function(t){return{root:{},fields:{margin:t.spacing(-1),display:"flex",flexWrap:"wrap","& > *":{flexGrow:1,margin:t.spacing(1)}},submitButton:{marginTop:t.spacing(2),width:"100%"}}})),F=function(t){var e=t.className,r=Object(O.a)(t,["className"]),i=R(),c=Object(P.a)(),s=(Object(_.c)(),Object(a.useState)({isValid:!1,values:{},touched:{},errors:{}})),l=Object(j.a)(s,2),u=l[0],h=l[1];Object(a.useEffect)((function(){var t=N()(u.values,G);h((function(e){return Object(x.a)(Object(x.a)({},e),{},{isValid:!t,errors:t||{}})}))}),[u.values]);var f=function(t){t.persist(),h((function(e){return Object(x.a)(Object(x.a)({},e),{},{values:Object(x.a)(Object(x.a)({},e.values),{},Object(n.a)({},t.target.name,"checkbox"===t.target.type?t.target.checked:t.target.value)),touched:Object(x.a)(Object(x.a)({},e.touched),{},Object(n.a)({},t.target.name,!0))})}))},d=function(){var t=Object(E.a)(b.a.mark((function t(e){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.preventDefault(),c.history.push("/");case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(t){return!(!u.touched[t]||!u.errors[t])};return o.a.createElement("form",Object.assign({},r,{className:Object(k.a)(i.root,e),onSubmit:d}),o.a.createElement("div",{className:i.fields},o.a.createElement(S.a,{error:p("email"),fullWidth:!0,helperText:p("email")?u.errors.email[0]:null,label:"Email address",name:"email",onChange:f,value:u.values.email||"",variant:"outlined"}),o.a.createElement(S.a,{error:p("password"),fullWidth:!0,helperText:p("password")?u.errors.password[0]:null,label:"Password",name:"password",onChange:f,type:"password",value:u.values.password||"",variant:"outlined"})),o.a.createElement(T.a,{className:i.submitButton,color:"secondary",disabled:!u.isValid,size:"large",type:"submit",variant:"contained"},"Sign in"))},V=Object(c.a)((function(t){return{root:{height:"100%",display:"flex",alignItems:"center",justifyContent:"center",padding:t.spacing(6,2)},card:{width:t.breakpoints.values.md,maxWidth:"100%",overflow:"unset",display:"flex",position:"relative","& > *":{flexGrow:1,flexBasis:"50%",width:"50%"}},content:{padding:t.spacing(8,4,3,4)},media:Object(n.a)({borderTopRightRadius:4,borderBottomRightRadius:4,padding:t.spacing(3),color:t.palette.white,display:"flex",flexDirection:"column",justifyContent:"flex-end"},t.breakpoints.down("md"),{display:"none"}),icon:{backgroundImage:y.a.green,color:t.palette.white,borderRadius:t.shape.borderRadius,padding:t.spacing(1),position:"absolute",top:-32,left:t.spacing(3),height:64,width:64,fontSize:32},loginForm:{marginTop:t.spacing(3)},divider:{margin:t.spacing(2,0)},person:{marginTop:t.spacing(2),display:"flex"},avatar:{marginRight:t.spacing(2)}}})),C=function(){var t=V();return o.a.createElement(g.k,{className:t.root,title:"Login"},o.a.createElement(s.a,{className:t.card},o.a.createElement(l.a,{className:t.content},o.a.createElement(m.a,{className:t.icon}),o.a.createElement(u.a,{gutterBottom:!0,variant:"h3"},"Sign in"),o.a.createElement(u.a,{variant:"subtitle2"},"Sign in on the internal platform"),o.a.createElement(F,{className:t.loginForm}),o.a.createElement(h.a,{className:t.divider}),o.a.createElement(f.a,{align:"center",color:"secondary",component:i.a,to:"/auth/register",underline:"always",variant:"subtitle2"},"Don't have an account?")),o.a.createElement(d.a,{className:t.media,image:"/images/auth.png",title:"Cover"},o.a.createElement(u.a,{color:"inherit",variant:"subtitle1"},"Hella narvwhal Cosby sweater McSweeney's, salvia kitsch before they sold out High Life."),o.a.createElement("div",{className:t.person},o.a.createElement(p.a,{alt:"Person",className:t.avatar,src:"/images/avatars/avatar_2.png"}),o.a.createElement("div",null,o.a.createElement(u.a,{color:"inherit",variant:"body1"},"Ekaterina Tankova"),o.a.createElement(u.a,{color:"inherit",variant:"body2"},"Manager at inVision"))))))}},982:function(t,e,r){t.exports=r(983)},983:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(N){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),i=new j(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=s;var u={};function h(){}function f(){}function d(){}var p={};p[a]=function(){return this};var v=Object.getPrototypeOf,m=v&&v(v(O([])));m&&m!==e&&r.call(m,a)&&(p=m);var g=d.prototype=h.prototype=Object.create(p);function y(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var s=l(t[a],t,o);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=g.constructor=d,d.constructor=f,f.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},y(w.prototype),w.prototype[o]=function(){return this},t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(g),c(g,i,"Generator"),g[a]=function(){return this},g.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},984:function(t,e,r){"use strict";function n(t,e,r,n,a,o,i){try{var c=t[o](i),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,s,"next",t)}function s(t){n(i,a,o,c,s,"throw",t)}c(void 0)}))}}r.d(e,"a",(function(){return a}))}}]);
//# sourceMappingURL=14.c7a94c87.chunk.js.map