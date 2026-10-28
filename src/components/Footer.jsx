import React from 'react';
import { ArrowUp, RotateCcw, Sparkles } from 'lucide-react';
import { DeepamIcon } from './SvgAssets';

export const Footer = ({ currentLang, t, onBackToTop, onReplayCover }) => {
  return (
    <footer className="wedding-footer" role="contentinfo">
      <div className="footer-content">
        {/* Replay Invitation CTA Box */}
        <div className="replay-cover-card">
          <div className="replay-sparkle">
            <Sparkles size={18} className="sparkle-gold" />
          </div>
          <p className="replay-prompt-text">
            {currentLang === 'te'
              ? 'ఆహ్వాన పత్రికను మళ్లీ ప్రారంభం నుండి చూడాలనుకుంటున్నారా?'
              : 'Would you like to experience the wedding invitation again?'}
          </p>
          <button
            type="button"
            onClick={onReplayCover}
            className="btn-replay-cover"
            aria-label={t.replayFromCover}
          >
            <RotateCcw size={18} className="replay-icon" />
            <span>{t.replayFromCover}</span>
          </button>
        </div>

        <div className="footer-deepams-row">
          <DeepamIcon size={28} />
          <span className="footer-blessing-symbol">ॐ</span>
          <DeepamIcon size={28} />
        </div>

        <p className="footer-title">
          {t.siteTitle}
        </p>

        <p className="footer-blessing-line">
          {currentLang === 'te'
            ? 'శ్రీరస్తు • శుభమస్తు • అవిఘ్నమస్తు'
            : 'Srirasthu • Shubhamasthu • Avighnamasthu'}
        </p>

        <p className="footer-rights">
          {t.allRightsReserved}
        </p>

        <div className="footer-actions">
          <button
            type="button"
            onClick={onBackToTop}
            className="btn-back-to-top"
            aria-label={t.backToTop}
          >
            <ArrowUp size={16} />
            <span>{t.backToTop}</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
