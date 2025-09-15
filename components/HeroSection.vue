<template>
  <section id="inicio" class="relative bg-gradient-to-r from-blue-900 to-blue-700 min-h-screen flex items-center pt-16">
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="text-white">
          <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Uniformes para tu 
            <span class="text-yellow-400">empresa</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-200">
            Contamos con un amplio catálogo de las mejores marcas en el mercado. 
            Te asesoramos personalmente para encontrar el modelo ideal para tu equipo.
          </p>
          <div class="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
            <a href="#contacto" class="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition duration-200 transform hover:scale-105">
              Solicita tu cotización
            </a>
            <a href="#catalogo" class="inline-block border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-200">
              Ver catálogo
            </a>
          </div>
        </div>
        
        <!-- Hero Images -->
        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1598053763750-0feb1ddaad6e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB1bmlmb3Jtc3xlbnwwfHx8fDE3NTc4NzU5NjV8MA&ixlib=rb-4.1.0&q=85" 
              alt="Uniforme profesional" 
              class="rounded-lg shadow-xl w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1577595353464-ac669bc9de95?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHx3b3JrJTIwdW5pZm9ybXN8ZW58MHx8fHwxNzU3ODc2MDEyfDA&ixlib=rb-4.0.3&q=85" 
              alt="Uniforme industrial" 
              class="rounded-lg shadow-xl w-full h-48 object-cover"
            />
          </div>
          <div class="space-y-4 mt-8">
            <img 
              src="https://images.unsplash.com/photo-1570227923466-c86256715853?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwyfHx3b3JrJTIwdW5pZm9ybXN8ZW58MHx8fHwxNzU3ODc2MDEyfDA&ixlib=rb-4.0.3&q=85" 
              alt="Uniforme de hostelería" 
              class="rounded-lg shadow-xl w-full h-48 object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/33898343/pexels-photo-33898343.jpeg" 
              alt="Uniforme corporativo" 
              class="rounded-lg shadow-xl w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    
    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
// Component logic can go here if needed
</script>