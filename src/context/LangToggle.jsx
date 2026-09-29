import { useLanguage } from './LanguageContext';

const VE_STARS = [28, 46, 64, 82, 100, 118, 136, 154].map((x) => {
  const offset = (x - 91) / 63;
  return { x, y: 58 + offset * offset * 14 };
});

function UsFlag() {
  const stripe = 100 / 13;

  return (
    <svg className="lang-flag" viewBox="0 0 190 100" aria-hidden="true">
      {Array.from({ length: 13 }, (_, i) => (
        <rect
          key={i}
          y={i * stripe}
          width="190"
          height={stripe + 0.4}
          fill={i % 2 === 0 ? '#B22234' : '#FFFFFF'}
        />
      ))}
      <rect width="76" height={stripe * 7} fill="#3C3B6E" />
    </svg>
  );
}

function VeFlag() {
  return (
    <svg className="lang-flag" viewBox="0 0 180 120" aria-hidden="true">
      <rect width="180" height="40" fill="#FFCC00" />
      <rect y="40" width="180" height="40" fill="#00247D" />
      <rect y="80" width="180" height="40" fill="#CF142B" />
      {VE_STARS.map((star) => (
        <circle key={star.x} cx={star.x} cy={star.y} r="3.1" fill="#FFFFFF" />
      ))}
    </svg>
  );
}

export default function LangToggle() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      <button
        type="button"
        className={`lang-toggle-btn${lang === 'en' ? ' is-active' : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        aria-label={t('lang.enAria')}
      >
        <UsFlag />
        EN
      </button>
      <button
        type="button"
        className={`lang-toggle-btn${lang === 'es' ? ' is-active' : ''}`}
        onClick={() => setLang('es')}
        aria-pressed={lang === 'es'}
        aria-label={t('lang.esAria')}
      >
        <VeFlag />
        ES
      </button>
    </div>
  );
}
