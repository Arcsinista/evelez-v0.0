<template>
  <section id="inicio" class="relative bg-gradient-to-r from-gray-900 to-gray-600 min-h-screen flex items-center pt-16">
    <div class="absolute inset-0 bg-black bg-opacity-40"></div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="text-white">
          <h1 class="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Uniformes para tu 
            <span class="text-gray-400">empresa</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-200">
            Contamos con un amplio catálogo de las mejores marcas en el mercado. 
            Te asesoramos personalmente para encontrar el modelo ideal para tu equipo.
          </p>
          <div class="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
            <a href="#contacto" class="inline-block bg-gray-100 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-400 transition duration-200 transform hover:scale-105">
              Solicita tu cotización
            </a>
            <a href="#catalogo" class="inline-block border-1 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold  hover:transition duration-200 hover:scale-105">
              Ver catálogo
            </a>
          </div>
        </div>

        <!-- Hero Images -->
  <div class="overflow-hidden rounded-lg">
    <div ref="track" class="flex transition-transform duration-700 ease-in-out" :style="{ transform: `translateX(-${currentIndex * 100}%)` }" @transitionend="handleTransitionEnd">
        <!-- Componentizar -->
         
            <!-- Card 1 -->
            <div class="min-w-full grid grid-cols-3 gap-4 p-6 box-border">
              <div class="space-y-4">
                <img
                  :src="model1"
                  alt="Uniforme profesional"
                  class="rounded-lg shadow-xl w-full h-64 object-cover"
                />
                <img
                :src="model2"
                alt="Uniforme profesional"
                class="rounded-lg shadow-xl w-full h-64 object-cover mt-4"
                />
              </div>
              <div class="space-y-4 mt-8">
                <img
                :src="model3"
                alt="Uniforme corporativo"
                class="rounded-lg shadow-xl w-full h-64 object-cover"
                />
                <img
                  :src="model4"
                  alt="Uniforme corporativo"
                  class="rounded-lg shadow-xl w-full h-64 object-cover"
                />
              </div>

              <div class="space-y-4">
                <img
                  :src="model5"
                  alt="Uniforme profesional"
                  class="rounded-lg shadow-xl w-full h-64 object-cover"
                />
                <img
                :src="model6"
                alt="Uniforme profesional"
                class="rounded-lg shadow-xl w-full h-64 object-cover mt-4"
                />
              </div>
            </div>
            <!-- Card 2 -->
            <div class="min-w-full grid grid-cols-3 gap-4 p-6 box-border">
              <div class="space-y-4">
                <img
                  :src="model1"
                  alt="Uniforme profesional"
                  class="rounded-lg shadow-xl w-full h-64 object-cover"
                />
                <img
                :src="model2"
                alt="Uniforme profesional"
                class="rounded-lg shadow-xl w-full h-64 object-cover mt-4"
                />
              </div>
              <div class="space-y-4 mt-8">
                <img
                :src="model3"
                alt="Uniforme corporativo"
                class="rounded-lg shadow-xl w-full h-64 object-cover"
                />
                <img
                  :src="model4"
                  alt="Uniforme corporativo"
                  class="rounded-lg shadow-xl w-full h-64 object-cover"
                />
              </div>

              <div class="space-y-4">
                <img
                  :src="model5"
                  alt="Uniforme profesional"
                  class="rounded-lg shadow-xl w-full h-64 object-cover"
                />
                <img
                :src="model6"
                alt="Uniforme profesional"
                class="rounded-lg shadow-xl w-full h-64 object-cover mt-4"
                />
              </div>
            </div>
            <!-- Clon del Card 1 -->
            <div class="min-w-full grid grid-cols-3 gap-4 p-6 box-border">
              <div class="space-y-4">
                <img
                  :src="model1"
                  alt="Uniforme profesional"
                  class="rounded-lg shadow-xl w-full h-64 object-cover"
                />
                <img
                :src="model2"
                alt="Uniforme profesional"
                class="rounded-lg shadow-xl w-full h-64 object-cover mt-4"
                />
              </div>
              <div class="space-y-4 mt-8">
                <img
                :src="model3"
                alt="Uniforme corporativo"
                class="rounded-lg shadow-xl w-full h-64 object-cover"
                />
                <img
                  :src="model4"
                  alt="Uniforme corporativo"
                  class="rounded-lg shadow-xl w-full h-64 object-cover"
                />
              </div>

              <div class="space-y-4">
                <img
                  :src="model5"
                  alt="Uniforme profesional"
                  class="rounded-lg shadow-xl w-full h-64 object-cover"
                />
                <img
                :src="model6"
                alt="Uniforme profesional"
                class="rounded-lg shadow-xl w-full h-64 object-cover mt-4"
                />
              </div>
            </div>

          </div>
        </div>

        <!-- <div class="grid grid-cols-3 gap-8">
          <div class="space-y-4">
            <img
              :src="model1"
              alt="Uniforme profesional"
              class="rounded-lg shadow-xl w-full h-64 object-cover"
            />
            <img
            :src="model2"
            alt="Uniforme profesional"
            class="rounded-lg shadow-xl w-full h-64 object-cover mt-4"
            />
          </div>
          <div class="space-y-4 mt-8">
            <img
            :src="model3"
            alt="Uniforme corporativo"
            class="rounded-lg shadow-xl w-full h-64 object-cover"
            />
            <img
              :src="model4"
              alt="Uniforme corporativo"
              class="rounded-lg shadow-xl w-full h-64 object-cover"
            />
          </div>

          <div class="space-y-4">
            <img
              :src="model5"
              alt="Uniforme profesional"
              class="rounded-lg shadow-xl w-full h-64 object-cover"
            />
            <img
            :src="model6"
            alt="Uniforme profesional"
            class="rounded-lg shadow-xl w-full h-64 object-cover mt-4"
            />
          </div>
        </div> -->
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
import { ref, onMounted, onBeforeUnmount } from "vue";
import model1 from '~/assets/1.jpg'
import model2 from '~/assets/2.jpg'
import model3 from '~/assets/3.jpg'
import model4 from '~/assets/4.jpg'
import model5 from '~/assets/5.jpg'
import model6 from '~/assets/6.jpg'

const currentIndex = ref(0);
const track = ref(null);
let intervalId;

const handleTransitionEnd = () => {
  // si llegamos al clon (índice 2), saltamos al original (índice 0)
  if (currentIndex.value === 2) {
    track.value.style.transition = "none"; // quitamos animación
    currentIndex.value = 0;
    track.value.style.transform = `translateX(0%)`;

    // forzamos reflow para volver a activar la transición
    void track.value.offsetWidth;
    track.value.style.transition = "transform 0.7s ease-in-out";
  }
};

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value++;
    track.value.style.transform = `translateX(-${currentIndex.value * 100}%)`;
  }, 5500);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>