import { useTranslation } from "react-i18next";

const ProjectsSection = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: "Abp.io Entity Creator",
      description: t("projects.project1"),
      image: "./abp-entity-creator.png",
      tech: [".NET", "Javascript", "Bootstrap"],
      link: "#",
      github: "https://github.com/alan-lisboa/abp.io-entity-creator"
    },
    {
      id: 2,
      title: "Fresh POS",
      description: t("projects.project2"),
      image: "./fresh-pos.png",
      tech: ["React", "Appwrite", "POS"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "Event Manager",
      description: t("projects.project3"),
      image: "./event-manager.png",
      tech: [".NET", "Android", "Java"],
      link: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-portfolio-dark mb-16 text-center">
          {t("projects.title")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-in border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-portfolio-blue/0 group-hover:bg-portfolio-blue/10 transition-colors duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-portfolio-dark mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-portfolio-gray text-portfolio-dark px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.link != '#' &&
                    <a
                      href={project.link}
                      className="text-portfolio-blue font-medium hover:text-blue-600 transition-colors text-sm"
                    >
                      Ver Projeto →
                    </a>
                  }
                  {project.github != '#' &&
                    <a
                      href={project.github}
                      className="text-gray-500 font-medium hover:text-portfolio-dark transition-colors text-sm"
                    >
                      GitHub →
                    </a>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
