var C=Object.defineProperty,le=Object.defineProperties;var fe=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var P=(e,t,r)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))de.call(t,r)&&P(e,r,t[r]);if(A)for(var r of A(t))ue.call(t,r)&&P(e,r,t[r]);return e},b=(e,t)=>le(e,fe(t));var S=(e,t)=>{for(var r in t)C(e,r,{get:t[r],enumerable:!0})};var v={};S(v,{default:()=>pe});var D={},N={get exports(){return D},set exports(e){D=e}};N.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),s=0;s<n.length;s++){var i=n[s],a=e[i];(o?t.indexOf(i)!==-1:t(i,a,e))&&(r[i]=a)}return r};var pe=N.exports;var x={};S(x,{default:()=>me});var R={},U={get exports(){return R},set exports(e){R=e}};U.exports=(e,t)=>{if(!(typeof e=="string"&&typeof t=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(t==="")return[e];let r=e.indexOf(t);return r===-1?[e]:[e.slice(0,r),e.slice(r+t.length)]};var me=U.exports;var F={};S(F,{default:()=>he});var $={},Z={get exports(){return $},set exports(e){$=e}},z="%[a-f0-9]{2}",H=new RegExp("("+z+")|([^%]+?)","gi"),M=new RegExp("("+z+")+","gi");function E(e,t){try{return[decodeURIComponent(e.join(""))]}catch(o){}if(e.length===1)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],E(r),E(n))}function ge(e){try{return decodeURIComponent(e)}catch(n){for(var t=e.match(H)||[],r=1;r<t.length;r++)e=E(t,r).join(""),t=e.match(H)||[];return e}}function ye(e){for(var t={"%FE%FF":"\uFFFD\uFFFD","%FF%FE":"\uFFFD\uFFFD"},r=M.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(a){var n=ge(r[0]);n!==r[0]&&(t[r[0]]=n)}r=M.exec(e)}t["%C2"]="\uFFFD";for(var o=Object.keys(t),s=0;s<o.length;s++){var i=o[s];e=e.replace(new RegExp(i,"g"),t[i])}return e}Z.exports=function(e){if(typeof e!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return ye(e)}};var he=Z.exports;var w={};S(w,{default:()=>be});var B={},X={get exports(){return B},set exports(e){B=e}};X.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`);var be=X.exports;function _(e){var t=(typeof window!="undefined"&&window||typeof self!="undefined"&&self||typeof O!="undefined"&&O||typeof globalThis!="undefined"&&globalThis||{}).Object,r=!1,n=t.create(null),o=!1,s=!1;if(t.defineProperty(n,"__esModule",{value:!0,enumerable:!1,configurable:!0}),e){var i=t.getOwnPropertyNames(e);if(i.forEach(function(l){if(l==="default")s=!0;else if(!o&&l!="__esModule")try{o=e[l]!=null}catch(u){}t.defineProperty(n,l,{get:function(){return e[l]},enumerable:!0,configurable:!1})}),t.getOwnPropertySymbols){var a=t.getOwnPropertySymbols(e);a.forEach(function(l){t.defineProperty(n,l,{get:function(){return e[l]},enumerable:!1,configurable:!1})})}t.preventExtensions(n),t.seal(n),t.freeze&&t.freeze(n)}return o?n:s?(t.isExtensible(n.default)&&!("default"in n.default)&&t.defineProperty(n.default,"default",{value:n.default,configurable:!1,enumerable:!1}),n.default):n}var O=typeof window!="undefined"&&window||typeof self!="undefined"&&self||typeof O!="undefined"&&O||typeof globalThis!="undefined"&&globalThis||{},f={},d={get exports(){return f},set exports(e){f=e}},Se=_(typeof w!="undefined"?w:{}),ve=_(typeof F!="undefined"?F:{}),L=_(typeof x!="undefined"?x:{}),xe=_(typeof v!="undefined"?v:{}),Fe=e=>e==null,T=Symbol("encodeFragmentIdentifier");function we(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{let o=r.length;return n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?r:n===null?[...r,[c(t,e),"[",o,"]"].join("")]:[...r,[c(t,e),"[",c(o,e),"]=",c(n,e)].join("")]};case"bracket":return t=>(r,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?r:n===null?[...r,[c(t,e),"[]"].join("")]:[...r,[c(t,e),"[]=",c(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?r:n===null?[...r,[c(t,e),":list="].join("")]:[...r,[c(t,e),":list=",c(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{let t=e.arrayFormat==="bracket-separator"?"[]=":"=";return r=>(n,o)=>o===void 0||e.skipNull&&o===null||e.skipEmptyString&&o===""?n:(o=o===null?"":o,n.length===0?[[c(r,e),t,c(o,e)].join("")]:[[n,c(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?r:n===null?[...r,c(t,e)]:[...r,[c(t,e),"=",c(n,e)].join("")]}}function Oe(e){let t;switch(e.arrayFormat){case"index":return(r,n,o)=>{if(t=/\[(\d*)\]$/.exec(r),r=r.replace(/\[\d*\]$/,""),!t){o[r]=n;return}o[r]===void 0&&(o[r]={}),o[r][t[1]]=n};case"bracket":return(r,n,o)=>{if(t=/(\[\])$/.exec(r),r=r.replace(/\[\]$/,""),!t){o[r]=n;return}if(o[r]===void 0){o[r]=[n];return}o[r]=[].concat(o[r],n)};case"colon-list-separator":return(r,n,o)=>{if(t=/(:list)$/.exec(r),r=r.replace(/:list$/,""),!t){o[r]=n;return}if(o[r]===void 0){o[r]=[n];return}o[r]=[].concat(o[r],n)};case"comma":case"separator":return(r,n,o)=>{let s=typeof n=="string"&&n.includes(e.arrayFormatSeparator),i=typeof n=="string"&&!s&&p(n,e).includes(e.arrayFormatSeparator);n=i?p(n,e):n;let a=s||i?n.split(e.arrayFormatSeparator).map(l=>p(l,e)):n===null?n:p(n,e);o[r]=a};case"bracket-separator":return(r,n,o)=>{let s=/(\[\])$/.test(r);if(r=r.replace(/\[\]$/,""),!s){o[r]=n&&p(n,e);return}let i=n===null?[]:n.split(e.arrayFormatSeparator).map(a=>p(a,e));if(o[r]===void 0){o[r]=i;return}o[r]=[].concat(o[r],i)};default:return(r,n,o)=>{if(o[r]===void 0){o[r]=n;return}o[r]=[].concat(o[r],n)}}}function Y(e){if(typeof e!="string"||e.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function c(e,t){return t.encode?t.strict?Se(e):encodeURIComponent(e):e}function p(e,t){return t.decode?ve(e):e}function q(e){return Array.isArray(e)?e.sort():typeof e=="object"?q(Object.keys(e)).sort((t,r)=>Number(t)-Number(r)).map(t=>e[t]):e}function W(e){let t=e.indexOf("#");return t!==-1&&(e=e.slice(0,t)),e}function _e(e){let t="",r=e.indexOf("#");return r!==-1&&(t=e.slice(r)),t}function G(e){e=W(e);let t=e.indexOf("?");return t===-1?"":e.slice(t+1)}function J(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&typeof e=="string"&&e.trim()!==""?e=Number(e):t.parseBooleans&&e!==null&&(e.toLowerCase()==="true"||e.toLowerCase()==="false")&&(e=e.toLowerCase()==="true"),e}function Q(e,t){t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t),Y(t.arrayFormatSeparator);let r=Oe(t),n=Object.create(null);if(typeof e!="string"||(e=e.trim().replace(/^[?#&]/,""),!e))return n;for(let o of e.split("&")){if(o==="")continue;let[s,i]=L(t.decode?o.replace(/\+/g," "):o,"=");i=i===void 0?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?i:p(i,t),r(p(s,t),i,n)}for(let o of Object.keys(n)){let s=n[o];if(typeof s=="object"&&s!==null)for(let i of Object.keys(s))s[i]=J(s[i],t);else n[o]=J(s,t)}return t.sort===!1?n:(t.sort===!0?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((o,s)=>{let i=n[s];return i&&typeof i=="object"&&!Array.isArray(i)?o[s]=q(i):o[s]=i,o},Object.create(null))}f.extract=G;f.parse=Q;f.stringify=(e,t)=>{if(!e)return"";t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t),Y(t.arrayFormatSeparator);let r=i=>t.skipNull&&Fe(e[i])||t.skipEmptyString&&e[i]==="",n=we(t),o={};for(let i of Object.keys(e))r(i)||(o[i]=e[i]);let s=Object.keys(o);return t.sort!==!1&&s.sort(t.sort),s.map(i=>{let a=e[i];return a===void 0?"":a===null?c(i,t):Array.isArray(a)?a.length===0&&t.arrayFormat==="bracket-separator"?c(i,t)+"[]":a.reduce(n(i),[]).join("&"):c(i,t)+"="+c(a,t)}).filter(i=>i.length>0).join("&")};f.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);let[r,n]=L(e,"#");return Object.assign({url:r.split("?")[0]||"",query:Q(G(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:p(n,t)}:{})};f.stringifyUrl=(e,t)=>{t=Object.assign({encode:!0,strict:!0,[T]:!0},t);let r=W(e.url).split("?")[0]||"",n=f.extract(e.url),o=f.parse(n,{sort:!1}),s=Object.assign(o,e.query),i=f.stringify(s,t);i&&(i=`?${i}`);let a=_e(e.url);return e.fragmentIdentifier&&(a=`#${t[T]?c(e.fragmentIdentifier,t):e.fragmentIdentifier}`),`${r}${i}${a}`};f.pick=(e,t,r)=>{r=Object.assign({parseFragmentIdentifier:!0,[T]:!1},r);let{url:n,query:o,fragmentIdentifier:s}=f.parseUrl(e,r);return f.stringifyUrl({url:n,query:xe(o,t),fragmentIdentifier:s},r)};f.exclude=(e,t,r)=>{let n=Array.isArray(t)?o=>!t.includes(o):(o,s)=>!t(o,s);return f.pick(e,n,r)};var Ee,I,Te,Ie,je,Ae,Pe;Object.isExtensible(d.exports)&&Object.keys(d.exports).length===7&&(Ee=d.exports.extract,I=d.exports.parse,Te=d.exports.stringify,Ie=d.exports.parseUrl,je=d.exports.stringifyUrl,Ae=d.exports.pick,Pe=d.exports.exclude);var Ze=d.exports;var k=e=>{let t,r=new Set,n=(u,y)=>{let h=typeof u=="function"?u(t):u;if(!Object.is(h,t)){let ae=t;t=(y!=null?y:typeof h!="object"||h===null)?h:Object.assign({},t,h),r.forEach(ce=>ce(t,ae))}},o=()=>t,a={setState:n,getState:o,getInitialState:()=>l,subscribe:u=>(r.add(u),()=>r.delete(u))},l=t=e(n,o,a);return a},K=e=>e?k(e):k;import V from"react";var De=e=>e;function Ne(e,t=De){let r=V.useSyncExternalStore(e.subscribe,()=>t(e.getState()),()=>t(e.getInitialState()));return V.useDebugValue(r),r}var ee=e=>{let t=K(e),r=n=>Ne(t,n);return Object.assign(r,t),r},g=e=>e?ee(e):ee;var te=(e,t)=>(...r)=>Object.assign({},e,t(...r));var j={base:{title:"Base",color:"white",props:{positionX:0,positionY:0,positionZ:0,rotationX:0,rotationY:0,rotationZ:0,uAmplitude:2,color1:"#ff5005",color2:"#dbba95",color3:"#d0bce1"}},halo:{title:"Halo",color:"white",props:{type:"plane",uAmplitude:1,uDensity:1.3,uSpeed:.4,uStrength:4,uTime:0,uFrequency:5.5,range:"enabled",rangeStart:0,rangeEnd:40,frameRate:10,destination:"onCanvas",format:"gif",axesHelper:"off",brightness:1.2,cAzimuthAngle:180,cDistance:3.6,cPolarAngle:90,cameraZoom:1,color1:"#ff5005",color2:"#dbba95",color3:"#d0bce1",embedMode:"off",envPreset:"city",gizmoHelper:"hide",grain:"on",lightType:"3d",pixelDensity:1,fov:45,positionX:-1.4,positionY:0,positionZ:0,reflection:.1,rotationX:0,rotationY:10,rotationZ:50,shader:"defaults",animate:"on",wireframe:!1}},pensive:{title:"Pensive",color:"white",props:{range:"enabled",rangeStart:0,rangeEnd:40,frameRate:10,destination:"onCanvas",format:"gif",animate:"on",axesHelper:"off",brightness:1.5,cAzimuthAngle:250,cDistance:1.5,cPolarAngle:140,cameraZoom:12.5,color1:"#809bd6",color2:"#910aff",color3:"#af38ff",embedMode:"off",envPreset:"city",gizmoHelper:"hide",grain:"on",lightType:"3d",pixelDensity:1,fov:45,positionX:0,positionY:0,positionZ:0,reflection:.5,rotationX:0,rotationY:0,rotationZ:140,shader:"defaults",type:"sphere",uAmplitude:7,uDensity:.8,uFrequency:5.5,uSpeed:.3,uStrength:.4,uTime:0,wireframe:!1}},mint:{title:"Mint",color:"white",props:{range:"enabled",rangeStart:0,rangeEnd:40,frameRate:10,destination:"onCanvas",format:"gif",animate:"on",axesHelper:"off",brightness:1.2,cAzimuthAngle:170,cDistance:4.4,cPolarAngle:70,cameraZoom:1,color1:"#94ffd1",color2:"#6bf5ff",color3:"#ffffff",embedMode:"off",envPreset:"city",gizmoHelper:"hide",grain:"off",lightType:"3d",pixelDensity:1,fov:45,positionX:0,positionY:.9,positionZ:-.3,reflection:.1,rotationX:45,rotationY:0,rotationZ:0,shader:"defaults",type:"waterPlane",uAmplitude:0,uDensity:1.2,uFrequency:0,uSpeed:.2,uStrength:3.4,uTime:0,wireframe:!1}},interstella:{title:"Interstella",color:"white",props:{range:"enabled",rangeStart:0,rangeEnd:40,frameRate:10,destination:"onCanvas",format:"gif",animate:"on",axesHelper:"off",brightness:.8,cAzimuthAngle:270,cDistance:.5,cPolarAngle:180,cameraZoom:15.1,color1:"#73bfc4",color2:"#ff810a",color3:"#8da0ce",embedMode:"off",envPreset:"city",gizmoHelper:"hide",grain:"on",lightType:"env",pixelDensity:1,fov:45,positionX:-.1,positionY:0,positionZ:0,reflection:.4,rotationX:0,rotationY:130,rotationZ:70,shader:"defaults",type:"sphere",uAmplitude:3.2,uDensity:.8,uFrequency:5.5,uSpeed:.3,uStrength:.3,uTime:0,wireframe:!1}}};var We=Object.values(j);var re=0,Re=Ue(j),ne=Re[0].url;function Ue(e){return Object.entries(e).map(([r,n])=>{let{title:o,color:s,props:i}=n,a=new URLSearchParams(Object.entries(i).reduce((l,[u,y])=>(l[u]=String(y),l),{})).toString();return{title:o,color:s,url:`?${a}`}})}var $e=m({},se()),He=g(e=>$e),tt=e=>{let t=typeof e=="string",r=e;t&&(r=se(e)),He.setState(r,t)};function se(e=ne){return I(e,{parseNumbers:!0,parseBooleans:!0,arrayFormat:"index"})}var rt=g(()=>({dom:null})),nt=g(e=>({hoverState:0,hover:"default",updateHoverState:t=>e({hoverState:t})})),ot=g(te({activePreset:re,mode:"full",loadingPercentage:0},e=>({setActivePreset:t=>e(r=>({activePreset:t})),setMode:t=>e(r=>b(m({},r),{mode:t})),setLoadingPercentage:t=>e(r=>b(m({},r),{loadingPercentage:t}))}))),oe=g(e=>({figma:{selection:0,user:null},setFigma:t=>e(r=>({figma:m(m({},r.figma),t)}))}));function it(){let e=oe(r=>r.figma),t=oe(r=>r.setFigma);return[e,t]}var ie=g(e=>({billingInterval:"year",setBillingInterval:t=>e(r=>({billingInterval:t}))}));function st(){let e=ie(r=>r.billingInterval),t=ie(r=>r.setBillingInterval);return[e,t]}export{tt as updateGradientState,st as useBillingInterval,ie as useBillingIntervalStore,nt as useCursorStore,rt as useDomStore,it as useFigma,He as useQueryStore,ot as useUIStore};
