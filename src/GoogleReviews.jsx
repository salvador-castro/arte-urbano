// Para agregar o editar reseñas, modificá el array REVIEWS.
// Copiá las reseñas desde Google Maps manualmente.

const REVIEWS = [
  {
    name: 'Lucas Martínez',
    rating: 5,
    date: 'hace 5 días',
    text: '100% recomendable.',
    avatar: 'https://ui-avatars.com/api/?name=Lucas+Martinez&background=1e1e1e&color=b8935a&size=80',
  },
  {
    name: 'Emanuel Sativa',
    rating: 5,
    date: 'hace 5 semanas',
    text: 'Trabajan fino y con mucho detalle. Muy amable. Tiene buen ánimo y siempre atienden por turno.',
    avatar: 'https://ui-avatars.com/api/?name=Emanuel+Sativa&background=1e1e1e&color=b8935a&size=80',
  },
  {
    name: 'Marisol Accardi',
    rating: 5,
    date: 'hace 10 semanas',
    text: 'Excelentes profesionales! Técnicos recomendables. Calidad humana 1000 puntos.',
    avatar: 'https://ui-avatars.com/api/?name=Marisol+Accardi&background=1e1e1e&color=b8935a&size=80',
  },
  {
    name: 'Nadia Benites',
    rating: 5,
    date: 'hace 1 mes',
    text: 'Fui al peluquero y quedé muy conforme. Excelente profesional y excelente personal. ¡Super recomendable!',
    avatar: 'https://ui-avatars.com/api/?name=Nadia+Benites&background=1e1e1e&color=b8935a&size=80',
  },
  {
    name: 'Emiliano Casella',
    rating: 5,
    date: 'hace 2 meses',
    text: 'Muy buena experiencia, muy prolijo el corte y muy buena onda. Super recomendación.',
    avatar: 'https://ui-avatars.com/api/?name=Emiliano+Casella&background=1e1e1e&color=b8935a&size=80',
  },
]

const OVERALL_RATING = 4.8
const TOTAL_REVIEWS = 0 // podés poner el número real si querés mostrarlo

function Stars({ rating }) {
  return (
    <div className="gr-stars">
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} className={i <= Math.round(rating) ? 'gr-star gr-star--on' : 'gr-star'}>★</span>
      ))}
    </div>
  )
}

export default function GoogleReviews() {
  return (
    <div>
      <div className="gr-summary">
        <span className="gr-summary__score">{OVERALL_RATING.toFixed(1)}</span>
        <div className="gr-summary__right">
          <Stars rating={OVERALL_RATING} />
          {TOTAL_REVIEWS > 0 && (
            <span className="gr-summary__total">{TOTAL_REVIEWS} reseñas en Google</span>
          )}
        </div>
      </div>

      <div className="gr-grid">
        {REVIEWS.map((r, i) => (
          <div key={i} className="gr-card">
            <div className="gr-card__header">
              <img src={r.avatar} alt={r.name} className="gr-card__avatar" referrerPolicy="no-referrer" />
              <div>
                <p className="gr-card__name">{r.name}</p>
                <Stars rating={r.rating} />
              </div>
            </div>
            {r.text && <p className="gr-card__text">{r.text}</p>}
            <p className="gr-card__date">{r.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
