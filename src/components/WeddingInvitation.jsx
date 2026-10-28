import React from 'react';
import {
  GaneshaMotif,
  RoyalCornerFiligree,
  GoldOrnamentDivider,
  MangoLeafToran,
  ScallopedTempleArch,
  TraditionalSideJali
} from './SvgAssets';
import FamilyDetails from './FamilyDetails';
import CoupleNames from './CoupleNames';
import Sumuhurtham from './Sumuhurtham';
import VenueSection from './VenueSection';
import WhatsAppShare from './WhatsAppShare';
import ComplimentsSection from './ComplimentsSection';
import Footer from './Footer';

export const WeddingInvitation = ({
  currentLang,
  weddingConfig,
  t,
  onShowToast,
  onBackToTop,
  onReplayCover
}) => {
  const isTe = currentLang === 'te';

  return (
    <article className="main-invitation-container" aria-label="Main Wedding Invitation Card">
      {/* Decorative Mango Leaves Toranam Banner */}
      <MangoLeafToran />

      {/* Main Wedding Invitation Card Wrapper */}
      <div className="wedding-card-parchment royal-bordered-card">
        {/* Traditional Side Jali / Latticework Gold Borders */}
        <TraditionalSideJali side="left" />
        <TraditionalSideJali side="right" />

        {/* Intricate Royal Paisley Corners */}
        <RoyalCornerFiligree position="top-left" />
        <RoyalCornerFiligree position="top-right" />
        <RoyalCornerFiligree position="bottom-left" />
        <RoyalCornerFiligree position="bottom-right" />

        {/* Outer Golden Lattice Borders */}
        <div className="card-border-ornament">
          {/* Scalloped Temple Arch across top of card */}
          <ScallopedTempleArch />

          <div className="inner-card-content">

            {/* Sacred Top Header */}
            <header className="card-sacred-header">
              <div className="ganesha-wrapper">
                <GaneshaMotif size={110} className="ganesha-svg" />
              </div>

              <div className="sacred-invocation-text font-serif-telugu">
                {t.invocation}
              </div>

              <div className="auspicious-mantra-triad">
                {isTe ? weddingConfig.blessingsTelugu : weddingConfig.blessings}
              </div>

              <GoldOrnamentDivider className="my-4" />

              {/* Main Official Heading */}
              <h1 className="official-wedding-title">
                {isTe ? weddingConfig.titleTelugu : weddingConfig.title}
              </h1>
            </header>

            {/* Section 1: Parents of the Groom */}
            <FamilyDetails
              currentLang={currentLang}
              weddingConfig={weddingConfig}
              t={t}
            />

            {/* Section 2: Couple Names & Invitation Message */}
            <CoupleNames
              currentLang={currentLang}
              weddingConfig={weddingConfig}
              t={t}
            />

            {/* Section 3: Sumuhurtham & Countdown */}
            <Sumuhurtham
              currentLang={currentLang}
              weddingConfig={weddingConfig}
              t={t}
            />

            {/* Section 4: Venue & Directions */}
            <VenueSection
              currentLang={currentLang}
              weddingConfig={weddingConfig}
              t={t}
              onShowToast={onShowToast}
            />

            {/* Section 5: With Best Compliments From */}
            <ComplimentsSection
              currentLang={currentLang}
              weddingConfig={weddingConfig}
              t={t}
            />

            {/* Section 6: WhatsApp Sharing & Link Copy */}
            <WhatsAppShare
              currentLang={currentLang}
              t={t}
              onShowToast={onShowToast}
            />

          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        t={t}
        onBackToTop={onBackToTop}
        onReplayCover={onReplayCover}
      />
    </article>
  );
};

export default WeddingInvitation;
