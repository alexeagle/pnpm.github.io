"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1853],{9613:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(t),f=i,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||l;return t?r.createElement(d,a(a({ref:n},u),{},{components:t})):r.createElement(d,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9225:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>o,contentTitle:()=>c,metadata:()=>p,toc:()=>u,default:()=>m});var r=t(2245),i=t(5903),l=(t(9496),t(9613)),a=["components"],o={id:"unlink",title:"pnpm unlink"},c=void 0,p={unversionedId:"cli/unlink",id:"cli/unlink",isDocsHomePage:!1,title:"pnpm unlink",description:"\u30b7\u30b9\u30c6\u30e0\u5168\u4f53\u304b\u3089\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30ea\u30f3\u30af\u3092\u89e3\u9664\u3057\u307e\u3059 (pnpm link\u306e\u9006\u3067\u3059) \u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/cli/unlink.md",sourceDirName:"cli",slug:"/cli/unlink",permalink:"/ja/next/cli/unlink",editUrl:"https://crowdin.com/project/pnpm/ja",tags:[],version:"current",frontMatter:{id:"unlink",title:"pnpm unlink"},sidebar:"docs",previous:{title:"pnpm link",permalink:"/ja/next/cli/link"},next:{title:"pnpm import",permalink:"/ja/next/cli/import"}},u=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],s={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u30b7\u30b9\u30c6\u30e0\u5168\u4f53\u304b\u3089\u4f7f\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u3057\u305f\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30ea\u30f3\u30af\u3092\u89e3\u9664\u3057\u307e\u3059 (",(0,l.kt)("a",{parentName:"p",href:"/ja/next/cli/link"},(0,l.kt)("inlineCode",{parentName:"a"},"pnpm link")),"\u306e\u9006\u3067\u3059) \u3002"),(0,l.kt)("p",null,"\u5f15\u6570\u306a\u3057\u3067\u5b9f\u884c\u3057\u305f\u5834\u5408\u3001\u30ea\u30f3\u30af\u3055\u308c\u305f\u3059\u3079\u3066\u306e\u4f9d\u5b58\u95a2\u4fc2\u306e\u30ea\u30f3\u30af\u3092\u89e3\u9664\u3057\u307e\u3059\u3002"),(0,l.kt)("p",null,"This is similar to ",(0,l.kt)("inlineCode",{parentName:"p"},"yarn unlink"),", except pnpm re-installs the dependency after removing the external link."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Unlink in every package found in subdirectories or in every workspace package, when executed inside a ",(0,l.kt)("a",{parentName:"p",href:"/ja/next/workspaces"},"workspace"),"."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/ja/next/filtering"},"Read more about filtering.")))}m.isMDXComponent=!0}}]);