"use strict";(self.webpackChunkfull_documentation_view=self.webpackChunkfull_documentation_view||[]).push([[1322],{981322:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const i=Symbol("singleComment"),l=Symbol("multiComment"),o=()=>"",s=(e,t,n)=>e.slice(t,n).replace(/\S/g," "),c=(e,t)=>{let n=t-1,i=0;for(;"\\"===e[n];)n-=1,i+=1;return Boolean(i%2)};function r(e,{whitespace:t=!0,trailingCommas:n=!1}={}){if("string"!=typeof e)throw new TypeError(`Expected argument \`jsonString\` to be a \`string\`, got \`${typeof e}\``);const r=t?s:o;let f=!1,u=!1,a=0,m="",g="",p=-1;for(let t=0;t<e.length;t++){const o=e[t],s=e[t+1];if(u||'"'!==o||c(e,t)||(f=!f),!f)if(u||o+s!=="//"){if(u===i&&o+s==="\r\n"){t++,u=!1,m+=r(e,a,t),a=t;continue}if(u===i&&"\n"===o)u=!1,m+=r(e,a,t),a=t;else{if(!u&&o+s==="/*"){m+=e.slice(a,t),a=t,u=l,t++;continue}if(u===l&&o+s==="*/"){t++,u=!1,m+=r(e,a,t+1),a=t+1;continue}n&&!u&&(-1!==p?"}"===o||"]"===o?(m+=e.slice(a,t),g+=r(m,0,1)+m.slice(1),m="",a=t,p=-1):" "!==o&&"\t"!==o&&"\r"!==o&&"\n"!==o&&(m+=e.slice(a,t),a=t,p=-1):","===o&&(g+=m+e.slice(a,t),m="",a=t,p=t))}}else m+=e.slice(a,t),a=t,u=i,t++}return g+m+(u?r(e.slice(a)):e.slice(a))}}}]);
//# sourceMappingURL=1322.45976364d226a5d9.js.map