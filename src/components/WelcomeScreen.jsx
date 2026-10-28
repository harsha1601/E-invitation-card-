import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { Sparkles, MailOpen } from 'lucide-react';
import { GoldOrnamentDivider } from './SvgAssets';

export const WelcomeScreen = ({
  currentLang,
  onToggleLang,
  t,
  weddingConfig,
  onOpenInvitation
}) => {
  const isTe = currentLang === 'te';

  return (
    <section className="welcome-screen-wrap" aria-label="Wedding Cover Page">
      {/* Background Mandala Watermark */}
      <div className="bg-mandala bg-mandala-top" aria-hidden="true"></div>
      <div className="bg-mandala bg-mandala-bottom" aria-hidden="true"></div>

      {/* Floating Header with Language Switcher */}
      <header className="welcome-header">
        <div className="welcome-badge">
          <Sparkles size={14} className="gold-shimmer-icon" />
          <span>{isTe ? 'శుభ ముహూర్తం • 25-11-2026' : 'Subhamasthu • 25 Nov 2026'}</span>
        </div>
        <LanguageSwitcher currentLang={currentLang} onToggleLang={onToggleLang} />
      </header>

      {/* Main Cover Card */}
      <div
        className="welcome-card-outer cover-page-card"
        onClick={onOpenInvitation}
      >
        <div className="cover-artwork-container">
          {/* Authentic Cover Page Image */}
          <div className="cover-image-wrapper">
            <img
              src="/images/cover-ganesha.png"
              alt="Om Shree Ganeshay Namah - Traditional Lord Ganesha Wedding Card Cover"
              className="cover-ganesha-img"
            />
            
            {/* Optional Telugu invocation badge when Telugu is selected */}
            {isTe && (
              <div className="telugu-invocation-overlay">
                <span className="telugu-invocation-pill">
                  ఓం శ్రీ గణేశాయ నమః
                </span>
              </div>
            )}
          </div>

          {/* Invitation Details Banner below the cover artwork */}
          <div className="cover-details-ribbon">
            <p className="auspicious-blessings-text">
              {isTe ? weddingConfig.blessingsTelugu : weddingConfig.blessings}
            </p>

            <h1 className="welcome-invitation-title">
              {isTe ? weddingConfig.titleTelugu : weddingConfig.title}
            </h1>

            <GoldOrnamentDivider className="my-3" />

            <div className="welcome-couple-box">
              <div className="couple-name groom">
                {isTe ? weddingConfig.groom.nameTelugu : weddingConfig.groom.name}
                <span className="degree">, {isTe ? weddingConfig.groom.qualificationTelugu : weddingConfig.groom.qualification}</span>
              </div>
              <div className="welcome-wids">
                <span className="wids-amp">&</span>
              </div>
              <div className="couple-name bride">
                {isTe ? weddingConfig.bride.nameTelugu : weddingConfig.bride.name}
                <span className="degree">, {isTe ? weddingConfig.bride.qualificationTelugu : weddingConfig.bride.qualification}</span>
              </div>
            </div>

            <div className="welcome-muhurtham-pill">
              <span>🗓 {isTe ? 'బుధవారం, 25 నవంబర్ 2026' : 'Wednesday, 25 November 2026'}</span>
              <span className="pill-dot">•</span>
              <span>📍 {isTe ? 'కడప' : 'Kadapa'}</span>
            </div>

            {/* Tap to Open Invitation CTA */}
            <div className="open-cta-container">
              <button
                type="button"
                className="btn-open-invitation"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenInvitation();
                }}
                aria-label={t.openInvitation}
              >
                <MailOpen size={22} className="open-envelope-icon" />
                <span>{t.openInvitation}</span>
                <span className="sparkle-pulse">✨</span>
              </button>
              <p className="tap-hint-text">
                {isTe ? '👆 ఆహ్వాన పత్రికను తెరవడానికి ఇక్కడ నొక్కండి' : '👆 Tap card or button to open invitation'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeScreen;
