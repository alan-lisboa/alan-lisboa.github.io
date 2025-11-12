
import { useTranslation } from "react-i18next";
import { Coffee } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-portfolio-dark text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl pattaya-regular mb-2">{t('hero.name')}</h3>
          <p className="text-gray-300 mb-8">
            {t('footer.tagline')}
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a href="mailto:alan.lisboa@outlook.com" className="text-gray-300 hover:text-portfolio-blue transition-colors">
              {t('footer.email')}
            </a>
            <a href="https://github.com/alan-lisboa" className="text-gray-300 hover:text-portfolio-blue transition-colors">
              {t('footer.github')}
            </a>
            <a href="https://linkedin.com/in/alanlisboa" className="text-gray-300 hover:text-portfolio-blue transition-colors">
              {t('footer.linkedin')}
            </a>
          </div>

          <div className="border-t border-gray-800 pt-3">
            <div className="flex justify-center text-gray-400 text-sm">
              <p className="pr-2">
                {t("footer.madeWith")}
              </p>
              <Coffee />
              <p className="pl-2">|</p>
              <p className="pl-2">{t("hero.name")}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
