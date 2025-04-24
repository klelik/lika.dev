// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  srcDir: "./src",
  components: [
    "@/components",
    "@/components/atoms",
    { path: "@/components/blocks", global: true },
  ],

  css: ["@/assets/scss/styles.scss"],
  modules: ["nuxt-svgo", "@vueuse/nuxt"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        // {
        //   rel: 'apple-touch-icon',
        //   sizes: '60x60',
        //   href: '/favicon/apple-touch-icon.png'
        // },
        // {
        //   rel: 'icon',
        //   type: 'image/png',
        //   sizes: '32x32',
        //   href: '/favicon/favicon-32x32.png'
        // },
        // {
        //   rel: 'icon',
        //   type: 'image/png',
        //   sizes: '16x16',
        //   href: '/favicon/favicon-16x16.png'
        // },
        // { rel: 'manifest', href: '/favicon/site.webmanifest' },
        // {
        //   rel: 'mask-icon',
        //   href: '/favicon/safari-pinned-tab.svg',
        //   color: '#142e4a'
        // }
      ],
      script: [],
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1",
        },
        { charset: "utf-8" },
        { name: "msapplication-TileColor", content: "#2b5797" },
        { name: "theme-color", content: "#ffffff" },
      ],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    layoutTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  devtools: { enabled: true },
});
