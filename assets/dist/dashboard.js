(window.webpackJsonp_generatepress=window.webpackJsonp_generatepress||[]).push([[4],{66:function(e,t,r){},67:function(e,t,r){},68:function(e,t,r){},69:function(e,t,r){}}]),function(e){function t(t){for(var n,a,c=t[0],i=t[1],l=t[2],u=0,d=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(p&&p(t);d.length;)d.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,c=1;c<r.length;c++){var i=r[c];0!==o[i]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={2:0},s=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var c=window.webpackJsonp_generatepress=window.webpackJsonp_generatepress||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=i;s.push([71,4]),r()}({0:function(e,t){e.exports=window.wp.element},12:function(e,t){function r(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=r=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),r(t)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},17:function(e,t,r){var n=r(18);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},18:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},19:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},2:function(e,t){e.exports=window.wp.i18n},20:function(e,t){e.exports=function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,o,s=[],_n=!0,a=!1;try{for(r=r.call(e);!(_n=(n=r.next()).done)&&(s.push(n.value),!t||s.length!==t);_n=!0);}catch(e){a=!0,o=e}finally{try{_n||null==r.return||r.return()}finally{if(a)throw o}}return s}},e.exports.default=e.exports,e.exports.__esModule=!0},21:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},3:function(e,t){e.exports=window.wp.components},40:function(e,t){e.exports=window.wp.apiFetch},5:function(e,t,r){var n=r(19),o=r(20),s=r(17),a=r(21);e.exports=function(e,t){return n(e)||o(e,t)||s(e,t)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},71:function(e,t,r){"use strict";r.r(t),r(66);var n=r(5),o=r.n(n),s=r(0),a=r(2),c=r(3),i=r(9),l=(r(67),{siteIdentity:{title:Object(a.__)("Site Identity","generatepress"),description:Object(a.__)("Set options like your site title, description, logo, logo width, and more.","generatepress"),icon:Object(s.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},Object(s.createElement)("circle",{cx:"12",cy:"12",r:"3"}),Object(s.createElement)("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"})),action:{url:generateDashboard.customizeSectionUrls.siteIdentitySection}},colors:{title:Object(a.__)("Color Options","generatepress"),description:Object(a.__)("Set up your global colors and stylize your site to match your brand.","generatepress"),icon:Object(s.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},Object(s.createElement)("path",{d:"M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"})),action:{url:generateDashboard.customizeSectionUrls.colorsSection}},typography:{title:Object(a.__)("Typography System","generatepress"),description:Object(a.__)("Set up your site typography by using our dynamic typography system.","generatepress"),icon:Object(s.createElement)("svg",{viewBox:"0 0 16 16",fill:"currentColor",height:"16",width:"16",xmlns:"http://www.w3.org/2000/svg"},Object(s.createElement)("path",{d:"m2.244 13.081.943-2.803H6.66l.944 2.803H8.86L5.54 3.75H4.322L1 13.081h1.244zm2.7-7.923L6.34 9.314H3.51l1.4-4.156h.034zm9.146 7.027h.035v.896h1.128V8.125c0-1.51-1.114-2.345-2.646-2.345-1.736 0-2.59.916-2.666 2.174h1.108c.068-.718.595-1.19 1.517-1.19.971 0 1.518.52 1.518 1.464v.731H12.19c-1.647.007-2.522.8-2.522 2.058 0 1.319.957 2.18 2.345 2.18 1.06 0 1.716-.43 2.078-1.011zm-1.763.035c-.752 0-1.456-.397-1.456-1.244 0-.65.424-1.115 1.408-1.115h1.805v.834c0 .896-.752 1.525-1.757 1.525z"})),action:{url:generateDashboard.customizeSectionUrls.typographySection}},layout:{title:Object(a.__)("Layout Options","generatepress"),description:Object(a.__)("Set up the layout of your overall site elements.","generatepress"),icon:Object(s.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},Object(s.createElement)("path",{d:"M12 3h7a2 2 0 012 2v14a2 2 0 01-2 2h-7m0-18H5a2 2 0 00-2 2v14a2 2 0 002 2h7m0-18v18"})),action:{url:generateDashboard.customizeSectionUrls.layoutSection}}}),p=function(){var e=Object(s.useState)(!1),t=o()(e,2),r=t[0],n=t[1];if(Object(s.useEffect)((function(){r||n(!0)})),!r)return Object(s.createElement)(c.Placeholder,{className:"generatepress-dashboard__placeholder"},Object(s.createElement)(c.Spinner,null));var p=Object(i.applyFilters)("generate_dashboard_customize_items",l);return Object(s.createElement)(s.Fragment,null,!!p>0&&Object(s.createElement)(s.Fragment,null,Object(s.createElement)("div",{className:"generatepress-dashboard__section-title"},Object(s.createElement)("h2",null,Object(a.__)("Start Customizing","generatepress"))),Object(s.createElement)("div",{className:"generatepress-dashboard__section"},Object.keys(p).map((function(e,t){return Object(s.createElement)("div",{className:"generatepress-dashboard__section-item",key:t},Object(s.createElement)("div",{className:"generatepress-dashboard__section-item-content"},!!p[e].title&&Object(s.createElement)("div",{className:"generatepress-dashboard__section-item-title"},p[e].title),!!p[e].description&&Object(s.createElement)("div",{className:"generatepress-dashboard__section-item-description"},p[e].description)),Object(s.createElement)("div",{className:"generatepress-dashboard__section-item-action"},Object(i.applyFilters)("generate_dashboard_customize_item_action",function(e){var t={className:"components-button is-primary",href:p[e].action.url,target:p[e].action.external?"_blank":null,rel:p[e].action.external?"noreferrer noopener":null};return Object(s.createElement)(s.Fragment,null,!!p[e].action&&Object(s.createElement)("a",t,p[e].action.label||Object(a.__)("Open options","generatepress")))}(e),p[e])))})),Object(i.applyFilters)("generate_dashboard_inside_start_customizing"))))};window.addEventListener("DOMContentLoaded",(function(){Object(s.render)(Object(s.createElement)(p,null),document.getElementById("generatepress-dashboard-app"))})),r(68);var u={themeBuilder:{title:Object(a.__)("Theme Builder","generatepress"),description:Object(a.__)("Design and build your theme elements in the block editor.","generatepress"),icon:Object(s.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},Object(s.createElement)("path",{d:"M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"})),action:{label:Object(a.__)("Explore our theme builder","generatepress"),url:"https://generatepress.com/premium#theme-builder",external:!0}},siteLibrary:{title:Object(a.__)("Site Library","generatepress"),description:Object(a.__)("Start your site with a professionally-built starter site.","generatepress"),icon:Object(s.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},Object(s.createElement)("path",{d:"M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"})),action:{label:Object(a.__)("Explore starter sites","generatepress"),url:"https://generatepress.com/premium#site-library",external:!0}},moreOptions:{title:Object(a.__)("More Options","generatepress"),description:Object(a.__)("Add more options like our advanced hook system, mobile header, sticky navigation, infinite scroll, masonry and much more.","generatepress"),icon:Object(s.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},Object(s.createElement)("path",{d:"M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"})),action:{label:Object(a.__)("Explore more options","generatepress"),url:"https://generatepress.com/premium",external:!0}},support:{title:Object(a.__)("Premium Support","generatepress"),description:Object(a.__)("We take support seriously. Gain access to our premium support forums and take advantage of our industry-leading support.","generatepress"),icon:Object(s.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24"},Object(s.createElement)("circle",{cx:"12",cy:"12",r:"10"}),Object(s.createElement)("circle",{cx:"12",cy:"12",r:"4"}),Object(s.createElement)("path",{d:"M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M14.83 9.17l3.53-3.53M4.93 19.07l4.24-4.24"})),action:{label:Object(a.__)("Explore our support forums","generatepress"),url:"https://generatepress.com/support",external:!0}}},d=function(){var e=Object(s.useState)(!1),t=o()(e,2),r=t[0],n=t[1];return Object(s.useEffect)((function(){r||n(!0)})),generateDashboard.hasPremium?null:r?Object(s.createElement)(s.Fragment,null,!!u>0&&Object(s.createElement)(s.Fragment,null,Object(s.createElement)("div",{className:"generatepress-dashboard__section-title"},Object(s.createElement)("h2",null,Object(a.__)("GeneratePress Premium","generatepress"))),Object(s.createElement)("div",{className:"generatepress-dashboard__section-description"},Object(s.createElement)("p",null,Object(a.__)("Take GeneratePress to the next level with more options, professionally designed starter sites, and block-based theme building.","gp-premium"))),Object(s.createElement)("div",{className:"generatepress-dashboard__section generatepress-dashboard__premium"},Object.keys(u).map((function(e,t){var r={className:"components-button is-primary",href:u[e].action.url,target:u[e].action.external?"_blank":null,rel:u[e].action.external?"noreferrer noopener":null};return Object(s.createElement)("div",{className:"generatepress-dashboard__premium-item",key:t},Object(s.createElement)("div",{className:"generatepress-dashboard__premium-item-content"},!!u[e].icon&&Object(s.createElement)("div",{className:"generatepress-dashboard__premium-item-icon"},u[e].icon),!!u[e].title&&Object(s.createElement)("div",{className:"generatepress-dashboard__premium-item-title"},u[e].title),!!u[e].description&&Object(s.createElement)("div",{className:"generatepress-dashboard__premium-item-description"},u[e].description)),Object(s.createElement)("div",{className:"generatepress-dashboard__premium-item-action"},!!u[e].action&&Object(s.createElement)("a",r,u[e].action.label||Object(a.__)("Open options","generatepress"))))}))))):Object(s.createElement)(c.Placeholder,{className:"generatepress-dashboard__placeholder"},Object(s.createElement)(c.Spinner,null))};window.addEventListener("DOMContentLoaded",(function(){Object(s.render)(Object(s.createElement)(d,null),document.getElementById("generatepress-dashboard-go-pro"))}));var m=r(12),b=r.n(m),h=r(40),g=r.n(h),_=(r(69),function(){var e=Object(s.useState)(!1),t=o()(e,2),r=t[0],n=t[1],i=Object(s.useState)(!1),l=o()(i,2),p=l[0],u=l[1];return Object(s.useEffect)((function(){r||n(!0)})),generateDashboard.hasPremium?null:r?Object(s.createElement)(s.Fragment,null,Object(s.createElement)("div",{className:"generatepress-dashboard__section"},Object(s.createElement)("div",{className:"generatepress-dashboard__section-title",style:{marginBottom:0}},Object(s.createElement)("h2",null,Object(a.__)("Reset","generatepress"))),Object(s.createElement)("div",{className:"generatepress-dashboard__section-item-description",style:{marginTop:0}},Object(a.__)("Reset your customizer settings.","generatepress")),Object(s.createElement)(c.Button,{className:"generatepress-dashboard__reset-button",style:{marginTop:"10px"},disabled:!!p,isPrimary:!0,onClick:function(e){window.confirm(Object(a.__)("This will delete all of your customizer settings. It cannot be undone.","generatepress"))&&function(e){u(!0);var t=e.target.nextElementSibling;g()({path:"/generatepress/v1/reset",method:"POST",data:{}}).then((function(e){u(!1),t.classList.add("generatepress-dashboard__section-item-message__show"),"object"===b()(e.response)?t.textContent=Object(a.__)("Settings reset.","generatepress"):t.textContent=e.response,e.success&&e.response?setTimeout((function(){t.classList.remove("generatepress-dashboard__section-item-message__show")}),3e3):t.classList.add("generatepress-dashboard__section-item-message__error")}))}(e)}},!!p&&Object(s.createElement)(c.Spinner,null),!p&&Object(a.__)("Reset","generatepress")),Object(s.createElement)("span",{className:"generatepress-dashboard__section-item-message",style:{marginLeft:"10px"}}))):Object(s.createElement)(c.Placeholder,{className:"generatepress-dashboard__placeholder"},Object(s.createElement)(c.Spinner,null))});window.addEventListener("DOMContentLoaded",(function(){Object(s.render)(Object(s.createElement)(_,null),document.getElementById("generatepress-reset"))}))},9:function(e,t){e.exports=window.wp.hooks}});