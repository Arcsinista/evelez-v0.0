<template>
  <section id="catalogo" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">
          Catálogos de las Marcas que Manejamos
        </h2>
        <p class="text-xl text-gray-600">
          Explora nuestro amplio catálogo de productos de las mejores marcas
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(catalog, index) in catalogs" :key="index" 
             class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group">
          <div class="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300">
            <img :src="catalog.image" :alt="`Catálogo ${catalog.brand}`" 
                 class="w-full h-full object-cover group-hover:scale-105 transition duration-300"/>
            <div class="absolute top-4 right-4">
              <span class="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {{ catalog.brand }}
              </span>
            </div>
          </div>
          
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              {{ catalog.brand }}
            </h3>
            <p class="text-gray-600 mb-4">
              {{ catalog.description }}
            </p>
            
            <!-- Product categories -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="category in catalog.categories" :key="category" 
                    class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                {{ category }}
              </span>
            </div>
            
            <!-- Action buttons -->
            <div class="flex space-x-2">
              <button v-if="catalog.hasDownload" 
                      class="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-4-4m4 4l4-4m-6 4h8M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
                Ver Catálogo
              </button>
              <button v-else 
                      class="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-200">
                Disponible en Tienda
              </button>
              <button class="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-200">
                Cotizar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const catalogs = [
  {
    brand: 'Dickies',
    description: 'Marca líder en ropa de trabajo con más de 95 años de experiencia.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7',
    categories: ['Camisas', 'Pantalones', 'Overoles', 'Uniformes industriales'],
    hasDownload: true
  },
  {
    brand: 'BigBang',
    description: 'Uniformes modernos y funcionales para diversas industrias.',
    image: 'https://images.unsplash.com/photo-1614231125961-38323d6c485b',
    categories: ['Camisas', 'Pantalones', 'Alta Visibilidad'],
    hasDownload: true
  },
  {
    brand: 'Red Kap',
    description: 'Ropa de trabajo duradera para ambientes industriales exigentes.',
    image: 'https://images.pexels.com/photos/12113816/pexels-photo-12113816.jpeg',
    categories: ['Camisas', 'Pantalones', 'Ropa de trabajo'],
    hasDownload: false
  },
  {
    brand: 'Port Authority',
    description: 'Uniformes corporativos y casuales de alta calidad.',
    image: 'https://images.pexels.com/photos/7202944/pexels-photo-7202944.jpeg',
    categories: ['Chamarras', 'Camisas', 'Polos'],
    hasDownload: false
  },
  {
    brand: 'Gildan',
    description: 'Marca reconocida por su calidad y comodidad en textiles.',
    image: 'https://images.unsplash.com/photo-1496200186974-4293800e2c20',
    categories: ['Sudaderas', 'Playeras', 'Polos'],
    hasDownload: false
  },
  {
    brand: 'Mayork',
    description: 'Especialistas en polos y camisetas de alta calidad.',
    image: 'https://images.unsplash.com/photo-1662052955098-042b46e60c2b',
    categories: ['Polos'],
    hasDownload: false
  }
]
</script>