import emailjs from '@emailjs/browser'

export default defineNuxtPlugin(() => {
  // Initialize EmailJS
  emailjs.init("YOUR_PUBLIC_KEY") // This will be configured later
  
  return {
    provide: {
      emailjs: emailjs
    }
  }
})