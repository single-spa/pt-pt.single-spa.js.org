(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{187:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return o})),n.d(a,"rightToc",(function(){return s})),n.d(a,"default",(function(){return b}));var l=n(1),t=n(9),i=(n(0),n(360)),o={id:"ecosystem-leaked-globals",title:"single-spa-leaked-globals",sidebar_label:"Leaked globals"},s=[{value:"What single-spa-leaked-globals does",id:"what-single-spa-leaked-globals-does",children:[]},{value:"Before using single-spa-leaked-globals",id:"before-using-single-spa-leaked-globals",children:[]},{value:"Limitations",id:"limitations",children:[]},{value:"Installation",id:"installation",children:[{value:"Via npm",id:"via-npm",children:[]},{value:"Via cdn",id:"via-cdn",children:[]}]},{value:"Usage",id:"usage",children:[]},{value:"API / Options",id:"api--options",children:[]}],r={rightToc:s},c="wrapper";function b(e){var a=e.components,n=Object(t.a)(e,["components"]);return Object(i.b)(c,Object(l.a)({},r,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(l.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-leaked-globals"}),"single-spa-leaked-globals")," is a helper library for dealing with single-spa-applications\nthat depend on global variables. Such applications are usually applications that use AngularJS, Backbone, or other older frameworks\nthat were popular when ES modules were not yet available."),Object(i.b)("h2",{id:"what-single-spa-leaked-globals-does"},"What single-spa-leaked-globals does"),Object(i.b)("p",null,"single-spa-leaked-globals will remove specific global variables from ",Object(i.b)("inlineCode",{parentName:"p"},"window")," during your application's\n",Object(i.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/building-applications.html#unmount"}),"unmount lifecycle"),", and add them back to ",Object(i.b)("inlineCode",{parentName:"p"},"window")," during your application's\n",Object(i.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/building-applications.html#mount"}),"mount lifecycle"),"."),Object(i.b)("h2",{id:"before-using-single-spa-leaked-globals"},"Before using single-spa-leaked-globals"),Object(i.b)("p",null,"It might be okay for single-spa applications to leak some global variables. Those leaked global variables could be harmless. Below are some\nsituations where using single-spa-leaked-globals could be useful. If your situation is not listed, consider not using single-spa-leaked-globals."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Your applications are accidentally sharing global variables and the order in which they are mounted matters. For example, the jQuery ",Object(i.b)("inlineCode",{parentName:"li"},"$")," variable\nis available at the start, but app1 installs a jQuery plugin that app2 assumes is there. If app2 is mounted\nbefore app1, you might get an error because the jQuery plugin is not installed. In that situation, the best solution is maybe to install\nthe jQuery plugin inside of your ",Object(i.b)("a",Object(l.a)({parentName:"li"},{href:"/docs/configuration.html"}),"single-spa config"),". But if that's not desireable, you can use single-spa-leaked-globals\nto manage two separate versions of jQuery -- one for app1 and one for app2."),Object(i.b)("li",{parentName:"ol"},"Your applications require different versions of the same global variable. For example, consider when app1 depends on\nan ",Object(i.b)("a",Object(l.a)({parentName:"li"},{href:"https://underscorejs.org/"}),"underscorejs")," ",Object(i.b)("inlineCode",{parentName:"li"},"_")," global variable and app2 depends on a ",Object(i.b)("a",Object(l.a)({parentName:"li"},{href:"https://lodash.com/"}),"lodash")," ",Object(i.b)("inlineCode",{parentName:"li"},"_")," global variable.\nThey both need a global ",Object(i.b)("inlineCode",{parentName:"li"},"_")," variable, but expect different functions to be available on it. The same could be true for different versions of the\nsame library, such as lodash 3 vs lodash 4. In those situations, you can use single-spa-leaked-globals to make sure the ",Object(i.b)("inlineCode",{parentName:"li"},"_")," that is available\nfor app1 and app2 is the correct one.")),Object(i.b)("h2",{id:"limitations"},"Limitations"),Object(i.b)("p",null,"single-spa-leaked-globals cannot change the global nature of global dependencies. Only one instance of the global variable can be on the\n",Object(i.b)("inlineCode",{parentName:"p"},"window")," at a time. ",Object(i.b)("strong",{parentName:"p"},"This means that you probably can only have one application mounted at a time that depends on that global variable."),"\nIf two applications depend on the same global variable and are ",Object(i.b)("a",Object(l.a)({parentName:"p"},{href:"docs/configuration.html#activity-function"}),"active")," at the same time,\nsingle-spa-leaked-globals won't work for you."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("h3",{id:"via-npm"},"Via npm"),Object(i.b)("pre",null,Object(i.b)("code",Object(l.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save single-spa-leaked-globals\n\n# Or\n\nyarn add single-spa-leaked-globals\n")),Object(i.b)("h3",{id:"via-cdn"},"Via cdn"),Object(i.b)("p",null,"You can also use single-spa-leaked-globals via CDN, ironically as a global variable itself:"),Object(i.b)("pre",null,Object(i.b)("code",Object(l.a)({parentName:"pre"},{className:"language-html"}),'<script src="https://cdn.jsdelivr.net/npm/single-spa-leaked-globals"><\/script>\n')),Object(i.b)("p",null,"Note that you should probably lock down the version of the library to avoid accidentally upgrading. See\n",Object(i.b)("a",Object(l.a)({parentName:"p"},{href:"https://cdn.jsdelivr.net/npm/single-spa-leaked-globals/"}),"https://cdn.jsdelivr.net/npm/single-spa-leaked-globals/")," to find the latest version."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"The single-spa-leaked-globals library is often used in conjunction with another helper library, such as\nsingle-spa-angularjs or single-spa-backbone. As such, you'll want to\n",Object(i.b)("a",Object(l.a)({parentName:"p"},{href:"/docs/building-applications.html#registered-application-lifecycle"}),"export an array")," for your lifecycle functions\ninstead of exporting just a function."),Object(i.b)("pre",null,Object(i.b)("code",Object(l.a)({parentName:"pre"},{className:"language-js"}),"import singleSpaLeakedGlobals from 'single-spa-leaked-globals';\n\n// Use single-spa-angularjs, single-spa-backbone, etc to get your framework specific lifecycles\nconst frameworkLifecycles = ...\n\nconst leakedGlobalsLifecycles = singleSpaLeakedGlobals({\n  globalVariableNames: ['$', 'jQuery', '_'],\n})\n\nexport const bootstrap = [\n  leakedGlobalsLifecycles.bootstrap,\n  frameworkLifecycles.bootstrap,\n]\n\nexport const mount = [\n  // Make sure leaked globals lifecycles' mount function is **before** other lifecycles' mount\n  // This is so the global vars are available when the framework mounts\n  leakedGlobalsLifecycles.mount,\n  frameworkLifecycles.mount,\n]\n\nexport const unmount = [\n  leakedGlobalsLifecycles.mount,\n  // Make sure leaked globals lifecycles' unmount function is **after** other lifecycles' unmount\n  // This is so the global vars are still available during the framework unmount lifecycle function.\n  frameworkLifecycles.unmount,\n]\n")),Object(i.b)("p",null,"If you're using single-spa-leaked-globals as a global variable itself:"),Object(i.b)("pre",null,Object(i.b)("code",Object(l.a)({parentName:"pre"},{className:"language-js"}),"const leakedGlobalsLifecycles = window.singleSpaLeakedGlobals.default({\n  globalVariableNames: ['_'],\n})\n")),Object(i.b)("h2",{id:"api--options"},"API / Options"),Object(i.b)("p",null,"single-spa-leaked-globals is called with an object with the following properties:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"globalVariableNames")," (required): An array of strings. Each string is the name of a global variable that should\nbe removed when the application is unmounted, and added back when the application is mounted.")))}b.isMDXComponent=!0},360:function(e,a,n){"use strict";n.d(a,"a",(function(){return s})),n.d(a,"b",(function(){return p}));var l=n(0),t=n.n(l),i=t.a.createContext({}),o=function(e){var a=t.a.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):Object.assign({},a,e)),n},s=function(e){var a=o(e.components);return t.a.createElement(i.Provider,{value:a},e.children)};var r="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},b=Object(l.forwardRef)((function(e,a){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,r=function(e,a){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&-1===a.indexOf(l)&&(n[l]=e[l]);return n}(e,["components","mdxType","originalType","parentName"]),b=o(n),p=l,d=b[s+"."+p]||b[p]||c[p]||i;return n?t.a.createElement(d,Object.assign({},{ref:a},r,{components:n})):t.a.createElement(d,Object.assign({},{ref:a},r))}));function p(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s[r]="string"==typeof e?e:l,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return t.a.createElement.apply(null,o)}return t.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);