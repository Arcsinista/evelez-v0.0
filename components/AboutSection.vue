<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div>
          <h2 class="text-4xl font-bold text-gray-900 mb-6">
            Viste a tu equipo con el nivel que tu 
            <span class="text-blue-600">empresa merece</span>
          </h2>
          <p class="text-lg text-gray-600 mb-8">
            En Uniformes Corporativos Vélez sabemos lo importante que es que cada persona se sienta cómoda y segura con lo que usa día a día.
          </p>
          <p class="text-lg text-gray-600 mb-8">
            Por eso, trabajamos con las mejores marcas nacionales e internacionales, cuidando cada parte del proceso: 
            desde la cotización hasta la entrega final.
          </p>
          <div class="mb-8">
            <div class="text-center mb-4">
              <span class="text-5xl font-bold text-blue-600">20+</span>
              <p class="text-xl font-semibold text-gray-900">Años de Experiencia</p>
              <p class="text-gray-600">Vistiendo a las empresas de México</p>
            </div>
          </div>
          <a href="#contacto" 
             class="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-200 transform hover:scale-105">
            Solicita tu Cotización
          </a>
        </div>
        
        <!-- Features Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div v-for="(feature, index) in features" :key="index" 
               class="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition duration-300">
            <div class="text-3xl mb-4">{{ feature.icon }}</div>
            <h3 class="font-bold text-gray-900 mb-2">{{ feature.title }}</h3>
            <p class="text-gray-600 text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: '💬',
    title: 'Cotización sin Compromiso',
    description: 'Podemos ayudarte a elegir el uniforme ideal según tus necesidades.'
  },
  {
    icon: '🎨',
    title: 'Aplicación de Logo',
    description: 'Incorporamos el logo de tu empresa con bordado, serigrafía, DTF, entre otros.'
  },
  {
    icon: '🇲🇽',
    title: 'Cobertura Nacional',
    description: 'Hacemos entregas a todo México. Recibe directamente en tu empresa.'
  },
  {
    icon: '💰',
    title: 'Precios Competitivos',
    description: 'Surtimos pedidos de mayoreo o menudeo con los mejores precios.'
  },
  {
    icon: '📚',
    title: 'Amplio Catálogo',
    description: 'Distribuidores autorizados de las mejores marcas del mercado.'
  },
  {
    icon: '👨‍💼',
    title: 'Atención Personalizada',
    description: 'Sucursales en Chihuahua, Cd. Juárez y Monterrey para servirte mejor.'
  }
]
</script>