(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(183)),i={id:"layout-overview",title:"Layout Engine",sidebar_label:"Overview"},l={unversionedId:"layout-overview",id:"version-5.x/layout-overview",isDocsHomePage:!1,title:"Layout Engine",description:"Introduction",source:"@site/versioned_docs/version-5.x/layout-overview.md",slug:"/layout-overview",permalink:"/docs/layout-overview",editUrl:"https://github.com/single-spa/single-spa.js.org/blob/master/website/versioned_docs/version-5.x/layout-overview.md",version:"5.x",sidebar_label:"Overview",sidebar:"version-5.x/docs",previous:{title:"Parcels",permalink:"/docs/parcels-overview"},next:{title:"Layout Definition",permalink:"/docs/layout-definition"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Installation",id:"installation",children:[{value:"Browser / NodeJS support",id:"browser--nodejs-support",children:[]},{value:"Requirements",id:"requirements",children:[]}]},{value:"Basic usage",id:"basic-usage",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introduction"},"Introduction"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-layout/"}),"Github repository")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"single-spa-layout")," npm package is an optional add-on to single-spa. The layout engine provides a routing API that controls your top level routes, applications, and dom elements. Using single-spa-layout makes it easier to accomplish the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"DOM placement and ordering of applications."),Object(r.b)("li",{parentName:"ul"},"Loading UIs when applications are downloaded."),Object(r.b)("li",{parentName:"ul"},"Default routes for Not Found / 404 pages."),Object(r.b)("li",{parentName:"ul"},"Transitions between routes (implementation pending)."),Object(r.b)("li",{parentName:"ul"},"Server side rendering of single-spa applications"),Object(r.b)("li",{parentName:"ul"},"Error pages")),Object(r.b)("p",null,"In the browser, the layout engine performs two major tasks:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Generate ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/#configuration-object"}),"single-spa registration config")," from an HTML Element and/or JSON object."),Object(r.b)("li",{parentName:"ol"},"Listen to ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api/#events"}),"routing events")," to ensure that all DOM elements are laid out correctly before the single-spa applications are mounted.")),Object(r.b)("p",null,"On the server, the layout engine performs two tasks:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Construct a ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/layout-api#constructserverlayout"}),"server layout object")," from an HTML template."),Object(r.b)("li",{parentName:"ol"},"Send an HTML document (HTTP response headers and body) to the browser, based on the server layout object and current route.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"single-spa-layout")," is 3.2kb gzipped (9kb ungzipped)."),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"You only need to install the layout engine into your ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/"}),"root config")," (not in any other application)."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save single-spa-layout\n\n# or\nyarn add single-spa-layout\n")),Object(r.b)("h3",{id:"browser--nodejs-support"},"Browser / NodeJS support"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"single-spa-layout")," works in all browsers supported by single-spa, including IE11. On the server, all NodeJS versions that support ESM are supported."),Object(r.b)("h3",{id:"requirements"},"Requirements"),Object(r.b)("p",null,"You must use single-spa@>=5.4.0 in order for the layout engine to work. Additionally, you may not provide custom ",Object(r.b)("inlineCode",{parentName:"p"},"domElementGetter")," functions for any of your single-spa applications, as those override the configuration within single-spa-layout."),Object(r.b)("h2",{id:"basic-usage"},"Basic usage"),Object(r.b)("p",null,"In your root html file, add a ",Object(r.b)("inlineCode",{parentName:"p"},"<template>")," element to the head. It should have a ",Object(r.b)("inlineCode",{parentName:"p"},"<single-spa-router>")," element that contains ",Object(r.b)("inlineCode",{parentName:"p"},"<route>")," elements, ",Object(r.b)("inlineCode",{parentName:"p"},"<application>")," elements, and any other dom elements:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<html>\n  <head>\n    <template id="single-spa-layout">\n      <single-spa-router>\n        <nav class="topnav">\n          <application name="@organization/nav"></application>\n        </nav>\n        <div class="main-content">\n          <route path="settings">\n            <application name="@organization/settings"></application>\n          </route>\n          <route path="clients">\n            <application name="@organization/clients"></application>\n          </route>\n        </div>\n        <footer>\n          <application name="@organization/footer"></application>\n        </footer>\n      </single-spa-router>\n    </template>\n  </head>\n</html>\n')),Object(r.b)("p",null,"Then inside of your root-config's JavaScript code, add the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { registerApplication, start } from 'single-spa';\nimport {\n  constructApplications,\n  constructRoutes,\n  constructLayoutEngine,\n} from 'single-spa-layout';\n\nconst routes = constructRoutes(document.querySelector('#single-spa-layout'));\nconst applications = constructApplications({\n  routes,\n  loadApp({ name }) {\n    return System.import(name);\n  },\n});\nconst layoutEngine = constructLayoutEngine({ routes, applications });\n\napplications.forEach(registerApplication);\nstart();\n")))}p.isMDXComponent=!0},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||r;return n?o.a.createElement(m,l(l({ref:t},c),{},{components:n})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);