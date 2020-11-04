(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{135:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return c}));var n=a(1),o=a(9),i=(a(0),a(311)),r={id:"layout-definition",title:"Layout Definition",sidebar_label:"Layout Definition"},l=[{value:"HTML Layouts",id:"html-layouts",children:[]},{value:"JSON Layouts",id:"json-layouts",children:[]},{value:"Layout Elements",id:"layout-elements",children:[{value:"<code>&lt;template&gt;</code>",id:"template",children:[]},{value:"<code>&lt;single-spa-router&gt;</code>",id:"single-spa-router",children:[]},{value:"<code>&lt;route&gt;</code>",id:"route",children:[]},{value:"<code>&lt;application&gt;</code>",id:"application",children:[]},{value:"<code>&lt;fragment&gt;</code>",id:"fragment",children:[]},{value:"<code>&lt;assets&gt;</code>",id:"assets",children:[]},{value:"DOM elements",id:"dom-elements",children:[]}]},{value:"Props",id:"props",children:[{value:"JSON",id:"json",children:[]},{value:"HTML",id:"html",children:[]}]},{value:"Loading UIs",id:"loading-uis",children:[]},{value:"Transitions",id:"transitions",children:[]},{value:"Default Routes (404 Not Found)",id:"default-routes-404-not-found",children:[]},{value:"Error UIs",id:"error-uis",children:[]}],s={rightToc:l},p="wrapper";function c(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(p,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A layout is a combination of HTMLElements, routes, and ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/building-applications/"}),"single-spa applications"),". Layout is defined statically in your ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/configuration/"}),"root config")," to handle your top level routes and dom elements. Single-spa-layout should not be used outside of the root config; instead, a UI framework (React, Angular, Vue) should handle layouts within the applications."),Object(i.b)("p",null,"You may define layouts as either HTML templates or JSON objects. Defining in JSON is supported for organizations who prefer storing their layout definitions in a database instead of code. Both HTML and JSON layouts have the same feature set. However, storing layouts in code is generally preferred and encouraged by default. If you're just getting started with single-spa-layout, we encourage using an HTML template."),Object(i.b)("p",null,"Once you define your layout, you should ",Object(i.b)("inlineCode",{parentName:"p"},"constructRoutes"),", ",Object(i.b)("inlineCode",{parentName:"p"},"constructApplications"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"constructLayoutEngine"),"."),Object(i.b)("h2",{id:"html-layouts"},"HTML Layouts"),Object(i.b)("p",null,"You may define HTML layouts either within your root config's index.html file, or within a javascript string that is parsed as HTML. We generally encourage defining the layout within your root config's index.html file."),Object(i.b)("p",null,"To define a layout within your index.html file, create a ",Object(i.b)("inlineCode",{parentName:"p"},'<template id="single-spa-layout">')," element that contains your layout. Within the template, add a ",Object(i.b)("inlineCode",{parentName:"p"},"<single-spa-router>")," element, along with any routes, applications, and dom elements."),Object(i.b)("p",null,"Note that HTMLElements defined in your layout are static - there is no way to forcibly re-render or change them."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- index.ejs --\x3e\n<html>\n  <head>\n    <template>\n      <single-spa-router>\n        <div class="main-content">\n          <route path="settings">\n            <application name="settings"></application>\n          </route>\n        </div>\n      </single-spa-router>\n    </template>\n  </head>\n</html>\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'// Javascript construction of HTMLElements is also possible\nconst routerElement = new DOMParser().parseFromString(`\n<single-spa-router>\n  <div class="main-content">\n    <route path="settings">\n      <application name="settings"></application>\n    </route>\n  </div>\n</single-spa-router>\n`, "text/html").documentElement.querySelector(\'single-spa-router\');\n')),Object(i.b)("h2",{id:"json-layouts"},"JSON Layouts"),Object(i.b)("p",null,"You may define your layout as JSON, including routes, applications, and arbitrary dom elements."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "routes": [\n    { "type": "route", "path": "settings", "routes": [\n      { "type": "application", "name": "settings" }\n    ]}\n  ]\n};\n')),Object(i.b)("h2",{id:"layout-elements"},"Layout Elements"),Object(i.b)("p",null,"A layout element is an HTMLElement or JSON object that represents either a dom node, route, or application."),Object(i.b)("h3",{id:"template"},Object(i.b)("inlineCode",{parentName:"h3"},"<template>")),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template"}),Object(i.b)("inlineCode",{parentName:"a"},"template")," element")," is only used when defining the layout as HTML. Its purpose is to prevent its contents from being displayed by the browser, since the layout definition should not be visible to user."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),"<template>\n  \x3c!-- Define your layout here --\x3e\n  <single-spa-router></single-spa-router>\n</template>\n")),Object(i.b)("p",null,"Note that ",Object(i.b)("inlineCode",{parentName:"p"},"<template>")," elements are not fully supported in IE11. However, you do not need to polyfill template elements in order to use them in single-spa-layout. Instead, simply add ",Object(i.b)("inlineCode",{parentName:"p"},'style="display: none;"')," to the template to prevent its contents from being displayed in IE11."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<template style="display: none;">\n  \x3c!-- Define your layout here --\x3e\n  <single-spa-router></single-spa-router>\n</template>\n')),Object(i.b)("h3",{id:"single-spa-router"},Object(i.b)("inlineCode",{parentName:"h3"},"<single-spa-router>")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"single-spa-router")," element is required as the top level container of your layout. All attributes are optional."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<single-spa-router mode="hash|history" base="/" disableWarnings></single-spa-router>\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "mode": "hash|history",\n  "base": "/",\n  "disableWarnings": false,\n  "containerEl": "#container",\n  "routes": []\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Attributes")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mode")," (optional): A string that must be ",Object(i.b)("inlineCode",{parentName:"li"},"hash")," or ",Object(i.b)("inlineCode",{parentName:"li"},"history")," that defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"history"),". This indicates whether the routes should be matched against the Location ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Location/pathname"}),"pathname")," or ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Location/hash"}),"hash"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"base")," (optional): A string URL prefix that will be considered when matching route paths."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"disableWarnings")," (optional): A boolean that turns of single-spa-layout's console warnings when the elements provided are incorrect."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"containerEl")," (optional): A string ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Glossary/CSS_Selector"}),"CSS Selector")," or ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement"}),"HTMLElement")," that is used as the container for all single-spa dom elements. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"body"),".")),Object(i.b)("h3",{id:"route"},Object(i.b)("inlineCode",{parentName:"h3"},"<route>")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"route")," element is used to control which applications and dom elements are shown for a top-level URL route. It may contain HTMLElements, applications, or other routes. Note that the route path is a URL prefix, not an exact match."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<route path="clients">\n  <application name="clients"></application>\n</route>\n\n<route default>\n  <application name="clients"></application>\n</route>\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "route",\n  "path": "clients",\n  "routes": [\n    { "type": "application", "name": "clients" }\n  ],\n  "default": false\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Attributes")),Object(i.b)("p",null,"Routes must either have a path or be a default route."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"routes")," (required): An array of children elements that will be displayed when the route is active"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"path")," (optional): A string ",Object(i.b)("strong",{parentName:"li"},"path prefix")," that will be matched against the browser's URL. The path is relative to its parent route (or the base URL). Leading and trailing ",Object(i.b)("inlineCode",{parentName:"li"},"/"),' characters are unnecessary and are automatically applied. Paths may contain "dynamic segments" by using the ',Object(i.b)("inlineCode",{parentName:"li"},":")," character (",Object(i.b)("inlineCode",{parentName:"li"},'"clients/:id/reports"'),"). Single-spa-layout uses single-spa's ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/#pathtoactivewhen"}),Object(i.b)("inlineCode",{parentName:"a"},"pathToActiveWhen")," function")," to convert the path string to an ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/configuration/#activity-function"}),"activity function"),". The path is a prefix because it will match when any subroutes of the path match."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"default")," (optional): A boolean that determines whether this route will match all remaining URLs that have not been defined by sibling routes. This is useful for 404 Not Found pages. A sibling route is defined as any route with the same nearest-parent-route."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"props"),": An object of ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/building-applications/#lifecycle-props"}),"single-spa custom props")," that will be provided to the application when it is mounted. Note that these can be defined differently for the same application on different routes. You can read more about defining props within your HTML ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#props"}),"in the docs below"),".")),Object(i.b)("h3",{id:"application"},Object(i.b)("inlineCode",{parentName:"h3"},"<application>")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"application")," element is used to render a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/building-applications/"}),"single-spa application"),". Applications may be contained within route elements, or may exist at the top level as applications that will always be rendered. A container HTMLElement will be created by single-spa-layout when the application is rendered. The container HTMLElement is created with an ",Object(i.b)("inlineCode",{parentName:"p"},"id")," attribute of ",Object(i.b)("inlineCode",{parentName:"p"},"single-spa-application:appName")," such that your ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/ecosystem/"}),"framework helpers")," will automatically use it when ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/building-applications/#mount"}),"mounting")," the application."),Object(i.b)("p",null,"The same application may appear multiple times in your layout, under different routes. However, each application can only be defined once per-route."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- Basic usage --\x3e\n<application name="appName"></application>\n\n\x3c!-- Use a named loader that is defined in javascript --\x3e\n<application name="appName" loader="mainContentLoader"></application>\n\n\x3c!-- Add single-spa custom props to the application. The value of the prop is defined in javascript --\x3e\n<application name="appName" props="myProp,authToken"></application>\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'// Basic usage\n{\n  "type": "application",\n  "name": "appName"\n}\n\n// Use a single-spa parcel as a loading UI\n// You may also use Angular, Vue, etc.\nconst parcelConfig = singleSpaReact({...})\n{\n  "type": "application",\n  "name": "appName",\n  "loader": parcelConfig\n}\n\n// Use an HTML string as a loading UI\n{\n  "type": "application",\n  "name": "appName",\n  "loader": "<img src=\'loading.gif\'>"\n}\n\n// Add single-spa custom props\n{\n  "type": "application",\n  "name": "appName",\n  "props": {\n    "myProp": "some-value"\n  }\n}\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Attributes")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"name")," (required): The string ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/#configuration-object"}),"application name"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"loader")," (optional): An HTML string or ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/parcels-overview/#parcel-configuration"}),"single-spa parcel config object"),". The loader will be mounted to the DOM while waiting for the application's ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/configuration/#loading-function-or-application"}),"loading function")," to resolve. You can read more about defining loaders ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#loading-uis"}),"in the docs below")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"props"),": An object of ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/building-applications/#lifecycle-props"}),"single-spa custom props")," that will be provided to the application when it is mounted. Note that these can be defined differently for the same application on different routes. You can read more about defining props within your HTML ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#props"}),"in the docs below"),".")),Object(i.b)("h3",{id:"fragment"},Object(i.b)("inlineCode",{parentName:"h3"},"<fragment>")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"fragment")," element is used to specify a dynamic server-rendered portion of the template. Fragments are commonly used to inline import maps, add dynamic CSS / fonts, or customize the HTML ",Object(i.b)("inlineCode",{parentName:"p"},"<head>")," metadata. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/layout-api#sendlayouthttpresponse"}),"sendLayoutHTTPResponse")," for more information about how fragments are rendered. Note that ",Object(i.b)("inlineCode",{parentName:"p"},"<fragment>")," elements only have meaning in server templates, not browser-only templates."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<fragment name="importmap"></fragment>\n\n<fragment name="head-metadata"></fragment>\n')),Object(i.b)("h3",{id:"assets"},Object(i.b)("inlineCode",{parentName:"h3"},"<assets>")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"<assets>")," element is used to specify the location of server-rendered application assets, including CSS and fonts. When server-side rendered, the ",Object(i.b)("inlineCode",{parentName:"p"},"<assets>")," element is replaced by all the assets from the active applications on the page. Applications specify their assets as part of the ",Object(i.b)("inlineCode",{parentName:"p"},"renderApplication")," function provided to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/layout-api#sendLayoutHTTPResponse"}),"the ",Object(i.b)("inlineCode",{parentName:"a"},"sendLayoutHTTPResponse")," function"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),"<assets></assets>\n")),Object(i.b)("h3",{id:"dom-elements"},"DOM elements"),Object(i.b)("p",null,"Arbitrary HTMLElements may be placed anywhere in your layout. You may define arbirary dom elements in both HTML and JSON."),Object(i.b)("p",null,"single-spa-layout only supports updating DOM elements during route transitions. Arbitrary re-renders and updates are not supported."),Object(i.b)("p",null,"DOM elements defined within a route will be mounted/unmounted as the route becomes active/inactive. If you define the same DOM element twice under different routes, it will be destroyed and recreated when navigating between the routes."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<nav class="topnav"></nav>\n<div class="main-content">\n  <button>A button</button>\n</div>\n')),Object(i.b)("h4",{id:"json-dom-nodes"},"JSON DOM Nodes"),Object(i.b)("p",null,"The format of dom nodes in JSON is largely based on the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/inikulin/parse5"}),"parse5")," format."),Object(i.b)("h5",{id:"htmlelement"},"HTMLElement"),Object(i.b)("p",null,"Elements are defined with their ",Object(i.b)("inlineCode",{parentName:"p"},"nodeName")," as the ",Object(i.b)("inlineCode",{parentName:"p"},"type"),". HTML attributes are specified as the ",Object(i.b)("inlineCode",{parentName:"p"},"attrs")," array, where each item is an object with ",Object(i.b)("inlineCode",{parentName:"p"},"name")," and ",Object(i.b)("inlineCode",{parentName:"p"},"value")," properties."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "div",\n  "attrs": [\n    {\n      "name": "class",\n      "value": "blue"\n    }\n  ]\n}\n')),Object(i.b)("p",null,"Child nodes are specified via the ",Object(i.b)("inlineCode",{parentName:"p"},'"routes"')," property."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "div",\n  "routes": [\n    {\n      "type": "button"\n    }\n  ]\n}\n')),Object(i.b)("h5",{id:"text-nodes"},"Text Nodes"),Object(i.b)("p",null,"Text Nodes are defined separately from the parent containers, as separate objects with ",Object(i.b)("inlineCode",{parentName:"p"},"type")," set to ",Object(i.b)("inlineCode",{parentName:"p"},"#text"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "#text",\n  "value": "The displayed text"\n}\n')),Object(i.b)("p",null,"Button with text:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "button",\n  "routes": [\n    {\n      "type": "#text",\n      "value": "The button text"\n    }\n  ]\n}\n')),Object(i.b)("p",null,"Note that text nodes may not have ",Object(i.b)("inlineCode",{parentName:"p"},"routes")," (children)."),Object(i.b)("h5",{id:"comment-nodes"},"Comment Nodes"),Object(i.b)("p",null,"Comment Nodes are defined as objects whose ",Object(i.b)("inlineCode",{parentName:"p"},"type")," is ",Object(i.b)("inlineCode",{parentName:"p"},"#comment"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "type": "#comment",\n  "value": "The comment text"\n}\n')),Object(i.b)("p",null,"Note that comments may not have ",Object(i.b)("inlineCode",{parentName:"p"},"routes")," (children)."),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/building-applications/#lifecycle-props"}),"Single-spa custom props")," may be defined on both ",Object(i.b)("inlineCode",{parentName:"p"},"route")," and ",Object(i.b)("inlineCode",{parentName:"p"},"application")," elements. Any route props will be merged together with the application props to create the final props that are passed to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/building-applications/#registered-application-lifecycle"}),"the single-spa lifecycle functions"),"."),Object(i.b)("h3",{id:"json"},"JSON"),Object(i.b)("p",null,"In a JSON layout definition, you can define props with the ",Object(i.b)("inlineCode",{parentName:"p"},"props")," property on your applications and routes:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import { constructRoutes } from \'single-spa-layout\';\n\nconstructRoutes({\n  routes: [\n    { type: "application", name: "nav", props: { title: "Title" } },\n    { type: "route", path: "settings", props: { otherProp: "Some value" } },\n  ]\n})\n')),Object(i.b)("h3",{id:"html"},"HTML"),Object(i.b)("p",null,"Defining props on JSON objects is straightforward, as they are an object that can contain strings, numbers, booleans, objects, arrays, etc. However, defining complex data types in HTML is not as straightforward, since HTML attributes are always strings. To work around this, single-spa-layout allows you to name your props in the HTML, but define their values in javascript."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<application name="settings" props="authToken,loggedInUser"></application>\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { constructRoutes } from 'single-spa-layout';\n\nconst data = {\n  props: {\n    authToken: \"fds789dsfyuiosodusfd\",\n    loggedInUser: fetch('/api/logged-in-user').then(r => r.json())\n  }\n}\n\nconst routes = constructRoutes(document.querySelector('#single-spa-template'), data)\n")),Object(i.b)("p",null,"The full API documentation for the ",Object(i.b)("inlineCode",{parentName:"p"},"constructRoutes")," API explains the ",Object(i.b)("inlineCode",{parentName:"p"},"data")," object in detail."),Object(i.b)("h2",{id:"loading-uis"},"Loading UIs"),Object(i.b)("p",null,"It is often desireable to show a loading UI when waiting for an application's code to download and execute. Single-spa-layout allows you to define per-application loaders that will be mounted to the DOM while the application's ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/configuration/#loading-function-or-application"}),"loading function")," is pending. It is possible to share the same loading UI for multiple applications."),Object(i.b)("p",null,"A loading UI is defined as either an HTML string or as a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/parcels-overview/#parcel-configuration"}),"parcel config object"),". HTML strings are best for static, non-interactive loaders, whereas parcels are best when you want to use a framework (Vue, React, Angular, etc) to dynamically render the loader."),Object(i.b)("p",null,"Defining loaders via javascript objects is straightforward, as they are an object that can contain strings, numbers, booleans, objects, arrays, etc. However, defining complex data types in HTML is not as straightforward, since HTML attributes are always strings. To work around this, single-spa-layout allows you to name your loaders in the HTML, but define their values in javascript."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<application name="topnav" loader="topNav"></application>\n<application name="topnav" loader="settings"></application>\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { constructRoutes } from 'single-spa-layout';\n\n// You may also use Angular, Vue, etc.\nconst settingsLoader = singleSpaReact({...})\n\nconst data = {\n  loaders: {\n    topNav: `<nav class=\"placeholder\"></nav>`,\n    settings: settingsLoader\n  }\n}\n\nconst routes = constructRoutes(document.querySelector('#single-spa-template'), data)\n")),Object(i.b)("p",null,"The full API documentation for the ",Object(i.b)("inlineCode",{parentName:"p"},"constructRoutes")," API explains the ",Object(i.b)("inlineCode",{parentName:"p"},"data")," object in detail."),Object(i.b)("h2",{id:"transitions"},"Transitions"),Object(i.b)("p",null,"Support for route transitions is planned, but not yet implemented. If you have interest in this feature, please provide use cases, upvotes, and feedback in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-layout/issues/11"}),"this tracking issue"),"."),Object(i.b)("h2",{id:"default-routes-404-not-found"},"Default Routes (404 Not Found)"),Object(i.b)("p",null,"Default routes are routes that activate when no other sibling routes match the current URL. They do not have a URL path and may contain any combination of DOM elements and single-spa applications."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<single-spa-router>\n  <route path="cart"></route>\n  <route path="product-detail"></route>\n  <route default>\n    <h1>404 Not Found</h1>\n  </route>\n</single-spa-router>\n')),Object(i.b)("p",null,"Default routes are matched against their ",Object(i.b)("strong",{parentName:"p"},"sibling")," routes, which allows for nesting:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<single-spa-router>\n  <route path="cart"></route>\n  <route path="product-detail/:productId">\n    <route path="reviews"></route>\n    <route path="images"></route>\n    <route default>\n      <h1>Unknown product page</h1>\n    </route>\n  </route>\n  <route default>\n    <h1>404 Not Found</h1>\n  </route>\n</single-spa-router>\n')),Object(i.b)("p",null,'Sibling routes are defined as those that share a "nearest parent route." This means that they do not have to be direct siblings in your HTML/JSON, but can be nested within DOM elements:'),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<single-spa-router>\n  <route path="product-detail/:productId">\n    <div class="product-content">\n      <route path="reviews"></route>\n      <route path="images"></route>\n    </div>\n    \x3c!-- The reviews and images routes are siblings, since they share a nearest parent route --\x3e\n    \x3c!-- The default route will activate when the URL does not match reviews or images --\x3e\n    <route default>\n      <h1>Unknown product page</h1>\n    </route>\n  </route>\n</single-spa-router>\n')),Object(i.b)("h2",{id:"error-uis"},"Error UIs"),Object(i.b)("p",null,"When a single-spa application fails to load, mount, or unmount, it moves to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api#getappstatus"}),"SKIP_BECAUSE_BROKEN or LOAD_ERROR")," status. When in SKIP_BECAUSE_BROKEN status, often nothing is visible to the user and they won't understand why the application is not showing. You can call ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api#unloadapplication"}),"unloadApplication")," to move the application back to NOT_LOADING status, which will cause single-spa to re-attempt downloading and mounting it. However, it is often desireable to show an error state when the application errors."),Object(i.b)("p",null,"An error UI is defined as either an HTML string or as a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/parcels-overview/#parcel-configuration"}),"parcel config object"),". HTML strings are best for static, non-interactive error states, whereas parcels are best when you want to use a framework (Vue, React, Angular, etc) to dynamically render the error state. The error UI will be shown whenever the application's status is SKIP_BECAUSE_BROKEN or LOAD_ERROR."),Object(i.b)("p",null,"Defining error uis via javascript objects is straightforward, as the string or parcel can be defined in an application object via the ",Object(i.b)("inlineCode",{parentName:"p"},"error")," property:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'{\n  "type": "application",\n  "name": "nav",\n  "error": "<h1>Oops! The navbar isn\'t working right now</h1>"\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const myErrorParcel = singleSpaReact({...})\n\n{\n  "type": "application",\n  "name": "nav",\n  "error": myErrorParcel\n}\n')),Object(i.b)("p",null,"However, defining error uis in HTML is less straightforward, since HTML attributes are always strings and therefore can't be a parcel config object. To work around this, error UIs are named in the HTML, but defined in javascript:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<template id="single-spa-layout">\n  <single-spa-router>\n    <application name="nav" error="navError"></application>\n  </single-spa-router>\n</template>\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const myErrorParcel = singleSpaReact({...})\n\nconst routes = constructRoutes(document.querySelector('#single-spa-layout'), {\n  errors: {\n    navError: myErrorParcel\n    // alternatively:\n    // navError: \"<h1>Oops! The navbar isn't working right now</h1>\"\n  }\n})\n")))}c.isMDXComponent=!0},311:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return b}));var n=a(0),o=a.n(n),i=o.a.createContext({}),r=function(e){var t=o.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):Object.assign({},t,e)),a},l=function(e){var t=r(e.components);return o.a.createElement(i.Provider,{value:t},e.children)};var s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},c=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}(e,["components","mdxType","originalType","parentName"]),c=r(a),b=n,u=c[l+"."+b]||c[b]||p[b]||i;return a?o.a.createElement(u,Object.assign({},{ref:t},s,{components:a})):o.a.createElement(u,Object.assign({},{ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:n,r[1]=l;for(var b=2;b<i;b++)r[b]=a[b];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}c.displayName="MDXCreateElement"}}]);