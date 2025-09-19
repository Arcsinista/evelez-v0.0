<template>
  <nav class="bg-white shadow-lg fixed w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <div class="text-2xl font-bold text-blue-600">
            <img :src="logo" alt="Logo" class="max-h-12"/>
          </div>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-8">
            <a href="#inicio" class="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium transition duration-200">
              Inicio
            </a>
            <a href="#sectores" class="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium transition duration-200">
              Sectores
            </a>
            <a href="#catalogo" class="text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium transition duration-200">
              Catálogo
            </a>
            <a href="#contacto" class="bg-gray-800 text-white px-4 py-2 rounded-md text-lg font-medium hover:bg-gray-900 transition duration-200">
              Contacto
            </a>
          </div>
        </div>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="isOpen = !isOpen" class="text-gray-900 hover:text-blue-600 focus:outline-none focus:text-blue-600">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile Navigation Menu -->
    <div v-show="isOpen" class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
        <a href="#inicio" @click="isOpen = false" class="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
          Inicio
        </a>
        <a href="#sectores" @click="isOpen = false" class="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
          Sectores
        </a>
        <a href="#catalogo" @click="isOpen = false" class="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
          Catálogo
        </a>
        <a href="#contacto" @click="isOpen = false" class="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
          Contacto
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import logo from '~/assets/logo.png'

const isOpen = ref(false)
</script>