(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["glosario","chunk-adbc4b64"],{"13aa":function(t,n,r){"use strict";r.r(n);var a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"container-fluid banner-interno"},[r("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),r("div",{staticClass:"container"},[r("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?r("div",{staticClass:"banner-interno__titulo__icono me-3"},[r("i",{class:t.icono})]):t._e(),r("h1",{staticClass:"h3 mb-0"},[t._v(t._s(t.titulo))])])])])},e=[],o={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{}},computed:{globalData:function(){return this.$config.global}}},i=o,c=(r("f6e3"),r("2877")),s=Object(c["a"])(i,a,e,!1,null,"79d8e128",null);n["default"]=s.exports},"13d5":function(t,n,r){"use strict";var a=r("23e7"),e=r("d58f").left,o=r("a640"),i=r("2d00"),c=r("605d"),s=o("reduce"),u=!c&&i>79&&i<83;a({target:"Array",proto:!0,forced:!s||u},{reduce:function(t){return e(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"159b":function(t,n,r){var a=r("da84"),e=r("fdbc"),o=r("17c2"),i=r("9112");for(var c in e){var s=a[c],u=s&&s.prototype;if(u&&u.forEach!==o)try{i(u,"forEach",o)}catch(l){u.forEach=o}}},"17c2":function(t,n,r){"use strict";var a=r("b727").forEach,e=r("a640"),o=e("forEach");t.exports=o?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"67aa":function(t,n,r){},"69a7":function(t,n,r){"use strict";r.r(n);var a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"curso-main-container glosario"},[r("BannerInterno",{attrs:{icono:"fas fa-atlas",titulo:"Glosario"}}),r("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},t._l(t.orderedData,(function(n){return r("div",{key:"letra-"+n.letra,staticClass:"glosario__letra-item mb-2"},[r("div",{staticClass:"glosario__letra-item__letra me-4"},[r("div",{staticClass:"glosario__letra-item__letra__icono"},[r("span",[t._v(t._s(n.letra))])])]),r("div",{staticClass:"glosario__letra-item__texto"},t._l(n.terminos,(function(n){return r("p",{staticClass:"mb-3"},[r("strong",[t._v("• "+t._s(n.termino)+": ")]),r("span",{domProps:{innerHTML:t._s(n.significado)}})])})),0)])})),0)],1)},e=[],o=r("2909"),i=(r("13d5"),r("b64b"),r("159b"),r("d81d"),r("7db0"),r("13aa")),c={name:"Glosario",components:{BannerInterno:i["default"]},computed:{glosarioData:function(){return this.$config.glosario},orderedData:function(){var t=Object(o["a"])(this.glosarioData).reduce((function(t,n){var r=n.termino[0].toLowerCase();return t[r]?t[r].terminos.push(n):t[r]={letra:r,terminos:[n]},t}),{}),n=Object.keys(t).sort(),r=[];return n.forEach((function(n){var a=t[n],e=a.terminos;if(e.length>1){var o=[],i=a.terminos.map((function(t){return t.termino})).sort();i.forEach((function(t){o.push(e.find((function(n){return n.termino===t})))})),e=o}r.push({letra:a.letra.toUpperCase(),terminos:e})})),r}}},s=c,u=(r("c667"),r("2877")),l=Object(u["a"])(s,a,e,!1,null,"041926ba",null);n["default"]=l.exports},"7db0":function(t,n,r){"use strict";var a=r("23e7"),e=r("b727").find,o=r("44d2"),i="find",c=!0;i in[]&&Array(1)[i]((function(){c=!1})),a({target:"Array",proto:!0,forced:c},{find:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}}),o(i)},"904b":function(t,n,r){},a640:function(t,n,r){"use strict";var a=r("d039");t.exports=function(t,n){var r=[][t];return!!r&&a((function(){r.call(null,n||function(){throw 1},1)}))}},b64b:function(t,n,r){var a=r("23e7"),e=r("7b0b"),o=r("df75"),i=r("d039"),c=i((function(){o(1)}));a({target:"Object",stat:!0,forced:c},{keys:function(t){return o(e(t))}})},c667:function(t,n,r){"use strict";r("67aa")},d58f:function(t,n,r){var a=r("1c0b"),e=r("7b0b"),o=r("44ad"),i=r("50c4"),c=function(t){return function(n,r,c,s){a(r);var u=e(n),l=o(u),f=i(u.length),d=t?f-1:0,b=t?-1:1;if(c<2)while(1){if(d in l){s=l[d],d+=b;break}if(d+=b,t?d<0:f<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:f>d;d+=b)d in l&&(s=r(s,l[d],d,u));return s}};t.exports={left:c(!1),right:c(!0)}},d81d:function(t,n,r){"use strict";var a=r("23e7"),e=r("b727").map,o=r("1dde"),i=o("map");a({target:"Array",proto:!0,forced:!i},{map:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}})},f6e3:function(t,n,r){"use strict";r("904b")}}]);
//# sourceMappingURL=glosario.4f8b75d7.js.map