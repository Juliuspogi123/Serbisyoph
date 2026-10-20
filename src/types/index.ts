export type Language = 'en' | 'fil';

export type ProfileType = 'fresh_grad' | 'no_exp' | 'experienced' | 'career_changer';

export interface EducationItem {
  id: string;
  institution: string;
  degreeOrStrand: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  honorsOrAchievements?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  companyOrOrg: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string[];
}

export interface ResumeData {
  profileType: ProfileType;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedinOrPortfolio?: string;
  targetJobTitle: string;
  summary: string;
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: string[];
  certifications: string[];
  languages: string[];
}

export interface GovernmentGuide {
  id: string;
  category: 'social_benefits' | 'tax_and_id' | 'clearances' | 'travel_and_transport';
  agencyCode: string; // e.g. SSS, PhilHealth, Pag-IBIG, BIR, PhilSys, PSA, NBI, PNP, DFA, LTO
  agencyName: string;
  titleEn: string;
  titleTl: string;
  purposeEn: string;
  purposeTl: string;
  eligibleEn: string[];
  eligibleTl: string[];
  requirementsEn: string[];
  requirementsTl: string[];
  stepsEn: string[];
  stepsTl: string[];
  officialUrl: string;
  portalUrl?: string;
  appointmentUrl?: string;
  feesEn: string;
  feesTl: string;
  processingTimeEn: string;
  processingTimeTl: string;
  remindersEn: string[];
  remindersTl: string[];
  commonMistakesEn: string[];
  commonMistakesTl: string[];
  scamAlertsEn: string[];
  scamAlertsTl: string[];
  dateVerified: string;
  firstTimeJobseekerFree?: boolean;
}

export interface JobPlatform {
  id: string;
  name: string;
  tagline: string;
  url: string;
  bestFor: string;
  isGovernment?: boolean;
  features: string[];
}

export interface InterviewQuestion {
  id: string;
  category: 'fresh_grad' | 'general' | 'technical' | 'bpo' | 'remote' | 'salary';
  questionEn: string;
  questionTl: string;
  whyAskedEn: string;
  whyAskedTl: string;
  sampleAnswerEn: string;
  sampleAnswerTl: string;
  tipsEn: string[];
  tipsTl: string[];
}

export interface ApplicationTemplate {
  id: string;
  type: 'cover_letter' | 'email_application' | 'follow_up' | 'intro' | 'resignation';
  titleEn: string;
  titleTl: string;
  targetAudience: string;
  tones: {
    professional: {
      en: string;
      fil: string;
    };
    friendly: {
      en: string;
      fil: string;
    };
    concise: {
      en: string;
      fil: string;
    };
  };
}

export interface JobScamIndicator {
  id: string;
  titleEn: string;
  titleTl: string;
  descriptionEn: string;
  descriptionTl: string;
  example: string;
  warningLevel: 'high' | 'critical';
}
