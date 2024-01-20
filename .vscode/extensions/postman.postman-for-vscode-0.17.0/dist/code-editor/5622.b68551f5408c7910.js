"use strict";(self.webpackChunkcode_editor=self.webpackChunkcode_editor||[]).push([[5622],{5622:(e,t,r)=>{r.r(t);var n=r(540),i=r.n(n),a=r(1730),o=r(7560),s=r(8283),c=r(5892),d=r.n(c),l=r(5736),p=r(8560),m=r(923),h=r(2322);const u=["forwardRef"],f=d()(l.Z).withConfig({displayName:"monaco-editor__StyledSpinner",componentId:"sc-16615fu-0"})(["position:absolute;top:50%;left:50%;"]),y=(e,t=5,r=1e3)=>new Promise(((n,i)=>{e().then(n).catch((a=>{setTimeout((()=>{1!==t?y(e,t-1,r).then(n,i):i(a)}),r)}))})),g=(0,n.lazy)((()=>y((()=>Promise.all([r.e(2624),r.e(4025),r.e(6357)]).then(r.bind(r,4656))),3,2e3))),w=d()(p.Z).withConfig({displayName:"monaco-editor__CodeEditorContainer",componentId:"sc-16615fu-1"})(["height:calc(100% - 1px);width:calc(100% - 1px);"]),x=e=>{let{forwardRef:t}=e,r=(0,s.Z)(e,u);return(0,h.jsx)(w,{children:(0,h.jsx)(m.CustomErrorBoundary,{appId:"code-editor",errorElementId:"code-editor-wrapper",children:(0,h.jsx)(n.Suspense,{fallback:(0,h.jsx)(f,{}),children:(0,h.jsx)(g,(0,o.Z)({ref:t},r))})})})},v=i().forwardRef(((e,t)=>(0,h.jsx)(x,(0,o.Z)({},e,{forwardRef:t}))));var b=r(4025),N=r(4958);r(7086);const S=document.querySelector("#code-editor_root");a.render((0,h.jsx)(n.StrictMode,{children:(0,h.jsx)(m.CustomErrorBoundary,{appId:"code-editor",errorElementId:"global-error-boundary",children:(0,h.jsx)(b.ThemeContextProvider,{children:(0,h.jsx)(N.DataFetchCacheProvider,{children:(0,h.jsx)(v,{})})})})}),S)},5736:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(540),i=r.n(n),a=r(2229),o=r.n(a),s=r(5892),c=r.n(s),d=r(9460),l=r(8560),p=(0,s.keyframes)(["0%,100%{transform:scaleY(0.4);opacity:0.8;}50%{transform:scaleY(1);opacity:1;}"]),m=c().div.withConfig({displayName:"SpinnerSmall__StyledSpinnerSmall",componentId:"zpipva-0"})(["display:flex;justify-content:space-between;width:",";height:",";text-align:center;font-size:",";& > div{height:100%;width:4px;background-color:",";opacity:0.2;border-radius:",";animation:"," 0.6s infinite ease-in-out;transform-origin:center center;}.rect-two{animation-delay:0.15s;}.rect-three{animation-delay:0.3s;}"],(function(e){return e.theme["size-xs"]}),(function(e){return e.theme["size-xs"]}),(function(e){return e.theme["text-size-xs"]}),(function(e){return e.theme["content-color-tertiary"]}),(function(e){return e.theme["border-radius-default"]}),p),h=c()(d.ZP).withConfig({displayName:"SpinnerSmall__StyledSmallSpinnerDescription",componentId:"zpipva-1"})(["display:inline-block;max-width:80ch;margin-left:",";word-break:break-word;"],(function(e){return e.theme["spacing-s"]}));function u(e){var t=e.description,r=e.className,n=e.type,a=e["data-testid"],o="bright"===n?"content-color-constant":"content-color-secondary";return i().createElement(l.Z,{justifyContent:"flex-start",alignItems:"center",className:r,type:n},i().createElement(m,{"data-testid":a},i().createElement("div",{className:"rect-one"}),i().createElement("div",{className:"rect-two"}),i().createElement("div",{className:"rect-three"})),t&&i().createElement(h,{color:o},t))}u.defaultProps={description:"",className:"","data-testid":"aether-spinner"},u.propTypes={description:o().string,className:o().string,type:o().oneOf(["default","bright"]).isRequired,"data-testid":o().string};var f=c().div.withConfig({displayName:"SpinnerLarge__StyledSpinnerLargeContainer",componentId:"sc-1v55r43-0"})(["height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:transparent;svg path,svg rect{fill:",";}"],(function(e){return"bright"===e.type?e.theme["content-color-constant"]:e.theme["content-color-tertiary"]})),y=c()(d.ZP).withConfig({displayName:"SpinnerLarge__StyledSpinnerDescription",componentId:"sc-1v55r43-1"})(["display:inline-block;max-width:80ch;word-break:break-word;text-align:center;font-size:",";"],(function(e){return e.theme["text-size-l"]})),g=(0,s.keyframes)(["0%,100%{transform:scaleY(0.4);opacity:0.8;}50%{transform:scaleY(1);opacity:1;}"]),w=c().div.withConfig({displayName:"SpinnerLarge__StyledSpinnerLarge",componentId:"sc-1v55r43-2"})(["display:flex;justify-content:space-between;width:",";height:",";text-align:center;font-size:",";margin-bottom:",";& > div{height:100%;width:8px;background-color:",";opacity:0.2;border-radius:",";animation:"," 0.6s infinite ease-in-out;transform-origin:center center;}.rect-two{animation-delay:0.15s;}.rect-three{animation-delay:0.3s;}"],(function(e){return e.theme["size-m"]}),(function(e){return e.theme["size-m"]}),(function(e){return e.theme["text-size-s"]}),(function(e){return e.theme["spacing-l"]}),(function(e){return e.theme["content-color-tertiary"]}),(function(e){return e.theme["border-radius-default"]}),g);function x(e){var t=e.className,r=e.description,n=e.type,a=e["data-testid"],o="bright"===n?"content-color-constant":"content-color-secondary";return i().createElement(f,{className:t,type:n},i().createElement(w,{"data-testid":a},i().createElement("div",{className:"rect-one"}),i().createElement("div",{className:"rect-two"}),i().createElement("div",{className:"rect-three"})),i().createElement(y,{color:o},r))}function v(e){var t=e.size,r=e.className,n=e.description,a=e.type,o=e["data-testid"];return"small"===t?i().createElement(u,{type:a,className:r,description:n,"data-testid":o}):"large"===t?i().createElement(x,{type:a,description:n||"Loading",className:r,"data-aether-id":"aether-spinner","data-testid":o}):null}x.defaultProps={className:"",description:"","data-testid":"aether-spinner"},x.propTypes={className:o().string,description:o().string,type:o().oneOf(["default","bright"]).isRequired,"data-testid":o().string},v.defaultProps={size:"small",className:"",description:"",type:"default","data-testid":"aether-spinner"},v.propTypes={size:o().oneOf(["small","large"]),className:o().string,type:o().oneOf(["default","bright"]),description:function(e){var t=e.description;return"string"!=typeof t?new Error("Spinner: description prop should have a string value"):t.length>80?new Error("Spinner: the description prop should not have a character length of more than 80."):null},"data-testid":o().string}},7086:(e,t,r)=>{r.r(t)}}]);
//# sourceMappingURL=5622.b68551f5408c7910.js.map