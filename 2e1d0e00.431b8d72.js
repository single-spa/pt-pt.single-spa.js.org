/*! For license information please see 2e1d0e00.431b8d72.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{164:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(366),l=a(361),o=a(364),i=a(363),s=a(413);t.default=function(){var e=Object(l.a)().siteConfig,t=void 0===e?{}:e,a=s[0],n=s.filter((function(e){return e!==a})),u="https://github.com/"+t.organizationName+"/"+t.projectName;return r.a.createElement(c.a,{permalink:"/versions",description:"single-spa Versions page listing all documented site versions"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("h1",null,"single-spa documentation versions"),r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("h3",{id:"latest"},"Latest version (Stable)"),r.a.createElement("p",null,"Here you can find the latest documentation."),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,a),r.a.createElement("td",null,r.a.createElement(o.a,{to:Object(i.a)("/docs/getting-started-overview")},"Documentation")),r.a.createElement("td",null,r.a.createElement("a",{href:u+"/releases"},"Release Notes")))))),n.length>0&&r.a.createElement("div",{className:"margin-bottom--lg"},r.a.createElement("h3",{id:"archive"},"Past Versions"),r.a.createElement("p",null,"Here you can find documentation for previous versions of single-spa."),r.a.createElement("table",null,r.a.createElement("tbody",null,n.map((function(e){return r.a.createElement("tr",{key:e},r.a.createElement("th",null,e),r.a.createElement("td",null,r.a.createElement(o.a,{to:Object(i.a)("/docs/"+e+"/getting-started-overview")},"Documentation")),r.a.createElement("td",null,r.a.createElement("a",{href:u+"/releases"},"Release Notes")))})))))))}},361:function(e,t,a){"use strict";var n=a(0),r=a(51);t.a=function(){return Object(n.useContext)(r.a)}},362:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var l=r.apply(null,n);l&&e.push(l)}else if("object"===c)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},363:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(371);var n=a(361);function r(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},364:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),l=a(34),o=/^\/(?!\/)/;t.a=function(e){var t,a=e.to,i=e.href,s=a||i,u=o.test(s),d=!1,h="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(r.useEffect)((function(){return!h&&u&&window.docusaurus.prefetch(s),function(){h&&t&&t.disconnect()}}),[s,h,u]),s&&u?c.a.createElement(l.b,Object(n.a)({},e,{onMouseEnter:function(){d||(window.docusaurus.preload(s),d=!0)},innerRef:function(e){var a,n;h&&e&&u&&(a=e,n=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:s})):c.a.createElement("a",Object(n.a)({},e,{href:s}))}},366:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(50),l=a(361),o=a(363),i=a(1),s=a(9),u=a(364),d=a(362),h=a.n(d),m=a(369),f=(a(123),!1),p=function(e){var t=Object(n.useRef)(!1),c=Object(n.useRef)(null),o=Object(l.a)().siteConfig,i=(void 0===o?{}:o).themeConfig.algolia,s=Object(m.c)(),u=function(){t.current||(window.docsearch({appId:i.appId,apiKey:i.apiKey,indexName:i.indexName,inputSelector:"#search_input_react",algoliaOptions:i.algoliaOptions,handleSelected:function(e,t,a){var n=document.createElement("a");n.href=a.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;s.push(r)}}),t.current=!0)},d=function(){f?u():a.e(226).then(a.t.bind(null,508,7)).then((function(e){f=!0,window.docsearch=e.default,u()}))},p=Object(n.useCallback)((function(t){c.current.contains(t.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:h()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:p,onKeyDown:p,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:h()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:p,onBlur:p,ref:c}))},v=a(372),g=a.n(v),b=a(124),E=a.n(b),k=function(){return r.a.createElement("span",{className:h()(E.a.toggle,E.a.moon)})},y=function(){return r.a.createElement("span",{className:h()(E.a.toggle,E.a.sun)})},_=function(e){var t=Object(l.a)().isClient;return r.a.createElement(g.a,Object(i.a)({disabled:!t,icons:{checked:r.a.createElement(k,null),unchecked:r.a.createElement(y,null)}},e))},w=function(){var e=n.useState("undefined"!=typeof document?document.querySelector("html").getAttribute("data-theme"):""),t=e[0],a=e[1];return n.useEffect((function(){try{a(localStorage.getItem("theme"))}catch(e){console.error(e)}}),[a]),[t,n.useCallback((function(e){try{localStorage.setItem("theme",e),a(e)}catch(t){console.error(t)}}),[a])]},O=a(125),N=a.n(O);function j(e){var t=e.to,a=e.href,n=e.label,c=(e.position,Object(s.a)(e,["to","href","label","position"])),l=Object(o.a)(t);return r.a.createElement(u.a,Object(i.a)({className:"navbar__item navbar__link"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{activeClassName:"navbar__link--active",to:l},c),n)}var C=function(){var e=Object(l.a)(),t=Object(n.useState)(!1),a=t[0],s=t[1],d=Object(n.useState)(!1),m=d[0],f=d[1],v=w(),g=v[0],b=v[1],E=e.siteConfig,k=void 0===E?{}:E,y=k.baseUrl,O=k.themeConfig,C=void 0===O?{}:O,x=C.navbar,S=void 0===x?{}:x,T=C.disableDarkMode,M=void 0!==T&&T,B=S.title,F=S.logo,P=void 0===F?{}:F,I=S.links,X=void 0===I?[]:I,D=Object(n.useCallback)((function(){s(!0)}),[s]),L=Object(n.useCallback)((function(){s(!1)}),[s]),R=Object(n.useCallback)((function(e){return b(e.target.checked?"dark":"")}),[b]),W=Object(o.a)(P.src);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en","data-theme":g})),r.a.createElement("nav",{className:h()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":a})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:D,onKeyDown:D},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(u.a,{className:"navbar__brand",to:y},null!=P&&r.a.createElement("img",{className:"navbar__logo",src:W,alt:P.alt}),null!=B&&r.a.createElement("strong",{className:m?N.a.hideLogoText:""},B)),X.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(j,Object(i.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},X.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(j,Object(i.a)({},e,{key:t}))})),!M&&r.a.createElement(_,{className:N.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:"dark"===g,onChange:R}),r.a.createElement(p,{handleSearchBarToggle:f,isSearchBarExpanded:m}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:function(){s(!1)}}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(u.a,{className:"navbar__brand",onClick:L,to:y},null!=P&&r.a.createElement("img",{className:"navbar__logo",src:W,alt:P.alt}),null!=B&&r.a.createElement("strong",null,B)),!M&&a&&r.a.createElement(_,{"aria-label":"Dark mode toggle in sidebar",checked:"dark"===g,onChange:R})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},X.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(j,Object(i.a)({className:"menu__link"},e,{onClick:L})))}))))))))},x=a(370);a(126);t.a=function(e){var t=Object(l.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,i=a.tagline,s=a.title,u=a.themeConfig.image,d=a.url,h=e.children,m=e.title,f=e.noFooter,p=e.description,v=e.image,g=e.keywords,b=e.permalink,E=e.version,k=m||s+" \xb7 "+i,y=v||u,_=d+Object(o.a)(y),w=Object(o.a)(n);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),k&&r.a.createElement("title",null,k),k&&r.a.createElement("meta",{property:"og:title",content:k}),n&&r.a.createElement("link",{rel:"shortcut icon",href:w}),p&&r.a.createElement("meta",{name:"description",content:p}),p&&r.a.createElement("meta",{property:"og:description",content:p}),E&&r.a.createElement("meta",{name:"docsearch:version",content:E}),g&&g.length&&r.a.createElement("meta",{name:"keywords",content:g.join(",")}),y&&r.a.createElement("meta",{property:"og:image",content:_}),y&&r.a.createElement("meta",{property:"twitter:image",content:_}),y&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+k}),b&&r.a.createElement("meta",{property:"og:url",content:d+b}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(C,null),r.a.createElement("div",{className:"main-wrapper"},h),!f&&r.a.createElement(x.a,null))}},367:function(e,t,a){var n=a(70),r=a(23);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(r(e))}},368:function(e,t,a){var n=a(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(r){}}return!0}},369:function(e,t,a){"use strict";var n=a(34);a.d(t,"a",(function(){return n.c})),a.d(t,"b",(function(){return n.d})),a.d(t,"c",(function(){return n.e}))},370:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a.n(r),l=a(362),o=a.n(l),i=a(364),s=a(361),u=a(363);t.a=function(){var e=Object(s.a)().siteConfig,t=void 0===e?{}:e,a=t.themeConfig,l=(void 0===a?{}:a).footer;if(!l)return null;var d=l.copyright,h=l.links,m=void 0===h?[]:h,f=l.logo;return c.a.createElement("footer",{className:o()("footer",{"footer--dark":"dark"===l.style})},c.a.createElement("div",{className:"container"},m&&m.length>0&&c.a.createElement("div",{className:"row footer__links"},m.map((function(e,a){return c.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,l,o){return c.a.createElement(r.Fragment,{key:l},c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},e.label&&c.a.createElement(i.a,Object(n.a)({className:"footer__link-item"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{to:Object(u.a)(e.to)}),e.label),e.html&&c.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}})),o.length-1===l&&2===a&&c.a.createElement(c.a.Fragment,null,c.a.createElement("li",{key:"gh-star",className:"footer__item footer__item--gh"},c.a.createElement("iframe",{title:"github",src:"https://ghbtns.com/github-btn.html?user="+t.organizationName+"&repo="+t.projectName+"&type=star&count=true&size=small"})),c.a.createElement("li",{key:"license",className:"footer__item"},c.a.createElement("a",{href:Object(u.a)("img/icons/148705-essential-collection/license/license.html")},"License for icons"))))}))):null)}))),(f||d)&&c.a.createElement("div",{className:"text--center"},f&&f.src&&c.a.createElement("a",{className:"footer__logo margin-bottom--sm",href:"https://www.canopytax.com/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("img",{alt:f.alt,src:Object(u.a)(f.src)})),d)))}},371:function(e,t,a){"use strict";var n=a(17),r=a(35),c=a(367),l="".startsWith;n(n.P+n.F*a(368)("startsWith"),"String",{startsWith:function(e){var t=c(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return l?l.call(t,n,a):t.slice(a,a+n.length)===n}})},372:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),l=h(c),o=h(a(362)),i=h(a(10)),s=h(a(373)),u=h(a(374)),d=a(375);function h(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:l.default.createElement(s.default,null),unchecked:l.default.createElement(u.default,null)}},m.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},373:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},374:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},375:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},413:function(e){e.exports=JSON.parse('["5.x","4.x"]')}}]);