
import { useTranslation } from "react-i18next";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  const { t } = useTranslation();
  const typedList = [
    t("hero.name"), t("hero.developer"), t("hero.entrepreneur"), t("hero.fullstack")
  ]
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-flow-col grid-cols-3">

          <div className="sm:col-span-1 hidden sm:flex">
            <img src="./avataaars.png" alt="alan" width={280} />
          </div>

          <div className="col-span-3 sm:col-span-2">
            <div className="text-center animate-fade-in items-center">
              <h1 className="text-4xl md:text-7xl font-bold text-portfolio-dark mb-6 leading-tight">
                {t('hero.greeting')}
                <br />
                <span className="text-portfolio-blue">
                  <ReactTyped strings={typedList} typeSpeed={100} loop />
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                {t('hero.description')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-portfolio-blue text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200"
                >
                  {t('hero.viewProjects')}
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-portfolio-blue text-portfolio-blue px-8 py-3 rounded-lg font-medium hover:bg-portfolio-blue hover:text-white transition-all duration-200"
                >
                  {t('hero.contact')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
