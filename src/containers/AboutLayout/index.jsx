import React from 'react';
import {useLanguage} from '../../context/LanguageContext'
import './AboutLayout.css'; // Import du fichier CSS

// Importation des images
import EnsiasLogo from '../../assets/EnsiasLogo.png';
import MoulayYoussefLogo from '../../assets/Moulay Youssef.jpg';

export default function AboutLayout() {
  const { t, language } = useLanguage();
  
  const educationPath = {
    fr: [
      {
        period: "2023 - 2026",
        institution: "ENSIAS - École Nationale Supérieure d'Informatique et d'Analyse des Systèmes",
        degree: "Diplôme d'ingénieur d'état en génie logiciel",
        logo: EnsiasLogo
      },
      {
        period: "2020 - 2023",
        institution: "Lycée Moulay Youssef",
        degree: "Classes préparatoires, Mathématiques, Physique, Informatique",
        logo: MoulayYoussefLogo
      }
    ],
    en: [
      {
        period: "2023 - 2026",
        institution: "ENSIAS - National School of Computer Science and Systems Analysis",
        degree: "State Engineering Degree in Software Engineering",
        logo: EnsiasLogo
      },
      {
        period: "2020 - 2023",
        institution: "Moulay Youssef High School",
        degree: "Preparatory Classes, Mathematics, Physics, Computer Science",
        logo: MoulayYoussefLogo
      }
    ]
  };

  return (
    <div className="about-container">
      <h2 className="about-title">{t('aboutTitle')}</h2>
      
      <div className="about-content">
        {/* Colonne gauche - Présentation */}
        <div className="about-column left-column">
          <p>{t('greeting')}</p>
          <p>{t('paragraph1')}</p>
          <p>{t('paragraph2')}</p>
          <p>{t('paragraph3')}</p>
        </div>
        
        {/* Colonne droite - Parcours éducatif */}
        <div className="about-column right-column">
          <h3 className="column-title">{t('pathTitle')}</h3>
          
          <div className="education-timeline">
            {educationPath[language].map((item, index) => (
              <div key={index} className="education-item">
                <div className="timeline-dot"></div>
                <div className="education-logo">
                  <img 
                    src={item.logo} 
                    alt={`Logo ${item.institution}`}
                    onError={(e) => {e.target.src = "/api/placeholder/50/50"; e.target.alt = "Logo placeholder";}}
                  />
                </div>
                
                <div className="education-details">
                  <p className="education-period">{item.period}</p>
                  <p className="education-institution">{item.institution}</p>
                  <p className="education-degree">{item.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}