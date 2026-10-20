import React from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  Banknote, 
  AlertTriangle, 
  ShieldAlert, 
  Calendar,
  Share2,
  Copy,
  Printer,
  Award,
  Globe
} from 'lucide-react';
import { GovernmentGuide, Language } from '../../types';

interface GuideDetailModalProps {
  guide: GovernmentGuide | null;
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const GuideDetailModal: React.FC<GuideDetailModalProps> = ({
  guide,
  isOpen,
  onClose,
  language,
}) => {
  const [copiedLink, setCopiedLink] = React.useState(false);

  if (!isOpen || !guide) return null;

  const isFil = language === 'fil';

  const handleCopyLink = () => {
    navigator.clipboard.writeText(guide.officialUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 sm:p-6 flex items-start justify-between border-b border-slate-800 shrink-0">
          <div className="space-y-1.5 pr-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-blue-600 text-white text-[11px] font-black uppercase tracking-wider">
                {guide.agencyCode}
              </span>
              <span className="text-xs text-slate-300 font-medium">
                {guide.agencyName}
              </span>
              {guide.firstTimeJobseekerFree && (
                <span className="px-2 py-0.5 rounded bg-amber-400 text-slate-950 text-[10px] font-extrabold flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  RA 11261 FREE BENEFIT
                </span>
              )}
            </div>
            <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-white leading-snug">
              {isFil ? guide.titleTl : guide.titleEn}
            </h2>
            <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {isFil ? 'Huling nasuri:' : 'Verified:'} {guide.dateVerified}
              </span>
              <span>·</span>
              <span className="text-emerald-400 font-medium flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {isFil ? 'Opisyal na pinagmulan' : 'Official Government Source'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body containing all 11 required points */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700 divide-y divide-slate-100">

          {/* 1. Purpose & Layunin */}
          <div className="space-y-2 pt-0">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
              <span>01.</span> {isFil ? 'Para Saan Ito (Purpose)' : 'What this Service is For'}
            </h3>
            <p className="text-slate-800 leading-relaxed text-sm bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              {isFil ? guide.purposeTl : guide.purposeEn}
            </p>
          </div>

          {/* 2. Who Can Apply & Eligibility */}
          <div className="space-y-2 pt-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
              <span>02.</span> {isFil ? 'Sino ang Pwedeng Mag-apply (Eligibility)' : 'Who Can Apply'}
            </h3>
            <ul className="grid grid-cols-1 gap-1.5 text-xs sm:text-sm">
              {(isFil ? guide.eligibleTl : guide.eligibleEn).map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Common Requirements */}
          <div className="space-y-2.5 pt-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
              <span>03.</span> {isFil ? 'Mga Kailangang Dalhin (Requirements)' : 'Common Requirements'}
            </h3>
            <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 space-y-2">
              <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                {(isFil ? guide.requirementsTl : guide.requirementsEn).map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-bold text-blue-700 text-xs mt-0.5">[{idx + 1}]</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 4. Step-by-Step Instructions */}
          <div className="space-y-3 pt-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
              <span>04.</span> {isFil ? 'Hakbang-Hakbang na Proseso (Step-by-Step)' : 'Step-by-Step Application Instructions'}
            </h3>
            <div className="space-y-2.5">
              {(isFil ? guide.stepsTl : guide.stepsEn).map((step, stepIdx) => (
                <div key={stepIdx} className="flex items-start gap-3 p-3 bg-white border border-slate-200 rounded-xl hover:border-blue-300 transition-colors shadow-2xs">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {stepIdx + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 5 & 6. Official Link & Online Portal Action */}
          <div className="space-y-3 pt-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
              <span>05 & 06.</span> {isFil ? 'Opisyal na Website at Online Portal' : 'Official Website & Online Registration Portals'}
            </h3>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <p className="text-xs text-slate-600">
                {isFil 
                  ? 'Pumunta lamang sa mga beripikadong website ng gobyerno. Huwag magtitiwala sa mga hindi pamilyar na domain.' 
                  : 'Always verify you are browsing legitimate official government domains ending in .gov.ph.'}
              </p>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={guide.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  <Globe className="w-4 h-4" />
                  <span>{isFil ? 'Buksan ang Opisyal na Website' : 'Open Official Portal'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {guide.portalUrl && guide.portalUrl !== guide.officialUrl && (
                  <a
                    href={guide.portalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-lg border border-slate-300 transition-colors cursor-pointer"
                  >
                    <span>{isFil ? 'Online E-Services Portal' : 'Direct E-Services / App'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-slate-100 text-slate-700 text-xs font-medium rounded-lg border border-slate-200 transition-colors cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedLink ? (isFil ? 'Nakopya!' : 'Link Copied!') : (isFil ? 'Kopyahin ang Link' : 'Copy URL')}</span>
                </button>
              </div>
            </div>
          </div>

          {/* 7. Fees & Processing Times */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5">
            <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider text-emerald-800">
                <Banknote className="w-4 h-4 text-emerald-600" />
                <span>{isFil ? 'Opisyal na Bayarin (Fees)' : 'Official Fees'}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                {isFil ? guide.feesTl : guide.feesEn}
              </p>
            </div>

            <div className="p-4 bg-sky-50/60 border border-sky-200 rounded-xl space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-xs uppercase tracking-wider text-sky-800">
                <Clock className="w-4 h-4 text-sky-600" />
                <span>{isFil ? 'Panahon ng Pagproseso (Time)' : 'Processing Time'}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                {isFil ? guide.processingTimeTl : guide.processingTimeEn}
              </p>
            </div>
          </div>

          {/* 8. Important Reminders */}
          <div className="space-y-2 pt-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
              <span>08.</span> {isFil ? 'Mahahalagang Paalala (Reminders)' : 'Important Reminders'}
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
              {(isFil ? guide.remindersTl : guide.remindersEn).map((rem, remIdx) => (
                <li key={remIdx} className="flex items-start gap-2">
                  <span className="text-amber-500 font-bold">•</span>
                  <span>{rem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 9. Common Mistakes to Avoid */}
          <div className="space-y-2 pt-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-rose-900 flex items-center gap-1.5">
              <span>09.</span> {isFil ? 'Mga Karaniwang Pagkakamali (Mistakes to Avoid)' : 'Common Mistakes to Avoid'}
            </h3>
            <div className="p-3.5 bg-rose-50/70 border border-rose-200 rounded-xl space-y-1.5">
              {(isFil ? guide.commonMistakesTl : guide.commonMistakesEn).map((mis, misIdx) => (
                <div key={misIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800">
                  <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{mis}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 10. Scam Prevention Tips */}
          <div className="space-y-2 pt-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
              <span>10.</span> {isFil ? 'Gabay Laban sa Scam at Fixer (Scam Prevention)' : 'Scam Prevention & Fixer Warnings'}
            </h3>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-950 text-xs">
                <ShieldAlert className="w-4 h-4 text-amber-700" />
                <span>{isFil ? 'BABALA LABAN SA FIXER AT PEKENG AGENTS' : 'NEVER PAY FIXERS OR UNOFFICIAL EXPEDITERS'}</span>
              </div>
              <ul className="space-y-1 text-xs text-amber-950/90 list-disc list-inside">
                {(isFil ? guide.scamAlertsTl : guide.scamAlertsEn).map((scam, scamIdx) => (
                  <li key={scamIdx} className="leading-relaxed">
                    {scam}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 11. Verification Metadata */}
          <div className="pt-5 text-xs text-slate-400 flex items-center justify-between">
            <span>
              {isFil ? 'Item 11: Petsa ng huling pagsusuri mula sa opisyal na portal:' : 'Item 11: Verified Date from official circulars:'}{' '}
              <strong className="text-slate-600">{guide.dateVerified}</strong>
            </span>
            <span className="italic">
              {isFil ? 'Malayang Gabay ng Serbisyo PH' : 'Independent Public Guide'}
            </span>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={handlePrint}
            className="px-3.5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-200 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{isFil ? 'I-print ang Gabay' : 'Print Checklist'}</span>
          </button>

          <div className="flex items-center gap-2">
            <a
              href={guide.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <span>{isFil ? 'Bumisita sa Opisyal na Website' : 'Go to Official Website'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
            >
              {isFil ? 'Isara' : 'Close'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
