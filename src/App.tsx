/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { ResumeForm } from './components/ResumeBuilder/ResumeForm';
import { ResumePreview } from './components/ResumeBuilder/ResumePreview';
import { ResumeTipsModal } from './components/ResumeBuilder/ResumeTipsModal';
import { GuideDirectory } from './components/GovernmentGuides/GuideDirectory';
import { JobAssistantContainer } from './components/JobAssistant/JobAssistantContainer';
import { AboutView } from './components/AboutView';
import { SearchModal } from './components/SearchModal';
import { Language, ResumeData, GovernmentGuide } from './types';
import { sampleResumes } from './data/sampleResumes';

export default function App() {
  // Application Language: 'en' | 'fil'
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('serbisyo_ph_lang');
      return (saved === 'fil' || saved === 'en') ? saved : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('serbisyo_ph_lang', language);
    } catch {
      // ignore
    }
  }, [language]);

  // Main active tab
  const [activeTab, setActiveTab] = useState<'home' | 'resume' | 'government' | 'jobs' | 'about'>('home');

  // Resume builder view mode: 'form' | 'preview'
  const [resumeViewMode, setResumeViewMode] = useState<'form' | 'preview'>('form');

  // Resume state initialized with Fresh Graduate profile
  const [resumeData, setResumeData] = useState<ResumeData>(() => {
    return JSON.parse(JSON.stringify(sampleResumes.fresh_grad));
  });

  // Modal states
  const [isTipsOpen, setIsTipsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [initialJobSubTab, setInitialJobSubTab] = useState<'search' | 'applications' | 'interview' | 'scam'>('search');

  // Universal navigation helper
  const handleNavigate = (tab: 'home' | 'resume' | 'government' | 'jobs' | 'about', subItem?: string) => {
    setActiveTab(tab);
    if (tab === 'resume') {
      setResumeViewMode('form');
    }
    if (tab === 'jobs' && subItem) {
      setInitialJobSubTab(subItem as any);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Top Header Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        language={language}
        setLanguage={setLanguage}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Container Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        
        {/* Tab 1: Home View */}
        {activeTab === 'home' && (
          <HomeView
            language={language}
            onNavigate={handleNavigate}
            onOpenSearch={() => setIsSearchOpen(true)}
          />
        )}

        {/* Tab 2: Resume Builder */}
        {activeTab === 'resume' && (
          <div>
            {resumeViewMode === 'form' ? (
              <ResumeForm
                resumeData={resumeData}
                setResumeData={setResumeData}
                language={language}
                onOpenTips={() => setIsTipsOpen(true)}
                onPreviewClick={() => {
                  setResumeViewMode('preview');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            ) : (
              <ResumePreview
                resumeData={resumeData}
                setResumeData={setResumeData}
                language={language}
                onBackToForm={() => {
                  setResumeViewMode('form');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onOpenTips={() => setIsTipsOpen(true)}
              />
            )}
          </div>
        )}

        {/* Tab 3: Government Online Guides */}
        {activeTab === 'government' && (
          <GuideDirectory
            language={language}
          />
        )}

        {/* Tab 4: Job Seeking Assistant */}
        {activeTab === 'jobs' && (
          <JobAssistantContainer
            language={language}
            initialSubTab={initialJobSubTab}
          />
        )}

        {/* Tab 5: About & Disclaimer */}
        {activeTab === 'about' && (
          <AboutView
            language={language}
            onNavigateToGovernment={() => handleNavigate('government')}
          />
        )}

      </main>

      {/* Bottom Footer */}
      <Footer
        language={language}
      />

      {/* Resume Tips Modal */}
      <ResumeTipsModal
        isOpen={isTipsOpen}
        onClose={() => setIsTipsOpen(false)}
        language={language}
      />

      {/* Universal Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        language={language}
        onNavigate={handleNavigate}
      />

    </div>
  );
}
