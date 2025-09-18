<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="col-span-1 md:col-span-2">
          <div class="text-2xl font-bold text-blue-400 mb-4">
            Uniformes Corporativos Vélez
          </div>
          <p class="text-gray-300 mb-6 max-w-md">
            Más de 20 años vistiendo a las empresas de México con uniformes de la más alta calidad. 
            Somos distribuidores autorizados de las mejores marcas del mercado.
          </p>
          
          <!-- FAQ Preview -->
          <div class="mb-8">
            <h3 class="text-lg font-semibold mb-4">Preguntas Frecuentes</h3>
            <div class="space-y-3">
              <details class="group">
                <summary class="cursor-pointer text-gray-300 hover:text-white transition duration-200 flex items-center">
                  <span class="mr-2 group-open:rotate-90 transition-transform">▶</span>
                  ¿Cuánto tiempo tardan en procesar un pedido?
                </summary>
                <p class="text-gray-400 mt-2 ml-6">
                  El tiempo de procesamiento es normalmente de 7 a 15 días hábiles, dependiendo del volumen y personalización.
                </p>
              </details>
              
              <details class="group">
                <summary class="cursor-pointer text-gray-300 hover:text-white transition duration-200 flex items-center">
                  <span class="mr-2 group-open:rotate-90 transition-transform">▶</span>
                  ¿Hay cantidad mínima para personalización?
                </summary>
                <p class="text-gray-400 mt-2 ml-6">
                  Sí, la cantidad mínima varía según el tipo de prenda y personalización. Contáctanos para más detalles.
                </p>
              </details>
              
              <details class="group">
                <summary class="cursor-pointer text-gray-300 hover:text-white transition duration-200 flex items-center">
                  <span class="mr-2 group-open:rotate-90 transition-transform">▶</span>
                  ¿Qué métodos de pago aceptan?
                </summary>
                <p class="text-gray-400 mt-2 ml-6">
                  Aceptamos transferencias bancarias, tarjetas de crédito y débito, y otros métodos según tu preferencia.
                </p>
              </details>
            </div>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
          <ul class="space-y-2">
            <li>
              <a href="#inicio" class="text-gray-300 hover:text-white transition duration-200">
                Inicio
              </a>
            </li>
            <li>
              <a href="#sectores" class="text-gray-300 hover:text-white transition duration-200">
                Sectores
              </a>
            </li>
            <li>
              <a href="#catalogo" class="text-gray-300 hover:text-white transition duration-200">
                Catálogo
              </a>
            </li>
            <li>
              <a href="#contacto" class="text-gray-300 hover:text-white transition duration-200">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        
        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Contacto</h3>
          <div class="space-y-3">
            <div class="flex items-center">
              <span class="text-blue-400 mr-3">📧</span>
              <a class="text-gray-300 hover:text-white transition duration-200">
                uniformesvelez@hotmail.com
              </a>
            </div>
            <div class="flex items-center">
              <span class="text-blue-400 mr-3">📱</span>
              <a href="wa.me/5218130578792" class="text-gray-300 hover:text-white transition duration-200">
                Monterrey: (81) 3057 8792
              </a>
            </div>
            <div class="flex items-center">
              <span class="text-blue-400 mr-3">🕒</span>
              <span class="text-gray-300">
                L-V 9:00 a 18:00 hrs
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- CTA Section -->
      <div class="border-t border-gray-800 mt-12 pt-8">
        <div class="text-center">
          <h3 class="text-2xl font-bold mb-4">
            ¿Listo para uniformar a tu equipo?
          </h3>
          <p class="text-gray-300 mb-6">
            Solicita tu cotización sin compromiso y recibe atención personalizada
          </p>
          <a href="#contacto" 
             class="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 transform hover:scale-105">
            Solicitar Cotización
          </a>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 mt-8 pt-8 text-center">
        <p class="text-gray-400">
          © 2025 Uniformes Corporativos Vélez. Todos los derechos reservados. 
          Más de 20 años vistiendo a las empresas de México.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component logic
</script>