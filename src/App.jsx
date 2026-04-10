import { useState, useEffect } from 'react'
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
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive(prev => (prev + 1) % IMAGES.length)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="gallery" id="galeria">
      <div className="gallery__main">
        {IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Arte Urbano ${i + 1}`}
            className={`gallery__img ${i === active ? 'gallery__img--active' : ''}`}
          />
        ))}
      </div>
      <div className="gallery__dots">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            className={`gallery__dot ${i === active ? 'gallery__dot--active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Imagen ${i + 1}`}
          />
        ))}
      </div>
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
              href="https://maps.google.com/?q=La+Rioja+1731,Buenos+Aires"
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
