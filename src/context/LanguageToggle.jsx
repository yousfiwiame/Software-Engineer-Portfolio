// LanguageToggle.jsx
import React from 'react';
import { useLanguage } from './LanguageContext';
import './LanguageToggle.css';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <div className="language-toggle">
      <button 
        className={`language-btn ${language === 'fr' ? 'active' : ''}`}
        onClick={toggleLanguage}
      >
        {language === 'fr' ? 'FR' : 'EN'}
      </button>
    </div>
  );
};

export default LanguageToggle;