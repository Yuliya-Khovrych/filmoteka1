function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){a[e]=n},n.parcelRequired7c6=o);var i=o("dGDaw");var r=e(o("1Gatq")).template({1:function(e,n,t,a,o){var i,r=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return null!=(i=r(t,"if").call(null!=n?n:e.nullContext||{},null!=n?r(n,"dots"):n,{name:"if",hash:{},fn:e.program(2,o,0),inverse:e.program(4,o,0),data:o,loc:{start:{line:2,column:0},end:{line:7,column:7}}}))?i:""},2:function(e,n,t,a,o){var i,r=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return' <li class="pagination__item pagination__item--dots">'+e.escapeExpression("function"==typeof(i=null!=(i=r(t,"page")||(null!=n?r(n,"page"):n))?i:e.hooks.helperMissing)?i.call(null!=n?n:e.nullContext||{},{name:"page",hash:{},data:o,loc:{start:{line:2,column:65},end:{line:2,column:73}}}):i)+"</li>\n"},4:function(e,n,t,a,o){var i,r=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return null!=(i=r(t,"if").call(null!=n?n:e.nullContext||{},null!=n?r(n,"current"):n,{name:"if",hash:{},fn:e.program(5,o,0),inverse:e.program(7,o,0),data:o,loc:{start:{line:3,column:0},end:{line:7,column:0}}}))?i:""},5:function(e,n,t,a,o){var i,r=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<li class="pagination__item pagination__item--current">'+e.escapeExpression("function"==typeof(i=null!=(i=r(t,"page")||(null!=n?r(n,"page"):n))?i:e.hooks.helperMissing)?i.call(null!=n?n:e.nullContext||{},{name:"page",hash:{},data:o,loc:{start:{line:4,column:55},end:{line:4,column:63}}}):i)+"</li>\n"},7:function(e,n,t,a,o){var i,r=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return'<li class="pagination__item"><button type="button" class="pagination__btn pagination__btn--page">'+e.escapeExpression("function"==typeof(i=null!=(i=r(t,"page")||(null!=n?r(n,"page"):n))?i:e.hooks.helperMissing)?i.call(null!=n?n:e.nullContext||{},{name:"page",hash:{},data:o,loc:{start:{line:6,column:97},end:{line:6,column:105}}}):i)+"</button></li> \n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,a,o){var i;return null!=(i=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:8,column:9}}}))?i:""},useData:!0});const l={pagination:document.querySelector(".pagination"),pagesContainer:document.querySelector(".pagination__pages")};function s(e,n){1!==n?(l.pagination.classList.remove("visual-hidden"),l.pagesContainer.innerHTML=r(((e,n,t=2)=>{const a=e-t,o=e+t,i=[],r=[];let l=null;for(let e=1;e<=n;e+=1)if(1===e||e===n||e>=a&&e<=o)i.push(e);else if(e<a)e=a-1;else if(e>o){i.push(n);break}return i.forEach((n=>{l&&n-l!=1&&r.push({page:"...",current:!1,dots:!0}),n===e?r.push({page:n,current:!0,dots:!1}):r.push({page:n,current:!1,dots:!1}),l=n})),r})(e,n)),function(e,n){const t={left:document.querySelector(".pagination__btn--left"),right:document.querySelector(".pagination__btn--right")};!0!==t.left.disabled&&!0!==t.right.disabled||(t.left.disabled=!1,t.right.disabled=!1);if(1===e)return void(t.left.disabled=!0);if(e===n)t.right.disabled=!0}(e,n)):l.pagination.classList.add("visual-hidden")}function c({current:e,pages:n}){s(e,n),l.pagination.addEventListener("click",(t=>{t.target.classList.contains("pagination__btn")&&(t.target.classList.contains("pagination__btn--page")?s(e=+t.target.textContent,n):t.target.classList.contains("pagination__btn--left")?s(e-=1,n):t.target.classList.contains("pagination__btn--right")&&s(e+=1,n))}))}i=o("dGDaw");var u=o("lKCtx");function p(e,n){return e.classList.contains("pagination__btn--page")?+e.textContent:e.classList.contains("pagination__btn--left")?n-1:!!e.classList.contains("pagination__btn--right")&&n+1}var d=o("eWCmQ");function f(){const e={spinner:document.querySelector("[data-slider]"),body:document.querySelector("body")};e.spinner.classList.toggle("is-hidden"),e.body.classList.toggle("no-scrool")}e(d).Notify.init({width:"280px",position:"center-top",distance:"150px"});const m={searchInput:document.querySelector('[name="searchQuery"]'),searchBtn:document.querySelector(".submit-btn"),container:document.querySelector(".films"),pagination:document.querySelector(".pagination")};let g=1,h=1,y="";function v(e){p(e.target,g)&&(g=p(e.target,g),async function(){const e=await(0,i.getMovies)("/search/movie",g,y),n=await e.data.results;(0,u.createMarkup)(n)}())}var _=e(o("1Gatq")).template({1:function(e,n,t,a,o){var i,r,l=null!=n?n:e.nullContext||{},s=e.hooks.helperMissing,c="function",u=e.escapeExpression,p=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"<li class='films__item' data-id=\""+u(typeof(r=null!=(r=p(t,"id")||(null!=n?p(n,"id"):n))?r:s)===c?r.call(l,{name:"id",hash:{},data:o,loc:{start:{line:2,column:33},end:{line:2,column:39}}}):r)+"\">\n    <div class='films__img'>\n"+(null!=(i=p(t,"if").call(l,null!=n?p(n,"poster_path"):n,{name:"if",hash:{},fn:e.program(2,o,0),inverse:e.program(4,o,0),data:o,loc:{start:{line:4,column:8},end:{line:9,column:15}}}))?i:"")+"    </div>\n    <div class='films__description'>\n        <p class='films__title'>"+u(typeof(r=null!=(r=p(t,"title")||(null!=n?p(n,"title"):n))?r:s)===c?r.call(l,{name:"title",hash:{},data:o,loc:{start:{line:12,column:32},end:{line:12,column:41}}}):r)+"</p>\n        <p class='films__meta'>\n            <span class=\"films__genre\">\n                "+u(typeof(r=null!=(r=p(t,"genre_ids")||(null!=n?p(n,"genre_ids"):n))?r:s)===c?r.call(l,{name:"genre_ids",hash:{},data:o,loc:{start:{line:15,column:16},end:{line:15,column:29}}}):r)+'\n            </span>\n            <span class="films__date">'+u(typeof(r=null!=(r=p(t,"release_date")||(null!=n?p(n,"release_date"):n))?r:s)===c?r.call(l,{name:"release_date",hash:{},data:o,loc:{start:{line:17,column:38},end:{line:17,column:54}}}):r)+"</span>\n        </p>\n    </div>\n</li>\n"},2:function(e,n,t,a,o){var i,r=null!=n?n:e.nullContext||{},l=e.hooks.helperMissing,s="function",c=e.escapeExpression,u=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"        <img src='https://image.tmdb.org/t/p/w342"+c(typeof(i=null!=(i=u(t,"poster_path")||(null!=n?u(n,"poster_path"):n))?i:l)===s?i.call(r,{name:"poster_path",hash:{},data:o,loc:{start:{line:5,column:49},end:{line:5,column:64}}}):i)+"' alt='Film \""+c(typeof(i=null!=(i=u(t,"title")||(null!=n?u(n,"title"):n))?i:l)===s?i.call(r,{name:"title",hash:{},data:o,loc:{start:{line:5,column:77},end:{line:5,column:86}}}):i)+"\" poster' loading='lazy' />\n"},4:function(e,n,t,a,o){var i,r=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"        <img src='https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg' alt='Film \""+e.escapeExpression("function"==typeof(i=null!=(i=r(t,"title")||(null!=n?r(n,"title"):n))?i:e.hooks.helperMissing)?i.call(null!=n?n:e.nullContext||{},{name:"title",hash:{},data:o,loc:{start:{line:7,column:93},end:{line:7,column:102}}}):i)+"\" poster'\n            loading='lazy' />\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,a,o){var i;return null!=(i=(e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]})(t,"each").call(null!=n?n:e.nullContext||{},n,{name:"each",hash:{},fn:e.program(1,o,0),inverse:e.noop,data:o,loc:{start:{line:1,column:0},end:{line:21,column:9}}}))?i:""},useData:!0}),b=o("4lfWO"),w=o("6yebf");const O={container:document.querySelector(".films"),pagination:document.querySelector(".pagination")};let k=1,x=null;function L(e){p(e.target,k)&&(k=p(e.target,k),S())}async function S(){x=await(await(0,i.getMovies)("trending/movie/day",k)).data,O.container.innerHTML=_(x.results),await(0,b.makeGenres)(".films__genre"),(0,w.makeYears)(".films__date")}i=o("dGDaw"),b=o("4lfWO"),w=o("6yebf");const q={container:document.querySelector(".films"),pagination:document.querySelector(".pagination"),guard:document.querySelector(".guard")},j=new IntersectionObserver((function(e){e.forEach((e=>{e.isIntersecting&&(M+=1,P())}))}),{root:null,rootMargin:"30%",treshhold:0});let M=1,E=null;async function P(){E=await(await(0,i.getMovies)("trending/movie/day",M)).data,q.container.insertAdjacentHTML("beforeend",_(E.results)),(0,w.makeYears)(".films__date",M),(0,b.makeGenres)(".films__genre",M)}var C,T=/^\s+|\s+$/g,D=/^[-+]0x[0-9a-f]+$/i,N=/^0b[01]+$/i,F=/^0o[0-7]+$/i,G=parseInt,H="object"==typeof n&&n&&n.Object===Object&&n,I="object"==typeof self&&self&&self.Object===Object&&self,W=H||I||Function("return this")(),B=Object.prototype.toString,Q=Math.max,z=Math.min,R=function(){return W.Date.now()};function U(e){var n=typeof e;return!!e&&("object"==n||"function"==n)}function Y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==B.call(e)}(e))return NaN;if(U(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=U(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(T,"");var t=N.test(e);return t||F.test(e)?G(e.slice(2),t?2:8):D.test(e)?NaN:+e}C=function(e,n,t){var a,o,i,r,l,s,c=0,u=!1,p=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(n){var t=a,i=o;return a=o=void 0,c=n,r=e.apply(i,t)}function m(e){return c=e,l=setTimeout(h,n),u?f(e):r}function g(e){var t=e-s;return void 0===s||t>=n||t<0||p&&e-c>=i}function h(){var e=R();if(g(e))return y(e);l=setTimeout(h,function(e){var t=n-(e-s);return p?z(t,i-(e-c)):t}(e))}function y(e){return l=void 0,d&&a?f(e):(a=o=void 0,r)}function v(){var e=R(),t=g(e);if(a=arguments,o=this,s=e,t){if(void 0===l)return m(s);if(p)return l=setTimeout(h,n),f(s)}return void 0===l&&(l=setTimeout(h,n)),r}return n=Y(n)||0,U(t)&&(u=!!t.leading,i=(p="maxWait"in t)?Q(Y(t.maxWait)||0,n):i,d="trailing"in t?!!t.trailing:d),v.cancel=function(){void 0!==l&&clearTimeout(l),c=0,a=s=o=l=void 0},v.flush=function(){return void 0===l?r:y(R())},v};var A=o("7ggit");$(".carousel").slick({dots:!0,arrows:!1,speed:1e3,easing:"ease",autoplay:!0,autoplaySpeed:5e3,pauseOnFocus:!0,pauseOnHover:!0,pauseOnDotsHover:!0});const K={searchForm:document.querySelector("#search-form"),searchInput:document.querySelector('[name="searchQuery"]'),searchBtn:document.querySelector(".submit-btn"),films:document.querySelector(".films")};screen.width<=768?async function(){await P(),j.observe(q.guard)}():async function(){if(f(),await S(),x.total_pages>1){c({current:1,pages:x.total_pages}),O.pagination.removeEventListener("click",v),O.pagination.addEventListener("click",L)}f()}(),K.searchInput.addEventListener("input",e(C)((function(){this.value.trim()?K.searchBtn.disabled=!1:K.searchBtn.disabled=!0}),300)),K.searchForm.addEventListener("submit",(async function(n){n.preventDefault(),y=n.currentTarget.elements.searchQuery.value,m.container.innerHTML="",m.searchInput.value="",m.searchBtn.disabled=!0,g=1;try{f();const n=await(0,i.getMovies)("/search/movie",g,y),t=await n.data.results;if((0,u.createMarkup)(t),!t.length)return m.pagination.classList.add("visual-hidden"),f(),e(d).Notify.failure("Search result not successful. Enter the correct movie name and try againe.");e(d).Notify.success(`Hooray! We found ${n.data.total_results} movies.`),n.data.total_pages>1?(h=n.data.total_pages,c({current:1,pages:h}),m.pagination.removeEventListener("click",L),m.pagination.addEventListener("click",v)):m.pagination.classList.add("visual-hidden"),f()}catch(n){e(d).Notify.failure(`Something is wrong. ${n.message}`)}})),K.films.addEventListener("click",A.onOpenModal);
//# sourceMappingURL=index.a96b7640.js.map