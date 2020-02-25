(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{209:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(1),o=t(9),i=(t(0),t(360)),a={id:"ecosystem-inferno",title:"single-spa-inferno",sidebar_label:"Inferno"},l=[{value:"Quickstart",id:"quickstart",children:[]},{value:"Options",id:"options",children:[]}],p={rightToc:l},c="wrapper";function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)(c,Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"single-spa-inferno is a helper library that helps implement ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"configuration#registering-applications"}),"single-spa registered application")," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/4.x/building-applications#registered-application-lifecycle"}),"lifecycle functions")," (bootstrap, mount and unmount) for for use with ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://infernojs.org/"}),"Inferno"),". Check out the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-inferno"}),"single-spa-inferno github"),"."),Object(i.b)("h2",{id:"quickstart"},"Quickstart"),Object(i.b)("p",null,"First, in the application, run ",Object(i.b)("inlineCode",{parentName:"p"},"npm install --save single-spa-inferno"),". Then, add the following to your application's entry file."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import Inferno from 'inferno';\nimport rootComponent from './path-to-root-component.js';\nimport singleSpaInferno from 'single-spa-inferno';\n\nconst infernoLifecycles = singleSpaInferno({\n  Inferno,\n  createElement,\n  rootComponent,\n  domElementGetter: () => document.getElementById('main-content'),\n});\n\nexport const bootstrap = infernoLifecyles.bootstrap;\nexport const mount = infernoLifecyles.mount;\nexport const unmount = infernoLifecyles.unmount;\n")),Object(i.b)("h2",{id:"options"},"Options"),Object(i.b)("p",null,"All options are passed to single-spa-inferno via the ",Object(i.b)("inlineCode",{parentName:"p"},"opts")," parameter when calling ",Object(i.b)("inlineCode",{parentName:"p"},"singleSpaInferno(opts)"),". The following options are available:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"inferno"),": (required) The main Inferno object, which is generally either exposed onto the window or is available via ",Object(i.b)("inlineCode",{parentName:"li"},"require('inferno')")," or ",Object(i.b)("inlineCode",{parentName:"li"},"import Inferno from 'inferno'"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"createElement"),": (required) The default export from Inferno's ",Object(i.b)("inlineCode",{parentName:"li"},"inferno-create-element")," package."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"rootComponent"),": (required) The top level Inferno component which will be rendered."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"domElementGetter"),": (required) A function that takes in no arguments and returns a DOMElement. This dom element is where the Inferno application will be bootstrapped, mounted, and unmounted.")))}s.isMDXComponent=!0},360:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r),i=o.a.createContext({}),a=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=a(e.components);return o.a.createElement(i.Provider,{value:n},e.children)};var p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),s=a(t),m=r,u=s[l+"."+m]||s[m]||c[m]||i;return t?o.a.createElement(u,Object.assign({},{ref:n},p,{components:t})):o.a.createElement(u,Object.assign({},{ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var m=2;m<i;m++)a[m]=t[m];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);