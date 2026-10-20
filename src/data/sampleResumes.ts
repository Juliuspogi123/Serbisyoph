import { ResumeData } from '../types';

export const sampleResumes: Record<string, ResumeData> = {
  fresh_grad: {
    profileType: 'fresh_grad',
    fullName: 'Maria Angela S. Santos',
    email: 'maria.santos.career@gmail.com',
    phone: '+63 917 123 4567',
    location: 'Quezon City, Metro Manila',
    linkedinOrPortfolio: 'linkedin.com/in/mariasantos-it',
    targetJobTitle: 'Associate Software Developer / IT Support Specialist',
    summary: 'Diligent BS Information Technology graduate from Polytechnic University of the Philippines with strong foundation in web development, database management, and technical troubleshooting. Recognized with Dean\'s List honors and proven teamwork during a 450-hour internship at a fintech startup. Eager to contribute proactive problem-solving to an innovative development team.',
    education: [
      {
        id: 'edu-1',
        institution: 'Polytechnic University of the Philippines - Sta. Mesa',
        degreeOrStrand: 'Bachelor of Science in Information Technology',
        location: 'Manila, Philippines',
        startDate: '2022',
        endDate: '2026',
        current: false,
        honorsOrAchievements: 'Graduated Cum Laude · Dean\'s Honor List for 6 Semesters · Capstone Project Best Presenter'
      },
      {
        id: 'edu-2',
        institution: 'Quezon City Science High School',
        degreeOrStrand: 'Senior High School - STEM Strand',
        location: 'Quezon City',
        startDate: '2020',
        endDate: '2022',
        current: false,
        honorsOrAchievements: 'With High Honors · President, Computer & Robotics Guild'
      }
    ],
    experience: [
      {
        id: 'exp-1',
        role: 'Software Development & IT Intern (OJT - 450 Hours)',
        companyOrOrg: 'PayLink Solutions Philippines Inc.',
        location: 'Taguig City, Metro Manila',
        startDate: 'January 2026',
        endDate: 'May 2026',
        current: false,
        description: [
          'Assisted senior engineers in testing frontend React components, reducing bug escalation by 15%.',
          'Collaborated with QA team to document test scenarios and user acceptance criteria for payment workflows.',
          'Provided technical helpdesk assistance to 50+ internal employees, resolving ticket requests within SLA targets.'
        ]
      },
      {
        id: 'exp-2',
        role: 'Lead Developer - Academic Capstone Project',
        companyOrOrg: 'Barangay Health Center Record System',
        location: 'Manila',
        startDate: 'August 2025',
        endDate: 'December 2025',
        current: false,
        description: [
          'Architected a responsive patient appointment and inventory web application for Barangay 412.',
          'Built RESTful API endpoints and implemented PostgreSQL database schemas with automated backups.',
          'Conducted hands-on user training for 8 barangay health workers with 95% positive usability feedback.'
        ]
      }
    ],
    skills: [
      'HTML5 & CSS3',
      'JavaScript / TypeScript',
      'React & Tailwind CSS',
      'SQL & Database Design',
      'Git & GitHub Version Control',
      'Technical Documentation',
      'Active Listening & Communication',
      'Agile Team Collaboration'
    ],
    certifications: [
      'DOST-DICT Digital Career Training Certification (Web Development)',
      'First-Time Jobseeker Beneficiary (RA 11261 Certified)'
    ],
    languages: [
      'English (Proficient - Written & Oral)',
      'Filipino / Tagalog (Native)'
    ]
  },

  experienced: {
    profileType: 'experienced',
    fullName: 'Juan Carlos M. dela Cruz',
    email: 'jc.delacruz.work@gmail.com',
    phone: '+63 928 987 6543',
    location: 'Cebu City, Central Visayas',
    linkedinOrPortfolio: 'linkedin.com/in/jcdelacruz-operations',
    targetJobTitle: 'Customer Operations Supervisor / Team Lead',
    summary: 'Results-driven Operations Specialist with over 4 years of proven track record in BPO and customer experience management. Successfully managed a team of 18 customer service associates, driving customer satisfaction (CSAT) from 84% to 94% and exceeding quarterly service level agreements (SLAs). Skilled in workflow optimization, dispute de-escalation, and cross-functional team mentorship.',
    education: [
      {
        id: 'edu-exp-1',
        institution: 'University of San Carlos',
        degreeOrStrand: 'Bachelor of Science in Business Administration, Major in Marketing',
        location: 'Cebu City',
        startDate: '2018',
        endDate: '2022',
        current: false,
        honorsOrAchievements: 'Graduated with Academic Distinction · Lead Student Ambassador'
      }
    ],
    experience: [
      {
        id: 'exp-exp-1',
        role: 'Customer Support Team Lead',
        companyOrOrg: 'Apex Global Contact Solutions',
        location: 'Cebu IT Park, Cebu City',
        startDate: 'March 2024',
        endDate: 'Present',
        current: true,
        description: [
          'Lead and supervise an 18-member customer support squad for a premier North American e-commerce client.',
          'Spearheaded a refreshed coaching framework that decreased average handle time (AHT) by 45 seconds while increasing quality audit scores to 97%.',
          'Conducted weekly performance calibrations and root cause analyses on escalated customer disputes.'
        ]
      },
      {
        id: 'exp-exp-2',
        role: 'Senior Customer Care Specialist',
        companyOrOrg: 'Synergy BPO Philippines',
        location: 'Cebu City',
        startDate: 'June 2022',
        endDate: 'February 2024',
        current: false,
        description: [
          'Handled inbound phone and email inquiries with 96% first-contact resolution (FCR).',
          'Awarded Top Performing Agent of the Quarter three consecutive times out of 120 peers.',
          'Assisted team management with training 25 new hires during onboarding bootcamps.'
        ]
      }
    ],
    skills: [
      'Team Leadership & Coaching',
      'Customer Experience Management (CX)',
      'Zendesk, Salesforce CRM, & Jira',
      'Conflict Resolution & De-escalation',
      'KPI Analysis & Performance Audits',
      'Workforce Scheduling & SLA Compliance',
      'Process Improvement (Six Sigma White Belt)'
    ],
    certifications: [
      'Six Sigma White Belt Certification',
      'HubSpot Certified Customer Service Professional'
    ],
    languages: [
      'English (Fluent / Professional)',
      'Filipino (Native)',
      'Cebuano (Native)'
    ]
  },

  no_exp: {
    profileType: 'no_exp',
    fullName: 'Mark Angelo B. Bautista',
    email: 'mark.bautista.careers@gmail.com',
    phone: '+63 945 333 8899',
    location: 'Davao City, Davao del Sur',
    targetJobTitle: 'Administrative Assistant / Store Associate / Clerical Staff',
    summary: 'Reliable and detail-oriented Senior High School graduate (Accountancy, Business, and Management strand) with verified competencies in computer operation, data entry, and customer assistance. Certified under the First Time Jobseekers Assistance Act (RA 11261). Committed to maintaining organized files, handling client inquiries with respect, and delivering punctual support.',
    education: [
      {
        id: 'edu-noexp-1',
        institution: 'Davao City National High School',
        degreeOrStrand: 'Senior High School - ABM Strand (Accountancy, Business & Management)',
        location: 'Davao City',
        startDate: '2024',
        endDate: '2026',
        current: false,
        honorsOrAchievements: 'With Honors · Completed 80-hour Work Immersion Program in Business Operations'
      }
    ],
    experience: [
      {
        id: 'exp-noexp-1',
        role: 'Senior High School Work Immersion Trainee',
        companyOrOrg: 'Barangay Micro-Business Cooperative',
        location: 'Davao City',
        startDate: 'November 2025',
        endDate: 'January 2026',
        current: false,
        description: [
          'Organized and cataloged physical and digital inventory records using Google Sheets and Microsoft Excel.',
          'Assisted walk-in cooperative members with filling out membership forms and transaction slips.',
          'Managed front-desk receiving with polite telephone etiquette and logged daily visitors.'
        ]
      }
    ],
    skills: [
      'Microsoft Office (Word, Excel, PowerPoint)',
      'Google Workspace (Docs, Sheets, Drive)',
      'Fast Data Entry (55+ WPM with 98% accuracy)',
      'Cash Handling & Basic Bookkeeping',
      'Customer Service Courtesy',
      'Punctual & Highly Organized'
    ],
    certifications: [
      'TESDA National Certificate in Computer Systems Servicing (CSS NC II)',
      'Barangay Certified First-Time Jobseeker (RA 11261)'
    ],
    languages: [
      'English (Conversational)',
      'Filipino (Fluent)',
      'Bisaya / Cebuano (Native)'
    ]
  },

  career_changer: {
    profileType: 'career_changer',
    fullName: 'Elena Patricia R. Castro',
    email: 'elena.castro.work@gmail.com',
    phone: '+63 939 555 1122',
    location: 'Iloilo City, Western Visayas',
    linkedinOrPortfolio: 'linkedin.com/in/elenacastro-va',
    targetJobTitle: 'Virtual Assistant / Executive Project Coordinator',
    summary: 'Versatile professional with 3+ years of experience in educational administration and communications, transitioning into remote Virtual Assistance and Project Coordination. Proven expertise in calendar scheduling, stakeholder correspondence, document curation, and research. Completed comprehensive Digital Labor training in executive administrative workflows.',
    education: [
      {
        id: 'edu-cc-1',
        institution: 'West Visayas State University',
        degreeOrStrand: 'Bachelor of Secondary Education',
        location: 'Iloilo City',
        startDate: '2019',
        endDate: '2023',
        current: false,
        honorsOrAchievements: 'Licensed Professional Teacher (LPT) · Academic Scholar'
      }
    ],
    experience: [
      {
        id: 'exp-cc-1',
        role: 'Administrative & Academic Coordinator',
        companyOrOrg: 'St. Augustine Academy',
        location: 'Iloilo City',
        startDate: 'June 2023',
        endDate: 'May 2026',
        current: false,
        description: [
          'Managed schedules, parent-teacher conferences, and digital correspondence for 12 faculty members.',
          'Authored quarterly institutional newsletters and digitized student scholastic records into cloud spreadsheets.',
          'Facilitated smooth communication between administrators and over 350 parent stakeholders.'
        ]
      }
    ],
    skills: [
      'Executive Calendar Management (Google Calendar / Outlook)',
      'Email Management & Inbox Zero Workflow',
      'Project Management Tools (Asana, Notion, Trello)',
      'Canva Graphic Design & Presentation Creation',
      'Written Business Communication',
      'Cross-Timezone Collaboration',
      'Research & Data Organization'
    ],
    certifications: [
      'General Virtual Assistance (GVA) Intensive Masterclass',
      'PRC Board Licensed Professional Teacher'
    ],
    languages: [
      'English (Proficient - Written & Spoken)',
      'Filipino (Native)',
      'Hiligaynon (Native)'
    ]
  }
};
