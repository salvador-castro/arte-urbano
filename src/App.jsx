import GoogleReviews from './GoogleReviews'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './App.css'


const SERVICES = [
  { label: 'Corte Unisex' },
  { label: 'Alisados' },
  { label: 'Shock de Keratina' },
  { label: 'Color' },
  { label: 'Peinados' },
]

const IMAGES = [
  '/imagenes/arte-urbano1.jpg',
  '/imagenes/arte-urbano2.jpg',
  '/imagenes/arte-urbano3.jpg',
  '/imagenes/arte-urbano4.jpg',
  '/imagenes/arte-urbano5.jpg',
]

function Gallery() {
  return (
    <section id="galeria" className="gallery-carousel">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        className="gallery-swiper"
      >
        {IMAGES.map((src, i) => (
          <SwiperSlide key={src}>
            <img src={src} alt={`Arte Urbano ${i + 1}`} className="gallery-swiper__img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default function App() {
  return (
    <div className="page">
      {/* NAV */}
      <header className="nav">
        <img src="/imagenes/logo.jpg" alt="Arte Urbano" className="nav__logo" />
        <a
          href="https://wa.me/541132775631"
          className="nav__cta"
          target="_blank"
          rel="noreferrer"
        >
          Reservar turno
        </a>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero__text">
          <p className="hero__eyebrow">Salón de Belleza &amp; Barbería</p>
          <h1 className="hero__title">
            Arte<br />
            <em>Urbano</em>
          </h1>
          <p className="hero__sub">Buenos Aires · La Rioja 1731</p>
        </div>
        <div className="hero__img-wrap">
          <img
            src="/imagenes/arte-urbano1.jpg"
            alt="Arte Urbano salón"
            className="hero__img"
          />
          <div className="hero__img-overlay" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="servicios">
        <h2 className="section-title">Servicios</h2>
        <ul className="services__list">
          {SERVICES.map(({ label }) => (
            <li key={label} className="services__item">
              <span className="services__line" />
              <span className="services__label">{label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* GALLERY */}
      <div className="gallery-section">
        <h2 className="section-title">Galería</h2>
        <Gallery />
      </div>

      {/* MAPA */}
      <section className="map-section" id="ubicacion">
        <div className="reviews__header">
          <h2 className="section-title">Ubicación</h2>
          <a
            href="https://maps.app.goo.gl/GWCKht4qKUH2isnU6"
            className="reviews__cta"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" style={{ flexShrink: 0 }}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            Ver en Google Maps
          </a>
        </div>
        <div className="reviews__map">
          <iframe
            title="Arte Urbano en Google Maps"
            src="https://maps.google.com/maps?q=La+Rioja+1731,Buenos+Aires,Argentina&output=embed&hl=es&z=16"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      {/* RESEÑAS */}
      <section className="reviews" id="resenas">
        <h2 className="section-title">Reseñas</h2>
        <GoogleReviews />
        <a
          href="https://maps.app.goo.gl/GWCKht4qKUH2isnU6"
          className="reviews__leave"
          target="_blank"
          rel="noreferrer"
        >
          ★ Dejá tu reseña en Google
        </a>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contacto">
        <h2 className="section-title">Turnos</h2>
        <div className="contact__grid">
          <div className="contact__block">
            <p className="contact__label">Teléfono</p>
            <a href="tel:21184837" className="contact__value">2118-4837</a>
          </div>
          <div className="contact__block">
            <p className="contact__label">WhatsApp</p>
            <a
              href="https://wa.me/541132775631"
              className="contact__value contact__value--accent"
              target="_blank"
              rel="noreferrer"
            >
              1132775631
            </a>
          </div>
          <div className="contact__block">
            <p className="contact__label">Dirección</p>
            <a
              href="https://maps.app.goo.gl/qAEGgNQXj9NfrMyu7"
              className="contact__value"
              target="_blank"
              rel="noreferrer"
            >
              La Rioja 1731<br />Buenos Aires, Argentina 1244
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a
          href="https://www.instagram.com/arte_urbano1981/"
          className="footer__ig"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          @arte_urbano1981
        </a>
        <p>© {new Date().getFullYear()} Arte Urbano · Todos los derechos reservados</p>
      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/541132775631"
        className="wa-float"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  )
}
