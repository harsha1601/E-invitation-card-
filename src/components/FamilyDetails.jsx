import React from 'react';
import { Phone, MapPin, UserCheck } from 'lucide-react';

export const FamilyDetails = ({ currentLang, weddingConfig, t }) => {
  const isTe = currentLang === 'te';
  const gp = weddingConfig.groomParents;

  return (
    <section className="family-details-section" aria-label="Groom Parents and Family Details">
      <div className="section-title-badge">
        <UserCheck size={18} className="badge-icon" />
        <span>{t.parentsOfGroom}</span>
      </div>

      <div className="family-card-inner">
        {/* Parents Names */}
        <div className="parents-names-block">
          <p className="parent-line mother-name">
            {isTe ? gp.motherTelugu : gp.mother}
          </p>
          <p className="parent-line father-name">
            {isTe ? gp.fatherTelugu : gp.father}
          </p>
          <p className="parent-designation">
            {isTe ? gp.designationTelugu : gp.designation}
          </p>
        </div>

        {/* Address */}
        <div className="parents-address-block">
          <MapPin size={18} className="addr-pin-icon" />
          <address className="parents-address-text">
            <span>{isTe ? gp.addressLine1Telugu : gp.addressLine1}</span>
            <span>{isTe ? gp.addressLine2Telugu : gp.addressLine2}</span>
          </address>
        </div>

        {/* Contact Numbers with direct dial */}
        <div className="parents-contact-block">
          <div className="cell-label-pill">
            <Phone size={15} />
            <span>{t.groomParentsCell}:</span>
          </div>
          <div className="phone-numbers-list">
            <a
              href={`tel:${gp.phone1}`}
              className="phone-link"
              aria-label={`Call ${gp.phone1}`}
            >
              {gp.phone1}
            </a>
            <span className="phone-separator">,</span>
            <a
              href={`tel:${gp.phone2}`}
              className="phone-link"
              aria-label={`Call ${gp.phone2}`}
            >
              {gp.phone2}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyDetails;
