(()=>{var e,t,a,r,n,o,d,l,s,i,c,f,p,u,h,m,b,v,g,y={629:(e,t,a)=>{Promise.all([a.e(541),a.e(605),a.e(8281),a.e(540),a.e(1730),a.e(2229),a.e(427),a.e(607),a.e(8722),a.e(6081),a.e(8738),a.e(923),a.e(9972),a.e(9316),a.e(5801)]).then(a.bind(a,4415))},412:(e,t,a)=>{var r="undefined"!=typeof window?window:void 0!==a.g?a.g:"undefined"!=typeof self?self:{};r.SENTRY_RELEASE={id:"prod.2023-12-27.06-54"},r.SENTRY_RELEASES=r.SENTRY_RELEASES||{},r.SENTRY_RELEASES["vscode-extension-webview@postman-labs"]={id:"prod.2023-12-27.06-54"}}},w={};function x(e){var t=w[e];if(void 0!==t)return t.exports;var a=w[e]={id:e,loaded:!1,exports:{}};return y[e].call(a.exports,a,a.exports,x),a.loaded=!0,a.exports}x.m=y,x.c=w,x.amdO={},x.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return x.d(t,{a:t}),t},x.d=(e,t)=>{for(var a in t)x.o(t,a)&&!x.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},x.f={},x.e=e=>Promise.all(Object.keys(x.f).reduce(((t,a)=>(x.f[a](e,t),t)),[])),x.u=e=>e+"."+{157:"1e22db5cc6798f47",229:"d653e9202ebd39eb",427:"bd83d9c66a5da93d",540:"0234455e03f11527",541:"55af6c917cb11044",605:"49bd307f13443a6d",607:"d402ed5cd316e8ac",676:"f9d5c71e06d3018c",686:"77c9cadd4cd8d13a",721:"8492a4b86f4ddff7",766:"9742306fd2a161c0",770:"c753a0320de6666f",800:"d1af1c7827d2216b",923:"08da0fd7f6188a42",966:"2df4b29cf85261d8",1148:"c394ae0ad42b5b9d",1166:"663ca93babb7b562",1311:"b60b4ca0833de769",1312:"9c50e1b7ff55389d",1327:"948c30e2b7ba65dc",1628:"24dfd2f8d1641859",1685:"94ca1e377e8984ff",1730:"3f6470e51fe984f9",1827:"562c00e7157b462c",2136:"8cf8f1475074924a",2223:"778668a5e1ae06a1",2229:"6ff8455c59e44a13",2668:"f234ce6e61e73654",2772:"30b0ea737e4fd7dd",2784:"22243e099fca3ee7",2955:"7e59f8335234e0f3",3723:"f5dbb8dad4bcb170",3911:"824ab506badbda8b",3980:"916371807d77dbbe",4302:"e0a68c5d8b108aa6",4803:"5c5ec86fdc369422",4810:"91784abcda41b2ce",5473:"934f57afb147ac99",5505:"bde4ea9f2c97f14b",5801:"30d1c268cdd56e87",6081:"8720ef2cb15d8831",6277:"e09163ffe1575c67",6353:"b9f4bdd903e5aa54",6371:"aff1150781c180b2",6462:"0232e0e532b342c9",6591:"ba7a76a97fa0b6fc",6663:"a253e55e050ec9f2",6686:"7ba6e9dfb5454ab9",7128:"529ad5b65c5e3db9",7397:"d7a6fb54e2c614a8",7500:"f52b8d0c5e6567c1",7768:"0237738017c3689f",7864:"35d877690ad16d1c",7908:"d9a0341b936427ce",8007:"345025415d969762",8013:"c0c15360368b4bbd",8183:"1677513cdad6b3f8",8210:"6f29a1016c06dcdd",8281:"d92309cf52f64c79",8316:"36b0b5ed60ed5c4b",8320:"ab623e38db2db3af",8537:"d70bfa2f98e4ac4b",8609:"0c53d6de8e0e6688",8643:"63ac8e2fd343a8e9",8653:"583ae00b073dad71",8722:"165cab4eda962039",8738:"01af908b7562d212",8864:"3ced25029e8c76d7",8983:"50c4797b2fdcf7a4",9211:"736c608af01a14ce",9304:"d16a81e6d3c91f16",9315:"3d5be6e9107df9a3",9316:"3348e9aba0d61428",9543:"0d11b0f830148610",9972:"4dc0cc0102ecb8f1"}[e]+".js",x.miniCssF=e=>e+"."+{1312:"e5f985394da508fb",1827:"e5f985394da508fb",5801:"aa5a40ed49503f87"}[e]+".css",x.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),x.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),x.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="workspace-switcher:",x.l=(a,r,n,o)=>{if(e[a])e[a].push(r);else{var d,l;if(void 0!==n)for(var s=document.getElementsByTagName("script"),i=0;i<s.length;i++){var c=s[i];if(c.getAttribute("src")==a||c.getAttribute("data-webpack")==t+n){d=c;break}}d||(l=!0,(d=document.createElement("script")).type="text/javascript",d.charset="utf-8",d.timeout=120,x.nc&&d.setAttribute("nonce",x.nc),d.setAttribute("data-webpack",t+n),d.src=a),e[a]=[r];var f=(t,r)=>{d.onerror=d.onload=null,clearTimeout(p);var n=e[a];if(delete e[a],d.parentNode&&d.parentNode.removeChild(d),n&&n.forEach((e=>e(r))),t)return t(r)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=f.bind(null,d.onerror),d.onload=f.bind(null,d.onload),l&&document.head.appendChild(d)}},x.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{x.S={};var e={},t={};x.I=(a,r)=>{r||(r=[]);var n=t[a];if(n||(n=t[a]={}),!(r.indexOf(n)>=0)){if(r.push(n),e[a])return e[a];x.o(x.S,a)||(x.S[a]={});var o=x.S[a],d="workspace-switcher",l=(e,t,a,r)=>{var n=o[e]=o[e]||{},l=n[t];if(!l||!l.__postman_local_chunk__)if(window.__local_apps__&&window.__local_apps__.includes(d)){if(l&&l.loaded&&l.__postman_local_chunk__)return;n[t]={get:a,from:d,eager:!!r,__postman_local_chunk__:!0}}else(!l||!l.loaded&&(!r!=!l.eager?r:d>l.from))&&(n[t]={get:a,from:d,eager:!!r})},s=[];return"default"===a&&(l("@postman-app-next/analytics-service","0.0.1",(()=>Promise.all([x.e(4302),x.e(4810),x.e(2136),x.e(8183)]).then((()=>()=>x(721))))),l("@postman-app-next/auth","0.0.1",(()=>x.e(2668).then((()=>()=>x(2668))))),l("@postman-app-next/data-fetching","0.0.1",(()=>Promise.all([x.e(540),x.e(4302),x.e(7864),x.e(8013)]).then((()=>()=>x(8013))))),l("@postman-app-next/desktop-communication-sdk","0.0.1",(()=>Promise.all([x.e(540),x.e(9211)]).then((()=>()=>x(966))))),l("@postman-app-next/dialogs","0.0.1",(()=>Promise.all([x.e(541),x.e(605),x.e(8983),x.e(540),x.e(4302),x.e(1730),x.e(2229),x.e(427),x.e(229)]).then((()=>()=>x(3911))))),l("@postman-app-next/error-handling","0.0.1",(()=>Promise.all([x.e(541),x.e(157),x.e(540),x.e(4302),x.e(1730),x.e(2229),x.e(427),x.e(607),x.e(2772),x.e(8653)]).then((()=>()=>x(730))))),l("@postman-app-next/navigation","0.0.1",(()=>Promise.all([x.e(541),x.e(605),x.e(676),x.e(540),x.e(4302),x.e(1730),x.e(2229),x.e(427),x.e(607),x.e(8722),x.e(3723),x.e(1311),x.e(800)]).then((()=>()=>x(8643))))),l("@postman-app-next/network","0.0.1",(()=>Promise.all([x.e(540),x.e(4302),x.e(923),x.e(4810),x.e(8320),x.e(9315)]).then((()=>()=>x(8320))))),l("@postman-app-next/ui","0.0.1",(()=>Promise.all([x.e(541),x.e(605),x.e(157),x.e(540),x.e(4302),x.e(1730),x.e(2229),x.e(427),x.e(3723),x.e(6081),x.e(1166),x.e(1827)]).then((()=>()=>x(1166))))),l("@postman-app-next/vscode-utils","0.0.1",(()=>Promise.all([x.e(540),x.e(607),x.e(8722),x.e(5473)]).then((()=>()=>x(770))))),l("@postman-app-next/workspace-service","0.0.1",(()=>Promise.all([x.e(540),x.e(4302),x.e(607),x.e(6081),x.e(8738),x.e(766)]).then((()=>()=>x(766))))),l("@postman/aether-design-tokens","1.2.0",(()=>x.e(6462).then((()=>()=>x(6462))))),l("@sentry/react","7.49.0",(()=>Promise.all([x.e(7500),x.e(540)]).then((()=>()=>x(7500))))),l("@tanstack/react-query-devtools","4.29.5",(()=>x.e(2223).then((()=>()=>x(2223))))),l("@tanstack/react-query","4.29.5",(()=>Promise.all([x.e(8609),x.e(540)]).then((()=>()=>x(8609))))),l("clsx","1.2.1",(()=>x.e(6277).then((()=>()=>x(6277))))),l("eventemitter3","5.0.0",(()=>x.e(686).then((()=>()=>x(686))))),l("mobx-react","7.6.0",(()=>Promise.all([x.e(8007),x.e(540),x.e(1730)]).then((()=>()=>x(8007))))),l("prop-types","15.8.1",(()=>x.e(3980).then((()=>()=>x(3980))))),l("react-dom","16.14.0",(()=>Promise.all([x.e(8316),x.e(540)]).then((()=>()=>x(8316))))),l("react-draggable","4.4.5",(()=>Promise.all([x.e(1327),x.e(540),x.e(1730),x.e(2229),x.e(3723)]).then((()=>()=>x(1327))))),l("react-error-boundary","4.0.10",(()=>Promise.all([x.e(540),x.e(2955)]).then((()=>()=>x(2955))))),l("react-router-dom","6.11.2",(()=>Promise.all([x.e(6591),x.e(540)]).then((()=>()=>x(6591))))),l("react-window-infinite-loader","1.0.8",(()=>Promise.all([x.e(540),x.e(1628)]).then((()=>()=>x(1628))))),l("react-window","1.8.8",(()=>Promise.all([x.e(6663),x.e(540),x.e(7397)]).then((()=>()=>x(6663))))),l("react","16.14.0",(()=>x.e(2784).then((()=>()=>x(2784))))),l("rxjs/operators","7.8.1",(()=>Promise.all([x.e(6686),x.e(4803)]).then((()=>()=>x(4803))))),l("rxjs","7.8.1",(()=>Promise.all([x.e(6686),x.e(8210)]).then((()=>()=>x(8210))))),l("socket.io-client","2.5.0",(()=>Promise.all([x.e(7768),x.e(8864)]).then((()=>()=>x(7768))))),l("styled-components","5.3.6",(()=>Promise.all([x.e(5505),x.e(540)]).then((()=>()=>x(5505))))),l("ua-parser-js","1.0.33",(()=>x.e(6353).then((()=>()=>x(6353))))),l("uuid","8.3.2",(()=>x.e(9304).then((()=>()=>x(9304))))),l("web-vitals","3.0.4",(()=>x.e(9543).then((()=>()=>x(9543)))))),e[a]=s.length?Promise.all(s).then((()=>e[a]=1)):1}}})(),(()=>{var e;x.g.importScripts&&(e=x.g.location+"");var t=x.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!e;)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),x.p=e})(),a=e=>{var t=e=>e.split(".").map((e=>+e==e?+e:e)),a=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),r=a[1]?t(a[1]):[];return a[2]&&(r.length++,r.push.apply(r,t(a[2]))),a[3]&&(r.push([]),r.push.apply(r,t(a[3]))),r},r=(e,t)=>{e=a(e),t=a(t);for(var r=0;;){if(r>=e.length)return r<t.length&&"u"!=(typeof t[r])[0];var n=e[r],o=(typeof n)[0];if(r>=t.length)return"u"==o;var d=t[r],l=(typeof d)[0];if(o!=l)return"o"==o&&"n"==l||"s"==l||"u"==o;if("o"!=o&&"u"!=o&&n!=d)return n<d;r++}},n=e=>{var t=e[0],a="";if(1===e.length)return"*";if(t+.5){a+=0==t?">=":-1==t?"<":1==t?"^":2==t?"~":t>0?"=":"!=";for(var r=1,o=1;o<e.length;o++)r--,a+="u"==(typeof(l=e[o]))[0]?"-":(r>0?".":"")+(r=2,l);return a}var d=[];for(o=1;o<e.length;o++){var l=e[o];d.push(0===l?"not("+s()+")":1===l?"("+s()+" || "+s()+")":2===l?d.pop()+" "+d.pop():n(l))}return s();function s(){return d.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,t)=>{if(0 in e){t=a(t);var r=e[0],n=r<0;n&&(r=-r-1);for(var d=0,l=1,s=!0;;l++,d++){var i,c,f=l<e.length?(typeof e[l])[0]:"";if(d>=t.length||"o"==(c=(typeof(i=t[d]))[0]))return!s||("u"==f?l>r&&!n:""==f!=n);if("u"==c){if(!s||"u"!=f)return!1}else if(s)if(f==c)if(l<=r){if(i!=e[l])return!1}else{if(n?i>e[l]:i<e[l])return!1;i!=e[l]&&(s=!1)}else if("s"!=f&&"n"!=f){if(n||l<=r)return!1;s=!1,l--}else{if(l<=r||c<f!=n)return!1;s=!1}else"s"!=f&&"n"!=f&&(s=!1,l--)}}var p=[],u=p.pop.bind(p);for(d=1;d<e.length;d++){var h=e[d];p.push(1==h?u()|u():2==h?u()&u():h?o(h,t):!u())}return!!u()},d=(e,t)=>{var a=e[t];return(t=Object.keys(a).reduce(((e,t)=>!e||r(e,t)?t:e),0))&&a[t]},l=(e,t)=>{var a=e[t];return Object.keys(a).reduce(((e,t)=>!e||!a[e].loaded&&r(e,t)?t:e),0)},s=(e,t,a,r)=>"Unsatisfied version "+a+" from "+(a&&e[t][a].from)+" of shared singleton module "+t+" (required "+n(r)+")",i=(e,t,a,r)=>{var n=l(e,a);if(!o(r,n))throw new Error(s(e,a,n,r));return c(e[a][n])},c=e=>(e.loaded=1,e.get()),p=(f=e=>function(t,a,r,n){var o=x.I(t);return o&&o.then?o.then(e.bind(e,t,x.S[t],a,r,n)):e(t,x.S[t],a,r,n)})(((e,t,a,r)=>t&&x.o(t,a)?c(d(t,a)):r())),u=f(((e,t,a,r,n)=>t&&x.o(t,a)?i(t,0,a,r):n())),h={},m={540:()=>u("default","react",[4,16,14,0],(()=>x.e(2784).then((()=>()=>x(2784))))),1730:()=>u("default","react-dom",[4,16,14,0],(()=>x.e(8316).then((()=>()=>x(8316))))),2229:()=>u("default","prop-types",[1,15,8,1],(()=>x.e(3980).then((()=>()=>x(3980))))),5577:()=>u("default","@postman/aether-design-tokens",[1,1,2,0],(()=>x.e(7908).then((()=>()=>x(6462))))),5892:()=>u("default","styled-components",[4,5,3,6],(()=>x.e(5505).then((()=>()=>x(5505))))),607:()=>u("default","react-router-dom",[4,6,11,2],(()=>x.e(6591).then((()=>()=>x(6591))))),8722:()=>u("default","uuid",[1,8,3,2],(()=>x.e(9304).then((()=>()=>x(9304))))),6081:()=>p("default","@postman-app-next/navigation",(()=>Promise.all([x.e(541),x.e(605),x.e(676),x.e(4302),x.e(1730),x.e(2229),x.e(427),x.e(607),x.e(8722),x.e(3723),x.e(8643)]).then((()=>()=>x(8643))))),4958:()=>p("default","@postman-app-next/data-fetching",(()=>Promise.all([x.e(4302),x.e(7864),x.e(1685)]).then((()=>()=>x(8013))))),8079:()=>p("default","@postman-app-next/network",(()=>Promise.all([x.e(4302),x.e(923),x.e(4810),x.e(8320)]).then((()=>()=>x(8320))))),923:()=>p("default","@postman-app-next/error-handling",(()=>Promise.all([x.e(541),x.e(157),x.e(4302),x.e(1730),x.e(2229),x.e(427),x.e(607),x.e(2772),x.e(1148)]).then((()=>()=>x(730))))),9972:()=>p("default","@postman-app-next/workspace-service",(()=>Promise.all([x.e(4302),x.e(607),x.e(8738),x.e(6371)]).then((()=>()=>x(766))))),949:()=>u("default","react-window",[1,1,8,8],(()=>x.e(6663).then((()=>()=>x(6663))))),6930:()=>u("default","react-window-infinite-loader",[1,1,0,8],(()=>x.e(7128).then((()=>()=>x(1628))))),4025:()=>p("default","@postman-app-next/ui",(()=>Promise.all([x.e(157),x.e(4302),x.e(3723),x.e(1166),x.e(1312)]).then((()=>()=>x(1166))))),5837:()=>p("default","@postman-app-next/analytics-service",(()=>Promise.all([x.e(4302),x.e(4810),x.e(721)]).then((()=>()=>x(721))))),4302:()=>p("default","@postman-app-next/vscode-utils",(()=>Promise.all([x.e(540),x.e(607),x.e(8722),x.e(770)]).then((()=>()=>x(770))))),4810:()=>p("default","@postman-app-next/auth",(()=>x.e(2668).then((()=>()=>x(2668))))),4515:()=>u("default","ua-parser-js",[1,1,0,33],(()=>x.e(6353).then((()=>()=>x(6353))))),6468:()=>u("default","web-vitals",[1,3,0,4],(()=>x.e(9543).then((()=>()=>x(9543))))),2600:()=>u("default","@tanstack/react-query-devtools",[1,4,29,1],(()=>x.e(2223).then((()=>()=>x(2223))))),4527:()=>u("default","@tanstack/react-query",[1,4,29,1],(()=>x.e(8609).then((()=>()=>x(8609))))),609:()=>u("default","react-error-boundary",[1,4,0,4],(()=>x.e(8537).then((()=>()=>x(2955))))),5304:()=>u("default","@sentry/react",[1,7,49,0],(()=>x.e(7500).then((()=>()=>x(7500))))),3723:()=>u("default","clsx",[1,1,2,1],(()=>x.e(6277).then((()=>()=>x(6277))))),7363:()=>p("default","@postman-app-next/dialogs",(()=>Promise.all([x.e(8983),x.e(3911)]).then((()=>()=>x(3911))))),9605:()=>p("default","@postman-app-next/desktop-communication-sdk",(()=>x.e(966).then((()=>()=>x(966))))),1801:()=>u("default","socket.io-client",[1,2,1,1],(()=>Promise.all([x.e(7768),x.e(8864)]).then((()=>()=>x(7768))))),4021:()=>u("default","rxjs",[1,7,8,1],(()=>Promise.all([x.e(6686),x.e(8210)]).then((()=>()=>x(8210))))),4475:()=>u("default","eventemitter3",[1,5,0,0],(()=>x.e(686).then((()=>()=>x(686))))),8160:()=>u("default","rxjs/operators",[1,7,8,1],(()=>Promise.all([x.e(6686),x.e(4803)]).then((()=>()=>x(4803))))),7569:()=>u("default","react-draggable",[1,4,4,5],(()=>x.e(1327).then((()=>()=>x(1327))))),8851:()=>u("default","mobx-react",[1,7,6,0],(()=>x.e(8007).then((()=>()=>x(8007)))))},b={427:[5577,5892],540:[540],607:[607],721:[4515,6468],923:[923],1166:[7569,8851],1311:[7363,9605],1730:[1730],2136:[4515,6468],2229:[2229],2772:[609,5304],3723:[3723],4302:[4302],4810:[4810],5801:[4025,5837],6081:[6081],7864:[2600,4527],8320:[1801,4021,4475,8160],8643:[7363,9605],8722:[8722],8738:[4958,8079],9316:[949,6930],9972:[9972]},x.f.consumes=(e,t)=>{x.o(b,e)&&b[e].forEach((e=>{if(x.o(h,e))return t.push(h[e]);var a=t=>{h[e]=0,x.m[e]=a=>{delete x.c[e],a.exports=t()}},r=t=>{delete h[e],x.m[e]=a=>{throw delete x.c[e],t}};try{var n=m[e]();n.then?t.push(h[e]=n.then(a).catch(r)):a(n)}catch(e){r(e)}}))},v=e=>new Promise(((t,a)=>{var r=x.miniCssF(e),n=x.p+r;if(((e,t)=>{for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var n=(d=a[r]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(n===e||n===t))return d}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){var d;if((n=(d=o[r]).getAttribute("data-href"))===e||n===t)return d}})(r,n))return t();((e,t,a,r)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=o=>{if(n.onerror=n.onload=null,"load"===o.type)a();else{var d=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=d,s.request=l,n.parentNode.removeChild(n),r(s)}},n.href=t,document.head.appendChild(n)})(e,n,t,a)})),g={179:0},x.f.miniCss=(e,t)=>{g[e]?t.push(g[e]):0!==g[e]&&{1312:1,1827:1,5801:1}[e]&&t.push(g[e]=v(e).then((()=>{g[e]=0}),(t=>{throw delete g[e],t})))},(()=>{var e={179:0};x.f.j=(t,a)=>{var r=x.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else if(/^(1(31[12]|730)|2(136|229|772)|4(27|302|810)|60(7|81)|87(22|38)|(37|9)23|540|7864|9972)$/.test(t))e[t]=0;else{var n=new Promise(((a,n)=>r=e[t]=[a,n]));a.push(r[2]=n);var o=x.p+x.u(t),d=new Error;x.l(o,(a=>{if(x.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=a&&("load"===a.type?"missing":a.type),o=a&&a.target&&a.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",d.name="ChunkLoadError",d.type=n,d.request=o,r[1](d)}}),"chunk-"+t,t)}};var t=(t,a)=>{var r,n,[o,d,l]=a,s=0;if(o.some((t=>0!==e[t]))){for(r in d)x.o(d,r)&&(x.m[r]=d[r]);l&&l(x)}for(t&&t(a);s<o.length;s++)n=o[s],x.o(e,n)&&e[n]&&e[n][0](),e[n]=0},a=self.webpackChunkworkspace_switcher=self.webpackChunkworkspace_switcher||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),x.nc=void 0,x(412),x(629)})();
//# sourceMappingURL=main.02bd4ded0b78f672.js.map