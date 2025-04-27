// ToolsSection.jsx
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import './ToolsSection.css';

// Importation des logos
import javaLogo from '../../assets/Java.svg';
import springBootLogo from '../../assets/SpringBoot.png';
import cLogo from '../../assets/C.png';
import pythonLogo from '../../assets/Python.png';
import bashLogo from '../../assets/Bash.svg';
import angularLogo from '../../assets/Angular.png';
import reactLogo from '../../assets/React.png';
import postgresqlLogo from '../../assets/Postgresql_elephant.png';
import mysqlLogo from '../../assets/MySQL.svg';
import oracleDbLogo from '../../assets/OracleDB.png';
import dockerLogo from '../../assets/Docker.svg';
import kubernetesLogo from '../../assets/Kubernetes.png';
import terraformLogo from '../../assets/Terraform.png';
import ansibleLogo from '../../assets/Ansible.png';
import jenkinsLogo from '../../assets/Jenkins.png';
import grafanaLogo from '../../assets/Grafana.svg';
import prometheusLogo from '../../assets/Prometheus.png';
import gitLogo from '../../assets/Git.svg';
import githubLogo from '../../assets/Github.png';
import gitlabLogo from '../../assets/Gitlab.svg';

const ToolsSection = () => {
  const { t } = useLanguage();
  
  const toolsData = [
    { name: 'Java', logo: javaLogo },
    { name: 'Spring Boot', logo: springBootLogo },
    { name: 'C', logo: cLogo },
    { name: 'Python', logo: pythonLogo },
    { name: 'Bash', logo: bashLogo },
    { name: 'Angular', logo: angularLogo },
    { name: 'React', logo: reactLogo },
    { name: 'PostgreSQL', logo: postgresqlLogo },
    { name: 'MySQL', logo: mysqlLogo },
    { name: 'Oracle DB', logo: oracleDbLogo },
    { name: 'Docker', logo: dockerLogo },
    { name: 'Kubernetes', logo: kubernetesLogo },
    { name: 'Terraform', logo: terraformLogo },
    { name: 'Ansible', logo: ansibleLogo },
    { name: 'Jenkins', logo: jenkinsLogo },
    { name: 'Grafana', logo: grafanaLogo },
    { name: 'Prometheus', logo: prometheusLogo },
    { name: 'Git', logo: gitLogo },
    { name: 'GitHub', logo: githubLogo },
    { name: 'GitLab CI/CD', logo: gitlabLogo },
  ];

  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section className="tools-section" ref={containerRef}>
      <div className="container mx-auto py-16">
        <h2 className="tools-title">{t('technicalSkills')}</h2>
        <div className={`tools-slider ${isVisible ? 'animate' : ''}`}>
          <div className="tools-track">
            {toolsData.map((tool, index) => (
              <div className="tool-item" key={index}>
                <div className="tool-logo">
                  <img src={tool.logo} alt={`${tool.name} logo`} />
                </div>
                <p className="tool-name">{tool.name}</p>
              </div>
            ))}
            
            {/* Duplication pour boucle infinie fluide */}
            {toolsData.map((tool, index) => (
              <div className="tool-item" key={`duplicate-${index}`}>
                <div className="tool-logo">
                  <img src={tool.logo} alt={`${tool.name} logo`} />
                </div>
                <p className="tool-name">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;