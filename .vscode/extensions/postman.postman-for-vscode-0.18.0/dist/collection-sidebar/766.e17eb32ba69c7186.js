(self.webpackChunkcollection_sidebar=self.webpackChunkcollection_sidebar||[]).push([[766,8283,4492,6371],{8283:(s,t,e)=>{"use strict";function o(s,t){if(null==s)return{};var e,o,a={},r=Object.keys(s);for(o=0;o<r.length;o++)e=r[o],t.indexOf(e)>=0||(a[e]=s[e]);return a}e.d(t,{Z:()=>o})},4492:(s,t,e)=>{"use strict";e.d(t,{Z:()=>r});var o=e(9730),a=e.n(o);const r=Object.assign({},a(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback",IMAGE_UPLOAD_URL:"https://content.pstmn.io",IDENTITY_SERVICE_URL:"https://iapub.postman.co",RUNTIME_ASSET_URL:"https://runtime-assets.pstmn.io"})},766:(s,t,e)=>{"use strict";e.r(t),e.d(t,{subscribeToWorkspaceEvents:()=>w,useActiveWorkspaceId:()=>a,useActiveWorkspaceInfo:()=>l,useNavigateToWorkspace:()=>m,useWorkspace:()=>u});var o=e(607);const a=()=>{const{workspaceId:s}=(0,o.useParams)();return s?(s=>(null==s?void 0:s.split("~").pop())||"")(s):""};var r=e(8283),n=e(9461),c=e(4925),p=e(4492);const i=["data"],u=s=>{const t=(0,n.useDataFetch)(((s,t)=>({queryKey:["workspace",s],queryFn:()=>(async(s,t)=>await c.postmanGateway.post({url:`${p.Z.HTTPS_GATEWAY_PRIVATE_URL}/ws/proxy`,path:`/workspaces/${s}`,method:"GET",signal:t,service:"workspaces"}))(s),enabled:!!s,useErrorBoundary:void 0}))(s)),{data:e}=t,o=(0,r.Z)(t,i);return Object.assign({data:null==e?void 0:e.data},o)},l=()=>{const s=a();return u(s)};var b=e(540),d=e(3353),_=e(7736);const m=()=>{const s=(0,d.useNavigate)();return(0,b.useCallback)((t=>{(0,_.onWorkspaceChange)(t),t&&s("/workspace/"+t)}),[s])},w=s=>{const t=new AbortController;return{asyncObserver:c.postmanWebsocketGateway.subscribe({signal:t.signal,subscribeRequest:{method:"GET",url:"/ws/proxy",body:{},path:`/workspaces/${s}/subscribe`,service:"workspaces"},subscriptionEvents:["update","update_roles","workspace_v1","create","destroy"],responseFilter:s=>{var t;return null==s||null==(t=s.body)||null==(t=t.data)?void 0:t.id},broadcastFilter:s=>{var t;return null==s||null==(t=s.meta)||null==(t=t.timeline)?void 0:t.model_id},unsubscribeRequest:{method:"delete",url:"/ws/proxy",body:{},path:`/workspaces/${s}/subscribe`,service:"workspaces"}}),abortController:t}}},9730:()=>{}}]);
//# sourceMappingURL=766.e17eb32ba69c7186.js.map