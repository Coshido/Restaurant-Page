(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>g});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),d=t.n(c),s=new URL(t(88),t.b),l=new URL(t(535),t.b),u=new URL(t(117),t.b),p=i()(r()),m=d()(s),f=d()(l),h=d()(u);p.push([n.id,"body {\n  height: 100vh;\n  margin: 0;\n  font-family: Roboto, sans-serif;\n  background: url("+m+");\n  background-size: cover;\n  background-attachment: fixed;\n}\n@font-face {\n  font-family: Roboto;\n  src: url("+f+");\n}\n@font-face {\n  font-family: Barrbar;\n  src: url("+h+");\n}\n\n#content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 100px;\n}\n\nheader,\nfooter {\n  background-color: black;\n  opacity: 0.8;\n}\n\nheader {\n  font-family: Barrbar, sans-serif;\n  color: white;\n  font-size: 56px;\n  padding: 5px 5%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.nav-bar {\n  display: flex;\n  height: 60%;\n}\n\nbutton {\n  font-size: 24px;\n  background: rgba(255, 255, 255, 0);\n\n  color: inherit;\n  border: none;\n  padding: 0 20px;\n}\n\nbutton:hover {\n  transform: translateY(-10px);\n  transition-duration: 400ms;\n}\n\n.header-logo {\n  color: white;\n  font-style: Barrbar;\n}\n.main {\n  display: flex;\n  justify-content: center;\n}\nfooter {\n  display: flex;\n  justify-content: center;\n  font-size: 18px;\n  padding: 10px;\n}\n.footer-link {\n  text-decoration: none;\n  color: white;\n}\n\n.main-content-home,\n.main-content-menu {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 3%;\n  color: white;\n  background-color: rgba(0, 0, 0, 0.8);\n  gap: 60px;\n  border-radius: 4px;\n}\n.highlight {\n  border-bottom: 1px solid white;\n}\n/* Home Module CSS*/\n\n.hero-div {\n  font-size: 52px;\n}\n.action-div {\n  font-size: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.action-image {\n  height: 300px;\n  background: url(https://source.unsplash.com/uAm1CZMdPCw);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-bottom: 20px;\n}\n.action-button-div {\n  display: flex;\n  justify-content: space-around;\n}\n.action-button {\n  border: 1px solid white;\n  border-radius: 4px;\n  background-color: rgba(255, 255, 255, 0.1);\n  font-size: 18px;\n  padding: 8px 20px;\n}\n.action-button:hover {\n  transform: scale(1.2);\n}\n\n/* Menu Module CSS */\n.main-content-menu {\n  width: 40%;\n}\n.menu-title {\n  font-size: 52px;\n}\n.menu-content {\n  display: grid;\n  width: 100%;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-template-rows: repeat(2, 1fr);\n  gap: 40px;\n}\n.food-card {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr auto;\n  gap: 10px;\n}\n.food-image {\n  height: 200px;\n  width: 100%;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.food-title {\n  grid-row-start: 2;\n}\n.food-price {\n  grid-row-start: 2;\n  grid-column-start: 2;\n  text-align: end;\n}\n",""]);const g=p},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var d=n[c],s=o.base?d[0]+o.base:d[0],l=a[s]||0,u="".concat(s," ").concat(l);a[s]=l+1;var p=t(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var d=o(n,r),s=0;s<a.length;s++){var l=t(a[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},117:(n,e,t)=>{n.exports=t.p+"0ca4486ef7c8888e6d16.otf"},535:(n,e,t)=>{n.exports=t.p+"fc2b5060f7accec5cf74.ttf"},88:(n,e,t)=>{n.exports=t.p+"d647c2f84edbaef5245b.jpg"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),d=t.n(c),s=t(216),l=t.n(s),u=t(589),p=t.n(u),m=t(426),f={};function h(){let n=document.createElement("div");n.classList.add("main-content-home");let e=document.createElement("div");e.classList.add("hero-div"),e.innerHTML="Breakfast like grandma used to make!";let t=document.createElement("div");t.classList.add("action-div");let o=document.createElement("div");o.classList.add("action-image"),t.appendChild(o);let r=document.createElement("div");r.classList.add("action-text"),r.innerHTML="Still waiting? Check out our menù and make a reservation <u>Now!</u>",t.appendChild(r);let a=document.createElement("div");a.classList.add("action-button-div");let i=document.createElement("button");i.classList.add("action-button"),i.innerHTML="Menù";let c=document.createElement("button");return c.classList.add("action-button"),c.innerHTML="Contacts",a.appendChild(i),a.appendChild(c),t.appendChild(a),n.appendChild(e),n.appendChild(t),n}f.styleTagTransform=p(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;class g{constructor(n,e,t){this.name=n,this.price=e,this.image=t}}const b=new class{constructor(){this.menu=[]}addFood(n){this.menu.push(n)}renderMenu(n){let e=document.createElement("div");return e.classList.add("menu-content"),this.menu.map((n=>{let t=document.createElement("div");t.classList.add("food-card");let o=document.createElement("div");o.classList.add("food-title"),o.innerHTML=n.name;let r=document.createElement("div");r.classList.add("food-price"),r.innerHTML=`${n.price} Euro`;let a=document.createElement("div");a.classList.add("food-image"),a.style.background=`url(${n.image})`,a.style.backgroundSize="cover",a.style.backgroundPosition="center",t.appendChild(a),t.appendChild(o),t.appendChild(r),e.appendChild(t)})),e}},v=new g("Egg Toast",7,"https://source.unsplash.com/FFqNATH27EM"),y=new g("Fruit Pankakes",8.5,"https://source.unsplash.com/y4K7Ydp2z3Y"),x=new g("Avocado Toast",9,"https://source.unsplash.com/4tPjtttythY"),w=new g("Apple Pancakes",8,"https://source.unsplash.com/QDM6-fFKP0s"),L=new g("Choco Cereal",7.5,"https://source.unsplash.com/s_f1RqDVDDo"),C=new g("Veggie Bowl",6,"https://source.unsplash.com/_Uqj5BQb-mw");b.addFood(v),b.addFood(y),b.addFood(x),b.addFood(w),b.addFood(L),b.addFood(C);const E=document.querySelector("#content");let k=document.createElement("button"),M=document.createElement("button"),T=h();function S(n){switch(n){case"home":T=h(),H(k);break;case"menu":T=function(){let n=document.createElement("div");n.classList.add("main-content-menu");let e=document.createElement("div");e.classList.add("menu-title"),e.innerHTML="Our Menù";let t=b.renderMenu(b);return n.appendChild(e),n.appendChild(t),n}(),H(M)}j()}function H(n){[...document.querySelectorAll("button")].map((n=>n.classList.remove("highlight"))),n.classList.add("highlight")}function j(){E.innerHTML="",function(){let n=document.createElement("header"),e=document.createElement("div");e.classList.add("header-logo"),e.innerHTML="Baistrocchi Caffè",n.appendChild(e);let t=function(){let n=document.createElement("div");n.classList.add("nav-bar"),k.classList.add("nav-button"),k.innerHTML="Home",k.addEventListener("click",S.bind(this,"home")),M.classList.add("nav-button"),M.innerHTML="Menù",M.addEventListener("click",S.bind(this,"menu"));let e=document.createElement("button");return e.classList.add("nav-button"),e.innerHTML="Contacts",n.appendChild(k),n.appendChild(M),n.appendChild(e),n}();n.appendChild(t),E.appendChild(n)}(),function(){let n=document.createElement("div");n.classList.add("main"),n.appendChild(T),E.appendChild(n)}(),E.appendChild(function(){let n=document.createElement("footer"),e=document.createElement("a");return e.classList.add("footer-link"),e.href="https://github.com/Coshido?tab=repositories",e.target="_blank",e.innerHTML='Copyrights © 2022 Coshido  <i class="fab fa-github"></i>',n.appendChild(e),n}())}j(),H(k)})()})();