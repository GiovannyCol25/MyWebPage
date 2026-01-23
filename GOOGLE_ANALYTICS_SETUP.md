# 📊 Configurar Google Analytics en tu Portafolio

## ¿Qué es Google Analytics?
Es un contador de visitas **gratis** que te muestra:
- 👥 Cuántas personas visitaron tu sitio
- 🌍 De dónde vienen (país, ciudad, dispositivo)
- ⏱️ Cuánto tiempo se quedan
- 📄 Qué páginas/secciones leen más
- 💰 Si alguien contactó por tu formulario

## Pasos para Configurar

### 1️⃣ Crea una cuenta en Google Analytics
1. Ve a **[analytics.google.com](https://analytics.google.com)**
2. Haz clic en **"Comenzar"**
3. Inicia sesión con tu **Gmail** (crea uno si no tienes)
4. Haz clic en **"Crear"**

### 2️⃣ Configura una nueva propiedad
1. **Nombre de la cuenta**: "GIO Software Solutions" (o lo que prefieras)
2. Acepta los términos
3. **Nombre de la propiedad**: "Portfolio GIO"
4. **Zona horaria**: Colombia (GMT-5)
5. **Moneda**: COP (pesos colombianos)
6. Haz clic en **"Crear"**

### 3️⃣ Crear una "APP WEB" para tu sitio
1. Donde dice "¿Qué datos deseas recopilar?", selecciona **"Web"**
2. **Nombre del stream**: "Mi Portfolio"
3. **URL del sitio**: `https://giovannycol25.github.io/`
4. Haz clic en **"Crear stream"**

### 4️⃣ Obtén tu ID de medición (IMPORTANTE)
Google te mostrará algo como: **G-XXXXXXXXXX**

Este código es lo que necesitas actualizar en tu HTML.

### 5️⃣ Actualiza tu archivo HTML
En tu archivo `index.html`, busca esta línea (aparece 2 veces):

```javascript
gtag('config', 'G-YOUR-MEASUREMENT-ID');
```

Y reemplaza **G-YOUR-MEASUREMENT-ID** con tu código real, por ejemplo:
```javascript
gtag('config', 'G-A1B2C3D4E5F');
```

También reemplaza en esta línea:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-MEASUREMENT-ID"></script>
```

Cambiar **G-YOUR-MEASUREMENT-ID** por tu código real.

### 6️⃣ Sube los cambios a GitHub
1. Guarda el archivo `index.html`
2. En tu terminal, ejecuta:
```bash
git add .
git commit -m "Agregar Google Analytics"
git push
```

### 7️⃣ Verifica en Google Analytics
1. Espera 5 minutos
2. Abre tu sitio en `https://giovannycol25.github.io/`
3. Ve a Google Analytics y busca "Reportes en tiempo real"
4. ¡Deberías verte a ti mismo como visitante!

---

## 📱 ¿Qué puedes ver en Google Analytics?

### Dashboard Principal (Resumen)
- **Usuarios**: Cuántas personas diferentes visitaron
- **Sesiones**: Cuántas veces abrieron tu sitio
- **Duración promedio de sesión**: Cuánto tiempo se quedan
- **Tasa de rebote**: % de gente que sale sin ver nada

### Reportes Útiles
- **Geográfica**: ¿De qué países vienen?
- **Dispositivos**: ¿Desde móvil o computadora?
- **Páginas**: ¿Qué sección leen más?
- **Eventos**: ¿Quién hizo clic en "Contacto"?

---

## 🎯 Tips para Sacarle el Máximo Provecho

✅ **Revisa Analytics cada semana** para ver tendencias  
✅ **Si nadie contacta**, quizá el formulario es confuso - mejóralo  
✅ **Si todos se van rápido**, mejora el contenido  
✅ **Si la mitad usa móvil**, asegúrate que sea responsive  
✅ **Comparte tu sitio en redes sociales** para generar tráfico

---

## ❓ Problemas Comunes

### "No veo visitas en Analytics"
- ⏰ Espera 30 minutos (a veces tarda)
- 🔄 Limpia el caché del navegador (Ctrl+Shift+Supr)
- 🌐 Abre tu sitio en otra pestaña/navegador

### "¿Mis propias visitas cuentan?"
Sí, al principio. Para excluirte:
1. En Google Analytics → Admin
2. Filtros → Nuevo filtro
3. Excluir por IP (tu IP pública)

### "¿Es gratis?"
✅ **100% gratis** para pequeños sitios  
Cuando llegues a 10 millones de eventos/mes, tendrás que pagar.

---

## 📞 ¿Preguntas?
Si algo no funciona, puedo ayudarte a verificar el código o la configuración.

**¡Tu sitio está listo para recibir visitantes!** 🚀
