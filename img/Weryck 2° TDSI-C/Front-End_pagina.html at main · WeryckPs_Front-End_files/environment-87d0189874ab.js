(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["environment"],{30523:e=>{e.exports={polyfill:function(){var e,t=window,o=document;if(!("scrollBehavior"in o.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var r=t.HTMLElement||t.Element,n={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:r.prototype.scroll||a,scrollIntoView:r.prototype.scrollIntoView},l=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,i=(e=t.navigator.userAgent,RegExp("MSIE |Trident/|Edge/").test(e))?1:0;t.scroll=t.scrollTo=function(){if(void 0!==arguments[0]){if(!0===c(arguments[0])){n.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset);return}d.call(t,o.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset)}},t.scrollBy=function(){if(void 0!==arguments[0]){if(c(arguments[0])){n.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0);return}d.call(t,o.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset))}},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0]){if(!0===c(arguments[0])){if("number"==typeof arguments[0]&&void 0===arguments[1])throw SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop);return}var e=arguments[0].left,t=arguments[0].top;d.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}},r.prototype.scrollBy=function(){if(void 0!==arguments[0]){if(!0===c(arguments[0])){n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop);return}this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})}},r.prototype.scrollIntoView=function(){if(!0===c(arguments[0])){n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0]);return}var e=function(e){for(var t,r,n;e!==o.body&&!1===(r=s(t=e,"Y")&&u(t,"Y"),n=s(t,"X")&&u(t,"X"),r||n);)e=e.parentNode||e.host;return e}(this),r=e.getBoundingClientRect(),l=this.getBoundingClientRect();e!==o.body?(d.call(this,e,e.scrollLeft+l.left-r.left,e.scrollTop+l.top-r.top),"fixed"!==t.getComputedStyle(e).position&&t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):t.scrollBy({left:l.left,top:l.top,behavior:"smooth"})}}function a(e,t){this.scrollLeft=e,this.scrollTop=t}function c(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(e,t){return"Y"===t?e.clientHeight+i<e.scrollHeight:"X"===t?e.clientWidth+i<e.scrollWidth:void 0}function u(e,o){var r=t.getComputedStyle(e,null)["overflow"+o];return"auto"===r||"scroll"===r}function d(e,r,i){var c,s,u,d,f=l();e===o.body?(c=t,s=t.scrollX||t.pageXOffset,u=t.scrollY||t.pageYOffset,d=n.scroll):(c=e,s=e.scrollLeft,u=e.scrollTop,d=a),function e(o){var r,n,i,a=(l()-o.startTime)/468;r=.5*(1-Math.cos(Math.PI*(a=a>1?1:a))),n=o.startX+(o.x-o.startX)*r,i=o.startY+(o.y-o.startY)*r,o.method.call(o.scrollable,n,i),(n!==o.x||i!==o.y)&&t.requestAnimationFrame(e.bind(t,o))}({scrollable:c,method:d,startTime:f,startX:s,startY:u,x:r,y:i})}}}},68836:(e,t,o)=>{"use strict";var r=o(25019);window.addEventListener("error",e=>{e.error&&(0,r.eK)(e.error)}),window.addEventListener("unhandledrejection",async e=>{if(e.promise)try{await e.promise}catch(e){(0,r.eK)(e)}}),"#b00m"===window.location.hash&&setTimeout(()=>{throw Error("b00m")});var n=o(30523),l=o(22490);(0,o(22115).nn)()},82664:(e,t,o)=>{"use strict";function r(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function n(){let e=r("meta[name=analytics-location]");return e?e.content:window.location.pathname}function l(){let e=r("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let o=r("meta[name=analytics-location-params]");for(let e of(o&&(t+=(t?"&":"?")+o.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let o=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${o[0]}($|=)`,"g"),`$1${o[1]}$2`)}return t}function i(){return`${window.location.protocol}//${window.location.host}${n()+l()}`}o.d(t,{S:()=>i})},25019:(e,t,o)=>{"use strict";o.d(t,{aJ:()=>S,cI:()=>b,eK:()=>m});var r=o(82918),n=o(22115),l=o(28382),i=o(82664),a=o(23243),c=o(24536),s=o(53729);let u=!1,d=0,f=Date.now();function p(e){return"AbortError"===e.name||"TypeError"===e.name&&"Failed to fetch"===e.message}function m(e,t={}){p(e)||h(v(y(e),t))}async function h(e){if(!E())return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(w(e.error.stacktrace)){u=!0;return}d++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function y(e){return{type:e.name,value:e.message,stacktrace:b(e)}}function v(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,i.S)()||window.location.href,readyState:document.readyState,referrer:(0,c.wP)(),timeSinceLoad:Math.round(Date.now()-f),user:S()||void 0,turbo:(0,a.xc)(),bundler:s.A7,ui:Boolean(document.querySelector('meta[name="ui"]'))},t)}function b(e){return(0,l.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let g=/(chrome|moz|safari)-extension:\/\//;function w(e){return e.some(e=>g.test(e.filename)||g.test(e.function))}function S(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,r.b)();return`anonymous-${t}`}let T=!1;function E(){return!T&&!u&&d<10&&(0,n.Gb)()}if(window.addEventListener("pageshow",()=>T=!1),window.addEventListener("pagehide",()=>T=!0),"function"==typeof BroadcastChannel){let e=new BroadcastChannel("shared-worker-error");e.addEventListener("message",e=>{m(e.data.error)})}},46426:(e,t,o)=>{"use strict";o.d(t,{$:()=>c,c:()=>i});var r=o(15205);let n=(0,r.Z)(l);function l(){return(document.head?.querySelector('meta[name="enabled-features"]')?.content||"").split(",")}let i=(0,r.Z)(a);function a(e){return -1!==n().indexOf(e)}let c={isFeatureEnabled:i}},22490:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});var r=o(86283);function n(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let l={createHTML:n("createHTML"),createScript:n("createScript"),createScriptURL:n("createScriptURL")},i={createPolicy:(e,t)=>({name:e,...l,...t})},a=globalThis.trustedTypes??i,c=!1;r.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||c||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),c=!0)})},23243:(e,t,o)=>{"use strict";o.d(t,{AU:()=>s,Ap:()=>T,DT:()=>m,HN:()=>c,Lq:()=>i,T2:()=>w,Yg:()=>g,ag:()=>b,ck:()=>u,po:()=>v,q3:()=>d,uL:()=>S,wz:()=>p,xc:()=>a,xk:()=>h,zH:()=>l});var r=o(46426);let n="data-turbo-loaded";function l(){document.documentElement.setAttribute(n,"")}function i(){return document.documentElement.hasAttribute(n)}let a=()=>!(0,r.c)("PJAX_ENABLED"),c=e=>e?.tagName==="TURBO-FRAME";function s(e,t){let o=e.split("/",3).join("/"),r=t.split("/",3).join("/");return o===r}function u(e,t){let o=e.split("/",2).join("/"),r=t.split("/",2).join("/");return o===r}async function d(){let e=document.head.querySelectorAll("link[rel=stylesheet]"),t=new Set([...document.styleSheets].map(e=>e.href)),o=[];for(let r of e)""===r.href||t.has(r.href)||o.push(f(r));await Promise.all(o)}let f=(e,t=2e3)=>new Promise(o=>{let r=()=>{e.removeEventListener("error",r),e.removeEventListener("load",r),o()};e.addEventListener("load",r,{once:!0}),e.addEventListener("error",r,{once:!0}),setTimeout(r,t)}),p=(e,t)=>{let o=t||e.querySelectorAll("[data-turbo-replace]"),r=[...document.querySelectorAll("[data-turbo-replace]")];for(let e of o){let t=r.find(t=>t.id===e.id);t&&t.replaceWith(e)}},m=e=>{for(let t of e.querySelectorAll("link[rel=stylesheet]"))document.head.querySelector(`link[href="${t.getAttribute("href")}"],
           link[data-href="${t.getAttribute("data-href")}"]`)||document.head.append(t)},h=e=>{for(let t of e.querySelectorAll("script"))document.head.querySelector(`script[src="${t.getAttribute("src")}"]`)||y(t)},y=e=>{let{src:t}=e;if(!t)return;let o=document.createElement("script"),r=e.getAttribute("type");r&&(o.type=r),o.src=t,document.head&&document.head.appendChild(o)},v=e=>{let t=[];for(let o of e.querySelectorAll('meta[data-turbo-track="reload"]'))document.querySelector(`meta[http-equiv="${o.getAttribute("http-equiv")}"]`)?.content!==o.content&&t.push(w(o.getAttribute("http-equiv")));return t},b=e=>{let t=e.querySelector("[data-turbo-head]")||e.head;return{title:t.querySelector("title")?.textContent,transients:[...t.querySelectorAll("[data-turbo-transient]")].map(e=>e.cloneNode(!0)),bodyClasses:e.querySelector("meta[name=turbo-body-classes]")?.content,replacedElements:[...e.querySelectorAll("[data-turbo-replace]")].map(e=>e.cloneNode(!0))}},g=()=>[...document.documentElement.attributes],w=e=>e.replace(/^x-/,"").replaceAll("-","_"),S=e=>document.dispatchEvent(new CustomEvent("turbo:reload",{detail:{reason:e}})),T=(e,t)=>{for(let o of e.attributes)t.hasAttribute(o.nodeName)||"aria-busy"===o.nodeName||e.removeAttribute(o.nodeName);for(let o of t.attributes)e.getAttribute(o.nodeName)!==o.nodeValue&&e.setAttribute(o.nodeName,o.nodeValue)}},15205:(e,t,o)=>{"use strict";function r(...e){return JSON.stringify(e,(e,t)=>"object"==typeof t?t:String(t))}function n(e,t={}){let{hash:o=r,cache:n=new Map}=t;return function(...t){let r=o.apply(this,t);if(n.has(r))return n.get(r);let l=e.apply(this,t);return l instanceof Promise&&(l=l.catch(e=>{throw n.delete(r),e})),n.set(r,l),l}}o.d(t,{Z:()=>n})}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-327bbf","ui_packages_soft-nav_soft-nav_ts"],()=>t(68836));var o=e.O()}]);
//# sourceMappingURL=environment-720b5797e17e.js.map