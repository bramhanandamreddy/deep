(self.webpackChunkcollection_runner=self.webpackChunkcollection_runner||[]).push([[90,7560,4492,6724],{7560:(t,e,n)=>{"use strict";function o(){return o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},o.apply(this,arguments)}n.d(e,{Z:()=>o})},84492:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var o=n(7560),s=n(162),c=n.n(s);const a=(0,o.Z)({},c(),{DISABLE_ANALYTICS:!1,ANALYTICS_URL:"https://events.getpostman.com/events",IDENTITY_URL:"https://identity.getpostman.com",ARTEMIS_URL:"https://go.postman.co",HTTPS_GATEWAY_PRIVATE_URL:"https://bifrost-extension-https-global.gw.postman.com",WEBSOCKET_GATEWAY_URL:"wss://bifrost-extension-global.gw.postman.com",WEB_URL:"https://www.getpostman.com",DASHBOARD_URL:"https://go.postman.co",EXPLORE_URL:"https://www.postman.com",SENTRY_DSN:"https://0fd0f21b182549f18b0e01ce62f8adb0@o1224273.ingest.sentry.io/4505072910139392",OAUTH2_CALLBACK_URL:"https://oauth.pstmn.io/v1/vscode-callback",IMAGE_UPLOAD_URL:"https://content.pstmn.io",IDENTITY_SERVICE_URL:"https://iapub.postman.co",RUNTIME_ASSET_URL:"https://runtime-assets.pstmn.io"})},60090:(t,e,n)=>{"use strict";n.r(e),n.d(e,{COLLECTION_RUNS_LIST_PREFIX:()=>r,COLLECTION_RUN_PREFIX:()=>u,collectionRunByIdQuery:()=>d,collectionRunsListQuery:()=>l,deleteCollectionRun:()=>_,fetchCollectionRunById:()=>p,findCollectionRuns:()=>a,getQueryKey:()=>i,importCollectionRun:()=>I,useCollectionRunById:()=>T,useCollectionRuns:()=>R,useDeleteCollectionRun:()=>y});var o=n(7560),s=n(34925),c=n(84492);const a=async t=>{const{signal:e,workspaceId:n,collectionId:a,populateIterations:r,count:u,status:i,owner:l,source:p,since_id:d,max_id:I}=t;return await s.postmanGateway.get({url:`${c.Z.HTTPS_GATEWAY_PRIVATE_URL}/collectionrun`,query:(0,o.Z)({workspace:n},a&&{collection:a},{iterations:r||!1,count:u},i&&{status:i},l&&{owner:l},p&&{source:p},{since_id:d||0},I&&{max_id:I}),signal:e})},r="collection-runs-list",u="collection-run",i=t=>{const e=[r];for(const n of Object.values(t))n&&e.push(n);return e},l=({signal:t,workspaceId:e,collectionId:n,populateIterations:o=!1,count:s,status:c,owner:r,source:u,since_id:l=0,max_id:p=0})=>({queryKey:i({workspaceId:e,collectionId:n}),queryFn:()=>a({signal:t,workspaceId:e,collectionId:n,populateIterations:o,count:s,status:c,owner:r,source:u,since_id:l,max_id:p}),enabled:!!e,useErrorBoundary:!1}),p=async({signal:t,runId:e})=>await s.postmanGateway.get({url:`${c.Z.HTTPS_GATEWAY_PRIVATE_URL}/collectionrun/${e}`,signal:t}),d=({signal:t,runId:e})=>({queryKey:[u,e],queryFn:()=>p({signal:t,runId:e}),enabled:!!e,useErrorBoundary:!1}),I=async({signal:t,owner:e,workspace:n,runDetails:o})=>await s.postmanGateway.post({url:`${c.Z.HTTPS_GATEWAY_PRIVATE_URL}/collectionrun/import`,query:{owner:e,workspace:n},body:JSON.stringify(o),signal:t}),_=async({runId:t,userId:e,signal:n})=>await s.postmanGateway.delete({url:`${c.Z.HTTPS_GATEWAY_PRIVATE_URL}/collectionrun/${t}`,query:{owner:e},signal:n});var w=n(69461);const R=({workspaceId:t,collectionId:e,count:n,status:o,source:s,owner:c})=>(0,w.useDataFetch)(l({workspaceId:t,collectionId:e,count:n,status:o,source:s,owner:c})),T=t=>(0,w.useDataFetch)(d({runId:t})),y=()=>(0,w.useMutation)({mutationFn:t=>_({runId:t.runId,userId:t.userId,signal:t.signal}),onSuccess:(t,e)=>{var n,o,s;n=e.runId,o=e.workspaceId,s=e.collectionId,n&&(0,w.updateCache)({key:i({workspaceId:o,collectionId:s}),updater:t=>t?t.filter((t=>t.model_id!==n)):t}),e.onSuccess&&e.onSuccess(t)}})},162:()=>{}}]);
//# sourceMappingURL=90.16dea2264370e61f.js.map