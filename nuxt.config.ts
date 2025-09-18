// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  components: true,
  app: {
    head: {
      title: 'Uniformes Corporativos Vélez',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Fabricante y distribuidor de uniformes industriales y corporativos de alta calidad en México. Especialistas en uniformes para hoteles, manufactura, oficinas, seguridad y transporte.' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      emailjsServiceId: "",
      emailjsTemplateId: "",
      emailjsUserId: "",
    },
  },
})

