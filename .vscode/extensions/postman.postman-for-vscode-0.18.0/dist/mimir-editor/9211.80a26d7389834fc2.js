"use strict";(self.webpackChunkmimir_editor=self.webpackChunkmimir_editor||[]).push([[9211],{20966:(e,n,r)=>{r.r(n),r.d(n,{DESKTOP_WINDOW_EVENT_CHANNEL:()=>f,INTERNAL_CHANNEL_BROADCAST_MAIN:()=>E,TOGGLE_WINDOW_MAXIMIZE_EVENT:()=>d,desktopCommunicationService:()=>m,useOpenNativeMenu:()=>a,useScreenParams:()=>N,useZoomFactor:()=>_});const t={invoke:()=>{throw new Error("Function not implemented.")},send:()=>{throw new Error("Function not implemented.")},subscribe:()=>{throw new Error("Function not implemented.")}},u=()=>t,i=(e,...n)=>u().invoke(e,...n);var c=r(7560),o=r(40540);function s(e){return[e.label,e.id,e.accelerator].filter(Boolean).join("_")}function l(e,n=new Map){return Array.isArray(e)?{menu:null==e?void 0:e.map((e=>{var r;return e.click&&n.set(s(e),e.click),(0,c.Z)({},e,{click:s(e),submenu:null==(r=l(e.submenu,n))?void 0:r.menu})})),clickHandlers:n}:{}}function a(e){const n=(0,o.useRef)();return(0,o.useEffect)((()=>u().subscribe("CLOSE_POPUP_MENU",(function(r,t){e&&"function"==typeof e&&!t&&e();const u=t&&n.current&&n.current.get(t);u&&u()}))),[]),e=>{const{menu:r,clickHandlers:t}=l(e);n.current=t,i("setNativeElectronMenuOpen",{menu:r})}}const m={send:(e,...n)=>u().send(e,...n),invoke:i,subscribe:(e,n)=>u().subscribe(e,n)||(()=>null)},E="PM_EB_INT_BROADCAST_MAIN",d="toggle-maximize",f="requester-window-events";function _(){const[e]=(0,o.useState)((()=>1));return(0,o.useEffect)((()=>{}),[]),e}function N(){const[e]=(0,o.useState)((()=>({isFullScreen:!1,isMaximized:!1,isBlurred:!1})));return(0,o.useEffect)((()=>{}),[]),e}}}]);
//# sourceMappingURL=9211.80a26d7389834fc2.js.map