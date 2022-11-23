// src/UI/Header/Header.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { mainLoading } from "../../consts.js";
import { PRESETS } from "../../presets.js";
import { useUIStore } from "../../store.js";
import { AboutBtn } from "./AboutBtn.js";

// esbuild-css-modules-plugin-namespace:/var/folders/ym/yzmq9ln54g95nc5cn7pqjr180000gn/T/tmp-58312-8UJWOvUb4YoY/shadergradient/src/UI/Header/Header.module.css.js
var digest = "44a05c534bbfce5ce20fb1c9505496a7729d466866c2b9f6ce06a16464dc03da";
var css = `._header_bdl6a_1 {
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10; }
`;
(function() {
  if (typeof document !== "undefined" && !document.getElementById(digest)) {
    var ele = document.createElement("style");
    ele.id = digest;
    ele.textContent = css;
    document.head.appendChild(ele);
  }
})();
var Header_module_css_default = { "header": "_header_bdl6a_1" };

// src/UI/Header/Header.tsx
import { TextLogo } from "./TextLogo.js";
function Header({
  mode = "full",
  isMobile = false,
  inAbout = false,
  aboutBtn = false,
  loadingMotion = false,
  onLogoClick = () => void 0,
  onAboutClick = () => void 0,
  onBackClick = () => void 0
}) {
  const activePreset = useUIStore((state) => state.activePreset);
  const color = mode !== "full" ? "#FF430A" : PRESETS[activePreset].color;
  const [loadingReady, setLoadingReady] = useState(false);
  useEffect(() => {
    if (loadingMotion === true) {
      setTimeout(() => {
        setLoadingReady(true);
      }, (mainLoading.logoTransition + 0.6) * 1e3);
    }
  }, []);
  return /* @__PURE__ */ React.createElement(motion.div, {
    className: Header_module_css_default.header,
    initial: { top: loadingMotion === true ? "46%" : 0 },
    animate: {
      top: 0
    },
    transition: {
      duration: 0.5,
      delay: mainLoading.logoTransition,
      type: "spring"
    }
  }, (inAbout !== true || isMobile === true) && /* @__PURE__ */ React.createElement(TextLogo, {
    color,
    size: isMobile === true ? 15 : 18,
    onClick: onLogoClick,
    delay: loadingMotion === true ? 1.5 : 0
  }), aboutBtn && loadingReady === true && /* @__PURE__ */ React.createElement(AboutBtn, {
    inAbout,
    color,
    onAboutClick,
    onBackClick,
    isMobile
  }));
}
export {
  Header
};
