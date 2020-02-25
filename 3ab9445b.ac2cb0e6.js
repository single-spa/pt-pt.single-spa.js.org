(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return s}));var a=n(1),i=n(9),o=(n(0),n(360)),p={id:"ecosystem-backbone",title:"single-spa-backbone",sidebar_label:"Backbone"},r=[{value:"NPM package",id:"npm-package",children:[]},{value:"Quickstart",id:"quickstart",children:[{value:"Option 1: Using <code>RequireJS</code> with <code>data-main</code>",id:"option-1-using-requirejs-with-data-main",children:[]},{value:"Option 2: Using <code>RequireJS</code> without <code>data-main</code>",id:"option-2-using-requirejs-without-data-main",children:[]},{value:"Option 3: Load Backbone app using production build",id:"option-3-load-backbone-app-using-production-build",children:[]}]},{value:"Options",id:"options",children:[{value:"Note : Out of AppWithRequire, AppWithBackboneJs and  App only one is required",id:"note--out-of-appwithrequire-appwithbackbonejs-and--app-only-one-is-required",children:[]}]}],c={rightToc:r},l="wrapper";function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(l,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A single-spa helper library which provides lifecycle events for building single-spa applications using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://backbonejs.org/"}),"Backbone"),"."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@emtecinc/single-spa-backbone"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/@emtecinc/single-spa-backbone.svg",alt:"npm Package"}))),"\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/emtecinc/single-spa-backbone/blob/master/LICENSE"}),Object(o.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/npm/l/@emtecinc/single-spa-backbone.svg",alt:"License"})))),Object(o.b)("p",null,"There are mostly three styles of creating backbone applications"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://requirejs.org/"}),"RequireJS")," which will loads the application and all it's dependencies, including the templates loaded using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://handlebarsjs.com/"}),"Handlebars"),", ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/requirejs/text"}),"RequireJS:Text")," or any other engine. "),Object(o.b)("p",{parentName:"li"},"If your application is written using this style, then you will have to pass the ",Object(o.b)("inlineCode",{parentName:"p"},"AppWithRequire")," parameter as options in the plugin, and choose the flavour to load the app, either through ",Object(o.b)("inlineCode",{parentName:"p"},"data-main")," attribute or without it.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://backbonejs.org/"}),"Backbone")," and ApplicationPath (Entry point of application) directly as script elements and optionally loading other dependencies.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Loading a single application bundle which includes application dependencies like i.e. Backbone, Require, Underscore, Jquery etc. "))),Object(o.b)("h2",{id:"npm-package"},"NPM package"),Object(o.b)("p",null,"npm install --save @emtecinc/single-spa-backbone"),Object(o.b)("p",null,"The npm package can be ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/@emtecinc/single-spa-backbone"}),"found here"),". "),Object(o.b)("h2",{id:"quickstart"},"Quickstart"),Object(o.b)("h3",{id:"option-1-using-requirejs-with-data-main"},"Option 1: Using ",Object(o.b)("inlineCode",{parentName:"h3"},"RequireJS")," with ",Object(o.b)("inlineCode",{parentName:"h3"},"data-main")),Object(o.b)("p",null,"First, in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa/blob/master/docs/applications.md#registered-applications"}),"single-spa application"),", run ",Object(o.b)("inlineCode",{parentName:"p"},"npm install --save @emtec/single-spa-backbone"),". Then, create an entry file for application like below, assuming the application has some ",Object(o.b)("inlineCode",{parentName:"p"},"BasePath")," with ",Object(o.b)("inlineCode",{parentName:"p"},"AppPath")," and `RequireJsPath' being relative to the base path."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import singleSpaBackbone from '@emtecinc/single-spa-backbone';\n\nconst backBoneLifecycles = singleSpaBackbone({\n    BasePath: 'appBasePath',\n    AppWithRequire:\n    {\n        IsDataMain: true,\n        AppPath: 'src/app',\n        RequireJsPath: 'lib/require.js'\n    },\n    DomElementSetter: domElementSetter\n});\n\nexport const bootstrap = [\n    backBoneLifecycles.bootstrap,\n];\n\nexport const mount = [\n    backBoneLifecycles.mount,\n];\n\nexport const unmount = [\n    backBoneLifecycles.unmount,\n];\n\n\nfunction domElementSetter() {\n\n    //use the same element id to render into, in the backbone app\n    let el = document.getElementById('shell-container');\n    if (!el) {\n        el = document.createElement('div');\n        el.id = 'shell-container';\n        document.body.appendChild(el);\n    }\n\n}\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"DomElementSetter")," gives you a provision to hook up your callback, and can be used to create a container element in the dom which will be used to load the app."),Object(o.b)("p",null,"Please note that this hook up is just a setter and don't expect you to return a value. You need to explicitly use the same element #id in the backbone application to use it as app region or container."),Object(o.b)("h3",{id:"option-2-using-requirejs-without-data-main"},"Option 2: Using ",Object(o.b)("inlineCode",{parentName:"h3"},"RequireJS")," without ",Object(o.b)("inlineCode",{parentName:"h3"},"data-main")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"IsDataMain")," will be set to ",Object(o.b)("inlineCode",{parentName:"p"},"false")," in this case"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import singleSpaBackbone from '@emtecinc/single-spa-backbone';\n\nconst backBoneLifecycles = singleSpaBackbone({\n    BasePath: 'appBasePath',\n    AppWithBackboneJs:\n    {\n        AppPath: 'src/app',\n        BackboneJsPath: 'lib/backbone.js'\n    },\n    DomElementSetter: domElementSetter\n});\n\nexport const bootstrap = backBoneLifecycles.bootstrap;\n\nexport const mount = backBoneLifecycles.mount;\n\nexport const unmount = backBoneLifecycles.unmount;\n\nfunction domElementSetter() {\n\n    //use the same element id to render into, in the backbone app\n    let el = document.getElementById('shell-container');\n    if (!el) {\n        el = document.createElement('div');\n        el.id = 'shell-container';\n        document.body.appendChild(el);\n    }\n\n}\n")),Object(o.b)("h3",{id:"option-3-load-backbone-app-using-production-build"},"Option 3: Load Backbone app using production build"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import singleSpaBackbone from '@emtecinc/single-spa-backbone';\n\nconst backBoneLifecycles = singleSpaBackbone({\n    BasePath: 'appBasePath',\n    App:\n    {\n        AppPath: 'src/app'\n    },\n    DomElementSetter: domElementSetter\n});\n\nexport const bootstrap = backBoneLifecycles.bootstrap;\n\nexport const mount = backBoneLifecycles.mount;\n\nexport const unmount = backBoneLifecycles.unmount;\n\n\nfunction domElementSetter() {\n\n    //use the same element id to render into, in the backbone app\n    let el = document.getElementById('shell-container');\n    if (!el) {\n        el = document.createElement('div');\n        el.id = 'shell-container';\n        document.body.appendChild(el);\n    }\n\n}\n")),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("p",null,"All options are passed to single-spa-backbone via the ",Object(o.b)("inlineCode",{parentName:"p"},"userOptions")," parameter when calling ",Object(o.b)("inlineCode",{parentName:"p"},"singleSpaBackbone(userOptions)"),". The following properties are available:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"BasePath")," (required) : The base path of the backbone application. Mostly it will be the public path from where the app is server and other paths will be relative to this. This parameter expects a string type.\noptional")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"AppWithRequire")," (required) : This parameter takes an object and expects below properties:\n",Object(o.b)("em",{parentName:"p"}," ",Object(o.b)("inlineCode",{parentName:"em"},"IsDataMain")," (optional) : This parameter takes a boolean value and is used to specify whether require js will use ",Object(o.b)("inlineCode",{parentName:"em"},"data-main")," to load the app.\n")," ",Object(o.b)("inlineCode",{parentName:"p"},"AppPath")," (required) : This parameter takes a string value and specifies the path of javascript file, which is entry point of your application and will be booted up using RequireJs. The path is relative to BasePath.\n",Object(o.b)("em",{parentName:"p"}," ",Object(o.b)("inlineCode",{parentName:"em"},"RequireJsPath")," (required) : This parameter takes a string value and takes the path of the RequireJs file and is relative to BasePath.\n")," ",Object(o.b)("inlineCode",{parentName:"p"},"DependenciesJsPaths")," (optional) : This is an optional parameter takes an array of strings. It can be used to optionally provide a list of javascript path which you want to load in the browser.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"AppWithBackboneJs")," (optional) : This parameter takes an object and expects below properties:\n",Object(o.b)("em",{parentName:"p"}," ",Object(o.b)("inlineCode",{parentName:"em"},"AppPath")," (required) : This parameter takes a string value and specifies the path of javascript file, which is entry point of your application and will be booted up using Backbone Js. The path is relative to BasePath.\n")," ",Object(o.b)("inlineCode",{parentName:"p"},"BackboneJsPath")," (required) : This parameter takes a string value and takes the path of the Backbone Js file and is relative to BasePath.\n* ",Object(o.b)("inlineCode",{parentName:"p"},"DependenciesJsPaths")," (optional) : This is an optional parameter takes an array of strings. It can be used to optionally provide a list of javascript path which you want to load in the browser.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"App")," (optional) : This parameter takes an object and expects below properties:\n* ",Object(o.b)("inlineCode",{parentName:"p"},"AppPath")," (required) : This parameter takes a string value and specifies the path of javascript file, which is production build of your backbone application. The path is relative to BasePath."))),Object(o.b)("h3",{id:"note--out-of-appwithrequire-appwithbackbonejs-and--app-only-one-is-required"},"Note : Out of AppWithRequire, AppWithBackboneJs and  App only one is required"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DomElementSetter")," (optional) : This is an optional parameter and can be mostly used to create a dom element, whose id can be later used in the backbone app to load the application. However, you can freely use this callback for any other purpose. It is called before anything else.")))}s.isMDXComponent=!0},360:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a),o=i.a.createContext({}),p=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},r=function(e){var t=p(e.components);return i.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=p(n),b=a,d=s[r+"."+b]||s[b]||l[b]||o;return n?i.a.createElement(d,Object.assign({},{ref:t},c,{components:n})):i.a.createElement(d,Object.assign({},{ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=s;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:a,p[1]=r;for(var b=2;b<o;b++)p[b]=n[b];return i.a.createElement.apply(null,p)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);