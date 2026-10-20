import { JobPlatform } from '../types';

export const jobPlatforms: JobPlatform[] = [
  {
    id: 'philjobnet',
    name: 'PhilJobNet (DOLE)',
    tagline: 'Official Philippine Government Job Portal',
    url: 'https://philjobnet.gov.ph/',
    bestFor: 'First-time jobseekers, government vacancies, local accredited private employers, PESO matching',
    isGovernment: true,
    features: [
      'Managed by the Bureau of Local Employment - DOLE',
      'Directly connected with Public Employment Service Offices (PESO)',
      '100% free with pre-verified employers',
      'Compliant with the First Time Jobseekers Assistance Act'
    ]
  },
  {
    id: 'csc-careers',
    name: 'CSC Careers Portal',
    tagline: 'Official Civil Service Commission Government Vacancies',
    url: 'https://csc.gov.ph/career/',
    bestFor: 'National government agencies, LGUs, state universities, and constitutional commissions',
    isGovernment: true,
    features: [
      'Comprehensive listing of open civil service vacancies across the country',
      'Includes item numbers, salary grades (SG), and qualification standards',
      'Transparency in hiring with examination requirements (Career Service Professional/Subprofessional)'
    ]
  },
  {
    id: 'jobstreet-ph',
    name: 'JobStreet Philippines',
    tagline: 'Leading Philippine Corporate & BPO Employment Board',
    url: 'https://www.jobstreet.com.ph/',
    bestFor: 'Corporate roles, BPO/call center positions, banking, entry-level fresh grad positions',
    isGovernment: false,
    features: [
      'Salary expectation indicator on listings',
      'Easy apply with stored resume and portfolio',
      'Filters for "Fresh Graduate / No Experience Required"'
    ]
  },
  {
    id: 'linkedin-ph',
    name: 'LinkedIn Philippines',
    tagline: 'Professional Networking & Direct Recruiter Reach',
    url: 'https://www.linkedin.com/jobs/',
    bestFor: 'Tech, marketing, management, multinational corporations, and networking with HR recruiters',
    isGovernment: false,
    features: [
      'Direct messaging with talent acquisition heads',
      'Company culture insights and employee headcount',
      'Strong support for remote and international clients hiring in PH'
    ]
  },
  {
    id: 'onlinejobs-ph',
    name: 'OnlineJobs.ph',
    tagline: 'Primary Remote Work & Virtual Assistant Platform for Filipinos',
    url: 'https://www.onlinejobs.ph/',
    bestFor: 'Work-from-home, Virtual Assistants, graphic designers, copywriters, and online developers',
    isGovernment: false,
    features: [
      'Specifically tailored for direct overseas employers hiring Filipino remote workers',
      'ID verification score badge for jobseeker trust',
      'Direct salary negotiation with US, Australian, and European clients'
    ]
  },
  {
    id: 'indeed-ph',
    name: 'Indeed Philippines',
    tagline: 'Global Job Aggregator & Salary Insights',
    url: 'https://ph.indeed.com/',
    bestFor: 'Healthcare, retail, hospitality, engineering, and regional provincial employment',
    isGovernment: false,
    features: [
      'Transparent company reviews and employee ratings',
      'Location-based search filtering by province and municipality',
      'Automated email alerts for specific keywords'
    ]
  },
  {
    id: 'kalibrr',
    name: 'Kalibrr',
    tagline: 'Modern Tech & Startup Career Portal',
    url: 'https://www.kalibrr.com/',
    bestFor: 'Fintech startups, developers, UI/UX designers, and innovative modern enterprises',
    isGovernment: false,
    features: [
      'Built-in skills testing assessments',
      'Curated company profiles with culture showcases',
      'Ideal for universities and young professionals'
    ]
  },
  {
    id: 'tesda-online',
    name: 'e-TESDA & Free Skills Training',
    tagline: 'Free National Vocational and Livelihood Courses',
    url: 'https://e-tesda.gov.ph/',
    bestFor: 'Upskilling, technical vocational certificates, NC II preparation, and freelancing skills',
    isGovernment: true,
    features: [
      'Over 150 free online self-paced modules',
      'Official TESDA certificates recognized nationwide and abroad',
      'Covers IT, tourism, agriculture, construction, and electronics'
    ]
  }
];

export const applicationTemplates = [
  {
    id: 'fresh-grad-cover-letter',
    type: 'cover_letter' as const,
    titleEn: 'Fresh Graduate / Entry-Level Cover Letter',
    titleTl: 'Cover Letter para sa Fresh Graduate (Walang OJT/Karanasan)',
    targetAudience: 'Fresh graduates highlighting academic projects, internships, leadership, and eagerness to learn.',
    tones: {
      professional: {
        en: `Dear Hiring Manager,

I am writing to express my strong enthusiasm for the [Target Job Title] position at [Company Name]. Having recently graduated with a degree in [Degree/Course] from [School/University], I am eager to apply my foundational skills and strong dedication to your team.

During my academic coursework and hands-on projects, I developed a solid foundation in [Key Skill 1] and [Key Skill 2]. Furthermore, my experience during [Internship/Thesis/Leadership role] demonstrated my ability to collaborate effectively under tight deadlines and deliver reliable results.

I admire [Company Name]'s leadership in [Industry/Field] and would welcome the opportunity to contribute my proactive work ethic to your continued success. Thank you very much for considering my application.

Sincerely,
[Your Full Name]
[Contact Number] | [Email Address]`,
        fil: `Mahal na Hiring Manager,

Sumusulat po ako upang ipahayag ang aking buong sigasig sa posisyong [Target Job Title] sa [Company Name]. Bilang isang bagong tapos sa kursong [Degree/Course] mula sa [School/University], sabik po akong ihandog ang aking mga natutunang kaalaman at sipag sa inyong kumpanya.

Sa aking pag-aaral at mga proyektong pang-akademiko, nahasa po ang aking kasanayan sa [Key Skill 1] at [Key Skill 2]. Sa pamamagitan din ng aking [OJT/Thesis/Student Organization], natutunan ko ang mabisang pakikipagtulungan sa grupo at paglutas ng mga suliranin sa takdang oras.

Lubos kong hinahangaan ang pamumuno ng [Company Name] sa inyong larangan at ikararangal kong makapag-ambag sa inyong tagumpay. Maraming salamat po sa inyong oras at konsiderasyon.

Gumagalang,
[Your Full Name]
[Contact Number] | [Email Address]`
      },
      friendly: {
        en: `Dear [Hiring Manager / Team Lead],

I was thrilled to come across the opening for [Target Job Title] at [Company Name]. As a fresh graduate in [Degree/Course] from [School/University], I have been following your company's impressive milestones and would love to be part of your growing team.

While I am at the start of my professional journey, I bring hands-on project experience in [Key Skill 1] and [Key Skill 2], paired with a genuine hunger to learn quickly and support colleagues. My professors and peers know me as someone who stays calm, organized, and focused on quality.

I would love the opportunity to discuss how my fresh perspective and commitment can assist [Company Name]. Thank you for your time and warm consideration!

Warm regards,
[Your Full Name]
[Contact Number] | [Email Address]`,
        fil: `Magandang araw po [Hiring Manager / Team],

Labis po akong natuwa nang makita ang inyong pagbubukas para sa posisyong [Target Job Title] sa [Company Name]. Bilang isang fresh graduate sa [Degree/Course] mula sa [School/University], matagal ko na pong sinusubaybayan ang inyong mga tagumpay at nais kong maging bahagi ng inyong masipag na grupo.

Kahit nagsisimula pa lamang ako sa aking propesyonal na karera, mayroon po akong matibay na karanasan sa [Key Skill 1] at [Key Skill 2], kalakip ang mabilis na pagkatuto at kahandaang magsumikap. 

Ikinagagalak ko pong makapanayam kayo upang maipaliwanag kung paano makatutulong ang aking sipag at dedikasyon sa [Company Name]. Maraming salamat po!

Lubos na gumagalang,
[Your Full Name]
[Contact Number] | [Email Address]`
      },
      concise: {
        en: `Dear Hiring Team,

Please accept this letter and my attached resume as an application for the [Target Job Title] role at [Company Name]. 

A recent graduate of [Degree/Course] from [School/University], I have developed practical competencies in [Key Skill 1], [Key Skill 2], and cross-functional team coordination. I am eager to apply my fast learning curve and strong attention to detail to achieve immediate productivity for [Company Name].

I look forward to discussing how my background aligns with your objectives.

Best regards,
[Your Full Name]
[Contact Number] | [Email Address]`,
        fil: `Magandang araw po sa Hiring Team,

Nais ko pong ipasa ang aking aplikasyon para sa posisyong [Target Job Title] sa [Company Name].

Kamakailan po akong nagtapos ng [Degree/Course] sa [School/University], kung saan nahasa ang aking kakayahan sa [Key Skill 1] at [Key Skill 2]. Handa po akong mag-ambag agad ng maagap na trabaho at masusing atensyon sa detalye para sa inyong kumpanya.

Inaasahan ko po ang inyong tugon para sa isang panayam.

Gumagalang,
[Your Full Name]
[Contact Number] | [Email Address]`
      }
    }
  },
  {
    id: 'experienced-cover-letter',
    type: 'cover_letter' as const,
    titleEn: 'Experienced Professional Cover Letter',
    titleTl: 'Cover Letter para sa May Karanasan sa Trabaho',
    targetAudience: 'Experienced workers emphasizing proven achievements, measurable impact, and leadership.',
    tones: {
      professional: {
        en: `Dear Hiring Manager,

With over [Number of Years] years of proven experience in [Your Field/Specialization], I am writing to express my eager interest in the [Target Job Title] position at [Company Name].

In my most recent role as [Recent Job Title] at [Recent Company], I successfully [Key Achievement or Responsibility], resulting in [Quantifiable Impact, e.g., 20% efficiency increase or high client satisfaction]. My core strengths encompass [Core Skill 1], [Core Skill 2], and leading collaborative workflows that optimize organizational performance.

I am confident that my operational expertise and problem-solving mindset make me an immediate value-add to [Company Name]. I welcome the opportunity to discuss my qualifications in greater detail.

Sincerely,
[Your Full Name]
[Contact Number] | [Email Address]`,
        fil: `Mahal na Hiring Manager,

Taglay ang higit sa [Number of Years] taong karanasan sa larangan ng [Your Field/Specialization], nais ko pong mag-apply sa posisyong [Target Job Title] sa inyong kagalang-galang na kumpanyang [Company Name].

Sa aking nakaraang trabaho bilang [Recent Job Title] sa [Recent Company], pinangunahan ko ang [Key Achievement], na nagbunga ng [Quantifiable Impact o tagumpay sa proyekto]. Ang aking mga pangunahing kalakasan ay kinabibilangan ng [Core Skill 1], [Core Skill 2], at maayos na pamamahala ng mga proseso.

Tiwala po ako na ang aking karanasan at propesyonalismo ay magiging malaking tulong sa pag-abot ng mga layunin ng [Company Name]. Inaasahan ko po ang pagkakataong makausap kayo.

Gumagalang,
[Your Full Name]
[Contact Number] | [Email Address]`
      },
      friendly: {
        en: `Dear [Hiring Manager / Team],

I was thrilled to see the opening for [Target Job Title] at [Company Name]. Having spent the past [Number of Years] years honing my craft in [Your Field], I know firsthand the dedication it takes to drive meaningful results in this industry.

At [Recent Company], I had the privilege of [Key Achievement/Project], while coaching teammates and maintaining high client satisfaction. What excites me most about [Company Name] is your reputation for [Company Positive Trait or Product].

I would love to connect and share more about how my background and hands-on skills can support your upcoming initiatives.

Warm regards,
[Your Full Name]
[Contact Number] | [Email Address]`,
        fil: `Magandang araw po sa Hiring Team,

Natuwa po ako nang makita ang bakanteng posisyon para sa [Target Job Title] sa [Company Name]. Sa nakaraang [Number of Years] taon sa larangan ng [Your Field], naranasan ko kung paano magbigay ng de-kalidad na serbisyo at lumikha ng positibong resulta.

Sa [Recent Company], naging bahagi ako ng [Key Achievement], habang tumutulong sa aking mga kasamahan upang maabot ang aming quota at pamantayan. Hinahangaan ko ang [Company Name] dahil sa inyong mataas na integridad at galing.

Sabik po akong maibahagi kung paano makatutulong ang aking karanasan sa inyong mga paparating na proyekto.

Lubos na gumagalang,
[Your Full Name]
[Contact Number] | [Email Address]`
      },
      concise: {
        en: `Dear Hiring Team,

I am applying for the [Target Job Title] position at [Company Name].

With [Number of Years] years in [Your Field], my track record includes [Key Achievement/Skill] and driving measurable improvements in [Specific Metric]. My experience in [Core Skill 1] and [Core Skill 2] aligns directly with your current priorities.

Attached is my resume for your review. I look forward to our conversation.

Best regards,
[Your Full Name]
[Contact Number] | [Email Address]`,
        fil: `Magandang araw,

Ipinapasa ko po ang aking aplikasyon para sa posisyong [Target Job Title] sa [Company Name].

Sa aking [Number of Years] taon sa industriya ng [Your Field], naipamalas ko ang husay sa [Key Achievement/Skill] at pagpapataas ng kalidad ng trabaho. Ang aking kaalaman sa [Core Skill 1] at [Core Skill 2] ay akmang-akma sa inyong hinahanap.

Kalakip po ang aking resume para sa inyong pagsusuri.

Gumagalang,
[Your Full Name]
[Contact Number] | [Email Address]`
      }
    }
  },
  {
    id: 'email-job-application',
    type: 'email_application' as const,
    titleEn: 'Job Application Email Body',
    titleTl: 'Mensahe sa Email para sa Pagpasa ng Resume (Job Application)',
    targetAudience: 'Polite, clear email body when emailing HR or recruiter directly with your resume attachment.',
    tones: {
      professional: {
        en: `Subject: Job Application: [Target Job Title] - [Your Full Name]

Dear [Hiring Manager's Name or Hiring Team],

I hope this email finds you well.

I am writing to formally submit my application for the [Target Job Title] position currently open at [Company Name], as advertised on [Platform Name, e.g., PhilJobNet / JobStreet / LinkedIn].

With my background in [Your Field/Degree] and practical expertise in [Key Skill 1] and [Key Skill 2], I am confident in my capacity to contribute meaningfully to your organization's goals.

Attached to this email, please find my updated Resume and supporting documents for your evaluation. I would welcome the opportunity to discuss my qualifications in an interview at your earliest convenience.

Thank you very much for your time and consideration.

Warm regards,

[Your Full Name]
[Contact Number]
[Email Address]
[LinkedIn Profile or Portfolio Link]`,
        fil: `Subject: Aplikasyon sa Trabaho: [Target Job Title] - [Your Full Name]

Magandang araw po sa Hiring Team ng [Company Name],

Nais ko pong pormal na ipasa ang aking aplikasyon para sa posisyong [Target Job Title] na aking nakita sa [Platform Name, hal. PhilJobNet o JobStreet].

Kalakip po ng email na ito ang aking opisyal na Resume para sa inyong pagsusuri. Ang aking karanasan at kasanayan sa [Key Skill 1] at [Key Skill 2] ay handa kong gamitin upang makapag-ambag nang tapat at maayos sa inyong kumpanya.

Ikinagagalak ko pong makapanayam kayo sa oras na inyong mapili. Maraming salamat po sa inyong pagsasaalang-alang.

Lubos na gumagalang,

[Your Full Name]
[Contact Number]
[Email Address]`
      },
      friendly: {
        en: `Subject: Application: [Target Job Title] - [Your Full Name]

Hi [Hiring Manager Name / HR Team],

I hope you are having a wonderful week!

I saw the opening for [Target Job Title] at [Company Name] and wanted to reach out right away. Having followed your company's great work in the Philippines, I would love the chance to bring my experience in [Key Skill 1] and [Key Skill 2] to your team.

I have attached my resume here for your review. Please feel free to reach out if you need any additional samples or portfolio links.

Thank you so much for your time, and I look forward to hearing from you!

Best regards,

[Your Full Name]
[Contact Number]
[Email Address]`,
        fil: `Subject: Aplikasyon para sa [Target Job Title] - [Your Full Name]

Magandang araw po [Hiring Team / HR],

Sana po ay nasa mabuti kayong kalagayan!

Nakita ko po ang inyong paghahanap ng [Target Job Title] sa [Company Name] at nais ko pong mag-apply. Hinahangaan ko ang inyong magandang serbisyo at nais kong dalhin ang aking kakayahan sa [Key Skill 1] at [Key Skill 2] sa inyong grupo.

Nakalakip po ang aking updated resume. Handa po akong magbigay ng karagdagang impormasyon kung kinakailangan.

Maraming salamat po at magandang araw!

Gumagalang,

[Your Full Name]
[Contact Number]
[Email Address]`
      },
      concise: {
        en: `Subject: [Target Job Title] Application - [Your Full Name]

Dear [Hiring Manager / HR Team],

Please consider my application for the [Target Job Title] opening at [Company Name]. 

Attached is my resume highlighting my skills in [Key Skill 1], [Key Skill 2], and related accomplishments. I am available for an interview at your convenience and eager to discuss how I can support your team.

Thank you for your review.

Sincerely,

[Your Full Name]
[Contact Number]
[Email Address]`,
        fil: `Subject: Aplikasyon para sa [Target Job Title] - [Your Full Name]

Magandang araw po sa Hiring Manager,

Ipinapasa ko po ang aking aplikasyon para sa [Target Job Title] sa [Company Name].

Kalakip po ang aking resume na naglalaman ng aking kasanayan sa [Key Skill 1] at [Key Skill 2]. Handa po akong magpa-interview sa inyong pinakamadaling panahon.

Salamat po,

[Your Full Name]
[Contact Number]
[Email Address]`
      }
    }
  },
  {
    id: 'follow-up-message',
    type: 'follow_up' as const,
    titleEn: 'Job Application Follow-up Message',
    titleTl: 'Mensahe ng Pagsubaybay (Follow-up) Matapos Mag-apply o Mag-interview',
    targetAudience: 'Polite follow-up after 5-7 business days or post-interview to express continued interest.',
    tones: {
      professional: {
        en: `Subject: Follow-up on Application: [Target Job Title] - [Your Full Name]

Dear [Hiring Manager's Name / Recruitment Team],

I hope this message finds you well.

I am writing to politely follow up on the status of my application for the [Target Job Title] position, which I submitted on [Date Submitted] via [Platform/Email].

I remain very interested in the opportunity to join [Company Name] and contribute my skills in [Key Skill 1] and [Key Skill 2]. Please let me know if there are any additional requirements, references, or details you need from my end to assist your evaluation.

Thank you again for your time and consideration.

Warm regards,

[Your Full Name]
[Contact Number]
[Email Address]`,
        fil: `Subject: Pagsubaybay sa Aplikasyon: [Target Job Title] - [Your Full Name]

Magandang araw po [Hiring Team / HR],

Nais ko lamang pong magalang na mag-follow up hinggil sa aking aplikasyon para sa posisyong [Target Job Title] na aking ipinasa noong [Petsa kung kailan nag-apply].

Nananatili po ang aking matinding interes na makapaglingkod sa [Company Name]. Pakisabi lamang po kung may karagdagang dokumento o katanungan kayong kailangan mula sa akin.

Maraming salamat po sa inyong panahon at konsiderasyon.

Gumagalang,

[Your Full Name]
[Contact Number]
[Email Address]`
      },
      friendly: {
        en: `Subject: Touching base regarding [Target Job Title] - [Your Full Name]

Hi [Hiring Manager Name],

I hope you're having a productive week!

I wanted to quickly check in regarding the [Target Job Title] role. I really enjoyed learning more about [Company Name] and would love to help your team achieve [mention a company goal or project].

Whenever you have an update on the hiring timeline, I'd be glad to hear it. No rush at all—I just wanted to reaffirm my enthusiasm!

Thanks again,

[Your Full Name]
[Contact Number]`,
        fil: `Subject: Kumusta po hinggil sa [Target Job Title] - [Your Full Name]

Magandang araw po [Pangalan ng HR / Hiring Team],

Sana po ay maayos ang inyong linggo!

Nais ko lamang pong mangumusta hinggil sa aking aplikasyon para sa [Target Job Title]. Lubos po akong nasasabik sa pagkakataong makasama ang inyong team sa [Company Name].

Pakisabi lamang po kapag may update na sa proseso ng hiring. Maraming salamat po sa inyong kabaitan!

Lubos na gumagalang,

[Your Full Name]
[Contact Number]`
      },
      concise: {
        en: `Subject: Status Inquiry: [Target Job Title] - [Your Full Name]

Dear [Hiring Team],

I am checking in on the status of my application for the [Target Job Title] position submitted on [Date]. 

I remain eager to contribute to [Company Name]. Please let me know if you require any further information.

Best regards,

[Your Full Name]
[Contact Number]`,
        fil: `Subject: Status ng Aplikasyon para sa [Target Job Title] - [Your Full Name]

Magandang araw po,

Nais ko lamang pong alamin ang status ng aking aplikasyon para sa [Target Job Title] na ipinasa noong [Petsa].

Mananatili po akong bukas para sa karagdagang katanungan o panayam. Maraming salamat po!

Gumagalang,

[Your Full Name]
[Contact Number]`
      }
    }
  },
  {
    id: 'resignation-letter',
    type: 'resignation' as const,
    titleEn: 'Formal Resignation Letter (Philippine Labor Code Compliant)',
    titleTl: 'Pormal na Liham ng Pagbibitiw sa Trabaho (Resignation Letter)',
    targetAudience: 'Professional 30-day notice resignation compliant with the Philippine Labor Code (Article 300).',
    tones: {
      professional: {
        en: `[Date]

[Supervisor / Manager Name]
[Manager Title]
[Company Name]
[Company Address]

Dear [Manager Name],

Please accept this letter as formal notification that I am resigning from my position as [Your Job Title] at [Company Name]. In accordance with company policy and Philippine labor regulations, my last day of employment will be on [Date of Last Working Day - exactly 30 days from notice date].

I am deeply grateful for the opportunities I have had during my tenure at [Company Name]. I have truly appreciated your guidance, as well as the support of my colleagues, which contributed substantially to my professional development.

During the next 30 days, I am fully committed to completing my pending deliverables and assisting in an orderly transition of my duties to ensure minimal disruption to the team.

I wish [Company Name] continued growth and success in the future.

Sincerely,

[Your Signature]
[Your Full Name]
[Your Employee ID / Department]`,
        fil: `[Petsa]

[Pangalan ng Supervisor / Manager]
[Posisyon ng Manager]
[Pangalan ng Kumpanya]
[Address ng Kumpanya]

Mahal na [Pangalan ng Manager],

Tanggapin po ninyo ang liham na ito bilang pormal na paunawa ng aking pagbibitiw sa posisyong [Your Job Title] sa [Company Name]. Alinsunod sa patakaran ng kumpanya at batas sa paggawa (Labor Code of the Philippines), ang aking huling araw ng panunungkulan ay sa [Petsa ng Huling Araw - 30 araw mula ngayon].

Lubos po akong nagpapasalamat sa tiwala at mga pagkakataong ibinigay sa akin sa panahon ng aking pamamalagi sa kumpanya. Malaki po ang naitulong ng inyong patnubay at tulong ng aking mga kasamahan sa aking pag-unlad bilang propesyonal.

Sa loob ng susunod na 30 araw, buong puso po akong maglilingkod upang tapusin ang aking mga naiwang gawain at tumulong sa maayos na turnover sa papalit sa aking tungkulin.

Hangad ko po ang patuloy na tagumpay ng ating kumpanya.

Gumagalang,

[Iyong Pirma]
[Iyong Buong Pangalan]
[Employee ID / Department]`
      },
      friendly: {
        en: `[Date]

Dear [Manager Name],

It is with mixed emotions that I submit my formal resignation as [Your Job Title], effective [Last Working Day, 30 days notice].

Working with you and the rest of the team at [Company Name] has been an invaluable chapter of my career. I will always look back fondly on the challenges we solved together and the camaraderie we built.

I will do everything I can over the next month to ensure all my projects are wrapped up cleanly and my teammates have everything they need for a smooth turnover.

Thank you so much for your mentorship and kindness. I hope we stay in touch!

Warm regards,

[Your Full Name]`,
        fil: `[Petsa]

Mahal na [Pangalan ng Manager],

May halo pong lungkot at pasasalamat ang aking pagsusumite ng pormal na liham ng pagbibitiw bilang [Your Job Title], na magiging epektibo sa [Huling Araw ng Trabaho - 30 araw mula ngayon].

Ang makatrabaho kayo at ang buong grupo sa [Company Name] ay naging napakahalagang bahagi ng aking buhay. Hindi ko po malilimutan ang inyong tulong at magandang samahan.

Gagawin ko po ang lahat sa susunod na 30 araw upang maihanda ang maayos na turnover at matiyak na walang maantalang trabaho ang ating grupo.

Maraming salamat po sa inyong kabutihan at sana po ay manatili tayong magkaibigan!

Lubos na gumagalang,

[Your Full Name]`
      },
      concise: {
        en: `[Date]

To: [Manager Name / HR Department]
From: [Your Full Name]
Subject: Notice of Resignation

Please accept this letter as formal notice of my resignation from my position as [Your Job Title] at [Company Name], effective 30 days from today on [Last Working Day Date].

I appreciate the opportunities provided to me during my time with the company. I will coordinate closely with the team to facilitate a seamless transition of my responsibilities prior to my departure.

Sincerely,

[Your Full Name]
[Employee ID]`,
        fil: `[Petsa]

Para kay: [Pangalan ng Manager / HR]
Mula kay: [Iyong Pangalan]
Paksa: Paunawa ng Pagbibitiw sa Trabaho

Tanggapin po ninyo ang liham na ito bilang pormal na abiso ng aking pagbibitiw bilang [Your Job Title] sa [Company Name], na magkakabisa 30 araw mula ngayon sa [Petsa ng Huling Araw].

Salamat po sa mga pagkakataong ibinigay sa akin sa aking panunungkulan. Handa po akong makipagtulungan para sa maayos na turnover.

Gumagalang,

[Your Full Name]`
      }
    }
  }
];
