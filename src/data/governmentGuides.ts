import { GovernmentGuide } from '../types';

export const governmentGuides: GovernmentGuide[] = [
  // 1. SSS
  {
    id: 'sss-guide',
    category: 'social_benefits',
    agencyCode: 'SSS',
    agencyName: 'Social Security System',
    titleEn: 'SSS Online Registration & Member Guide',
    titleTl: 'Gabay sa SSS Online Registration at Pagkuha ng SS Number',
    purposeEn: 'Provides social insurance protection (sickness, maternity, disability, retirement, and death benefits) for private sector employees, self-employed, OFWs, and voluntary members.',
    purposeTl: 'Nagbibigay ng proteksyong panlipunan (benepisyo sa pagkakasakit, panganganak, kapansanan, pagreretiro, at pagpanaw) para sa mga manggagawa sa pribadong sektor, self-employed, OFW, at voluntary members.',
    eligibleEn: [
      'Private sector employees (mandatory coverage)',
      'Self-employed professionals, freelancers, and business owners',
      'Overseas Filipino Workers (OFWs)',
      'Voluntary members and non-working spouses',
      'First-time jobseekers getting their SS Number before starting employment'
    ],
    eligibleTl: [
      'Mga empleyado sa pribadong kumpanya',
      'Mga self-employed, freelancer, at negosyante',
      'Overseas Filipino Workers (OFW)',
      'Voluntary members at non-working spouse',
      'Mga first-time jobseekers na kailangan ng SS Number para sa trabaho'
    ],
    requirementsEn: [
      'Valid email address (active and personal)',
      'PSA-issued Birth Certificate (or Marriage Certificate for married women)',
      'At least one primary valid ID (PhilID/National ID, Passport, Driver’s License, or PRID) or two secondary IDs',
      'Mobile number for OTP authentication'
    ],
    requirementsTl: [
      'Aktibong personal email address',
      'PSA Birth Certificate (o Marriage Certificate kung may asawa)',
      'Isang primary valid government ID (National ID, Passport, Driver’s License) o dalawang secondary IDs',
      'Aktibong mobile number para sa OTP verification'
    ],
    stepsEn: [
      'Step 1: Visit the official SSS Portal (sss.gov.ph) and click on "Apply for an SS Number Online" under Portals.',
      'Step 2: Read the terms and enter your basic personal information, primary email, and mobile number.',
      'Step 3: Check your email for the SSS activation link and follow instructions to complete the online registration form.',
      'Step 4: Fill in your parent details, beneficiaries, and upload the required PSA Birth Certificate copy.',
      'Step 5: Generate and print/download your Personal Record Form (E-1) and SSS Number Transaction Slip.',
      'Step 6: Submit supporting documents online or present them at an SSS branch if required to tag your membership as permanent.'
    ],
    stepsTl: [
      'Hakbang 1: Pumunta sa opisyal na SSS Portal (sss.gov.ph) at i-click ang "Apply for an SS Number Online".',
      'Hakbang 2: Basahin ang mga paalala at ilagay ang iyong personal na detalye, aktibong email, at cellphone number.',
      'Hakbang 3: Buksan ang iyong email upang kumpirmahin ang activation link mula sa SSS.',
      'Hakbang 4: Punan ang impormasyon ng mga magulang, benepisyaryo, at i-upload ang kopya ng PSA Birth Certificate.',
      'Hakbang 5: I-download at i-save ang iyong Personal Record Form (E-1) at SS Number slip na may barcode.',
      'Hakbang 6: Ipakita ang form na ito sa iyong employer. Kapag may trabaho na, automatic itong magiging active.'
    ],
    officialUrl: 'https://www.sss.gov.ph/',
    portalUrl: 'https://member.sss.gov.ph/members/',
    feesEn: 'FREE. Issuance of an SS Number is completely free. (Monthly contribution depends on your Monthly Salary Credit table).',
    feesTl: 'LIBRE. Walang bayad ang pagkuha ng SS Number. (Ang buwanang hulog ay nakadepende sa iyong buwanang sweldo o dineklarang kita).',
    processingTimeEn: 'Immediate SS Number generation online (Permanent status validated within 3-5 working days upon document upload).',
    processingTimeTl: 'Agad-agad makukuha ang SS Number online pagkatapos makumpleto ang form.',
    remindersEn: [
      'Keep your SS Number for life; a person is legally allowed only ONE SS Number.',
      'Never create multiple SS numbers if you forgot your old one; instead, request a retrieval at an SSS branch or via My.SSS.',
      'Save your My.SSS login credentials securely and do not share them.'
    ],
    remindersTl: [
      'Panghabambuhay ang SS Number. Bawal kumuha ng panibago kapag nakalimutan; humingi ng tulong sa SSS para hanapin ang dati.',
      'Siguraduhing tama ang baybay ng pangalan at petsa ng kapanganakan alinsunod sa iyong PSA Birth Certificate.',
      'Ingatan ang iyong My.SSS password at huwag ipamigay sa iba.'
    ],
    commonMistakesEn: [
      'Typing the wrong email address and losing the activation link.',
      'Applying for a second SS Number instead of recovering the original.',
      'Uploading blurry or cut-off copies of birth certificates.'
    ],
    commonMistakesTl: [
      'Maling email address ang nailagay kaya hindi natanggap ang activation link.',
      'Pagkuha ng panibagong SS Number kahit mayroon na dati.',
      'Malabong litrato ng PSA certificate ang nai-upload.'
    ],
    scamAlertsEn: [
      'SSS NEVER charges fees for online SS number applications or My.SSS account unlocking.',
      'Beware of Facebook groups or Fixers offering "Instant SSS ID/UMID" or "Loan Processing Assistance". They steal your identity.',
      'Never give your SSS password or OTP to anyone calling or texting claiming to be an SSS agent.'
    ],
    scamAlertsTl: [
      'Walang bayad ang pag-apply ng SS number. Huwag magbayad sa mga fixer sa Facebook o labas ng opisina.',
      'Walang official SSS employee na hihingi ng iyong OTP o password sa pamamagitan ng text o tawag.',
      'Mag-ingat sa mga pekeng website na humihingi ng credit card o GCash para sa SSS services.'
    ],
    dateVerified: 'October 2026',
    firstTimeJobseekerFree: true
  },

  // 2. PhilHealth
  {
    id: 'philhealth-guide',
    category: 'social_benefits',
    agencyCode: 'PhilHealth',
    agencyName: 'Philippine Health Insurance Corporation',
    titleEn: 'PhilHealth Member Registration & PIN Guide',
    titleTl: 'Gabay sa Pagpaparehistro sa PhilHealth at Pagkuha ng PIN',
    purposeEn: 'Provides universal health coverage and medical hospitalization subsidies for Filipino citizens and legal dependents under the Universal Health Care Act.',
    purposeTl: 'Nagbibigay ng subsidiya sa pampublikong kalusugan at ospital para sa bawat Pilipino at kanilang mga legal na dependent sa ilalim ng Universal Health Care Law.',
    eligibleEn: [
      'All Filipino citizens 21 years old and above',
      'Employed formally in private or public sector',
      'Self-employed, informal economy workers, and freelancers',
      'Indigent and senior citizens (subsidized by government)',
      'First-time jobseekers registering before employment'
    ],
    eligibleTl: [
      'Lahat ng mamamayang Pilipino na may edad 21 pataas',
      'Mga kawani sa pribado o pampublikong sektor',
      'Mga negosyante, freelancer, at informal workers',
      'Mga senior citizen at indigent members',
      'Mga fresh graduates at naghahanap ng unang trabaho'
    ],
    requirementsEn: [
      'Two (2) accomplished copies of PhilHealth Member Registration Form (PMRF)',
      'PSA Birth Certificate (photocopy with original for presentation)',
      'At least two (2) 1x1 recent ID pictures (white background)',
      'Valid Government-issued ID (PhilID/National ID, Passport, Postal ID, PRC, etc.)',
      'Marriage Certificate (if declaring spouse as dependent)'
    ],
    requirementsTl: [
      'Dalawang (2) kopya ng nasagutang PhilHealth Member Registration Form (PMRF)',
      'PSA Birth Certificate (photocopy at orihinal)',
      'Dalawang (2) pirasong 1x1 ID picture (white background)',
      'Valid Government ID (National ID, Passport, Postal ID, Driver’s License)',
      'Marriage Certificate kung ilalagay ang asawa bilang dependent'
    ],
    stepsEn: [
      'Step 1: Download and fill out the official PMRF form from philhealth.gov.ph or use the PhilHealth Electronic Registration System (e-Registration).',
      'Step 2: Attach a scanned/photocopy of your PSA Birth Certificate and primary valid ID.',
      'Step 3: Submit online through the Member Portal or visit any PhilHealth Express branch or Local Health Insurance Office (LHIO).',
      'Step 4: Receive your 12-digit PhilHealth Identification Number (PIN).',
      'Step 5: Obtain your Member Data Record (MDR) and cardboard PhilHealth ID card (issued on the same day at LHIO branches).',
      'Step 6: Submit your PIN and MDR copy to your HR upon employment.'
    ],
    stepsTl: [
      'Hakbang 1: I-download at punan ang PhilHealth Member Registration Form (PMRF) mula sa philhealth.gov.ph o mag-fill up sa PhilHealth LHIO.',
      'Hakbang 2: Ihanda ang photocopy ng PSA Birth Certificate at valid ID.',
      'Hakbang 3: Isumite sa pinakamalapit na PhilHealth Express o Local Health Insurance Office (LHIO).',
      'Hakbang 4: Kuhanin ang iyong 12-digit PhilHealth Identification Number (PIN).',
      'Hakbang 5: I-print o tanggapin ang iyong Member Data Record (MDR) at regular PhilHealth ID card.',
      'Hakbang 6: Ibigay ang iyong PIN sa HR department ng iyong papasukang kumpanya.'
    ],
    officialUrl: 'https://www.philhealth.gov.ph/',
    portalUrl: 'https://memberinquiry.philhealth.gov.ph/member/',
    feesEn: 'Registration and regular cardboard PhilHealth ID are FREE. Premium contribution is paid monthly based on your declared income or salary bracket.',
    feesTl: 'LIBRE ang pagpaparehistro at pagkuha ng regular PhilHealth ID at MDR. Ang hulog ay batay sa iyong buwanang sweldo.',
    processingTimeEn: 'Same-day issuance at PhilHealth LHIO / Express branches (usually 1-2 hours depending on queue).',
    processingTimeTl: 'Kadalasan ay nakukuha sa loob ng 1 hanggang 2 oras sa mismong opisina ng PhilHealth.',
    remindersEn: [
      'Declare qualified dependents (spouse without income, minor children under 21, and parents 60+) so they can also use your health benefits.',
      'You only have one PIN throughout your lifetime; do not register multiple times.',
      'Keep your Member Data Record (MDR) updated whenever there is a change of civil status or job.'
    ],
    remindersTl: [
      'Ilista ang mga kwalipikadong dependent (anak na menor de edad, asawa, o magulang na senior) para protektado rin sila sa ospital.',
      'Iisa lamang ang PhilHealth PIN ng bawat tao habang buhay.',
      'I-update ang MDR kapag nagpakasal o lumipat ng trabaho.'
    ],
    commonMistakesEn: [
      'Forgetting to attach the birth certificates of declared dependents.',
      'Using nicknames or misspelled middle names that do not match PSA records.'
    ],
    commonMistakesTl: [
      'Nakalimutang dalhin ang birth certificate ng mga idinedeklarang dependent.',
      'Hindi tugma ang spelling ng pangalan sa PSA certificate.'
    ],
    scamAlertsEn: [
      'PhilHealth does NOT charge fees for issuing your first PhilHealth ID card or PIN.',
      'Never pay online "facilitators" claiming to deliver PVC laminated PhilHealth IDs.',
      'Beware of smishing texts claiming your PhilHealth account has been suspended with a suspicious link.'
    ],
    scamAlertsTl: [
      'Huwag magbayad sa mga online sellers na nag-aalok ng "Rush PhilHealth PVC ID".',
      'Walang bayad ang PhilHealth ID sa opisyal na sangay ng PhilHealth.',
      'Huwag pindutin ang mga kahina-hinalang link sa text message na nagpapakilalang PhilHealth.'
    ],
    dateVerified: 'October 2026',
    firstTimeJobseekerFree: true
  },

  // 3. Pag-IBIG Fund (HDMF)
  {
    id: 'pagibig-guide',
    category: 'social_benefits',
    agencyCode: 'Pag-IBIG',
    agencyName: 'Pag-IBIG Fund (Home Development Mutual Fund)',
    titleEn: 'Pag-IBIG Online Registration & MID Guide',
    titleTl: 'Gabay sa Pagkuha ng Pag-IBIG MID Number at Virtual Pag-IBIG',
    purposeEn: 'Provides affordable housing loans, multi-purpose salary loans, and high-yield savings (Regular Pag-IBIG & MP2 Modified Pag-IBIG 2) for Filipino workers.',
    purposeTl: 'Nagkakaloob ng pautang para sa pabahay, salary loan, at matataas na dibidendo sa ipon (Regular Savings at MP2) para sa bawat manggagawang Pilipino.',
    eligibleEn: [
      'All employees covered by SSS and GSIS (mandatory)',
      'Self-employed individuals earning at least PHP 1,000/month',
      'Overseas Filipino Workers (OFWs)',
      'Voluntary members and students 18 years old and above',
      'First-time job applicants preparing onboarding documents'
    ],
    eligibleTl: [
      'Lahat ng empleyadong sakop ng SSS at GSIS',
      'Mga self-employed at freelance workers',
      'Mga Overseas Filipino Workers (OFW)',
      'Mga voluntary members at estudyanteng may edad 18 pataas',
      'Mga bagong aplikante sa trabaho'
    ],
    requirementsEn: [
      'PSA Birth Certificate details',
      'Active personal email address and mobile number',
      'One valid government-issued ID (National ID, Passport, SSS, etc.)',
      'Employer name and address (if currently employed, or leave blank for new applicants)'
    ],
    requirementsTl: [
      'Impormasyon mula sa PSA Birth Certificate',
      'Aktibong email address at mobile number',
      'Isang valid government-issued ID',
      'Pangalan at opisina ng kumpanya (kung may trabaho na; iwang bakante kung first-time jobseeker)'
    ],
    stepsEn: [
      'Step 1: Go to pagibigfund.gov.ph and click on "Virtual Pag-IBIG".',
      'Step 2: Select "Register" or "Be a Member" to open the Online Membership Registration portal.',
      'Step 3: Complete the Captcha and fill in your name, date of birth, and mother\'s maiden name.',
      'Step 4: Complete the multi-tab form: Member Info, Address, Contacts, Beneficiaries, and Employment Details.',
      'Step 5: Review your entered data, agree to the terms, and submit.',
      'Step 6: Receive your Registration Tracking Number (RTN) via SMS and email.',
      'Step 7: After 2-3 business days, verify and retrieve your permanent 12-digit Pag-IBIG MID Number via text or the Virtual Pag-IBIG portal.'
    ],
    stepsTl: [
      'Hakbang 1: Buksan ang pagibigfund.gov.ph at i-click ang "Virtual Pag-IBIG".',
      'Hakbang 2: Piliin ang "Be a Member" upang pumunta sa Online Membership Registration form.',
      'Hakbang 3: Sagutan ang iyong buong pangalan, petsa ng kapanganakan, at apelyido sa pagkadalaga ng iyong ina.',
      'Hakbang 4: Kumpletuhin ang mga field: Address, Contact details, at Beneficiaries.',
      'Hakbang 5: I-review ang lahat ng impormasyon bago i-submit.',
      'Hakbang 6: Matatanggap mo ang Registration Tracking Number (RTN) sa pamamagitan ng text message.',
      'Hakbang 7: Pagkalipas ng 2 hanggang 3 araw, kunin ang permanenteng 12-digit Pag-IBIG MID Number gamit ang RTN online o via text.'
    ],
    officialUrl: 'https://www.pagibigfund.gov.ph/',
    portalUrl: 'https://www.pagibigfundservices.com/virtualpagibig/',
    feesEn: 'Online registration and Pag-IBIG MID Number generation are 100% FREE. Mandatory monthly savings is PHP 200 (matched by employer). Optional Loyalty Card Plus costs PHP 125 at the branch.',
    feesTl: 'LIBRE ang pagpaparehistro at pagkuha ng MID Number. Ang buwanang hulog sa regular savings ay nagsisimula sa ₱200 (tinutumbasan ng kumpanya). Ang Loyalty Card Plus ay may bayad na ₱125 kapag kinuha sa sangay.',
    processingTimeEn: 'RTN is generated immediately; permanent 12-digit MID number is ready in 2 to 3 working days.',
    processingTimeTl: 'Agad makukuha ang RTN; ang permanenteng 12-digit MID ay handa na sa loob ng 2-3 araw.',
    remindersEn: [
      'Your 12-digit MID number stays with you for life across all future employers.',
      'Once employed, activate your Virtual Pag-IBIG account to view savings dividends and apply for salary loans online.',
      'Consider opening an MP2 (Modified Pag-IBIG 2) account for tax-free, high-dividend voluntary savings.'
    ],
    remindersTl: [
      'Panghabambuhay ang 12-digit MID number kahit lumipat ka ng ibang kumpanya.',
      'Mag-sign up sa Virtual Pag-IBIG upang masubaybayan ang iyong buwanang hulog at taunang dibidendo.',
      'Maaari ka ring mag-ipon sa MP2 program para sa mas mataas na interes na libre sa buwis.'
    ],
    commonMistakesEn: [
      'Confusing the temporary RTN (Registration Tracking Number) with the permanent 12-digit MID Number.',
      'Failing to verify the MID number before giving it to employers.'
    ],
    commonMistakesTl: [
      'Napagkakamalan ang pansamantalang RTN bilang permanenteng MID number.',
      'Maling numero ng cellphone kaya hindi natanggap ang SMS confirmation.'
    ],
    scamAlertsEn: [
      'Pag-IBIG online registration is always free; never pay social media fixers to get a MID number.',
      'MP2 savings can only be credited to official Pag-IBIG accounts or authorized payment channels (GCash, Maya, Landbank). Never send cash to personal accounts.'
    ],
    scamAlertsTl: [
      'Huwag magbayad sa mga online "assistance" para sa Pag-IBIG registration.',
      'Tanging sa mga opisyal na bangko at digital wallet (GCash, Maya) magbayad ng MP2 o loan payment.'
    ],
    dateVerified: 'October 2026',
    firstTimeJobseekerFree: true
  },

  // 4. BIR (Bureau of Internal Revenue)
  {
    id: 'bir-tin-guide',
    category: 'tax_and_id',
    agencyCode: 'BIR',
    agencyName: 'Bureau of Internal Revenue',
    titleEn: 'BIR TIN (Tax Identification Number) Guide',
    titleTl: 'Gabay sa Pagkuha ng BIR TIN at Paggamit ng ORUS Portal',
    purposeEn: 'Assigns a unique 9 or 12-digit Taxpayer Identification Number for tax filing, employment withholding, business operations, and government transactions.',
    purposeTl: 'Nagbibigay ng natatanging Taxpayer Identification Number (TIN) para sa pagbabayad ng buwis, legal na trabaho, negosyo, at mga transaksyon sa pamahalaan.',
    eligibleEn: [
      'New employees in the private or public sector (usually handled by Employer via Form 1902 or ORUS)',
      'First-Time Jobseekers under Republic Act No. 11261 (applying via Form 1904 at their local RDO)',
      'Self-employed individuals, professionals, freelancers, and sole proprietors (Form 1901)',
      'Individuals applying under Executive Order 98 (for driver’s license, passport, bank accounts, scholarship)'
    ],
    eligibleTl: [
      'Mga bagong pasok na empleyado sa kumpanya (kadalasang inaasikaso ng kumpanya via Form 1902)',
      'Mga First-Time Jobseekers sa ilalim ng RA 11261 (gamit ang Form 1904 at Barangay Certificate)',
      'Mga self-employed, freelancer, at negosyante (Form 1901)',
      'Mga aplikante sa ilalim ng EO 98 (para sa passport, driver\'s license, o bangko)'
    ],
    requirementsEn: [
      'BIR Form 1904 (for First-Time Jobseekers/EO 98) or BIR Form 1902 (for newly hired employees)',
      'First-Time Jobseeker Barangay Certification (original and photocopy for RA 11261 applicants)',
      'PSA Birth Certificate or Marriage Certificate (photocopy and original for verification)',
      'At least one valid Government-issued ID with photo and address (PhilSys ID, Passport, etc.)'
    ],
    requirementsTl: [
      'BIR Form 1904 (para sa First-Time Jobseeker o EO 98) o Form 1902 (para sa bagong empleyado)',
      'Orihinal at photocopy ng Barangay Certification sa ilalim ng First-Time Jobseekers Act (RA 11261)',
      'PSA Birth Certificate (photocopy at orihinal)',
      'Isang valid government-issued ID na may litrato at tirahan'
    ],
    stepsEn: [
      'Step 1: Check with your new employer if they will file BIR Form 1902 on your behalf via the BIR ORUS portal (standard practice).',
      'Step 2: If applying yourself as a First-Time Jobseeker under RA 11261, secure a First-Time Jobseeker Certificate from your local Barangay hall.',
      'Step 3: Download and fill out BIR Form 1904 from bir.gov.ph or use the BIR ORUS portal (orus.bir.gov.ph).',
      'Step 4: Go to the Revenue District Office (RDO) that has jurisdiction over your place of residence.',
      'Step 5: Submit your documents to the Officer of the Day / New Business/Registration section.',
      'Step 6: Receive your official TIN and stamped BIR Form 1904. (You can also request a green cardboard BIR TIN ID card).'
    ],
    stepsTl: [
      'Hakbang 1: Alamin sa iyong kumpanya kung sila ang magpaparehistro sa iyo sa BIR via Form 1902 o ORUS.',
      'Hakbang 2: Kung ikaw ay mag-aapply nang mag-isa bilang First-Time Jobseeker, kumuha muna ng First-Time Jobseeker Certificate sa iyong Barangay.',
      'Hakbang 3: I-download at sagutan ang BIR Form 1904 mula sa bir.gov.ph o mag-rehistro sa orus.bir.gov.ph.',
      'Hakbang 4: Magtungo sa Revenue District Office (RDO) na sumasakop sa iyong tirahan.',
      'Hakbang 5: Isumite ang mga dokumento at Barangay Certificate sa BIR officer.',
      'Hakbang 6: Tanggapin ang iyong stamped Form 1904 na naglalaman ng iyong 9-digit na TIN at humingi ng cardboard TIN card.'
    ],
    officialUrl: 'https://www.bir.gov.ph/',
    portalUrl: 'https://orus.bir.gov.ph/',
    feesEn: 'FREE. Issuance of TIN and Form 1904 is free of charge under RA 11261 for first-time jobseekers.',
    feesTl: 'LIBRE. Walang bayad ang pagkuha ng TIN at TIN ID sa BIR.',
    processingTimeEn: 'Same-day issuance at the local RDO (typically 1 to 3 hours).',
    processingTimeTl: 'Sa loob ng parehong araw sa RDO (1 hanggang 3 oras depende sa pila).',
    remindersEn: [
      'CRITICAL: You are legally permitted only ONE TIN in your entire life. Acquiring a second TIN is a criminal offense punishable by fine and imprisonment under the National Internal Revenue Code.',
      'If you already have a TIN from previous years, ask the BIR for a TIN Verification slip instead of applying again.',
      'Always register with the RDO corresponding to your permanent residential address unless instructed by your employer.'
    ],
    remindersTl: [
      'MAHALAGA: Isang beses lamang dapat kumuha ng TIN ang isang tao. Labag sa batas ang pagkakaroon ng dalawang magkaibang TIN.',
      'Kung hindi sigurado kung may TIN ka na, magpa-TIN Verification sa RDO o sa BIR chatbot Revie bago kumuha ng bago.',
      'Sa RDO na sumasakop sa iyong bahay mag-apply.'
    ],
    commonMistakesEn: [
      'Applying for a new TIN when you previously had one from a past student loan or internship.',
      'Going to the wrong RDO branch that doesn\'t cover your barangay/city.'
    ],
    commonMistakesTl: [
      'Kumuha muli ng bagong TIN kahit mayroon na noong nakaraang trabaho.',
      'Pumunta sa maling RDO branch na hindi sumasakop sa iyong tinitirhan.'
    ],
    scamAlertsEn: [
      'NEVER buy "Assistance / Rush TIN ID with verification" on Facebook, TikTok, or Shopee. These TINs are often fake, stolen, or duplicate, which can cause criminal liability.',
      'Only the BIR can officially issue a valid TIN.'
    ],
    scamAlertsTl: [
      'HUWAG BUMILI ng TIN ID sa social media o online shops. Pekeng TIN ang ibinibigay ng mga ito at maaari kang makasuhan.',
      'Tanging sa mismong opisina ng BIR o opisyal na BIR ORUS portal lamang lehitimong makakakuha ng TIN.'
    ],
    dateVerified: 'October 2026',
    firstTimeJobseekerFree: true
  },

  // 5. Philippine National ID (PhilSys)
  {
    id: 'philsys-guide',
    category: 'tax_and_id',
    agencyCode: 'PhilSys',
    agencyName: 'Philippine Statistics Authority - PhilSys',
    titleEn: 'Philippine National ID & ePhilID Registration Guide',
    titleTl: 'Gabay sa Pagkuha ng Philippine National ID at ePhilID',
    purposeEn: 'Serves as the single official foundational identification system for all Filipino citizens and resident aliens, simplifying proof of identity for private and public transactions.',
    purposeTl: 'Nagsisilbing pangunahing pambansang pagkakakilanlan ng lahat ng mamamayang Pilipino at naninirahang dayuhan para sa mas madaling transaksyon.',
    eligibleEn: [
      'All Filipino citizens (from newborns to seniors)',
      'Resident foreign nationals living in the Philippines'
    ],
    eligibleTl: [
      'Lahat ng mamamayang Pilipino (mula sanggol hanggang matatanda)',
      'Mga resident foreign aliens na legal na naninirahan sa Pilipinas'
    ],
    requirementsEn: [
      'PSA-issued Birth Certificate (original and photocopy)',
      'One valid supporting government ID (Passport, SSS, GSIS, Postal ID, PRC, Driver’s License, or Barangay Clearance with photo)',
      'For minors: Parent’s PhilID or National ID registration slip'
    ],
    requirementsTl: [
      'PSA Birth Certificate (orihinal at photocopy)',
      'Katuwang na valid government ID (Passport, Postal ID, Driver’s License, Barangay ID na may litrato)',
      'Para sa mga bata: National ID o registration slip ng magulang'
    ],
    stepsEn: [
      'Step 1: Check the nearest PhilSys registration center (often located in Robinsons, SM, Ayala Malls, or City Halls). Walk-ins are widely accommodated.',
      'Step 2: Bring your PSA Birth Certificate and supporting valid ID.',
      'Step 3: Undergo biometric capture: iris scan, front-facing photograph, and 10-finger fingerprint scan.',
      'Step 4: Receive your PhilSys Transaction Slip containing your 29-digit transaction number. DO NOT LOSE THIS SLIP.',
      'Step 5: While waiting for physical card delivery via Philippine Postal Corporation (PHLPost), you can generate and claim your official paper ePhilID with QR code.',
      'Step 6: Verify the authenticity of your PhilSys QR code anytime via the official PhilSys Check portal (check.philsys.gov.ph).'
    ],
    stepsTl: [
      'Hakbang 1: Magtungo sa pinakamalapit na PhilSys Registration Center (karaniwang nasa SM, Robinsons, Ayala Malls, o munisipyo). Tumatanggap ng walk-in.',
      'Hakbang 2: Dalhin ang iyong PSA Birth Certificate at katuwang na valid ID.',
      'Hakbang 3: I-record ang iyong biometrics: iris scan, litrato ng mukha, at fingerprints ng sampung daliri.',
      'Hakbang 4: Tanggapin ang PhilSys Transaction Slip na may transaction number. Huwag iwawala ito.',
      'Hakbang 5: Habang naghihintay ng physical card delivery mula sa PHLPost, maaari nang kumuha at mag-print ng ePhilID na may parehong legal na bisa.',
      'Hakbang 6: Masusuri ang bisa ng QR code sa check.philsys.gov.ph.'
    ],
    officialUrl: 'https://philsys.gov.ph/',
    portalUrl: 'https://check.philsys.gov.ph/',
    feesEn: 'FREE. Initial registration, ePhilID generation, and first physical card delivery are 100% free of charge.',
    feesTl: 'LIBRE. Walang anumang bayad ang pagpaparehistro, pagkuha ng ePhilID, at delivery ng card.',
    processingTimeEn: 'ePhilID available within a few days to weeks; physical PVC card delivered via PHLPost depending on national printing batches.',
    processingTimeTl: 'Ang ePhilID ay agad makukuha; ang physical ID card ay ihahatid ng PHLPost sa inyong bahay.',
    remindersEn: [
      'Republic Act No. 11055 mandates that both the physical PhilID and the printed ePhilID have equal legal validity. Any bank or establishment that refuses the ePhilID faces administrative penalties.',
      'Do not post your PhilSys Card or QR code on public social media to protect yourself from identity theft.'
    ],
    remindersTl: [
      'Ayon sa batas (RA 11055), pantay ang legal na bisa ng printed ePhilID at physical card. Bawal tanggihan ito ng mga bangko at ahensya.',
      'Huwag i-post sa Facebook o internet ang iyong National ID at QR code upang maiwasan ang identity theft.'
    ],
    commonMistakesEn: [
      'Discarding or losing the PhilSys transaction slip given after biometrics capture.',
      'Laminating the paper ePhilID in a way that scratches or damages the QR code.'
    ],
    commonMistakesTl: [
      'Pagtatapon sa papel na transaction slip pagkatapos ng biometrics.',
      'Maling pag-laminate sa ePhilID na nagiging sanhi ng pagkasira ng QR code.'
    ],
    scamAlertsEn: [
      'PSA PhilSys registration is 100% free. Anyone asking for payment or "rush card printing" is a scammer.',
      'The PSA will NEVER send text messages asking for your bank PINs, OTPs, or passwords.'
    ],
    scamAlertsTl: [
      'Walang bayad ang National ID. Mag-ingat sa mga naniningil para raw sa "rush printing".',
      'Hindi magpapadala ang PSA ng text na humihingi ng bank details o OTP.'
    ],
    dateVerified: 'October 2026',
    firstTimeJobseekerFree: true
  },

  // 6. PSA Certificates
  {
    id: 'psa-certificates-guide',
    category: 'tax_and_id',
    agencyCode: 'PSA',
    agencyName: 'Philippine Statistics Authority',
    titleEn: 'PSA Birth, Marriage, & CENOMAR Online Ordering Guide',
    titleTl: 'Gabay sa Pagkuha ng PSA Birth Certificate at CENOMAR Online',
    purposeEn: 'Issues official civil registry documents on security paper (SECPA), including Certificate of Live Birth, Marriage Certificate, Certificate of No Marriage (CENOMAR), and Death Certificate.',
    purposeTl: 'Nag-iisyu ng mga opisyal na sertipiko ng kapanganakan, kasal, CENOMAR, at kamatayan gamit ang opisyal na security paper ng pamahalaan.',
    eligibleEn: [
      'The document owner',
      'Spouse, parent, direct descendants, or legal guardian',
      'Authorized representative with an official signed authorization letter and valid IDs'
    ],
    eligibleTl: [
      'Mismong may-ari ng dokumento',
      'Asawa, magulang, anak, o legal guardian',
      'Awtorisadong kinatawan na may authorization letter at valid IDs'
    ],
    requirementsEn: [
      'Complete name of document owner, father\'s name, and mother\'s full maiden name',
      'Exact date and place of birth/marriage',
      'Purpose of request (employment, school, passport, etc.)',
      'Delivery address in the Philippines and contact number',
      'One valid government ID upon courier delivery'
    ],
    requirementsTl: [
      'Kumpletong pangalan ng may-ari, pangalan ng ama, at apelyido sa pagkadalaga ng ina',
      'Eksaktong petsa at lugar kung saan ipinanganak o ikinasal',
      'Dahilan ng pagkuha (trabaho, pasaporte, pag-aaral)',
      'Eksaktong delivery address at cellphone number',
      'Isang valid ID na ipapakita sa courier pagdating ng delivery'
    ],
    stepsEn: [
      'Step 1: Open the official ordering portals: PSA Serbilis (psaserbilis.com.ph) or PSA Helpline (psahelpline.ph).',
      'Step 2: Choose the document type: Birth Certificate, Marriage Certificate, CENOMAR, or Death Certificate.',
      'Step 3: Accurately input the required personal details matching civil registry records.',
      'Step 4: Enter your Philippine residential or office delivery address.',
      'Step 5: Pay through official online payment channels: GCash, Maya, Bayad Center, Landbank, or 7-Eleven.',
      'Step 6: Receive your official tracking number and await door-to-door delivery by authorized courier.'
    ],
    stepsTl: [
      'Hakbang 1: Pumunta sa opisyal na website: PSA Serbilis (psaserbilis.com.ph) o PSA Helpline (psahelpline.ph).',
      'Hakbang 2: Piliin ang uri ng dokumento: Birth Certificate, Marriage, CENOMAR, o Death Certificate.',
      'Hakbang 3: Ilagay nang tumpak ang mga impormasyon ayon sa talaan ng Local Civil Registrar.',
      'Hakbang 4: Ilagay ang iyong kumpletong delivery address.',
      'Hakbang 5: Magbayad gamit ang GCash, Maya, Bayad Center, Landbank, o 7-Eleven.',
      'Hakbang 6: I-save ang tracking number at hintayin ang delivery sa bahay.'
    ],
    officialUrl: 'https://psa.gov.ph/',
    portalUrl: 'https://www.psaserbilis.com.ph/',
    feesEn: 'PSA Serbilis: PHP 330 per copy for Birth/Marriage/Death Certificate; PHP 430 per copy for CENOMAR (inclusive of door-to-door delivery). At walk-in PSA CRS outlets: PHP 155 for Birth/Marriage, PHP 210 for CENOMAR.',
    feesTl: 'PSA Serbilis Online: ₱330 bawat kopya ng Birth/Marriage; ₱430 para sa CENOMAR (kasama na ang delivery). Sa walk-in PSA CRS Outlet: ₱155 para sa Birth/Marriage, ₱210 para sa CENOMAR.',
    processingTimeEn: 'Metro Manila: 3 to 5 working days; Provinces: 6 to 8 working days. Same-day if processed at walk-in PSA CRS outlets with appointment.',
    processingTimeTl: 'Metro Manila: 3 hanggang 5 araw; Probinsya: 6 hanggang 8 araw. Sa walk-in CRS outlet: parehong araw kung may appointment.',
    remindersEn: [
      'Under the First Time Jobseekers Assistance Act (RA 11261), walk-in applicants at local civil registrars can request one free copy of local birth record when presenting their Barangay certificate.',
      'The receiver must present an original valid ID to the courier upon delivery.',
      'PSA birth certificates on security paper have NO expiration date unless there are subsequent legal amendments.'
    ],
    remindersTl: [
      'Walang expiration ang PSA Birth Certificate hangga\'t nababasa at walang legal na pagbabago sa iyong pangalan.',
      'Dapat mismong ikaw o may authorization letter ang tatanggap sa courier.',
      'Tiyaking tama ang spelling ng pangalan ng magulang bago i-submit ang bayad.'
    ],
    commonMistakesEn: [
      'Entering misspelled maiden names of mother.',
      'Ordering via unverified third-party websites that charge double or triple the official fee.'
    ],
    commonMistakesTl: [
      'Maling spelling ng middle name o apelyido sa pagkadalaga ng ina.',
      'Pag-order sa mga pekeng website na naniningil nang sobra-sobra.'
    ],
    scamAlertsEn: [
      'Only use the official URLs: psaserbilis.com.ph or psahelpline.ph. Beware of lookalike domains.',
      'Beware of scammers offering "tampered or expedited PSA certificates". Submitting fake civil documents is punishable under Article 172 of the Revised Penal Code.'
    ],
    scamAlertsTl: [
      'Mag-ingat sa mga pekeng website. Tanging sa psaserbilis.com.ph o psahelpline.ph lamang mag-order.',
      'Huwag tangkilikin ang mga nagbebenta ng pekeng PSA papers; ito ay may mabigat na parusang kulong.'
    ],
    dateVerified: 'October 2026',
    firstTimeJobseekerFree: false
  },

  // 7. NBI Clearance
  {
    id: 'nbi-clearance-guide',
    category: 'clearances',
    agencyCode: 'NBI',
    agencyName: 'National Bureau of Investigation',
    titleEn: 'NBI Clearance Online Appointment & Renewal Guide',
    titleTl: 'Gabay sa NBI Clearance Online Appointment, Renewal, at Libreng First-Time Jobseeker',
    purposeEn: 'Certifies that an individual has no derogatory record or pending criminal case filed in the Philippines. Mandatory for employment, travel abroad, and official business.',
    purposeTl: 'Nagpapatunay na walang criminal case o derogatory record ang isang tao sa Pilipinas. Kailangan sa trabaho, lisensya, at pangingibang-bansa.',
    eligibleEn: [
      'All citizens applying for private or government employment',
      'First-Time Jobseekers (entitled to ONE FREE clearance under RA 11261)',
      'Individuals renewing an existing or expired clearance'
    ],
    eligibleTl: [
      'Lahat ng mamamayang nag-aapply sa trabaho o negosyo',
      'Mga First-Time Jobseekers (LIBRE ang unang clearance alinsunod sa RA 11261)',
      'Mga may dati nang NBI clearance na nais mag-renew'
    ],
    requirementsEn: [
      'Two (2) valid government-issued IDs (PhilID/National ID, Passport, Voter’s ID, Driver’s License, Postal ID, SSS, UMID, PRC)',
      'Barangay Certification under RA 11261 (ORIGINAL) if claiming the First-Time Jobseeker FREE fee benefit',
      'Printed NBI Payment / Reference Slip or QR code',
      'Old NBI Clearance number (if applying for renewal)'
    ],
    requirementsTl: [
      'Dalawang (2) valid government ID (National ID, Passport, Postal ID, Voter\'s ID, Driver\'s License, UMID)',
      'Orihinal na Barangay Certification sa ilalim ng First-Time Jobseekers Act (RA 11261) kung gustong makuha nang LIBRE',
      'Printed Reference Number o QR code mula sa NBI online portal',
      'Lumang NBI clearance number kung renewal'
    ],
    stepsEn: [
      'Step 1: Go to the official portal: clearance.nbi.gov.ph and register your account or sign in.',
      'Step 2: If you are a First-Time Jobseeker, check the First Time Jobseeker box and confirm you have your original Barangay Certificate.',
      'Step 3: Complete your Applicant Information (ensure full name and birthdate match your PSA birth certificate).',
      'Step 4: Click "Apply for Clearance", select your preferred NBI Branch, and choose the appointment date and time slot.',
      'Step 5: If not exempt under RA 11261, select payment method (GCash, Maya, Bayad Center, or 7-Eleven) and pay the fee using the Reference Number.',
      'Step 6: On your appointment day, arrive at the chosen NBI branch with your 2 valid IDs, printed reference number (and Barangay certificate if free).',
      'Step 7: Undergo photo and biometric fingerprint capture. If there is NO "HIT", your printed clearance is released within minutes.'
    ],
    stepsTl: [
      'Hakbang 1: Buksan ang official portal sa clearance.nbi.gov.ph at mag-register o mag-login.',
      'Hakbang 2: Kung ikaw ay First-Time Jobseeker, i-tick ang First Time Jobseeker option.',
      'Hakbang 3: Punan nang wasto ang iyong personal profile alinsunod sa iyong PSA Birth Certificate.',
      'Hakbang 4: Piliin ang "Apply for Clearance", piliin ang pinakamalapit na NBI branch, petsa, at oras ng appointment.',
      'Hakbang 5: Kung regular applicant, bayaran ang reference number sa GCash, Maya, o 7-Eleven. Kung first-time jobseeker, libre ito.',
      'Hakbang 6: Pumunta sa NBI branch sa araw ng appointment dala ang 2 valid IDs at reference slip.',
      'Hakbang 7: Kunan ng litrato at fingerprints. Kapag walang "HIT", mai-print at maibibigay agad ang iyong NBI clearance.'
    ],
    officialUrl: 'https://nbi.gov.ph/',
    portalUrl: 'https://clearance.nbi.gov.ph/',
    appointmentUrl: 'https://clearance.nbi.gov.ph/',
    feesEn: 'FREE for qualified First-Time Jobseekers under RA 11261. Regular fee: PHP 130 + PHP 25 e-payment service fee (Total: PHP 155). Door-to-door renewal option: PHP 355.',
    feesTl: 'LIBRE para sa First-Time Jobseekers na may Barangay Certificate. Regular fee: ₱130 + ₱25 e-payment fee (Kabuuang ₱155). Door-to-door delivery renewal: ₱355.',
    processingTimeEn: 'Same-day release (approx. 20-45 minutes) if with NO HIT. If with "HIT" (namesake record), processing takes 5 to 10 working days for verification.',
    processingTimeTl: 'Parehong araw makukuha kung walang "HIT". Kung may kapangalan (HIT), babalikan ito pagkalipas ng 5 hanggang 10 araw ng pagsusuri.',
    remindersEn: [
      'No appointment, no entry policy is strictly enforced. Never go to an NBI branch without an online booking reference number.',
      'If you have a "HIT", do not panic; it only means someone with a similar name has a record and NBI needs to verify you are not that person.',
      'Dress code: Sleeveless shirts, shorts, and slippers are strictly prohibited in government premises.'
    ],
    remindersTl: [
      'Mahigpit na ipinapatupad ang "No Appointment, No Entry". Mag-book muna online bago pumunta sa branch.',
      'Huwag matakot kapag may "HIT"; ibig sabihin lamang ay may kapangalan ka at kailangan lang beripikahin na hindi ikaw ang may kaso.',
      'Sundin ang tamang dress code: bawal ang sando, shorts, at tsinelas sa tanggapan ng NBI.'
    ],
    commonMistakesEn: [
      'Paying without noting the 10-digit NBI reference number.',
      'Bringing photocopies only instead of original valid IDs.',
      'Paying extra to fixers outside the compound who promise "No Hit".'
    ],
    commonMistakesTl: [
      'Nakalimutang itala ang reference number bago magbayad sa bayad center.',
      'Pekeng photocopy lamang ng ID ang dinala sa halip na orihinal.',
      'Nagbayad sa fixer sa labas ng NBI na nangakong walang "hit".'
    ],
    scamAlertsEn: [
      'NO ONE can remove an NBI "HIT" for a fee. Fixers promising to erase hits are running criminal scams.',
      'Always pay only through official partner channels indicated on clearance.nbi.gov.ph.'
    ],
    scamAlertsTl: [
      'WALANG NAKAKATANGGAL NG "HIT" kapalit ng pera. Panloloko ang mga fixer na nangangakong aalisin ang hit mo.',
      'Tanging sa mga opisyal na channel na nasa portal lamang magbayad.'
    ],
    dateVerified: 'October 2026',
    firstTimeJobseekerFree: true
  },

  // 8. National Police Clearance (NPCS)
  {
    id: 'police-clearance-guide',
    category: 'clearances',
    agencyCode: 'PNP',
    agencyName: 'Philippine National Police - NPCS',
    titleEn: 'National Police Clearance System (NPCS) Guide',
    titleTl: 'Gabay sa National Police Clearance (NPCS) at Libreng Clearance sa RA 11261',
    purposeEn: 'Certifies that an applicant has no active criminal record across all PNP nationwide databases. A key requirement for local employment and licenses.',
    purposeTl: 'Nagpapatunay na walang talaan ng krimen o warrant of arrest sa anumang presinto ng PNP sa buong Pilipinas.',
    eligibleEn: [
      'Filipino citizens applying for employment or local requirements',
      'First-Time Jobseekers (eligible for 1 free clearance under RA 11261)'
    ],
    eligibleTl: [
      'Lahat ng mamamayang Pilipino na nangangailangan ng clearance para sa trabaho',
      'Mga First-Time Jobseekers na may Barangay Certificate'
    ],
    requirementsEn: [
      'Two (2) valid government-issued IDs (National ID, Passport, SSS, PhilHealth, Postal ID, PRC, or Voter’s ID)',
      'Barangay Certificate of First-Time Jobseeker (ORIGINAL) for free clearance under RA 11261',
      'Official NPCS online reference number',
      'Official receipt of Landbank / payment confirmation (if not free)'
    ],
    requirementsTl: [
      'Dalawang (2) valid government-issued IDs',
      'Orihinal na Barangay Certificate para sa First-Time Jobseekers kung nais ng libreng clearance',
      'NPCS Online Reference Number',
      'Resibo ng bayad mula sa Landbank o online partner (kung hindi first-time jobseeker)'
    ],
    stepsEn: [
      'Step 1: Access the official PNP portal at pnpclearance.ph and register an account.',
      'Step 2: Sign in, verify your email, and fill out your complete personal background information.',
      'Step 3: Click "Clearance Application", select your preferred Police Station, and choose an appointment date.',
      'Step 4: If not under RA 11261, choose Landbank Link.BizPortal and pay via Landbank, GCash, or Maya.',
      'Step 5: Go to your chosen Police Station on the appointed date with your 2 valid IDs and reference slip.',
      'Step 6: Proceed to biometrics, photo capture, and signature verification.',
      'Step 7: Receive your laminated National Police Clearance on the same day.'
    ],
    stepsTl: [
      'Hakbang 1: Buksan ang pnpclearance.ph at gumawa ng account.',
      'Hakbang 2: Mag-login at kumpletuhin ang iyong personal profile.',
      'Hakbang 3: Piliin ang "Clearance Application", piliin ang police station na malapit sa iyo, at mag-set ng petsa.',
      'Hakbang 4: Magbayad sa Landbank Link.BizPortal gamit ang GCash o Maya (o ipresenta ang Barangay Certificate kung first-time jobseeker).',
      'Hakbang 5: Pumunta sa istasyon ng pulis sa napiling araw dala ang mga ID.',
      'Hakbang 6: Magpa-picture, fingerprint biometrics, at pirma.',
      'Hakbang 7: Tanggapin ang iyong opisyal na National Police Clearance.'
    ],
    officialUrl: 'https://pnpclearance.ph/',
    portalUrl: 'https://pnpclearance.ph/',
    appointmentUrl: 'https://pnpclearance.ph/',
    feesEn: 'FREE under RA 11261 for First-Time Jobseekers. Regular fee: PHP 150 + PHP 30 transaction fee (Total: PHP 180).',
    feesTl: 'LIBRE para sa First-Time Jobseekers na may Barangay Certificate. Regular fee: ₱150 + ₱30 online convenience fee (Kabuuang ₱180).',
    processingTimeEn: 'Same-day release (approx. 15 to 30 minutes at the police station).',
    processingTimeTl: 'Sa parehong araw (humigit-kumulang 15 hanggang 30 minuto sa istasyon).',
    remindersEn: [
      'A National Police Clearance is distinct from a local municipal police clearance; the NPCS covers the entire country.',
      'Clearance validity is six (6) months from the date of issue.',
      'Ensure the police station you selected has NPCS biometric equipment (the portal lists participating stations).'
    ],
    remindersTl: [
      'Iba ang National Police Clearance sa lumang local police clearance dahil buong bansa ang saklaw ng NPCS.',
      'May bisa itong anim (6) na buwan mula sa araw ng pagkakakuha.',
      'Pumunta sa mismong police station na pinili mo sa online appointment.'
    ],
    commonMistakesEn: [
      'Showing up at a police station without booking an online slot in advance on pnpclearance.ph.',
      'Bringing only 1 ID instead of the required 2 valid identification cards.'
    ],
    commonMistakesTl: [
      'Pumunta sa presinto nang walang online reservation sa pnpclearance.ph.',
      'Isang ID lamang ang dinala sa halip na dalawang valid IDs.'
    ],
    scamAlertsEn: [
      'Avoid unauthorized individuals offering "Express Police Clearance without appearance". Appearance for biometrics is strictly required by law.'
    ],
    scamAlertsTl: [
      'Bawal ang fixer na nangangakong hindi mo na kailangang pumunta sa presinto. Personal na biometrics ang kailangan ayon sa batas.'
    ],
    dateVerified: 'October 2026',
    firstTimeJobseekerFree: true
  },

  // 9. Philippine Passport (DFA)
  {
    id: 'dfa-passport-guide',
    category: 'travel_and_transport',
    agencyCode: 'DFA',
    agencyName: 'Department of Foreign Affairs',
    titleEn: 'DFA Philippine Passport Application & Renewal Guide',
    titleTl: 'Gabay sa Pagkuha at Pag-renew ng Philippine Passport sa DFA',
    purposeEn: 'Issues the official biometric travel document and identity credential for Filipino citizens traveling internationally.',
    purposeTl: 'Nagkakaloob ng opisyal na biometric travel passport para sa mga Pilipinong maglalakbay o magtatrabaho sa ibang bansa.',
    eligibleEn: [
      'Filipino citizens by birth or naturalization',
      'Courtesy Lane access available for: OFWs with verified contracts, Senior Citizens (with 1 companion), PWDs, Pregnant women, and Children 7 years old and below with parents.'
    ],
    eligibleTl: [
      'Lahat ng mamamayang Pilipino',
      'Courtesy Lane (walang appointment kinakailangan sa piling branches) para sa: OFW, Senior Citizen, PWD, Buntis, at batang 7 taong gulang pababa kasama ang magulang.'
    ],
    requirementsEn: [
      'Confirmed online appointment booking slip (printed)',
      'Accomplished DFA Application Form',
      'PSA-authenticated Birth Certificate on Security Paper (original and photocopy)',
      'At least one (1) accepted Primary Valid Government ID with photo and signature (PhilSys National ID, SSS/UMID, Driver’s License, PRC ID, Voter’s ID)',
      'For Married Women using husband’s surname: PSA Marriage Certificate',
      'For Passport Renewal: Old passport and photocopy of data page'
    ],
    requirementsTl: [
      'Printed DFA online appointment confirmation slip',
      'Nasagutang DFA Application Form mula sa website',
      'Orihinal at photocopy ng PSA Birth Certificate sa security paper',
      'Isang (1) katanggap-tanggap na Primary Valid ID (National ID, UMID, Driver\'s License, PRC ID, Voter\'s ID)',
      'Para sa babaeng may asawa na gumagamit ng apelyido ng asawa: PSA Marriage Certificate',
      'Para sa Renewal: Lumang passport at photocopy ng data page'
    ],
    stepsEn: [
      'Step 1: Visit the official DFA Passport Appointment portal at passport.gov.ph.',
      'Step 2: Choose "Schedule an Appointment" and select Individual or Group.',
      'Step 3: Select your preferred DFA Consular Office (CO) or Temporary Off-Site Consular Outpost (TOPS).',
      'Step 4: Choose your date and time slot and accurately enter your personal details.',
      'Step 5: Select your processing type (Regular or Expedited) and pay via authorized payment centers within the payment window.',
      'Step 6: Print your appointment confirmation email containing the application form and checklist.',
      'Step 7: Arrive at your DFA Consular Office 15-30 minutes before your schedule with complete original and photocopy requirements.',
      'Step 8: Complete biometrics and photo capture. Choose pick-up or courier delivery to your address.'
    ],
    stepsTl: [
      'Hakbang 1: Buksan ang official portal sa passport.gov.ph.',
      'Hakbang 2: Piliin ang "Schedule an Appointment" (Individual o Group).',
      'Hakbang 3: Piliin ang pinakamalapit na DFA Consular Office (CO) o mall-based outpost.',
      'Hakbang 4: Piliin ang petsa at oras ng appointment at ilagay ang iyong mga detalye.',
      'Hakbang 5: Piliin kung Regular o Expedited processing at bayaran sa bayad center sa loob ng ibinigay na oras.',
      'Hakbang 6: I-print ang appointment confirmation packet na ipinadala sa iyong email.',
      'Hakbang 7: Dumating sa DFA 15-30 minuto bago ang iskedyul dala ang mga orihinal na dokumento at photocopy.',
      'Hakbang 8: Kunan ng litrato at biometrics, at piliin kung ipapadala sa bahay o kukunin sa branch.'
    ],
    officialUrl: 'https://dfa.gov.ph/',
    portalUrl: 'https://passport.gov.ph/',
    appointmentUrl: 'https://passport.gov.ph/',
    feesEn: 'Regular Processing (Consular Office): PHP 950. Expedited Processing: PHP 1,200. Optional Courier Delivery: approx. PHP 150. (Note: TOPS off-site locations add PHP 250 convenience fee).',
    feesTl: 'Regular Processing: ₱950. Expedited Processing: ₱1,200. Delivery sa bahay: humigit-kumulang ₱150. (Sa TOPS mall outposts ay may dagdag na ₱250).',
    processingTimeEn: 'Regular: 10 to 12 working days in Metro Manila (12-15 in provinces). Expedited: 6 to 8 working days.',
    processingTimeTl: 'Regular: 10 hanggang 12 araw sa Metro Manila. Expedited: 6 hanggang 8 araw.',
    remindersEn: [
      'Passport appointment slots on passport.gov.ph are FREE. Do NOT buy appointment slots from social media fixers.',
      'Avoid colored contact lenses, facial piercings, and heavy cosmetics for the photo capture.',
      'Dress appropriately: collared shirts or smart casual attire are recommended.'
    ],
    remindersTl: [
      'LIBRE ang appointment slots sa passport.gov.ph. Bawal ibenta at bawal bilhin ang mga appointment slot.',
      'Bawal ang may kulay na contact lenses, hikaw sa ilong/labi, at makapal na makeup sa picture taking.',
      'Magsuot ng may kuwelyo o maayos na kasuotan.'
    ],
    commonMistakesEn: [
      'Not paying within the 24-48 hour window after booking, which automatically cancels the reserved slot.',
      'Discrepancies between the spelling on the birth certificate and IDs.'
    ],
    commonMistakesTl: [
      'Hindi nabayaran sa bayad center sa takdang oras kaya nakansela ang reservation.',
      'May maling titik sa spelling ng pangalan na hindi tugma sa PSA birth certificate.'
    ],
    scamAlertsEn: [
      'DFA strictly warns that Facebook pages selling "Rush Passport Appointments" are illicit operations. DFA cancels slots linked to fraudulent scalpers.',
      'Always pay only at official payment partners (Bayad Center, 7-Eleven, GCash, Landbank).'
    ],
    scamAlertsTl: [
      'Mahigpit na nagbabala ang DFA laban sa mga nagbebenta ng passport slot sa Facebook. Kinakansela ng DFA ang mga slot na nanggaling sa scalpers.',
      'Sa opisyal na bayad centers lamang magbayad ng reference code.'
    ],
    dateVerified: 'October 2026',
    firstTimeJobseekerFree: false
  },

  // 10. LTO Services and Driver's License
  {
    id: 'lto-license-guide',
    category: 'travel_and_transport',
    agencyCode: 'LTO',
    agencyName: 'Land Transportation Office',
    titleEn: 'LTO Driver’s License, Student Permit, & LTMS Guide',
    titleTl: 'Gabay sa Pagkuha ng LTO Student Permit, Lisensya, at Paggamit ng LTMS Portal',
    purposeEn: 'Issues Student Permits, Non-Professional, and Professional Driver’s Licenses, and administers vehicle registration and driver education across the Philippines.',
    purposeTl: 'Nagkakaloob ng Student Permit at Driver\'s License para sa legal na pagmamaneho ng motor o sasakyan, at nagpapatupad ng batas-trapiko.',
    eligibleEn: [
      'Student Permit: Filipino citizens at least 16 years of age',
      'Non-Professional Driver’s License: at least 17 years old with an active Student Permit held for at least 1 month',
      'Professional Driver’s License: at least 18 years old with Student Permit held for at least 6 months (or Non-Pro held for at least 1 year)'
    ],
    eligibleTl: [
      'Student Permit: May edad 16 pataas',
      'Non-Professional License: May edad 17 pataas at may hawak na Student Permit nang hindi bababa sa 1 buwan',
      'Professional License: May edad 18 pataas at may sapat na karanasan ayon sa panuntunan ng LTO'
    ],
    requirementsEn: [
      'Active LTO LTMS Online Account (portal.lto.gov.ph)',
      'Theoretical Driving Course (TDC) Certificate (15-hour course from LTO-accredited driving school or free LTO Driver\'s Education Center)',
      'Practical Driving Course (PDC) Certificate (for Non-Pro/Pro license upgrade)',
      'PSA-authenticated Birth Certificate (original and photocopy)',
      'LTO-accredited Medical Certificate (electronically transmitted by clinic)',
      'Valid Government ID or School ID'
    ],
    requirementsTl: [
      'Aktibong LTMS Portal Account (portal.lto.gov.ph)',
      'Certificate ng 15-hour Theoretical Driving Course (TDC) mula sa accredited driving school o libre sa LTO Driver\'s Education Center',
      'Practical Driving Course (PDC) Certificate (kapag kukuha na ng Non-Pro/Pro)',
      'PSA Birth Certificate (orihinal at photocopy)',
      'Medical Certificate mula sa LTO-accredited clinic (electronic na ipinapadala sa LTMS)',
      'Valid Government ID o School ID'
    ],
    stepsEn: [
      'Step 1: Register for a free LTMS account at portal.lto.gov.ph and complete your client profile.',
      'Step 2: Complete the 15-hour Theoretical Driving Course (TDC) at an LTO-accredited driving school or your regional LTO training center.',
      'Step 3: Secure an LTO-accredited medical certificate from a clinic adjacent to or affiliated with LTO.',
      'Step 4: Book an online appointment or walk into your designated LTO District Office / Licensing Center.',
      'Step 5: Submit application documents and verify biometrics (photo, fingerprints, digital signature).',
      'Step 6: Pay the Student Permit application fee and receive your official Student Permit slip.',
      'Step 7: After 30 days of practicing with a licensed driver, complete the Practical Driving Course (PDC), pass the automated computer exam and driving test to obtain your official Driver’s License card.'
    ],
    stepsTl: [
      'Hakbang 1: Gumawa ng libreng LTMS account sa portal.lto.gov.ph at itala ang iyong 15-digit Client ID.',
      'Hakbang 2: Tapusin ang 15-hour Theoretical Driving Course (TDC) sa accredited driving school o sa libreng LTO DEC.',
      'Hakbang 3: Magpa-medical exam sa LTO-accredited clinic.',
      'Hakbang 4: Mag-book ng appointment sa LTMS o mag-walk in sa LTO Licensing Center.',
      'Hakbang 5: Isumite ang mga dokumento, kunan ng litrato, fingerprints, at pirma.',
      'Hakbang 6: Bayaran ang bayarin sa cashier at tanggapin ang iyong Student Permit.',
      'Hakbang 7: Pagkalipas ng 30 araw, mag-enroll sa Practical Driving Course (PDC), ipasa ang automated exam at driving test para makuha ang iyong lisensya.'
    ],
    officialUrl: 'https://lto.gov.ph/',
    portalUrl: 'https://portal.lto.gov.ph/',
    appointmentUrl: 'https://portal.lto.gov.ph/',
    feesEn: 'Student Permit: Application Fee PHP 100 + Student Permit Fee PHP 150 (Total: PHP 250). Medical exam: approx. PHP 450-500. New Non-Pro License: Application Fee PHP 100 + License Fee PHP 585 (Total: PHP 685). Renewal without penalty: PHP 585.',
    feesTl: 'Student Permit: Application Fee ₱100 + Permit Fee ₱150 (Kabuuang ₱250). Medical exam: humigit-kumulang ₱450-₱500. Bagong Non-Pro: Application ₱100 + License Fee ₱585 (Kabuuang ₱685). Renewal: ₱585.',
    processingTimeEn: 'Student Permit: Same day (1 to 2 hours). New License: Same day upon passing the written exam and practical test.',
    processingTimeTl: 'Student Permit: Sa loob ng 1 hanggang 2 oras. Lisensya: Parehong araw kapag naipasa ang computer exam at practical driving test.',
    remindersEn: [
      'Drivers renewing their license must pass the Comprehensive Driver\'s Education (CDE) online exam on portal.lto.gov.ph for free before going to the branch.',
      'Drivers with zero traffic violations are eligible for a 10-year validity driver\'s license.',
      'Always keep your LTMS Client ID and password handy.'
    ],
    remindersTl: [
      'Para sa renewal, sagutan ang libreng Comprehensive Driver\'s Education (CDE) exam sa LTMS portal bago pumunta sa sangay.',
      'Ang mga drayber na walang traffic violation ay kwalipikado sa 10-year validity license.',
      'Huwag kalimutan ang iyong LTMS Client ID.'
    ],
    commonMistakesEn: [
      'Attending a non-accredited driving school whose certificates cannot be uploaded to LTMS.',
      'Allowing an unaccredited clinic to do medical testing without electronic transmission to LTO.'
    ],
    commonMistakesTl: [
      'Pag-enroll sa driving school na hindi accredited ng LTO.',
      'Hindi na-upload ng clinic ang medical certificate sa LTMS system.'
    ],
    scamAlertsEn: [
      'WARNING: Any "No appearance / Non-appearance LTO Driver\'s License" advertised online is 100% FAKE. Driving with a fake license leads to immediate arrest, impounding, and hefty fines.',
      'Only transact through your personal LTMS portal and at official LTO premises.'
    ],
    scamAlertsTl: [
      'BABALA: PEKE ang lahat ng "Non-appearance LTO License" na ibinebenta online. Kulong at mabigat na multa ang aabutin ng mahuhuling may pekeng lisensya.',
      'Tanging sa LTO branch at sariling LTMS portal lamang kumuha ng lisensya.'
    ],
    dateVerified: 'October 2026',
    firstTimeJobseekerFree: false
  },

  // 11. First Time Jobseekers Act (RA 11261) Spotlight Guide
  {
    id: 'ra11261-guide',
    category: 'clearances',
    agencyCode: 'RA 11261',
    agencyName: 'First Time Jobseekers Assistance Act (RA 11261)',
    titleEn: 'First Time Jobseekers Assistance Act (RA 11261) Guide',
    titleTl: 'Gabay sa Libreng Pre-Employment Documents sa ilalim ng RA 11261',
    purposeEn: 'Exempts first-time Filipino jobseekers from paying government fees for essential pre-employment documentation, including police clearance, NBI clearance, barangay clearance, medical certificates from public hospitals, and TIN.',
    purposeTl: 'Naglilibre sa mga bagong naghahanap ng trabaho mula sa pagbabayad ng bayarin sa mga kinakailangang dokumento tulad ng NBI clearance, Police clearance, Barangay clearance, at BIR TIN.',
    eligibleEn: [
      'Fresh graduates from college, senior high school, or vocational / TVET courses',
      'Out-of-school youth applying for their very first employment',
      'Any Filipino citizen seeking employment for the first time'
    ],
    eligibleTl: [
      'Mga bagong graduate sa kolehiyo, senior high school, o TESDA/vocational course',
      'Mga out-of-school youth na magsisimulang magtrabaho',
      'Sinumang mamamayang Pilipino na maghahanap ng trabaho sa unang pagkakataon'
    ],
    requirementsEn: [
      'Barangay Certification stating you are a First-Time Jobseeker (issued by your local Barangay)',
      'Oath of Undertaking signed before the Barangay Chairman',
      'Valid School ID or proof of graduation / residency in the barangay'
    ],
    requirementsTl: [
      'Barangay Certification na nagpapatunay na ikaw ay First-Time Jobseeker',
      'Panunumpa (Oath of Undertaking) na nilagdaan sa harap ng Barangay Kapitan',
      'Valid School ID o katibayan ng pagtatapos at paninirahan sa barangay'
    ],
    stepsEn: [
      'Step 1: Go to your local Barangay Hall where you reside for at least 6 months.',
      'Step 2: Request a "First-Time Jobseeker Certificate under RA 11261" and sign the Oath of Undertaking.',
      'Step 3: Receive your signed Barangay Certificate (free of charge).',
      'Step 4: Present this original certificate when applying online or in person for NBI Clearance, Police Clearance, Barangay Clearance, and BIR TIN.',
      'Step 5: The participating government agency will waive the document fee.'
    ],
    stepsTl: [
      'Hakbang 1: Pumunta sa inyong Barangay Hall.',
      'Hakbang 2: Humiling ng "First-Time Jobseeker Certificate sa ilalim ng RA 11261" at lumagda sa Panunumpa.',
      'Hakbang 3: Kunin ang orihinal na sertipiko na walang bayad.',
      'Hakbang 4: Ipakita ang orihinal na sertipiko sa pag-apply sa NBI, PNP Police Clearance, at BIR TIN.',
      'Hakbang 5: Ililibre ka ng mga ahensya sa bayarin para sa isang kopya ng dokumento.'
    ],
    officialUrl: 'https://www.officialgazette.gov.ph/2019/04/10/republic-act-no-11261/',
    feesEn: 'FREE. Both the Barangay Certificate and the covered pre-employment documents are free of government fees for one issuance.',
    feesTl: 'LIBRE. Walang bayad ang sertipiko at ang mga sakop na pre-employment documents para sa unang issuance.',
    processingTimeEn: 'Barangay Certificate is usually issued within 10 to 30 minutes at your barangay hall.',
    processingTimeTl: 'Nailalabas sa loob ng 10 hanggang 30 minuto sa inyong barangay hall.',
    remindersEn: [
      'The waiver can only be availed ONCE per applicant across their lifetime.',
      'The Barangay certificate is valid for one (1) year from date of issuance.',
      'Misrepresenting yourself as a first-time jobseeker if you already had formal employment is a violation of law.'
    ],
    remindersTl: [
      'Minsan lamang magagamit ang benepisyong ito sa buong buhay ng isang aplikante.',
      'May bisa itong isang (1) taon mula sa araw na maibigay ng barangay.',
      'Bawal gamitin kung dati ka nang may pormal na trabaho.'
    ],
    commonMistakesEn: [
      'Surrendering the sole original copy without making photocopies.',
      'Applying for jobs without securing the barangay certificate first.'
    ],
    commonMistakesTl: [
      'Ibinigay ang nag-iisang orihinal na kopya nang walang iniwang photocopy.',
      'Hindi muna kumuha sa barangay bago nagbayad sa NBI.'
    ],
    scamAlertsEn: [
      'Barangays are strictly prohibited from charging any fee for issuing the RA 11261 First-Time Jobseeker Certification.'
    ],
    scamAlertsTl: [
      'Bawal maningil ang barangay para sa First-Time Jobseeker certification.'
    ],
    dateVerified: 'October 2026',
    firstTimeJobseekerFree: true
  }
];
