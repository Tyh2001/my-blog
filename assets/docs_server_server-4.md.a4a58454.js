import{_ as s,o as n,c as a,a as l}from"./app.11ec60b9.js";const C=JSON.parse('{"title":"Nginx","description":"","frontmatter":{},"headers":[{"level":2,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]}],"relativePath":"docs/server/server-4.md"}'),p={name:"docs/server/server-4.md"},o=l(`<h1 id="nginx" tabindex="-1">Nginx <a class="header-anchor" href="#nginx" aria-hidden="true">#</a></h1><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-hidden="true">#</a></h2><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 安装 nginx</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">update</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apt</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看 nginx 安装路径</span></span>
<span class="line"><span style="color:#82AAFF;">which</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 检查是否配置正确</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-t</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重启 nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apt-get</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--purge</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">remove</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apt-get</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">autoremove</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 查看Nginx系统模块，已安装的全部卸载</span></span>
<span class="line"><span style="color:#FFCB6B;">dpkg</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--get-selections</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">grep</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apt-get</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--purge</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">remove</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">nginx-common</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apt-get</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--purge</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">remove</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">nginx-core</span></span>
<span class="line"><span style="color:#FFCB6B;">dpkg</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--get-selections</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">grep</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apt-get</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 自动移除全部不使用的软件包</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">apt-get</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">autoremove</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 重启 nginx</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">systemctl</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">nginx</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">/etc/init.d/apache2</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">stop</span><span style="color:#BABED8;"> </span><span style="color:#676E95;font-style:italic;"># 如果重启失败了先执行这个</span></span>
<span class="line"></span></code></pre></div>`,4),e=[o];function t(c,r,y,i,B,E){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};
