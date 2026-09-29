import { useLanguage } from '../context/LanguageContext';
import { socialLinks } from '../data/socialLinks';

export default function SocialIcons({ className = '' }) {
  const { t } = useLanguage();

  return (
    <nav className={`social-icons ${className}`.trim()} aria-label={t('social.navAria')}>
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="social-icon-link"
        >
          <i className={link.icon} aria-hidden="true"></i>
        </a>
      ))}
    </nav>
  );
}
