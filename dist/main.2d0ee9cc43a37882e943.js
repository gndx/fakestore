(()=>{"use strict";var e={434:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([e.id,"// extracted by mini-css-extract-plugin\nexport {};",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=a[l]||0,p="".concat(l," ").concat(u);a[l]=u+1;var d=n(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var v=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:p,updater:v,references:1})}i.push(p)}return i}function o(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var u=n(a[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},609:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=e=>`\n    <article class="Card">\n      <img src="${e.images[0]}" alt="${e.title}" />\n      <h2>\n        ${e.title}\n        <small>$ ${e.price}</small>\n      </h2>\n    </article>\n    `;var t=n(379),r=n.n(t),o=n(795),a=n.n(o),i=n(569),s=n.n(i),c=n(565),l=n.n(c),u=n(609),p=n.n(u),d=n(589),f=n.n(d),v=n(434),m={};m.styleTagTransform=f(),m.setAttributes=l(),m.insert=s().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=p();r()(v.Z,m);v.Z&&v.Z.locals&&v.Z.locals;const h=document.getElementById("app"),g=document.getElementById("observe");localStorage.pagination=5;let y=!0;window.onbeforeunload=()=>{localStorage.removeItem("pagination")};const b=async()=>{y?y=!1:localStorage.pagination=parseInt(localStorage.getItem("pagination"))+10,await(async t=>{try{let n=await fetch(t),r=await n.json();if(r.length){const t=r.map((t=>e(t)));let n=document.createElement("section");n.classList.add("Items"),n.innerHTML=t.join(""),console.log(n),h.appendChild(n)}else{x.unobserve(g);let e=document.createElement("p");e.setAttribute("lang","es"),e.textContent="Todos los productos Obtenidos",g.appendChild(e)}}catch(e){console.log(e)}})(`https://api.escuelajs.co/api/v1/products/?offset=${localStorage.getItem("pagination")}&limit=10`)},x=new IntersectionObserver((e=>{e[0].isIntersecting&&b()}),{root:null,rootMargin:"0px 0px 0px 0px",threshold:.5});x.observe(g)})()})();