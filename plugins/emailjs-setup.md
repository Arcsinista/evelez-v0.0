# Configuración de EmailJS para Formulario de Contacto

## Pasos para configurar EmailJS:

### 1. Crear cuenta en EmailJS
- Ir a https://www.emailjs.com/
- Crear cuenta gratuita
- Verificar email

### 2. Configurar servicio de email
- En el dashboard, ir a "Email Services"
- Añadir servicio (Gmail, Outlook, etc.)
- Conectar tu cuenta de email

### 3. Crear template de email
- Ir a "Email Templates"
- Crear nuevo template con estos campos:
  ```
  Asunto: Nueva solicitud de cotización - {{from_name}}
  
  Para: uniformesvelez@hotmail.com
  
  Cuerpo:
  Nueva solicitud de cotización desde Uniformes Corporativos Vélez:
  
  Nombre: {{from_name}}
  Email: {{from_email}}
  Teléfono: {{phone}}
  Empresa: {{company}}
  Estado: {{state}}
  Interés en: {{interest}}
  
  Mensaje:
  {{message}}
  
  ---
  Enviado desde: {{site_url}}
  Fecha: {{sent_date}}
  ```

### 4. Obtener claves
- Public Key: En "Account" > "General"
- Service ID: En "Email Services"
- Template ID: En "Email Templates"

### 5. Actualizar el código
Reemplazar en `/app/components/ContactSection.vue`:
```javascript
const EMAILJS_SERVICE_ID = 'tu_service_id_aqui'
const EMAILJS_TEMPLATE_ID = 'tu_template_id_aqui'  
const EMAILJS_USER_ID = 'tu_public_key_aqui'
```

### 6. Prueba
- Llenar el formulario
- Verificar que llegue el email a uniformesvelez@hotmail.com

## Método alternativo (actual)
El formulario actual crea un archivo .txt con la información y abre mailto: como respaldo.
Esto funciona inmediatamente sin configuración adicional.