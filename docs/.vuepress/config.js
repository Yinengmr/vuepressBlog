const sidebar = require('./conf/sidebar');

module.exports = {
  title: 'Danny的笔记',
  description: 'Personal Website',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/images/photo.jpg' }],
    ['link', { rel: 'manifest', href: '/images/photo.jpg' }],
    ['link', { rel: 'apple-touch-icon', href: '/images/photo.jpg' }],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache'}],
    ['meta', { 'http-quiv': 'pragma', cotent: 'no-cache,must-revalidate'}],
    ['meta', { 'http-quiv': 'expires', cotent: '0'}]
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块是否显示行号
  },
  themeConfig: {
    nav: [ // 导航栏配置
      {text: '前端', link: '/accumulate/' },
      {text: 'Git 和 GitHub', link: '/git/' },
      {text: '诗和远方', link: '/others/'},
      {
        text: 'Others', 
        items: [
          {text: 'Windows', link: '/windows/'},
          {text: 'Linux', link: '/linux/'},
          {text: 'Nginx', link: '/nginx/'},
        ]
      },
      // {text: '微博', link: 'https://baidu.com'}      
    ],

    // 侧边栏配置
    sidebar,
    // sidebar: 'auto',
    sidebarDepth: 2
  }
};