// nuxt.config.js
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'AstroLab',
      meta: [
        { name: 'description', content: 'Providing the Ultimate Space Experiment Experience' },
        // Add more meta tags as needed (e.g., keywords, author)
      ],
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' },
        // Add more link tags as needed (e.g., favicon, preconnect)
      ],
    },
  },
});