(function(){"use strict";var t={797:function(t,e,r){var n=r(3751),o=r(641);const a={class:"h-full"},s={key:2,class:"h-full"};function i(t,e,r,i,l,c){const u=(0,o.g2)("Loader"),d=(0,o.g2)("Error"),m=(0,o.g2)("SceenSaver"),p=(0,o.g2)("Waite"),f=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",a,[l.loading?((0,o.uX)(),(0,o.Wv)(u,{key:0})):c.has_error?((0,o.uX)(),(0,o.Wv)(d,{key:1})):((0,o.uX)(),(0,o.CE)("div",s,[(0,o.bF)(m),(0,o.bF)(p),(0,o.bF)(f,{class:"z-10 h-full"},{default:(0,o.k6)((e=>[(0,o.bF)(n.eB,{mode:"out-in",name:"page","enter-active-class":"duration-300 ease-out","enter-from-class":"transition transform opacity-0","enter-to-class":"opacity-100","leave-active-class":"duration-300 ease-in","leave-from-class":"opacity-100","leave-to-class":"transition transform opacity-0"},{default:(0,o.k6)((()=>[((0,o.uX)(),(0,o.Wv)((0,o.$y)(e.Component),{key:t.$route.path+t.load_index}))])),_:2},1024)])),_:1})]))])}r(4114);function l(t,e,r,n,a,s){const i=(0,o.g2)("TransitionChild"),l=(0,o.g2)("TransitionRoot");return(0,o.uX)(),(0,o.Wv)(l,{as:"template",show:a.sleep},{default:(0,o.k6)((()=>[(0,o.bF)(i,{as:"template",enter:"ease-out duration-500","enter-from":"opacity-0","enter-to":"opacity-100",leave:"ease-in duration-500","leave-from":"opacity-100","leave-to":"opacity-0"},{default:(0,o.k6)((()=>e[0]||(e[0]=[(0,o.Lk)("div",{class:"flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8"},[(0,o.Lk)("div",{class:"sm:mx-auto sm:w-full min-h-full sm:max-w-md"},[(0,o.Lk)("img",{class:"mx-auto h-96 w-auto rounded-full",src:"/static/images/Logo.png",alt:"Home App"})])],-1)]))),_:1})])),_:1},8,["show"])}var c=r(1115),u={name:"screen-saver",components:{TransitionChild:c._,TransitionRoot:c.O},data(){return{sleep:!1,idleTimeout:null}},mounted(){this.resetIdleTimer(),window.addEventListener("mousemove",this.resetIdleTimer),window.addEventListener("keydown",this.resetIdleTimer)},beforeUnmount(){window.removeEventListener("mousemove",this.resetIdleTimer),window.removeEventListener("keydown",this.resetIdleTimer),this.clearIdleTimeout()},methods:{setSleep(){this.sleep=!0},resetIdleTimer(){this.sleep=!1,this.clearIdleTimeout(),this.idleTimeout=setTimeout(this.setSleep,3e5)},clearIdleTimeout(){this.idleTimeout&&(clearTimeout(this.idleTimeout),this.idleTimeout=null)}}},d=r(6262);const m=(0,d.A)(u,[["render",l]]);var p=m;const f={"aria-live":"assertive",class:"pointer-events-none fixed inset-0 flex items-start px-4 py-6 sm:p-6 z-50"},h={class:"flex w-full flex-col items-center space-y-4 sm:items-end"},v={key:0,class:"pointer-events-auto w-48 overflow-hidden rounded-lg bg-zinc-700 shadow-lg ring-1 ring-zinc-500 mt-12"};function g(t,e,r,a,s,i){return(0,o.uX)(),(0,o.CE)("div",f,[(0,o.Lk)("div",h,[(0,o.bF)(n.eB,{"enter-active-class":"transform ease-out duration-300 transition","enter-from-class":"translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2","enter-to-class":"translate-y-0 opacity-100 sm:translate-x-0","leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:(0,o.k6)((()=>[i.waiting?((0,o.uX)(),(0,o.CE)("div",v,e[0]||(e[0]=[(0,o.Lk)("div",{class:"p-4"},[(0,o.Lk)("div",{class:"flex items-center"},[(0,o.Lk)("div",{class:"flex w-0 flex-1 justify-between"},[(0,o.Lk)("p",{class:"w-0 flex-1 text-sm font-medium text-white"},"Please wait"),(0,o.Lk)("span",{class:"ml-3 flex-shrink-0 rounded-md text-sm font-medium text-gray-200 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"},[(0,o.Lk)("svg",{class:"animate-spin -ml-1 mr-3 h-5 w-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[(0,o.Lk)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),(0,o.Lk)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})])])])])],-1)]))):(0,o.Q3)("",!0)])),_:1})])])}var w={name:"WaitIndicator",data(){return{}},computed:{waiting(){return this.$store.getters["waiting"]}},mounted(){}};const y=(0,d.A)(w,[["render",g]]);var k=y,x=r(3811),b=r(4121);const L={class:"flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8"},T={class:"sm:mx-auto sm:w-full min-h-full sm:max-w-xl"},C={class:"mt-8 text-center"};function _(t,e,r,n,a,s){return(0,o.uX)(),(0,o.CE)("div",L,[(0,o.Lk)("div",T,[e[1]||(e[1]=(0,o.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"mx-auto h-60 w-auto text-red-600"},[(0,o.Lk)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"})],-1)),e[2]||(e[2]=(0,o.Lk)("p",{class:"text-4xl md:text-6xl font-extralight tracking-wider mt-8 text-white text-center"},"We've encountered an error! ",-1)),e[3]||(e[3]=(0,o.Lk)("p",{class:"text-xl font-extralight tracking-wider mt-8 text-zinc-400 text-left"},"There might be a problem. Please check your internet connection. If it's working, try restarting the local server. If you still see this message, contact customer care for further assistance.",-1)),(0,o.Lk)("div",C,[(0,o.Lk)("button",{onClick:e[0]||(e[0]=t=>s.reload()),type:"button",class:"rounded-md bg-teal-600 px-5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-white/20"},"Retry")])])])}var O={name:"ErrorPage",data(){return{is_time:!1}},methods:{reload(){window.location.reload()}}};const j=(0,d.A)(O,[["render",_]]);var A=j,E={name:"app",mixins:[b.A],components:{SceenSaver:p,Loader:x.A,Waite:k,Error:A},data(){return{loading:!0,show_entity:!0,show_screensaver:!1}},methods:{async init(){let t=await this.$store.dispatch("getauthToken",{device_id:this.deviceID()});this.loading=!1,setInterval((()=>{this.$store.dispatch("log")}),1e3),t?"/login"===window.location.pathname&&this.$router.push("/"):"/login"!==window.location.pathname&&this.$router.push("/login")}},computed:{has_error(){return this.$store.getters["error"]}},mounted(){this.init()}};const S=(0,d.A)(E,[["render",i]]);var I=S,P=r(5220);const z=()=>r.e(965).then(r.bind(r,1965)),$=()=>r.e(244).then(r.bind(r,5244)),X=(0,P.aE)({history:(0,P.LA)(),linkActiveClass:"active",routes:[{path:"",component:z,name:"home"},{path:"/login",component:$,name:"login"}]});var F=X,M=r(6278),W=r(4335),B={async post(t,e,r={},n={},o=null){try{const t=await W.A.post("/backend/"+e,r,{params:n,timeout:o});return Object.prototype.hasOwnProperty.call(t.data,"data")?{status:!0,data:t.data.data}:{status:!0}}catch(a){if(!Object.prototype.hasOwnProperty.call(a,"response"))return{status:!1};switch(a.response.status){case 400:t.dispatch("error",a.response.data,{root:!0});break;default:break}return{status:!1}}},async file(t,e,r={},n={}){try{const t=await W.A.post("/backend/"+e,r,{headers:{"Content-Type":"multipart/form-data"},params:n});return Object.prototype.hasOwnProperty.call(t.data,"data")?{status:!0,data:t.data.data}:{status:!0}}catch(o){if(!Object.prototype.hasOwnProperty.call(o,"response"))return{status:!1};switch(o.response.status){case 400:t.dispatch("error",o.response.data,{root:!0});break;default:break}return{status:!1}}},async get(t,e,r={},n=6e4){try{const t=await W.A.get("/backend/"+e,{params:r,timeout:n});switch(t.status){case 200:case 201:return Object.prototype.hasOwnProperty.call(t.data,"data")?{status:!0,data:t.data.data}:{status:!0};default:return{status:!1}}}catch(o){if(!Object.prototype.hasOwnProperty.call(o,"response"))return{status:!1};switch(o.response.status){case 400:t.dispatch("error",o.response.data,{root:!0});break;default:break}return{status:!1}}}};const R=(0,M.y$)({namespaced:!0,modules:{},state(){return{waiting:!1,token:null,platform:null,auth_token:{},rooms:[],labels:[],room_types:{},device_id:{},error:!1}},getters:{rooms(t){return t.rooms},platform(t){return t.platform},error(t){return t.error},labels(t){return t.labels},device_id(t){return t.device_id},waiting(t){return t.waiting},token(t){return t.token},room_types(t){return t.room_types}},actions:{async api(t,e){let r=await B.post(t,"api",e);return!!r.status},async log(t,e){let r=await B.get(t,"log",e);return r.status&&t.commit("log",r.data.error),!1},async entities(t,e){let r=await B.get(t,"entities",e);return!!r.status&&(t.commit("entities",r.data),!0)},async setState(t,e){let r=await B.post(t,"set-state",e);return!!r.status},async getauthToken(t,e){let r=await B.post(t,"auth-token",e);return!!r.status&&(t.commit("platform",r.data),!0)},async doLogin(t,e){let r=await B.post(t,"do-login",e);return!!r.status&&(t.commit("platform",r.data),!0)}},mutations:{token(t,e){t.token=e},log(t,e){t.error=e},entities(t,e){t.labels!==e.labels&&(t.labels=e.labels),t.rooms!==e.rooms&&(t.rooms=e.rooms)},setRoomState(t,e){t.rooms[e.id].is_vacant=e.state},device_id(t,e){t.device_id=e},waiting(t,e){t.waiting=e},platform(t,e){t.platform=e},labels(t,e){t.room_types=e}}});var H=R;const D=(0,n.Ef)(I);D.use(F),D.use(H),D.mount("#app")},4121:function(t,e){e.A={data(){return{connection:null,auth:null,cookies:null}},methods:{createRipple(t){const e=t.currentTarget,r=document.createElement("span");r.classList.add("ripple");const n=e.getBoundingClientRect(),o=Math.max(n.width,n.height);r.style.width=r.style.height=`${o}px`,r.style.left=t.clientX-n.left-o/2+"px",r.style.top=t.clientY-n.top-o/2+"px",e.appendChild(r),r.addEventListener("animationend",(()=>{r.remove()}))},rndStr(t=20){let e=" ",r="abcdefghijklmnopqrstuvwxyz";for(let n=0;n<t;n++)e+=r.charAt(Math.floor(Math.random()*r.length));return e},setCookie(t,e,r){const n=new Date;n.setTime(n.getTime()+24*r*60*60*1e3);const o="expires="+n.toUTCString();document.cookie=t+"="+e+";"+o+";path=/"},getCookie(t){const e=t+"=",r=document.cookie.split(";");for(let n=0;n<r.length;n++){let t=r[n];while(" "===t.charAt(0))t=t.substring(1,t.length);if(0===t.indexOf(e))return t.substring(e.length,t.length)}return null},deviceID(){let t=this.getCookie("device_id");return t||(t=this.rndStr(40),this.setCookie("device_id",t,3650)),t},wait(t){this.$store.commit("waiting",t)}},computed:{token(){return this.$store.getters["token"]},waiting(){return this.$store.getters["waiting"]}},mounted(){}}},3811:function(t,e,r){r.d(e,{A:function(){return c}});var n=r(641);const o={class:"h-screen flex pt-28 justify-center"};function a(t,e,r,a,s,i){return(0,n.uX)(),(0,n.CE)("div",o,e[0]||(e[0]=[(0,n.Fv)('<div class="inline-block h-16 shadow-lg px-8 text-zinc-600 dark:text-zinc-400 font-bold bg-white dark:bg-zinc-900 rounded-md"><div class="flex h-full items-center"><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-zinc-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Loading </div></div>',1)]))}var s={name:"AppLoader"},i=r(6262);const l=(0,i.A)(s,[["render",a]]);var c=l}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n].call(a.exports,a,a.exports,r),a.exports}r.m=t,function(){var t=[];r.O=function(e,n,o,a){if(!n){var s=1/0;for(u=0;u<t.length;u++){n=t[u][0],o=t[u][1],a=t[u][2];for(var i=!0,l=0;l<n.length;l++)(!1&a||s>=a)&&Object.keys(r.O).every((function(t){return r.O[t](n[l])}))?n.splice(l--,1):(i=!1,a<s&&(s=a));if(i){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[n,o,a]}}(),function(){r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,n){return r.f[n](t,e),e}),[]))}}(),function(){r.u=function(t){return"static/js/"+t+".js"}}(),function(){r.miniCssF=function(t){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="my-vue-app:";r.l=function(n,o,a,s){if(t[n])t[n].push(o);else{var i,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==e+a){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",e+a),i.src=n),t[n]=[o];var m=function(e,r){i.onerror=i.onload=null,clearTimeout(p);var o=t[n];if(delete t[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(t){return t(r)})),e)return e(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p=""}(),function(){var t={524:0};r.f.j=function(e,n){var o=r.o(t,e)?t[e]:void 0;if(0!==o)if(o)n.push(o[2]);else{var a=new Promise((function(r,n){o=t[e]=[r,n]}));n.push(o[2]=a);var s=r.p+r.u(e),i=new Error,l=function(n){if(r.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,o[1](i)}};r.l(s,l,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,a,s=n[0],i=n[1],l=n[2],c=0;if(s.some((function(e){return 0!==t[e]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(l)var u=l(r)}for(e&&e(n);c<s.length;c++)a=s[c],r.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return r.O(u)},n=self["webpackChunkmy_vue_app"]=self["webpackChunkmy_vue_app"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=r.O(void 0,[504],(function(){return r(797)}));n=r.O(n)})();
//# sourceMappingURL=app.js.map