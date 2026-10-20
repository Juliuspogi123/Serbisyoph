import React, { useState } from 'react';
import { 
  Briefcase, 
  Search, 
  ExternalLink, 
  MapPin, 
  Building2, 
  Laptop, 
  ShieldCheck, 
  GraduationCap,
  Sparkles,
  Info
} from 'lucide-react';
import { Language } from '../../types';
import { jobPlatforms } from '../../data/jobResources';

interface JobSearchGuidanceProps {
  language: Language;
}

export const JobSearchGuidance: React.FC<JobSearchGuidanceProps> = ({ language }) => {
  const isFil = language === 'fil';

  // Search Filter Criteria
  const [jobTitle, setJobTitle] = useState('');
  const [educationLevel, setEducationLevel] = useState('any');
  const [locationPref, setLocationPref] = useState('any');
  const [workArrangement, setWorkArrangement] = useState<'all' | 'onsite' | 'hybrid' | 'remote'>('all');
  const [employmentType, setEmploymentType] = useState<'all' | 'full_time' | 'part_time' | 'contractual' | 'freelance'>('all');

  // Generate tailored search query links for verified job boards
  const getSearchUrlForPlatform = (platformId: string): string => {
    const encodedTitle = encodeURIComponent(jobTitle || 'entry level');
    switch (platformId) {
      case 'philjobnet':
        return `https://philjobnet.gov.ph/`;
      case 'csc-careers':
        return `https://csc.gov.ph/career/`;
      case 'jobstreet-ph':
        return `https://www.jobstreet.com.ph/en/job-search/${encodedTitle}-jobs/`;
      case 'linkedin-ph':
        return `https://www.linkedin.com/jobs/search/?keywords=${encodedTitle}&location=Philippines`;
      case 'onlinejobs-ph':
        return `https://www.onlinejobs.ph/jobseekers/jobsearch?jobkeyword=${encodedTitle}`;
      case 'indeed-ph':
        return `https://ph.indeed.com/jobs?q=${encodedTitle}&l=Philippines`;
      case 'kalibrr':
        return `https://www.kalibrr.com/job-board/te/${encodedTitle}/1`;
      default:
        return 'https://philjobnet.gov.ph/';
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Search Criteria Form */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-5">
        <div>
          <h3 className="font-extrabold text-slate-900 text-lg flex items-center gap-2">
            <Search className="w-5 h-5 text-blue-600" />
            <span>{isFil ? 'Gabay sa Paghahanap ng Trabaho (Job Search Filters)' : 'Job Search Preferences & Guidance'}</span>
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            {isFil
              ? 'I-set ang iyong kasanayan at kagustuhan upang makakuha ng direktang link sa mga opisyal at pinagkakatiwalaang job boards.'
              : 'Specify your career preferences to get customized guidance and direct links to verified Philippine portals.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* 1. Desired Job Title */}
          <div className="space-y-1 sm:col-span-2 lg:col-span-1">
            <label className="block text-xs font-semibold text-slate-700">
              {isFil ? 'Nais na Posisyon / Job Title' : 'Desired Job Title'}
            </label>
            <input
              type="text"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="e.g. Customer Support, Junior Web Developer, Admin Assistant"
              className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:bg-white"
            />
          </div>

          {/* 2. Education Level */}
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-700">
              {isFil ? 'Antas ng Edukasyon' : 'Education Level'}
            </label>
            <select
              value={educationLevel}
              onChange={(e) => setEducationLevel(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:bg-white"
            >
              <option value="any">{isFil ? 'Lahat ng Antas' : 'Any Education Level'}</option>
              <option value="college">{isFil ? 'College Graduate / Bachelor’s Degree' : 'College Graduate / Bachelor\'s Degree'}</option>
              <option value="college_undergrad">{isFil ? 'College Undergraduate (With Units)' : 'College Undergraduate (With Units)'}</option>
              <option value="senior_high">{isFil ? 'Senior High School Graduate (K-12)' : 'Senior High School Graduate (K-12)'}</option>
              <option value="vocational">{isFil ? 'TESDA / Technical Vocational' : 'TESDA / Technical Vocational'}</option>
            </select>
          </div>

          {/* 3. Preferred Location */}
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-700">
              {isFil ? 'Lokasyon sa Pilipinas' : 'Preferred Philippine Region'}
            </label>
            <select
              value={locationPref}
              onChange={(e) => setLocationPref(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:bg-white"
            >
              <option value="any">{isFil ? 'Kahit saan sa Pilipinas / Remote' : 'Anywhere in PH / Remote'}</option>
              <option value="ncr">Metro Manila (NCR)</option>
              <option value="cebu">Cebu & Central Visayas</option>
              <option value="davao">Davao & Southern Mindanao</option>
              <option value="calabarzon">CALABARZON (Cavite, Laguna, Batangas, Rizal)</option>
              <option value="cl">Central Luzon (Pampanga, Bulacan, Clark)</option>
              <option value="iloilo">Iloilo & Western Visayas</option>
              <option value="cdo">Cagayan de Oro & Northern Mindanao</option>
            </select>
          </div>

          {/* 4. Work Arrangement */}
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-700">
              {isFil ? 'Ayos ng Trabaho (Work Arrangement)' : 'Work Arrangement'}
            </label>
            <select
              value={workArrangement}
              onChange={(e) => setWorkArrangement(e.target.value as any)}
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:bg-white"
            >
              <option value="all">{isFil ? 'Lahat (Onsite, Hybrid, o Remote)' : 'All Arrangements'}</option>
              <option value="onsite">{isFil ? 'Onsite (Opisina / Sangay)' : 'Onsite Only'}</option>
              <option value="hybrid">{isFil ? 'Hybrid (Ilang araw sa bahay/opisina)' : 'Hybrid (Home + Office)'}</option>
              <option value="remote">{isFil ? 'Work from Home (Puro Remote)' : '100% Work from Home / Remote'}</option>
            </select>
          </div>

          {/* 5. Employment Type */}
          <div className="space-y-1">
            <label className="block text-xs font-semibold text-slate-700">
              {isFil ? 'Uri ng Trabaho (Employment Type)' : 'Employment Type'}
            </label>
            <select
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value as any)}
              className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:bg-white"
            >
              <option value="all">{isFil ? 'Lahat (Full-Time, Part-Time, Kontrata)' : 'All Employment Types'}</option>
              <option value="full_time">{isFil ? 'Full-Time (Regular)' : 'Full-Time'}</option>
              <option value="part_time">{isFil ? 'Part-Time' : 'Part-Time'}</option>
              <option value="contractual">{isFil ? 'Contractual / Project-Based' : 'Contractual'}</option>
              <option value="freelance">{isFil ? 'Freelance / Virtual Assistant' : 'Freelance / VA'}</option>
            </select>
          </div>

        </div>

        {/* Clear Notice differentiating guidance from live listings */}
        <div className="p-3.5 bg-blue-50/70 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-start gap-2.5">
          <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {isFil ? (
              <>
                <strong>Paalala sa Integridad:</strong> Hindi nag-iimbento ang Serbisyo PH ng mga pekeng bakanteng trabaho. Sa halip, ibinibigay namin ang mga <strong>beripikado at opisyal na portal</strong> (tulad ng DOLE PhilJobNet, CSC Careers, at JobStreet) na may libu-libong aktwal na hiring sa bawat oras.
              </>
            ) : (
              <>
                <strong>Notice on Transparency:</strong> To maintain strict data accuracy, Serbisyo PH does not invent speculative job listings. Instead, we connect you directly to verified Philippine employment platforms (DOLE PhilJobNet, CSC Careers, JobStreet, etc.) with real, active hiring processes.
              </>
            )}
          </p>
        </div>

      </div>

      {/* Verified Employment Platforms Directory */}
      <div className="space-y-4">
        <div>
          <h3 className="font-extrabold text-slate-900 text-lg">
            {isFil ? 'Mga Beripikadong Portal ng Trabaho sa Pilipinas' : 'Verified Philippine Employment Platforms'}
          </h3>
          <p className="text-xs text-slate-500">
            {isFil 
              ? 'Pumili sa mga opisyal na tanggapan ng gobyerno at lisensyadong job boards sa ibaba:' 
              : 'Explore vetted platforms with specific search guidance matching your criteria:'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {jobPlatforms.map((platform) => {
            const searchUrl = getSearchUrlForPlatform(platform.id);
            return (
              <div 
                key={platform.id}
                className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-300 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <h4 className="font-extrabold text-slate-900 text-base">
                        {platform.name}
                      </h4>
                      {platform.isGovernment && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                          GOV.PH
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs font-medium text-blue-700">
                    {platform.tagline}
                  </p>

                  <div className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                    <span className="font-semibold text-slate-800">
                      {isFil ? 'Pinakamainam para sa:' : 'Best for:'}
                    </span>{' '}
                    {platform.bestFor}
                  </div>

                  <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
                    {platform.features.map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 truncate max-w-[150px]">
                    {platform.url.replace('https://', '')}
                  </span>

                  <a
                    href={searchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors shadow-xs cursor-pointer"
                  >
                    <span>{jobTitle ? (isFil ? `Hanapin ang "${jobTitle}"` : `Search "${jobTitle}"`) : (isFil ? 'Buksan ang Portal' : 'Open Portal')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* First-Time Jobseeker Advice Banner */}
      <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h4 className="font-bold text-amber-950 text-sm flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-amber-700" />
            <span>{isFil ? 'Payo sa mga Bagong Aplikante (First-Time Jobseeker)' : 'Advice for Fresh Filipino Applicants'}</span>
          </h4>
          <p className="text-xs text-amber-900/90 max-w-2xl leading-relaxed">
            {isFil
              ? 'Huwag mag-apply sa mga kumpanyang humihingi ng "cash bond" o bayad sa training bago magsimula. Alamin ang iyong mga karapatan sa minimum wage at holiday pay ayon sa Department of Labor and Employment (DOLE).'
              : 'Never pay for job placements, uniforms, or pre-hiring medical exams directly to an employer. Real employers comply with DOLE minimum wage guidelines and government contribution remissions.'}
          </p>
        </div>
      </div>

    </div>
  );
};
