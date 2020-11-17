(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{52:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),c=(n(0),n(74)),l={id:"deployment",title:"Deployment"},o={unversionedId:"operating/deployment",id:"operating/deployment",isDocsHomePage:!1,title:"Deployment",description:"Update playground image",source:"@site/docs/operating/deployment.md",slug:"/operating/deployment",permalink:"/docs/operating/deployment",editUrl:"https://github.com/paritytech/substrate-playground/edit/master/website/docs/operating/deployment.md",version:"current",sidebar:"someSidebar",previous:{title:"CI/CD",permalink:"/docs/building/cicd"}},s=[{value:"Update playground image",id:"update-playground-image",children:[]},{value:"Kubernetes",id:"kubernetes",children:[{value:"Setup",id:"setup",children:[]},{value:"Clusters",id:"clusters",children:[]},{value:"TLS certificate",id:"tls-certificate",children:[]},{value:"Update fixed IP",id:"update-fixed-ip",children:[]}]}],u={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"update-playground-image"},"Update playground image"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"build and push new image (",Object(c.b)("inlineCode",{parentName:"li"},"make push-playground-docker-image"),")"),Object(c.b)("li",{parentName:"ul"},"deploy on GKE (",Object(c.b)("inlineCode",{parentName:"li"},"ENVIRONMENT=staging make k8s-deploy-playground"),")")),Object(c.b)("h2",{id:"kubernetes"},"Kubernetes"),Object(c.b)("p",null,"Kubernetes is used as a deployment platform for the playground. It can be deployed on GCE or locally via minikube.\n(Make sure that k8s 1.14 is used)"),Object(c.b)("h3",{id:"setup"},"Setup"),Object(c.b)("p",null,"For OSX"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"brew cask install google-cloud-sdk\ngcloud init\ngcloud container clusters get-credentials susbtrate-playground-staging --zone us-central1-a\nENVIRONMENT=staging make k8s-setup\n")),Object(c.b)("p",null,"Make sure a Github OAuth App is ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.github.com/en/developers/apps/creating-an-oauth-app"}),"created"),". The Authorization callback URL should be ",Object(c.b)("inlineCode",{parentName:"p"},"$BASE/api/auth/github"),"."),Object(c.b)("p",null,"Set required ConfigMap and Secret as defined in the newly created OAuth app:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),'# WARNING Make sure all needed info are set before running those commands\nkubectl create configmap config --namespace=playground --from-literal=admins="???,???" --from-literal=github.clientId="???"\nkubectl create secret generic secrets --namespace=playground --from-literal=github.clientSecret="???" --from-literal=rocket.secretKey=`openssl rand -base64 32`\n')),Object(c.b)("p",null,"Deploy on GKE:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl config use-context gke_substrateplayground-252112_us-central1-a_substrate-playground\nkubectl config set-context --current --namespace=playground\nmake k8s-deploy-playground\n")),Object(c.b)("h3",{id:"clusters"},"Clusters"),Object(c.b)("p",null,"When switching / recreating clusters it might be necessary to refresh credentials:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"gcloud container clusters get-credentials  susbtrate-playground-staging --zone us-central1-a\n")),Object(c.b)("p",null,"Playground is currently deployed on playground.substrate.dev. The cluster is hosted on GKE and composed of some ",Object(c.b)("inlineCode",{parentName:"p"},"n2-standard-4")," pods.\nFor more details about machines:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://cloud.google.com/compute/docs/machine-types"}),"https://cloud.google.com/compute/docs/machine-types")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://cloud.google.com/compute/vm-instance-pricing"}),"https://cloud.google.com/compute/vm-instance-pricing"))),Object(c.b)("p",null,"Install ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://cloud.google.com/sdk/docs/"}),"https://cloud.google.com/sdk/docs/")),Object(c.b)("p",null,"First make sure kubectl points to the right google cloud engine:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"gcloud auth application-default login\n\ngcloud container clusters get-credentials substrate-playground --zone us-central1-a --project substrateplayground-252112\n")),Object(c.b)("p",null,"You can then check it's correctly configured using:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl cluster-info\n")),Object(c.b)("p",null,"After deployment, the external facing IP can be found using:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"kubectl get services playground-http\n")),Object(c.b)("p",null,"Ensure that ",Object(c.b)("inlineCode",{parentName:"p"},"playground-http")," is correctly deployed by browsing its ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://console.cloud.google.com/kubernetes/service/us-central1-a/substrate-playground/default/playground-http?project=substrateplayground-252112&organizationId=939403632241&tab=events&duration=PT1H&pod_summary_list_tablesize=20&playground-http_events_tablesize=50"}),"events")),Object(c.b)("h3",{id:"tls-certificate"},"TLS certificate"),Object(c.b)("p",null,"To get a wildcard certificate from let's encrypt (this applies to staging, replace ",Object(c.b)("inlineCode",{parentName:"p"},"playground-staging")," with ",Object(c.b)("inlineCode",{parentName:"p"},"playground")," for production env):"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://certbot.eff.org/docs/using.html#manual"}),"https://certbot.eff.org/docs/using.html#manual")),Object(c.b)("p",null,"First make sure that certbot is installed: ",Object(c.b)("inlineCode",{parentName:"p"},"brew install certbot")),Object(c.b)("p",null,"Then request new challenges. Two DNS entries will have to be updated."),Object(c.b)("h4",{id:"staging"},"Staging"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo certbot certonly --manual --preferred-challenges dns --server https://acme-v02.api.letsencrypt.org/directory --manual-public-ip-logging-ok --agree-tos -m admin@parity.io -d *.playground-staging.substrate.dev -d playground-staging.substrate.dev\n\n# Make sure to check it's been propagated \ndig +short TXT _acme-challenge.playground-staging.substrate.dev @8.8.8.8\n")),Object(c.b)("p",null,"Then update the tls secret:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"gcloud container clusters get-credentials susbtrate-playground-staging --region us-central1-a\nENVIRONMENT=staging make k8s-setup\nsudo kubectl create secret tls playground-tls --save-config --key /etc/letsencrypt/live/playground-staging.substrate.dev/privkey.pem --cert /etc/letsencrypt/live/playground-staging.substrate.dev/fullchain.pem --namespace=playground --dry-run=true -o yaml | sudo kubectl apply -f -\n")),Object(c.b)("p",null,"The new secret will be auomatically picked up."),Object(c.b)("h4",{id:"production"},"Production"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"sudo certbot certonly --manual --preferred-challenges dns --server https://acme-v02.api.letsencrypt.org/directory --manual-public-ip-logging-ok --agree-tos -m admin@parity.io -d *.playground.substrate.dev -d playground.substrate.dev\n\n# Make sure to check it's been propagated \ndig +short TXT _acme-challenge.playground.substrate.dev @8.8.8.8\n")),Object(c.b)("p",null,"Then update the tls secret:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"gcloud container clusters get-credentials substrate-playground --region us-central1-a\nENVIRONMENT=production make k8s-setup\nsudo kubectl create secret tls playground-tls --save-config --key /etc/letsencrypt/live/playground.substrate.dev/privkey.pem --cert /etc/letsencrypt/live/playground.substrate.dev/fullchain.pem --namespace=playground --dry-run=true -o yaml | sudo kubectl apply -f -\n")),Object(c.b)("p",null,"The new secret will be auomatically picked up."),Object(c.b)("p",null,"Certificates can be checked using openssl:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"openssl s_client -connect playground.substrate.dev:443 -servername playground.substrate.dev -showcerts\n# Or for client with no SNI support\nopenssl s_client -connect  playground.substrate.dev:443 -showcerts\n")),Object(c.b)("h3",{id:"update-fixed-ip"},"Update fixed IP"),Object(c.b)("p",null,"Make sure to use regional addresses, matching your cluster region. Global addresses won't work."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"gcloud compute addresses create playground --global\ngcloud compute addresses describe playground --global\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),'gcloud compute addresses create playground --region us-central1\ngcloud compute addresses create playground-theia --region us-central1\ngcloud compute addresses create playground-staging --region us-central1\ngcloud compute addresses create playground-theia-staging --region us-central1\ngcloud compute addresses list --filter="region:( us-central1 )"\ngcloud compute addresses describe playground --region=us-central1 --format="value(address)"\n')),Object(c.b)("p",null,"playground-staging        34.69.4.59      EXTERNAL                    us-central1          RESERVED"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"gcloud compute addresses delete playground --global\n")))}p.isMDXComponent=!0},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),i=p(n),b=r,g=i["".concat(l,".").concat(b)]||i[b]||d[b]||c;return n?a.a.createElement(g,o(o({ref:t},u),{},{components:n})):a.a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<c;u++)l[u]=n[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);