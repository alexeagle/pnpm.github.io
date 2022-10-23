"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1894],{9613:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>d});var r=t(9496);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,p=function(e,n){if(null==e)return{};var t,r,p={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,p=e.mdxType,l=e.originalType,i=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),s=c(t),d=p,f=s["".concat(i,".").concat(d)]||s[d]||u[d]||l;return t?r.createElement(f,o(o({ref:n},m),{},{components:t})):r.createElement(f,o({ref:n},m))}));function d(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var l=t.length,o=new Array(l);o[0]=s;var a={};for(var i in n)hasOwnProperty.call(n,i)&&(a[i]=n[i]);a.originalType=e,a.mdxType="string"==typeof e?e:p,o[1]=a;for(var c=2;c<l;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},1339:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=t(2081),p=t(4604),l=(t(9496),t(9613)),o=["components"],a={id:"uninstall",title:"\u89e3\u9664\u5b89\u88dd pnpm"},i=void 0,c={unversionedId:"uninstall",id:"uninstall",title:"\u89e3\u9664\u5b89\u88dd pnpm",description:"\u79fb\u9664\u5168\u57df\u5b89\u88dd\u7684\u5957\u4ef6",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/uninstall.md",sourceDirName:".",slug:"/uninstall",permalink:"/zh-TW/next/uninstall",draft:!1,editUrl:"https://crowdin.com/project/pnpm/zh-TW",tags:[],version:"current",frontMatter:{id:"uninstall",title:"\u89e3\u9664\u5b89\u88dd pnpm"},sidebar:"docs",previous:{title:"peer \u662f\u5982\u4f55\u88ab\u89e3\u6790\u7684",permalink:"/zh-TW/next/how-peers-are-resolved"},next:{title:"pnpm vs npm",permalink:"/zh-TW/next/pnpm-vs-npm"}},m={},u=[{value:"\u79fb\u9664\u5168\u57df\u5b89\u88dd\u7684\u5957\u4ef6",id:"\u79fb\u9664\u5168\u57df\u5b89\u88dd\u7684\u5957\u4ef6",level:2},{value:"\u79fb\u9664 pnpm CLI",id:"\u79fb\u9664-pnpm-cli",level:2},{value:"\u79fb\u9664\u5168\u57df\u7684\u5167\u5bb9\u53ef\u5b9a\u5740\u7684\u5132\u85cf\u5eab\u3002",id:"\u79fb\u9664\u5168\u57df\u7684\u5167\u5bb9\u53ef\u5b9a\u5740\u7684\u5132\u85cf\u5eab",level:2}],s={toc:u};function d(e){var n=e.components,t=(0,p.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u79fb\u9664\u5168\u57df\u5b89\u88dd\u7684\u5957\u4ef6"},"\u79fb\u9664\u5168\u57df\u5b89\u88dd\u7684\u5957\u4ef6"),(0,l.kt)("p",null,"\u5728\u60a8\u522a\u9664 pnpm CLI \u4e4b\u524d\uff0c\u8acb\u8a18\u5f97\u5148\u79fb\u9664\u6240\u6709 pnpm \u5b89\u88dd\u7684\u5168\u57df\u5957\u4ef6\u3002"),(0,l.kt)("p",null,"\u60f3\u8981\u5217\u51fa\u6240\u6709\u5168\u57df\u5df2\u5b89\u88dd\u7684\u5957\u4ef6\uff0c\u8acb\u57f7\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm ls -g"),"\u3002 \u5169\u7a2e\u65b9\u5f0f\u53ef\u4ee5\u79fb\u9664\u5168\u57df\u5957\u4ef6\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u57f7\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm rm -g <pkg>...")," \u4ee5\u79fb\u9664\u6bcf\u4e00\u500b\u5168\u57df\u5957\u4ef6\u6e05\u55ae\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u57f7\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"pnpm root -g")," \u627e\u5230\u5168\u57df\u76ee\u9304\u7684\u4f4d\u7f6e\u4e26\u624b\u52d5\u79fb\u9664\u5b83\u3002")),(0,l.kt)("h2",{id:"\u79fb\u9664-pnpm-cli"},"\u79fb\u9664 pnpm CLI"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u7368\u7acb\u7684\u8173\u672c\u5b89\u5c08 pnpm\uff0c\u5247\u60a8\u61c9\u8a72\u80fd\u900f\u904e\u79fb\u9664 pnpm \u7684\u6839\u76ee\u9304\u4f86\u79fb\u9664 pnpm CLI\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rm -rf $PNPM_HOME\n")),(0,l.kt)("p",null,"\u60a8\u53ef\u80fd\u9084\u6703\u5e0c\u671b\u6e05\u7406 ",(0,l.kt)("inlineCode",{parentName:"p"},"PNPM_HOME")," \u60a8\u5728 shell \u914d\u7f6e\u6a94\u6848\u4e2d\u7684 env \u8b8a\u6578 (",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.bashrc"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.zshrc")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/.config/fish/config.fish"),")\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528 npm \u5b89\u88dd pnpm\uff0c\u90a3\u9ebc\u60a8\u61c9\u8a72\u4f7f\u7528 npm \u4f86\u79fb\u9664 pnpm\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm rm -g pnpm\n")),(0,l.kt)("h2",{id:"\u79fb\u9664\u5168\u57df\u7684\u5167\u5bb9\u53ef\u5b9a\u5740\u7684\u5132\u85cf\u5eab"},"\u79fb\u9664\u5168\u57df\u7684\u5167\u5bb9\u53ef\u5b9a\u5740\u7684\u5132\u85cf\u5eab\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"rm -rf $(pnpm store path)\n")),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u5728\u975e\u4e3b\u8981\u7684\u78c1\u789f\u4e2d\u4f7f\u7528 pnpm\uff0c\u60a8\u5fc5\u9808\u5728\u60a8\u4f7f\u7528\u904e pnpm \u7684\u6bcf\u500b\u78c1\u789f\u4e2d\u57f7\u884c\u4e0a\u9762\u7684\u6307\u4ee4\u3002 \u56e0\u70ba pnpm \u6703\u5728\u6bcf\u4e00\u500b\u78c1\u789f\u4e2d\u5efa\u7acb\u4e00\u500b\u8a72\u78c1\u789f\u4f7f\u7528\u7684\u5132\u85cf\u5eab\u3002"))}d.isMDXComponent=!0}}]);