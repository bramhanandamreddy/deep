"use strict";(self.webpackChunksidebar=self.webpackChunksidebar||[]).push([[1597],{1597:(e,r,a)=>{a.r(r),a.d(r,{perfComponents:()=>t,perfConst:()=>n,sendMeasureEvent:()=>E,sessionId:()=>p});var n={};a.r(n),a.d(n,{GENERIC_CATEGORY:()=>o,PERFORMANCE_GLOBAL_NAMESPACE:()=>c});var t={};a.r(t),a.d(t,{PerfContext:()=>m,PerformanceMarkPaint:()=>f});const c="__POSTMAN_PERFORMANCE__",o="app-perf";var i=a(540),s=a(2322);function f({children:e,markName:r,condition:a=!0,callback:n=function(){}}){const[t,c]=(0,i.useState)(!1),o=(0,i.useRef)(0),f=()=>{var e;if(a&&!t&&null!=(e=performance)&&e.mark){performance.mark(r);try{n()}catch(e){console.error("PerformanceMarkPaint: provided callback threw an error.",e)}c(!0)}};return(0,i.useLayoutEffect)((()=>(o.current=requestAnimationFrame(f),()=>cancelAnimationFrame(o.current))),[a]),(0,s.jsx)(s.Fragment,{children:e})}f.displayName="PerformanceMarkPaint";const l={markName:void 0,callback:void 0},m=(0,i.createContext)(l);m.displayName="PerfContext";var u=a(7560),d=a(5837);const p=(0,a(8722).v4)(),k=[];function v(e){const r=(0,u.Z)({},e,{traceId:p});d.AnalyticsService.addEventV2(r)}function E({name:e,category:r=o,label:a,entityType:n,once:t=!0}){if(!t||!k.includes(e)){k.push(e);for(const t of performance.getEntriesByName(e).filter((e=>e instanceof PerformanceMeasure)))v({category:r,action:t.name,value:Math.round(t.duration),label:a||"",entityType:n})}}}}]);
//# sourceMappingURL=1597.c8c99893efb538fb.js.map