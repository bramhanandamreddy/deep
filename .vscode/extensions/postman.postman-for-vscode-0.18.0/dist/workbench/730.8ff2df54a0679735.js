"use strict";(self.webpackChunkworkbench=self.webpackChunkworkbench||[]).push([[730,7560,5624],{7560:(r,e,t)=>{function n(){return n=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},n.apply(this,arguments)}t.d(e,{Z:()=>n})},8283:(r,e,t)=>{function n(r,e){if(null==r)return{};var t,n,o={},s=Object.keys(r);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(o[t]=r[t]);return o}t.d(e,{Z:()=>n})},730:(r,e,t)=>{t.r(e),t.d(e,{AwaitErrorBoundary:()=>v,CustomErrorBoundary:()=>x,GenericErrorMessage:()=>I,RouteErrorBoundary:()=>g,logError:()=>l}),t(540);var n=t(607),o=t(7560),s=t(8283),a=t(7736),c=t(5304);const i=["crash"],l=(r,e)=>{let{crash:t=!1}=e,n=(0,s.Z)(e,i);((r,e)=>{var t;null==(t=window)||null==(t=t.newrelic)||null==t.noticeError||t.noticeError(r,e)})(r,(0,o.Z)({crash:t},n)),((r,e)=>{c.withScope((t=>{t.setExtra("ErrorStack",e.stack),t.setExtra("ErrorAppId",e.appId),t.setExtra("ErrorElementId",e.errorElementId),c.captureException(r)}))})(r,(0,o.Z)({crash:t},n)),((r,e)=>{a.VSCodeCommunicationsService.postMessageToExtension({type:"LOG_ERROR_TO_EXTENSION_LOGS",payload:{appId:e.appId,error:(null==r.toString?void 0:r.toString())||r.message,info:e}})})(r,n)};var p=t(9437),d=t(47);const u="Something Went Wrong",E="Postman has encountered an error. If this problem persists, contact us at help@postman.com";var m=t(2322);const h=["title","description","message","illustration","error"],I=r=>{let{title:e=u,description:t=E,message:n,illustration:a="illustration-unable-to-load",error:c}=r,i=(0,s.Z)(r,h);const l=n||c&&c.message;return(0,m.jsxs)(p.Z,(0,o.Z)({title:e,description:t},i,{children:[l&&(0,m.jsx)("p",{children:(0,m.jsx)("i",{children:l})}),(0,m.jsx)(d.Z,{name:a})]}))},g=({children:r,title:e,description:t,message:o,appId:s,errorElementId:a})=>{const c=(0,n.useRouteError)();return l(c,{stack:c.stack,appId:s,errorElementId:a}),r||(0,m.jsx)(I,{title:e,description:t,error:c,message:o})};var k=t(609);const b=["children","onError","appId","errorElementId","FallbackComponent"],f=(r,e,t,n)=>{l(r,{stack:e.componentStack,appId:t,crash:!0,errorElementId:n})},x=r=>{let{children:e,onError:t,appId:n,errorElementId:a,FallbackComponent:c=I}=r,i=(0,s.Z)(r,b);return(0,m.jsx)(k.ErrorBoundary,(0,o.Z)({FallbackComponent:null!=i&&i.fallback?void 0:c,onError:(r,e)=>(t||f)(r,e,n,a)},i,{children:e}))},v=({children:r,title:e,description:t,message:o,appId:s,errorElementId:a})=>{const c=(0,n.useAsyncError)();return l(c,{stack:c.stack,appId:s,errorElementId:a}),r||(0,m.jsx)(I,{title:e,description:t,error:c,message:o})}}}]);
//# sourceMappingURL=730.8ff2df54a0679735.js.map