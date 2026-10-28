import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink } from 'lucide-react';
import { GoldOrnamentDivider, CornerOrnament } from './SvgAssets';

export const VenueSection = ({ currentLang, weddingConfig, t, onShowToast }) => {
  const isTe = currentLang === 'te';
  const venue = weddingConfig.venue;
  const [copied, setCopied] = useState(false);

  const fullAddressString = `${venue.name}, ${venue.address}`;

  const handleCopyAddress = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(fullAddressString);
      } else {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = fullAddressString;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      onShowToast(t.addressCopied);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy address:', err);
    }
  };

  return (
    <section className="venue-section" aria-label="Wedding Venue Details">
      <div className="section-card-frame">
        <CornerOrnament position="top-left" />
        <CornerOrnament position="top-right" />
        <CornerOrnament position="bottom-left" />
        <CornerOrnament position="bottom-right" />

        <div className="venue-inner-content">
          <div className="venue-badge">
            <MapPin size={20} className="badge-icon pulse-icon" />
            <h2 className="venue-heading">{t.venueHeading}</h2>
          </div>

          <div className="venue-name-box">
            <h3 className="venue-name-title">
              {isTe ? venue.nameTelugu : venue.name}
            </h3>
            <p className="venue-address-text">
              {isTe ? venue.addressTelugu : venue.address}
            </p>
          </div>

          {/* Action Buttons: Get Directions & Copy Address */}
          <div className="venue-cta-row">
            <a
              href={venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-venue-action btn-directions"
              aria-label={t.getDirections}
            >
              <Navigation size={17} />
              <span>{t.getDirections}</span>
              <ExternalLink size={14} className="ext-icon" />
            </a>

            <button
              type="button"
              onClick={handleCopyAddress}
              className={`btn-venue-action btn-copy-addr ${copied ? 'btn-copied-success' : ''}`}
              aria-label={t.copyAddress}
            >
              {copied ? <Check size={17} className="check-icon" /> : <Copy size={17} />}
              <span>{copied ? (isTe ? 'కాపీ చేయబడింది!' : 'Copied!') : t.copyAddress}</span>
            </button>
          </div>

          {/* Google Maps Interactive Embed */}
          <div className="venue-map-embed-container">
            <iframe
              title="Sri Vasavi Sadan Ammavarishala Kadapa Location Map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(venue.googleEmbedQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="260"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="venue-map-iframe"
            ></iframe>
          </div>

          <GoldOrnamentDivider className="mt-4 mb-2" />
          <p className="venue-landmark-note">
            📍 {isTe ? 'కడప నగరంలోని ప్రముఖ కళ్యాణ మండపం' : 'Prominent wedding hall located in Kadapa'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
