import{R as i}from"./chunks/theme.CfqOT5DS.js";import{R as o,ao as u,ap as c,aq as l,ar as f,as as d,at as m,au as h,av as A,aw as g,ax as v,d as w,u as y,k as P,v as R,ay as C,az as b,aA as E,ac as S}from"./chunks/framework.dtLWRnJz.js";function p(e){if(e.extends){const a=p(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=p(i),T=w({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=y();return P(()=>{R(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&C(),b(),E(),s.setup&&s.setup(),()=>S(s.Layout)}});async function x(){globalThis.__VITEPRESS__=!0;const e=_(),a=D();a.provide(c,e);const t=l(e.route);return a.provide(f,t),a.component("Content",d),a.component("ClientOnly",m),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:h}),{app:a,router:e,data:t}}function D(){return A(T)}function _(){let e=o,a;return g(t=>{let n=v(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&x().then(({app:e,router:a,data:t})=>{a.go().then(()=>{u(a.route,t.site),e.mount("#app")})});export{x as createApp};