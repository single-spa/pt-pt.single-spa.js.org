(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{359:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(366),m=t(388),o=t(364);var c=function(e){var a=e.nextItem,t=e.prevItem;return n.a.createElement("nav",{className:"pagination-nav"},n.a.createElement("div",{className:"pagination-nav__item"},t&&n.a.createElement(o.a,{className:"pagination-nav__link",to:t.permalink},n.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Previous Post"),n.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab ",t.title))),n.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.a.createElement(o.a,{className:"pagination-nav__link",to:a.permalink},n.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Next Post"),n.a.createElement("h4",{className:"pagination-nav__link--label"},a.title," \xbb"))))};a.default=function(e){var a=e.content,t=e.metadata,r=a.frontMatter;return n.a.createElement(l.a,{title:t.title,description:t.description},a&&n.a.createElement("div",{className:"container margin-vert--xl"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--8 col--offset-2"},n.a.createElement(m.a,{frontMatter:r,metadata:t,isBlogPostPage:!0},n.a.createElement(a,null)),(t.nextItem||t.prevItem)&&n.a.createElement("div",{className:"margin-vert--xl"},n.a.createElement(c,{nextItem:t.nextItem,prevItem:t.prevItem}))))))}},370:function(e,a,t){"use strict";var r=t(1),n=t(0),l=t.n(n),m=t(362),o=t.n(m),c=t(364),i=t(361),s=t(363);a.a=function(){var e=Object(i.a)().siteConfig,a=void 0===e?{}:e,t=a.themeConfig,m=(void 0===t?{}:t).footer;if(!m)return null;var u=m.copyright,g=m.links,E=void 0===g?[]:g,_=m.logo;return l.a.createElement("footer",{className:o()("footer",{"footer--dark":"dark"===m.style})},l.a.createElement("div",{className:"container"},E&&E.length>0&&l.a.createElement("div",{className:"row footer__links"},E.map((function(e,t){return l.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,m,o){return l.a.createElement(n.Fragment,{key:m},l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},e.label&&l.a.createElement(c.a,Object(r.a)({className:"footer__link-item"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{to:Object(s.a)(e.to)}),e.label),e.html&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}})),o.length-1===m&&2===t&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{key:"gh-star",className:"footer__item footer__item--gh"},l.a.createElement("iframe",{title:"github",src:"https://ghbtns.com/github-btn.html?user="+a.organizationName+"&repo="+a.projectName+"&type=star&count=true&size=small"})),l.a.createElement("li",{key:"license",className:"footer__item"},l.a.createElement("a",{href:Object(s.a)("img/icons/148705-essential-collection/license/license.html")},"License for icons"))))}))):null)}))),(_||u)&&l.a.createElement("div",{className:"text--center"},_&&_.src&&l.a.createElement("a",{className:"footer__logo margin-bottom--sm",href:"https://www.canopytax.com/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{alt:_.alt,src:Object(s.a)(_.src)})),u)))}},388:function(e,a,t){"use strict";t(71);var r=t(0),n=t.n(r),l=t(362),m=t.n(l),o=t(360),c=t(364),i=t(393),s=t(127),u=t.n(s),g=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,r,l,s,E=e.children,_=e.frontMatter,v=e.metadata,h=e.truncated,f=e.isBlogPostPage,p=void 0!==f&&f,N=v.date,d=v.permalink,b=v.tags,k=_.author,y=_.title,w=_.author_url||_.authorURL,x=_.author_title||_.authorTitle,I=_.author_image_url||_.authorImageURL;return n.a.createElement("article",{className:p?void 0:"margin-bottom--xl"},(a=p?"h1":"h2",t=N.substring(0,10).split("-"),r=t[0],l=g[parseInt(t[1],10)-1],s=parseInt(t[2],10),n.a.createElement("header",null,n.a.createElement(a,{className:m()("margin-bottom--sm",u.a.blogPostTitle)},p?y:n.a.createElement(c.a,{to:d},y)),n.a.createElement("div",{className:"margin-bottom--sm"},n.a.createElement("time",{dateTime:N,className:u.a.blogPostDate},l," ",s,", ",r)),n.a.createElement("div",{className:"avatar margin-bottom--md"},I&&n.a.createElement("a",{className:"avatar__photo-link",href:w,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{className:"avatar__photo",src:I,alt:k})),n.a.createElement("div",{className:"avatar__intro"},k&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:w,target:"_blank",rel:"noreferrer noopener"},k)),n.a.createElement("small",{className:"avatar__subtitle"},x)))))),n.a.createElement("section",{className:"markdown"},n.a.createElement(o.a,{components:i.a},E)),(b.length>0||h)&&n.a.createElement("footer",{className:"row margin-vert--lg"},b.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),b.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement(c.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),h&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(c.a,{to:v.permalink,"aria-label":"Read more about "+y},n.a.createElement("strong",null,"Read More")))))}}}]);