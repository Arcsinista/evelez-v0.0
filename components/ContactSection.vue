<template>
  <section id="contacto" class="py-20 bg-blue-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-white mb-4">
          Solicita tu cotización hoy mismo
        </h2>
        <p class="text-xl text-blue-200 max-w-3xl mx-auto">
          Déjanos tus datos y uno de nuestros asesores te contactará pronto para ayudarte a cotizar tu pedido.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="bg-white rounded-xl p-8 shadow-2xl">
          <form @submit.prevent="submitForm" ref="contactForm">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                  Nombre y apellido *
                </label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Correo *
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="tu@correo.com"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                  Celular *
                </label>
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="+52 123 456 7890"
                />
              </div>
              <div>
                <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
                  Nombre de la compañía
                </label>
                <input
                  type="text"
                  id="company"
                  v-model="form.company"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                  placeholder="Tu empresa"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="state" class="block text-sm font-medium text-gray-700 mb-2">
                  Estado
                </label>
                <select
                  id="state"
                  v-model="form.state"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                >
                  <option value="">Selecciona tu estado</option>
                  <option v-for="state in mexicanStates" :key="state" :value="state">
                    {{ state }}
                  </option>
                </select>
              </div>
              <div>
                <label for="interest" class="block text-sm font-medium text-gray-700 mb-2">
                  Estoy interesado en...
                </label>
                <select
                  id="interest"
                  v-model="form.interest"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="uniformes">Uniformes</option>
                  <option value="catalogo">Catálogo completo</option>
                  <option value="mayoreo">Mayoreo</option>
                </select>
              </div>
            </div>

            <div class="mb-6">
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                Mensaje adicional
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Cuéntanos más sobre tus necesidades..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-blue-600 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
            >
              <span v-if="!isSubmitting">Solicitar Información</span>
              <span v-else>Enviando...</span>
            </button>
          </form>

          <!-- Success/Error Messages -->
          <div v-if="submitStatus === 'success'" class="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            ¡Solicitud procesada! Se ha descargado un archivo con tu información y se abrió tu cliente de correo. Te contactaremos pronto a través de arcsinista@gmail.com.
          </div>
          <div v-if="submitStatus === 'error'" class="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            Error al enviar el mensaje. Por favor intenta de nuevo.
          </div>
        </div>

        <!-- Contact Info -->
        <div class="text-white">
          <div class="mb-8">
            <h3 class="text-2xl font-bold mb-6">¿Por qué elegirnos?</h3>
            <div class="space-y-4">
              <div class="flex items-start">
                <div class="text-gray-400 text-xl mr-4">⚡</div>
                <div>
                  <h4 class="font-semibold mb-1">Respuesta Rápida</h4>
                  <p class="text-blue-200">Te contactaremos en menos de 24 horas hábiles</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="text-gray-400 text-xl mr-4">👨‍💼</div>
                <div>
                  <h4 class="font-semibold mb-1">Asesoría Personalizada</h4>
                  <p class="text-blue-200">Un experto te ayudará a encontrar la mejor opción</p>
                </div>
              </div>
              <div class="flex items-start">
                <div class="text-gray-400 text-xl mr-4">💯</div>
                <div>
                  <h4 class="font-semibold mb-1">Sin Compromiso</h4>
                  <p class="text-blue-200">La cotización es totalmente gratuita</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-bold mb-4">Información de Contacto</h3>
            <div class="space-y-3">
              <div class="flex items-center">
                <span class="text-gray-400 mr-3">📧</span>
                <span>contacto@coinsauniformes.com</span>
              </div>
              <div class="flex items-center">
                <span class="text-gray-400 mr-3">📱</span>
                <span>Chihuahua: (614) 423-4275</span>
              </div>
              <div class="flex items-center">
                <span class="text-gray-400 mr-3">📱</span>
                <span>Cd. Juárez: (656) 397-3890</span>
              </div>
              <div class="flex items-center">
                <span class="text-gray-400 mr-3">📱</span>
                <span>Monterrey: (81) 8340 7031</span>
              </div>
              <div class="flex items-center">
                <span class="text-gray-400 mr-3">🕒</span>
                <span>Horario: L-V 9:00 a 18:00 hrs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import emailjs from '@emailjs/browser'
const {
  public: { emailjsServiceId, emailjsTemplateId, emailjsUserId },
} = useRuntimeConfig()

// Form data
const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  state: '',
  interest: '',
  message: ''
})

// Form state
const isSubmitting = ref(false)
const submitStatus = ref('')
const contactForm = ref(null)

// Mexican states
const mexicanStates = [
  'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche',
  'Chiapas', 'Chihuahua', 'Ciudad de México', 'Coahuila', 'Colima',
  'Durango', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco',
  'Estado de México', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León',
  'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí',
  'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala',
  'Veracruz', 'Yucatán', 'Zacatecas'
]

// EmailJS configuration (you'll need to configure this)
// const EMAILJS_SERVICE_ID = ''
// const EMAILJS_TEMPLATE_ID = ''
// const EMAILJS_USER_ID = 'your_public_key'

const submitForm = async () => {
  isSubmitting.value = true
  submitStatus.value = ''

  try {
    const emailContent = `
Nueva solicitud de cotización desde Uniformes Corporativos Vélez:

Nombre: ${form.name}
Email: ${form.email}
Teléfono: ${form.phone}
Empresa: ${form.company || 'No especificada'}
Estado: ${form.state || 'No especificado'}
Interés en: ${form.interest || 'No especificado'}

Mensaje adicional:
${form.message || 'Sin mensaje adicional'}

---
Enviado desde: ${window.location.href}
Fecha: ${new Date().toLocaleString('es-MX')}
    `.trim()

    // Create mailto link for backup
    const mailtoLink = `mailto:arcsinista@gmail.com?subject=Solicitud de Cotización - ${form.name}&body=${encodeURIComponent(emailContent)}`

    // Try to send via EmailJS if configured, otherwise use mailto
    if (typeof emailjs !== 'undefined') {
      const templateParams = {
        to_email: 'arcsinista@gmail.com',
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        company: form.company || 'No especificada',
        state: form.state || 'No especificado',
        interest: form.interest || 'No especificado',
        message: form.message || 'Sin mensaje adicional',
        full_message: emailContent
      }

      // This would work if EmailJS is properly configured
      await emailjs.send(emailjsServiceId, emailjsTemplateId, templateParams, emailjsUserId)
    }

    // For now, we'll simulate the email and provide a download option
    const blob = new Blob([emailContent], { type: 'text/plain' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `Cotización-${form.name}-${new Date().toISOString().split('T')[0]}.txt`
    document.body.appendChild(a)
    a.click()
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)

    submitStatus.value = 'success'

    // Reset form
    Object.keys(form).forEach(key => {
      form[key] = ''
    })

  } catch (error) {
    console.error('Error al enviar el formulario:', error)
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false

    // Clear status after 8 seconds
    setTimeout(() => {
      submitStatus.value = ''
    }, 8000)
  }
}
</script>