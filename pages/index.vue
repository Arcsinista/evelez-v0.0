<template>
  <div class="min-h-screen bg-white">
    <NavBar />
    <HeroSection />
    <BrandsSection />
    <SectorsSection />
    <!-- <CatalogSection /> -->
    <AboutSection />
    <ContactSection />
    <FooterSection />
  </div>
</template>

<script setup>
// Meta tags for SEO
useHead({
  title: 'Uniformes Corporativos Vélez',
  meta: [
    { name: 'description', content: 'Fabricante y distribuidor de uniformes industriales y corporativos de alta calidad en México. Especialistas en uniformes para hoteles, manufactura, oficinas, seguridad y transporte.' },
    { name: 'keywords', content: 'uniformes empresariales, uniformes industriales, uniformes corporativos, uniformes para hoteles, uniformes manufactura' }
  ]
})
</script>

<style scoped>
/* Additional page-specific styles can go here */
</style>