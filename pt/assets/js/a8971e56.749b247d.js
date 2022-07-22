"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2568],{9613:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),s=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,k=u["".concat(i,".").concat(m)]||u[m]||c[m]||l;return a?n.createElement(k,p(p({ref:t},d),{},{components:a})):n.createElement(k,p({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=u;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var s=2;s<l;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9595:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(665),r=a(151),l=(a(9496),a(9613)),p=["components"],o={id:"update",title:"pnpm update"},i=void 0,s={unversionedId:"cli/update",id:"cli/update",title:"pnpm update",description:"Aliases: up, upgrade",source:"@site/i18n/pt/docusaurus-plugin-content-docs/current/cli/update.md",sourceDirName:"cli",slug:"/cli/update",permalink:"/pt/next/cli/update",draft:!1,editUrl:"https://crowdin.com/project/pnpm/pt-BR",tags:[],version:"current",frontMatter:{id:"update",title:"pnpm update"},sidebar:"docs",previous:{title:"pnpm install",permalink:"/pt/next/cli/install"},next:{title:"pnpm remove",permalink:"/pt/next/cli/remove"}},d={},c=[{value:"TL;DR",id:"tldr",level:2},{value:"Op\xe7\xf5es",id:"op\xe7\xf5es",level:2},{value:"--recursive, -r",id:"--recursive--r",level:3},{value:"--latest, -L",id:"--latest--l",level:3},{value:"--global",id:"--global",level:3},{value:"--workspace",id:"--workspace",level:3},{value:"--prod, -P",id:"--prod--p",level:3},{value:"--dev, -D",id:"--dev--d",level:3},{value:"--no-optional",id:"--no-optional",level:3},{value:"--interactive, -i",id:"--interactive--i",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],u={toc:c};function m(e){var t=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Aliases: ",(0,l.kt)("inlineCode",{parentName:"p"},"up"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"upgrade")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"pnpm update")," atualiza os pacotes para suas \xfaltimas vers\xf5es baseando-se no intervalo do vers\xf5es especificado."),(0,l.kt)("p",null,"Quando utilizado sem argumentos, atualiza todas as depend\xeancias. \xc9 poss\xedvel utilizar padr\xf5es para atualizar depend\xeancias espec\xedficas."),(0,l.kt)("h2",{id:"tldr"},"TL;DR"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm up")),(0,l.kt)("td",{parentName:"tr",align:null},"Atualiza todas as depend\xeancias, conforme o intervalo especificado no ",(0,l.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm up --latest")),(0,l.kt)("td",{parentName:"tr",align:null},"Atualiza todas as depend\xeancias, ignorando o intervalo especificado no ",(0,l.kt)("inlineCode",{parentName:"td"},"package.json"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pnpm up foo@2")),(0,l.kt)("td",{parentName:"tr",align:null},"Atualiza ",(0,l.kt)("inlineCode",{parentName:"td"},"foo")," para a \xfaltima vers\xe3o em v2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'pnpm up "@babel/*"')),(0,l.kt)("td",{parentName:"tr",align:null},"Atualiza todas as depend\xeancias do scope ",(0,l.kt)("inlineCode",{parentName:"td"},"@babel"))))),(0,l.kt)("h2",{id:"op\xe7\xf5es"},"Op\xe7\xf5es"),(0,l.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,l.kt)("p",null,"Executa simultaneamente a atualiza\xe7\xe3o em todos os subdiret\xf3rios com ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," (excluindo node_modules)."),(0,l.kt)("p",null,"Exemplos de uso:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm --recursive update\n# updates all packages up to 100 subdirectories in depth\npnpm --recursive update --depth 100\n# update typescript to the latest version in every package\npnpm --recursive update typescript@latest\n")),(0,l.kt)("h3",{id:"--latest--l"},"--latest, -L"),(0,l.kt)("p",null,"Ignora o intervalo de vers\xf5es especificado no ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),". Ao inv\xe9s disso, a vers\xe3o especificada pela tag ",(0,l.kt)("inlineCode",{parentName:"p"},"latest")," ser\xe1 utilizada (potencialmente atualizando os pacotes atrav\xe9s de vers\xf5es major)."),(0,l.kt)("h3",{id:"--global"},"--global"),(0,l.kt)("p",null,"Atualiza pacotes globais."),(0,l.kt)("h3",{id:"--workspace"},"--workspace"),(0,l.kt)("p",null,"Tenta linkar todos os pacotes do workspace. As vers\xf5es s\xe3o atualizadas para corresponder \xe0s vers\xf5es dos pacotes dentro do workspace."),(0,l.kt)("p",null,"Se pacotes espec\xedficos forem atualizados, o comando falhar\xe1 se alguma das depend\xeancias atualizadas n\xe3o for encontrada dentro do workspace. Por exemplo, o seguinte comando falhar\xe1 se ",(0,l.kt)("inlineCode",{parentName:"p"},"express")," n\xe3o for um pacote do workspace:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm up -r --workspace express\n")),(0,l.kt)("h3",{id:"--prod--p"},"--prod, -P"),(0,l.kt)("p",null,"Atualiza apenas pacotes em ",(0,l.kt)("inlineCode",{parentName:"p"},"dependencies")," e ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--dev--d"},"--dev, -D"),(0,l.kt)("p",null,"Atualize apenas pacotes em ",(0,l.kt)("inlineCode",{parentName:"p"},"devDependencies"),"."),(0,l.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,l.kt)("p",null,"N\xe3o atualiza pacotes em ",(0,l.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),(0,l.kt)("h3",{id:"--interactive--i"},"--interactive, -i"),(0,l.kt)("p",null,"Exibe depend\xeancias desatualizadas e seleciona quais atualizar."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/pt/next/filtering"},"Leia mais sobre filtragem.")))}m.isMDXComponent=!0}}]);