(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{199:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(1),o=a(9),r=(a(0),a(360)),i={id:"devtools",title:"single-spa-inspector",sidebar_label:"Overview"},s=[{value:"Installation links",id:"installation-links",children:[]},{value:"Features",id:"features",children:[]},{value:"Configuring app overlays",id:"configuring-app-overlays",children:[]},{value:"import-map-overrides",id:"import-map-overrides",children:[]}],p={rightToc:s},l="wrapper";function c(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(l,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The single-spa-inspector is a Firefox/Chrome devtools extension to provide utilities for helping with ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://single-spa.js.org"}),"single-spa")," applications. ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-inspector"}),"Github project"),"."),Object(r.b)("p",null,"Requires >= single-spa@4.1."),Object(r.b)("h2",{id:"installation-links"},"Installation links"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://addons.mozilla.org/en-US/firefox/addon/single-spa-inspector/"}),"Firefox")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://chrome.google.com/webstore/detail/single-spa-inspector/emldbibkihanfiaiaghebffnbahjcgcp"}),"Chrome"))),Object(r.b)("p",null,"Note: you can also build and run this locally. See ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#how-to-contribute"}),"how to contribute"),"."),Object(r.b)("h2",{id:"features"},"Features"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"List all registered applications (mounted at top)"),Object(r.b)("li",{parentName:"ul"},"Show all application statuses (statii)"),Object(r.b)("li",{parentName:"ul"},"Force mount and unmount an application"),Object(r.b)("li",{parentName:"ul"},"Show app overlays (see ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#configuring-app-overlays"}),"configuring app overlays")," to enable this feature)"),Object(r.b)("li",{parentName:"ul"},"Provides an interface for adding ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"#import-map-overrides"}),"import-map overrides"))),Object(r.b)("h2",{id:"configuring-app-overlays"},"Configuring app overlays"),Object(r.b)("p",null,'App overlays allow you to hover over a mounted app\'s name and have an "inspect element" type experience which shows where the app is in the DOM. This is especially useful for when multiple apps are mounted at the same time (e.g. in some places Canopy has upwards of 4 apps mounted on a single page/URL!).'),Object(r.b)("p",null,"To add app overlays, find the file where you export your lifecycle functions (e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"bootstrap"),", ",Object(r.b)("inlineCode",{parentName:"p"},"mount"),", ",Object(r.b)("inlineCode",{parentName:"p"},"unmount"),") and add another exported object with the following shape:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'// must be called "devtools"\nexport const devtools = {\n  overlays: {\n    // selectors is required for overlays to work\n    selectors: [\n      // an array of CSS selector strings, meant to be unique ways to identify the outermost container of your app\n      // you can have more than one, for cases like parcels or different containers for differet views\n      "#my-app",\n      ".some-container .app"\n    ],\n    // options is optional\n    options: {\n      // these options allow you some control over how the overlay div looks/behaves\n      // the listed values below are the defaults\n\n      width: "100%",\n      height: "100%",\n      zIndex: 40,\n      position: "absolute",\n      top: 0,\n      left: 0,\n      color: "#000", // the default for this is actually based on the app\'s name, so it\'s dynamic. can be a hex or a CSS color name\n      background: "#000", // the default for this is actually based on the app\'s name, so it\'s dynamic. can be a hex or a CSS color name\n      textBlocks: [\n        // allows you to add additional text to the overlay. for example, you can add the name of the team/squad that owns this app\n        // each string in this array will be in a new div\n        // \'blue squad\', \'is awesome\'\n        // turns into:\n        // <div>blue squad</div><div>is awesome</div>\n      ]\n    }\n  }\n};\n')),Object(r.b)("h2",{id:"import-map-overrides"},"import-map-overrides"),Object(r.b)("p",null,"If your environment uses ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/WICG/import-maps"}),"import-maps"),", single-spa Inspector provides an interface for adding import-map overrides when utilizing the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/joeldenning/import-map-overrides"}),"import-map-overrides")," library. Once the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/joeldenning/import-map-overrides#installation"}),"installation requirements")," for import-map-overrides are completed, you can add, remove, and refresh the page with your overrides."),Object(r.b)("p",null,Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"/static/img/demo-with-importmapoverrides.png",alt:"Example of single-spa Inspector extension with import-maps overrides"}))))}c.isMDXComponent=!0},360:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n),r=o.a.createContext({}),i=function(e){var t=o.a.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},s=function(e){var t=i(e.components);return o.a.createElement(r.Provider,{value:t},e.children)};var p="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},c=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),c=i(a),u=n,b=c[s+"."+u]||c[u]||l[u]||r;return a?o.a.createElement(b,Object.assign({},{ref:t},p,{components:a})):o.a.createElement(b,Object.assign({},{ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<r;u++)i[u]=a[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);