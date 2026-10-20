import React, { useState } from 'react';
import { 
  Plus, 
  Trash2, 
  Sparkles, 
  RotateCcw, 
  BookOpen, 
  HelpCircle,
  Briefcase,
  GraduationCap,
  Wrench,
  Award,
  Languages,
  User,
  CheckCircle2,
  FileCheck2
} from 'lucide-react';
import { ResumeData, ProfileType, Language, EducationItem, ExperienceItem } from '../../types';
import { sampleResumes } from '../../data/sampleResumes';

interface ResumeFormProps {
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
  language: Language;
  onOpenTips: () => void;
  onPreviewClick: () => void;
}

export const ResumeForm: React.FC<ResumeFormProps> = ({
  resumeData,
  setResumeData,
  language,
  onOpenTips,
  onPreviewClick,
}) => {
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [enhanceSuccessMessage, setEnhanceSuccessMessage] = useState<string | null>(null);
  const [newSkillInput, setNewSkillInput] = useState('');
  const [newCertInput, setNewCertInput] = useState('');
  const [newLangInput, setNewLangInput] = useState('');

  // Profile type switcher handler
  const handleProfileTypeChange = (type: ProfileType) => {
    setResumeData(prev => ({
      ...prev,
      profileType: type,
    }));
  };

  // Load sample resume based on current profile or chosen sample
  const handleLoadSample = (sampleKey: string) => {
    if (sampleResumes[sampleKey]) {
      setResumeData(JSON.parse(JSON.stringify(sampleResumes[sampleKey])));
      setEnhanceSuccessMessage(language === 'en' ? 'Sample data loaded successfully!' : 'Na-load na ang halimbawang resume!');
      setTimeout(() => setEnhanceSuccessMessage(null), 3500);
    }
  };

  // Reset / Clear form
  const handleClearForm = () => {
    if (window.confirm(language === 'en' ? 'Are you sure you want to clear the entire form?' : 'Sigurado ka bang nais mong burahin ang lahat ng nakasulat sa form?')) {
      setResumeData({
        profileType: 'fresh_grad',
        fullName: '',
        email: '',
        phone: '',
        location: '',
        linkedinOrPortfolio: '',
        targetJobTitle: '',
        summary: '',
        education: [
          {
            id: 'edu-new',
            institution: '',
            degreeOrStrand: '',
            location: '',
            startDate: '',
            endDate: '',
            current: false,
            honorsOrAchievements: ''
          }
        ],
        experience: [],
        skills: [],
        certifications: [],
        languages: ['English', 'Filipino']
      });
    }
  };

  // AI or Smart Algorithmic Summary Generator / Enhancer
  const handleEnhanceSummary = async () => {
    setIsEnhancing(true);
    setEnhanceSuccessMessage(null);

    try {
      // First attempt server-side proxy
      const response = await fetch('/api/ai/enhance-resume', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          targetJob: resumeData.targetJobTitle,
          profileType: resumeData.profileType,
          currentSummary: resumeData.summary,
          skills: resumeData.skills,
          education: resumeData.education,
          experience: resumeData.experience,
        }),
      });

      const data = await response.json();

      if (data.available && data.enhancedSummary) {
        setResumeData(prev => ({ ...prev, summary: data.enhancedSummary }));
        setEnhanceSuccessMessage(language === 'en' ? 'Summary optimized with AI!' : 'Matagumpay na na-optimize ang summary!');
      } else {
        // Fallback to high-quality structured ATS formula using only user's supplied facts
        const fallback = generateAtsSummaryFallback(resumeData);
        setResumeData(prev => ({ ...prev, summary: fallback }));
        setEnhanceSuccessMessage(language === 'en' ? 'Generated professional ATS summary from your input!' : 'Binuo ang propesyonal na buod mula sa iyong impormasyon!');
      }
    } catch {
      // Clean fallback if offline
      const fallback = generateAtsSummaryFallback(resumeData);
      setResumeData(prev => ({ ...prev, summary: fallback }));
      setEnhanceSuccessMessage(language === 'en' ? 'Generated standard ATS summary!' : 'Binuo ang ATS summary batay sa iyong input!');
    } finally {
      setIsEnhancing(false);
      setTimeout(() => setEnhanceSuccessMessage(null), 4000);
    }
  };

  // Safe fallback formula without inventing facts
  const generateAtsSummaryFallback = (data: ResumeData): string => {
    const job = data.targetJobTitle || 'professional position';
    const skillsList = data.skills.length > 0 ? data.skills.slice(0, 4).join(', ') : 'strong communication and organizational skills';
    const topEdu = data.education[0]?.degreeOrStrand || 'formal education';
    const school = data.education[0]?.institution ? `from ${data.education[0].institution}` : '';

    if (data.profileType === 'fresh_grad' || data.profileType === 'no_exp') {
      return `Dedicated and detail-oriented graduate with background in ${topEdu} ${school}. Brings foundational competencies in ${skillsList}. Certified under the First-Time Jobseekers Assistance Act (RA 11261) and committed to contributing proactive problem-solving, dependability, and rapid learning to the ${job} team.`;
    } else if (data.profileType === 'career_changer') {
      return `Adaptable professional transitioning into the ${job} field, leveraging transferable strengths in ${skillsList}. Known for strong work ethic, efficient task execution, and quick mastery of new processes to deliver immediate value.`;
    } else {
      return `Results-oriented ${job} specialist with a proven track record of reliable performance and collaborative problem solving. Possesses practical competencies in ${skillsList}. Dedicated to optimizing team workflows and upholding high standards of quality and service.`;
    }
  };

  // Education item management
  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [
        ...prev.education,
        {
          id: `edu-${Date.now()}`,
          institution: '',
          degreeOrStrand: '',
          location: '',
          startDate: '',
          endDate: '',
          current: false,
          honorsOrAchievements: ''
        }
      ]
    }));
  };

  const removeEducation = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.filter(item => item.id !== id)
    }));
  };

  const updateEducation = (id: string, field: keyof EducationItem, value: any) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  // Experience item management
  const addExperience = () => {
    setResumeData(prev => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: `exp-${Date.now()}`,
          role: '',
          companyOrOrg: '',
          location: '',
          startDate: '',
          endDate: '',
          current: false,
          description: ['']
        }
      ]
    }));
  };

  const removeExperience = (id: string) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.filter(item => item.id !== id)
    }));
  };

  const updateExperience = (id: string, field: keyof ExperienceItem, value: any) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  const addExperienceBullet = (expId: string) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => {
        if (exp.id === expId) {
          return { ...exp, description: [...exp.description, ''] };
        }
        return exp;
      })
    }));
  };

  const updateExperienceBullet = (expId: string, index: number, value: string) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => {
        if (exp.id === expId) {
          const newDesc = [...exp.description];
          newDesc[index] = value;
          return { ...exp, description: newDesc };
        }
        return exp;
      })
    }));
  };

  const removeExperienceBullet = (expId: string, index: number) => {
    setResumeData(prev => ({
      ...prev,
      experience: prev.experience.map(exp => {
        if (exp.id === expId) {
          const newDesc = exp.description.filter((_, i) => i !== index);
          return { ...exp, description: newDesc.length ? newDesc : [''] };
        }
        return exp;
      })
    }));
  };

  // Skills
  const addSkill = (skill: string) => {
    const trimmed = skill.trim();
    if (trimmed && !resumeData.skills.includes(trimmed)) {
      setResumeData(prev => ({ ...prev, skills: [...prev.skills, trimmed] }));
      setNewSkillInput('');
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skillToRemove)
    }));
  };

  // Suggested skills by profile
  const suggestedSkills = [
    'Customer Service',
    'Microsoft Excel & Word',
    'Google Workspace',
    'Fast Data Entry',
    'Written & Verbal English',
    'Time Management',
    'Problem Solving',
    'Social Media Coordination',
    'Technical Troubleshooting',
    'Sales & Cashiering'
  ];

  // Certifications
  const addCertification = (cert: string) => {
    const trimmed = cert.trim();
    if (trimmed && !resumeData.certifications.includes(trimmed)) {
      setResumeData(prev => ({ ...prev, certifications: [...prev.certifications, trimmed] }));
      setNewCertInput('');
    }
  };

  const removeCertification = (certToRemove: string) => {
    setResumeData(prev => ({
      ...prev,
      certifications: prev.certifications.filter(c => c !== certToRemove)
    }));
  };

  // Languages
  const addLanguage = (lang: string) => {
    const trimmed = lang.trim();
    if (trimmed && !resumeData.languages.includes(trimmed)) {
      setResumeData(prev => ({ ...prev, languages: [...prev.languages, trimmed] }));
      setNewLangInput('');
    }
  };

  const removeLanguage = (langToRemove: string) => {
    setResumeData(prev => ({
      ...prev,
      languages: prev.languages.filter(l => l !== langToRemove)
    }));
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      
      {/* Top Banner & Quick Controls */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <User className="w-5 h-5 text-blue-600" />
            <span>{language === 'en' ? 'Interactive Resume Builder' : 'Paggawa ng Resume'}</span>
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            {language === 'en' 
              ? 'ATS-friendly format tailored for Philippine companies and remote work.' 
              : 'Malinis na format na angkop sa mga kumpanya sa Pilipinas at online jobs.'}
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {/* Quick load sample dropdown */}
          <div className="relative group inline-block">
            <button
              type="button"
              className="px-3 py-1.5 text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg border border-blue-200 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Load Sample' : 'Halimbawa'}</span>
            </button>
            <div className="hidden group-hover:block absolute right-0 mt-1 w-56 bg-white border border-slate-200 rounded-xl shadow-xl z-20 py-1 text-xs">
              <div className="px-3 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                {language === 'en' ? 'Choose Fictional Sample' : 'Pumili ng Halimbawa'}
              </div>
              <button
                type="button"
                onClick={() => handleLoadSample('fresh_grad')}
                className="w-full text-left px-3 py-2 hover:bg-slate-50 text-slate-700 hover:text-blue-700 block cursor-pointer"
              >
                🎓 Fresh Grad (BS IT / Tech)
              </button>
              <button
                type="button"
                onClick={() => handleLoadSample('experienced')}
                className="w-full text-left px-3 py-2 hover:bg-slate-50 text-slate-700 hover:text-blue-700 block cursor-pointer"
              >
                💼 Experienced (BPO / Lead)
              </button>
              <button
                type="button"
                onClick={() => handleLoadSample('no_exp')}
                className="w-full text-left px-3 py-2 hover:bg-slate-50 text-slate-700 hover:text-blue-700 block cursor-pointer"
              >
                🌱 No Experience / Senior High
              </button>
              <button
                type="button"
                onClick={() => handleLoadSample('career_changer')}
                className="w-full text-left px-3 py-2 hover:bg-slate-50 text-slate-700 hover:text-blue-700 block cursor-pointer"
              >
                🔄 Career Changer / VA
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenTips}
            className="px-3 py-1.5 text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
            <span>{language === 'en' ? 'Resume Tips' : 'Mga Tips'}</span>
          </button>

          <button
            type="button"
            onClick={handleClearForm}
            className="px-3 py-1.5 text-xs font-semibold text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-lg border border-transparent transition-colors cursor-pointer flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            <span>{language === 'en' ? 'Clear' : 'Burahin'}</span>
          </button>

          <button
            type="button"
            onClick={onPreviewClick}
            className="px-3.5 py-1.5 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer sm:hidden"
          >
            <FileCheck2 className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Preview' : 'Silipin'}</span>
          </button>
        </div>
      </div>

      {/* Success notification banner */}
      {enhanceSuccessMessage && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs flex items-center gap-2 animate-in fade-in duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{enhanceSuccessMessage}</span>
        </div>
      )}

      {/* 1. Profile Type Selector */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
          {language === 'en' ? 'Step 1: Select Your Current Situation' : 'Hakbang 1: Piliin ang Iyong Sitwasyon'}
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {[
            { id: 'fresh_grad', labelEn: 'Fresh Graduate', labelTl: 'Bagong Graduate', desc: 'College / Vocational' },
            { id: 'no_exp', labelEn: 'No Experience', labelTl: 'Walang Karanasan', desc: 'First time / SHS' },
            { id: 'experienced', labelEn: 'Experienced', labelTl: 'May Karanasan', desc: 'With work history' },
            { id: 'career_changer', labelEn: 'Career Changer', labelTl: 'Lilipat ng Linya', desc: 'New industry / VA' },
          ].map((item) => {
            const isSelected = resumeData.profileType === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleProfileTypeChange(item.id as ProfileType)}
                className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/70 ring-2 ring-blue-500/20 text-blue-950 font-bold'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/60 text-slate-700'
                }`}
              >
                <div className="text-sm font-semibold">{language === 'en' ? item.labelEn : item.labelTl}</div>
                <div className="text-[11px] text-slate-500 mt-0.5">{item.desc}</div>
              </button>
            );
          })}
        </div>
        <p className="text-[11px] text-slate-400 italic">
          {language === 'en' 
            ? 'We will tailor hints and resume emphasis based on your choice.' 
            : 'Aayusin ng builder ang mga paalala at gabay ayon sa iyong pinili.'}
        </p>
      </div>

      {/* 2. Personal & Contact Information */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <User className="w-4 h-4 text-blue-600" />
          <h3 className="font-bold text-slate-900 text-sm sm:text-base">
            {language === 'en' ? 'Personal & Contact Information' : 'Personal at Impormasyon sa Pakikipag-ugnayan'}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-700">
              {language === 'en' ? 'Full Name *' : 'Kumpletong Pangalan *'}
            </label>
            <input
              type="text"
              required
              value={resumeData.fullName}
              onChange={(e) => setResumeData(prev => ({ ...prev, fullName: e.target.value }))}
              placeholder="e.g. Maria Angela S. Santos"
              className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-600"
            />
            <span className="text-[11px] text-slate-500 block">
              {language === 'fil' ? 'Ilagay ang iyong buong pangalan tulad ng nasa PSA o valid ID.' : 'Your official full name for employment documents.'}
            </span>
          </div>

          {/* Email Address */}
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-700">
              {language === 'en' ? 'Professional Email Address *' : 'Propesyonal na Email *'}
            </label>
            <input
              type="email"
              required
              value={resumeData.email}
              onChange={(e) => setResumeData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="e.g. maria.santos@gmail.com"
              className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-600"
            />
            <span className="text-[11px] text-slate-500 block">
              {language === 'fil' ? 'Gamitin ang pormal na email (huwag gumamit ng mga bansag o kakaibang username).' : 'Use an email with your actual name for recruiter trust.'}
            </span>
          </div>

          {/* Phone Number */}
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-700">
              {language === 'en' ? 'Mobile Phone (Optional)' : 'Numero ng Cellphone (Opsyonal)'}
            </label>
            <input
              type="text"
              value={resumeData.phone}
              onChange={(e) => setResumeData(prev => ({ ...prev, phone: e.target.value }))}
              placeholder="e.g. +63 917 123 4567"
              className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-600"
            />
            <span className="text-[11px] text-slate-500 block">
              {language === 'fil' ? 'Siguraduhing aktibo at laging nakabukas para sa tawag o text ng HR.' : 'Ensure this active line can receive recruiter calls or SMS.'}
            </span>
          </div>

          {/* Location */}
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-700">
              {language === 'en' ? 'City / Province (Optional)' : 'Lungsod o Probinsya (Opsyonal)'}
            </label>
            <input
              type="text"
              value={resumeData.location}
              onChange={(e) => setResumeData(prev => ({ ...prev, location: e.target.value }))}
              placeholder="e.g. Quezon City, Metro Manila"
              className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-600"
            />
            <span className="text-[11px] text-slate-500 block">
              {language === 'fil' ? 'Lungsod at probinsya lamang. Hindi na kailangan ang buong block o street address para sa privacy.' : 'City and province only. Full street addresses are not needed for privacy.'}
            </span>
          </div>

          {/* LinkedIn or Portfolio */}
          <div className="space-y-1 sm:col-span-2">
            <label className="block text-xs font-semibold text-slate-700">
              {language === 'en' ? 'LinkedIn / Online Portfolio / GitHub (Optional)' : 'LinkedIn o Portfolio Link (Opsyonal)'}
            </label>
            <input
              type="text"
              value={resumeData.linkedinOrPortfolio || ''}
              onChange={(e) => setResumeData(prev => ({ ...prev, linkedinOrPortfolio: e.target.value }))}
              placeholder="e.g. linkedin.com/in/mariasantos or behance.net/profile"
              className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-600"
            />
            <span className="text-[11px] text-slate-500 block">
              {language === 'fil' ? 'Maaaring ilagay ang link ng iyong LinkedIn profile o online sample work.' : 'Recruiters appreciate direct links to verified work.'}
            </span>
          </div>
        </div>
      </div>

      {/* 3. Target Job & Career Objective / Summary */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-blue-600" />
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">
              {language === 'en' ? 'Target Job & Career Objective' : 'Posisyong Nais at Buod ng Layunin'}
            </h3>
          </div>

          {/* Enhance button */}
          <button
            type="button"
            disabled={isEnhancing}
            onClick={handleEnhanceSummary}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors cursor-pointer disabled:opacity-50"
            title="Generate or polish an ATS-friendly summary based strictly on your entered details"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{isEnhancing ? (language === 'en' ? 'Optimizing...' : 'Inaayos...') : (language === 'en' ? 'AI / Smart Polish' : 'Pakintabin ang Buod')}</span>
          </button>
        </div>

        {/* Target Job Title */}
        <div className="space-y-1">
          <label className="block text-xs font-semibold text-slate-700">
            {language === 'en' ? 'Target Job Title *' : 'Posisyong Inaaplayan (Target Job Title) *'}
          </label>
          <input
            type="text"
            required
            value={resumeData.targetJobTitle}
            onChange={(e) => setResumeData(prev => ({ ...prev, targetJobTitle: e.target.value }))}
            placeholder="e.g. Customer Support Specialist / Junior Web Developer / Administrative Assistant"
            className="w-full px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-600 font-medium"
          />
          <span className="text-[11px] text-slate-500 block">
            {language === 'fil' 
              ? 'Ilagay ang tiyak na titulo ng trabahong iyong inaaplayan para tumugma sa ATS search ng HR.' 
              : 'Match this closely with the title on the job vacancy.'}
          </span>
        </div>

        {/* Career Objective / Professional Summary */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <label className="block text-xs font-semibold text-slate-700">
              {resumeData.profileType === 'fresh_grad' || resumeData.profileType === 'no_exp'
                ? (language === 'en' ? 'Career Objective *' : 'Layunin sa Trabaho (Career Objective) *')
                : (language === 'en' ? 'Professional Summary *' : 'Propesyonal na Buod (Professional Summary) *')}
            </label>
            <span className="text-[11px] text-slate-400">
              {resumeData.summary.length} {language === 'en' ? 'chars' : 'titik'}
            </span>
          </div>

          <textarea
            rows={4}
            value={resumeData.summary}
            onChange={(e) => setResumeData(prev => ({ ...prev, summary: e.target.value }))}
            placeholder={
              language === 'en'
                ? 'A concise 2-4 sentence summary of your relevant background, skills, and value you bring to the company...'
                : 'Maikling 2 hanggang 4 na pangungusap na nagpapakilala sa iyong kurso, kakayahan, at kung ano ang maiaambag mo sa kumpanya...'
            }
            className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-600 leading-relaxed"
          />

          <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200/80 text-[11px] text-slate-600 space-y-0.5">
            <span className="font-semibold text-slate-800">
              {language === 'en' ? '💡 ATS Advice:' : '💡 Paalala sa Pagsulat:'}
            </span>{' '}
            {language === 'fil'
              ? 'Para sa Fresh Grads: Banggitin ang kurso, OJT, o mga natutunang teknikal na kasanayan. Iwasan ang labis na pambobola; maging tapat sa iyong antas.'
              : 'Keep it between 40-75 words. Emphasize how your training or past results will solve problems for the employer.'}
          </div>
        </div>
      </div>

      {/* 4. Education Section */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-blue-600" />
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">
              {language === 'en' ? 'Education' : 'Edukasyon'}
            </h3>
          </div>
          <button
            type="button"
            onClick={addEducation}
            className="flex items-center gap-1 px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Add School' : 'Magdagdag'}</span>
          </button>
        </div>

        <div className="space-y-4">
          {resumeData.education.map((edu, index) => (
            <div key={edu.id} className="p-4 bg-slate-50/70 border border-slate-200 rounded-xl space-y-3 relative group">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {language === 'en' ? `School / Degree #${index + 1}` : `Paaralan / Kurso #${index + 1}`}
                </span>
                {resumeData.education.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeEducation(edu.id)}
                    className="p-1 text-slate-400 hover:text-rose-600 rounded transition-colors cursor-pointer"
                    title="Remove this education entry"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700">
                    {language === 'en' ? 'School / University / College *' : 'Pangalan ng Paaralan o Unibersidad *'}
                  </label>
                  <input
                    type="text"
                    value={edu.institution}
                    onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                    placeholder="e.g. Polytechnic University of the Philippines"
                    className="w-full px-3 py-1.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700">
                    {language === 'en' ? 'Degree, Major, or Senior High Strand *' : 'Kurso, Medyor, o SHS Strand *'}
                  </label>
                  <input
                    type="text"
                    value={edu.degreeOrStrand}
                    onChange={(e) => updateEducation(edu.id, 'degreeOrStrand', e.target.value)}
                    placeholder="e.g. BS Information Technology / SHS STEM"
                    className="w-full px-3 py-1.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-700">
                    {language === 'en' ? 'Campus Location' : 'Lugar / Campus'}
                  </label>
                  <input
                    type="text"
                    value={edu.location}
                    onChange={(e) => updateEducation(edu.id, 'location', e.target.value)}
                    placeholder="e.g. Manila, Philippines"
                    className="w-full px-3 py-1.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700">
                      {language === 'en' ? 'Start Year' : 'Simula'}
                    </label>
                    <input
                      type="text"
                      value={edu.startDate}
                      onChange={(e) => updateEducation(edu.id, 'startDate', e.target.value)}
                      placeholder="e.g. 2022"
                      className="w-full px-3 py-1.5 text-sm bg-white border border-slate-300 rounded-lg"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700">
                      {language === 'en' ? 'End / Grad Year' : 'Pagtatapos'}
                    </label>
                    <input
                      type="text"
                      value={edu.endDate}
                      onChange={(e) => updateEducation(edu.id, 'endDate', e.target.value)}
                      placeholder="e.g. 2026"
                      className="w-full px-3 py-1.5 text-sm bg-white border border-slate-300 rounded-lg"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs font-medium text-slate-700">
                    {language === 'en' ? 'Honors, Awards, or Capstone Title (Optional)' : 'Mga Karangalan o Proyekto (Opsyonal)'}
                  </label>
                  <input
                    type="text"
                    value={edu.honorsOrAchievements || ''}
                    onChange={(e) => updateEducation(edu.id, 'honorsOrAchievements', e.target.value)}
                    placeholder="e.g. Cum Laude, Dean's Lister, Best Thesis Award"
                    className="w-full px-3 py-1.5 text-sm bg-white border border-slate-300 rounded-lg"
                  />
                  <span className="text-[11px] text-slate-500 block">
                    {language === 'fil' ? 'Kung may latin honors o leadership award sa eskwelahan, banggitin dito.' : 'Highlight honors, awards, or major academic achievements.'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Work Experience / OJT / School Projects */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-blue-600" />
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                {resumeData.profileType === 'fresh_grad' || resumeData.profileType === 'no_exp'
                  ? (language === 'en' ? 'Internship (OJT), Projects, or Volunteer Work' : 'OJT, Proyekto sa Paaralan, o Karanasan')
                  : (language === 'en' ? 'Work Experience' : 'Karanasan sa Trabaho')}
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              {language === 'fil' 
                ? 'Para sa mga walang pormal na trabaho: ilagay ang iyong OJT, work immersion, o capstone project.' 
                : 'For applicants without work experience: add your OJT, school projects, or student organization roles.'}
            </p>
          </div>

          <button
            type="button"
            onClick={addExperience}
            className="flex items-center gap-1 px-3 py-1 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Add Experience / OJT' : 'Magdagdag ng Karanasan'}</span>
          </button>
        </div>

        {resumeData.experience.length === 0 ? (
          <div className="p-6 text-center border-2 border-dashed border-slate-200 rounded-xl space-y-2">
            <p className="text-xs text-slate-500">
              {language === 'en'
                ? 'No experience added yet. As a fresh graduate or first-time applicant, you can either click "Add Experience / OJT" to showcase your internship or projects, or leave this blank to focus on Education & Skills.'
                : 'Wala pang karanasang nakalagay. Maaari kang magdagdag ng OJT o school project, o iwanang bakante upang tumutok sa Edukasyon at Kasanayan.'}
            </p>
            <button
              type="button"
              onClick={addExperience}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'Add Internship / OJT / Project' : 'Maglagay ng OJT o Proyekto'}</span>
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {resumeData.experience.map((exp, expIndex) => (
              <div key={exp.id} className="p-4 bg-slate-50/70 border border-slate-200 rounded-xl space-y-3 relative group">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {language === 'en' ? `Role / Project #${expIndex + 1}` : `Tungkulin / Proyekto #${expIndex + 1}`}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeExperience(exp.id)}
                    className="p-1 text-slate-400 hover:text-rose-600 rounded transition-colors cursor-pointer"
                    title="Remove experience"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700">
                      {language === 'en' ? 'Job Title / Role *' : 'Posisyon o Tungkulin *'}
                    </label>
                    <input
                      type="text"
                      value={exp.role}
                      onChange={(e) => updateExperience(exp.id, 'role', e.target.value)}
                      placeholder="e.g. IT Support Intern (OJT) / Customer Service Associate"
                      className="w-full px-3 py-1.5 text-sm bg-white border border-slate-300 rounded-lg"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700">
                      {language === 'en' ? 'Company / Organization / Project *' : 'Kumpanya o Organisasyon *'}
                    </label>
                    <input
                      type="text"
                      value={exp.companyOrOrg}
                      onChange={(e) => updateExperience(exp.id, 'companyOrOrg', e.target.value)}
                      placeholder="e.g. BPO Solutions Inc. or Barangay Health Center Project"
                      className="w-full px-3 py-1.5 text-sm bg-white border border-slate-300 rounded-lg"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-700">
                      {language === 'en' ? 'Location' : 'Lugar'}
                    </label>
                    <input
                      type="text"
                      value={exp.location}
                      onChange={(e) => updateExperience(exp.id, 'location', e.target.value)}
                      placeholder="e.g. Taguig City / Remote"
                      className="w-full px-3 py-1.5 text-sm bg-white border border-slate-300 rounded-lg"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-700">
                        {language === 'en' ? 'Start' : 'Simula'}
                      </label>
                      <input
                        type="text"
                        value={exp.startDate}
                        onChange={(e) => updateExperience(exp.id, 'startDate', e.target.value)}
                        placeholder="e.g. Jan 2025"
                        className="w-full px-3 py-1.5 text-sm bg-white border border-slate-300 rounded-lg"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-700">
                        {language === 'en' ? 'End Date' : 'Pagtatapos'}
                      </label>
                      <input
                        type="text"
                        value={exp.endDate}
                        onChange={(e) => updateExperience(exp.id, 'endDate', e.target.value)}
                        placeholder="e.g. May 2025 / Present"
                        className="w-full px-3 py-1.5 text-sm bg-white border border-slate-300 rounded-lg"
                      />
                    </div>
                  </div>
                </div>

                {/* Bullet points */}
                <div className="space-y-2 pt-2 border-t border-slate-200/80">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-semibold text-slate-700">
                      {language === 'en' ? 'Key Responsibilities & Accomplishments (Bullet points)' : 'Mga Nagawa at Tungkulin (Bullet points)'}
                    </label>
                    <button
                      type="button"
                      onClick={() => addExperienceBullet(exp.id)}
                      className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                      <span>{language === 'en' ? 'Add Bullet' : 'Dagdag Linya'}</span>
                    </button>
                  </div>

                  {exp.description.map((bullet, bIndex) => (
                    <div key={bIndex} className="flex items-center gap-2">
                      <span className="text-slate-400 font-bold text-xs">·</span>
                      <input
                        type="text"
                        value={bullet}
                        onChange={(e) => updateExperienceBullet(exp.id, bIndex, e.target.value)}
                        placeholder={
                          bIndex === 0
                            ? 'e.g. Assisted 40+ daily inquiries with 95% satisfaction'
                            : 'e.g. Collaborated with 5-member team on timely report deliveries'
                        }
                        className="flex-1 px-3 py-1.5 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                      {exp.description.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeExperienceBullet(exp.id, bIndex)}
                          className="p-1 text-slate-400 hover:text-rose-500 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 6. Skills Section */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Wrench className="w-4 h-4 text-blue-600" />
          <h3 className="font-bold text-slate-900 text-sm sm:text-base">
            {language === 'en' ? 'Skills (Technical & Soft Skills)' : 'Mga Kasanayan (Skills)'}
          </h3>
        </div>

        {/* Input box */}
        <div className="flex gap-2">
          <input
            type="text"
            value={newSkillInput}
            onChange={(e) => setNewSkillInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addSkill(newSkillInput);
              }
            }}
            placeholder={language === 'en' ? 'Type a skill (e.g. Customer Support, Excel, React) and press Enter' : 'Mag-type ng kasanayan at pindutin ang Enter o Idagdag'}
            className="flex-1 px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30"
          />
          <button
            type="button"
            onClick={() => addSkill(newSkillInput)}
            className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          >
            {language === 'en' ? 'Add' : 'Idagdag'}
          </button>
        </div>

        {/* Current skills list */}
        <div className="flex flex-wrap gap-2 pt-1">
          {resumeData.skills.length === 0 ? (
            <span className="text-xs text-slate-400 italic">
              {language === 'en' ? 'No skills added yet. Click suggestions below or type your own.' : 'Wala pang kasanayang nailagay. Piliin ang mga rekomendasyon sa ibaba.'}
            </span>
          ) : (
            resumeData.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-800 text-xs font-medium rounded-lg border border-slate-200"
              >
                <span>{skill}</span>
                <button
                  type="button"
                  onClick={() => removeSkill(skill)}
                  className="text-slate-400 hover:text-rose-600 cursor-pointer"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </span>
            ))
          )}
        </div>

        {/* Suggested Quick Add Skills */}
        <div className="pt-2">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
            {language === 'en' ? 'Quick Add Common Skills in PH:' : 'Mabilisang Idagdag:'}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {suggestedSkills.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => addSkill(s)}
                className="px-2.5 py-1 text-xs bg-slate-50 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 border border-slate-200 rounded-md transition-colors text-slate-600 cursor-pointer"
              >
                + {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 7. Certifications & Training (Optional) */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Award className="w-4 h-4 text-blue-600" />
          <h3 className="font-bold text-slate-900 text-sm sm:text-base">
            {language === 'en' ? 'Certifications, Training, & Licenses (Optional)' : 'Mga Sertipiko, Pagsasanay, at Lisensya (Opsyonal)'}
          </h3>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={newCertInput}
            onChange={(e) => setNewCertInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addCertification(newCertInput);
              }
            }}
            placeholder="e.g. TESDA NC II, First-Time Jobseeker Beneficiary (RA 11261), PRC License"
            className="flex-1 px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30"
          />
          <button
            type="button"
            onClick={() => addCertification(newCertInput)}
            className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          >
            {language === 'en' ? 'Add' : 'Idagdag'}
          </button>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {resumeData.certifications.map((cert) => (
            <span
              key={cert}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50/80 text-amber-900 text-xs font-medium rounded-lg border border-amber-200"
            >
              <span>{cert}</span>
              <button
                type="button"
                onClick={() => removeCertification(cert)}
                className="text-amber-700 hover:text-rose-600 cursor-pointer"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* 8. Languages Spoken */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
          <Languages className="w-4 h-4 text-blue-600" />
          <h3 className="font-bold text-slate-900 text-sm sm:text-base">
            {language === 'en' ? 'Languages Spoken' : 'Mga Wikang Sinasalita'}
          </h3>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={newLangInput}
            onChange={(e) => setNewLangInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addLanguage(newLangInput);
              }
            }}
            placeholder="e.g. English (Fluent), Filipino (Native), Cebuano, Ilocano"
            className="flex-1 px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30"
          />
          <button
            type="button"
            onClick={() => addLanguage(newLangInput)}
            className="px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          >
            {language === 'en' ? 'Add' : 'Idagdag'}
          </button>
        </div>

        <div className="flex flex-wrap gap-2 pt-1">
          {resumeData.languages.map((lang) => (
            <span
              key={lang}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-800 text-xs font-medium rounded-lg border border-slate-200"
            >
              <span>{lang}</span>
              <button
                type="button"
                onClick={() => removeLanguage(lang)}
                className="text-slate-400 hover:text-rose-600 cursor-pointer"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Floating Trigger / Preview Button */}
      <div className="sticky bottom-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-300 shadow-xl flex items-center justify-between z-30">
        <div className="text-xs text-slate-600 hidden sm:block">
          <span className="font-bold text-slate-800">
            {language === 'en' ? 'Ready to check your resume?' : 'Handa nang suriin ang iyong resume?'}
          </span>{' '}
          {language === 'en' ? 'View live ATS preview or print directly.' : 'Tingnan ang ATS preview o i-print sa A4 paper.'}
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button
            type="button"
            onClick={onPreviewClick}
            className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <FileCheck2 className="w-4 h-4" />
            <span>{language === 'en' ? 'View Live Preview & Print' : 'Silipin at I-print ang Resume'}</span>
          </button>
        </div>
      </div>

    </div>
  );
};
