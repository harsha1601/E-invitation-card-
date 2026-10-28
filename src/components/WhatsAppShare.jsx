import React, { useState } from 'react';
import { Share2, Copy, Check, MessageCircle } from 'lucide-react';

export const WhatsAppShare = ({ currentLang, t, onShowToast }) => {
  const [linkCopied, setLinkCopied] = useState(false);

  const getWebsiteUrl = () => {
    return window.location.href;
  };

  const getShareText = () => {
    const url = getWebsiteUrl();
    return t.whatsAppShareMessage(url);
  };

  // WhatsApp click handler
  const handleWhatsAppShare = () => {
    const message = getShareText();
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // Copy Link click handler
  const handleCopyLink = async () => {
    try {
      const url = getWebsiteUrl();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = url;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setLinkCopied(true);
      onShowToast(t.linkCopied);
      setTimeout(() => setLinkCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  // Native Web Share API (mobile)
  const handleNativeShare = async () => {
    const url = getWebsiteUrl();
    const title = t.siteTitle;
    const text = t.whatsAppShareMessage(url);

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url
        });
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('Error sharing:', err);
          handleWhatsAppShare();
        }
      }
    } else {
      handleWhatsAppShare();
    }
  };

  return (
    <section className="share-section" aria-label="Share Wedding Invitation">
      <div className="share-card">
        <h3 className="share-heading">
          <Share2 size={20} className="share-icon" />
          <span>{t.shareWeddingInvitation}</span>
        </h3>
        <p className="share-sublead">
          {currentLang === 'te'
            ? 'ఈ శుభవార్తను మీ బంధుమిత్రులతో వాట్సాప్‌లో పంచుకోండి'
            : 'Share this auspicious wedding invitation with friends & family on WhatsApp'}
        </p>

        <div className="share-buttons-container">
          {/* Main WhatsApp Button */}
          <button
            type="button"
            onClick={handleWhatsAppShare}
            className="btn-share btn-whatsapp"
            aria-label={t.shareViaWhatsApp}
          >
            <MessageCircle size={22} className="wa-icon" />
            <span>{t.shareViaWhatsApp}</span>
          </button>

          {/* Copy Link Button */}
          <button
            type="button"
            onClick={handleCopyLink}
            className={`btn-share btn-copy-link ${linkCopied ? 'btn-copied' : ''}`}
            aria-label={t.copyInvitationLink}
          >
            {linkCopied ? <Check size={20} /> : <Copy size={20} />}
            <span>{linkCopied ? (currentLang === 'te' ? 'లింక్ కాపీ చేయబడింది!' : 'Link Copied!') : t.copyInvitationLink}</span>
          </button>

          {/* Native Share on mobile */}
          {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
            <button
              type="button"
              onClick={handleNativeShare}
              className="btn-share btn-native-share"
              aria-label={t.shareNative}
            >
              <Share2 size={20} />
              <span>{t.shareNative}</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhatsAppShare;
