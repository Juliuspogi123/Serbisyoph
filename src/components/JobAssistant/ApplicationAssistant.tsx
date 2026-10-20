import React, { useState } from 'react';
import { 
  FileText, 
  Copy, 
  Check, 
  Sparkles, 
  Mail, 
  Send, 
  MessageSquare, 
  LogOut, 
  UserCheck,
  RotateCcw
} from 'lucide-react';
import { Language, ApplicationTemplate } from '../../types';
import { applicationTemplates } from '../../data/jobResources';

interface ApplicationAssistantProps {
  language: Language;
}

export const ApplicationAssistant: React.FC<ApplicationAssistantProps> = ({ language }) => {
  const isFil = language === 'fil';

  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('fresh-grad-cover-letter');
  const [selectedTone, setSelectedTone] = useState<'professional' | 'friendly' | 'concise'>('professional');
  const [selectedLetterLanguage, setSelectedLetterLanguage] = useState<'en' | 'fil'>(language);
  const [copied, setCopied] = useState(false);
  const [isAiGenerating, setIsAiGenerating] = useState(false);
  const [aiMessage, setAiMessage] = useState<string | null>(null);

  // Customizer fields
  const [customApplicantName, setCustomApplicantName] = useState('');
  const [customJobTitle, setCustomJobTitle] = useState('');
  const [customCompanyName, setCustomCompanyName] = useState('');
  const [customHighlights, setCustomHighlights] = useState('');

  // Active template
  const currentTemplate = applicationTemplates.find(t => t.id === selectedTemplateId) || applicationTemplates[0];

  // Get raw template body
  const getRawContent = () => {
    return currentTemplate.tones[selectedTone][selectedLetterLanguage] || currentTemplate.tones[selectedTone].en;
  };

  // Editable body state
  const [editedContent, setEditedContent] = useState<string>(getRawContent());

  // Update content whenever template, tone, or letter language changes
  React.useEffect(() => {
    let content = getRawContent();
    if (customApplicantName) {
      content = content.replace(/\[Your Full Name\]/g, customApplicantName);
    }
    if (customJobTitle) {
      content = content.replace(/\[Target Job Title\]/g, customJobTitle);
    }
    if (customCompanyName) {
      content = content.replace(/\[Company Name\]/g, customCompanyName);
    }
    setEditedContent(content);
  }, [selectedTemplateId, selectedTone, selectedLetterLanguage]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(editedContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleResetToDefault = () => {
    setEditedContent(getRawContent());
  };

  // Optional AI generation via server-side proxy
  const handleAiPolish = async () => {
    setIsAiGenerating(true);
    setAiMessage(null);

    try {
      const response = await fetch('/api/ai/generate-cover-letter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: customApplicantName || 'Applicant',
          targetJob: customJobTitle || 'Candidate',
          companyName: customCompanyName || 'Company',
          tone: selectedTone,
          language: selectedLetterLanguage,
          keyHighlights: customHighlights || 'Eager to contribute relevant skills, punctuality, and hard work.',
        }),
      });

      const data = await response.json();
      if (data.available && data.letter) {
        setEditedContent(data.letter);
        setAiMessage(isFil ? 'Nabuong propesyonal na liham gamit ang AI!' : 'Letter drafted with AI!');
      } else {
        // Fallback replacement of user tokens
        let content = getRawContent();
        if (customApplicantName) content = content.replace(/\[Your Full Name\]/g, customApplicantName);
        if (customJobTitle) content = content.replace(/\[Target Job Title\]/g, customJobTitle);
        if (customCompanyName) content = content.replace(/\[Company Name\]/g, customCompanyName);
        setEditedContent(content);
        setAiMessage(isFil ? 'Inayos ang liham gamit ang iyong mga detalye!' : 'Template populated with your custom details!');
      }
    } catch {
      let content = getRawContent();
      if (customApplicantName) content = content.replace(/\[Your Full Name\]/g, customApplicantName);
      if (customJobTitle) content = content.replace(/\[Target Job Title\]/g, customJobTitle);
      if (customCompanyName) content = content.replace(/\[Company Name\]/g, customCompanyName);
      setEditedContent(content);
      setAiMessage(isFil ? 'Inilapat ang template!' : 'Applied custom template!');
    } finally {
      setIsAiGenerating(false);
      setTimeout(() => setAiMessage(null), 3500);
    }
  };

  const templateIcons: Record<string, any> = {
    'fresh-grad-cover-letter': FileText,
    'experienced-cover-letter': UserCheck,
    'email-job-application': Mail,
    'follow-up-message': MessageSquare,
    'resignation-letter': LogOut,
  };

  return (
    <div className="space-y-6">
      
      {/* Category Tabs: Select Template Type */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-3">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
          {isFil ? 'Pumili ng Uri ng Dokumento o Mensahe:' : 'Select Application Document Type:'}
        </label>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {applicationTemplates.map((template) => {
            const Icon = templateIcons[template.id] || FileText;
            const isSelected = selectedTemplateId === template.id;
            return (
              <button
                key={template.id}
                type="button"
                onClick={() => setSelectedTemplateId(template.id)}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'border-blue-600 bg-blue-50/80 text-blue-900 font-bold shadow-2xs'
                    : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-blue-600' : 'text-slate-400'}`} />
                  <span className="text-xs font-semibold truncate">{template.type.replace('_', ' ').toUpperCase()}</span>
                </div>
                <div className="text-xs leading-snug font-medium line-clamp-2">
                  {isFil ? template.titleTl : template.titleEn}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Customizer & Tone Options */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
        
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
          {/* Tone Selector */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-slate-600 mr-1">
              {isFil ? 'Tono:' : 'Tone:'}
            </span>
            {(['professional', 'friendly', 'concise'] as const).map((tone) => (
              <button
                key={tone}
                type="button"
                onClick={() => setSelectedTone(tone)}
                className={`px-3 py-1 text-xs font-semibold rounded-lg capitalize transition-colors cursor-pointer ${
                  selectedTone === tone
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tone}
              </button>
            ))}
          </div>

          {/* Letter Language Switcher */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-slate-600 mr-1">
              {isFil ? 'Wika ng Liham:' : 'Letter Language:'}
            </span>
            <button
              type="button"
              onClick={() => setSelectedLetterLanguage('en')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedLetterLanguage === 'en'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              English
            </button>
            <button
              type="button"
              onClick={() => setSelectedLetterLanguage('fil')}
              className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                selectedLetterLanguage === 'fil'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Filipino
            </button>
          </div>
        </div>

        {/* Quick Placeholder Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="text-[11px] font-semibold text-slate-600 block mb-1">
              {isFil ? 'Iyong Pangalan' : 'Your Name'}
            </label>
            <input
              type="text"
              value={customApplicantName}
              onChange={(e) => setCustomApplicantName(e.target.value)}
              placeholder="e.g. Maria Santos"
              className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-600 block mb-1">
              {isFil ? 'Posisyong Inaaplayan' : 'Target Job Title'}
            </label>
            <input
              type="text"
              value={customJobTitle}
              onChange={(e) => setCustomJobTitle(e.target.value)}
              placeholder="e.g. Customer Support Specialist"
              className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-600 block mb-1">
              {isFil ? 'Pangalan ng Kumpanya' : 'Company Name'}
            </label>
            <input
              type="text"
              value={customCompanyName}
              onChange={(e) => setCustomCompanyName(e.target.value)}
              placeholder="e.g. Apex Global Solutions"
              className="w-full px-3 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* AI Polish Trigger Bar */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
          <button
            type="button"
            disabled={isAiGenerating}
            onClick={handleAiPolish}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors cursor-pointer disabled:opacity-50"
            title="Auto-fill your names into this letter or refine with AI"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{isAiGenerating ? (isFil ? 'Binubuo...' : 'Drafting...') : (isFil ? 'I-apply ang mga Detalye / AI Polish' : 'Populate Details / AI Polish')}</span>
          </button>

          <button
            type="button"
            onClick={handleResetToDefault}
            className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>{isFil ? 'I-reset sa orihinal' : 'Reset Template'}</span>
          </button>
        </div>

        {aiMessage && (
          <div className="p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs">
            {aiMessage}
          </div>
        )}

      </div>

      {/* Live Editor & Output Canvas */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        
        <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-bold text-slate-700">
              {isFil ? 'Liham na Maaaring Direktang I-edit:' : 'Editable Letter Canvas:'}
            </span>
          </div>

          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-1 px-3 py-1 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold rounded-lg border border-slate-300 shadow-2xs transition-colors cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? (isFil ? 'Nakopya!' : 'Copied!') : (isFil ? 'Kopyahin ang Liham' : 'Copy Letter')}</span>
          </button>
        </div>

        <div className="p-5">
          <textarea
            rows={16}
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
            className="w-full text-xs sm:text-sm text-slate-800 font-mono leading-relaxed bg-white border-0 focus:outline-none resize-y"
            placeholder="Letter content..."
          />
        </div>

        <div className="bg-slate-50 px-4 py-2 text-[11px] text-slate-500 border-t border-slate-200 flex items-center justify-between">
          <span>{isFil ? 'I-personalize ang mga nakakulong sa [brackets] bago ipadala sa HR.' : 'Personalize the [bracketed] fields before emailing to HR.'}</span>
          <span>{editedContent.length} characters</span>
        </div>

      </div>

    </div>
  );
};
