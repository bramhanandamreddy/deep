"use strict";(self.webpackChunkworkspace_switcher=self.webpackChunkworkspace_switcher||[]).push([[721,2136],{721:(e,t,n)=>{n.r(t),n.d(t,{AnalyticsService:()=>u,initializeAnalytics:()=>p});var i=n(7560),a=n(8283),s=n(4492),o=n(9907);const r=["propertyId"],d=new Set(["category","action","label","value","meta","workspaceId","workspaceType","entityId","entityType","traceId","variantId","experimentId","utm_source","utm_medium","utm_campaign","utm_content","utm_term"]),c={initialize:function(){this.payloads=[],this.enabled=!0,window.addEventListener("beforeunload",(()=>{try{this.sendPayloads({isFlushBeforePageClose:!0})}catch(e){}}),{capture:!0}),s.Z.DISABLE_ANALYTICS&&(this.enabled=!1),setInterval(function(){this.sendPayloads()}.bind(this),3e4)},setBaseObject:function(e={id:(0,o.getUserId)(),organizations:[{id:(0,o.getTeamId)()}]}){var t,i,s,d;const c=n(4515)(navigator.userAgent),l=(null==c?void 0:c.browser)||{};let u,h;u=null!=(t=window.APP_VERSION)?t:"10.0.3-web-platform",h="web";const y={type:"events-general",indexType:"client-events",env:"production",propertyId:"web",userId:(null!=(i=null==e?void 0:e.id)?i:(0,o.getUserId)())||"0",teamId:(null!=(s=null==e||null==(d=e.organizations[0])?void 0:d.id)?s:(0,o.getTeamId)())||"0"},p=(0,a.Z)(y,r);this.baseObject=p,this.baseObject=y,this.baseObject.propertyVersion=l.name?`${u};${l.name};${l.version}`:`${u};unknown;unknown`,this.baseObject.property="postman-web-public"},isLinuxOnChromeOS:function(){return!1},_extendEventWithBaseObject:function(e){this.baseObject||this.setBaseObject({id:(0,o.getUserId)(),organizations:[{id:(0,o.getTeamId)(),organization_id:(0,o.getTeamId)(),user_id:(0,o.getUserId)()}]});const t=(new Date).toISOString();return(0,i.Z)({},this.baseObject,{timestamp:t},Object.entries(e).reduce(((e,[t,n])=>d.has(t)&&n?(0,i.Z)({},e,{[t]:n}):e),{}))},addCurrentEvent:function(e){const t=this._extendEventWithBaseObject(e);this.queuePayload(t)},addCurrentSyncDiscarded:function(e,t,n,a){try{if("history"===e)return;this.baseObject||this.setBaseObject();const s=(0,i.Z)({},this.baseObject,{verb:e,entity:t,data:JSON.stringify(n),type:"sync",indexType:"client-errors"});a&&(s.error=JSON.stringify(a)),this.queuePayload(s)}catch(e){}},queuePayload:function(e){this.enabled&&this.payloads.push(e)},sendPayloads:function(e){if(this.enabled){if(this.payloads.length>0){let t,n="";for(const e of this.payloads)n+=JSON.stringify(e)+"\n";e&&e.isFlushBeforePageClose&&(t={useBeacon:e.isFlushBeforePageClose}),this.sendRequest(n,t),this.clearPayloads()}}else this.clearPayloads()},sendRequest:function(e,t){const n=s.Z.ANALYTICS_URL;let i,a;try{i=btoa(e)}catch(e){return}t&&t.useBeacon&&navigator.sendBeacon&&(a=navigator.sendBeacon(n,i)),a||fetch(n,{method:"POST",headers:{"Content-Type":"text/plain"},body:i,credentials:"omit"})},clearPayloads:function(){this.payloads=[]},_sendEventImmediately:function(e){const t=this._extendEventWithBaseObject(e),n=JSON.stringify(t);this.sendRequest(n)}};var l=n(7736);const u={addEvent:function(e,t,n,i,a,s){if(null!=s&&s.noActiveWorkspace)return c.addCurrentEvent({category:e,action:t,label:n,value:i,meta:a});const o=function(){var e;switch(null==(e=window)||null==(e=e.pm)||null==(e=e.windowConfig)?void 0:e.process){case"runner":case"requester":try{return{}}catch(e){return{}}default:return{}}}();return c.addCurrentEvent({category:e,action:t,label:n,value:i,meta:a,workspaceId:o.id,workspaceType:o.type})},addEventV2:function(e,t){l.VSCodeCommunicationsService.postMessageToExtension({type:"SEND_ANALYTICS",payload:e})},addEventV2AndPublish:function(e,t={}){this.addEventV2(e,t),c.sendPayloads()}};var h=n(6468);const y=e=>{window.newrelic.addPageAction("InitialLoadMetrics",(0,i.Z)({route:window.location.pathname,userId:"0"},e))},p=()=>{try{c.initialize(),null==(e=window.newrelic)||null==e.setCustomAttribute||e.setCustomAttribute("postman-app-type","distributed-frontend"),(()=>{if(!window.newrelic)throw new Error("New Relic not initialized");(0,h.onTTFB)((({value:e})=>e&&y({timeToFirstByte:e}))),(0,h.onFCP)((({value:e})=>e&&y({firstContentfulPaint:e}))),(0,h.onLCP)((({value:e})=>e&&y({largestContentfulPaint:e}))),(0,h.onFID)((({value:e})=>e&&y({firstInputDelay:e}))),(0,h.onCLS)((({value:e})=>e&&y({cumulativeLayoutShift:e})))})()}catch(e){}var e}}}]);
//# sourceMappingURL=721.b43be28618da810b.js.map