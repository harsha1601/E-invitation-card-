import React from 'react';
import { GoldOrnamentDivider } from './SvgAssets';
import { Heart } from 'lucide-react';

export const CoupleNames = ({ currentLang, weddingConfig, t }) => {
  const isTe = currentLang === 'te';

  return (
    <div className="couple-names-section" aria-label="Groom and Bride Details">
      {/* Invitation Lead Message */}
      <div className="invitation-lead-card">
        <p className="invitation-lead-quote">
          &ldquo;{t.invitationMessage}&rdquo;
        </p>
      </div>

      <GoldOrnamentDivider className="my-5" />

      {/* Groom Highlight Card */}
      <div className="couple-card groom-card">
        <div className="couple-role-badge">
          {isTe ? 'వరుడు (GROOM)' : 'GROOM'}
        </div>
        <h2 className="couple-fullname groom-name">
          {isTe ? (
            <>
              <span className="title-prefix">చి॥</span> శివరాము
              <span className="qualification-badge">ఎం.టెక్. (M.Tech.)</span>
            </>
          ) : (
            <>
              <span className="title-prefix">CHI.</span> SIVARAMU
              <span className="qualification-badge">M.Tech.</span>
            </>
          )}
        </h2>
        <p className="couple-family-link">
          {isTe
            ? 'శ్రీమతి పుణ్యమూర్తి శ్రీదేవి, శ్రీ పుణ్యమూర్తి సాంబశివుడు గార్ల ప్రథమ కుమారుడు'
            : 'Elder Son of Smt. Punyamurthy Sridevi & Sri. Punyamurthy Sambasivudu'}
        </p>
      </div>

      {/* Sacred Knot / "With" Connector */}
      <div className="wedding-knot-connector">
        <div className="knot-line"></div>
        <div className="knot-symbol-circle">
          <Heart size={20} className="heart-icon fill-gold" />
          <span className="knot-with-text font-serif">
            {t.with.toUpperCase()}
          </span>
        </div>
        <div className="knot-line"></div>
      </div>

      {/* Bride Highlight Card */}
      <div className="couple-card bride-card">
        <div className="couple-role-badge">
          {isTe ? 'వధువు (BRIDE)' : 'BRIDE'}
        </div>
        <h2 className="couple-fullname bride-name">
          {isTe ? (
            <>
              <span className="title-prefix">చి॥ కుం॥ సౌ॥</span> మానస లక్ష్మి
              <span className="qualification-badge">బి.టెక్. (B.Tech.)</span>
            </>
          ) : (
            <>
              <span className="title-prefix">CHI. KUM. SOU.</span> MANASA LAKSHMI
              <span className="qualification-badge">B.Tech.</span>
            </>
          )}
        </h2>

        {/* Bride's Parents Line */}
        <div className="bride-parents-box">
          <p className="bride-daughter-line">
            {isTe ? (
              <>
                ({weddingConfig.bride.parentsLineTelugu})
              </>
            ) : (
              <>
                {weddingConfig.bride.parentsLine}
              </>
            )}
          </p>
          <p className="bride-place-tag">
            <span className="place-pin">📍</span> {weddingConfig.bride.place}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoupleNames;
