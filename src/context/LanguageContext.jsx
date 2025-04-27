// LanguageContext.jsx - ajoutez cette traduction à votre fichier existant
import React, { createContext, useState, useContext } from 'react';

// Définition des traductions - ajoutez la traduction pour la section d'outils
const translations = {
  fr: {
    // Traductions existantes
    aboutTitle: "À propos de moi",
    greeting: "Bonjour ! Je m'appelle Wiame Yousfi et je suis passionnée par la création de systèmes logiciels robustes et évolutifs. Mon intérêt pour l'ingénierie logicielle a commencé pendant mes classes préparatoires, où j'ai découvert mon amour pour la résolution de problèmes et l'informatique.",
    paragraph1: "Durant mon parcours à l'École Nationale Supérieure d'Informatique et d'Analyse des Systèmes (ENSIAS), j'ai acquis une solide maîtrise des principes et des pratiques de l'ingénierie logicielle. J'ai travaillé sur divers projets impliquant l'architecture de microservices, le Cloud Computing et le développement web.",
    paragraph2: "Je suis particulièrement enthousiaste à propos des pratiques DevOps et DevSecOps. J'aime travailler avec des technologies comme Docker, Kubernetes, et mettre en place des pipelines CI/CD pour automatiser la livraison logicielle tout en intégrant la sécurité tout au long du cycle de développement.",
    paragraph3: "Actuellement, je poursuis mes études en Génie Logiciel à l'ENSIAS tout en étant cofondatrice et Vice-Présidente de la Junior Entreprise ENSIAS. Je continue à approfondir mes connaissances sur les technologies cloud-native et les bonnes pratiques de sécurité afin de construire des systèmes toujours plus résilients.",
    pathTitle: "Mon parcours Académique",
    
    // Nouvelle traduction pour la section d'outils
    technicalSkills: "Compétences Techniques",
    // Ajoutez d'autres traductions selon vos besoins
  },
  en: {
    // Traductions existantes
    aboutTitle: "About Me",
    greeting: "Hello! My name is Wiame Yousfi and I'm passionate about creating robust and scalable software systems. My interest in software engineering began during my preparatory classes, where I discovered my love for problem-solving and computer science.",
    paragraph1: "During my journey at the National School of Computer Science and Systems Analysis (ENSIAS), I acquired solid mastery of software engineering principles and practices. I have worked on various projects involving microservices architecture, Cloud Computing, and web development.",
    paragraph2: "I am particularly enthusiastic about DevOps and DevSecOps practices. I enjoy working with technologies like Docker, Kubernetes, and setting up CI/CD pipelines to automate software delivery while integrating security throughout the development cycle.",
    paragraph3: "Currently, I am pursuing my Software Engineering studies at ENSIAS while being co-founder and Vice-President of the ENSIAS Junior Enterprise. I continue to deepen my knowledge of cloud-native technologies and security best practices to build increasingly resilient systems.",
    pathTitle: "My Academic Education",
    
    // Nouvelle traduction pour la section d'outils
    technicalSkills: "Technical Skills",
    // Ajoutez d'autres traductions selon vos besoins
  }
};

// Reste du code existant...
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr'); // 'fr' par défaut
  
  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };
  
  const t = (key) => {
    return translations[language][key] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);