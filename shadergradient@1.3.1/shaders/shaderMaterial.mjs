import{a as i}from"../chunk-GMCKMPCO.mjs";import*as l from"three";function d(r,e,T,f){return class extends l.MeshPhysicalMaterial{constructor(){let g=Object.entries(r),u=r.colors,n=E(u[0]),s=E(u[1]),o=E(u[2]),R={uC1r:{value:a(n==null?void 0:n.r)},uC1g:{value:a(n==null?void 0:n.g)},uC1b:{value:a(n==null?void 0:n.b)},uC2r:{value:a(s==null?void 0:s.r)},uC2g:{value:a(s==null?void 0:s.g)},uC2b:{value:a(s==null?void 0:s.b)},uC3r:{value:a(o==null?void 0:o.r)},uC3g:{value:a(o==null?void 0:o.g)},uC3b:{value:a(o==null?void 0:o.b)}},b=g.reduce((t,[c,m])=>{let h=l.UniformsUtils.clone({[c]:{value:m}});return i(i({},t),h)},{});super({metalness:.2,userData:b,side:l.DoubleSide,onBeforeCompile:t=>{t.uniforms=i(i(i({},t.uniforms),b),R),t.vertexShader=e,t.fragmentShader=T}}),g.forEach(([t])=>Object.defineProperty(this,t,{get:()=>this.uniforms[t].value,set:c=>this.uniforms[t].value=c})),f&&f(this)}}}function v(r){let e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}function H(r){let e=r.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);return e?{r:parseInt(e[1]),g:parseInt(e[2]),b:parseInt(e[3])}:null}function E(r){if(r.startsWith("#"))return v(r);if(r.startsWith("rgb"))return H(r);throw new Error("Invalid color format")}function a(r=0){return r/255}export{d as shaderMaterial};
