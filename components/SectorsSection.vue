<template>
  <section id="sectores" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">
          Uniformes para Cada Sector
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Sabemos que cada industria tiene sus propias necesidades. Por eso, ofrecemos uniformes específicos para cada sector.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(sector, index) in sectors" :key="index" 
             class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
          <div class="relative h-48 bg-gradient-to-br from-blue-500 to-blue-700">
            <img :src="sector.image" :alt="sector.name" 
                 class="w-full h-full object-cover mix-blend-overlay opacity-80"/>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-white text-6xl">
                {{ sector.icon }}
              </div>
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              {{ sector.name }}
            </h3>
            <p class="text-gray-600 mb-4">
              {{ sector.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span v-for="item in sector.items" :key="item" 
                    class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const sectors = [
  {
    name: 'Hotelero y Turístico',
    description: 'Uniformes elegantes y funcionales para hoteles, restaurantes y servicios turísticos.',
    icon: '🏨',
    image: 'https://images.unsplash.com/photo-1570227923466-c86256715853',
    items: ['Recepción', 'Housekeeping', 'Restaurante', 'Cocina']
  },
  {
    name: 'Maquilas y Manufactura',
    description: 'Ropa de trabajo resistente y segura para entornos industriales.',
    icon: '🏭',
    image: 'https://images.unsplash.com/photo-1577595353464-ac669bc9de95',
    items: ['Overoles', 'Camisas', 'Pantalones', 'Alta Visibilidad']
  },
  {
    name: 'Servicios de Seguridad',
    description: 'Uniformes profesionales para personal de seguridad y vigilancia.',
    icon: '🛡️',
    image: 'https://images.unsplash.com/photo-1598053763750-0feb1ddaad6e',
    items: ['Camisas', 'Pantalones', 'Chalecos', 'Accesorios']
  },
  {
    name: 'Oficinas Corporativas',
    description: 'Vestimenta ejecutiva y profesional para ambientes corporativos.',
    icon: '🏢',
    image: 'https://images.pexels.com/photos/33898343/pexels-photo-33898343.jpeg',
    items: ['Camisas', 'Blusas', 'Pantalones', 'Blazers']
  },
  {
    name: 'Transporte y Logística',
    description: 'Uniformes cómodos y duraderos para operadores de transporte.',
    icon: '🚛',
    image: 'https://images.pexels.com/photos/33891045/pexels-photo-33891045.jpeg',
    items: ['Polos', 'Pantalones', 'Chamarras', 'Chalecos']
  },
  {
    name: 'Sector Público',
    description: 'Uniformes institucionales para dependencias gubernamentales.',
    icon: '🏛️',
    image: 'https://images.unsplash.com/photo-1598053763750-0feb1ddaad6e',
    items: ['Camisas', 'Pantalones', 'Blazers', 'Accesorios']
  }
]
</script>