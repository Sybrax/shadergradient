function e(r){let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function n(r){let t=r.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return t?{r:parseInt(t[1]),g:parseInt(t[2]),b:parseInt(t[3])}:null}function a(r){if(r.startsWith("#"))return e(r);if(r.startsWith("rgb"))return n(r);throw new Error("Invalid color format")}function s(r=0){return r/255}function i(r){return r*(Math.PI/180)}function o(r){return r/180*Math.PI}function c(r){return r.map(t=>o(t))}function p(r){return r.replace("http://localhost:3001/customize","").replace("https://shadergradient.co/customize","").replace("https://www.shadergradient.co/customize","")}export{a as colorToRgb,o as dToR,c as dToRArr,i as degToRad,s as formatColor,p as formatUrlString};
