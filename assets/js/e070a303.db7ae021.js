(self.webpackChunksubstrate_playground=self.webpackChunksubstrate_playground||[]).push([[239],{1442:function(e,t,n){"use strict";n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m}});var r=n(2122),a=n(9756),i=n(7294),o=n(3905),s=n(1140),c=n.n(s);c().initialize({startOnLoad:!0});var u=function(e){var t=e.chart;return(0,i.useEffect)((function(){c().contentLoaded()}),[]),i.createElement("div",{className:"mermaid"},t)},d={id:"architecture",title:"Architecture"},l=void 0,p={unversionedId:"building/architecture",id:"building/architecture",isDocsHomePage:!1,title:"Architecture",description:"Users can use a TypeScript base front end to communicate with a backend. This HTTP server is hosted on kubernetes and deploys custom theia (a web based VSCode IDE) containers via kubernetes API.",source:"@site/docs/building/architecture.md",sourceDirName:"building",slug:"/building/architecture",permalink:"/substrate-playground/docs/building/architecture",editUrl:"https://github.com/paritytech/substrate-playground/edit/master/website/docs/building/architecture.md",tags:[],version:"current",frontMatter:{id:"architecture",title:"Architecture"},sidebar:"someSidebar",previous:{title:"Integration",permalink:"/substrate-playground/docs/extending/integration"},next:{title:"Build",permalink:"/substrate-playground/docs/building/build"}},m=[{value:"Frontend",id:"frontend",children:[]}],b={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Users can use a TypeScript base front end to communicate with a backend. This HTTP server is hosted on kubernetes and deploys custom ",(0,o.kt)("a",{parentName:"p",href:"https://www.theia-ide.org/"},"theia")," (a web based VSCode IDE) containers via kubernetes API."),(0,o.kt)("p",null,"A workspace is the deployment of a template for a user at a time.\nA user can have a single workspace at a time.\nTemplate details can be updated (ports, ..) as well as workspace details (maxDuration)"),(0,o.kt)("p",null,"Workspace details can also be updated during the lifetime of a workspace"),(0,o.kt)("h2",{id:"frontend"},"Frontend"),(0,o.kt)(u,{chart:"\nstateDiagram-v2\n    [*] --\x3e Terms\n    Terms --\x3e Terms: ignored\n    Terms --\x3e Unlogged: accepted\n    Unlogged --\x3e Panel: login\n    Panel --\x3e Unlogged: logout\n    Panel --\x3e Panel: select panel\n",mdxType:"Mermaid"}))}h.isMDXComponent=!0},1748:function(e,t,n){var r={"./locale":9234,"./locale.js":9234};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=1748}}]);