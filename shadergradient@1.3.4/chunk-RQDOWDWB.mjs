import{a as j}from"./chunk-R25MCQIE.mjs";import{a as O}from"./chunk-HNKGFXAE.mjs";import{a as A}from"./chunk-RGP4ZFH3.mjs";import{a as E}from"./chunk-MFKPK2CQ.mjs";import{c as x}from"./chunk-PP7OPZ6Z.mjs";import{a as S}from"./chunk-HRQ7F2EQ.mjs";import{b as u,d as l,e as m,g as _}from"./chunk-FLVFHPBB.mjs";var N=m((cr,C)=>{"use strict";C.exports=r=>encodeURIComponent(r).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)});var q=m((sr,U)=>{"use strict";var I="%[a-f0-9]{2}",w=new RegExp("("+I+")|([^%]+?)","gi"),$=new RegExp("("+I+")+","gi");function F(r,e){try{return[decodeURIComponent(r.join(""))]}catch(a){}if(r.length===1)return r;e=e||1;var t=r.slice(0,e),n=r.slice(e);return Array.prototype.concat.call([],F(t),F(n))}function z(r){try{return decodeURIComponent(r)}catch(n){for(var e=r.match(w)||[],t=1;t<e.length;t++)r=F(e,t).join(""),e=r.match(w)||[];return r}}function K(r){for(var e={"%FE%FF":"\uFFFD\uFFFD","%FF%FE":"\uFFFD\uFFFD"},t=$.exec(r);t;){try{e[t[0]]=decodeURIComponent(t[0])}catch(i){var n=z(t[0]);n!==t[0]&&(e[t[0]]=n)}t=$.exec(r)}e["%C2"]="\uFFFD";for(var a=Object.keys(e),c=0;c<a.length;c++){var f=a[c];r=r.replace(new RegExp(f,"g"),e[f])}return r}U.exports=function(r){if(typeof r!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch(e){return K(r)}}});var R=m((ir,D)=>{"use strict";D.exports=(r,e)=>{if(!(typeof r=="string"&&typeof e=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(e==="")return[r];let t=r.indexOf(e);return t===-1?[r]:[r.slice(0,t),r.slice(t+e.length)]}});var B=m((dr,T)=>{"use strict";T.exports=function(r,e){for(var t={},n=Object.keys(r),a=Array.isArray(e),c=0;c<n.length;c++){var f=n[c],i=r[f];(a?e.indexOf(f)!==-1:e(f,i,r))&&(t[f]=i)}return t}});var Q=m(d=>{"use strict";var W=N(),Y=q(),M=R(),Z=B(),k=r=>r==null,h=Symbol("encodeFragmentIdentifier");function v(r){switch(r.arrayFormat){case"index":return e=>(t,n)=>{let a=t.length;return n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,[s(e,r),"[",a,"]"].join("")]:[...t,[s(e,r),"[",s(a,r),"]=",s(n,r)].join("")]};case"bracket":return e=>(t,n)=>n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,[s(e,r),"[]"].join("")]:[...t,[s(e,r),"[]=",s(n,r)].join("")];case"colon-list-separator":return e=>(t,n)=>n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,[s(e,r),":list="].join("")]:[...t,[s(e,r),":list=",s(n,r)].join("")];case"comma":case"separator":case"bracket-separator":{let e=r.arrayFormat==="bracket-separator"?"[]=":"=";return t=>(n,a)=>a===void 0||r.skipNull&&a===null||r.skipEmptyString&&a===""?n:(a=a===null?"":a,n.length===0?[[s(t,r),e,s(a,r)].join("")]:[[n,s(a,r)].join(r.arrayFormatSeparator)])}default:return e=>(t,n)=>n===void 0||r.skipNull&&n===null||r.skipEmptyString&&n===""?t:n===null?[...t,s(e,r)]:[...t,[s(e,r),"=",s(n,r)].join("")]}}function rr(r){let e;switch(r.arrayFormat){case"index":return(t,n,a)=>{if(e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),!e){a[t]=n;return}a[t]===void 0&&(a[t]={}),a[t][e[1]]=n};case"bracket":return(t,n,a)=>{if(e=/(\[\])$/.exec(t),t=t.replace(/\[\]$/,""),!e){a[t]=n;return}if(a[t]===void 0){a[t]=[n];return}a[t]=[].concat(a[t],n)};case"colon-list-separator":return(t,n,a)=>{if(e=/(:list)$/.exec(t),t=t.replace(/:list$/,""),!e){a[t]=n;return}if(a[t]===void 0){a[t]=[n];return}a[t]=[].concat(a[t],n)};case"comma":case"separator":return(t,n,a)=>{let c=typeof n=="string"&&n.includes(r.arrayFormatSeparator),f=typeof n=="string"&&!c&&o(n,r).includes(r.arrayFormatSeparator);n=f?o(n,r):n;let i=c||f?n.split(r.arrayFormatSeparator).map(y=>o(y,r)):n===null?n:o(n,r);a[t]=i};case"bracket-separator":return(t,n,a)=>{let c=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!c){a[t]=n&&o(n,r);return}let f=n===null?[]:n.split(r.arrayFormatSeparator).map(i=>o(i,r));if(a[t]===void 0){a[t]=f;return}a[t]=[].concat(a[t],f)};default:return(t,n,a)=>{if(a[t]===void 0){a[t]=n;return}a[t]=[].concat(a[t],n)}}}function V(r){if(typeof r!="string"||r.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function s(r,e){return e.encode?e.strict?W(r):encodeURIComponent(r):r}function o(r,e){return e.decode?Y(r):r}function G(r){return Array.isArray(r)?r.sort():typeof r=="object"?G(Object.keys(r)).sort((e,t)=>Number(e)-Number(t)).map(e=>r[e]):r}function P(r){let e=r.indexOf("#");return e!==-1&&(r=r.slice(0,e)),r}function er(r){let e="",t=r.indexOf("#");return t!==-1&&(e=r.slice(t)),e}function H(r){r=P(r);let e=r.indexOf("?");return e===-1?"":r.slice(e+1)}function L(r,e){return e.parseNumbers&&!Number.isNaN(Number(r))&&typeof r=="string"&&r.trim()!==""?r=Number(r):e.parseBooleans&&r!==null&&(r.toLowerCase()==="true"||r.toLowerCase()==="false")&&(r=r.toLowerCase()==="true"),r}function J(r,e){e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e),V(e.arrayFormatSeparator);let t=rr(e),n=Object.create(null);if(typeof r!="string"||(r=r.trim().replace(/^[?#&]/,""),!r))return n;for(let a of r.split("&")){if(a==="")continue;let[c,f]=M(e.decode?a.replace(/\+/g," "):a,"=");f=f===void 0?null:["comma","separator","bracket-separator"].includes(e.arrayFormat)?f:o(f,e),t(o(c,e),f,n)}for(let a of Object.keys(n)){let c=n[a];if(typeof c=="object"&&c!==null)for(let f of Object.keys(c))c[f]=L(c[f],e);else n[a]=L(c,e)}return e.sort===!1?n:(e.sort===!0?Object.keys(n).sort():Object.keys(n).sort(e.sort)).reduce((a,c)=>{let f=n[c];return f&&typeof f=="object"&&!Array.isArray(f)?a[c]=G(f):a[c]=f,a},Object.create(null))}d.extract=H;d.parse=J;d.stringify=(r,e)=>{if(!r)return"";e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e),V(e.arrayFormatSeparator);let t=f=>e.skipNull&&k(r[f])||e.skipEmptyString&&r[f]==="",n=v(e),a={};for(let f of Object.keys(r))t(f)||(a[f]=r[f]);let c=Object.keys(a);return e.sort!==!1&&c.sort(e.sort),c.map(f=>{let i=r[f];return i===void 0?"":i===null?s(f,e):Array.isArray(i)?i.length===0&&e.arrayFormat==="bracket-separator"?s(f,e)+"[]":i.reduce(n(f),[]).join("&"):s(f,e)+"="+s(i,e)}).filter(f=>f.length>0).join("&")};d.parseUrl=(r,e)=>{e=Object.assign({decode:!0},e);let[t,n]=M(r,"#");return Object.assign({url:t.split("?")[0]||"",query:J(H(r),e)},e&&e.parseFragmentIdentifier&&n?{fragmentIdentifier:o(n,e)}:{})};d.stringifyUrl=(r,e)=>{e=Object.assign({encode:!0,strict:!0,[h]:!0},e);let t=P(r.url).split("?")[0]||"",n=d.extract(r.url),a=d.parse(n,{sort:!1}),c=Object.assign(a,r.query),f=d.stringify(c,e);f&&(f=`?${f}`);let i=er(r.url);return r.fragmentIdentifier&&(i=`#${e[h]?s(r.fragmentIdentifier,e):r.fragmentIdentifier}`),`${t}${f}${i}`};d.pick=(r,e,t)=>{t=Object.assign({parseFragmentIdentifier:!0,[h]:!1},t);let{url:n,query:a,fragmentIdentifier:c}=d.parseUrl(r,t);return d.stringifyUrl({url:n,query:Z(a,e),fragmentIdentifier:c},t)};d.exclude=(r,e,t)=>{let n=Array.isArray(e)?a=>!e.includes(a):(a,c)=>!e(a,c);return d.pick(r,n,t)}});var X=_(Q());import{Fragment as tr,jsx as g,jsxs as nr}from"react/jsx-runtime";function yr(r){let b=u(u({},S.halo.props),r),{control:e,urlString:t}=b,a=l(b,["control","urlString"]);e==="query"&&(a=X.parse(x(t),{parseNumbers:!0,parseBooleans:!0,arrayFormat:"index"}));let p=a,{lightType:c,envPreset:f,brightness:i,grain:y,toggleAxis:ar}=p,fr=l(p,["lightType","envPreset","brightness","grain","toggleAxis"]);return nr(tr,{children:[g(O,u({},a)),g(j,{}),g(A,{}),g(E,u({},a))]})}export{yr as a};
