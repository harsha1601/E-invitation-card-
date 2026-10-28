import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { weddingConfig } from './config/weddingConfig';
import { translations } from './i18n/translations';
import LanguageSwitcher from './components/LanguageSwitcher';
import WelcomeScreen from './components/WelcomeScreen';
import WeddingInvitation from './components/WeddingInvitation';
import { Mail, CheckCircle, Volume2, VolumeX, Music } from 'lucide-react';

export const App = () => {
  // 1. Language state with localStorage persistence (English default)
  const [currentLang, setCurrentLang] = useState(() => {
    try {
      const savedLang = localStorage.getItem('punyamurthy_wedding_lang');
      return savedLang === 'te' ? 'te' : 'en';
    } catch {
      return 'en';
    }
  });

  // 2. Invitation opened state
  const [isOpened, setIsOpened] = useState(false);

  // 3. Audio music state
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // 4. Toast notifications
  const [toastMessage, setToastMessage] = useState(null);

  const t = translations[currentLang] || translations.en;

  // Initialize Audio instance
  useEffect(() => {
    const audio = new Audio('/audio/wedding-music.mp3');
    audio.loop = true;
    audio.preload = 'auto';

    audio.onplay = () => setIsPlaying(true);
    audio.onpause = () => setIsPlaying(false);

    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  // Toggle Language
  const handleToggleLang = (lang) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem('punyamurthy_wedding_lang', lang);
    } catch (e) {
      console.warn('LocalStorage unavailable', e);
    }
  };

  // Toggle Audio Play / Pause
  const toggleAudio = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (!audioRef.current) {
      const audio = new Audio('/audio/wedding-music.mp3');
      audio.loop = true;
      audio.preload = 'auto';
      audio.onplay = () => setIsPlaying(true);
      audio.onpause = () => setIsPlaying(false);
      audioRef.current = audio;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.log('Audio playback prevented:', err);
      });
    }
  };

  // Trigger Festive Petal / Confetti Shower
  const triggerCelebration = () => {
    try {
      const colors = ['#D9AE45', '#F9E498', '#6D1735', '#E63946', '#386641'];
      confetti({
        particleCount: 85,
        spread: 70,
        origin: { y: 0.6 },
        colors
      });
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors
        });
      }, 250);
    } catch (e) {
      console.log('Confetti effect skipped', e);
    }
  };

  // Open Invitation and start music
  const handleOpenInvitation = () => {
    setIsOpened(true);
    triggerCelebration();

    if (!audioRef.current) {
      const audio = new Audio('/audio/wedding-music.mp3');
      audio.loop = true;
      audio.preload = 'auto';
      audio.onplay = () => setIsPlaying(true);
      audio.onpause = () => setIsPlaying(false);
      audioRef.current = audio;
    }

    // Start playing the wedding music automatically on user tap
    try {
      audioRef.current.currentTime = 0;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log('Audio autoplay prevented or waiting for interaction:', err);
        });
      }
    } catch (err) {
      console.warn('Audio play error:', err);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Close Invitation (back to cover page)
  const handleCloseToCover = () => {
    setIsOpened(false);

    // Pause audio when returning to cover
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Back to top
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show Toast
  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  // Set document title according to language
  useEffect(() => {
    document.title = currentLang === 'te' 
      ? 'శ్రీ పుణ్యమూర్తి వారి వివాహ ఆహ్వాన పత్రిక | చి॥ శివరాము weds చి॥ కుం॥ సౌ॥ మానస లక్ష్మి'
      : "Sri Punyamurthy Vari's Wedding Invitation | Chi. Sivaramu & Chi. Kum. Sou. Manasa Lakshmi";
  }, [currentLang]);

  return (
    <div className={`app-root lang-${currentLang}`}>
      {/* Toast Notification */}
      {toastMessage && (
        <aside className="toast-notification" role="status" aria-live="polite">
          <CheckCircle size={18} className="toast-icon" />
          <span>{toastMessage}</span>
        </aside>
      )}

      {/* Floating Music Control Button (visible when opened) */}
      {isOpened && (
        <button
          type="button"
          onClick={toggleAudio}
          className={`floating-music-btn ${isPlaying ? 'music-playing' : 'music-muted'}`}
          title={isPlaying ? t.pauseMusic : t.playMusic}
          aria-label={isPlaying ? t.pauseMusic : t.playMusic}
        >
          {isPlaying ? (
            <>
              <Volume2 size={20} className="music-pulse-icon" />
              <div className="audio-wave-bars">
                <span className="wave-bar bar-1"></span>
                <span className="wave-bar bar-2"></span>
                <span className="wave-bar bar-3"></span>
              </div>
            </>
          ) : (
            <VolumeX size={20} />
          )}
        </button>
      )}

      {/* Sticky Header when Invitation is Opened */}
      {isOpened && (
        <header className="site-header-bar">
          <div className="header-container">
            <button
              type="button"
              onClick={handleCloseToCover}
              className="btn-header-cover"
              title={currentLang === 'te' ? 'కవర్ పేజీకి వెళ్లండి' : 'View Cover'}
            >
              <Mail size={16} />
              <span className="hide-on-mobile">{currentLang === 'te' ? 'కవర్ పేజీ' : 'Cover'}</span>
            </button>

            <div className="header-names-summary">
              <span className="head-groom">{currentLang === 'te' ? 'చి॥ శివరాము' : 'Chi. Sivaramu'}</span>
              <span className="head-amp">&</span>
              <span className="head-bride">{currentLang === 'te' ? 'చి॥ సౌ॥ మానస లక్ష్మి' : 'Chi. Sou. Manasa Lakshmi'}</span>
            </div>

            <div className="header-controls-right">
              {/* Header Music Toggle Button */}
              <button
                type="button"
                onClick={toggleAudio}
                className={`btn-header-music ${isPlaying ? 'playing' : 'muted'}`}
                title={isPlaying ? t.pauseMusic : t.playMusic}
                aria-label={isPlaying ? t.pauseMusic : t.playMusic}
              >
                {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
                <span className="hide-on-mobile">{isPlaying ? t.audioMusic : (currentLang === 'te' ? 'మ్యూట్' : 'Muted')}</span>
              </button>

              <LanguageSwitcher
                currentLang={currentLang}
                onToggleLang={handleToggleLang}
              />
            </div>
          </div>
        </header>
      )}

      {/* Main Content Area */}
      <main className="app-main-content">
        {!isOpened ? (
          <WelcomeScreen
            currentLang={currentLang}
            onToggleLang={handleToggleLang}
            t={t}
            weddingConfig={weddingConfig}
            onOpenInvitation={handleOpenInvitation}
          />
        ) : (
          <div className="invitation-opened-view animated-fade-in">
            <WeddingInvitation
              currentLang={currentLang}
              weddingConfig={weddingConfig}
              t={t}
              onShowToast={showToast}
              onBackToTop={handleBackToTop}
              onReplayCover={handleCloseToCover}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
