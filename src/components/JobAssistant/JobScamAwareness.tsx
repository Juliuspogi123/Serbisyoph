import React, { useState } from 'react';
import { 
  ShieldAlert, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  HelpCircle,
  RotateCcw,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Language } from '../../types';
import { jobScamIndicators, scamCheckQuestions } from '../../data/scamAwarenessData';

interface JobScamAwarenessProps {
  language: Language;
}

export const JobScamAwareness: React.FC<JobScamAwarenessProps> = ({ language }) => {
  const isFil = language === 'fil';

  // State for interactive questionnaire
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [showResult, setShowResult] = useState(false);

  const handleSelectAnswer = (qId: string, answer: boolean) => {
    setAnswers(prev => ({ ...prev, [qId]: answer }));
  };

  const handleResetChecker = () => {
    setAnswers({});
    setShowResult(false);
  };

  // Calculate risk level
  const totalYes = Object.values(answers).filter(val => val === true).length;
  const isAllAnswered = scamCheckQuestions.every(q => answers[q.id] !== undefined);

  let riskCategory: 'safe' | 'caution' | 'dangerous' = 'safe';
  if (totalYes >= 2) {
    riskCategory = 'dangerous';
  } else if (totalYes === 1) {
    riskCategory = 'caution';
  }

  return (
    <div className="space-y-8">
      
      {/* Top Warning Banner */}
      <div className="bg-rose-900 text-white p-6 sm:p-8 rounded-3xl shadow-lg border border-rose-800 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-800 text-rose-200 text-xs font-semibold">
          <ShieldAlert className="w-4 h-4 text-rose-400" />
          <span>{isFil ? 'Alerto sa Pekeng Trabaho' : 'Critical Philippine Job Scam Alert'}</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-white">
          {isFil 
            ? 'Protektahan ang Iyong Sarili Laban sa mga Illegal Recruitment at Modus' 
            : 'Protect Yourself from Illegal Recruitment, Advance Fee Frauds, & Task Scams'}
        </h2>
        <p className="text-xs sm:text-sm text-rose-100 max-w-3xl leading-relaxed">
          {isFil
            ? 'Tandaan ang pinakamahalagang patakaran sa pag-aapply sa Pilipinas: ANG LEHITIMONG TRABAHO AY HINDI NANININGIL NG PERA. Huwag kailanman magbayad para sa medical o uniform, at huwag ibigay ang iyong OTP o bank credentials.'
            : 'The golden rule of job application in the Philippines: REAL EMPLOYERS NEVER CHARGE APPLICANTS MONEY TO GET HIRED. Never send funds for medical or starter kits via GCash, and never disclose SMS OTPs.'}
        </p>
      </div>

      {/* Interactive Tool: Job Offer Legitimacy Checker */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div>
            <h3 className="font-extrabold text-slate-900 text-lg flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span>{isFil ? 'Interactive Test: Ligtas ba ang Natanggap Mong Job Offer?' : 'Interactive Tool: Test a Job Offer\'s Legitimacy'}</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {isFil
                ? 'Sagutin ang 5 mabilisang tanong tungkol sa iyong natanggap na mensahe o alok ng trabaho.'
                : 'Answer 5 quick questions about an offer to calculate its scam risk level.'}
            </p>
          </div>

          <button
            type="button"
            onClick={handleResetChecker}
            className="text-xs font-semibold text-slate-500 hover:text-rose-600 flex items-center gap-1 cursor-pointer self-start sm:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{isFil ? 'I-reset ang Test' : 'Reset Test'}</span>
          </button>
        </div>

        {/* 5 Questions */}
        <div className="space-y-4">
          {scamCheckQuestions.map((q, idx) => {
            const currentVal = answers[q.id];
            return (
              <div 
                key={q.id}
                className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3"
              >
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-900">
                    {isFil ? q.questionTl : q.questionEn}
                  </p>
                </div>

                {/* Yes / No Buttons */}
                <div className="flex items-center gap-3 ml-8">
                  <button
                    type="button"
                    onClick={() => handleSelectAnswer(q.id, true)}
                    className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      currentVal === true
                        ? 'bg-rose-600 text-white shadow-xs'
                        : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {isFil ? 'Oo (Yes)' : 'Yes'}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectAnswer(q.id, false)}
                    className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                      currentVal === false
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {isFil ? 'Hindi (No)' : 'No'}
                  </button>
                </div>

                {/* Immediate warning feedback if Yes */}
                {currentVal === true && (
                  <div className="ml-8 p-2.5 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-800 font-medium">
                    {isFil ? q.explanationTl : q.explanationEn}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Evaluation Summary */}
        <div className="pt-2">
          {!isAllAnswered ? (
            <p className="text-xs text-slate-500 italic">
              {isFil
                ? `Mangyaring sagutin ang lahat ng 5 tanong sa itaas (${Object.keys(answers).length}/5 nasagutan).`
                : `Please answer all 5 questions above to view your legitimacy score (${Object.keys(answers).length}/5 answered).`}
            </p>
          ) : (
            <div className={`p-5 rounded-2xl border text-sm space-y-2 animate-in fade-in duration-200 ${
              riskCategory === 'dangerous'
                ? 'bg-rose-50 border-rose-300 text-rose-950'
                : riskCategory === 'caution'
                ? 'bg-amber-50 border-amber-300 text-amber-950'
                : 'bg-emerald-50 border-emerald-300 text-emerald-950'
            }`}>
              <div className="flex items-center gap-2 font-black text-base sm:text-lg">
                {riskCategory === 'dangerous' && <XCircle className="w-6 h-6 text-rose-600 shrink-0" />}
                {riskCategory === 'caution' && <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0" />}
                {riskCategory === 'safe' && <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />}
                <span>
                  {riskCategory === 'dangerous' && (isFil ? 'MAPANGANIB: TIKET ITO NG ISANG PEKENG TRABAHO O SCAM' : 'HIGH DANGER: THIS SHOWS CLASSIC SCAM CHARACTERISTICS')}
                  {riskCategory === 'caution' && (isFil ? 'BABALA: MAG-INGAT AT MAG-BERIPIKA MUNA' : 'CAUTION: POTENTIAL RISKS IDENTIFIED')}
                  {riskCategory === 'safe' && (isFil ? 'LIGTAS: WALANG NAKITANG PANGUNAHING SCAM PATTERN' : 'LOOKS SAFE: NO PRIMARY RED FLAGS DETECTED')}
                </span>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed">
                {riskCategory === 'dangerous' && (
                  isFil
                    ? 'Mariin naming ipinapayo na ITIGIL ANG PAKIKIPAG-USAP sa nag-alok. Huwag magpapadala ng pera sa GCash o bangko, at huwag magbibigay ng litrato ng valid ID o OTP. I-block ang nagpadala ng mensahe.'
                    : 'We strongly advise you to STOP ALL CONTACT immediately. Do not send any money, do not disclose government account credentials or OTPs, and block the recruiter.'
                )}
                {riskCategory === 'caution' && (
                  isFil
                    ? 'May kahit isang babalang nakita. Siguraduhing bisitahin ang opisyal na website ng kumpanya at hanapin ang numero ng telepono ng kanilang HR bago magpatuloy.'
                    : 'At least one red flag was triggered. Verify the employer on their official corporate website or check SEC registration before providing sensitive documents.'
                )}
                {riskCategory === 'safe' && (
                  isFil
                    ? 'Maganda! Walang natukoy na red flags sa mga karaniwang modus. Gayunpaman, panatilihing pribado ang iyong mga password at laging humingi ng pormal na employment contract.'
                    : 'Great! No immediate red flags were detected. Always review your written employment contract and confirm government contribution enrollments.'
                )}
              </p>
            </div>
          )}
        </div>

      </div>

      {/* Guide: Detailed Scam Modus Operandi in PH */}
      <div className="space-y-4">
        <div>
          <h3 className="font-extrabold text-slate-900 text-lg">
            {isFil ? 'Mga Kilalang Modus at Babala sa Pilipinas' : 'Common Philippine Employment Scams to Avoid'}
          </h3>
          <p className="text-xs text-slate-500">
            {isFil ? 'Pag-aralan kung paano gumagana ang mga sumusunod na panlilinlang:' : 'Understand the tactics fraudulent operators use against jobseekers:'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobScamIndicators.map((scam) => (
            <div 
              key={scam.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs space-y-3"
            >
              <div className="flex items-center justify-between gap-2">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                  scam.warningLevel === 'critical'
                    ? 'bg-rose-100 text-rose-800 border border-rose-200'
                    : 'bg-amber-100 text-amber-800 border border-amber-200'
                }`}>
                  {scam.warningLevel === 'critical' ? 'CRITICAL DANGER' : 'HIGH RISK'}
                </span>
              </div>

              <h4 className="font-bold text-slate-900 text-base">
                {isFil ? scam.titleTl : scam.titleEn}
              </h4>

              <p className="text-xs text-slate-600 leading-relaxed">
                {isFil ? scam.descriptionTl : scam.descriptionEn}
              </p>

              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700">
                <span className="font-semibold text-rose-700 block mb-0.5">
                  {isFil ? 'Halimbawa ng Mensahe:' : 'Actual Scam Script Example:'}
                </span>
                <span className="italic font-mono text-[11px] text-slate-600">{scam.example}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
