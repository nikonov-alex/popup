var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{M:()=>N,A:()=>I});const n=Object.keys;function o(e){return"string"==typeof e}function r(e){return"number"==typeof e}function i(e){return"object"==typeof e?null!==e:a(e)}function a(e){return"function"==typeof e}function l(e,t){if(e)for(const o of n(e))t(e[o],o)}const s={animationIterationCount:0,borderImageOutset:0,borderImageSlice:0,borderImageWidth:0,boxFlex:0,boxFlexGroup:0,boxOrdinalGroup:0,columnCount:0,columns:0,flex:0,flexGrow:0,flexPositive:0,flexShrink:0,flexNegative:0,flexOrder:0,gridArea:0,gridRow:0,gridRowEnd:0,gridRowSpan:0,gridRowStart:0,gridColumn:0,gridColumnEnd:0,gridColumnSpan:0,gridColumnStart:0,fontWeight:0,lineClamp:0,lineHeight:0,opacity:0,order:0,orphans:0,tabSize:0,widows:0,zIndex:0,zoom:0,fillOpacity:0,floodOpacity:0,stopOpacity:0,strokeDasharray:0,strokeDashoffset:0,strokeMiterlimit:0,strokeOpacity:0,strokeWidth:0},c=["Webkit","ms","Moz","O"];n(s).forEach((e=>{c.forEach((t=>{s[function(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}(t,e)]=0}))}));const u=Symbol.for("jsx-dom:type");var f=function(e){return e.ShadowRoot="ShadowRoot",e}(f||{});const p="http://www.w3.org/1999/xlink",d="http://www.w3.org/XML/1998/namespace";function m(e){return!("boolean"==typeof e||null==e)}const h="undefined"!=typeof DOMTokenList?DOMTokenList:function(){};function y(e){return Array.isArray(e)?e.map(y).filter(Boolean).join(" "):e instanceof h?""+e:i(e)?n(e).filter((t=>e[t])).join(" "):m(e)?""+e:""}const g={animate:0,circle:0,clipPath:0,defs:0,desc:0,ellipse:0,feBlend:0,feColorMatrix:0,feComponentTransfer:0,feComposite:0,feConvolveMatrix:0,feDiffuseLighting:0,feDisplacementMap:0,feDistantLight:0,feFlood:0,feFuncA:0,feFuncB:0,feFuncG:0,feFuncR:0,feGaussianBlur:0,feImage:0,feMerge:0,feMergeNode:0,feMorphology:0,feOffset:0,fePointLight:0,feSpecularLighting:0,feSpotLight:0,feTile:0,feTurbulence:0,filter:0,foreignObject:0,g:0,image:0,line:0,linearGradient:0,marker:0,mask:0,metadata:0,path:0,pattern:0,polygon:0,polyline:0,radialGradient:0,rect:0,stop:0,svg:0,switch:0,symbol:0,text:0,textPath:0,tspan:0,use:0,view:0},w=/^(a(ll|t|u)|base[FP]|c(al|lipPathU|on)|di|ed|ex|filter[RU]|g(lyphR|r)|ke|l(en|im)|ma(rker[HUW]|s)|n|pat|pr|point[^e]|re[^n]|s[puy]|st[^or]|ta|textL|vi|xC|y|z)/;function v(e,t){let r,{children:l,...s}=t;if(s.namespaceURI||0!==g[e]||(s={...s,namespaceURI:"http://www.w3.org/2000/svg"}),o(e)){if(r=s.namespaceURI?document.createElementNS(s.namespaceURI,e):document.createElement(e),function(e,t){for(const o of n(e))L(o,e[o],t)}(s,r),b(l,r),r instanceof window.HTMLSelectElement&&null!=s.value)if(!0===s.multiple&&Array.isArray(s.value)){const e=s.value.map((e=>String(e)));r.querySelectorAll("option").forEach((t=>t.selected=e.includes(t.value)))}else r.value=s.value;x(s.ref,r)}else{if(!a(e))throw new TypeError(`Invalid JSX element type: ${e}`);i(e.defaultProps)&&(s={...e.defaultProps,...s}),r=function(e){const{prototype:t}=e;return!(!t||!t.isReactComponent)}(e)?function(e,t,n){return new e(t={...t,children:n}).render()}(e,s,l):e({...s,children:l})}return r}function x(e,t){var n;i(n=e)&&"current"in n?e.current=t:a(e)&&e(t)}function b(e,t){if(i(l=e)&&"number"==typeof l.length&&"number"!=typeof l.nodeType)!function(e,t){for(const n of[...e])b(n,t)}(e,t);else if(o(e)||r(e))k(document.createTextNode(e),t);else if(null===e)k(document.createComment(""),t);else if((a=e)&&"number"==typeof a.nodeType)k(e,t);else if(null!=(n=e)&&n[u]===f.ShadowRoot){const n=t.attachShadow(e.attr);b(e.children,n),x(e.ref,n)}var n,a,l}function k(e,t){t instanceof window.HTMLTemplateElement?t.content.appendChild(e):t.appendChild(e)}function S(e,t){return e.replace(/[A-Z]/g,(e=>t+e.toLowerCase()))}function C(e,t){null==t||!1===t||(Array.isArray(t)?t.forEach((t=>C(e,t))):o(t)?e.setAttribute("style",t):i(t)&&l(t,((t,n)=>{0===n.indexOf("-")?e.style.setProperty(n,t):r(t)&&0!==s[n]?e.style[n]=t+"px":e.style[n]=t})))}function L(e,t,n){switch(e){case"xlinkActuate":case"xlinkArcrole":case"xlinkHref":case"xlinkRole":case"xlinkShow":case"xlinkTitle":case"xlinkType":return void T(n,p,S(e,":"),t);case"xmlnsXlink":return void E(n,S(e,":"),t);case"xmlBase":case"xmlLang":case"xmlSpace":return void T(n,d,S(e,":"),t)}switch(e){case"htmlFor":return void E(n,"for",t);case"dataset":return void l(t,((e,t)=>{null!=e&&(n.dataset[t]=e)}));case"innerHTML":case"innerText":case"textContent":return void(m(t)&&(n[e]=t));case"dangerouslySetInnerHTML":return void(i(t)&&(n.innerHTML=t.__html));case"value":if(null==t||n instanceof window.HTMLSelectElement)return;if(n instanceof window.HTMLTextAreaElement)return void(n.value=t);break;case"spellCheck":return void(n.spellcheck=t);case"class":case"className":return void(a(t)?t(n):E(n,"class",y(t)));case"ref":case"namespaceURI":return;case"style":return void C(n,t);case"on":case"onCapture":return void l(t,((t,o)=>{n.addEventListener(o,t,"onCapture"===e)}))}if(a(t)){if("o"===e[0]&&"n"===e[1]){let o=e.toLowerCase();const r=o.endsWith("capture");if("ondoubleclick"===o?o="ondblclick":r&&"ondoubleclickcapture"===o&&(o="ondblclickcapture"),r||null!==n[o])if(r)n.addEventListener(o.substring(2,o.length-7),t,!0);else{let r;r=o in window?o.substring(2):o[2]+e.slice(3),n.addEventListener(r,t)}else n[o]=t}}else i(t)?n[e]=t:!0===t?E(n,e,""):!1!==t&&null!=t&&(n instanceof SVGElement&&!w.test(e)?E(n,S(e,"-"),t):E(n,e,t))}function E(e,t,n){e.setAttribute(t,n)}function T(e,t,n,o){e.setAttributeNS(t,n,o)}const M=v("style",{dangerouslySetInnerHTML:{__html:"\n        @keyframes popup-opening {\n            from {\n                opacity: 0;\n            }\n            to {\n                opacity: 1;\n            }\n        }\n        @keyframes popup-closing {\n            from {\n                opacity: 1;\n            }\n            to {\n                opacity: 0;\n            }\n        }\n    "}}),O=v("div",{className:"popup-background",style:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"#000",opacity:.3,zIndex:1}}),A={zIndex:3,position:"fixed",top:"50%",left:"50%",transform:"translate(-50%,-50%)"};var I;!function(e){e.OPENING="opening",e.OPENED="opened",e.CLOSING="closing"}(I||(I={}));const R=e=>v("div",{className:"popup",style:A,children:e.children}),P=e=>{return v("div",{className:"popup-wrapper",style:{zIndex:9999,animation:(t=e.state,I.OPENED===t?"":`popup-${t} 0.6s forwards`)},children:[O,v(R,{children:e.children})]});var t},N=e=>v("div",{children:[M,v(P,{state:e.state,children:e.children})]});var H=t.M,G=t.A;export{H as Popup,G as State};