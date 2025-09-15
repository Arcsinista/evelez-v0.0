<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">
          Marcas de Confianza
        </h2>
        <p class="text-lg text-gray-600">
          Trabajamos con las mejores marcas del mercado para garantizar calidad y durabilidad
        </p>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
        <div v-for="(brand, index) in brands" :key="index" class="flex justify-center">
          <img 
            :src="brand.logo" 
            :alt="brand.name" 
            class="h-16 w-auto filter grayscale hover:grayscale-0 transition duration-300 transform hover:scale-110"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const brands = [
  {
    name: 'Dickies',
    logo: 'https://images.unsplash.com/photo-1496200186974-4293800e2c20?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwbG9nb3N8ZW58MHx8fHwxNzU3ODc3OTQ5fDA&ixlib=rb-4.1.0&q=85'
  },
  {
    name: 'Red Kap',
    logo: 'https://images.unsplash.com/photo-1662052955098-042b46e60c2b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHxjb21wYW55JTIwbG9nb3N8ZW58MHx8fHwxNzU3ODc3OTQ5fDA&ixlib=rb-4.1.0&q=85'
  },
  {
    name: 'Port Authority',
    logo: 'https://images.unsplash.com/photo-1662052955282-da15376f3919?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxjb21wYW55JTIwbG9nb3N8ZW58MHx8fHwxNzU3ODc3OTQ5fDA&ixlib=rb-4.1.0&q=85'
  },
  {
    name: 'Gildan',
    logo: 'https://images.unsplash.com/photo-1662027044921-6febc57a0c53?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHw0fHxjb21wYW55JTIwbG9nb3N8ZW58MHx8fHwxNzU3ODc3OTQ5fDA&ixlib=rb-4.1.0&q=85'
  },
  {
    name: 'BigBang',
    logo: 'https://images.pexels.com/photos/12113816/pexels-photo-12113816.jpeg'
  },
  {
    name: 'Mayork',
    logo: 'https://images.pexels.com/photos/7202944/pexels-photo-7202944.jpeg'
  }
]
</script>