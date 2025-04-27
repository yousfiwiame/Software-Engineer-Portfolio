import React from 'react';
import Ityped from "../../hooks/ityped";
import ToolsLayout from "../ToolSection/index";
import { useLanguage } from '../../context/LanguageContext'; // Importation du hook de contexte
import './HomeLayout.css'; // Importation du fichier CSS
import WiamePhoto from '../../assets/WiameYousfi.jpg'; // Importation de la photo

export default function HomeLayout() {
  const { language } = useLanguage(); // Utilisation du contexte pour récupérer la langue sélectionnée

  // Texte en fonction de la langue
  const text = {
    fr: {
      greeting: "Bonjour, je m'appelle",
      devIntro: "Je développe des solutions DevOps innovantes.",
      paragraph: `Je suis étudiante en Génie Logiciel à l'ENSIAS (École Nationale Supérieure d'Informatique et d'Analyse des Systèmes). 
      Je me spécialise dans les pratiques DevOps et DevSecOps, avec un fort intérêt pour les architectures microservices, 
      Docker, Kubernetes et le Cloud Computing. Je suis également co-fondatrice et Vice-Présidente de la Junior Entreprise ENSIAS.`,
      cv: "Consulter mon CV!"
    },
    en: {
      greeting: "Hello, my name is",
      devIntro: "I develop innovative DevOps solutions.",
      paragraph: `I am a Software Engineering student at ENSIAS (National School of Computer Science and System Analysis). 
      I specialize in DevOps and DevSecOps practices, with a strong interest in microservices architectures, Docker, Kubernetes, 
      and Cloud Computing. I am also the co-founder and Vice-President of the ENSIAS Junior Enterprise.`,
      cv: "View my Resume!"
    }
  };

  return (
    <>
      <div className="container" id="home">
        <section className="banner">
          <div className="wrapper">
            <div className="top-container">
              <div className="top">
                <div className="title">
                  <p>{text[language].greeting}</p>
                  <h2 className="text">
                    <Ityped />
                  </h2>
                </div>
                <div className="middleTitle" data-aos="fade-up">
                  <h2>{text[language].devIntro}</h2>
                </div>
              </div>

              <div className="photo-container" data-aos="fade-left" data-aos-duration="1500">
                <img src={WiamePhoto} alt="Wiame Yousfi" />
              </div>
            </div>

            <div className="bottom" data-aos="zoom-out-right" data-aos-duration="1000">
              <div className="paragraph">
                <p>{text[language].paragraph}</p>
              </div>
              <div className="button resume">
                <a
                  href={`/${language === 'fr' ? 'monCV.pdf' : 'Resume.pdf'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {text[language].cv}
                </a>
              </div>

            </div>
          </div>
        </section>
      </div>

      <ToolsLayout />
    </>
  );
}
