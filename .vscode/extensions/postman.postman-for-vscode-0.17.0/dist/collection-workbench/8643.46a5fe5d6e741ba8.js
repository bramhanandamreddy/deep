"use strict";(self.webpackChunkcollection_workbench=self.webpackChunkcollection_workbench||[]).push([[8643],{68643:(e,t,a)=>{function n(e){return window&&window.open(e,"_self","noopener,noreferrer")}a.r(t),a.d(t,{Link:()=>D,OPEN_EXTENSION_URL:()=>L,PostmanTabsManager:()=>Ze,checkContextAndNavigate:()=>n,openExternalLink:()=>Z,useAdditionalRouteContext:()=>S,useBeforeTabbedWindowUnload:()=>m,useCurrentPostmanTabContext:()=>v,useIsActivePostmanTab:()=>h,useLoaderData:()=>E,useLocation:()=>x,useMountOutletOnNav:()=>y,useNavigate:()=>I,usePostmanTabsContext:()=>b,useSearchParams:()=>A,useSetTabState:()=>j,useSetTabTitle:()=>w,useTabTitleAndStateUpdates:()=>f,withRouter:()=>r});var i=a(40540),s=a.n(i),l=a(60607),o=a(52322);function r(e){return t=>{const a=(0,l.useLocation)(),n=(0,l.useNavigate)(),i=(0,l.useParams)();return(0,o.jsx)(e,Object.assign({location:a,navigate:n,params:i},t))}}var c=a(98283),d=a(54302);a(29605);const u=s().createContext(null),b=()=>(0,i.useContext)(u),p=s().createContext(null),v=()=>(0,i.useContext)(p),h=()=>{const e=b(),t=v(),{tabId:a}=t||{};return(null==e?void 0:e.activeTab)===a},f=()=>{const{pathname:e,search:t}=(0,l.useLocation)(),a=h(),{tabId:n,title:s,tabType:o,setTabState:r,isConflicted:c,isDirty:d}=v();(0,i.useEffect)((()=>{a&&s&&(r({title:s,tabType:o,isDirty:d,isConflicted:c}),globalThis.document.title=s)}),[a,n,s,o,d,c,r]),(0,i.useEffect)((()=>{r({currentlyActiveURL:e+t})}),[])},m=()=>{const{tabs:e,tabsMeta:t}=b();(0,i.useEffect)((()=>{const a=a=>(a.preventDefault(),e.find((e=>{var a;return null==(a=t[e.id])?void 0:a.isDirty}))||(a.returnValue="Are you sure you want to exit?"),a.returnValue);return window.addEventListener("beforeunload",a,{capture:!0}),()=>window.removeEventListener("beforeunload",a,{capture:!0})}),[])};var T=a(48722);const g=(e,...t)=>{const a=e(...t),n=b(),s=!!v(),l=h(),o=(0,i.useRef)(a);return(0,i.useEffect)((()=>{l&&(o.current=a)}),[l,a]),n&&s&&!l?o.current:a},x=()=>g(l.useLocation),C=(e,t)=>{const a=t[e.id];return!(null!=a&&a.isDirty||null!=a&&a.isConflicted||null!=a&&a.isPinned)},y=()=>{const{tabs:e,tabsMeta:t,setTabs:a,setTabsMeta:n,setActiveTab:s}=b(),o=x(),{state:r,pathname:c,search:d}=o,u=(0,l.useOutlet)(),p=(0,i.useMemo)((()=>u),[c+d]),v=(0,i.useCallback)(((t,n)=>{const i=e.map((e=>e.id===n?t:e));return s(t.id),a(i)}),[s,a,e]),h=(0,i.useCallback)(((i,l,o)=>{const r=Object.assign({replacePreviewTab:!0,pinNewTab:!1},o),c=(0,T.v4)(),d={pathname:i,element:l,id:c},u=e.find((e=>C(e,t)));return u&&null!=r&&r.replacePreviewTab?v(d,u.id):(s(c),null!=r&&r.pinNewTab&&n((e=>Object.assign({},e,{[c]:Object.assign({},e[c],{isPinned:!0})}))),a((e=>[...e,{pathname:i,element:l,id:c}])))}),[e,v,s,a,t,n]);(0,i.useEffect)((()=>{if(!p)return;const t=(e=>{if("string"==typeof e)try{var t;return(null==(t=JSON.parse(e))?void 0:t.navigationParams)||{}}catch(e){return{}}return(null==e?void 0:e.navigationParams)||{}})(r),{tabId:a,newTab:n,sameTab:i}=t;if(n)return h(c,p,{replacePreviewTab:!1,pinNewTab:!0});if(i&&a&&-1!==e.findIndex((e=>e.id===a)))return v({id:(0,T.v4)(),pathname:c,element:p},a);if(a){var l;const t=null==(l=e.find((e=>e.id===a)))?void 0:l.id;if(t)return s(t)}const o=e.find((e=>e.pathname===c));return o?s(null==o?void 0:o.id):h(c,p)}),[p])},j=e=>{const{setTabsMeta:t,activeTab:a}=b();return(0,i.useCallback)((n=>{a===e.id&&t((t=>{const a=Object.assign({},t[e.id]),i={};return"title"in n&&(i.title=n.title||""),"isDirty"in n&&(i.isDirty=n.isDirty||!1),"isConflicted"in n&&(i.isConflicted=n.isConflicted||!1),"tabType"in n&&(i.tabType=n.tabType||"http"),"currentlyActiveURL"in n&&(i.currentlyActiveURL=n.currentlyActiveURL||""),Object.assign({},t,{[e.id]:Object.assign({},a,i)})}))}),[t,e.id,a])},w=e=>{const t=j(e);return(0,i.useCallback)((e=>t({title:e})),[t])},k=["children","to"],O=["children","to"],N=e=>{let{children:t,to:a}=e,n=(0,c.Z)(e,k);const{tabId:i}=v()||{};return(0,o.jsx)(l.Link,Object.assign({to:a},n,{state:Object.assign({},n.state,{navigationParams:{sameTab:n.sameTab||!1,newTab:n.newTab||!1,tabId:n.sameTab||n.newTab?i:null}}),children:t}))},D=e=>{let{children:t,to:a}=e,n=(0,c.Z)(e,O);if(n.customNavEvent)return(0,o.jsx)(d.VSCodeLink,Object.assign({to:a},n,{children:t}));const i=Object.assign({},{target:"_self",rel:"noreferrer noopener"},n),s=a.toString();return new RegExp("https?:\\/\\/").test(s)?(0,o.jsx)("a",Object.assign({href:s},i,{onClick:async e=>{n.onClick&&n.onClick(e),e.defaultPrevented},children:t})):(0,o.jsx)(N,Object.assign({to:a},i,{children:t}))},I=()=>{const{tabId:e}=v()||{},t=(0,l.useNavigate)();return(a,n,i)=>{const s=Object.assign({},n),l={sameTab:(null==i?void 0:i.sameTab)||!1,newTab:(null==i?void 0:i.newTab)||!1,tabId:null!=i&&i.sameTab||null!=i&&i.newTab?e:null};if(s.state=null!=n&&n.state&&"string"==typeof n.state?JSON.stringify(Object.assign({},JSON.parse(n.state),{navigationParams:l})):Object.assign({},null==n?void 0:n.state,{navigationParams:l}),null==i||!i.customNavEvent||((0,d.vscodeNavigate)(a,n,i),i["customNavEvent-updateURL"]))return t(a,s)}},L="VIEW_COLLECTION_FOLDER_REQUEST";async function Z(e){await(0,d.vsCodeOpenExternalLink)(e)}const S=()=>{const e=(0,l.useLocation)();return(0,i.useMemo)((()=>{const t=(e=>{try{var t;if(!e)return{};let a;return"string"==typeof e&&(a=JSON.parse(e)),(null==(t=a)?void 0:t.additionalContext)||{}}catch(e){return{}}})(e.state);return Object.assign({},t,(()=>{try{var e;return(null==(e=JSON.parse(window.NAVIGATION_CONTEXT))||null==(e=e.params)||null==(e=e.state)?void 0:e.additionalContext)||{}}catch(e){return{}}})())}),[e.state])},A=()=>{const e=(0,l.useLocation)(),[t,a]=g(l.useSearchParams),n=b(),{setTabState:s,tabId:o}=v()||{};return[t,(0,i.useCallback)((t=>{if(a(t,{state:n&&o?{navigationParams:{tabId:o}}:void 0}),o&&n&&s){const a=t.toString(),n=`${e.pathname}${a?"?"+a:""}`;s({currentlyActiveURL:n})}}),[a,n,e.pathname,s,o])]},E=()=>g(l.useLoaderData);var _=a(27363),P=a(25892),M=a.n(P),R=a(80429),U=a(25869),$=a(64691),F=a(59824),W=a(17282),V=a(20347);const q=({isOpen:e,forTabId:t,position:a,createNewRequest:n,closeMenu:i})=>{const{closeAllNonSelectedTabs:s,closeTab:l,closeAllTabs:r}=b();return(0,o.jsx)($.Z,{isOpen:e,contextMenu:{posX:null==a?void 0:a.x,posY:null==a?void 0:a.y},closeMenu:i,children:(0,o.jsxs)(F.Z,{children:[(0,o.jsx)(W.Z,{onClick:n,children:"New Request"}),(0,o.jsx)(V.Z,{}),(0,o.jsx)(W.Z,{onClick:()=>l(t),children:"Close Tab"}),(0,o.jsx)(W.Z,{onClick:()=>l(t,!0),children:"Force Close Tab"}),(0,o.jsx)(W.Z,{onClick:()=>s(),children:"Close Other Tabs"}),(0,o.jsx)(W.Z,{onClick:()=>r(),children:"Close All Tabs"}),(0,o.jsx)(W.Z,{onClick:()=>r(!0),children:"Force Close All Tabs"})]})})},z=e=>(0,o.jsx)(q,Object.assign({},e));var H=a(48263),J=a(36914),X=a(58560),Y=a(29225),Q=a(56259),B=a(35547),G=a(22922),K=a(44306),ee=a(29706),te=a(10907),ae=a(20455);const ne={collection:(0,o.jsx)(Q.Z,{}),folder:(0,o.jsx)(B.Z,{}),http:(0,o.jsx)(G.Z,{}),"ws-raw":(0,o.jsx)(K.Z,{}),grpc:(0,o.jsx)(ee.Z,{}),"http-response":(0,o.jsx)(te.Z,{}),environment:(0,o.jsx)(ae.Z,{}),default:(0,o.jsx)(Q.Z,{})},ie=()=>{const{tabs:e,closeAllNonSelectedTabs:t,closeTab:a,closeAllTabs:n,activeTab:i,recentlyClosed:s,openFromRecentlyClosed:l}=b(),r=0===e.length;return(0,o.jsxs)($.Z,{children:[(0,o.jsx)(H.Z,{children:(0,o.jsx)(R.Z,{icon:(0,o.jsx)(Y.Z,{}),type:"tertiary","data-testid":"tabs-more-options-button"})}),(0,o.jsxs)(F.Z,{children:[(0,o.jsx)(J.Z,{label:"Recently Closed Tabs",children:0===s.length?(0,o.jsx)(W.Z,{isDisabled:!0,children:"None"}):s.map(((e,t)=>(0,o.jsx)(W.Z,{onClick:()=>l(t),children:(0,o.jsxs)(X.Z,{alignItems:"center",gap:"spacing-s",children:[ne[e.tabType]||ne.default," ",e.title||"Untitled Tab"]})},e.id||e.pathname)))}),(0,o.jsx)(V.Z,{}),(0,o.jsx)(W.Z,{onClick:()=>a(i),isDisabled:r,children:"Close Selected Tab"}),(0,o.jsx)(W.Z,{type:"destructive",onClick:()=>a(i,!0),isDisabled:r,children:"Force Close Selected Tab"}),(0,o.jsx)(W.Z,{onClick:()=>t(),isDisabled:r,children:"Close All but Selected Tab"}),(0,o.jsx)(W.Z,{onClick:()=>n(),isDisabled:r,children:"Close All Tabs"}),(0,o.jsx)(W.Z,{type:"destructive",onClick:()=>n(!0),isDisabled:r,children:"Force Close All Tabs"})]})]})};var se=a(23180);const le=M().div.withConfig({displayName:"tab-header-item__TabIcon",componentId:"sc-ie23dr-0"})([""]),oe=M().div.withConfig({displayName:"tab-header-item__TabHeaderDiv",componentId:"sc-ie23dr-1"})(["width:172px;display:flex;gap:0.5rem;align-items:center;padding:calc(1px + var(--spacing-s)) var(--spacing-m);border-right:1px solid var(--border-color-default);border-top:",";border-left:none;border-bottom:",";font-style:",";",""],(e=>e.$isActive?"2.5px solid var(--base-color-brand)":"1px solid var(--border-color-default)"),(e=>e.$isActive?"none":"1px solid var(--border-color-default)"),(e=>e.$isPreviewTab?"italic":""),(e=>e.$isDirty&&(0,P.css)([".tab-close-icon{display:none;}&:hover{.tab-close-icon{display:flex;}.dirty-indicator{display:none;}}"]))),re=M().div.withConfig({displayName:"tab-header-item__TabTitle",componentId:"sc-ie23dr-2"})(["font-family:var(--text-family-default);line-height:var(--line-height-s);font-size:var(--text-size-s);font-weight:var(--text-weight-regular);padding-left:var(--spacing-xs);flex:1;align-self:center;white-space:nowrap;overflow-x:hidden;text-overflow:ellipsis;"]),ce=M()(le).withConfig({displayName:"tab-header-item__TabCloseIconWrapper",componentId:"sc-ie23dr-3"})(["display:flex;align-items:center;justify-content:center;height:var(--size-s);width:var(--size-s);"]),de=M().div.withConfig({displayName:"tab-header-item__DirtyStateIndicator",componentId:"sc-ie23dr-4"})(["width:calc(1.02 * var(--spacing-s));height:var(--spacing-s);border-radius:50%;background-color:var(--base-color-brand);"]),ue=e=>null!=e&&e.isConflicted?"[CONFLICT] ":"",be=e=>{const{activeTab:t,setActiveTab:a,closeTab:n,setTabsMeta:s,tabsMeta:r}=b(),c=t===e.tab.id,d=r[e.tab.id],u=(null==d?void 0:d.currentlyActiveURL)||e.tab.pathname,p=C(e.tab,r),v=(0,i.useCallback)((t=>(t.preventDefault(),t.stopPropagation(),n(e.tab.id),null)),[n,e.tab.id]),h=(0,i.useCallback)((()=>{s((t=>Object.assign({},t,{[e.tab.id]:Object.assign({},d,{isPinned:!0})})))}),[e.tab.id,d,s]);return(0,o.jsx)(l.Link,{to:u,onClick:t=>{!c&&a(e.tab.id),c&&t.preventDefault(),c&&t.stopPropagation()},state:{navigationParams:{tabId:e.tab.id}},onContextMenu:e.onContextMenu,children:(0,o.jsxs)(oe,{$isActive:c,$isDirty:null==d?void 0:d.isDirty,$isPreviewTab:p,onDoubleClick:h,"data-testid":"tab-header",children:[(0,o.jsx)(le,{children:ne[null==d?void 0:d.tabType]||ne.default}),(0,o.jsxs)(re,{title:(null==d?void 0:d.title)||"Loading...",children:[ue(d),(null==d?void 0:d.title)||"Loading..."]}),(0,o.jsxs)(ce,{onClick:v,"data-testid":"tab-close-icon",children:[(null==d?void 0:d.isDirty)&&(0,o.jsx)(de,{className:"dirty-indicator"}),(0,o.jsx)(R.Z,{className:"tab-close-icon",type:"tertiary",size:"small",icon:(0,o.jsx)(se.Z,{})})]})]})},e.tab.id)},pe=M().div.withConfig({displayName:"tabs-header__TabsHeaderWrapper",componentId:"sc-193ka6n-0"})(["width:100%;overflow-x:auto;display:flex;min-height:var(--wp-tabs-header-height);&::-webkit-scrollbar{display:none;}-ms-overflow-style:none;scrollbar-width:none;"]),ve=M().div.withConfig({displayName:"tabs-header__TabHeaderFiller",componentId:"sc-193ka6n-1"})(["flex-grow:1;border-bottom:1px solid var(--border-color-default);height:calc(100% - 0.5px);display:flex;align-items:center;justify-content:flex-start;padding:0 var(--spacing-xs);gap:var(--spacing-xs);"]),he=()=>{const{tabs:e}=b(),[t,a]=(0,i.useState)({open:!1}),{workspaceId:n}=(0,l.useParams)(),s=I(),r=(0,i.useCallback)((()=>{if(!n)return;const e=(0,T.v4)();s(`/workspace/${n}/request/create?requestId=${e}`,{},{newTab:!0,customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"})}),[n,s]),c=(0,i.useCallback)(((e,t)=>{t.preventDefault(),a({open:!0,forTabId:e,position:{x:t.pageX,y:t.pageY}})}),[]),d=(0,i.useCallback)((()=>a({open:!1})),[]);return(0,o.jsxs)(pe,{children:[e.map((e=>(0,o.jsx)(be,{tab:e,onContextMenu:t=>c(e.id,t)},e.id))),(0,o.jsx)(z,{isOpen:null==t?void 0:t.open,forTabId:null==t?void 0:t.forTabId,position:null==t?void 0:t.position,closeMenu:d,createNewRequest:r}),(0,o.jsxs)(ve,{children:[(0,o.jsx)(R.Z,{type:"tertiary",icon:(0,o.jsx)(U.Z,{}),onClick:r}),(0,o.jsx)(ie,{})]})]})};var fe=a(53723),me=a.n(fe);const Te=M().div.withConfig({displayName:"tab__TabContentWrapper",componentId:"sc-118jy4w-0"})(["display:",";height:var(--wp-workbench-height);"],(({$isHidden:e})=>e?"none":"block")),ge=e=>{const t=!h();return f(),(0,o.jsx)(Te,{className:me()({"tab-content":!0,"is-hidden":t}),$isHidden:t,children:e.children})},xe=({tab:e})=>{const{tabsMeta:t}=b(),a=j(e),n=w(e),s=(0,i.useMemo)((()=>{var i,s,l,o;return{tabId:e.id,pathname:e.pathname,isDirty:null==(i=t[e.id])?void 0:i.isDirty,isConflicted:null==(s=t[e.id])?void 0:s.isConflicted,title:(null==(l=t[e.id])?void 0:l.title)||"",tabType:(null==(o=t[e.id])?void 0:o.tabType)||"http",setTabTitle:n,setTabState:a}}),[e.id,e.pathname,t,n,a]);return(0,o.jsx)(p.Provider,{value:s,children:(0,o.jsx)(ge,{children:e.element},e.pathname)})},Ce=({fallback:e})=>{const{tabs:t}=b();return(0,i.useMemo)((()=>(0,o.jsxs)(o.Fragment,{children:[0===t.length&&e?e:"",t.map((e=>(0,o.jsx)(xe,{tab:e},e.pathname)))]})),[t,e])},ye=({children:e})=>(y(),m(),(0,o.jsxs)(o.Fragment,{children:[e," "]})),je="tab-close-confirmation-modal",we=e=>`This tab ${e||"Untitled tab"} has unsaved changes which will be lost if you choose to close it. Save these changes to avoid losing your work.`,ke=[{title:"Don't Save",isDefaultOnDismiss:!0},{title:"Cancel",isPrimary:!0}],Oe="tab-force-close-confirmation-modal",Ne=e=>`${e} tab${1===e?" has":"s have"} unsaved changes. Your changes will be lost if you force close this tab. Are you sure you want to force close?`,De=[{title:"Cancel",isDefaultOnDismiss:!0},{title:"Force Close",isPrimary:!0}],Ie=(e,t)=>{var a;return null==(a=t[e])?void 0:a.isDirty},Le=async(e,t)=>{const a=await e.showWarningDialog({uid:je,subject:"DO YOU WANT TO SAVE?",message:we(t),options:ke});return!a||"Cancel"!==a.title},Ze=({fallback:e})=>{const t=I(),a=(0,l.useMatches)(),n=_.Modals.getModals(),[s,r]=(0,i.useState)(null),[c,d]=(0,i.useState)([]),[b,p]=(0,i.useState)({}),[v,h]=(0,i.useState)([]),f=(0,i.useCallback)((e=>{var a;r(e.id),t((null==(a=b[e.id])?void 0:a.currentlyActiveURL)||e.pathname)}),[t,b]),m=(0,i.useCallback)((e=>{e&&h((t=>{var a,n,i;return[...t,{id:e.id,pathname:(null==(a=b[e.id])?void 0:a.currentlyActiveURL)||e.pathname,title:null==(n=b[e.id])?void 0:n.title,tabType:null==(i=b[e.id])?void 0:i.tabType}]}))}),[b]),T=(0,i.useCallback)((e=>h((t=>[...t].splice(e,1)))),[]),g=(0,i.useCallback)((e=>{const a=v[e];t(a.pathname,{},{newTab:!0,customNavEvent:"VIEW_COLLECTION_FOLDER_REQUEST"}),T(e)}),[T,t,v]),x=(0,i.useCallback)((async(e,i=!1)=>{var l;const o=c.findIndex((t=>t.id===e));if(-1===o)return;const r=c[o],u=Ie(r.id,b);if(!i&&u&&!await Le(n,null==(l=b[e])?void 0:l.title))return;if(r.id===s){const e=((e,t)=>{const a=t-1;return e[t+1]||e[a]})(c,o);if(e)f(e);else{const e=a.at(-2);(null==e?void 0:e.pathname)&&t(e.pathname)}}const p=c.filter((t=>t.id!==e));d(p),m(r)}),[t,f,c,a,b,n,s,m]),C=(0,i.useCallback)((async(e=!1)=>{if(e){const e=c.filter((e=>Ie(e.id,b))).length;if(e&&!await(async(e,t)=>{const a=await e.showWarningDialog({uid:Oe,subject:"Confirm force close",message:Ne(t),options:De});return!a||"Cancel"!==a.title})(n,e))return;for(const e of c)m(e);d([]);const i=a.at(-2);return(null==i?void 0:i.pathname)&&t(i.pathname)}const i=[];for(const e of c){var s;Ie(e.id,b)&&!await Le(n,null==(s=b[e.id])?void 0:s.title)||(m(e),i.push(e.id))}d((e=>e.filter((e=>!i.includes(e.id)))))}),[c,n,a,t,b,m]),y=(0,i.useCallback)((async(e=s)=>{const t=[];for(const i of c){var a;i.id!==e&&(Ie(i.id,b)&&!await Le(n,null==(a=b[i.id])?void 0:a.title)||t.push(i.id))}d((e=>e.filter((e=>!t.includes(e.id)))))}),[s,c,n,b]),j=(0,i.useMemo)((()=>({tabs:c,setTabs:d,tabsMeta:b,setTabsMeta:p,recentlyClosed:v,closeTab:x,closeAllTabs:C,activeTab:s,setActiveTab:r,closeAllNonSelectedTabs:y,openFromRecentlyClosed:g})),[c,b,v,x,s,r,C,y,g]);return(0,o.jsx)(u.Provider,{value:j,children:(0,o.jsxs)(ye,{children:[(0,o.jsx)(_.Modals.Ui.ModalDialog,{uid:je}),(0,o.jsx)(_.Modals.Ui.ModalDialog,{uid:Oe}),(0,o.jsx)(he,{}),(0,o.jsx)(Ce,{fallback:e})]})})}}}]);
//# sourceMappingURL=8643.46a5fe5d6e741ba8.js.map