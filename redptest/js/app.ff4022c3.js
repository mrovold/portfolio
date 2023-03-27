(function(){"use strict";var e={2837:function(e,t,n){var o=n(7195),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",[t("b-nav-item",{attrs:{to:"/"}},[e._v("Главная")]),t("b-nav-item",{attrs:{to:"/profile"}},[e._v("Профиль")]),t("b-nav-item",{attrs:{to:"/ticket"}},[e._v("Список обращений")])],1),t("b-navbar-nav",{staticClass:"ml-auto"},[t("b-nav-item-dropdown",{staticClass:"show__logout",attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[t("em",[e._v("Пользователь")])]},proxy:!0}])},[t("b-dropdown-item",{on:{click:e.logout}},[e._v("Выйти")])],1)],1)],1)],1),t("router-view")],1)},a=[],s={beforeCreate(){localStorage.username="",localStorage.password=""},computed:{isLoggedIn:function(){if(""!=localStorage.username&&""!=localStorage.password)return this.username=localStorage.username,!0}},methods:{logout:function(){localStorage.username="",localStorage.password=""}}},i=s,u=n(1001),l=(0,u.Z)(i,r,a,!1,null,null,null),c=l.exports,d=n(2241),f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("Login")],1)},p=[],m=function(){var e=this,t=e._self._c;return t("div",{staticClass:"b-form__wrapper"},[t("b-form",{staticClass:"b-form",on:{submit:function(e){e.stopPropagation(),e.preventDefault()}}},[t("label",{staticClass:"sr-only",attrs:{for:"inline-form-input-name"}},[e._v("Логин")]),t("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[t("b-form-input",{attrs:{value:"",id:"inline-form-input-username",placeholder:"Пользователь"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),t("label",{staticClass:"sr-only",attrs:{for:"inline-form-input-username",input:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}},[e._v("Пароль")]),t("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:""}},[t("b-button",{staticClass:"button",attrs:{variant:"outline-secondary"},on:{click:e.toggleShow}},[e.showPassword?t("b-icon",{attrs:{icon:"eye-fill"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}):t("b-icon",{attrs:{icon:"eye-slash-fill"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e.showPassword?t("b-form-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{value:"",type:"text",id:"inline-form-input-name"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}):t("b-form-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{value:"",type:"password",id:"inline-form-input-name"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),t("b-button",{attrs:{variant:"outline-info"},on:{click:e.persist}},[e._v("Войти")])],1)],1)},b=[],v={data:{username:"",password:""},data(){return{showPassword:!1,password:"",username:""}},mounted(){localStorage.username&&(this.username=localStorage.username),localStorage.password&&(this.password=localStorage.password)},computed:{buttonLabel(){return this.showPassword?"Hide":"Show"}},methods:{toggleShow(){this.showPassword=!this.showPassword},persist(){localStorage.username=this.username,localStorage.password=this.password}}},h=v,g=(0,u.Z)(h,m,b,!1,null,"49809e8b",null),w=g.exports,y={name:"HomeView",components:{Login:w}},k=y,S=(0,u.Z)(k,f,p,!1,null,"2534d636",null),C=S.exports;o["default"].use(d.ZP);const _=[{path:"/login",name:"login",component:C},{path:"/",name:"main",meta:{auth:!0},component:()=>n.e(443).then(n.bind(n,7210))},{path:"/profile",name:"profile",meta:{auth:!0},component:()=>n.e(443).then(n.bind(n,5042))},{path:"/ticket",name:"ticket",meta:{auth:!0},component:()=>n.e(443).then(n.bind(n,6235))}],P=new d.ZP({routes:_});P.beforeEach(((e,t,n)=>{const o=e.matched.some((e=>e.meta.auth));o&&""==localStorage.username&&""==localStorage.password?n("/login"):n()}));var x=P,O=n(408);o["default"].use(O.ZP);var j=new O.ZP.Store({state:{status:"",token:localStorage.getItem("token")||"",user:{}},getters:{},mutations:{},actions:{},modules:{}}),E=n(4359),A=n(7244);n(7024);o["default"].use(E.XG7),o["default"].use(A.A7),o["default"].config.productionTip=!1,new o["default"]({router:x,store:j,render:e=>e(c)}).$mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var s=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],a=e[c][2];for(var i=!0,u=0;u<o.length;u++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[u])}))?o.splice(u--,1):(i=!1,a<s&&(s=a));if(i){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.57ef0e30.js"}}(),function(){n.miniCssF=function(e){return"css/about.e7e48cdd.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="redptest:";n.l=function(o,r,a,s){if(e[o])e[o].push(r);else{var i,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+a){i=d;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+a),i.src=o),e[o]=[r];var f=function(t,n){i.onerror=i.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var s=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=i,a.parentNode&&a.parentNode.removeChild(a),r(u)}};return a.onerror=a.onload=s,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){r=s[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var s=n.miniCssF(o),i=n.p+s;if(t(s,i))return r();e(o,i,null,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={443:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var s=n.p+n.u(t),i=new Error,u=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,r[1](i)}};n.l(s,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,s=o[0],i=o[1],u=o[2],l=0;if(s.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(u)var c=u(n)}for(t&&t(o);l<s.length;l++)a=s[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},o=self["webpackChunkredptest"]=self["webpackChunkredptest"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2837)}));o=n.O(o)})();
//# sourceMappingURL=app.ff4022c3.js.map