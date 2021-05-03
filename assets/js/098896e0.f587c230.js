(self.webpackChunksubstrate_playground=self.webpackChunksubstrate_playground||[]).push([[980],{5341:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return s},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l={id:"deployment",title:"Deployment"},i={unversionedId:"operating/deployment",id:"operating/deployment",isDocsHomePage:!1,title:"Deployment",description:"Kubernetes is used as a deployment platform for the playground. Make sure that k8s > 1.14 is used.",source:"@site/docs/operating/deployment.md",sourceDirName:"operating",slug:"/operating/deployment",permalink:"/substrate-playground/docs/operating/deployment",editUrl:"https://github.com/paritytech/substrate-playground/edit/master/website/docs/operating/deployment.md",version:"current",frontMatter:{id:"deployment",title:"Deployment"},sidebar:"someSidebar",previous:{title:"CI/CD",permalink:"/substrate-playground/docs/building/cicd"},next:{title:"workshops",permalink:"/substrate-playground/docs/operating/workshops"}},s=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Tools",id:"tools",children:[]},{value:"Custom overlay",id:"custom-overlay",children:[]},{value:"Github OAuth app",id:"github-oauth-app",children:[]},{value:"Fixed IP",id:"fixed-ip",children:[]},{value:"Cluster creation",id:"cluster-creation",children:[]},{value:"DNS",id:"dns",children:[]},{value:"TLS certificate",id:"tls-certificate",children:[]},{value:"Deployment",id:"deployment",children:[]}]}],p={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kubernetes is used as a deployment platform for the playground. Make sure that k8s > 1.14 is used.\nGKE is used as primary deploy platform. It might not work as is on others."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("h3",{id:"tools"},"Tools"),(0,o.kt)("h4",{id:"gcloud"},"Gcloud"),(0,o.kt)("p",null,"Install ",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/sdk/docs/"},"gcloud")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"#On OSX\nbrew cask install google-cloud-sdk\ngcloud init\n")),(0,o.kt)("h4",{id:"jq"},"jq"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"https://stedolan.github.io/jq/")),(0,o.kt)("h4",{id:"docker"},"Docker"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"https://docs.docker.com/get-docker/")),(0,o.kt)("h4",{id:"kubectl"},"kubectl"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"https://kubernetes.io/docs/tasks/tools/install-kubectl/")),(0,o.kt)("h4",{id:"kustomize"},"kustomize"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kustomize"},"https://github.com/kubernetes-sigs/kustomize")),(0,o.kt)("h3",{id:"custom-overlay"},"Custom overlay"),(0,o.kt)("p",null,"If a new deployment environment is created, duplicate ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/k8s/overlays/staging")," into a dedicated folder and adapt accordingly."),(0,o.kt)("h3",{id:"github-oauth-app"},"Github OAuth app"),(0,o.kt)("p",null,"Make sure a Github OAuth App is ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/developers/apps/creating-an-oauth-app"},"created")," with following parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Homepage URL"),": $BASE (e.g. ",(0,o.kt)("a",{parentName:"li",href:"https://playground.substrate.dev"},"https://playground.substrate.dev"),")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Authorization callback URL"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"$BASE/api/auth/github"),".")),(0,o.kt)("p",null,"During the ",(0,o.kt)("inlineCode",{parentName:"p"},"Configuration")," step both ",(0,o.kt)("inlineCode",{parentName:"p"},"Client ID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Client secret")," will be required."),(0,o.kt)("h3",{id:"fixed-ip"},"Fixed IP"),(0,o.kt)("p",null,"Make sure to use regional addresses, matching your cluster region. Global addresses won't work."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'gcloud compute addresses create playground --region us-central1\ngcloud compute addresses list --filter="region:( us-central1 )"\ngcloud compute addresses describe playground --region=us-central1 --format="value(address)"\n')),(0,o.kt)("p",null,"Then update ",(0,o.kt)("inlineCode",{parentName:"p"},"loadBalancerIP")," with the newly created IP in ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/k8s/overlays/$ENV/kustomization.yaml")),(0,o.kt)("h3",{id:"cluster-creation"},"Cluster creation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ENV=XXX make k8s-create-cluster\nENV=XXX make k8s-setup-env\n")),(0,o.kt)("h4",{id:"how-to-choose-a-machine-type"},"How to choose a machine type"),(0,o.kt)("p",null,"A default machine type is used in the script. It can be changed depending on needs."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/compute/docs/machine-types"},"https://cloud.google.com/compute/docs/machine-types")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/compute/docs/benchmarks-linux"},"https://cloud.google.com/compute/docs/benchmarks-linux")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/compute/vm-instance-pricing"},"https://cloud.google.com/compute/vm-instance-pricing"))),(0,o.kt)("h3",{id:"dns"},"DNS"),(0,o.kt)("p",null,"Create a new ",(0,o.kt)("a",{parentName:"p",href:"https://console.cloud.google.com/net-services/dns/zones/new/create?authuser=1&project=substrateplayground-252112"},"CloudDNS zone"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Public"),(0,o.kt)("li",{parentName:"ul"},"Zone name: playground-*"),(0,o.kt)("li",{parentName:"ul"},"DNS name: playground-*.substrate.dev"),(0,o.kt)("li",{parentName:"ul"},"DNSSec: off")),(0,o.kt)("p",null,"Fill a DevOps ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/devops/issues/732"},"request")," to redirect the new substrate.dev subdomain to CloudDNS.\nCan be checked with ",(0,o.kt)("inlineCode",{parentName:"p"},"dig +short playground-XX.substrate.dev NS")),(0,o.kt)("p",null,"Add two ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," record set (one with `",(0,o.kt)("inlineCode",{parentName:"p"},", one with "),"*` as DNS name) pointing to the newly created fixed IP (see previous step)."),(0,o.kt)("p",null,"Another record set will be added during the TLS certificate generation."),(0,o.kt)("h3",{id:"tls-certificate"},"TLS certificate"),(0,o.kt)("p",null,"To get a wildcard certificate from let's encrypt:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://certbot.eff.org/docs/using.html#manual"},"https://certbot.eff.org/docs/using.html#manual")),(0,o.kt)("p",null,"First make sure that certbot is installed: ",(0,o.kt)("inlineCode",{parentName:"p"},"brew install certbot")),(0,o.kt)("p",null,"Then request new challenges. Two DNS entries will have to be updated."),(0,o.kt)("h4",{id:"update"},"Update"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ENV=XXX make generate-challenge\n\n# Update CloudDNS by adding a new TXT record as detailed by certbot\n\n# Make sure to check it's been propagated\nENV=XXX make get-challenge\n")),(0,o.kt)("p",null,"Then update the tls secret:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ENV=XXX make k8s-update-certificate\n")),(0,o.kt)("p",null,"The new secret will be automatically picked up."),(0,o.kt)("h4",{id:"check"},"Check"),(0,o.kt)("p",null,"Certificates can be checked using openssl:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"openssl s_client -connect playground.substrate.dev:443 -servername playground.substrate.dev -showcerts\n# Or for client with no SNI support\nopenssl s_client -connect  playground.substrate.dev:443 -showcerts\n")),(0,o.kt)("h3",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"Finally, deploy the playground infrastructure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ENV=XXX make k8s-deploy-playground\n")))}u.isMDXComponent=!0},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);