(function(){"use strict";var t={4053:function(t,e,n){var o=n(7195),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item",{attrs:{to:"/"}},[t._v("Home")]),e("b-nav-item",{attrs:{to:"/cards"}},[t._v("Cards")]),e("b-nav-item",{attrs:{to:"/about"}},[t._v("About")])],1),e("b-navbar-nav",{staticClass:"ml-auto"},[e("b-nav-item-dropdown",{staticClass:"show__logout",attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("em",[t._v("Пользователь")])]},proxy:!0}])},[e("b-dropdown-item",{on:{click:t.logout}},[t._v("Выйти")])],1)],1)],1)],1),e("router-view")],1)},a=[],s={beforeCreate(){localStorage.username="",localStorage.password=""},computed:{isLoggedIn:function(){if(""!=localStorage.username&&""!=localStorage.password)return this.username=localStorage.username,!0}},methods:{logout:function(){localStorage.username="",localStorage.password=""}}},i=s,u=n(1001),l=(0,u.Z)(i,r,a,!1,null,null,null),c=l.exports,d=n(2241),f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("Login")],1)},p=[],m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"b-form__wrapper"},[e("b-form",{staticClass:"b-form",on:{submit:function(t){t.stopPropagation(),t.preventDefault()}}},[e("label",{staticClass:"sr-only",attrs:{for:"inline-form-input-name"}},[t._v("Имя")]),e("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0"},[e("b-form-input",{attrs:{value:"",id:"inline-form-input-username",placeholder:"Пользователь"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),e("label",{staticClass:"sr-only",attrs:{for:"inline-form-input-username",input:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[t._v("Пароль")]),e("b-input-group",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{prepend:""}},[e("b-button",{staticClass:"button",attrs:{variant:"outline-secondary"},on:{click:t.toggleShow}},[t.showPassword?e("b-icon",{attrs:{icon:"eye-fill"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}):e("b-icon",{attrs:{icon:"eye-slash-fill"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t.showPassword?e("b-form-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{value:"",type:"text",id:"inline-form-input-name"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}):e("b-form-input",{staticClass:"mb-2 mr-sm-2 mb-sm-0",attrs:{value:"",type:"password",id:"inline-form-input-name"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),e("b-button",{attrs:{variant:"outline-info"},on:{click:t.persist}},[t._v("Войти")])],1)],1)},b=[],v={data:{username:"",password:""},data(){return{showPassword:!1,password:"",username:""}},mounted(){localStorage.username&&(this.username=localStorage.username),localStorage.password&&(this.password=localStorage.password)},computed:{buttonLabel(){return this.showPassword?"Hide":"Show"}},methods:{toggleShow(){this.showPassword=!this.showPassword},persist(){localStorage.username=this.username,localStorage.password=this.password}}},h=v,g=(0,u.Z)(h,m,b,!1,null,"fab21496",null),w=g.exports,y={name:"HomeView",components:{Login:w}},S=y,k=(0,u.Z)(S,f,p,!1,null,"2534d636",null),C=k.exports;o["default"].use(d.ZP);const _=[{path:"/",name:"home",component:C},{path:"/about",name:"about",meta:{auth:!0},component:()=>n.e(443).then(n.bind(n,2543))},{path:"/cards",name:"cards",meta:{auth:!0},component:()=>n.e(443).then(n.bind(n,6232))}],P=new d.ZP({routes:_});P.beforeEach(((t,e,n)=>{const o=t.matched.some((t=>t.meta.auth));o&&""==localStorage.username&&""==localStorage.password?n("/"):n()}));var x=P,O=n(408);o["default"].use(O.ZP);var j=new O.ZP.Store({state:{status:"",token:localStorage.getItem("token")||"",user:{}},getters:{},mutations:{},actions:{},modules:{}}),E=n(4359),A=n(7244);n(7024);o["default"].use(E.XG7),o["default"].use(A.A7),o["default"].config.productionTip=!1,new o["default"]({router:x,store:j,render:t=>t(c)}).$mount("#app")}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,r,a){if(!o){var s=1/0;for(c=0;c<t.length;c++){o=t[c][0],r=t[c][1],a=t[c][2];for(var i=!0,u=0;u<o.length;u++)(!1&a||s>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(i=!1,a<s&&(s=a));if(i){t.splice(c--,1);var l=r();void 0!==l&&(e=l)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[o,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.a2859fb1.js"}}(),function(){n.miniCssF=function(t){return"css/about.40cca635.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="osutest:";n.l=function(o,r,a,s){if(t[o])t[o].push(r);else{var i,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+a){i=d;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",e+a),i.src=o),t[o]=[r];var f=function(e,n){i.onerror=i.onload=null,clearTimeout(p);var r=t[o];if(delete t[o],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var s=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var s=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=s,u.request=i,a.parentNode&&a.parentNode.removeChild(a),r(u)}};return a.onerror=a.onload=s,a.href=e,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===t||a===e))return r}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){r=s[o],a=r.getAttribute("data-href");if(a===t||a===e)return r}},o=function(o){return new Promise((function(r,a){var s=n.miniCssF(o),i=n.p+s;if(e(s,i))return r();t(o,i,null,r,a)}))},r={143:0};n.f.miniCss=function(t,e){var n={443:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=o(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,o){var r=n.o(t,e)?t[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=t[e]=[n,o]}));o.push(r[2]=a);var s=n.p+n.u(e),i=new Error,u=function(o){if(n.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,r[1](i)}};n.l(s,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var r,a,s=o[0],i=o[1],u=o[2],l=0;if(s.some((function(e){return 0!==t[e]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(u)var c=u(n)}for(e&&e(o);l<s.length;l++)a=s[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(c)},o=self["webpackChunkosutest"]=self["webpackChunkosutest"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4053)}));o=n.O(o)})();
//# sourceMappingURL=app.397cbb73.js.map