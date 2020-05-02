(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{231:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(1),i=n(9),o=(n(0),n(299)),p={id:"configuration",title:"Using single-spa-config",sidebar_label:"single-spa config"},l=[{value:"Index.html file",id:"indexhtml-file",children:[]},{value:"Registering applications",id:"registering-applications",children:[{value:"Using arguments",id:"using-arguments",children:[]},{value:"Using configuration object",id:"using-configuration-object",children:[]}]},{value:"Calling singleSpa.start()",id:"calling-singlespastart",children:[]},{value:"Two registered applications simultaneously??",id:"two-registered-applications-simultaneously",children:[]}],r={rightToc:l},c="wrapper";function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(c,Object(a.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The single spa root config consists of the following:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The root HTML file that is shared by all single-spa applications."),Object(o.b)("li",{parentName:"ol"},"the javascript that calls ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api.html#registerapplication"}),Object(o.b)("inlineCode",{parentName:"a"},"singleSpa.registerApplication()")),".")),Object(o.b)("p",null,"Your root config exists only to start up the single-spa applications."),Object(o.b)("h2",{id:"indexhtml-file"},"Index.html file"),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://single-spa-playground.org/playground/html-file"}),"this example root config")," for what a root HTML file looks like.\nNotice how it does not have any divs or buttons, but just calls ",Object(o.b)("inlineCode",{parentName:"p"},"registerApplication()"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"You do not have to use SystemJS when using single-spa"),", but many examples and tutorials will encourage you to do so because\nit allows you to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/separating-applications.html"}),"independently deploy")," your applications."),Object(o.b)("h2",{id:"registering-applications"},"Registering applications"),Object(o.b)("p",null,"You must register ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/building-applications"}),"applications")," with single-spa so it knows how and when to\ninitiate, load, mount, and unmount. Registration most commonly occurs inside of the single spa config, but\ndoes not have to. Note that if an application is registered from within another application, that no hierarchy\nwill be maintained between the applications. Instead, the applications will be siblings and will be mounted\nand unmounted according to their own activity functions."),Object(o.b)("p",null,"In order to register an application, call the ",Object(o.b)("inlineCode",{parentName:"p"},"registerApplication")," function. Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// single-spa-config.js\nimport { registerApplication, start } from 'single-spa';\n\n// Simple usage\nregisterApplication(\n  'app2',\n  () => import('src/app2/main.js'),\n  (location) => location.pathname.startsWith('/app2'),\n  {some: 'value'}\n);\n\n// Config with more expressive API\nregisterApplication({\n  name: 'app1',\n  app: () => import('src/app1/main.js'),\n  activeWhen: '/app1',\n  customProps: {\n    some: 'value',\n  }\n);\n\nstart();\n")),Object(o.b)("h3",{id:"using-arguments"},"Using arguments"),Object(o.b)("h4",{id:"application-name"},"Application name"),Object(o.b)("p",null,"The first argument to ",Object(o.b)("inlineCode",{parentName:"p"},"registerApplication")," must be a string name."),Object(o.b)("h4",{id:"loading-function-or-application"},"Loading Function or Application"),Object(o.b)("p",null,"The second argument to ",Object(o.b)("inlineCode",{parentName:"p"},"registerApplication")," must be either a function that returns a promise ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#loading-function"}),"loading function")," or the resolved Application."),Object(o.b)("h5",{id:"application-as-second-argument"},"Application as second argument"),Object(o.b)("p",null,"Optionally for the second argument you can use the resolved Application, consisting of an object with the lifecycle methods.\nThis allows you import the Application from another file or define applications inline in your single-spa-config"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const application = {\n  bootstrap: () => Promise.resolve(), //bootstrap function\n  mount: () => Promise.resolve(), //mount function\n  unmount: () => Promise.resolve(), //unmount function\n}\nregisterApplication('applicatonName', application, activityFunction)\n\n")),Object(o.b)("h5",{id:"loading-function"},"Loading function"),Object(o.b)("p",null,"The second argument to ",Object(o.b)("inlineCode",{parentName:"p"},"registerApplication")," must be a function that returns a promise (or an ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://ponyfoo.com/articles/understanding-javascript-async-await"}),'"async function"'),").\nThe function will be called with no arguments when it's time to load the application for the first time. The returned\npromise must be resolved with the application. The most common implementation of a loading function is an import call:\n",Object(o.b)("inlineCode",{parentName:"p"},"() => import('/path/to/application.js')")),Object(o.b)("h4",{id:"activity-function"},"Activity function"),Object(o.b)("p",null,"The third argument to ",Object(o.b)("inlineCode",{parentName:"p"},"registerApplication")," must be a pure function, the function is provided ",Object(o.b)("inlineCode",{parentName:"p"},"window.location")," as the first argument, and returns a truthy\nvalue whenever the application should be active. Most commonly, the activity function determines if an application\nis active by looking at ",Object(o.b)("inlineCode",{parentName:"p"},"window.location"),"/the first param."),Object(o.b)("p",null,"Another way of looking at this is that single-spa is a top-level router that has a lot of applications that have their own sub-router."),Object(o.b)("p",null,"single-spa will call each application's activity function under the following scenarios:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"hashchange")," or ",Object(o.b)("inlineCode",{parentName:"li"},"popstate")," event"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pushState")," or ",Object(o.b)("inlineCode",{parentName:"li"},"replaceState")," is called"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api#triggerappchange"}),Object(o.b)("inlineCode",{parentName:"a"},"triggerAppChange"))," api is called on single-spa"),Object(o.b)("li",{parentName:"ul"},"Whenever the ",Object(o.b)("inlineCode",{parentName:"li"},"checkActivityFunctions")," method is called")),Object(o.b)("h4",{id:"custom-props"},"Custom props"),Object(o.b)("p",null,"The optional fourth argument to ",Object(o.b)("inlineCode",{parentName:"p"},"registerApplication")," is ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./building-applications#custom-props"}),"custom props")," that are passed to the application's single-spa lifecycle functions. The custom props may be either an object or a function that returns an object. Custom prop functions are called with the application name and current ",Object(o.b)("inlineCode",{parentName:"p"},"window.location")," as arguments."),Object(o.b)("h3",{id:"using-configuration-object"},"Using configuration object"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"singleSpa.registerApplication({\n  name: 'myApp',\n  app: () => import('src/myApp/main.js'),\n  activeWhen: ['/myApp', (location) => location.pathname.startsWith('/some/other/path')],\n  customProps: {\n    some: 'value',\n  },\n});\n\nsingleSpa.registerApplication({\n  name: 'myApp',\n  app: () => import('src/myApp/main.js'),\n  activeWhen: ['/myApp', (location) => location.pathname.startsWith('/some/other/path')],\n  customProps: (name, location) => ({\n    some: 'value',\n  }),\n});\n")),Object(o.b)("h4",{id:"configname"},"config.name"),Object(o.b)("p",null,"Must be a string name"),Object(o.b)("h4",{id:"configapp"},"config.app"),Object(o.b)("p",null,"The definition of your app, which can be an object with single-spa lifecycle\nmethods, or a loading function, the same as the second argument on the arguments API"),Object(o.b)("h4",{id:"configactivewhen"},"config.activeWhen"),Object(o.b)("p",null,"Can be an activity function, like the arguments API, a path prefix or an array\nwith both. Since the most common use case is to look at the ",Object(o.b)("inlineCode",{parentName:"p"},"window.location")," and match the URL with a\nprefix, we decided to do this for you!"),Object(o.b)("h4",{id:"path-prefix"},"Path prefix"),Object(o.b)("p",null,"The path prefix will match the start of your URL, allowing everything after the\nprefix. Examples:"),Object(o.b)("dl",null,Object(o.b)("dt",null,"'/app1'"),Object(o.b)("dd",null,"\u2705 https://app.com/app1"),Object(o.b)("dd",null,"\u2705 https://app.com/app1/anything/everything"),Object(o.b)("dd",null,"\ud83d\udeab https://app.com/app2"),Object(o.b)("dt",null,"'/users/:userId/profile'"),Object(o.b)("dd",null,"\u2705 https://app.com/users/123/profile"),Object(o.b)("dd",null,"\u2705 https://app.com/users/123/profile/sub-profile/"),Object(o.b)("dd",null,"\ud83d\udeab https://app.com/users//profile/sub-profile/"),Object(o.b)("dd",null,"\ud83d\udeab https://app.com/users/profile/sub-profile/"),Object(o.b)("dt",null,"'/pathname/#/hash'"),Object(o.b)("dd",null,"\u2705 https://app.com/pathname/#/hash"),Object(o.b)("dd",null,"\u2705 https://app.com/pathname/#/hash/route/nested"),Object(o.b)("dd",null,"\ud83d\udeab https://app.com/pathname#/hash/route/nested"),Object(o.b)("dd",null,"\ud83d\udeab https://app.com/pathname#/another-hash"),Object(o.b)("dt",null,"['/pathname/#/hash', '/app1']"),Object(o.b)("dd",null,"\u2705 https://app.com/pathname/#/hash/route/nested"),Object(o.b)("dd",null,"\u2705 https://app.com/app1/anything/everything"),Object(o.b)("dd",null,"\ud83d\udeab https://app.com/pathname/app1"),Object(o.b)("dd",null,"\ud83d\udeab https://app.com/app2")),Object(o.b)("h4",{id:"configcustomprops"},"config.customProps"),Object(o.b)("p",null,"The optional ",Object(o.b)("inlineCode",{parentName:"p"},"customProps")," property provides ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"./building-applications#custom-props"}),"custom props")," that are passed to the application's single-spa lifecycle functions. The custom props may be either an object or a function that returns an object. Custom prop functions are called with the application name and current ",Object(o.b)("inlineCode",{parentName:"p"},"window.location")," as arguments."),Object(o.b)("h2",{id:"calling-singlespastart"},"Calling singleSpa.start()"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api#start"}),Object(o.b)("inlineCode",{parentName:"a"},"start()")," api")," ",Object(o.b)("strong",{parentName:"p"},"must")," be called by your single spa config in order for\napplications to actually be mounted. Before ",Object(o.b)("inlineCode",{parentName:"p"},"start")," is called, applications will be loaded, but not bootstrapped/mounted/unmounted.\nThe reason for ",Object(o.b)("inlineCode",{parentName:"p"},"start")," is to give you control over performance. For example, you may want to register applications\nimmediately (to start downloading the code for the active ones), but not actually mount the applications\nuntil an initial AJAX request (maybe to get information about the logged in user) has been completed. In that case,\nthe best performance is achieved by calling ",Object(o.b)("inlineCode",{parentName:"p"},"registerApplication")," immediately, but calling ",Object(o.b)("inlineCode",{parentName:"p"},"start")," after\nthe AJAX request is completed."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"//single-spa-config.js\nimport { start } from 'single-spa';\n\n/* Calling start before registering apps means that single-spa can immediately mount apps, without\n * waiting for any initial setup of the single page app.\n */\nstart();\n\n// Register applications....\n")),Object(o.b)("h2",{id:"two-registered-applications-simultaneously"},"Two registered applications simultaneously??"),Object(o.b)("p",null,"Yep, it's possible. And it's actually not that scary if you do it right. And once you do,\nit's really really powerful. One approach to do this is to create a ",Object(o.b)("inlineCode",{parentName:"p"},'<div id="app-name"></div>')," for each app,\nso that they never try to modify the same DOM at the same time."))}s.isMDXComponent=!0},299:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a),o=i.a.createContext({}),p=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=p(e.components);return i.a.createElement(o.Provider,{value:t},e.children)};var r="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,r=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=p(n),b=a,u=s[l+"."+b]||s[b]||c[b]||o;return n?i.a.createElement(u,Object.assign({},{ref:t},r,{components:n})):i.a.createElement(u,Object.assign({},{ref:t},r))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[r]="string"==typeof e?e:a,p[1]=l;for(var b=2;b<o;b++)p[b]=n[b];return i.a.createElement.apply(null,p)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);