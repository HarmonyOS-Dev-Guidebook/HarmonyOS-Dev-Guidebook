import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HarmonyOS-Dev-Guidebook",
  description: "鸿蒙开发指南",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '快速入门', link: '/尺寸' }
    ],

    sidebar: [
      {
        text: '快速入门',
        items: [
          { text: '尺寸', link: '/尺寸' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/HarmonyOS-Dev-Guidebook/HarmonyOS-Dev-Guidebook' }
    ]
  }
})
