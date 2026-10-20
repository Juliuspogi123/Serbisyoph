import React, { useState } from 'react';
import { 
  Briefcase, 
  FileText, 
  HelpCircle, 
  ShieldAlert, 
  Sparkles,
  Search
} from 'lucide-react';
import { Language } from '../../types';
import { JobSearchGuidance } from './JobSearchGuidance';
import { ApplicationAssistant } from './ApplicationAssistant';
import { InterviewPreparation } from './InterviewPreparation';
import { JobScamAwareness } from './JobScamAwareness';

interface JobAssistantContainerProps {
  language: Language;
  initialSubTab?: 'search' | 'applications' | 'interview' | 'scam';
}

export const JobAssistantContainer: React.FC<JobAssistantContainerProps> = ({
  language,
  initialSubTab = 'search',
}) => {
  const isFil = language === 'fil';
  const [activeSubTab, setActiveSubTab] = useState<'search' | 'applications' | 'interview' | 'scam'>(initialSubTab);

  const subTabs = [
    { id: 'search', labelEn: 'Job Search Guidance', labelTl: 'Paghahanap ng Trabaho', icon: Search },
    { id: 'applications', labelEn: 'Application & Letters', labelTl: 'Liham at Aplikasyon', icon: FileText },
    { id: 'interview', labelEn: 'Interview Preparation', labelTl: 'Paghahanda sa Interview', icon: HelpCircle },
    { id: 'scam', labelEn: 'Job Scam Awareness', labelTl: 'Iwas-Scam at Modus', icon: ShieldAlert },
  ] as const;

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-700/80 text-blue-200 text-xs font-semibold border border-blue-500/40">
            <Briefcase className="w-3.5 h-3.5 text-amber-300" />
            <span>{isFil ? 'Tulong sa Trabaho at Aplikasyon' : 'Career & Employment Toolkit'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {isFil ? 'Job Seeking Assistant ng Serbisyo PH' : 'Job Seeking Assistant'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {isFil
              ? 'Mula sa paghahanap ng lehitimong hiring hanggang sa pagsulat ng cover letter, pagsagot sa interview questions, at pag-iwas sa mga pekeng recruitment scams.'
              : 'Everything you need to land legitimate employment: portal search guidance, ATS cover letters, customizable interview preparation, and scam protection.'}
          </p>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-b border-slate-200">
        {subTabs.map((tab) => {
          const Icon = tab.icon;
          const isSelected = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-bold border-b-2 whitespace-nowrap transition-all cursor-pointer ${
                isSelected
                  ? 'border-blue-600 text-blue-700'
                  : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              <Icon className={`w-4 h-4 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
              <span>{isFil ? tab.labelTl : tab.labelEn}</span>
            </button>
          );
        })}
      </div>

      {/* Render Sub-View */}
      {activeSubTab === 'search' && <JobSearchGuidance language={language} />}
      {activeSubTab === 'applications' && <ApplicationAssistant language={language} />}
      {activeSubTab === 'interview' && <InterviewPreparation language={language} />}
      {activeSubTab === 'scam' && <JobScamAwareness language={language} />}

    </div>
  );
};
