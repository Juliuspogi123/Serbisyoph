import React, { useState } from 'react';
import { 
  Printer, 
  Copy, 
  Check, 
  Edit3, 
  Eye, 
  Download, 
  ArrowLeft,
  FileText,
  AlertCircle
} from 'lucide-react';
import { ResumeData, Language } from '../../types';

interface ResumePreviewProps {
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
  language: Language;
  onBackToForm: () => void;
  onOpenTips: () => void;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({
  resumeData,
  setResumeData,
  language,
  onBackToForm,
  onOpenTips,
}) => {
  const [copied, setCopied] = useState(false);
  const [isDirectEditing, setIsDirectEditing] = useState(false);

  // Generate plain text version suitable for pasting into JobStreet / PhilJobNet / Email
  const generatePlainText = (): string => {
    let text = `${resumeData.fullName.toUpperCase()}\n`;
    const contactParts = [
      resumeData.email,
      resumeData.phone,
      resumeData.location,
      resumeData.linkedinOrPortfolio
    ].filter(Boolean);
    text += `${contactParts.join(' | ')}\n\n`;

    if (resumeData.targetJobTitle) {
      text += `TARGET POSITION: ${resumeData.targetJobTitle.toUpperCase()}\n\n`;
    }

    if (resumeData.summary) {
      const heading = (resumeData.profileType === 'fresh_grad' || resumeData.profileType === 'no_exp')
        ? 'CAREER OBJECTIVE'
        : 'PROFESSIONAL SUMMARY';
      text += `${heading}\n${'-'.repeat(heading.length)}\n${resumeData.summary}\n\n`;
    }

    if (resumeData.education && resumeData.education.length > 0) {
      text += `EDUCATION\n---------\n`;
      resumeData.education.forEach(edu => {
        if (edu.institution || edu.degreeOrStrand) {
          text += `${edu.degreeOrStrand || 'Degree/Strand'}\n`;
          text += `${edu.institution || 'Institution'} (${edu.startDate || ''} - ${edu.endDate || ''})\n`;
          if (edu.honorsOrAchievements) {
            text += `Achievements: ${edu.honorsOrAchievements}\n`;
          }
          text += '\n';
        }
      });
    }

    if (resumeData.experience && resumeData.experience.length > 0) {
      text += `EXPERIENCE & PROJECTS\n---------------------\n`;
      resumeData.experience.forEach(exp => {
        if (exp.role || exp.companyOrOrg) {
          text += `${exp.role || 'Role'} | ${exp.companyOrOrg || 'Company'}\n`;
          text += `${exp.startDate || ''} - ${exp.endDate || ''} | ${exp.location || ''}\n`;
          exp.description.forEach(desc => {
            if (desc.trim()) {
              text += `• ${desc.trim()}\n`;
            }
          });
          text += '\n';
        }
      });
    }

    if (resumeData.skills && resumeData.skills.length > 0) {
      text += `SKILLS\n------\n${resumeData.skills.join(' • ')}\n\n`;
    }

    if (resumeData.certifications && resumeData.certifications.length > 0) {
      text += `CERTIFICATIONS & LICENSES\n-------------------------\n`;
      resumeData.certifications.forEach(cert => {
        text += `• ${cert}\n`;
      });
      text += '\n';
    }

    if (resumeData.languages && resumeData.languages.length > 0) {
      text += `LANGUAGES\n---------\n${resumeData.languages.join(' • ')}\n`;
    }

    return text;
  };

  const handleCopyText = async () => {
    try {
      const text = generatePlainText();
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      console.error('Failed to copy', e);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadTxt = () => {
    const element = document.createElement('a');
    const file = new Blob([generatePlainText()], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${(resumeData.fullName || 'Resume').replace(/\s+/g, '_')}_Resume.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      
      {/* Top Action Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3 no-print">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onBackToForm}
            className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Back to Form' : 'Bumalik sa Form'}</span>
          </button>

          <button
            type="button"
            onClick={() => setIsDirectEditing(!isDirectEditing)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
              isDirectEditing
                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {isDirectEditing ? <Eye className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5" />}
            <span>{isDirectEditing ? (language === 'en' ? 'Lock Preview' : 'I-lock') : (language === 'en' ? 'Direct Edit Mode' : 'Direktang I-edit')}</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopyText}
            className="px-3.5 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Copy formatted plain text for email or job portals"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? (language === 'en' ? 'Copied!' : 'Nakopya!') : (language === 'en' ? 'Copy Text' : 'Kopyahin')}</span>
          </button>

          <button
            type="button"
            onClick={handleDownloadTxt}
            className="px-3 py-1.5 text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer hidden sm:flex"
            title="Download plain text file"
          >
            <Download className="w-3.5 h-3.5" />
            <span>.TXT</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="px-4 py-1.5 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Print or save as PDF (A4 format)"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{language === 'en' ? 'Print / Save as PDF' : 'I-print / PDF'}</span>
          </button>
        </div>
      </div>

      {/* Editing notice if active */}
      {isDirectEditing && (
        <div className="p-3 bg-amber-50 border border-amber-200 text-amber-900 rounded-xl text-xs flex items-center gap-2 no-print">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            {language === 'en'
              ? 'Direct Edit Mode is ON. You can click on any text below inside the document to type directly.'
              : 'Naka-ON ang Direct Edit Mode. Maaari mong direktang pindutin at baguhin ang mga teksto sa ibaba.'}
          </span>
        </div>
      )}

      {/* 
        A4 Resume Canvas:
        Styled to exact standard A4 aspect and margins.
        When printed, media queries remove container shadows and margins.
      */}
      <div className="print-container bg-white rounded-xl shadow-lg border border-slate-200 p-8 sm:p-12 text-slate-900 max-w-[210mm] mx-auto min-h-[297mm]">
        
        {/* Header: Name & Contact Details */}
        <div className="border-b-2 border-slate-900 pb-4 mb-5 text-center page-break-avoid">
          <h1 
            contentEditable={isDirectEditing}
            suppressContentEditableWarning
            onBlur={(e) => setResumeData(prev => ({ ...prev, fullName: e.currentTarget.textContent || '' }))}
            className={`text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-slate-900 ${isDirectEditing ? 'outline-1 outline-dashed outline-blue-400 p-1' : ''}`}
          >
            {resumeData.fullName || (language === 'en' ? 'YOUR FULL NAME' : 'IYONG BUONG PANGALAN')}
          </h1>

          {resumeData.targetJobTitle && (
            <p 
              contentEditable={isDirectEditing}
              suppressContentEditableWarning
              onBlur={(e) => setResumeData(prev => ({ ...prev, targetJobTitle: e.currentTarget.textContent || '' }))}
              className={`text-sm sm:text-base font-bold text-blue-800 mt-1 uppercase tracking-wider ${isDirectEditing ? 'outline-1 outline-dashed outline-blue-400 p-1' : ''}`}
            >
              {resumeData.targetJobTitle}
            </p>
          )}

          {/* Contact Line */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 text-xs text-slate-600 mt-2">
            {resumeData.email && <span>{resumeData.email}</span>}
            {resumeData.email && resumeData.phone && <span className="text-slate-400">·</span>}
            {resumeData.phone && <span>{resumeData.phone}</span>}
            {(resumeData.email || resumeData.phone) && resumeData.location && <span className="text-slate-400">·</span>}
            {resumeData.location && <span>{resumeData.location}</span>}
            {resumeData.linkedinOrPortfolio && (
              <>
                <span className="text-slate-400">·</span>
                <span className="text-blue-700">{resumeData.linkedinOrPortfolio}</span>
              </>
            )}
          </div>
        </div>

        {/* Section 1: Objective or Professional Summary */}
        {resumeData.summary && (
          <div className="mb-5 page-break-avoid">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              {resumeData.profileType === 'fresh_grad' || resumeData.profileType === 'no_exp'
                ? 'CAREER OBJECTIVE'
                : 'PROFESSIONAL SUMMARY'}
            </h2>
            <p 
              contentEditable={isDirectEditing}
              suppressContentEditableWarning
              onBlur={(e) => setResumeData(prev => ({ ...prev, summary: e.currentTarget.textContent || '' }))}
              className={`text-xs sm:text-sm text-slate-700 leading-relaxed text-justify ${isDirectEditing ? 'outline-1 outline-dashed outline-blue-400 p-1' : ''}`}
            >
              {resumeData.summary}
            </p>
          </div>
        )}

        {/* Section 2: Education (High priority for Fresh Grads) */}
        {resumeData.education && resumeData.education.length > 0 && resumeData.education.some(e => e.institution || e.degreeOrStrand) && (
          <div className="mb-5 page-break-avoid">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
              EDUCATION
            </h2>
            <div className="space-y-3">
              {resumeData.education.map((edu) => (
                <div key={edu.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span className="text-xs sm:text-sm">{edu.degreeOrStrand || 'Degree / Program'}</span>
                    <span className="text-xs text-slate-600 font-normal">
                      {edu.startDate} – {edu.endDate || 'Present'}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs text-slate-700">
                    <span className="font-medium text-slate-800">{edu.institution}</span>
                    {edu.location && <span className="text-slate-500 italic">{edu.location}</span>}
                  </div>
                  {edu.honorsOrAchievements && (
                    <p className="text-xs text-slate-600 mt-0.5">
                      <span className="font-semibold text-slate-800">Honors & Achievements:</span> {edu.honorsOrAchievements}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 3: Experience & Projects */}
        {resumeData.experience && resumeData.experience.length > 0 && resumeData.experience.some(e => e.role || e.companyOrOrg) && (
          <div className="mb-5 page-break-avoid">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
              {resumeData.profileType === 'fresh_grad' || resumeData.profileType === 'no_exp'
                ? 'EXPERIENCE & ACADEMIC PROJECTS'
                : 'WORK EXPERIENCE'}
            </h2>
            <div className="space-y-3.5">
              {resumeData.experience.map((exp) => (
                <div key={exp.id} className="text-xs sm:text-sm">
                  <div className="flex justify-between items-baseline font-bold text-slate-900">
                    <span>{exp.role || 'Position Title'}</span>
                    <span className="text-xs text-slate-600 font-normal">
                      {exp.startDate} – {exp.endDate || 'Present'}
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline text-xs text-slate-700 mb-1">
                    <span className="font-medium text-slate-800">{exp.companyOrOrg}</span>
                    {exp.location && <span className="text-slate-500 italic">{exp.location}</span>}
                  </div>
                  {exp.description && exp.description.length > 0 && (
                    <ul className="list-disc list-outside ml-4 text-xs text-slate-700 space-y-1">
                      {exp.description.map((bullet, idx) => bullet.trim() && (
                        <li key={idx} className="leading-relaxed">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 4: Skills */}
        {resumeData.skills && resumeData.skills.length > 0 && (
          <div className="mb-5 page-break-avoid">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              SKILLS & COMPETENCIES
            </h2>
            <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
              {resumeData.skills.join('  •  ')}
            </p>
          </div>
        )}

        {/* Section 5: Certifications */}
        {resumeData.certifications && resumeData.certifications.length > 0 && (
          <div className="mb-5 page-break-avoid">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-2">
              CERTIFICATIONS, TRAINING, & LICENSES
            </h2>
            <ul className="list-disc list-outside ml-4 text-xs text-slate-700 space-y-0.5">
              {resumeData.certifications.map((cert, idx) => (
                <li key={idx}>{cert}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Section 6: Languages */}
        {resumeData.languages && resumeData.languages.length > 0 && (
          <div className="mb-2 page-break-avoid">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-slate-900 border-b border-slate-300 pb-1 mb-1.5">
              LANGUAGES
            </h2>
            <p className="text-xs text-slate-700">
              {resumeData.languages.join('  •  ')}
            </p>
          </div>
        )}

      </div>

      {/* Bottom Advice Box */}
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 flex items-start gap-3 no-print">
        <FileText className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-semibold text-slate-900">
            {language === 'en' ? 'Tips for Saving as PDF:' : 'Paalala sa Pag-save bilang PDF:'}
          </p>
          <p>
            {language === 'en'
              ? 'When clicking "Print / Save as PDF", in your browser print dialog select "Save as PDF" as the Destination, set Paper Size to "A4", and uncheck "Headers and Footers" for a pristine 1-page resume.'
              : 'Kapag pinindot ang "Print / Save as PDF", piliin ang "Save as PDF" sa printer options, itakda ang papel sa "A4", at alisin ang tsek sa "Headers and Footers" para sa malinis na kopya.'}
          </p>
        </div>
      </div>

    </div>
  );
};
