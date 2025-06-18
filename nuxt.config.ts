// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  
  // Development tools
  devtools: { enabled: true },
  
  // Optimization
  app: {
    head: {
      title: 'Covenant Church',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Covenant Church - Faith, Community, Purpose' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/Covenant-Color-Logo.svg' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  
  // CSS
  css: [
    // Global CSS file if needed
    '~/assets/css/fonts.css'
  ],
  
  // Build configuration
  build: {
    transpile: ['gsap'],
  },
  
  // Modules
  modules: [
    // Add modules as needed
  ],
  
  // Performance optimization
  nitro: {
    compressPublicAssets: true,
  },
  
  // Runtime configuration
  runtimeConfig: {
    // Keys within public are also exposed client-side
    public: {
      appName: 'Covenant Church'
    }
  }
})
