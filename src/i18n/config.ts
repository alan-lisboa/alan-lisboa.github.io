
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Traduções em português
const ptBR = {
  translation: {
    navigation: {
      home: "Home",
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato"
    },
    hero: {
      greeting: "Olá, eu sou",
      name: "Alan Lisboa",
      description: "Designer e desenvolvedor apaixonado por criar experiências digitais excepcionais que conectam pessoas e ideias.",
      viewProjects: "Ver Projetos",
      contact: "Entre em Contato"
    },
    about: {
      title: "Sobre mim",
      line1: "Sou Desenvolvedor Sênior com mais de 30 anos de experiência em tecnologia, atuando na construção de soluções robustas e escaláveis para web, desktop e mobile. Minha especialidade está no ecossistema .NET (C#), JavaScript e frameworks modernos como React, sempre com foco em performance, manutenibilidade e boas práticas de arquitetura de software.",
      line2: "Ao longo da carreira, participei de projetos de diversos portes e segmentos, colaborando com times multidisciplinares e apoiando na definição de estratégias técnicas. Além da atuação como desenvolvedor, também sou empreendedor, cofundador da Q3 Tecnologia, onde contribuo com decisões técnicas e de produto.",
      line3: "Aqui você encontrará um pouco do meu trabalho, minhas experiências e projetos que representam minha jornada na tecnologia."
    },
    projects: {
      title: "Projetos recentes",
      project1: "Ferramenta open-source que permite a criação de entidades e classes de negócio para o framework abp.io",
      project2: "POS com design minimalista para uso em pequenos comércios, integrado com o backend appwrite",
      project3: "Plataforma para controle de entradas em eventos. Força de vendas em Android e Retaguarda em .NET"
    },
    contact: {
      letsTalk: "Vamos conversar?",
      interesting: "Estou sempre aberto a novas oportunidades e projetos interessantes.",
      channels: "Entre em contato comigo através dos canais abaixo.",
      directMessage: "Ou me envie uma mensagem direta",
      writeMessage: "Prefere escrever? Envie um email e retornarei o mais breve possível.",
      sendEmail: "Enviar Email"
    },
    footer: {
      tagline: "Transformando ideias em soluções",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      rights: "Todos os direitos reservados."
    }
  }
};

// Traduções em inglês
const en = {
  translation: {
    navigation: {
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Alan Lisboa",
      description: "Designer and developer passionate about creating exceptional digital experiences that connect people and ideas.",
      viewProjects: "View Projects",
      contact: "Get in Touch"
    },
    about: {
      title: "About me",
      line1: "I’m a Senior Developer with over 30 years of experience in technology, focused on building robust and scalable solutions for web, desktop, and mobile platforms. My expertise lies in the .NET ecosystem (C#), JavaScript, and modern frameworks like React, always prioritizing performance, maintainability, and solid software architecture practices.",
      line2: "Throughout my career, I’ve contributed to projects of various sizes and industries, collaborating with cross-functional teams and supporting the definition of technical strategies. In addition to my role as a developer, I’m also an entrepreneur and co-founder of Q3 Tecnologia, where I take part in both technical and product-related decisions.",
      line3: "Here, you’ll find a bit of my work, my experiences, and the projects that reflect my journey in technology."
    },
    projects: {
      title: "Recent projects",
      project1: "Open-source tool that allows the creation of business entities and classes for the abp.io framework",
      project2: "Minimalist design POS for use in small businesses, integrated with the appwrite backend",
      project3: "Platform for controlling event entries. Sales force in Android and Back Office in .NET"
    },
    contact: {
      letsTalk: "Let's talk",
      interesting: "I am always open to new opportunities and interesting projects.",
      channels: "Contact me through the channels below.",
      directMessage: "Or send me a direct message",
      writeMessage: "Prefer to write? Please send me an email and I will get back to you as soon as possible.",
      sendEmail: "Send Email"
    },
    footer: {
      tagline: "Turning ideas into solutions",
      email: "Email",
      github: "GitHub",
      linkedin: "LinkedIn",
      rights: "All rights reserved."
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'pt-BR': ptBR,
      'en': en
    },
    fallbackLng: 'pt-BR',
    debug: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
