import{_ as s,o as a,c as e,a as n}from"./app.7748d0de.js";const _=JSON.parse('{"title":"服务器配置","description":"","frontmatter":{},"headers":[{"level":2,"title":"安装 Apache","slug":"安装-apache","link":"#安装-apache","children":[]},{"level":2,"title":"安装 Node","slug":"安装-node","link":"#安装-node","children":[]},{"level":2,"title":"安装 Git","slug":"安装-git","link":"#安装-git","children":[]}],"relativePath":"docs/server/server-1.md"}'),l={name:"docs/server/server-1.md"},p=n(`<h1 id="服务器配置" tabindex="-1">服务器配置 <a class="header-anchor" href="#服务器配置" aria-hidden="true">#</a></h1><h2 id="安装-apache" tabindex="-1">安装 Apache <a class="header-anchor" href="#安装-apache" aria-hidden="true">#</a></h2><p>Apache（全名为 Apache HTTP Server）是一个开源的、跨平台的 Web 服务器软件，它是由 Apache 软件基金会（Apache Software Foundation）开发和维护的。Apache 是目前全球使用最广泛的 Web 服务器之一，许多网站和应用程序都在其上运行。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">update</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apache2</span></span>
<span class="line"></span></code></pre></div><p>Apache 的网站根目录是 <code>/var/www/html/</code></p><p>这样就可以通过公网访问到了</p><h2 id="安装-node" tabindex="-1">安装 Node <a class="header-anchor" href="#安装-node" aria-hidden="true">#</a></h2><p>建立软连接</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/usr/bin</span></span>
<span class="line"><span style="color:#FFCB6B;">ln</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/node安装目录/bin/node</span></span>
<span class="line"><span style="color:#FFCB6B;">ln</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/node安装目录/bin/npm</span></span>
<span class="line"></span></code></pre></div><h2 id="安装-git" tabindex="-1">安装 Git <a class="header-anchor" href="#安装-git" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">apt-get</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">git</span></span>
<span class="line"></span></code></pre></div>`,11),o=[p];function t(c,r,i,d,h,y){return a(),e("div",null,o)}const u=s(l,[["render",t]]);export{_ as __pageData,u as default};