# Arte Urbano — Sitio Web

Sitio institucional para **Arte Urbano**, salón de belleza y barbería ubicado en Buenos Aires, Argentina. Diseño oscuro y elegante con acento dorado, construido con React + Vite.

🌐 **[www.arte-urbano.com.ar](https://www.arte-urbano.com.ar/)**

---

## Vista previa

| Hero | Galería |
|------|---------|
| ![Hero](https://www.arte-urbano.com.ar/imagenes/arte-urbano1.jpg) | ![Galería](https://www.arte-urbano.com.ar/imagenes/arte-urbano2.jpg) |

| Trabajo | Resultado |
|---------|-----------|
| ![Work 1](https://www.arte-urbano.com.ar/imagenes/arte-urbano3.jpg) | ![Work 2](https://www.arte-urbano.com.ar/imagenes/arte-urbano4.jpg) |

---

## Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [React](https://react.dev/) | 18.3 | UI y componentes |
| [Vite](https://vitejs.dev/) | 6.0 | Bundler y dev server |
| [Swiper](https://swiperjs.com/) | 12.1 | Carrusel de galería |

Sin backend ni base de datos — sitio 100% estático y deployable en cualquier CDN.

---

## Características

- **Navbar fijo** con logo y botón de reserva directo a WhatsApp
- **Hero fullscreen** en dos columnas con tipografía editorial (Cormorant Garamond)
- **Sección de servicios** — Corte Unisex, Alisados, Shock de Keratina, Color, Peinados
- **Galería interactiva** con Swiper (autoplay, navegación, paginación, loop)
- **Mapa embed** de Google Maps con botón "Ver en Google Maps"
- **Reseñas de clientes** con rating general de ⭐ 4.8 — cargadas manualmente desde `GoogleReviews.jsx`
- **Sección de contacto** con teléfono, WhatsApp y dirección
- **Botón flotante de WhatsApp** siempre visible
- **Footer** con link a Instagram `@arte_urbano1981`
- **SEO** con Schema.org (LocalBusiness), sitemap.xml y robots.txt
- **Smooth scroll** nativo

---

## Diseño

| Variable | Valor |
|---|---|
| Fondo | `#0a0a0a` (negro profundo) |
| Texto | `#f5f4f0` (blanco crema) |
| Acento | `#b8935a` (dorado) |
| Tipografía serif | Cormorant Garamond |
| Tipografía sans | Jost |

---

## Estructura del proyecto

```
arte-urbano/
├── public/
│   ├── imagenes/
│   │   ├── logo.jpg
│   │   ├── arte-urbano1.jpg
│   │   ├── arte-urbano2.jpg
│   │   ├── arte-urbano3.jpg
│   │   ├── arte-urbano4.jpg
│   │   └── arte-urbano5.jpg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── App.jsx          # Componente principal + todas las secciones
│   ├── App.css          # Estilos por sección
│   ├── GoogleReviews.jsx # Componente de reseñas (carga manual)
│   ├── index.css        # Variables CSS + reset
│   └── main.jsx         # Entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## Instalación y desarrollo

### Requisitos

- Node.js >= 18

### Pasos

```bash
# 1. Clonar el repositorio
git clone <repo-url>
cd arte-urbano

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### Comandos disponibles

```bash
npm run dev      # Servidor de desarrollo con HMR
npm run build    # Build de producción → /dist
npm run preview  # Preview del build de producción
```

---

## Deploy

El build genera archivos estáticos en `/dist`. Compatible con cualquier hosting estático:

- **Netlify** — arrastrar la carpeta `/dist` o conectar el repo
- **Vercel** — detecta Vite automáticamente
- **GitHub Pages** — con `vite.config.js` ajustando `base`
- **Hosting tradicional (FTP)** — subir el contenido de `/dist`

```bash
npm run build   # Genera /dist listo para subir
```

---

## Actualizar reseñas

Las reseñas se gestionan manualmente en `src/GoogleReviews.jsx`. Para agregar o editar:

```js
const REVIEWS = [
  {
    name: 'Nombre Apellido',
    rating: 5,
    date: 'hace X días',
    text: 'Texto de la reseña.',
    avatar: 'https://ui-avatars.com/api/?name=Nombre+Apellido&background=1e1e1e&color=b8935a&size=80',
  },
  // ...
]

const OVERALL_RATING = 4.8  // Rating general visible en la sección
```

---

## Información del negocio

| | |
|---|---|
| **Nombre** | Arte Urbano |
| **Rubro** | Salón de Belleza & Barbería |
| **Dirección** | La Rioja 1731, Buenos Aires, Argentina (CP 1244) |
| **Teléfono** | 2118-4837 |
| **WhatsApp** | [1132775631](https://wa.me/541132775631) |
| **Instagram** | [@arte_urbano1981](https://www.instagram.com/arte_urbano1981/) |
| **Google Maps** | [Ver ubicación](https://maps.app.goo.gl/GWCKht4qKUH2isnU6) |

---

## Licencia

© 2025 Arte Urbano · Todos los derechos reservados.
