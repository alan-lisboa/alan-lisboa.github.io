
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-portfolio-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-4">{t('hero.name')}</h3>
          <p className="text-gray-300 mb-6">
            {t('footer.tagline')}
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:seu.email@exemplo.com" className="text-gray-300 hover:text-portfolio-blue transition-colors">
              {t('footer.email')}
            </a>
            <a href="https://github.com/seuusuario" className="text-gray-300 hover:text-portfolio-blue transition-colors">
              {t('footer.github')}
            </a>
            <a href="https://linkedin.com/in/seuusuario" className="text-gray-300 hover:text-portfolio-blue transition-colors">
              {t('footer.linkedin')}
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {t('hero.name')}. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
