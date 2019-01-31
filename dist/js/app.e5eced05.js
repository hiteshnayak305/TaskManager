(function(t){function e(e){for(var s,o,r=e[0],l=e[1],c=e[2],d=0,f=[];d<r.length;d++)o=r[d],n[o]&&f.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function o(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2eef0239"}[t]+".js"}function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,s){a=n[t]=[e,s]});e.push(a[2]=s);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=o(t),i=function(e){l.onerror=l.onload=null,clearTimeout(c);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+s+": "+i+")");o.type=s,o.request=i,a[1](o)}n[t]=void 0}};var c=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"navbar"}},[a("nav",[a("div",{staticClass:"nav-wrapper"},[a("a",{staticClass:"brand-logo",attrs:{href:"/"}},[t._v("Task Manager")]),a("ul",{staticClass:"right hide-on-med-and-down",attrs:{id:"nav-mobile"}},[a("li",[a("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),a("li",[a("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])])])])},r=[],l={name:"navbar",components:{}},c=l,d=a("2877"),u=Object(d["a"])(c,o,r,!1,null,null,null),f=u.exports,v={name:"app",components:{Navbar:f}},m=v,p=Object(d["a"])(m,n,i,!1,null,null,null),h=p.exports,k=a("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row",attrs:{id:"home"}},[t._l(t.tasks,function(e){return a("div",{key:e.id},[a("task",{attrs:{task:e},on:{remove:t.remove,edit:t.edit}})],1)}),a("edit",{attrs:{task:t.task},on:{save:t.ed_save,discard:t.ed_discard}}),a("add",{on:{save:t.save}}),a("float-button",{on:{add:t.add}})],2)},_=[],g=a("f499"),w=a.n(g),C=(a("7514"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"task"}},[a("div",{staticClass:"col s12 m6"},[a("div",{staticClass:"card blue-grey darken-1"},[a("div",{staticClass:"card-content white-text"},[a("span",{staticClass:"card-title"},[t._v(t._s(t.task.title))]),a("p",[t._v(t._s(t.task.description))])]),a("div",{staticClass:"card-action"},[a("a",{attrs:{href:"#"},on:{click:function(e){t.edit(t.task.id)}}},[a("i",{staticClass:"material-icons"},[t._v("edit")])]),a("a",{attrs:{href:"#"},on:{click:function(e){t.remove(t.task.id)}}},[a("i",{staticClass:"material-icons"},[t._v("delete")])])])])])])}),y=[],x={name:"task",props:["task"],methods:{edit:function(t){this.$emit("edit",t)},remove:function(t){this.$emit("remove",t)}}},$=x,O=Object(d["a"])($,C,y,!1,null,null,null),S=O.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"edit"}},[a("div",{staticClass:"modal",attrs:{id:"modal_edit"}},[a("div",{staticClass:"modal-content"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.task.title,expression:"task.title"}],attrs:{type:"text",id:"title",placeholder:"Title..."},domProps:{value:t.task.title},on:{input:function(e){e.target.composing||t.$set(t.task,"title",e.target.value)}}}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.task.description,expression:"task.description"}],attrs:{id:"description",placeholder:"Description...",cols:"30",rows:"10"},domProps:{value:t.task.description},on:{input:function(e){e.target.composing||t.$set(t.task,"description",e.target.value)}}})]),a("div",{staticClass:"modal-footer"},[a("a",{staticClass:"modal-close waves-effect waves-green btn-flat",attrs:{href:"#"},on:{click:t.save}},[a("i",{staticClass:"material-icons"},[t._v("save")]),t._v("SAVE")]),a("a",{staticClass:"modal-close waves-effect waves-green btn-flat",attrs:{href:"#"},on:{click:t.discard}},[a("i",{staticClass:"material-icons"},[t._v("delete")]),t._v("DISCARD")])])])])},E=[],P={name:"edit",props:["task"],methods:{show:function(){var t=M.Modal.init(document.getElementById("modal_edit"));t.open()},save:function(){this.$emit("save")},discard:function(){this.$emit("discard")}}},T=P,A=Object(d["a"])(T,j,E,!1,null,null,null),N=A.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"add"}},[a("div",{staticClass:"modal",attrs:{id:"modal_add"}},[a("div",{staticClass:"modal-content"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.task.title,expression:"task.title"}],attrs:{type:"text",id:"title",placeholder:"Title..."},domProps:{value:t.task.title},on:{input:function(e){e.target.composing||t.$set(t.task,"title",e.target.value)}}}),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.task.description,expression:"task.description"}],attrs:{id:"description",placeholder:"Description...",cols:"30",rows:"10"},domProps:{value:t.task.description},on:{input:function(e){e.target.composing||t.$set(t.task,"description",e.target.value)}}})]),a("div",{staticClass:"modal-footer"},[a("a",{staticClass:"modal-close waves-effect waves-green btn-flat",attrs:{href:"#"},on:{click:function(e){t.save(t.task)}}},[a("i",{staticClass:"material-icons"},[t._v("save")]),t._v("SAVE")]),a("a",{staticClass:"modal-close waves-effect waves-green btn-flat",attrs:{href:"#"},on:{click:t.discard}},[a("i",{staticClass:"material-icons"},[t._v("delete")]),t._v("DISCARD")])])])])},B=[],I=a("11c1"),J=a.n(I),F={name:"add",data:function(){return{task:{id:"",title:"",description:""}}},methods:{save:function(t){t.id=J()(),this.$emit("save",t),this.task={id:"",title:"",description:""}},discard:function(){this.task={id:"",title:"",description:""}},add:function(){var t=M.Modal.init(document.getElementById("modal_add"));t.open()}}},R=F,V=Object(d["a"])(R,D,B,!1,null,null,null),q=V.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"float-button"}},[a("div",{staticClass:"fixed-action-btn",attrs:{id:"float_btn"},on:{mouseover:t.hover}},[t._m(0),a("ul",[a("li",[a("a",{staticClass:"btn-floating green",on:{click:t.add}},[a("i",{staticClass:"material-icons"},[t._v("add")])])])])])])},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"btn-floating btn-large red"},[a("i",{staticClass:"large material-icons"},[t._v("mode_edit")])])}],z={name:"float-button",methods:{hover:function(){M.FloatingActionButton.init(document.getElementById("float_btn"))},add:function(){this.$emit("add")}}},G=z,K=Object(d["a"])(G,H,L,!1,null,null,null),Q=K.exports,U={name:"home",components:{Task:S,Edit:N,Add:q,FloatButton:Q},beforeCreate:function(){localStorage.tasks=void 0==localStorage.tasks?"[]":localStorage.tasks},data:function(){return{tasks:JSON.parse(localStorage.tasks),task:{id:"",title:"",description:""}}},methods:{add:function(){q.methods.add()},save:function(t){this.tasks.push(t)},edit:function(t){this.task=this.tasks.find(function(e){return e.id==t}),N.methods.show()},remove:function(t){this.tasks=this.tasks.filter(function(e){return e.id!=t})},ed_save:function(){localStorage.tasks=w()(this.tasks)},ed_discard:function(){this.tasks=JSON.parse(localStorage.tasks)}},watch:{tasks:function(t,e){localStorage.tasks=w()(this.tasks)}}},W=U,X=Object(d["a"])(W,b,_,!1,null,null,null),Y=X.exports;s["a"].use(k["a"]);var Z=new k["a"]({routes:[{path:"/",name:"home",component:Y},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]});a("4d5c"),a("8266");s["a"].config.productionTip=!1,new s["a"]({router:Z,render:function(t){return t(h)}}).$mount("#app")}});
//# sourceMappingURL=app.e5eced05.js.map