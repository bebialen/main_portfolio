import{n as d,s as S}from"./scheduler.fZPlb7XK.js";const c=[];function p(e,t=d){let s;const n=new Set;function a(o){if(S(e,o)&&(e=o,s)){const i=!c.length;for(const r of n)r[1](),c.push(r,e);if(i){for(let r=0;r<c.length;r+=2)c[r][0](c[r+1]);c.length=0}}}function f(o){a(o(e))}function l(o,i=d){const r=[o,i];return n.add(r),n.size===1&&(s=t(a,f)||d),o(e),()=>{n.delete(r),n.size===0&&s&&(s(),s=null)}}return{set:a,update:f,subscribe:l}}const A=globalThis.__sveltekit_1s7pifq?.base??"";globalThis.__sveltekit_1s7pifq?.assets;const N="sveltekit:snapshot",U="sveltekit:scroll",y="sveltekit:states",O="sveltekit:pageurl",L="sveltekit:history",x="sveltekit:navigation",_={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},v=location.origin;function Y(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const s=document.getElementsByTagName("base");t=s.length?s[0].href:document.URL}return new URL(e,t)}function q(){return{x:pageXOffset,y:pageYOffset}}const b=new WeakSet,g={"preload-code":["","off","false","tap","hover","viewport","eager"],"preload-data":["","off","false","tap","hover"],keepfocus:["","true","off","false"],noscroll:["","true","off","false"],reload:["","true","off","false"],replacestate:["","true","off","false"]};function u(e,t){const s=e.getAttribute(`data-sveltekit-${t}`);return R(e,t,s),s}function R(e,t,s){s!==null&&!b.has(e)&&!g[t].includes(s)&&(console.error(`Unexpected value for ${t} — should be one of ${g[t].map(n=>JSON.stringify(n)).join(", ")}`,e),b.add(e))}const h={..._,"":_.hover};function E(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function P(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=E(e)}}function V(e,t){let s;try{s=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const n=e instanceof SVGAElement?e.target.baseVal:e.target,a=!s||!!n||I(s,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),f=s?.origin===v&&e.hasAttribute("download");return{url:s,external:a,target:n,download:f}}function m(e){let t=null,s=null,n=null,a=null,f=null,l=null,o=e;for(;o&&o!==document.documentElement;)n===null&&(n=u(o,"preload-code")),a===null&&(a=u(o,"preload-data")),t===null&&(t=u(o,"keepfocus")),s===null&&(s=u(o,"noscroll")),f===null&&(f=u(o,"reload")),l===null&&(l=u(o,"replacestate")),o=E(o);function i(r){switch(r){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:h[n??"off"],preload_data:h[a??"off"],keepfocus:i(t),noscroll:i(s),reload:i(f),replace_state:i(l)}}function k(e){const t=p(e);let s=!0;function n(){s=!0,t.update(l=>l)}function a(l){s=!1,t.set(l)}function f(l){let o;return t.subscribe(i=>{(o===void 0||s&&i!==o)&&l(o=i)})}return{notify:n,set:a,subscribe:f}}function w(){const{set:e,subscribe:t}=p(!1);return{subscribe:t,check:async()=>!1}}function I(e,t){return e.origin!==v||!e.pathname.startsWith(t)}function G(e){e.client}const K={url:k({}),page:k({}),navigating:p(null),updated:w()};export{L as H,x as N,O as P,U as S,y as a,N as b,A as c,m as d,K as e,P as f,V as g,_ as h,I as i,G as j,v as o,Y as r,q as s};