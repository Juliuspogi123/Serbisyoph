import React, { useState } from 'react';
import { 
  Search, 
  ExternalLink, 
  ShieldCheck, 
  Award, 
  FileCheck, 
  ChevronRight,
  Filter,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { GovernmentGuide, Language } from '../../types';
import { governmentGuides } from '../../data/governmentGuides';
import { GuideDetailModal } from './GuideDetailModal';
import { AdBanner } from '../AdBanner';

interface GuideDirectoryProps {
  language: Language;
  initialAgencyCode?: string;
}

export const GuideDirectory: React.FC<GuideDirectoryProps> = ({
  language,
  initialAgencyCode,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterFirstTimeOnly, setFilterFirstTimeOnly] = useState<boolean>(false);
  const [activeGuide, setActiveGuide] = useState<GovernmentGuide | null>(null);

  // Automatically open guide if initialAgencyCode was passed
  React.useEffect(() => {
    if (initialAgencyCode) {
      const found = governmentGuides.find(g => g.agencyCode.toLowerCase() === initialAgencyCode.toLowerCase());
      if (found) {
        setActiveGuide(found);
      }
    }
  }, [initialAgencyCode]);

  const categories = [
    { id: 'all', labelEn: 'All Guides', labelTl: 'Lahat ng Gabay' },
    { id: 'social_benefits', labelEn: 'Social Benefits (SSS, PhilHealth, Pag-IBIG)', labelTl: 'Benepisyo (SSS, PhilHealth, Pag-IBIG)' },
    { id: 'tax_and_id', labelEn: 'Tax & National ID (BIR, PhilSys, PSA)', labelTl: 'Buwis at ID (BIR, PhilSys, PSA)' },
    { id: 'clearances', labelEn: 'Clearances & Legal (NBI, Police, RA 11261)', labelTl: 'Clearance (NBI, Pulis, RA 11261)' },
    { id: 'travel_and_transport', labelEn: 'Travel & Transport (Passport, LTO)', labelTl: 'Biyahe at Lisensya (Passport, LTO)' },
  ];

  // Filter guides based on search, category, and RA 11261 toggle
  const filteredGuides = governmentGuides.filter(guide => {
    const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory;
    const matchesFirstTime = !filterFirstTimeOnly || guide.firstTimeJobseekerFree;
    
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      guide.agencyName.toLowerCase().includes(query) ||
      guide.agencyCode.toLowerCase().includes(query) ||
      guide.titleEn.toLowerCase().includes(query) ||
      guide.titleTl.toLowerCase().includes(query) ||
      guide.purposeEn.toLowerCase().includes(query) ||
      guide.purposeTl.toLowerCase().includes(query);

    return matchesCategory && matchesFirstTime && matchesSearch;
  });

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-700/80 text-blue-200 text-xs font-semibold border border-blue-500/40">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-300" />
            <span>{language === 'en' ? 'Verified Government Information' : 'Beripikadong Impormasyon mula sa Gobyerno'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {language === 'en'
              ? 'Philippine Government Online Services Directory'
              : 'Direktoryo ng mga Online Serbisyo ng Pamahalaan'}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {language === 'en'
              ? 'Step-by-step instructions, official requirements, verified fees, and anti-scam advisories for SSS, PhilHealth, Pag-IBIG, BIR, NBI, PNP, Passport, and LTO.'
              : 'Hakbang-hakbang na gabay, mga kailangang dalhin, opisyal na bayarin, at paalala laban sa mga fixer para sa SSS, PhilHealth, Pag-IBIG, BIR, NBI, PNP, Passport, at LTO.'}
          </p>

          {/* RA 11261 Highlight banner */}
          <div className="mt-4 p-3.5 bg-blue-950/80 border border-amber-400/30 rounded-xl flex items-center gap-3">
            <Award className="w-5 h-5 text-amber-400 shrink-0" />
            <div className="text-xs text-slate-200">
              <strong className="text-amber-300">Republic Act No. 11261 Spotlight:</strong>{' '}
              {language === 'en'
                ? 'First-time Filipino jobseekers are legally entitled to 100% FREE NBI, Police, and Barangay Clearances. Click below to view the guide.'
                : 'Libre ang NBI, Police, at Barangay Clearance para sa mga first-time jobseekers sa ilalim ng RA 11261.'}
            </div>
            <button
              onClick={() => {
                const raGuide = governmentGuides.find(g => g.id === 'ra11261-guide');
                if (raGuide) setActiveGuide(raGuide);
              }}
              className="text-xs font-bold text-amber-300 hover:text-white underline cursor-pointer shrink-0 ml-auto"
            >
              {language === 'en' ? 'View' : 'Tingnan'}
            </button>
          </div>
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
        
        {/* Search Input Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              language === 'en'
                ? 'Search guides (e.g. "How to register for SSS", "NBI clearance appointment", "PhilHealth PIN", "TIN online")...'
                : 'Maghanap ng serbisyo (hal. "Paano kumuha ng NBI", "SSS online", "PhilHealth PIN", "Driver license LTO")...'
            }
            className="w-full pl-11 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-600 focus:bg-white transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 px-2 py-1 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {language === 'en' ? cat.labelEn : cat.labelTl}
              </button>
            );
          })}
        </div>

        {/* Quick Toggle: RA 11261 Free Documents */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={filterFirstTimeOnly}
              onChange={(e) => setFilterFirstTimeOnly(e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
            />
            <span className="font-semibold text-slate-700">
              {language === 'en' 
                ? 'Show only services eligible for FREE First-Time Jobseeker Waiver (RA 11261)' 
                : 'Ipakita lamang ang mga serbisyong LIBRE sa First-Time Jobseekers (RA 11261)'}
            </span>
          </label>

          <span className="text-slate-400 font-medium">
            {filteredGuides.length} {language === 'en' ? 'guides found' : 'gabay na nahanap'}
          </span>
        </div>

      </div>

      {/* Google AdSense Ready Placement */}
      <AdBanner language={language} slotId="9876543210" />

      {/* Guide Cards Grid */}
      {filteredGuides.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-2xl border border-slate-200 space-y-3">
          <AlertCircle className="w-10 h-10 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800">
            {language === 'en' ? 'No government guides match your search' : 'Walang nahanap na gabay para sa iyong hinanap'}
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            {language === 'en'
              ? 'Try searching with shorter keywords like "SSS", "NBI", "Passport", "TIN", or clear active filters.'
              : 'Subukang gumamit ng mas maikling salita tulad ng "SSS", "NBI", "Passport", o burahin ang filter.'}
          </p>
          <button
            onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setFilterFirstTimeOnly(false); }}
            className="px-4 py-2 bg-blue-50 text-blue-700 text-xs font-bold rounded-lg hover:bg-blue-100 transition-colors cursor-pointer"
          >
            {language === 'en' ? 'Reset All Filters' : 'I-reset ang mga Filter'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredGuides.map((guide) => {
            const isFil = language === 'fil';
            return (
              <div
                key={guide.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  {/* Agency code & status tags */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 font-black text-xs tracking-wider">
                      {guide.agencyCode}
                    </span>

                    {guide.firstTimeJobseekerFree && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-full border border-amber-200">
                        <Award className="w-3 h-3 text-amber-600" />
                        RA 11261 FREE
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-blue-700 transition-colors">
                    {isFil ? guide.titleTl : guide.titleEn}
                  </h3>

                  {/* Purpose text */}
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {isFil ? guide.purposeTl : guide.purposeEn}
                  </p>

                  {/* Quick Metadata Snippet */}
                  <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200/70 text-xs text-slate-700 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">{isFil ? 'Bayarin:' : 'Official Fee:'}</span>
                      <span className="font-semibold text-slate-900 truncate max-w-[200px] text-right">
                        {isFil ? guide.feesTl : guide.feesEn}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 font-medium">{isFil ? 'Oras:' : 'Processing:'}</span>
                      <span className="text-slate-800 truncate max-w-[200px] text-right">
                        {isFil ? guide.processingTimeTl : guide.processingTimeEn}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <a
                    href={guide.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-blue-600 py-1 transition-colors"
                  >
                    <span>{guide.agencyCode} Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    type="button"
                    onClick={() => setActiveGuide(guide)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    <span>{isFil ? 'Tingnan ang Gabay' : 'View Guide'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Guide Detail Modal */}
      <GuideDetailModal
        guide={activeGuide}
        isOpen={!!activeGuide}
        onClose={() => setActiveGuide(null)}
        language={language}
      />

    </div>
  );
};
