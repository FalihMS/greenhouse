"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[979],{411:function(e,t,n){let r,o,l,a,i,u,c,s,d,f,m,p,v,h,g,E,w;n.d(t,{Vq:function(){return e1},EM:function(){return e0}});var b,y,F=n(2265),A=n.t(F,2),T=Object.defineProperty,P=(e,t,n)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,S=(e,t,n)=>(P(e,"symbol"!=typeof t?t+"":t,n),n);class L{set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}constructor(){S(this,"current",this.detect()),S(this,"handoffState","pending"),S(this,"currentId",0)}}let C=new L,O=(e,t)=>{C.isServer?(0,F.useEffect)(e,t):(0,F.useLayoutEffect)(e,t)};function N(e){let t=(0,F.useRef)(e);return O(()=>{t.current=e},[e]),t}let M=function(e){let t=N(e);return F.useCallback(function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.current(...n)},[t])};function x(e,t,n,r){let o=N(n);(0,F.useEffect)(()=>{function n(e){o.current(e)}return(e=null!=e?e:window).addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)},[e,t,r])}function k(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}function R(){let e=[],t={addEventListener:(e,n,r,o)=>(e.addEventListener(n,r,o),t.add(()=>e.removeEventListener(n,r,o))),requestAnimationFrame(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];let o=requestAnimationFrame(...n);return t.add(()=>cancelAnimationFrame(o))},nextFrame(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.requestAnimationFrame(()=>t.requestAnimationFrame(...n))},setTimeout(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];let o=setTimeout(...n);return t.add(()=>clearTimeout(o))},microTask(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];let o={current:!0};return k(()=>{o.current&&n[0]()}),t.add(()=>{o.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(e){let t=R();return e(t),this.add(()=>t.dispose())},add:t=>(e.includes(t)||e.push(t),()=>{let n=e.indexOf(t);if(n>=0)for(let t of e.splice(n,1))t()}),dispose(){for(let t of e.splice(0))t()}};return t}function D(e){return C.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let I=new Map,j=new Map;function H(e){var t;let n=null!=(t=j.get(e))?t:0;return j.set(e,n+1),0!==n||(I.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),e.setAttribute("aria-hidden","true"),e.inert=!0),()=>(function(e){var t;let n=null!=(t=j.get(e))?t:1;if(1===n?j.delete(e):j.set(e,n-1),1!==n)return;let r=I.get(e);r&&(null===r["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",r["aria-hidden"]),e.inert=r.inert,I.delete(e))})(e)}function _(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];if(e in t){let n=t[e];return"function"==typeof n?n(...r):n}let l=Error('Tried to handle "'.concat(e,'" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(t).map(e=>'"'.concat(e,'"')).join(", "),"."));throw Error.captureStackTrace&&Error.captureStackTrace(l,_),l}let U=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>"".concat(e,":not([tabindex='-1'])")).join(","),W=["[data-autofocus]"].map(e=>"".concat(e,":not([tabindex='-1'])")).join(",");var B=((r=B||{})[r.First=1]="First",r[r.Previous=2]="Previous",r[r.Next=4]="Next",r[r.Last=8]="Last",r[r.WrapAround=16]="WrapAround",r[r.NoScroll=32]="NoScroll",r[r.AutoFocus=64]="AutoFocus",r),q=((o=q||{})[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o),V=((l=V||{})[l.Previous=-1]="Previous",l[l.Next=1]="Next",l),Y=((a=Y||{})[a.Strict=0]="Strict",a[a.Loose=1]="Loose",a),G=((i=G||{})[i.Keyboard=0]="Keyboard",i[i.Mouse=1]="Mouse",i);function K(e){null==e||e.focus({preventScroll:!0})}function X(e,t){var n,r,o;let{sorted:l=!0,relativeTo:a=null,skipElements:i=[]}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},u=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,c=Array.isArray(e)?l?function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e=>e;return e.slice().sort((e,n)=>{let r=t(e),o=t(n);if(null===r||null===o)return 0;let l=r.compareDocumentPosition(o);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}(e):e:64&t?function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;return null==e?[]:Array.from(e.querySelectorAll(W)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}(e):function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;return null==e?[]:Array.from(e.querySelectorAll(U)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}(e);i.length>0&&c.length>1&&(c=c.filter(e=>!i.some(t=>null!=t&&"current"in t?(null==t?void 0:t.current)===e:t===e))),a=null!=a?a:u.activeElement;let s=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,c.indexOf(a))-1;if(4&t)return Math.max(0,c.indexOf(a))+1;if(8&t)return c.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=32&t?{preventScroll:!0}:{},m=0,p=c.length,v;do{if(m>=p||m+p<=0)return 0;let e=d+m;if(16&t)e=(e+p)%p;else{if(e<0)return 3;if(e>=p)return 1}null==(v=c[e])||v.focus(f),m+=s}while(v!==u.activeElement);return 6&t&&null!=(o=null==(r=null==(n=v)?void 0:n.matches)?void 0:r.call(n,"textarea,input"))&&o&&v.select(),2}function Z(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function z(e,t,n){let r=N(t);(0,F.useEffect)(()=>{function t(e){r.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}function $(e,t,n){let r=N(t);(0,F.useEffect)(()=>{function t(e){r.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n])}function J(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,F.useMemo)(()=>D(...t),[...t])}function Q(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return Array.from(new Set(t.flatMap(e=>"string"==typeof e?e.split(" "):[]))).filter(Boolean).join(" ")}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));var ee=((u=ee||{})[u.None=0]="None",u[u.RenderStrategy=1]="RenderStrategy",u[u.Static=2]="Static",u),et=((c=et||{})[c.Unmount=0]="Unmount",c[c.Hidden=1]="Hidden",c);function en(e){let{ourProps:t,theirProps:n,slot:r,defaultTag:o,features:l,visible:a=!0,name:i,mergeRefs:u}=e;u=null!=u?u:eo;let c=el(n,t);if(a)return er(c,r,o,i,u);let s=null!=l?l:0;if(2&s){let{static:e=!1,...t}=c;if(e)return er(t,r,o,i,u)}if(1&s){let{unmount:e=!0,...t}=c;return _(e?0:1,{0:()=>null,1:()=>er({...t,hidden:!0,style:{display:"none"}},r,o,i,u)})}return er(c,r,o,i,u)}function er(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,{as:l=n,children:a,refName:i="ref",...u}=eu(e,["unmount","static"]),c=void 0!==e.ref?{[i]:e.ref}:{},s="function"==typeof a?a(t):a;"className"in u&&u.className&&"function"==typeof u.className&&(u.className=u.className(t)),u["aria-labelledby"]&&u["aria-labelledby"]===u.id&&(u["aria-labelledby"]=void 0);let d={};if(t){let e=!1,n=[];for(let[r,o]of Object.entries(t))"boolean"==typeof o&&(e=!0),!0===o&&n.push(r.replace(/([A-Z])/g,e=>"-".concat(e.toLowerCase())));if(e)for(let e of(d["data-headlessui-state"]=n.join(" "),n))d["data-".concat(e)]=""}if(l===F.Fragment&&(Object.keys(ei(u)).length>0||Object.keys(ei(d)).length>0)){if(!(0,F.isValidElement)(s)||Array.isArray(s)&&s.length>1){if(Object.keys(ei(u)).length>0)throw Error(['Passing props on "Fragment"!',"","The current component <".concat(r,' /> is rendering a "Fragment".'),"However we need to passthrough the following props:",Object.keys(ei(u)).concat(Object.keys(ei(d))).map(e=>"  - ".concat(e)).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>"  - ".concat(e)).join("\n")].join("\n"))}else{let e=s.props,t=null==e?void 0:e.className,n="function"==typeof t?function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return Q(t(...n),u.className)}:Q(t,u.className),r=el(s.props,ei(eu(u,["ref"])));for(let e in d)e in r&&delete d[e];return(0,F.cloneElement)(s,Object.assign({},r,d,c,{ref:o(s.ref,c.ref)},n?{className:n}:{}))}}return(0,F.createElement)(l,Object.assign({},eu(u,["ref"]),l!==F.Fragment&&c,l!==F.Fragment&&d),s)}function eo(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.every(e=>null==e)?void 0:e=>{for(let n of t)null!=n&&("function"==typeof n?n(e):n.current=e)}}function el(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(0===t.length)return{};if(1===t.length)return t[0];let r={},o={};for(let e of t)for(let t in e)t.startsWith("on")&&"function"==typeof e[t]?(null!=o[t]||(o[t]=[]),o[t].push(e[t])):r[t]=e[t];if(r.disabled||r["aria-disabled"])for(let e in o)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(e)&&(o[e]=[e=>{var t;return null==(t=null==e?void 0:e.preventDefault)?void 0:t.call(e)}]);for(let e in o)Object.assign(r,{[e](t){for(var n=arguments.length,r=Array(n>1?n-1:0),l=1;l<n;l++)r[l-1]=arguments[l];for(let n of o[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;n(t,...r)}}});return r}function ea(e){var t;return Object.assign((0,F.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function ei(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function eu(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}var ec=((s=ec||{})[s.None=1]="None",s[s.Focusable=2]="Focusable",s[s.Hidden=4]="Hidden",s);let es=ea(function(e,t){var n;let{features:r=1,...o}=e;return en({ourProps:{ref:t,"aria-hidden":(2&r)==2||(null!=(n=o["aria-hidden"])?n:void 0),hidden:(4&r)==4||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&r)==4&&(2&r)!=2&&{display:"none"}}},theirProps:o,slot:{},defaultTag:"div",name:"Hidden"})}),ed=(b=()=>new Map,y={PUSH(e,t){var n;let r=null!=(n=this.get(e))?n:{doc:e,count:0,d:R(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT(e){let t,{doc:n,d:r,meta:o}=e,l={doc:n,d:r,meta:function(e){let t={};for(let n of e)Object.assign(t,n(t));return t}(o)},a=[Z()?{before(e){let{doc:t,d:n,meta:r}=e;function o(e){return r.containers.flatMap(e=>e()).some(t=>t.contains(e))}n.microTask(()=>{var e;if("auto"!==window.getComputedStyle(t.documentElement).scrollBehavior){let e=R();e.style(t.documentElement,"scrollBehavior","auto"),n.add(()=>n.microTask(()=>e.dispose()))}let r=null!=(e=window.scrollY)?e:window.pageYOffset,l=null;n.addEventListener(t,"click",e=>{if(e.target instanceof HTMLElement)try{let n=e.target.closest("a");if(!n)return;let{hash:r}=new URL(n.href),a=t.querySelector(r);a&&!o(a)&&(l=a)}catch(e){}},!0),n.addEventListener(t,"touchstart",e=>{if(e.target instanceof HTMLElement){if(o(e.target)){let t=e.target;for(;t.parentElement&&o(t.parentElement);)t=t.parentElement;n.style(t,"overscrollBehavior","contain")}else n.style(e.target,"touchAction","none")}}),n.addEventListener(t,"touchmove",e=>{if(e.target instanceof HTMLElement&&"INPUT"!==e.target.tagName){if(o(e.target)){let t=e.target;for(;t.parentElement&&""!==t.dataset.headlessuiPortal&&!(t.scrollHeight>t.clientHeight||t.scrollWidth>t.clientWidth);)t=t.parentElement;""===t.dataset.headlessuiPortal&&e.preventDefault()}else e.preventDefault()}},{passive:!1}),n.add(()=>{var e;r!==(null!=(e=window.scrollY)?e:window.pageYOffset)&&window.scrollTo(0,r),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})})}}:{},{before(e){var n;let{doc:r}=e,o=r.documentElement;t=Math.max(0,(null!=(n=r.defaultView)?n:window).innerWidth-o.clientWidth)},after(e){let{doc:n,d:r}=e,o=n.documentElement,l=Math.max(0,o.clientWidth-o.offsetWidth),a=Math.max(0,t-l);r.style(o,"paddingRight","".concat(a,"px"))}},{before(e){let{doc:t,d:n}=e;n.style(t.documentElement,"overflow","hidden")}}];a.forEach(e=>{let{before:t}=e;return null==t?void 0:t(l)}),a.forEach(e=>{let{after:t}=e;return null==t?void 0:t(l)})},SCROLL_ALLOW(e){let{d:t}=e;t.dispose()},TEARDOWN(e){let{doc:t}=e;this.delete(t)}},d=b(),f=new Set,{getSnapshot:()=>d,subscribe:e=>(f.add(e),()=>f.delete(e)),dispatch(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];let o=y[e].call(d,...n);o&&(d=o,f.forEach(e=>e()))}});function ef(){let e;let t=(e="undefined"==typeof document,(0,A.useSyncExternalStore)(()=>()=>{},()=>!1,()=>!e)),[n,r]=F.useState(C.isHandoffComplete);return n&&!1===C.isHandoffComplete&&r(!1),F.useEffect(()=>{!0!==n&&r(!0)},[n]),F.useEffect(()=>C.handoff(),[]),!t&&n}ed.subscribe(()=>{let e=ed.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let e="hidden"===t.get(n.doc),r=0!==n.count;(r&&!e||!r&&e)&&ed.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),0===n.count&&ed.dispatch("TEARDOWN",n)}});let em=Symbol();function ep(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r=(0,F.useRef)(t);(0,F.useEffect)(()=>{r.current=t},[t]);let o=M(e=>{for(let t of r.current)null!=t&&("function"==typeof t?t(e):t.current=e)});return t.every(e=>null==e||(null==e?void 0:e[em]))?void 0:o}let ev=(0,F.createContext)(()=>{});function eh(e){let{value:t,children:n}=e;return F.createElement(ev.Provider,{value:t},n)}var eg=n(4887);let eE=(0,F.createContext)(null);function ew(e){let{children:t}=e,n=(0,F.useContext)(eE);if(!n)return F.createElement(F.Fragment,null,t);let{target:r}=n;return r?(0,eg.createPortal)(F.createElement(F.Fragment,null,t),r):null}let eb=(0,F.createContext)(null);eb.displayName="OpenClosedContext";var ey=((m=ey||{})[m.Open=1]="Open",m[m.Closed=2]="Closed",m[m.Closing=4]="Closing",m[m.Opening=8]="Opening",m);let eF=(0,F.createContext)(!1);function eA(e){return F.createElement(eF.Provider,{value:e.force},e.children)}let eT=(0,F.createContext)(()=>{});eT.displayName="StackContext";var eP=((p=eP||{})[p.Add=0]="Add",p[p.Remove=1]="Remove",p);function eS(e){let{children:t,onUpdate:n,type:r,element:o,enabled:l}=e,a=(0,F.useContext)(eT),i=M(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];null==n||n(...t),a(...t)});return O(()=>{let e=void 0===l||!0===l;return e&&i(0,r,o),()=>{e&&i(1,r,o)}},[i,r,o,l]),F.createElement(eT.Provider,{value:i},t)}let eL=(0,F.createContext)(void 0),eC=(0,F.createContext)(null);eC.displayName="DescriptionContext";let eO=Object.assign(ea(function(e,t){let n=(0,F.useId)(),r=(0,F.useContext)(eL),{id:o="headlessui-description-".concat(n),...l}=e,a=function e(){let t=(0,F.useContext)(eC);if(null===t){let t=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),i=ep(t);O(()=>a.register(o),[o,a.register]);let u=r||!1,c=(0,F.useMemo)(()=>({...a.slot,disabled:u}),[a.slot,u]);return en({ourProps:{ref:i,...a.props,id:o},theirProps:l,slot:c,defaultTag:"p",name:a.name||"Description"})}),{});function eN(){let e=(0,F.useRef)(!1);return O(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function eM(e){let t=M(e),n=(0,F.useRef)(!1);(0,F.useEffect)(()=>(n.current=!1,()=>{n.current=!0,k(()=>{n.current&&t()})}),[t])}var ex=((v=ex||{})[v.Forwards=0]="Forwards",v[v.Backwards=1]="Backwards",v);function ek(e,t){let n=(0,F.useRef)([]),r=M(e);(0,F.useEffect)(()=>{let e=[...n.current];for(let[o,l]of t.entries())if(n.current[o]!==l){let o=r(t,e);return n.current=t,o}},[r,...t])}let eR=[];function eD(e){if(!e)return new Set;if("function"==typeof e)return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}!function(e){function t(){"loading"!==document.readyState&&(e(),document.removeEventListener("DOMContentLoaded",t))}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("DOMContentLoaded",t),t())}(()=>{function e(e){e.target instanceof HTMLElement&&e.target!==document.body&&eR[0]!==e.target&&(eR.unshift(e.target),(eR=eR.filter(e=>null!=e&&e.isConnected)).splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});var eI=((h=eI||{})[h.None=1]="None",h[h.InitialFocus=2]="InitialFocus",h[h.TabLock=4]="TabLock",h[h.FocusLock=8]="FocusLock",h[h.RestoreFocus=16]="RestoreFocus",h[h.AutoFocus=32]="AutoFocus",h[h.All=30]="All",h);let ej=Object.assign(ea(function(e,t){let n,r=(0,F.useRef)(null),o=ep(r,t),{initialFocus:l,initialFocusFallback:a,containers:i,features:u=30,...c}=e;ef()||(u=1);let s=J(r);!function(e,t){let{ownerDocument:n}=e,r=function(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=(0,F.useRef)(eR.slice());return ek((e,n)=>{let[r]=e,[o]=n;!0===o&&!1===r&&k(()=>{t.current.splice(0)}),!1===o&&!0===r&&(t.current=eR.slice())},[e,eR,t]),M(()=>{var e;return null!=(e=t.current.find(e=>null!=e&&e.isConnected))?e:null})}(t);ek(()=>{t||(null==n?void 0:n.activeElement)===(null==n?void 0:n.body)&&K(r())},[t]),eM(()=>{t&&K(r())})}({ownerDocument:s},!!(16&u));let d=function(e,t){let{ownerDocument:n,container:r,initialFocus:o,initialFocusFallback:l}=e,a=!!(2&t),i=(0,F.useRef)(null),u=eN();return ek(()=>{if(!a){null!=l&&l.current&&K(l.current);return}let e=r.current;e&&k(()=>{if(!u.current)return;let r=null==n?void 0:n.activeElement;if(null!=o&&o.current){if((null==o?void 0:o.current)===r){i.current=r;return}}else if(e.contains(r)){i.current=r;return}if(null!=o&&o.current)K(o.current);else{if(32&t){if(X(e,B.First|B.AutoFocus)!==q.Error)return}else if(X(e,B.First)!==q.Error)return;if(null!=l&&l.current&&(K(l.current),(null==n?void 0:n.activeElement)===l.current))return;console.warn("There are no focusable elements inside the <FocusTrap />")}i.current=null==n?void 0:n.activeElement})},[l,a,t]),i}({ownerDocument:s,container:r,initialFocus:l,initialFocusFallback:a},u);!function(e,t){let{ownerDocument:n,container:r,containers:o,previousActiveElement:l}=e,a=eN();x(null==n?void 0:n.defaultView,"focus",e=>{if(!t||!a.current)return;let n=eD(o);r.current instanceof HTMLElement&&n.add(r.current);let i=l.current;if(!i)return;let u=e.target;u&&u instanceof HTMLElement?eH(n,u)?(l.current=u,K(u)):(e.preventDefault(),e.stopPropagation(),K(i)):K(l.current)},!0)}({ownerDocument:s,container:r,containers:i,previousActiveElement:d},!!(8&u));let f=(n=(0,F.useRef)(0),$("keydown",e=>{"Tab"===e.key&&(n.current=e.shiftKey?1:0)},!0),n),m=M(e=>{let t=r.current;t&&_(f.current,{[ex.Forwards]:()=>{X(t,B.First,{skipElements:[e.relatedTarget,a]})},[ex.Backwards]:()=>{X(t,B.Last,{skipElements:[e.relatedTarget,a]})}})}),p=function(){let[e]=(0,F.useState)(R);return(0,F.useEffect)(()=>()=>e.dispose(),[e]),e}(),v=(0,F.useRef)(!1);return F.createElement(F.Fragment,null,!!(4&u)&&F.createElement(es,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:m,features:ec.Focusable}),en({ourProps:{ref:o,onKeyDown(e){"Tab"==e.key&&(v.current=!0,p.requestAnimationFrame(()=>{v.current=!1}))},onBlur(e){if(!(8&u))return;let t=eD(i);r.current instanceof HTMLElement&&t.add(r.current);let n=e.relatedTarget;n instanceof HTMLElement&&"true"!==n.dataset.headlessuiFocusGuard&&(eH(t,n)||(v.current?X(r.current,_(f.current,{[ex.Forwards]:()=>B.Next,[ex.Backwards]:()=>B.Previous})|B.WrapAround,{relativeTo:e.target}):e.target instanceof HTMLElement&&K(e.target)))}},theirProps:c,defaultTag:"div",name:"FocusTrap"}),!!(4&u)&&F.createElement(es,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:m,features:ec.Focusable}))}),{features:eI});function eH(e,t){for(let n of e)if(n.contains(t))return!0;return!1}var e_=((g=e_||{}).Space=" ",g.Enter="Enter",g.Escape="Escape",g.Backspace="Backspace",g.Delete="Delete",g.ArrowLeft="ArrowLeft",g.ArrowUp="ArrowUp",g.ArrowRight="ArrowRight",g.ArrowDown="ArrowDown",g.Home="Home",g.End="End",g.PageUp="PageUp",g.PageDown="PageDown",g.Tab="Tab",g);let eU=F.Fragment,eW=ea(function(e,t){let n=(0,F.useRef)(null),r=ep(function(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];return Object.assign(e,{[em]:t})}(e=>{n.current=e}),t),o=J(n),l=function(e){let t=(0,F.useContext)(eF),n=(0,F.useContext)(eq),r=J(e),[o,l]=(0,F.useState)(()=>{var e;if(!t&&null!==n)return null!=(e=n.current)?e:null;if(C.isServer)return null;let o=null==r?void 0:r.getElementById("headlessui-portal-root");if(o)return o;if(null===r)return null;let l=r.createElement("div");return l.setAttribute("id","headlessui-portal-root"),r.body.appendChild(l)});return(0,F.useEffect)(()=>{null!==o&&(null!=r&&r.body.contains(o)||null==r||r.body.appendChild(o))},[o,r]),(0,F.useEffect)(()=>{t||null!==n&&l(n.current)},[n,l,t]),o}(n),[a]=(0,F.useState)(()=>{var e;return C.isServer?null:null!=(e=null==o?void 0:o.createElement("div"))?e:null}),i=(0,F.useContext)(eV),u=ef();return O(()=>{!l||!a||l.contains(a)||(a.setAttribute("data-headlessui-portal",""),l.appendChild(a))},[l,a]),O(()=>{if(a&&i)return i.register(a)},[i,a]),eM(()=>{var e;l&&a&&(a instanceof Node&&l.contains(a)&&l.removeChild(a),l.childNodes.length<=0&&(null==(e=l.parentElement)||e.removeChild(l)))}),u&&l&&a?(0,eg.createPortal)(en({ourProps:{ref:r},theirProps:e,slot:{},defaultTag:eU,name:"Portal"}),a):null}),eB=F.Fragment,eq=(0,F.createContext)(null),eV=(0,F.createContext)(null),eY=Object.assign(ea(function(e,t){let n=ep(t),{enabled:r=!0,...o}=e;return r?F.createElement(eW,{...o,ref:n}):en({ourProps:{ref:n},theirProps:o,slot:{},defaultTag:eU,name:"Portal"})}),{Group:ea(function(e,t){let{target:n,...r}=e,o={ref:ep(t)};return F.createElement(eq.Provider,{value:n},en({ourProps:o,theirProps:r,defaultTag:eB,name:"Popover.Group"}))})});var eG=((E=eG||{})[E.Open=0]="Open",E[E.Closed=1]="Closed",E),eK=((w=eK||{})[w.SetTitleId=0]="SetTitleId",w);let eX={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},eZ=(0,F.createContext)(null);function ez(e){let t=(0,F.useContext)(eZ);if(null===t){let t=Error("<".concat(e," /> is missing a parent <Dialog /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,ez),t}return t}function e$(e,t){return _(t.type,eX,e,t)}eZ.displayName="DialogContext";let eJ=ee.RenderStrategy|ee.Static,eQ=ea(function(e,t){let n,r,o,l,a,i=(0,F.useId)(),{id:u="headlessui-dialog-".concat(i),open:c,onClose:s,initialFocus:d,role:f="dialog",autoFocus:m=!0,__demoMode:p=!1,...v}=e,[h,g]=(0,F.useState)(0),E=(0,F.useRef)(!1);f="dialog"===f||"alertdialog"===f?f:(E.current||(E.current=!0,console.warn("Invalid role [".concat(f,"] passed to <Dialog />. Only `dialog` and and `alertdialog` are supported. Using `dialog` instead."))),"dialog");let w=(0,F.useContext)(eb);void 0===c&&null!==w&&(c=(w&ey.Open)===ey.Open);let b=(0,F.useRef)(null),y=ep(b,t),A=J(b),T=e.hasOwnProperty("open")||null!==w,P=e.hasOwnProperty("onClose");if(!T&&!P)throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!T)throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!P)throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof c)throw Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: ".concat(c));if("function"!=typeof s)throw Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: ".concat(s));let S=c?0:1,[L,C]=(0,F.useReducer)(e$,{titleId:null,descriptionId:null,panelRef:(0,F.createRef)()}),k=M(()=>s(!1)),I=M(e=>C({type:0,id:e})),j=!!ef()&&0===S,W=h>1,B=null!==(0,F.useContext)(eZ),[q,V]=(n=(0,F.useContext)(eV),r=(0,F.useRef)([]),o=M(e=>(r.current.push(e),n&&n.register(e),()=>l(e))),l=M(e=>{let t=r.current.indexOf(e);-1!==t&&r.current.splice(t,1),n&&n.unregister(e)}),a=(0,F.useMemo)(()=>({register:o,unregister:l,portals:r}),[o,l,r]),[r,(0,F.useMemo)(()=>function(e){let{children:t}=e;return F.createElement(eV.Provider,{value:a},t)},[a])]),{resolveContainers:G,mainTreeNodeRef:K,MainTreeNode:X}=function(){var e;let{defaultContainers:t=[],portals:n,mainTreeNodeRef:r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=(0,F.useRef)(null!=(e=null==r?void 0:r.current)?e:null),l=J(o),a=M(()=>{var e,r,a;let i=[];for(let e of t)null!==e&&(e instanceof HTMLElement?i.push(e):"current"in e&&e.current instanceof HTMLElement&&i.push(e.current));if(null!=n&&n.current)for(let e of n.current)i.push(e);for(let t of null!=(e=null==l?void 0:l.querySelectorAll("html > *, body > *"))?e:[])t!==document.body&&t!==document.head&&t instanceof HTMLElement&&"headlessui-portal-root"!==t.id&&(t.contains(o.current)||t.contains(null==(a=null==(r=o.current)?void 0:r.getRootNode())?void 0:a.host)||i.some(e=>t.contains(e))||i.push(t));return i});return{resolveContainers:a,contains:M(e=>a().some(t=>t.contains(e))),mainTreeNodeRef:o,MainTreeNode:(0,F.useMemo)(()=>function(){return null!=r?null:F.createElement(es,{features:ec.Hidden,ref:o})},[o,r])}}({portals:q,defaultContainers:[{get current(){var Q;return null!=(Q=L.panelRef.current)?Q:b.current}}]}),ee=null!==w&&(w&ey.Closing)===ey.Closing;!function(){let{allowed:e,disallowed:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=!(arguments.length>1)||void 0===arguments[1]||arguments[1];O(()=>{var r,o;if(!n)return;let l=R();for(let e of null!=(r=null==t?void 0:t())?r:[])e&&l.add(H(e));let a=null!=(o=null==e?void 0:e())?o:[];for(let e of a){if(!e)continue;let t=D(e);if(!t)continue;let n=e.parentElement;for(;n&&n!==t.body;){for(let e of n.children)a.some(t=>e.contains(t))||l.add(H(e));n=n.parentElement}}return l.dispose},[n,e,t])}({allowed:M(()=>{var e,t;return[null!=(t=null==(e=b.current)?void 0:e.closest("[data-headlessui-portal]"))?t:null]}),disallowed:M(()=>{var e,t;return[null!=(t=null==(e=K.current)?void 0:e.closest("body > *:not(#headlessui-portal-root)"))?t:null]})},!p&&!W&&!ee&&j),function(e,t){let n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=(0,F.useRef)(!1);function o(n,o){if(!r.current||n.defaultPrevented)return;let l=o(n);if(null!==l&&l.getRootNode().contains(l)&&l.isConnected){for(let t of function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e)){if(null===t)continue;let e=t instanceof HTMLElement?t:t.current;if(null!=e&&e.contains(l)||n.composed&&n.composedPath().includes(e))return}return!function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e!==(null==(t=D(e))?void 0:t.body)&&_(n,{0:()=>e.matches(U),1(){let t=e;for(;null!==t;){if(t.matches(U))return!0;t=t.parentElement}return!1}})}(l,Y.Loose)&&-1!==l.tabIndex&&n.preventDefault(),t(n,l)}}(0,F.useEffect)(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);let l=(0,F.useRef)(null);z("pointerdown",e=>{var t,n;r.current&&(l.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),z("mousedown",e=>{var t,n;r.current&&(l.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),z("click",e=>{Z()||/Android/gi.test(window.navigator.userAgent)||l.current&&(o(e,()=>l.current),l.current=null)},!0),z("touchend",e=>o(e,()=>e.target instanceof HTMLElement?e.target:null),!0),$("blur",e=>o(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}(G,e=>{e.preventDefault(),k()},!(!j||W));let et=!(W||0!==S);x(null==A?void 0:A.defaultView,"keydown",e=>{et&&(e.defaultPrevented||e.key===e_.Escape&&(e.preventDefault(),e.stopPropagation(),document.activeElement&&"blur"in document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur(),k()))});let er=!(ee||0!==S||B);(function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>[document.body];!function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>({containers:[]}),r=(0,F.useSyncExternalStore)(ed.subscribe,ed.getSnapshot,ed.getSnapshot),o=e?r.get(e):void 0;o&&o.count,O(()=>{if(!(!e||!t))return ed.dispatch("PUSH",e,n),()=>ed.dispatch("POP",e,n)},[t,e])}(e,t,e=>{var t;return{containers:[...null!=(t=e.containers)?t:[],n]}})})(A,!p&&er,G),function(e,t){let n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],r=N(e=>{let n=e.getBoundingClientRect();0===n.x&&0===n.y&&0===n.width&&0===n.height&&t()});(0,F.useEffect)(()=>{if(!n)return;let t=null===e?null:e instanceof HTMLElement?e:e.current;if(!t)return;let o=R();if("undefined"!=typeof ResizeObserver){let e=new ResizeObserver(()=>r.current(t));e.observe(t),o.add(()=>e.disconnect())}if("undefined"!=typeof IntersectionObserver){let e=new IntersectionObserver(()=>r.current(t));e.observe(t),o.add(()=>e.disconnect())}return()=>o.dispose()},[e,r,n])}(b,k,0===S);let[eo,el]=function(){let[e,t]=(0,F.useState)([]);return[e.length>0?e.join(" "):void 0,(0,F.useMemo)(()=>function(e){let n=M(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),r=(0,F.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props,value:e.value}),[n,e.slot,e.name,e.props,e.value]);return F.createElement(eC.Provider,{value:r},e.children)},[t])]}(),ea=(0,F.useMemo)(()=>[{dialogState:S,close:k,setTitleId:I},L],[S,L,k,I]),ei=(0,F.useMemo)(()=>({open:0===S}),[S]),eu={ref:y,id:u,role:f,tabIndex:-1,"aria-modal":p?void 0:0===S||void 0,"aria-labelledby":L.titleId,"aria-describedby":eo},em=!function(){var e;let[t]=(0,F.useState)(()=>"undefined"!=typeof window&&"function"==typeof window.matchMedia?window.matchMedia("(pointer: coarse)"):null),[n,r]=(0,F.useState)(null!=(e=null==t?void 0:t.matches)&&e);return O(()=>{if(t)return t.addEventListener("change",e),()=>t.removeEventListener("change",e);function e(e){r(e.matches)}},[t]),n}(),ev=j?_(W?"parent":"leaf",{parent:eI.RestoreFocus,leaf:eI.All&~eI.FocusLock}):eI.None;return m&&(ev|=eI.AutoFocus),em||(ev&=~eI.InitialFocus),p&&(ev=eI.None),F.createElement(eS,{type:"Dialog",enabled:0===S,element:b,onUpdate:M((e,t)=>{"Dialog"===t&&_(e,{[eP.Add]:()=>g(e=>e+1),[eP.Remove]:()=>g(e=>e-1)})})},F.createElement(eA,{force:!0},F.createElement(eY,null,F.createElement(eZ.Provider,{value:ea},F.createElement(eY.Group,{target:b},F.createElement(eA,{force:!1},F.createElement(el,{slot:ei,name:"Dialog.Description"},F.createElement(V,null,F.createElement(ej,{initialFocus:d,initialFocusFallback:p?void 0:b,containers:G,features:ev},F.createElement(eh,{value:k},en({ourProps:eu,theirProps:v,slot:ei,defaultTag:"div",features:eJ,visible:0===S,name:"Dialog"})))))))))),F.createElement(ew,null,F.createElement(X,null)))}),e0=ea(function(e,t){let n=(0,F.useId)(),{id:r="headlessui-dialog-panel-".concat(n),...o}=e,[{dialogState:l},a]=ez("Dialog.Panel"),i=ep(t,a.panelRef),u=(0,F.useMemo)(()=>({open:0===l}),[l]);return en({ourProps:{ref:i,id:r,onClick:M(e=>{e.stopPropagation()})},theirProps:o,slot:u,defaultTag:"div",name:"Dialog.Panel"})}),e1=Object.assign(eQ,{Panel:e0,Title:ea(function(e,t){let n=(0,F.useId)(),{id:r="headlessui-dialog-title-".concat(n),...o}=e,[{dialogState:l,setTitleId:a}]=ez("Dialog.Title"),i=ep(t);return(0,F.useEffect)(()=>(a(r),()=>a(null)),[r,a]),en({ourProps:{ref:i,id:r},theirProps:o,slot:(0,F.useMemo)(()=>({open:0===l}),[l]),defaultTag:"h2",name:"Dialog.Title"})}),Description:eO})},4589:function(e,t,n){var r=n(2265);let o=r.forwardRef(function(e,t){let{title:n,titleId:o,...l}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":o},l),n?r.createElement("title",{id:o},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))});t.Z=o},4573:function(e,t,n){var r=n(2265);let o=r.forwardRef(function(e,t){let{title:n,titleId:o,...l}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":o},l),n?r.createElement("title",{id:o},n):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))});t.Z=o}}]);