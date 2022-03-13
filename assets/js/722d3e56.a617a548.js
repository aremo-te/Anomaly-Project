"use strict";(self.webpackChunkanomaly_project=self.webpackChunkanomaly_project||[]).push([[1805],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,f=d["".concat(l,".").concat(p)]||d[p]||m[p]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5360:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(7294),o=n(9960),a=n(3725),i=n(6010),c="cardContainer_woeA",l="cardContainerLink_iOSj",u="cardTitle_pNjP",s="cardDescription_qC_k",m=n(3919),d=n(5999);function p(e){var t=e.href,n=e.children,a=(0,i.Z)("card margin-bottom--lg padding--lg",c,t&&l);return t?r.createElement(o.Z,{href:t,className:a},n):r.createElement("div",{className:a},n)}function f(e){var t=e.href,n=e.icon,o=e.title,a=e.description;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:o},n," ",o),r.createElement("div",{className:(0,i.Z)("text--truncate",s),title:a},a))}function y(e){var t=e.item,n=(0,a.Wl)(t);return r.createElement(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})})}function h(e){var t,n=e.item,o=(0,m.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(null!=(t=n.docId)?t:void 0);return r.createElement(f,{href:n.href,icon:o,title:n.label,description:null==i?void 0:i.description})}function v(e){var t=e.item;switch(t.type){case"link":return r.createElement(h,{item:t});case"category":return r.createElement(y,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.items;return r.createElement("div",{className:"row"},t.map((function(e,t){return r.createElement("article",{key:t,className:"col col--6"},r.createElement(v,{item:e}))})))}},6298:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return y},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=n(5360),c=n(3725),l=["components"],u={sidebar_position:1},s="Starter Guide",m={unversionedId:"anomaly-project-RPG/index",id:"anomaly-project-RPG/index",title:"Starter Guide",description:"All the information you need to understand the RPG!",source:"@site/docs/anomaly-project-RPG/index.md",sourceDirName:"anomaly-project-RPG",slug:"/anomaly-project-RPG/",permalink:"/docs/anomaly-project-RPG/",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Welcome",permalink:"/docs/intro"},next:{title:"Character Creation",permalink:"/docs/anomaly-project-RPG/character-creation"}},d={},p=[],f={toc:p};function y(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"starter-guide"},"Starter Guide"),(0,a.kt)("p",null,"  All the information you need to understand the RPG!"),(0,a.kt)(i.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Currently a Work-in-progress, the mechanics and details of the Anomaly Project RPG are not finished."))),(0,a.kt)("blockquote",null,(0,a.kt)("h3",{parentName:"blockquote",id:"lore-guide"},"Lore Guide"),(0,a.kt)("p",{parentName:"blockquote"},"An overview guide to the background information needed to start.")),(0,a.kt)("blockquote",null,(0,a.kt)("h3",{parentName:"blockquote",id:"rules"},"Rules"),(0,a.kt)("p",{parentName:"blockquote"},"The baseline you should follow to play. (Currently empty documentation)")),(0,a.kt)("blockquote",null,(0,a.kt)("h3",{parentName:"blockquote",id:"character-creation"},"Character Creation"),(0,a.kt)("p",{parentName:"blockquote"},"Start creating your own Anomaly Project TTRPG character! (Currently empty documentation)")))}y.isMDXComponent=!0}}]);