import React from 'react';

// Lord Ganesha Motif with intricate golden aura
export const GaneshaMotif = ({ className = "w-24 h-24", size = 110 }) => (
  <svg
    viewBox="0 0 200 200"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Lord Ganesha Motif"
  >
    <defs>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F9E498" />
        <stop offset="35%" stopColor="#D9AE45" />
        <stop offset="70%" stopColor="#BF8C2C" />
        <stop offset="100%" stopColor="#F3D17A" />
      </linearGradient>
      <radialGradient id="auraGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#D9AE45" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#D9AE45" stopOpacity="0" />
      </radialGradient>
    </defs>
    
    {/* Radiant background aura */}
    <circle cx="100" cy="100" r="92" fill="url(#auraGlow)" />
    <circle cx="100" cy="100" r="88" stroke="url(#goldGradient)" strokeWidth="1.5" strokeDasharray="3 4" opacity="0.75" />
    <circle cx="100" cy="100" r="80" stroke="url(#goldGradient)" strokeWidth="1.2" opacity="0.6" />

    {/* Radiant Dots */}
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
      <circle
        key={deg}
        cx={100 + 84 * Math.cos((deg * Math.PI) / 180)}
        cy={100 + 84 * Math.sin((deg * Math.PI) / 180)}
        r="2"
        fill="url(#goldGradient)"
      />
    ))}

    {/* Stylized Lord Ganesha */}
    {/* Crown (Mukut) */}
    <path
      d="M100 28 L94 45 L106 45 Z M90 45 L110 45 L108 55 L92 55 Z M86 55 L114 55 L112 65 L88 65 Z"
      fill="url(#goldGradient)"
    />
    <circle cx="100" cy="38" r="1.5" fill="#FFF8E8" />
    <circle cx="100" cy="50" r="1.5" fill="#FFF8E8" />
    <circle cx="100" cy="60" r="1.8" fill="#FFF8E8" />

    {/* Forehead & Tilak / Trinetra */}
    <path
      d="M93 68 C96 66 104 66 107 68 C108 72 108 77 107 81 C104 83 96 83 93 81 Z"
      stroke="url(#goldGradient)"
      strokeWidth="2"
      fill="none"
    />
    <path d="M100 70 L100 79" stroke="#E63946" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="100" cy="81" r="1.8" fill="#E63946" />

    {/* Left Ear & Floral Ornamentation */}
    <path
      d="M87 70 C72 65 62 76 65 92 C67 103 76 107 85 105"
      stroke="url(#goldGradient)"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M74 77 C70 82 72 90 77 94"
      stroke="url(#goldGradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Right Ear */}
    <path
      d="M113 70 C128 65 138 76 135 92 C133 103 124 107 115 105"
      stroke="url(#goldGradient)"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />
    <path
      d="M126 77 C130 82 128 90 123 94"
      stroke="url(#goldGradient)"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Head Contour & Eyes */}
    <circle cx="92" cy="76" r="2.2" fill="url(#goldGradient)" />
    <circle cx="108" cy="76" r="2.2" fill="url(#goldGradient)" />

    {/* Curving Trunk (Sondh) with Modak */}
    <path
      d="M97 84 C95 95 93 112 101 126 C107 135 119 137 124 130 C129 123 123 114 115 114 C110 114 107 118 107 122 C107 125 110 127 113 126"
      stroke="url(#goldGradient)"
      strokeWidth="3.2"
      strokeLinecap="round"
      fill="none"
    />

    {/* Tusk (Danta) */}
    <path d="M92 98 L85 104" stroke="url(#goldGradient)" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M107 98 L111 101" stroke="url(#goldGradient)" strokeWidth="2" strokeLinecap="round" />

    {/* Blessing Abhaya Mudra Hand */}
    <path
      d="M68 116 C66 110 70 106 74 108 C77 110 77 122 75 128 C74 132 80 134 82 129 C84 124 85 117 84 112 C88 113 90 118 89 125 C88 132 82 139 76 142 C68 143 64 134 65 125 Z"
      fill="url(#goldGradient)"
      opacity="0.9"
    />
    <circle cx="75" cy="122" r="2.5" fill="#6D1735" />

    {/* Modak Bowl (Laddu) */}
    <path
      d="M125 128 C128 126 135 126 138 129 C139 135 136 141 130 142 C125 142 122 135 125 128 Z"
      fill="url(#goldGradient)"
    />
    <circle cx="131" cy="131" r="2.5" fill="#E63946" />

    {/* Traditional Bottom Petals Base */}
    <path
      d="M78 152 C88 146 100 148 100 148 C100 148 112 146 122 152 C125 156 120 162 100 162 C80 162 75 156 78 152 Z"
      fill="url(#goldGradient)"
      opacity="0.85"
    />
  </svg>
);

// Auspicious Kalash with Mango Leaves & Coconut
export const KalashMotif = ({ size = 64, className = "" }) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="kalashGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F9E498" />
        <stop offset="50%" stopColor="#D9AE45" />
        <stop offset="100%" stopColor="#AA7818" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="38" r="14" fill="#6D1735" stroke="url(#kalashGold)" strokeWidth="2" />
    <path d="M50 24 L50 20" stroke="url(#kalashGold)" strokeWidth="2" strokeLinecap="round" />
    
    <path d="M50 38 C40 32 30 35 24 25 C34 25 43 32 50 38 Z" fill="#386641" stroke="url(#kalashGold)" strokeWidth="1" />
    <path d="M50 38 C60 32 70 35 76 25 C66 25 57 32 50 38 Z" fill="#386641" stroke="url(#kalashGold)" strokeWidth="1" />
    <path d="M50 38 C45 26 42 16 50 12 C58 16 55 26 50 38 Z" fill="#4B8B56" stroke="url(#kalashGold)" strokeWidth="1" />

    <path
      d="M34 46 L66 46 L68 53 C74 62 72 78 50 82 C28 78 26 62 32 53 Z"
      fill="url(#kalashGold)"
      stroke="#AA7818"
      strokeWidth="1.5"
    />
    <path d="M40 82 L60 82 L64 88 L36 88 Z" fill="url(#kalashGold)" />
    <circle cx="50" cy="65" r="5" fill="#6D1735" />
  </svg>
);

// Traditional Festive Mango Leaves & Marigold Flower Toranam (Maamidaku & Banthipuvvu Swag)
export const MangoLeafToran = () => {
  // Junction positions for 6 elegant draped swags across 1000px
  const junctions = [20, 180, 340, 500, 660, 820, 980];

  return (
    <div className="toran-container" aria-hidden="true">
      <svg
        viewBox="0 0 1000 105"
        className="toran-svg"
        preserveAspectRatio="xMidYMin meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gold Rope Gradient */}
          <linearGradient id="toranGoldRope" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C49026" />
            <stop offset="25%" stopColor="#F9E498" />
            <stop offset="50%" stopColor="#D9AE45" />
            <stop offset="75%" stopColor="#F9E498" />
            <stop offset="100%" stopColor="#C49026" />
          </linearGradient>

          {/* Marigold Orange Radial */}
          <radialGradient id="marigoldOrange" cx="45%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="35%" stopColor="#FF9800" />
            <stop offset="75%" stopColor="#E65100" />
            <stop offset="100%" stopColor="#BF360C" />
          </radialGradient>

          {/* Marigold Yellow Radial */}
          <radialGradient id="marigoldYellow" cx="45%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#FFF176" />
            <stop offset="70%" stopColor="#FFC107" />
            <stop offset="100%" stopColor="#F57F17" />
          </radialGradient>

          {/* Mango Leaf Dark Green Gradient */}
          <linearGradient id="leafDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#386641" />
            <stop offset="60%" stopColor="#244B2C" />
            <stop offset="100%" stopColor="#132E1A" />
          </linearGradient>

          {/* Mango Leaf Light Green Gradient */}
          <linearGradient id="leafLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#588157" />
            <stop offset="50%" stopColor="#386641" />
            <stop offset="100%" stopColor="#1E3F24" />
          </linearGradient>

          {/* Gold Bell Gradient */}
          <linearGradient id="goldBell" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2B2" />
            <stop offset="50%" stopColor="#D9AE45" />
            <stop offset="100%" stopColor="#8C6010" />
          </linearGradient>

          {/* Filter for realistic shadow */}
          <filter id="toranShadow" x="-5%" y="-5%" width="110%" height="130%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#1A030D" floodOpacity="0.45" />
          </filter>
        </defs>

        <g filter="url(#toranShadow)">
          {/* Top Sacred Rope (Braided Gold & Green) */}
          <rect x="0" y="4" width="1000" height="5" rx="2.5" fill="url(#toranGoldRope)" />
          <line x1="0" y1="6.5" x2="1000" y2="6.5" stroke="#386641" strokeWidth="1.2" strokeDasharray="6 8" />

          {/* Draped Swags (Garland Festoons) */}
          {[0, 1, 2, 3, 4, 5].map((idx) => {
            const x1 = junctions[idx];
            const x2 = junctions[idx + 1];
            const mx = (x1 + x2) / 2;
            const dipY = 38;

            return (
              <g key={`swag-${idx}`}>
                {/* Secondary hanging marigold chain drape */}
                <path
                  d={`M ${x1} 7 Q ${mx} ${dipY + 8} ${x2} 7`}
                  stroke="url(#toranGoldRope)"
                  strokeWidth="2"
                  fill="none"
                />

                {/* Primary Marigold garland curve */}
                <path
                  d={`M ${x1} 7 Q ${mx} ${dipY} ${x2} 7`}
                  stroke="url(#marigoldOrange)"
                  strokeWidth="8"
                  strokeDasharray="4 6"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.9"
                />
                <path
                  d={`M ${x1} 7 Q ${mx} ${dipY} ${x2} 7`}
                  stroke="url(#marigoldYellow)"
                  strokeWidth="5"
                  strokeDasharray="5 7"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Center pendant flower at lowest point of swag */}
                <circle cx={mx} cy={dipY - 3} r="6.5" fill="url(#marigoldYellow)" />
                <circle cx={mx} cy={dipY - 3} r="3" fill="#E65100" />
                {/* Tiny jasmine bud dropping from center */}
                <line x1={mx} y1={dipY + 3} x2={mx} y2={dipY + 12} stroke="url(#toranGoldRope)" strokeWidth="1.2" />
                <circle cx={mx} cy={dipY + 14} r="2.8" fill="#FFF8E8" stroke="#D9AE45" strokeWidth="0.8" />
              </g>
            );
          })}

          {/* Junction Clusters: Mango Leaves, Big Marigolds & Hanging Tassels */}
          {junctions.map((jx, i) => (
            <g key={`junction-${i}`} transform={`translate(${jx}, 7)`}>
              {/* Mango Leaf Cluster (3 leaves: left, right, center) */}
              {/* Left Leaf */}
              <g transform="rotate(-26)">
                <path
                  d="M 0 0 C -8 18 -12 36 0 54 C 12 36 8 18 0 0 Z"
                  fill="url(#leafDark)"
                  stroke="#1B4332"
                  strokeWidth="0.8"
                />
                <line x1="0" y1="4" x2="0" y2="48" stroke="#52B788" strokeWidth="0.7" opacity="0.7" />
              </g>

              {/* Right Leaf */}
              <g transform="rotate(26)">
                <path
                  d="M 0 0 C -8 18 -12 36 0 54 C 12 36 8 18 0 0 Z"
                  fill="url(#leafLight)"
                  stroke="#1B4332"
                  strokeWidth="0.8"
                />
                <line x1="0" y1="4" x2="0" y2="48" stroke="#74C69D" strokeWidth="0.7" opacity="0.7" />
              </g>

              {/* Center Leaf (Longer, realistic curved tip) */}
              <g>
                <path
                  d="M 0 0 C -9 22 -11 44 0 66 C 11 44 9 22 0 0 Z"
                  fill="url(#leafDark)"
                  stroke="#1B4332"
                  strokeWidth="1"
                />
                <line x1="0" y1="4" x2="0" y2="58" stroke="#95D5B2" strokeWidth="0.9" opacity="0.8" />
              </g>

              {/* Hanging Flower Ladi (String with Marigold & Bell) */}
              <line x1="0" y1="12" x2="0" y2="76" stroke="url(#toranGoldRope)" strokeWidth="1.2" />
              
              {/* Mid-string Jasmine & Marigold bead */}
              <circle cx="0" cy="56" r="4.5" fill="url(#marigoldOrange)" />
              <circle cx="0" cy="65" r="3.2" fill="#FFF8E8" stroke="#D9AE45" strokeWidth="0.8" />

              {/* Golden Jhumka Bell at the tip */}
              <path
                d="M -5 74 L 5 74 L 7 81 C 7 86 -7 86 -7 81 Z"
                fill="url(#goldBell)"
                stroke="#68470B"
                strokeWidth="0.8"
              />
              <circle cx="0" cy="85" r="2" fill="url(#goldBell)" />

              {/* Grand Main Marigold Bloom at the junction knot */}
              {/* Outer floret ring */}
              <circle cx="0" cy="6" r="13" fill="url(#marigoldOrange)" />
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                <circle
                  key={deg}
                  cx={7 * Math.cos((deg * Math.PI) / 180)}
                  cy={6 + 7 * Math.sin((deg * Math.PI) / 180)}
                  r="4.5"
                  fill="url(#marigoldYellow)"
                />
              ))}
              {/* Inner golden center */}
              <circle cx="0" cy="6" r="5.5" fill="url(#marigoldYellow)" />
              <circle cx="0" cy="6" r="2.2" fill="#E65100" />
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};

// Golden Ornamental Divider with Lotus / Diamond
export const GoldOrnamentDivider = ({ className = "my-6" }) => (
  <div className={`gold-divider-wrap ${className}`} aria-hidden="true">
    <div className="gold-divider-line line-left"></div>
    <div className="gold-divider-center">
      <svg width="48" height="26" viewBox="0 0 48 26" fill="none">
        <path d="M24 2 L30 13 L24 24 L18 13 Z" fill="#D9AE45" />
        <circle cx="24" cy="13" r="3" fill="#6D1735" />
        <circle cx="9" cy="13" r="2.5" fill="#D9AE45" />
        <circle cx="39" cy="13" r="2.5" fill="#D9AE45" />
        <path d="M9 13 Q16 5 24 13 Q32 21 39 13" stroke="#D9AE45" strokeWidth="1.4" fill="none" />
        <path d="M9 13 Q16 21 24 13 Q32 5 39 13" stroke="#D9AE45" strokeWidth="1.4" fill="none" />
      </svg>
    </div>
    <div className="gold-divider-line line-right"></div>
  </div>
);

// Royal Paisley & Floral Filigree Corner (Intricate Kaarigari)
export const RoyalCornerFiligree = ({ position = "top-left" }) => {
  const transformMap = {
    "top-left": "rotate(0)",
    "top-right": "rotate(90deg)",
    "bottom-right": "rotate(180deg)",
    "bottom-left": "rotate(270deg)"
  };

  return (
    <div
      className={`royal-corner-filigree corner-${position}`}
      style={{ transform: transformMap[position] }}
      aria-hidden="true"
    >
      <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
        <defs>
          <linearGradient id="cornerGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2B2" />
            <stop offset="40%" stopColor="#D9AE45" />
            <stop offset="80%" stopColor="#A8771A" />
            <stop offset="100%" stopColor="#E9C46A" />
          </linearGradient>
        </defs>

        {/* Outer Corner Frame Lines with Beaded Dots */}
        <path d="M4 4 L86 4" stroke="url(#cornerGold)" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M4 4 L4 86" stroke="url(#cornerGold)" strokeWidth="2.5" strokeLinecap="round" />

        <path d="M9 9 L80 9" stroke="url(#cornerGold)" strokeWidth="1" strokeDasharray="2 3" />
        <path d="M9 9 L9 80" stroke="url(#cornerGold)" strokeWidth="1" strokeDasharray="2 3" />

        {/* Pearl bead at the vertex */}
        <circle cx="4" cy="4" r="3.5" fill="url(#cornerGold)" />
        <circle cx="16" cy="16" r="3" fill="#6D1735" stroke="url(#cornerGold)" strokeWidth="1.5" />

        {/* Intricate Paisley (Ambi / Kalka) Motif */}
        <path
          d="M26 12 C40 12 56 22 56 42 C56 58 44 68 30 68 C18 68 12 56 12 42 C12 28 20 20 28 14 C32 11 36 8 40 4"
          stroke="url(#cornerGold)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Inner Paisley Flourish & Floral Petals */}
        <path
          d="M26 22 C34 22 44 28 44 40 C44 50 36 56 28 56 C20 56 18 48 18 40 C18 30 22 25 26 22 Z"
          fill="url(#cornerGold)"
          fillOpacity="0.18"
          stroke="url(#cornerGold)"
          strokeWidth="1.2"
        />

        {/* Floral Rosette inside corner */}
        <circle cx="30" cy="38" r="4" fill="url(#cornerGold)" />
        <circle cx="30" cy="38" r="1.5" fill="#6D1735" />

        {/* Radiating filigree scrolls */}
        <path d="M12 42 Q10 70 38 78 Q60 84 82 82" stroke="url(#cornerGold)" strokeWidth="1.2" fill="none" />
        <path d="M42 12 Q70 10 78 38 Q84 60 82 82" stroke="url(#cornerGold)" strokeWidth="1.2" fill="none" />

        {/* Decorative corner florets */}
        <circle cx="68" cy="14" r="2.5" fill="url(#cornerGold)" />
        <circle cx="78" cy="22" r="2" fill="url(#cornerGold)" />
        <circle cx="14" cy="68" r="2.5" fill="url(#cornerGold)" />
        <circle cx="22" cy="78" r="2" fill="url(#cornerGold)" />
      </svg>
    </div>
  );
};

// CornerOrnament backwards-compatible alias
export const CornerOrnament = RoyalCornerFiligree;

// Traditional Indian Wedding Temple Arch Header
export const ScallopedTempleArch = () => (
  <div className="temple-arch-header-svg" aria-hidden="true">
    <svg viewBox="0 0 800 60" preserveAspectRatio="none" className="arch-svg-bar">
      <defs>
        <linearGradient id="archGold" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B88523" />
          <stop offset="25%" stopColor="#F9E498" />
          <stop offset="50%" stopColor="#D9AE45" />
          <stop offset="75%" stopColor="#F9E498" />
          <stop offset="100%" stopColor="#B88523" />
        </linearGradient>
      </defs>
      {/* Repeating scalloped temple archway curves */}
      <path
        d="M 0 10 
           Q 50 10 100 28 
           Q 150 10 200 28 
           Q 250 10 300 28 
           Q 350 10 400 36 
           Q 450 10 500 28 
           Q 550 10 600 28 
           Q 650 10 700 28 
           Q 750 10 800 10
           L 800 0 L 0 0 Z"
        fill="url(#archGold)"
        opacity="0.25"
      />
      <path
        d="M 0 12 
           Q 50 12 100 30 
           Q 150 12 200 30 
           Q 250 12 300 30 
           Q 350 12 400 38 
           Q 450 12 500 30 
           Q 550 12 600 30 
           Q 650 12 700 30 
           Q 750 12 800 12"
        stroke="url(#archGold)"
        strokeWidth="2.5"
        fill="none"
      />
      {/* Hanging pearl drops under each scallop */}
      {[100, 200, 300, 400, 500, 600, 700].map((cx, i) => (
        <g key={i}>
          <line x1={cx} y1={cx === 400 ? 38 : 30} x2={cx} y2={cx === 400 ? 48 : 38} stroke="url(#archGold)" strokeWidth="1.5" />
          <circle cx={cx} cy={cx === 400 ? 51 : 41} r={cx === 400 ? 4 : 2.5} fill="#D9AE45" stroke="#6D1735" strokeWidth="1" />
        </g>
      ))}
    </svg>
  </div>
);

// Traditional Side Jali / Latticework Vertical Border (Inspired by PDF Pages 1, 3, 4)
export const TraditionalSideJali = ({ side = "left" }) => (
  <div className={`side-jali-strip side-jali-${side}`} aria-hidden="true">
    <div className="jali-pattern-inner"></div>
  </div>
);

// Traditional Deepam (Diya) with flicking flame
export const DeepamIcon = ({ size = 36, className = "" }) => (
  <svg
    viewBox="0 0 60 60"
    width={size}
    height={size}
    className={`deepam-icon ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 38 C12 50 48 50 50 38 C42 42 18 42 10 38 Z"
      fill="#D9AE45"
      stroke="#AA7818"
      strokeWidth="1.5"
    />
    <path d="M22 47 L38 47 L34 52 L26 52 Z" fill="#AA7818" />
    
    <ellipse cx="30" cy="38" rx="20" ry="4" fill="#6D1735" stroke="#D9AE45" strokeWidth="1" />
    
    <path
      d="M30 14 C33 22 36 26 36 32 C36 36 33 38 30 38 C27 38 24 36 24 32 C24 26 27 22 30 14 Z"
      fill="url(#flameGradient)"
      className="flame-flicker"
    />
    <ellipse cx="30" cy="32" rx="3" ry="5" fill="#FFF8E8" />
    
    <defs>
      <linearGradient id="flameGradient" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#FFF8E8" />
        <stop offset="30%" stopColor="#FFD166" />
        <stop offset="70%" stopColor="#EF476F" />
        <stop offset="100%" stopColor="#B5179E" />
      </linearGradient>
    </defs>
  </svg>
);
