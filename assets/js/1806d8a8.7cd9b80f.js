(self.webpackChunksubstrate_playground=self.webpackChunksubstrate_playground||[]).push([[655],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(p,".").concat(d)]||m[d]||l[d]||i;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},125:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return a},metadata:function(){return p},toc:function(){return c},default:function(){return l}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),s={id:"monitoring",title:"Monitoring"},a="Infrastructure",p={unversionedId:"operating/monitoring",id:"operating/monitoring",isDocsHomePage:!1,title:"Monitoring",description:"kube, docker, backend server",source:"@site/docs/operating/monitoring.md",sourceDirName:"operating",slug:"/operating/monitoring",permalink:"/substrate-playground/docs/operating/monitoring",editUrl:"https://github.com/paritytech/substrate-playground/edit/master/website/docs/operating/monitoring.md",tags:[],version:"current",frontMatter:{id:"monitoring",title:"Monitoring"}},c=[{value:"Monitoring / Probes",id:"monitoring--probes",children:[]}],u={toc:c};function l(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"infrastructure"},"Infrastructure"),(0,i.kt)("p",null,"kube, docker, backend server\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/config/thirdparty/prometheus/"},"https://docs.docker.com/config/thirdparty/prometheus/")),(0,i.kt)("h1",{id:"theia-and-users"},"Theia and users"),(0,i.kt)("h1",{id:"deployed-nodes"},"Deployed nodes"),(0,i.kt)("p",null,"Substrate exposes prometeus endpoints\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/pull/4511"},"https://github.com/paritytech/substrate/pull/4511"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://forum.parity.io/t/metrics-for-reliability-and-performance-monitoring/356"},"https://forum.parity.io/t/metrics-for-reliability-and-performance-monitoring/356")),(0,i.kt)("h1",{id:"resources"},"Resources"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://mxinden.github.io/static/self-service-monitoring.pdf"},"https://mxinden.github.io/static/self-service-monitoring.pdf")," (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mxinden/self-service-monitoring-workshop"},"https://github.com/mxinden/self-service-monitoring-workshop"),")\n",(0,i.kt)("a",{parentName:"p",href:"https://mxinden.github.io/static/metric-driven-performance-optimization/slides.pdf"},"https://mxinden.github.io/static/metric-driven-performance-optimization/slides.pdf")),(0,i.kt)("h1",{id:"stackdriver"},"Stackdriver"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cloud.google.com/stackdriver/pricing"},"https://cloud.google.com/stackdriver/pricing")),(0,i.kt)("h2",{id:"monitoring--probes"},"Monitoring / Probes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/marketplace/details/google/prometheus"},"https://console.cloud.google.com/marketplace/details/google/prometheus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://prometheus.io/docs/visualization/grafana/"},"https://prometheus.io/docs/visualization/grafana/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://grafana.com/docs/grafana/latest/features/datasources/prometheus/"},"https://grafana.com/docs/grafana/latest/features/datasources/prometheus/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://itnext.io/kubernetes-monitoring-with-prometheus-in-15-minutes-8e54d1de2e13"},"https://itnext.io/kubernetes-monitoring-with-prometheus-in-15-minutes-8e54d1de2e13")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/"},"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://medium.com/@AADota/kubernetes-liveness-and-readiness-probes-difference-1b659c369e17"},"https://medium.com/@AADota/kubernetes-liveness-and-readiness-probes-difference-1b659c369e17")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cloud.google.com/blog/products/gcp/kubernetes-best-practices-setting-up-health-checks-with-readiness-and-liveness-probes"},"https://cloud.google.com/blog/products/gcp/kubernetes-best-practices-setting-up-health-checks-with-readiness-and-liveness-probes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blog.octo.com/liveness-et-readiness-probes-mettez-de-lintelligence-dans-vos-clusters/"},"https://blog.octo.com/liveness-et-readiness-probes-mettez-de-lintelligence-dans-vos-clusters/")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#examples"},"https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#examples"))))}l.isMDXComponent=!0}}]);