var Fe=Object.create;var D=Object.defineProperty,we=Object.defineProperties,Oe=Object.getOwnPropertyDescriptor,Ie=Object.getOwnPropertyDescriptors,De=Object.getOwnPropertyNames,q=Object.getOwnPropertySymbols,Ae=Object.getPrototypeOf,H=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable;var U=(e,t,r)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))H.call(t,r)&&U(e,r,t[r]);if(q)for(var r of q(t))Te.call(t,r)&&U(e,r,t[r]);return e},O=(e,t)=>we(e,Ie(t));var M=(e=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(e,{get:(t,r)=>(typeof require!="undefined"?require:t)[r]}):e)(function(e){if(typeof require!="undefined")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var f=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var je=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of De(t))!H.call(e,o)&&o!==r&&D(e,o,{get:()=>t[o],enumerable:!(n=Oe(t,o))||n.enumerable});return e};var A=(e,t,r)=>(r=e!=null?Fe(Ae(e)):{},je(t||!e||!e.__esModule?D(r,"default",{value:e,enumerable:!0}):r,e));var $=f((mt,z)=>{"use strict";z.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)});var X=f((pt,J)=>{"use strict";var B="%[a-f0-9]{2}",L=new RegExp("("+B+")|([^%]+?)","gi"),Z=new RegExp("("+B+")+","gi");function T(e,t){try{return[decodeURIComponent(e.join(""))]}catch(o){}if(e.length===1)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],T(r),T(n))}function Pe(e){try{return decodeURIComponent(e)}catch(n){for(var t=e.match(L)||[],r=1;r<t.length;r++)e=T(t,r).join(""),t=e.match(L)||[];return e}}function Re(e){for(var t={"%FE%FF":"\uFFFD\uFFFD","%FF%FE":"\uFFFD\uFFFD"},r=Z.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(a){var n=Pe(r[0]);n!==r[0]&&(t[r[0]]=n)}r=Z.exec(e)}t["%C2"]="\uFFFD";for(var o=Object.keys(t),s=0;s<o.length;s++){var i=o[s];e=e.replace(new RegExp(i,"g"),t[i])}return e}J.exports=function(e){if(typeof e!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return Re(e)}}});var k=f((gt,Y)=>{"use strict";Y.exports=(e,t)=>{if(!(typeof e=="string"&&typeof t=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(t==="")return[e];let r=e.indexOf(t);return r===-1?[e]:[e.slice(0,r),e.slice(r+t.length)]}});var Q=f((yt,W)=>{"use strict";W.exports=function(e,t){for(var r={},n=Object.keys(e),o=Array.isArray(t),s=0;s<n.length;s++){var i=n[s],a=e[i];(o?t.indexOf(i)!==-1:t(i,a,e))&&(r[i]=a)}return r}});var P=f(l=>{"use strict";var Ce=$(),_e=X(),K=k(),Ne=Q(),qe=e=>e==null,j=Symbol("encodeFragmentIdentifier");function Ue(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{let o=r.length;return n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?r:n===null?[...r,[c(t,e),"[",o,"]"].join("")]:[...r,[c(t,e),"[",c(o,e),"]=",c(n,e)].join("")]};case"bracket":return t=>(r,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?r:n===null?[...r,[c(t,e),"[]"].join("")]:[...r,[c(t,e),"[]=",c(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?r:n===null?[...r,[c(t,e),":list="].join("")]:[...r,[c(t,e),":list=",c(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{let t=e.arrayFormat==="bracket-separator"?"[]=":"=";return r=>(n,o)=>o===void 0||e.skipNull&&o===null||e.skipEmptyString&&o===""?n:(o=o===null?"":o,n.length===0?[[c(r,e),t,c(o,e)].join("")]:[[n,c(o,e)].join(e.arrayFormatSeparator)])}default:return t=>(r,n)=>n===void 0||e.skipNull&&n===null||e.skipEmptyString&&n===""?r:n===null?[...r,c(t,e)]:[...r,[c(t,e),"=",c(n,e)].join("")]}}function He(e){let t;switch(e.arrayFormat){case"index":return(r,n,o)=>{if(t=/\[(\d*)\]$/.exec(r),r=r.replace(/\[\d*\]$/,""),!t){o[r]=n;return}o[r]===void 0&&(o[r]={}),o[r][t[1]]=n};case"bracket":return(r,n,o)=>{if(t=/(\[\])$/.exec(r),r=r.replace(/\[\]$/,""),!t){o[r]=n;return}if(o[r]===void 0){o[r]=[n];return}o[r]=[].concat(o[r],n)};case"colon-list-separator":return(r,n,o)=>{if(t=/(:list)$/.exec(r),r=r.replace(/:list$/,""),!t){o[r]=n;return}if(o[r]===void 0){o[r]=[n];return}o[r]=[].concat(o[r],n)};case"comma":case"separator":return(r,n,o)=>{let s=typeof n=="string"&&n.includes(e.arrayFormatSeparator),i=typeof n=="string"&&!s&&m(n,e).includes(e.arrayFormatSeparator);n=i?m(n,e):n;let a=s||i?n.split(e.arrayFormatSeparator).map(u=>m(u,e)):n===null?n:m(n,e);o[r]=a};case"bracket-separator":return(r,n,o)=>{let s=/(\[\])$/.test(r);if(r=r.replace(/\[\]$/,""),!s){o[r]=n&&m(n,e);return}let i=n===null?[]:n.split(e.arrayFormatSeparator).map(a=>m(a,e));if(o[r]===void 0){o[r]=i;return}o[r]=[].concat(o[r],i)};default:return(r,n,o)=>{if(o[r]===void 0){o[r]=n;return}o[r]=[].concat(o[r],n)}}}function V(e){if(typeof e!="string"||e.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function c(e,t){return t.encode?t.strict?Ce(e):encodeURIComponent(e):e}function m(e,t){return t.decode?_e(e):e}function ee(e){return Array.isArray(e)?e.sort():typeof e=="object"?ee(Object.keys(e)).sort((t,r)=>Number(t)-Number(r)).map(t=>e[t]):e}function te(e){let t=e.indexOf("#");return t!==-1&&(e=e.slice(0,t)),e}function Me(e){let t="",r=e.indexOf("#");return r!==-1&&(t=e.slice(r)),t}function re(e){e=te(e);let t=e.indexOf("?");return t===-1?"":e.slice(t+1)}function G(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&typeof e=="string"&&e.trim()!==""?e=Number(e):t.parseBooleans&&e!==null&&(e.toLowerCase()==="true"||e.toLowerCase()==="false")&&(e=e.toLowerCase()==="true"),e}function ne(e,t){t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t),V(t.arrayFormatSeparator);let r=He(t),n=Object.create(null);if(typeof e!="string"||(e=e.trim().replace(/^[?#&]/,""),!e))return n;for(let o of e.split("&")){if(o==="")continue;let[s,i]=K(t.decode?o.replace(/\+/g," "):o,"=");i=i===void 0?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?i:m(i,t),r(m(s,t),i,n)}for(let o of Object.keys(n)){let s=n[o];if(typeof s=="object"&&s!==null)for(let i of Object.keys(s))s[i]=G(s[i],t);else n[o]=G(s,t)}return t.sort===!1?n:(t.sort===!0?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((o,s)=>{let i=n[s];return i&&typeof i=="object"&&!Array.isArray(i)?o[s]=ee(i):o[s]=i,o},Object.create(null))}l.extract=re;l.parse=ne;l.stringify=(e,t)=>{if(!e)return"";t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t),V(t.arrayFormatSeparator);let r=i=>t.skipNull&&qe(e[i])||t.skipEmptyString&&e[i]==="",n=Ue(t),o={};for(let i of Object.keys(e))r(i)||(o[i]=e[i]);let s=Object.keys(o);return t.sort!==!1&&s.sort(t.sort),s.map(i=>{let a=e[i];return a===void 0?"":a===null?c(i,t):Array.isArray(a)?a.length===0&&t.arrayFormat==="bracket-separator"?c(i,t)+"[]":a.reduce(n(i),[]).join("&"):c(i,t)+"="+c(a,t)}).filter(i=>i.length>0).join("&")};l.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);let[r,n]=K(e,"#");return Object.assign({url:r.split("?")[0]||"",query:ne(re(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:m(n,t)}:{})};l.stringifyUrl=(e,t)=>{t=Object.assign({encode:!0,strict:!0,[j]:!0},t);let r=te(e.url).split("?")[0]||"",n=l.extract(e.url),o=l.parse(n,{sort:!1}),s=Object.assign(o,e.query),i=l.stringify(s,t);i&&(i=`?${i}`);let a=Me(e.url);return e.fragmentIdentifier&&(a=`#${t[j]?c(e.fragmentIdentifier,t):e.fragmentIdentifier}`),`${r}${i}${a}`};l.pick=(e,t,r)=>{r=Object.assign({parseFragmentIdentifier:!0,[j]:!1},r);let{url:n,query:o,fragmentIdentifier:s}=l.parseUrl(e,r);return l.stringifyUrl({url:n,query:Ne(o,t),fragmentIdentifier:s},r)};l.exclude=(e,t,r)=>{let n=Array.isArray(t)?o=>!t.includes(o):(o,s)=>!t(o,s);return l.pick(e,n,r)}});var ce=f(ae=>{"use strict";var E=M("react");function ze(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:ze,Le=E.useState,Ze=E.useEffect,Be=E.useLayoutEffect,Je=E.useDebugValue;function Xe(e,t){var r=t(),n=Le({inst:{value:r,getSnapshot:t}}),o=n[0].inst,s=n[1];return Be(function(){o.value=r,o.getSnapshot=t,R(o)&&s({inst:o})},[e,r,t]),Ze(function(){return R(o)&&s({inst:o}),e(function(){R(o)&&s({inst:o})})},[e]),Je(r),r}function R(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!$e(e,r)}catch(n){return!0}}function Ye(e,t){return t()}var ke=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?Ye:Xe;ae.useSyncExternalStore=E.useSyncExternalStore!==void 0?E.useSyncExternalStore:ke});var le=f((bt,ue)=>{"use strict";ue.exports=ce()});var fe=f(de=>{"use strict";var I=M("react"),We=le();function Qe(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:Qe,Ke=We.useSyncExternalStore,Ve=I.useRef,et=I.useEffect,tt=I.useMemo,rt=I.useDebugValue;de.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var s=Ve(null);if(s.current===null){var i={hasValue:!1,value:null};s.current=i}else i=s.current;s=tt(function(){function u(p){if(!g){if(g=!0,d=p,p=n(p),o!==void 0&&i.hasValue){var b=i.value;if(o(b,p))return S=b}return S=p}if(b=S,Ge(d,p))return b;var N=n(p);return o!==void 0&&o(b,N)?b:(d=p,S=N)}var g=!1,d,S,w=r===void 0?null:r;return[function(){return u(t())},w===null?void 0:function(){return u(w())}]},[t,r,n,o]);var a=Ke(e,s[0],s[1]);return et(function(){i.hasValue=!0,i.value=a},[a]),rt(a),a}});var pe=f((xt,me)=>{"use strict";me.exports=fe()});var F=A(P());import{useCallback as _}from"react";var Ee=A(P());var ie={},oe=e=>{let t,r=new Set,n=(u,g)=>{let d=typeof u=="function"?u(t):u;if(!Object.is(d,t)){let S=t;t=(g!=null?g:typeof d!="object"||d===null)?d:Object.assign({},t,d),r.forEach(w=>w(t,S))}},o=()=>t,a={setState:n,getState:o,subscribe:u=>(r.add(u),()=>r.delete(u)),destroy:()=>{(ie.env?ie.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}};return t=e(n,o,a),a},se=e=>e?oe(e):oe;var he=A(pe(),1);import nt from"react";var x={},{useDebugValue:ot}=nt,{useSyncExternalStoreWithSelector:it}=he.default,ge=!1;function st(e,t=e.getState,r){(x.env?x.env.MODE:void 0)!=="production"&&r&&!ge&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),ge=!0);let n=it(e.subscribe,e.getState,e.getServerState||e.getState,t,r);return ot(n),n}var ye=e=>{(x.env?x.env.MODE:void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t=typeof e=="function"?se(e):e,r=(n,o)=>st(t,n,o);return Object.assign(r,t),r},at=e=>e?ye(e):ye,h=e=>((x.env?x.env.MODE:void 0)!=="production"&&console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."),at(e));var ve=(e,t)=>(...r)=>Object.assign({},e,t(...r));var C={base:{title:"Base",color:"white",props:{positionX:0,positionY:0,positionZ:0,rotationX:0,rotationY:0,rotationZ:0,uAmplitude:2,color1:"#ff5005",color2:"#dbba95",color3:"#d0bce1"}},halo:{title:"Halo",color:"white",props:{type:"plane",uAmplitude:1,uDensity:1.3,uSpeed:.4,uStrength:4,uTime:0,uFrequency:5.5,range:"enabled",rangeStart:0,rangeEnd:40,frameRate:10,destination:"onCanvas",format:"gif",axesHelper:"off",brightness:1.2,cAzimuthAngle:180,cDistance:3.6,cPolarAngle:90,cameraZoom:1,color1:"#ff5005",color2:"#dbba95",color3:"#d0bce1",embedMode:"off",envPreset:"city",gizmoHelper:"hide",grain:"on",lightType:"3d",pixelDensity:1,fov:45,positionX:-1.4,positionY:0,positionZ:0,reflection:.1,rotationX:0,rotationY:10,rotationZ:50,shader:"defaults",animate:"on",wireframe:!1}},pensive:{title:"Pensive",color:"white",props:{range:"enabled",rangeStart:0,rangeEnd:40,frameRate:10,destination:"onCanvas",format:"gif",animate:"on",axesHelper:"off",brightness:1.5,cAzimuthAngle:250,cDistance:1.5,cPolarAngle:140,cameraZoom:12.5,color1:"#809bd6",color2:"#910aff",color3:"#af38ff",embedMode:"off",envPreset:"city",gizmoHelper:"hide",grain:"on",lightType:"3d",pixelDensity:1,fov:45,positionX:0,positionY:0,positionZ:0,reflection:.5,rotationX:0,rotationY:0,rotationZ:140,shader:"defaults",type:"sphere",uAmplitude:7,uDensity:.8,uFrequency:5.5,uSpeed:.3,uStrength:.4,uTime:0,wireframe:!1}},mint:{title:"Mint",color:"white",props:{range:"enabled",rangeStart:0,rangeEnd:40,frameRate:10,destination:"onCanvas",format:"gif",animate:"on",axesHelper:"off",brightness:1.2,cAzimuthAngle:170,cDistance:4.4,cPolarAngle:70,cameraZoom:1,color1:"#94ffd1",color2:"#6bf5ff",color3:"#ffffff",embedMode:"off",envPreset:"city",gizmoHelper:"hide",grain:"off",lightType:"3d",pixelDensity:1,fov:45,positionX:0,positionY:.9,positionZ:-.3,reflection:.1,rotationX:45,rotationY:0,rotationZ:0,shader:"defaults",type:"waterPlane",uAmplitude:0,uDensity:1.2,uFrequency:0,uSpeed:.2,uStrength:3.4,uTime:0,wireframe:!1}},interstella:{title:"Interstella",color:"white",props:{range:"enabled",rangeStart:0,rangeEnd:40,frameRate:10,destination:"onCanvas",format:"gif",animate:"on",axesHelper:"off",brightness:.8,cAzimuthAngle:270,cDistance:.5,cPolarAngle:180,cameraZoom:15.1,color1:"#73bfc4",color2:"#ff810a",color3:"#8da0ce",embedMode:"off",envPreset:"city",gizmoHelper:"hide",grain:"on",lightType:"env",pixelDensity:1,fov:45,positionX:-.1,positionY:0,positionZ:0,reflection:.4,rotationX:0,rotationY:130,rotationZ:70,shader:"defaults",type:"sphere",uAmplitude:3.2,uDensity:.8,uFrequency:5.5,uSpeed:.3,uStrength:.3,uTime:0,wireframe:!1}}};var jt=Object.values(C);var Se=0,ct=ut(C),be=ct[0].url;function ut(e){return Object.entries(e).map(([r,n])=>{let{title:o,color:s,props:i}=n,a=new URLSearchParams(Object.entries(i).reduce((u,[g,d])=>(u[g]=String(d),u),{})).toString();return{title:o,color:s,url:`?${a}`}})}var lt=y({},dt()),v=h(e=>lt);function dt(e=be){return Ee.parse(e,{parseNumbers:!0,parseBooleans:!0,arrayFormat:"index"})}var Ut=h(()=>({dom:null})),Ht=h(e=>({hoverState:0,hover:"default",updateHoverState:t=>e({hoverState:t})})),Mt=h(ve({activePreset:Se,mode:"full",loadingPercentage:0},e=>({setActivePreset:t=>e(r=>({activePreset:t})),setMode:t=>e(r=>O(y({},r),{mode:t})),setLoadingPercentage:t=>e(r=>O(y({},r),{loadingPercentage:t}))}))),zt=h(e=>({figma:{selection:0,user:null},setFigma:t=>e(r=>({figma:y(y({},r.figma),t)}))}));var $t=h(e=>({billingInterval:"year",setBillingInterval:t=>e(r=>({billingInterval:t}))}));var Xt=(e,t=null)=>{let r=_(i=>typeof i[e]!="undefined"?i[e]:t,[e,t]),n=v(r),o=_(i=>v.setState({[e]:i(v.getState()[e])}),[e]),s=_(i=>{o(a=>(typeof i=="function"&&(i=i(a||t)),Number.isFinite(i)&&(i=parseFloat(i.toFixed(2))),setTimeout(()=>{let u=v.getState();xe(F.stringifyUrl({url:window.location.pathname,query:u},{skipNull:!0,arrayFormat:"index"}))},0),i))},[o]);return[n,s]},Yt=()=>t=>{setTimeout(()=>{let n=v.getState();xe(F.stringifyUrl({url:window.location.pathname,query:n},{skipNull:!0,arrayFormat:"index"}))},0);let r=F.parse(t,{parseNumbers:!0,parseBooleans:!0,arrayFormat:"index"});v.setState(r)};function xe(e){var t;window.history.pushState({prevUrls:[...((t=window.history.state)==null?void 0:t.prevUrls)||[],window.location.origin+e]},document.title,e)}export{Xt as useQueryState,Yt as useURLQueryState};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
