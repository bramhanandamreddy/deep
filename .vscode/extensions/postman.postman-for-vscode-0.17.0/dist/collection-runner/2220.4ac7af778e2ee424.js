"use strict";(self.webpackChunkcollection_runner=self.webpackChunkcollection_runner||[]).push([[2220,7560,7397,25,9059],{7560:(n,t,e)=>{function o(){return o=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o])}return n},o.apply(this,arguments)}e.d(t,{Z:()=>o})},98283:(n,t,e)=>{function o(n,t){if(null==n)return{};var e,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)e=a[o],t.indexOf(e)>=0||(r[e]=n[e]);return r}e.d(t,{Z:()=>o})},23911:(n,t,e)=>{e.r(t),e.d(t,{Modals:()=>r});var o={};e.r(o),e.d(o,{ModalDialog:()=>p});var r={};e.r(r),e.d(r,{Ui:()=>o,getModals:()=>s});var a=e(54302);class i{async showWarningDialog(n){const{subject:t,message:e,options:o}=n;return a.VSCodeCommunicationsService.postMessageToExtensionAsPromise({type:"UI_SHOW_MODAL_DIALOG",payload:{severity:"warning",subject:t,message:e,options:o}})}}function s(){return new i}var c=e(40540),l=e(35348),u=e(58560),d=e(80429),h=e(52322);const p=n=>{const[t,e]=(0,c.useState)(null),[o,r]=(0,c.useState)(!1);return(0,c.useEffect)((()=>{function t(t){const{detail:o}=t;n.uid===o.uid&&(e(o),r(!0))}return window.addEventListener("pm:modal:request",t),()=>{window.removeEventListener("pm:modal:request",t)}}),[n.uid]),t?(0,h.jsxs)(l.u_,{isOpen:o,size:"small",onClose:()=>r(!1),children:[(0,h.jsx)(l.xB,{heading:t.subject}),(0,h.jsx)(l.hz,{children:(0,h.jsx)("p",{children:t.message})}),(0,h.jsx)(l.mz,{children:(0,h.jsx)(u.Z,{justifyContent:"flex-end",grow:1,shrink:1,gap:"spacing-m",children:t.options.map((n=>(0,h.jsx)(d.Z,{type:!0===n.isPrimary?"primary":"secondary",text:n.title,onClick:()=>{t.callback(n),r(!1)}},n.title)))})})]}):null}},74962:(n,t,e)=>{e.d(t,{Z:()=>g});var o=e(72247),r=e(54047),a=e(40540),i=e.n(a),s=e(72229),c=e.n(s),l=e(25892),u=e.n(l),d=e(65577),h=e(90265);function p(n,t){switch(n){case"h1":return"\n        font-size: ".concat(t["text-size-xxxl"],";\n        line-height: 1.2;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.72px;\n      ");case"h2":return"\n        font-size: ".concat(t["text-size-xxl"],";\n        line-height: 1.2;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.56px;\n      ");case"h3":return"\n        font-size: ".concat(t["text-size-xl"],";\n        line-height: 1.28;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h4":return"\n        font-size: ".concat(t["text-size-l"],";\n        line-height: 1.44;\n        color: ").concat(t["content-color-primary"],";\n        letter-spacing: -0.12px;\n      ");case"h5":return"\n        font-size: ".concat(t["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(t["content-color-primary"],";\n      ");case"h6":return"\n        font-size: ".concat(t["text-size-m"],";\n        line-height: 1.4;\n        color: ").concat(t["content-color-secondary"],";\n      ");default:return null}}var m=u().h1.withConfig({displayName:"Heading__StyledHeading",componentId:"sc-137awpp-0"})(["margin:",";font-family:",";font-weight:",";word-break:",";",";",";",";",""],(function(n){return n.theme["spacing-zero"]}),(function(n){return n.theme["text-family-default"]}),(function(n){return n.theme["text-weight-medium"]}),(function(n){return n.wordBreak}),(function(n){return n.styleAs?p(n.styleAs,n.theme):p(n.as,n.theme)}),(function(n){return n.color&&"color: ".concat(n.theme[n.color],";")}),(function(n){return n.hasBottomSpacing&&function(n,t){switch(n){case"h1":return"margin-bottom: ".concat(t["spacing-l"]," !important");case"h2":return"margin-bottom: ".concat(t["spacing-m"]," !important");case"h3":return"margin-bottom: ".concat(t["spacing-s"]," !important");case"h4":case"h5":case"h6":return"margin-bottom: ".concat(t["spacing-xs"]," !important");default:return"margin: ".concat(t["spacing-zero"]," !important")}}(n.as,n.theme)}),(function(n){return t=n.isTruncated,e=n.maxLines,o="\n    display: -webkit-box;\n    -webkit-line-clamp: ".concat(e,";\n    -webkit-box-orient: vertical;  \n    overflow: hidden;\n    "),"\n    ".concat(t?"\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n\n      &::after {\n        content: ' ';\n        display: block;\n        width: 0;\n        height: 0;\n        line-height: 0;\n      }\n    ":"","\n    ").concat(e?o:"","\n    ");var t,e,o}));function g(n){var t=n.text,e=n.type,o=n.styleAs,s=n.color,c=n._wordBreak,l=n.className,u=n.hasBottomSpacing,d=n.isTruncated,p=n.maxLines,g=n.tooltip,f=n["data-testid"],x=n["data-click"],y=(0,a.useState)(!1),w=(0,r.Z)(y,2),b=w[0],v=w[1],k=i().createElement(m,{as:e,styleAs:o,color:s,className:l,"data-aether-id":"aether-heading","data-testid":f,"data-click":x,hasBottomSpacing:u,isTruncated:d,maxLines:p,onMouseEnter:function(n){n.target&&n.target.scrollWidth>n.target.offsetWidth?v(!0):v(!1)},wordBreak:c},t);return b&&(0,h.LX)(n)?(0,h.Ur)(k,g||t):k}g.defaultProps={color:"",type:"h1",styleAs:null,className:"",hasBottomSpacing:!1,isTruncated:!1,maxLines:void 0,tooltip:"",_wordBreak:"normal","data-testid":"aether-heading","data-click":""},g.propTypes={type:c().oneOf(["h1","h2","h3","h4","h5","h6"]),text:c().string.isRequired,color:c().oneOf([""].concat((0,o.Z)(Object.keys(d.globals.colors)),(0,o.Z)(Object.keys(d.aliases.light.content)))),styleAs:c().oneOf(["h1","h2","h3","h4","h5","h6"]),className:c().string,hasBottomSpacing:c().bool,isTruncated:function(n){var t=n.isTruncated,e=n.maxLines;return"boolean"!=typeof t?new Error("Heading: expected a boolean value for isTruncated prop"):t&&e?new Error("Heading: maxLines should not be used together with isTruncated prop"):null},maxLines:c().number,tooltip:function(n){var t=n.tooltip,e=n.isTruncated,o=n.maxLines;return"string"!=typeof t?new Error("Heading: tooltip prop should only have a string value."):!t||e&&!o?null:new Error("Heading: tooltip prop should only be used when using single-line truncation by using isTruncated prop.")},_wordBreak:c().oneOf(["normal","break-all","keep-all","break-word","inherit","initial","revert","unset"]),"data-testid":c().string,"data-click":c().string}}}]);
//# sourceMappingURL=2220.4ac7af778e2ee424.js.map