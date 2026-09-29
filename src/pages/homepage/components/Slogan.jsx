import { useLanguage } from '../../../context/LanguageContext';

const Slogan = () => {
  const { t } = useLanguage();

  return (
    <section className="slogan-band" aria-label={t('home.slogan.full')}>
      <span className="slogan-rule" aria-hidden="true" />
      <p className="signature-text slogan-text">
        {t('home.slogan.lead')}{' '}
        <span className="slogan-accent">{t('home.slogan.accent')}</span>{' '}
        {t('home.slogan.tail')}
      </p>
      <span className="slogan-rule slogan-rule-end" aria-hidden="true" />
    </section>
  );
};

export default Slogan;
