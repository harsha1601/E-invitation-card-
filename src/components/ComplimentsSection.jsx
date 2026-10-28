import React from 'react';
import { Sparkles } from 'lucide-react';
import { GoldOrnamentDivider } from './SvgAssets';

export const ComplimentsSection = ({ currentLang, weddingConfig, t }) => {
  const isTe = currentLang === 'te';

  return (
    <section className="compliments-section" aria-label="Compliments and Blessings">
      <div className="compliments-card">
        <div className="compliments-sparkle-top">
          <Sparkles size={16} className="sparkle-gold" />
        </div>
        
        <h3 className="compliments-heading">
          {t.complimentsHeading}
        </h3>

        <div className="compliments-main-text font-serif">
          {isTe ? weddingConfig.compliments.telugu : weddingConfig.compliments.english}
        </div>

        {isTe && (
          <p className="compliments-sub-text">
            బంధుమిత్రులు, శ్రేయోభిలాషులు మరియు పుణ్యమూర్తి వారి కుటుంబ సభ్యులు
          </p>
        )}

        <GoldOrnamentDivider className="my-3" />

        <p className="subhamasthu-blessing font-serif">
          {isTe ? 'సర్వేజనాః సుఖినోభవంతు • శుభం భవతు' : 'May all be happy and blessed with auspiciousness'}
        </p>
      </div>
    </section>
  );
};

export default ComplimentsSection;
