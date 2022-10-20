// Generated by Framer (f0205c2)
import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";import{addFonts,cx,getFonts,RichText,useActiveVariantCallback,useVariantState,withCSS}from"framer";import{LayoutGroup,motion}from"framer-motion";import*as React from"react";import{AllControls,Gradient}from"https://framerusercontent.com/modules/h7AP2BRfJPRmpk2YiQfU/AQFbufiPjJmulGUjYffQ/DesignSystem.js";import{HideScrollBar,Tool3dAxis,ToolUndo,ToolZoomOut}from"https://framerusercontent.com/modules/xGkkPRQX1tYn1pHGBlmt/hgTyabT6saDZQ5JybcbZ/Overrides.js";import{TailwindCSS}from"https://framerusercontent.com/modules/vGZX67aJTg9KKKm6xDEP/G0HRuiN4ZY63OSyPlJB6/TailwindCSS.js";import Tools from"https://framerusercontent.com/modules/5hlNTgTa9b4MnT1EdOiu/h1e6oLj9KB8avYYeFeG3/XWP78T8ip.js";const GradientFonts=getFonts(Gradient);const ToolsFonts=getFonts(Tools);const ToolsToolUndo=ToolUndo(Tools);const ToolsTool3dAxis=Tool3dAxis(Tools);const ToolsToolZoomOut=ToolZoomOut(Tools);const AllControlsFonts=getFonts(AllControls);const TailwindCSSFonts=getFonts(TailwindCSS);const MotionDivHideScrollBar=HideScrollBar(motion.div);const cycleOrder=["ASohgaYfq"];const variantClassNames={ASohgaYfq:"framer-v-1pwgz07"};function addPropertyOverrides(overrides,...variants){const nextOverrides={};variants===null||variants===void 0?void 0:variants.forEach(variant=>variant&&Object.assign(nextOverrides,overrides[variant]));return nextOverrides;}const humanReadableVariantMap={};const transitions={default:{damping:60,delay:0,duration:.3,ease:[.44,0,.56,1],mass:1,stiffness:500,type:"spring"}};const BASE62="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function useRandomID(){const ref=React.useRef(null);if(ref.current===null){ref.current=Array(5).fill(0).map(()=>BASE62[Math.floor(Math.random()*BASE62.length)]).join("");}return ref.current;}const Component=/*#__PURE__*/ React.forwardRef(function({id,style:externalStyle={},className,width,height,layoutId,variant:outerVariant="ASohgaYfq",...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{baseVariant,classNames,gestureVariant,setGestureState,setVariant,transition,variants}=useVariantState({cycleOrder,defaultVariant:"ASohgaYfq",transitions,variant,variantClassNames});const layoutDependency=variants.join("-")+restProps.layoutDependency;const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onKeyDowncdlrqq=activeVariantCallback(async(...args)=>{setVariant("ASohgaYfq");});const onSubmitcdlrqq=activeVariantCallback(async(...args)=>{setVariant("ASohgaYfq");});const defaultLayoutId=useRandomID();const{pointerEvents,...style}=externalStyle;return /*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{"data-framer-generated":true,initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-w22AY",classNames),style:{display:"contents",pointerEvents:pointerEvents!==null&&pointerEvents!==void 0?pointerEvents:undefined},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,className:cx("framer-1pwgz07",className),"data-framer-name":"default",layoutDependency:layoutDependency,layoutId:"ASohgaYfq",ref:ref,style:{...style},transition:transition,children:[/*#__PURE__*/ _jsxs(motion.div,{className:"framer-1cqj63m","data-framer-name":"previewWrap",layoutDependency:layoutDependency,layoutId:"p4T5xNE_k",style:{backgroundColor:"rgb(0, 0, 0)"},transition:transition,children:[/*#__PURE__*/ _jsx(RichText,{__fromCanvasComponent:true,children:/*#__PURE__*/ _jsx(React.Fragment,{children:/*#__PURE__*/ _jsx(motion.p,{style:{"--font-selector":"SW50ZXItU2VtaUJvbGQ=","--framer-font-family":'"Inter-SemiBold", "Inter", sans-serif',"--framer-font-size":"14px","--framer-font-weight":"600","--framer-text-color":"var(--extracted-r6o4lv)"},children:"Loading"})}),className:"framer-661u2h",fonts:["Inter-SemiBold"],layoutDependency:layoutDependency,layoutId:"AvEawGs5J",style:{"--extracted-r6o4lv":"rgb(255, 255, 255)","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline","--framer-paragraph-spacing":"0px"},transformTemplate:(_,t)=>`translate(-50%, -50%) ${t}`,transition:transition,verticalAlignment:"top",withExternalLayout:true}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-1ay7sco-container",layoutDependency:layoutDependency,layoutId:"tGeOu2MHd-container",transition:transition,children:/*#__PURE__*/ _jsx(Gradient,{activeTab:"Colors",animate:"on",brightness:1.2,cameraZoom:1,cAzimuthAngle:180,cDistance:2.6,color1:"rgb(255, 80, 5)",color2:"rgb(219, 186, 149)",color3:"rgb(208, 188, 225)",control:"query",cPolarAngle:90,envPreset:"city",grain:"on",height:"100%",id:"tGeOu2MHd",layoutId:"tGeOu2MHd",lightType:"3d",positionX:-1.4,positionY:0,positionZ:0,reflection:.1,rotationX:0,rotationY:10,rotationZ:50,shader:"defaults",style:{height:"100%",width:"100%"},type:"plane",uAmplitude:.1,uDensity:1.3,uFrequency:.1,uSpeed:.6,uStrength:4,uTime:0,width:"100%",zoomOut:false})})]}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-18e3n0t",layoutDependency:layoutDependency,layoutId:"zsa2gFwHi",style:{backgroundColor:"rgb(56, 56, 56)"},transition:transition,children:/*#__PURE__*/ _jsxs(motion.div,{className:"framer-kq0p7r",layoutDependency:layoutDependency,layoutId:"RDGiziIji",style:{backgroundColor:"rgb(82, 82, 82)",borderBottomLeftRadius:100,borderBottomRightRadius:100,borderTopLeftRadius:100,borderTopRightRadius:100},transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-xcuylx-container",layoutDependency:layoutDependency,layoutId:"ccYBEn5cQ-container",transition:transition,children:/*#__PURE__*/ _jsx(ToolsToolUndo,{axisIcon:false,feather:true,height:"100%",hoverText:"undo",icon:"corner-up-left",id:"ccYBEn5cQ",layoutId:"ccYBEn5cQ",variant:"QOKSNfwYS",width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-pwr3f4-container",layoutDependency:layoutDependency,layoutId:"WnXvem91x-container",transition:transition,children:/*#__PURE__*/ _jsx(ToolsTool3dAxis,{axisIcon:true,feather:false,height:"100%",hoverText:"3d axis",icon:"corner-up-left",id:"WnXvem91x",layoutId:"WnXvem91x",variant:"PJFWvoY8M",width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-1hb769c-container",layoutDependency:layoutDependency,layoutId:"z8Ve0GW4z-container",transition:transition,children:/*#__PURE__*/ _jsx(ToolsToolZoomOut,{axisIcon:false,feather:true,height:"100%",hoverText:"zoom out",icon:"minimize-2",id:"z8Ve0GW4z",layoutId:"z8Ve0GW4z",variant:"PJFWvoY8M",width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-600kf6-container",layoutDependency:layoutDependency,layoutId:"beqsTygCF-container",transition:transition,children:/*#__PURE__*/ _jsx(Tools,{axisIcon:false,feather:true,height:"100%",hoverText:"import url",icon:"link",id:"beqsTygCF",layoutId:"beqsTygCF",variant:"QOKSNfwYS",width:"100%"})})]})}),/*#__PURE__*/ _jsxs(MotionDivHideScrollBar,{className:"framer-1jrti1w","data-framer-name":"scrollWrap",layoutDependency:layoutDependency,layoutId:"AeGXfvLJg",style:{backgroundColor:"rgb(246, 248, 248)"},transition:transition,children:[/*#__PURE__*/ _jsx(motion.div,{className:"framer-b4qjhb-container",layoutDependency:layoutDependency,layoutId:"CRnJVnMOu-container",transformTemplate:(_,t)=>`translateX(-50%) ${t}`,transition:transition,children:/*#__PURE__*/ _jsx(AllControls,{height:"100%",id:"CRnJVnMOu",isFigma:true,isMobile:true,layoutId:"CRnJVnMOu",style:{width:"100%"},width:"100%"})}),/*#__PURE__*/ _jsx(motion.div,{className:"framer-16fv3vz-container",layoutDependency:layoutDependency,layoutId:"zHhBZbUGx-container",style:{opacity:0},transition:transition,children:/*#__PURE__*/ _jsx(TailwindCSS,{height:"100%",id:"zHhBZbUGx",layoutId:"zHhBZbUGx",width:"100%"})})]})]})})});});const css=['.framer-w22AY [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}',"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",".framer-w22AY * { box-sizing: border-box; }",".framer-w22AY .framer-1pwgz07 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 832px; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 0px; position: relative; width: 453px; }",".framer-w22AY .framer-1cqj63m { flex: none; height: 305px; overflow: hidden; position: relative; width: 100%; }",".framer-w22AY .framer-661u2h { flex: none; height: auto; left: 50%; position: absolute; top: 50%; white-space: pre; width: auto; }",".framer-w22AY .framer-1ay7sco-container { flex: none; height: 100%; left: calc(49.90019960079842% - 100% / 2); position: absolute; top: calc(49.83606557377052% - 100% / 2); width: 100%; }",".framer-w22AY .framer-1p7lc8a-container { flex: none; height: auto; left: 50%; position: absolute; top: 50%; width: auto; }",".framer-w22AY .framer-vnn989 { flex: none; height: 94px; left: calc(50.11037527593821% - 345px / 2); overflow: visible; position: absolute; top: 85px; width: 345px; }",".framer-w22AY .framer-139vojp { flex: none; height: 53px; left: calc(50.11037527593821% - 344px / 2); overflow: visible; position: absolute; top: calc(49.83606557377052% - 53px / 2); width: 344px; }",".framer-w22AY .framer-1elrb7l { flex: none; height: 45px; overflow: hidden; position: absolute; right: 79px; top: calc(50.16393442622953% - 45px / 2); width: 94px; }",".framer-w22AY .framer-18e3n0t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 6px 9px 6px 18px; position: relative; width: 100%; }",".framer-w22AY .framer-kq0p7r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 3px 3px 3px 3px; position: relative; width: min-content; }",".framer-w22AY .framer-xcuylx-container, .framer-w22AY .framer-pwr3f4-container, .framer-w22AY .framer-1hb769c-container, .framer-w22AY .framer-600kf6-container, .framer-w22AY .framer-1e8o2bz-container { flex: none; height: auto; position: relative; width: auto; }",".framer-w22AY .framer-1jrti1w { flex: none; height: 390px; overflow: auto; position: relative; width: 100%; }",".framer-w22AY .framer-b4qjhb-container { flex: none; height: auto; left: 50%; position: absolute; top: 0px; width: 100%; }",".framer-w22AY .framer-16fv3vz-container { bottom: 0px; flex: none; height: auto; position: absolute; right: 0px; width: auto; }","@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-w22AY .framer-1pwgz07, .framer-w22AY .framer-kq0p7r { gap: 0px; } .framer-w22AY .framer-1pwgz07 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-w22AY .framer-1pwgz07 > :first-child { margin-top: 0px; } .framer-w22AY .framer-1pwgz07 > :last-child { margin-bottom: 0px; } .framer-w22AY .framer-kq0p7r > * { margin: 0px; margin-left: calc(4px / 2); margin-right: calc(4px / 2); } .framer-w22AY .framer-kq0p7r > :first-child { margin-left: 0px; } .framer-w22AY .framer-kq0p7r > :last-child { margin-right: 0px; } }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 832
 * @framerIntrinsicWidth 453
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]}}}
 */ const FramertNpoQk34A=withCSS(Component,css);export default FramertNpoQk34A;FramertNpoQk34A.displayName="Figma Plugin";FramertNpoQk34A.defaultProps={height:832,width:453};addFonts(FramertNpoQk34A,[...GradientFonts,...ToolsFonts,...AllControlsFonts,...TailwindCSSFonts]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramertNpoQk34A","slots":[],"annotations":{"framerIntrinsicWidth":"453","framerCanvasComponentVariantDetails":"{\"propertyName\":\"variant\",\"data\":{\"default\":{\"layout\":[\"fixed\",\"fixed\"]}}}","framerContractVersion":"1","framerIntrinsicHeight":"832"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./tNpoQk34A.map