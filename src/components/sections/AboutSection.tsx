
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 bg-portfolio-gray">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-dark mb-16 text-center">
            {t("about.title")}
          </h2>

          <div className="grid grid-flow-col md:grid-cols-3 gap-12 items-top">

            <div className="sm:col-span-1 hidden sm:flex">
              <div className="animate-slide-in">
                <img src="./alan.jpg" alt="alan" className="rounded-2xl" />
              </div>
            </div>
            <div className="col-span-2">
              <div className="space-y-6 animate-fade-in">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t("about.line1")}
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  {t("about.line2")}
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  {t("about.line3")}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            {['.NET', 'C#', 'Javascript', 'TypeScript', 'React', 'Java', 'Backend',
              'Frontend', 'Mobile', 'Desktop', 'Software Architecture', 'Message Queue', 'DevOps', 'WebAPI', 'SOA', 'WCF',
              'jQuery', 'Angular', 'ERP', 'Health'].map((skill) => (
                <span
                  key={skill}
                  className="bg-white text-portfolio-dark px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
          </div>
        </div >
      </div >
    </section >
  );
};

export default AboutSection;
