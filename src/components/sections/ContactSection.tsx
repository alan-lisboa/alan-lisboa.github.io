
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  const contactLinks = [
    {
      icon: Twitter,
      label: "X (Twitter)",
      value: "@alanlisboa",
      href: "https://x.com/alanlisboa",
      color: "text-portfolio-teal"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "/alan-lisboa",
      href: "https://github.com/alan-lisboa",
      color: "text-portfolio-dark"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/alan-lisboa-silveira",
      href: "https://linkedin.com/in/alan-lisboa-silveira",
      color: "text-portfolio-blue"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-portfolio-gray">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-dark mb-8">
            {t("contact.letsTalk")}
          </h2>

          <p className="text-xl text-gray-600 mb-16 leading-relaxed">
            {t("contact.interesting")}<br />
            {t("contact.channels")}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {contactLinks.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in block"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`${contact.color} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <IconComponent size={40} className="mx-auto" />
                  </div>

                  <h3 className="text-xl font-semibold text-portfolio-dark mb-2">
                    {contact.label}
                  </h3>

                  <p className="text-gray-600 group-hover:text-portfolio-blue transition-colors duration-200">
                    {contact.value}
                  </p>
                </a>
              );
            })}
          </div>

          <div className="mt-16 p-8 bg-white rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold text-portfolio-dark mb-4">
              {t("contact.directMessage")}
            </h3>
            <p className="text-gray-600 mb-6">
              {t("contact.writeMessage")}
            </p>
            <a
              href="mailto:alan.lisboa@outlook.com"
              className="inline-block bg-portfolio-blue text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200"
            >
              {t("contact.sendEmail")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
