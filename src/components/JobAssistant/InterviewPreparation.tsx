import React, { useState } from 'react';
import { 
  HelpCircle, 
  Copy, 
  Check, 
  Edit2, 
  Lightbulb, 
  GraduationCap, 
  Headphones, 
  Laptop, 
  Banknote, 
  Code2, 
  MessageCircle,
  RotateCcw
} from 'lucide-react';
import { Language, InterviewQuestion } from '../../types';
import { interviewQuestions } from '../../data/interviewData';

interface InterviewPreparationProps {
  language: Language;
}

export const InterviewPreparation: React.FC<InterviewPreparationProps> = ({ language }) => {
  const isFil = language === 'fil';

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [editingAnswers, setEditingAnswers] = useState<Record<string, string>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', labelEn: 'All Questions', labelTl: 'Lahat ng Tanong', icon: HelpCircle },
    { id: 'fresh_grad', labelEn: 'Fresh Graduate', labelTl: 'Fresh Graduate', icon: GraduationCap },
    { id: 'bpo', labelEn: 'Customer Service / BPO', labelTl: 'Call Center / CS', icon: Headphones },
    { id: 'remote', labelEn: 'Work From Home (WFH)', labelTl: 'Work From Home', icon: Laptop },
    { id: 'salary', labelEn: 'Salary Negotiation', labelTl: 'Tawaran sa Sahod', icon: Banknote },
    { id: 'technical', labelEn: 'Technical & Problem Solving', labelTl: 'Teknikal', icon: Code2 },
    { id: 'general', labelEn: 'General & Behavioral', labelTl: 'Pangkalahatan', icon: MessageCircle },
  ];

  const filteredQuestions = interviewQuestions.filter(q => {
    return activeCategory === 'all' || q.category === activeCategory;
  });

  const getAnswerText = (q: InterviewQuestion): string => {
    if (editingAnswers[q.id] !== undefined) {
      return editingAnswers[q.id];
    }
    return isFil ? q.sampleAnswerTl : q.sampleAnswerEn;
  };

  const handleAnswerChange = (qId: string, val: string) => {
    setEditingAnswers(prev => ({ ...prev, [qId]: val }));
  };

  const handleResetAnswer = (q: InterviewQuestion) => {
    setEditingAnswers(prev => {
      const next = { ...prev };
      delete next[q.id];
      return next;
    });
  };

  const handleCopy = async (q: InterviewQuestion) => {
    const text = getAnswerText(q);
    await navigator.clipboard.writeText(text);
    setCopiedId(q.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <div className="space-y-6">
      
      {/* Category Tabs */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
          {isFil ? 'Pumili ng Uri ng Interview Prep:' : 'Select Interview Preparation Track:'}
        </label>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
                <span>{isFil ? cat.labelTl : cat.labelEn}</span>
              </button>
            );
          })}
        </div>

        <p className="text-[11px] text-slate-400 italic">
          {isFil
            ? 'Paalala: Ang mga sagot sa ibaba ay halimbawa lamang. I-personalize ang mga ito nang buong katapatan ayon sa iyong tunay na karanasan.'
            : 'Important: Practice modifying these sample answers in your own authentic words. Never lie about past accomplishments.'}
        </p>
      </div>

      {/* Questions List */}
      <div className="space-y-5">
        {filteredQuestions.map((q, index) => {
          const currentAnswer = getAnswerText(q);
          const isModified = editingAnswers[q.id] !== undefined;

          return (
            <div 
              key={q.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden transition-all hover:border-slate-300"
            >
              
              {/* Question Header */}
              <div className="p-5 sm:p-6 bg-slate-50/70 border-b border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {q.category.toUpperCase().replace('_', ' ')}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    Question #{index + 1}
                  </span>
                </div>

                <h3 className="font-extrabold text-base sm:text-lg text-slate-900 leading-snug">
                  {isFil ? q.questionTl : q.questionEn}
                </h3>

                <div className="p-2.5 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-blue-900 flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>{isFil ? 'Bakit ito itinatanong ng recruiter:' : 'Why interviewers ask this:'}</strong>{' '}
                    {isFil ? q.whyAskedTl : q.whyAskedEn}
                  </div>
                </div>
              </div>

              {/* Sample Answer Box (Editable) */}
              <div className="p-5 sm:p-6 space-y-4">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Edit2 className="w-3.5 h-3.5 text-blue-600" />
                      <span>{isFil ? 'Halimbawang Sagot (Pwedeng I-edit):' : 'Customizable Sample Answer:'}</span>
                    </label>

                    <div className="flex items-center gap-2">
                      {isModified && (
                        <button
                          type="button"
                          onClick={() => handleResetAnswer(q)}
                          className="text-[11px] text-slate-400 hover:text-rose-600 flex items-center gap-1 cursor-pointer"
                        >
                          <RotateCcw className="w-3 h-3" />
                          <span>{isFil ? 'I-reset' : 'Reset'}</span>
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => handleCopy(q)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg transition-colors cursor-pointer"
                      >
                        {copiedId === q.id ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedId === q.id ? (isFil ? 'Nakopya!' : 'Copied!') : (isFil ? 'Kopyahin' : 'Copy')}</span>
                      </button>
                    </div>
                  </div>

                  <textarea
                    rows={4}
                    value={currentAnswer}
                    onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                    className="w-full p-3 text-xs sm:text-sm bg-slate-50/50 border border-slate-300 rounded-xl leading-relaxed focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:bg-white text-slate-800"
                  />
                </div>

                {/* Coaching Tips */}
                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                    {isFil ? 'Mga Tips sa Pagsagot:' : 'Expert Answering Tips:'}
                  </span>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                    {(isFil ? q.tipsTl : q.tipsEn).map((tip, tIdx) => (
                      <li key={tIdx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};
