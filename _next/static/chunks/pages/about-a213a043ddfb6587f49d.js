(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{2167:function(e,n,t){"use strict";var r=t(3038),o=t(862);n.default=void 0;var a=o(t(7294)),c=t(9414),i=t(4651),s=t(7426),l={};function u(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=(0,i.useRouter)(),f=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],i=t[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,g=e.shallow,x=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var y=(n=a.Children.only(v))&&"object"===typeof n&&n.ref,m=(0,s.useIntersection)({rootMargin:"200px"}),E=r(m,2),_=E[0],w=E[1],k=a.default.useCallback((function(e){_(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,_]);(0,a.useEffect)((function(){var e=w&&t&&(0,c.isLocalURL)(d),n="undefined"!==typeof b?b:o&&o.locale,r=l[d+"%"+p+(n?"%"+n:"")];e&&!r&&u(o,d,p,{locale:n})}),[p,d,w,b,t,o]);var L={ref:k,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),n[o?"replace":"push"](t,r,{shallow:a,locale:s,scroll:i}))}(e,o,d,p,h,g,x,b)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),u(o,d,p,{priority:!0}))}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var N="undefined"!==typeof b?b:o&&o.locale,j=o&&o.isLocaleDomain&&(0,c.getDomainLocale)(p,N,o&&o.locales,o&&o.domainLocales);L.href=j||(0,c.addBasePath)((0,c.addLocale)(p,N,o&&o.defaultLocale))}return a.default.cloneElement(n,L)};n.default=f},7426:function(e,n,t){"use strict";var r=t(3038);n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,s=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t(7294),a=t(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},5288:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var r=t(5893),o=t(1664);t(212);function a(){return(0,r.jsxs)("div",{className:"grid place-content-center w-screen h-screen text-2xl gap-4",children:[(0,r.jsx)("div",{className:"text-lg",children:"This is a next project deployed to gh-pages."}),(0,r.jsxs)("div",{className:"flex flex-row gap-2 divide-x divide-black justify-center items-center",children:[(0,r.jsx)("p",{className:"px-0.5",children:"Back to"}),(0,r.jsx)(o.default,{href:"/",as:"/nextjs-ghpages",children:(0,r.jsx)("a",{className:"px-2 font-bold text-indigo-600 hover:text-blue-600 transition-colors",children:"Home"})})]})]})}},8961:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(5288)}])},212:function(){},1664:function(e,n,t){e.exports=t(2167)}},function(e){e.O(0,[774,888,179],(function(){return n=8961,e(e.s=n);var n}));var n=e.O();_N_E=n}]);