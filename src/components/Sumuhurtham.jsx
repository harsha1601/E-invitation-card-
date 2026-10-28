import React from 'react';
import { Calendar, Clock, Compass, CalendarPlus, Download } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import { GoldOrnamentDivider, CornerOrnament } from './SvgAssets';

export const Sumuhurtham = ({ currentLang, weddingConfig, t }) => {
  const isTe = currentLang === 'te';
  const sm = weddingConfig.sumuhurtham;

  // Google Calendar URL generator
  const createGoogleCalendarUrl = () => {
    const title = encodeURIComponent("Wedding: Chi. Sivaramu weds Chi. Kum. Sou. Manasa Lakshmi");
    // Nov 25, 2026 10:30 AM IST (05:00 UTC) to 11:30 AM IST (06:00 UTC)
    const dates = "20261125T050000Z/20261125T060000Z";
    const details = encodeURIComponent(
      "Sri Punyamurthy Vari's Wedding Invitation.\nChi. Sivaramu, M.Tech. & Chi. Kum. Sou. Manasa Lakshmi, B.Tech.\nSumuhurtham: 10:30 AM to 11:30 AM in Makara Lagnam."
    );
    const location = encodeURIComponent("Sri Vasavi Sadan (Ammavarishala), Kadapa – 516 001, Andhra Pradesh");
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  // Download .ics file
  const handleDownloadIcs = () => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Sri Punyamurthy Vari//Wedding Invitation//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      'UID:wedding-sivaramu-manasa-20261125@punyamurthy.wedding',
      'DTSTAMP:20261026T000000Z',
      'DTSTART:20261125T050000Z',
      'DTEND:20261125T060000Z',
      'SUMMARY:Wedding: Chi. Sivaramu & Chi. Kum. Sou. Manasa Lakshmi',
      'DESCRIPTION:Sri Punyamurthy Vari Wedding Invitation. Chi. Sivaramu weds Chi. Kum. Sou. Manasa Lakshmi at Makara Lagnam.',
      'LOCATION:Sri Vasavi Sadan (Ammavarishala)\\, Kadapa – 516 001\\, Andhra Pradesh',
      'STATUS:CONFIRMED',
      'SEQUENCE:0',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Sivaramu_ManasaLakshmi_Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section className="sumuhurtham-section" aria-label="Sumuhurtham Details">
      <div className="section-card-frame">
        <CornerOrnament position="top-left" />
        <CornerOrnament position="top-right" />
        <CornerOrnament position="bottom-left" />
        <CornerOrnament position="bottom-right" />

        <div className="sumuhurtham-inner-content">
          <div className="sumuhurtham-badge">
            <Calendar size={18} className="badge-icon" />
            <h2 className="sumuhurtham-title">{t.sumuhurthamHeading}</h2>
          </div>

          {/* Date Highlight */}
          <div className="sumuhurtham-date-box">
            <span className="on-lead-text">
              {isTe ? 'శుభ ముహూర్త తేది:' : 'On'}
            </span>
            <div className="date-large-golden">
              {isTe ? sm.dateFormattedTelugu : sm.dateFormattedEnglish}
            </div>
          </div>

          {/* Time & Lagnam */}
          <div className="muhurtham-timing-grid">
            <div className="muhurtham-time-card">
              <Clock size={20} className="timing-icon" />
              <div className="timing-details">
                <span className="timing-label">{isTe ? 'సమయం:' : 'Time:'}</span>
                <span className="timing-value">{isTe ? sm.timeTelugu : sm.timeEnglish}</span>
              </div>
            </div>

            <div className="muhurtham-lagnam-card">
              <Compass size={20} className="timing-icon lagnam-icon" />
              <div className="timing-details">
                <span className="timing-label">{isTe ? 'లగ్నం:' : 'Lagnam:'}</span>
                <span className="timing-value lagnam-highlight">
                  {isTe ? sm.lagnamTelugu : sm.lagnamEnglish}
                </span>
              </div>
            </div>
          </div>

          {/* Full Traditional Muhurtham Verse */}
          <div className="traditional-muhurtham-quote">
            <p>
              {isTe ? sm.fullMuhurthamTelugu : sm.fullMuhurthamEnglish}
            </p>
          </div>

          <GoldOrnamentDivider className="my-5" />

          {/* Countdown Timer */}
          <CountdownTimer
            targetDate={sm.targetDateISO}
            t={t}
            isTe={isTe}
          />

          {/* Add to Calendar Actions */}
          <div className="calendar-actions-wrap">
            <p className="calendar-action-lead">
              📅 {t.addToCalendar}:
            </p>
            <div className="calendar-buttons-group">
              <a
                href={createGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-calendar btn-google"
                aria-label="Add to Google Calendar"
              >
                <CalendarPlus size={16} />
                <span>{t.googleCalendar}</span>
              </a>
              <button
                type="button"
                onClick={handleDownloadIcs}
                className="btn-calendar btn-ics"
                aria-label="Download ICS Calendar file"
              >
                <Download size={16} />
                <span>{t.downloadIcs}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sumuhurtham;
