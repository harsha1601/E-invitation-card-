import React from 'react';
import { Languages } from 'lucide-react';

export const LanguageSwitcher = ({ currentLang, onToggleLang, isFloating = false }) => {
  return (
    <div
      className={`lang-switcher-container ${isFloating ? 'floating-lang' : ''}`}
      role="region"
      aria-label="Language Switcher"
    >
      <div className="lang-switcher-pill">
        <Languages size={18} className="lang-icon" aria-hidden="true" />
        <button
          type="button"
          onClick={() => onToggleLang('te')}
          className={`lang-btn ${currentLang === 'te' ? 'active' : ''}`}
          aria-pressed={currentLang === 'te'}
          title="తెలుగు భాషకు మార్చండి"
        >
          తెలుగు
        </button>
        <span className="lang-separator" aria-hidden="true">|</span>
        <button
          type="button"
          onClick={() => onToggleLang('en')}
          className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
          aria-pressed={currentLang === 'en'}
          title="Switch to English"
        >
          English
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
