import React from "react";
import { useLanguage } from "../../context/LanguageContext";
// You should have these images in your assets folder
import image1 from "../../assets/ecommerce.jpg";
import image2 from "../../assets/disease-prediction.jpg";
import image3 from "../../assets/internship.jpg";

export default function WorkLayout() {
  const { t, language } = useLanguage();

  const projectPath = {
    fr: [
      {
        title: "Application E-commerce en Microservices",
        description: "Développement d'une plateforme e-commerce évolutive utilisant une architecture microservices pour une gestion efficace des produits, des comptes utilisateurs et du traitement des commandes.",
        technologies: ["Spring Boot", "Spring Cloud", "Angular", "PostgreSQL", "Docker", "Kubernetes"],
        link: "https://github.com/yousfiwiame/ecommerce-microservices",
        image: image1,
        type: "Projet Académique",
        tags: ["Microservices", "Évolutif", "DevOps"]
      },
      {
        title: "Système de Prédiction de Maladies",
        description: "Un système d'intelligence artificielle pour prédire les maladies en fonction des symptômes, utilisant des algorithmes de machine learning et une interface utilisateur intuitive pour améliorer l'accessibilité aux diagnostics préliminaires.",
        technologies: ["IA", "Python", "API REST"],
        link: "https://github.com/yousfiwiame/disease-prediction-system",
        image: image2,
        type: "Projet Personnel",
        tags: ["IA", "Python", "API REST"]
      },
      {
        title: "Gestion des Stages",
        description: "Une application web complète pour la gestion des stages universitaires, permettant aux étudiants de trouver des stages, aux entreprises de publier des offres et aux administrateurs de suivre le processus. Développée avec Spring Boot, React et PostgreSQL avec une attention particulière à la sécurité.",
        technologies: ["Spring Boot", "React", "OracleDB"],
        link: "https://github.com/yousfiwiame/Gestion-des-Stages",
        image: image3,
        type: "Projet Collaboratif",
        tags: ["Sécurisé", "Full-Stack", "DevSecOps"]
      }
    ],
    en: [
      {
        title: "E-commerce Application in Microservices",
        description: "Development of a scalable e-commerce platform using a microservices architecture for efficient management of products, user accounts, and order processing.",
        technologies: ["Spring Boot", "Spring Cloud", "Angular", "PostgreSQL", "Docker", "Kubernetes"],
        link: "https://github.com/yousfiwiame/ecommerce-microservices",
        image: image1,
        type: "Academic Project",
        tags: ["Microservices", "Scalable", "DevOps"]
      },
      {
        title: "Disease Prediction System",
        description: "An artificial intelligence system to predict diseases based on symptoms, using machine learning algorithms and an intuitive user interface to improve accessibility to preliminary diagnostics.",
        technologies: ["AI", "Python", "REST API"],
        link: "https://github.com/yousfiwiame/disease-prediction-system",
        image: image2,
        type: "Personal Project",
        tags: ["AI", "Python", "REST API"]
      },
      {
        title: "Internship Management",
        description: "A complete web application for managing university internships, allowing students to find internships, companies to post offers, and administrators to track the process. Developed with Spring Boot, React, and PostgreSQL with a focus on security.",
        technologies: ["Spring Boot", "React", "OracleDB"],
        link: "https://github.com/yousfiwiame/Gestion-des-Stages",
        image: image3,
        type: "Collaborative Project",
        tags: ["Secure", "Full-Stack", "DevSecOps"]
      }
    ]
  };

  return (
    <div className="container">
      <section className="work" id="work">
        <div className="wrapper">
          <div className="top">
            <div className="title" data-aos="zoom-in" data-aos-duration="1000">
              <h3>{t("projects")}</h3> {/* Use translation key for projects */}
            </div>
            <div className="portfolio">
              {projectPath[language].map((project, index) => (
                <div className="row" key={index}>
                  <div className="col-left" data-aos="flip-left" data-aos-duration="1000">
                    <div className="imgbox">
                      <img src={project.image} alt={project.title} />
                    </div>
                  </div>
                  <div className="col-right" data-aos="zoom-in" data-aos-duration="1000">
                    <p className="featured">{project.type}</p>
                    <h4 className="project-title">{project.title}</h4>
                    <div className="box">
                      <p>{project.description}</p>
                    </div>
                    <div className="bottom">
                      <ul className="text-list">
                        {project.tags.map((tag, tagIndex) => (
                          <li key={tagIndex}>{tag}</li>
                        ))}
                      </ul>
                      <div className="icons">
                        <a href={project.link}>
                          <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github" style={{width: `20px`, height: `20px`}}>
                            <title>GitHub</title>
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
