"use strict";(self.webpackChunkcontext_bar=self.webpackChunkcontext_bar||[]).push([[730],{8283:(r,e,t)=>{function o(r,e){if(null==r)return{};var t,o,n={},s=Object.keys(r);for(o=0;o<s.length;o++)t=s[o],e.indexOf(t)>=0||(n[t]=r[t]);return n}t.d(e,{Z:()=>o})},730:(r,e,t)=>{t.r(e),t.d(e,{AwaitErrorBoundary:()=>Z,CustomErrorBoundary:()=>S,GenericErrorMessage:()=>I,RouteErrorBoundary:()=>g,logError:()=>l}),t(540);var o=t(607),n=t(7560),s=t(8283),a=t(4302),c=t(5304);const i=["crash"],l=(r,e)=>{let{crash:t=!1}=e,o=(0,s.Z)(e,i);((r,e)=>{var t;null==(t=window)||null==(t=t.newrelic)||null==t.noticeError||t.noticeError(r,e)})(r,(0,n.Z)({crash:t},o)),((r,e)=>{c.withScope((t=>{t.setExtra("ErrorStack",e.stack),t.setExtra("ErrorAppId",e.appId),t.setExtra("ErrorElementId",e.errorElementId),c.captureException(r)}))})(r,(0,n.Z)({crash:t},o)),((r,e)=>{a.VSCodeCommunicationsService.postMessageToExtension({type:"LOG_ERROR_TO_EXTENSION_LOGS",payload:{appId:e.appId,error:(null==r.toString?void 0:r.toString())||r.message,info:e}})})(r,o)};var d=t(9437),p=t(47);const u="Something Went Wrong",E="Postman has encountered an error. If this problem persists, contact us at help@postman.com";var m=t(2322);const h=["title","description","message","illustration","error"],I=r=>{let{title:e=u,description:t=E,message:o,illustration:a="illustration-unable-to-load",error:c}=r,i=(0,s.Z)(r,h);const l=o||c&&c.message;return(0,m.jsxs)(d.Z,(0,n.Z)({title:e,description:t},i,{children:[l&&(0,m.jsx)("p",{children:(0,m.jsx)("i",{children:l})}),(0,m.jsx)(p.Z,{name:a})]}))},g=({children:r,title:e,description:t,message:n,appId:s,errorElementId:a})=>{const c=(0,o.useRouteError)();return l(c,{stack:c.stack,appId:s,errorElementId:a}),r||(0,m.jsx)(I,{title:e,description:t,error:c,message:n})};var k=t(609);const x=["children","onError","appId","errorElementId","FallbackComponent"],b=(r,e,t,o)=>{l(r,{stack:e.componentStack,appId:t,crash:!0,errorElementId:o})},S=r=>{let{children:e,onError:t,appId:o,errorElementId:a,FallbackComponent:c=I}=r,i=(0,s.Z)(r,x);return(0,m.jsx)(k.ErrorBoundary,(0,n.Z)({FallbackComponent:c,onError:(r,e)=>(t||b)(r,e,o,a)},i,{children:e}))},Z=({children:r,title:e,description:t,message:n,appId:s,errorElementId:a})=>{const c=(0,o.useAsyncError)();return l(c,{stack:c.stack,appId:s,errorElementId:a}),r||(0,m.jsx)(I,{title:e,description:t,error:c,message:n})}}}]);
//# sourceMappingURL=730.28adb7bcb04f1ccd.js.map