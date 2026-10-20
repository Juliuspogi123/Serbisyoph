import React from 'react';
import { X, CheckCircle, AlertTriangle, Lightbulb, FileText } from 'lucide-react';
import { Language } from '../../types';

interface ResumeTipsModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const ResumeTipsModal: React.FC<ResumeTipsModalProps> = ({
  isOpen,
  onClose,
  language,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200 no-print">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
              <Lightbulb className="w-5 h-5 text-blue-700" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {language === 'en' ? 'ATS-Friendly Resume Guidelines' : 'Gabay sa Modernong ATS Resume'}
              </h3>
              <p className="text-xs text-slate-500">
                {language === 'en' ? 'How to pass screening in modern Philippine companies' : 'Paano makapasa sa initial screening ng mga kumpanya'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6 text-sm">

          {/* Section: Biodata vs Modern Resume */}
          <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-900 flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              {language === 'en' ? 'Old Bio-data vs. Modern Professional Resume' : 'Lumang Bio-data vs. Modernong Resume'}
            </h4>
            <p className="text-amber-900/90 text-xs sm:text-sm leading-relaxed">
              {language === 'en' ? (
                <>
                  In the past, Filipino applicants used paper <strong>"Bio-data"</strong> sheets containing sensitive personal details like height, weight, religion, civil status, parents&apos; names, and TIN numbers. Modern corporate, BPO, and international employers now use <strong>Applicant Tracking Systems (ATS)</strong> and strictly look for your <strong>skills, education, and achievements</strong>. Including personal bio-data information can expose you to discrimination and identity theft.
                </>
              ) : (
                <>
                  Dati, karaniwang ginagamit sa Pilipinas ang nabibiling <strong>Bio-data</strong> na may height, weight, relihiyon, pangalan ng magulang, at civil status. Ngunit sa modernong trabaho ngayon (BPO, kumpanya, o online work), <strong>Resume</strong> na ang kailangan. Ang resume ay nakatutok sa iyong <strong>kakayahan, pinag-aralan, at mga nagawa</strong>, hindi sa personal na anyo o pamilya.
                </>
              )}
            </p>
          </div>

          {/* What to Include vs Avoid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* DO INCLUDE */}
            <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-800">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>{language === 'en' ? 'WHAT TO INCLUDE' : 'MGA DAPAT ILAGAY'}</span>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                <li>Professional email (e.g. <code>juan.delacruz@gmail.com</code>)</li>
                <li>City/Province location (e.g. Quezon City, NCR)</li>
                <li>Target job title matching the job listing</li>
                <li>OJT, thesis, or academic leadership projects</li>
                <li>Technical and soft skills relevant to the role</li>
                <li>Quantifiable results (e.g. &quot;Assisted 50+ clients daily&quot;)</li>
                <li>Certificates (TESDA, webinars, RA 11261)</li>
              </ul>
            </div>

            {/* WHAT TO AVOID */}
            <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-xl space-y-2">
              <div className="flex items-center gap-2 font-bold text-rose-800">
                <X className="w-4 h-4 text-rose-600" />
                <span>{language === 'en' ? 'WHAT TO AVOID' : 'MGA DAPAT IWASAN'}</span>
              </div>
              <ul className="text-xs text-slate-700 space-y-1.5 list-disc list-inside">
                <li>Unprofessional emails (e.g. <code>baby_girl_08@yahoo.com</code>)</li>
                <li>Height, weight, religion, or civil status</li>
                <li>Names of parents or spouse</li>
                <li>SSS/TIN/PhilHealth ID numbers (privacy risk!)</li>
                <li>Selfie photos or non-standard graphical badges</li>
                <li>Fancy tables, columns, or graphics that break ATS</li>
                <li>Exaggerated or fabricated work history</li>
              </ul>
            </div>
          </div>

          {/* Action Verbs formula */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <h4 className="font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-600" />
              {language === 'en' ? 'The Winning Bullet Point Formula' : 'Pormula sa Pagsulat ng Karanasan'}
            </h4>
            <div className="p-2.5 bg-white border border-slate-200 rounded-lg text-xs font-mono text-slate-800">
              [Action Verb] + [Specific Task / Tool Used] + [Measurable Outcome / Result]
            </div>
            <div className="text-xs text-slate-600 space-y-1 pt-1">
              <p>
                <strong>❌ Weak:</strong> Handled customer calls and answered inquiries.
              </p>
              <p className="text-emerald-700">
                <strong>✅ Strong:</strong> Answered 60+ inbound customer inquiries daily with 96% first-contact resolution and courteous service.
              </p>
            </div>
          </div>

          {/* Fresh Grad Tip */}
          <div className="text-xs text-slate-500 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
            <span className="font-semibold text-blue-800">
              {language === 'en' ? 'Fresh Graduate Tip:' : 'Paalala sa Fresh Graduates:'}
            </span>{' '}
            {language === 'en'
              ? 'If you have no corporate experience, highlight your On-the-Job Training (OJT), senior high work immersion, capstone thesis, or volunteer projects in school. Employers value punctuality, eager attitude, and genuine foundational training.'
              : 'Kung wala ka pang pormal na trabaho, ilagay ang iyong OJT, work immersion, thesis, o mga sinalihang organisasyon sa paaralan. Mas mahalaga sa kumpanya ang iyong kahandaang matuto at positibong asal.'}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="border-t border-slate-200 px-6 py-3.5 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors cursor-pointer"
          >
            {language === 'en' ? 'Got It, Back to Builder' : 'Naintindihan, Bumalik sa Builder'}
          </button>
        </div>

      </div>
    </div>
  );
};
