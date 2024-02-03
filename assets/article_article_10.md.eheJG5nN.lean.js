import{_ as s,c as a,o as i,V as e}from"./chunks/framework.AX1JQ_e6.js";const b=JSON.parse('{"title":"Vite + TS 配置 .env 环境文件","description":"","frontmatter":{},"headers":[],"relativePath":"article/article/10.md","filePath":"article/article/10.md","lastUpdated":1706935107000}'),n={name:"article/article/10.md"},t=e(`<h1 id="vite-ts-配置-env-环境文件" tabindex="-1">Vite + TS 配置 .env 环境文件 <a class="header-anchor" href="#vite-ts-配置-env-环境文件" aria-label="Permalink to &quot;Vite + TS 配置 .env 环境文件&quot;">​</a></h1><h2 id="新建配置文件" tabindex="-1">新建配置文件 <a class="header-anchor" href="#新建配置文件" aria-label="Permalink to &quot;新建配置文件&quot;">​</a></h2><p>在项目的 <code>根目录</code> 下新建 <code>.env.development</code> 和 <code>.env.production</code> 两个配置文件</p><p>文件的名称必须这样定义，否则读取不到</p><ul><li><code>.env.development</code> 是开发环境使用的配置文件</li><li><code>.env.production</code> 是生产环境中使用的配置文件</li></ul><h2 id="写入内容" tabindex="-1">写入内容 <a class="header-anchor" href="#写入内容" aria-label="Permalink to &quot;写入内容&quot;">​</a></h2><p>下面使用接口的 <code>baseUrl</code> 来举例，内部可以定义一些变量，但是变量名必须是以 <code>VITE_</code> 为开头的名称</p><p>.env.development</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>VITE_BASE_URL = &#39;http://123.123.2.122:8888/api&#39;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="typescript-智能提示" tabindex="-1">TypeScript 智能提示 <a class="header-anchor" href="#typescript-智能提示" aria-label="Permalink to &quot;TypeScript 智能提示&quot;">​</a></h2><p>在 <code>src</code> 下新建 <code>env.d.ts</code> 加入下面内容，使以 <code>VITE_</code> 为前缀的用户自定义环境变量的 <code>TypeScript</code> 加入智能提示</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/// &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">reference</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> types</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vite/client&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ImportMetaEnv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  readonly</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> VITE_APP_TITLE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 更多环境变量...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ImportMeta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  readonly</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> env</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ImportMetaEnv</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="获取变量" tabindex="-1">获取变量 <a class="header-anchor" href="#获取变量" aria-label="Permalink to &quot;获取变量&quot;">​</a></h2><p>在配置文件中的变量可以在全局任意地方获取，获取方式为 <code>import.meta.env.VITE_xxx</code></p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">meta</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">VITE_BASE_URL</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="官方文档参考" tabindex="-1">官方文档参考 <a class="header-anchor" href="#官方文档参考" aria-label="Permalink to &quot;官方文档参考&quot;">​</a></h2><ul><li><a href="https://cn.vitejs.dev/guide/env-and-mode.html#production-replacement" target="_blank" rel="noreferrer">环境变量和模式</a></li></ul>`,17),l=[t];function p(r,h,d,c,o,k){return i(),a("div",null,l)}const g=s(n,[["render",p]]);export{b as __pageData,g as default};
