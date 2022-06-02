import { defineConfig } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'

const config = defineConfig({
  title: 'Tyh',
  head: [['link', { rel: 'icon', href: 'https://tianyuhao.cn/images/my.png' }]],
  description:
    'Tyh,Tyh2001,tyh,博客,Admin,前端开发,javascript,php,node,jquery,git,python,java,sql,mysql,linux,go语言,golang,前端,教程,软件,编程,互联网,tyh-ui,TYH-UI,tyh,TYH,ui,UI,element,框架,组件库,组件,vue,vue3,码云,NPM,npm,components,js,github,gitee,npm,vant,element3,vite,viewUI,tyh-ui,tyh ui,ui tyh,tyh-ui2,tyh-ui,tyh2001的个人网站',
  base: '/blog/',
  themeConfig: {
    logo: 'https://tianyuhao.cn/images/my.png',
    nav,
    sidebar
  }
})

export default config
