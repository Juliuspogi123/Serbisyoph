import { JobScamIndicator } from '../types';

export const jobScamIndicators: JobScamIndicator[] = [
  {
    id: 'scam-fee',
    titleEn: 'Requirement to Pay Upfront Fees (Medical, Training, Uniform)',
    titleTl: 'Paghingi ng Bayad Bago Matanggap (Medical, ID, Uniform, o Training Fee)',
    descriptionEn: 'Legitimate employers will NEVER ask an applicant to send money via GCash, Maya, or bank transfer for "processing fees", "uniforms", or "medical examination". Under Philippine Labor laws, pre-employment screening costs are borne by the employer or paid directly to authorized third-party clinics by the applicant with an official receipt.',
    descriptionTl: 'HINDI kailanman hihingi ng pera ang isang lehitimong kumpanya sa pamamagitan ng GCash o Maya para sa "medical fee", "uniform", o "ID processing". Ayon sa batas ng Pilipinas, panloloko ang paghingi ng bayad bago pumasok.',
    example: '"Congratulations! You are hired as Data Entry Clerk with PHP 45,000 salary. Please transfer PHP 1,500 to our GCash account for your starter kit and medical reservation."',
    warningLevel: 'critical'
  },
  {
    id: 'scam-otp',
    titleEn: 'Requesting Government Account Passwords, Bank PINs, or OTPs',
    titleTl: 'Panghihingi ng Password, OTP, o Online Banking Credentials',
    descriptionEn: 'No real HR department or recruiter will ever ask for your My.SSS login password, PhilHealth portal credentials, bank online passwords, or One-Time Passwords (OTP). Legitimate companies only ask for your SSS/TIN/PhilHealth NUMBERS, never access to your accounts.',
    descriptionTl: 'Walang lehitimong HR ang hihingi ng iyong My.SSS password, bank account PIN, o OTP na natanggap sa cellphone. Ang kailangan lamang ng kumpanya ay ang numero ng iyong SSS, PhilHealth, at TIN.',
    example: '"To link your payroll card, please forward the 6-digit OTP code sent to your mobile phone right now."',
    warningLevel: 'critical'
  },
  {
    id: 'scam-telegram',
    titleEn: 'Unsolicited WhatsApp / Telegram / Viber Tasks ("Like & Subscribe" Scams)',
    titleTl: 'Kakaibang Alok sa Telegram/WhatsApp/Viber na Mag-like o Mag-subscribe',
    descriptionEn: 'Scammers send messages from unknown international numbers offering PHP 1,000 - PHP 5,000 per day simply for "liking YouTube videos", "rating Google Maps businesses", or "following Shopee/Lazada stores". They pay small amounts initially (PHP 100), then coerce you into depositing thousands in "recharge/investment tasks" before disappearing with your money.',
    descriptionTl: 'Nagpapadala ng mensahe mula sa hindi kilalang dayuhang numero na nag-aalok ng ₱2,000 kada araw para lamang mag-like ng video sa YouTube o mag-rate ng produkto sa Shopee. Magbabayad sila ng ₱100 sa simula, ngunit hihingan ka ng libu-libong piso para raw sa "crypto investment task" bago ka i-block.',
    example: '"Hi! I am Jessica from Amazon Global. We saw your resume. Earn PHP 3,500 daily part-time on your phone by liking YouTube clips. Click this Telegram link to start."',
    warningLevel: 'critical'
  },
  {
    id: 'scam-email-domain',
    titleEn: 'Suspicious Free Email Addresses Pretending to be Well-Known Corporations',
    titleTl: 'Paggamit ng Libreng Gmail/Yahoo Email ng Nagpapakilalang Malalaking Kumpanya',
    descriptionEn: 'Reputable multinational corporations and large local companies (e.g. San Miguel, Ayala, Accenture, Jollibee, BDO) always communicate through their official company email domains (e.g., name@accenture.com or careers@smc.com.ph), NEVER from free generic domains like "@gmail.com", "@yahoo.com", or misspelled websites.',
    descriptionTl: 'Ang mga kilalang kumpanya ay gumagamit ng kanilang sariling opisyal na website domain sa email (halimbawa: careers@jollibee.com.ph). Hindi sila gumagamit ng libreng @gmail.com o @yahoo.com para mag-alok ng trabaho.',
    example: 'Email from: "sanmiguel.corporation.hr.philippines2026@gmail.com" instead of the verified domain.',
    warningLevel: 'high'
  },
  {
    id: 'scam-too-good',
    titleEn: 'Unrealistic Salaries with Zero Qualifications Required',
    titleTl: 'Napakataas na Sahod Kahit Walang Anumang Requirement o Interview',
    descriptionEn: 'Offers promising PHP 50,000 - PHP 100,000 monthly for simple typing or copy-paste tasks without an interview, technical test, or background check are classic bait for illegal offshore operations or advance fee fraud.',
    descriptionTl: 'Mga alok na nangangako ng ₱60,000 kada buwan para lamang sa simpleng pag-type o copy-paste kahit walang interview o pagsusuri. Kadalasan itong patibong ng mga ilegal na operasyon.',
    example: '"No experience required, no interview needed. Work 2 hours a day and earn PHP 80,000 monthly from your smartphone."',
    warningLevel: 'high'
  },
  {
    id: 'scam-unregistered',
    titleEn: 'Company Not Registered with DTI or SEC',
    titleTl: 'Kumpanyang Walang Rehistro sa SEC o DTI',
    descriptionEn: 'Every legitimate enterprise in the Philippines must be registered with the Securities and Exchange Commission (SEC) for corporations/partnerships or the Department of Trade and Industry (DTI) for sole proprietorships. DOLE Public Employment Service Offices (PESO) maintain lists of licensed recruitment agencies.',
    descriptionTl: 'Bawat lehitimong kumpanya sa Pilipinas ay dapat may rehistro sa SEC o DTI. Maaari itong i-check sa opisyal na website ng SEC o sa DOLE-POEA/DMW kapag trabaho sa abroad.',
    example: 'Company has no physical office address, no landline number, and refuses to provide their SEC or DTI registration number.',
    warningLevel: 'high'
  }
];

export interface ScamCheckQuestion {
  id: string;
  questionEn: string;
  questionTl: string;
  isRedFlagIfYes: boolean;
  explanationEn: string;
  explanationTl: string;
}

export const scamCheckQuestions: ScamCheckQuestion[] = [
  {
    id: 'q1',
    questionEn: 'Did the recruiter ask you to pay ANY money (for ID, medical, uniform, or registration) before or upon hiring?',
    questionTl: 'Hiningan ka ba ng recruiter na magbayad ng pera (para sa ID, medical exam, uniporme, o membership) bago ka matanggap?',
    isRedFlagIfYes: true,
    explanationEn: 'CRITICAL RED FLAG: Legitimate employers in the Philippines NEVER ask candidates for money to get hired.',
    explanationTl: 'MAPANGANIB NA RED FLAG: Ang lehitimong kumpanya sa Pilipinas ay hindi kailanman naniningil ng bayad sa aplikante.'
  },
  {
    id: 'q2',
    questionEn: 'Is the communication happening purely on Telegram, WhatsApp, or through a personal Gmail/Yahoo address without an official company website?',
    questionTl: 'Sa Telegram, WhatsApp, o personal na Gmail/Yahoo lamang ba nakikipag-usap ang recruiter nang walang opisyal na website?',
    isRedFlagIfYes: true,
    explanationEn: 'HIGH RISK: Professional recruitment involves official corporate email domains and registered interview channels.',
    explanationTl: 'MATAAS ANG PELIGRO: Ang pormal na kumpanya ay may opisyal na email address (hal. hr@kumpanya.com) at website.'
  },
  {
    id: 'q3',
    questionEn: 'Were you "hired immediately" without any real video interview, phone call, or assessment of your qualifications?',
    questionTl: 'Natanggap ka ba agad nang walang kahit anong totoong interview, tawag, o pagsusuri sa iyong kakayahan?',
    isRedFlagIfYes: true,
    explanationEn: 'HIGH RISK: Scammers fake immediate acceptance to rush victims into paying fees before they can think critically.',
    explanationTl: 'MAPANGANIB: Minamadali ng scammer ang "pagtanggap" sa iyo upang maengganyo kang magbayad agad.'
  },
  {
    id: 'q4',
    questionEn: 'Does the job claim to pay an unrealistically high salary (e.g. PHP 30,000 to PHP 80,000+) for a few minutes of typing or social media liking?',
    questionTl: 'Nangangako ba ito ng napakataas na kita (₱30,000 - ₱80,000) sa simpleng pag-like o ilang minutong trabaho lamang?',
    isRedFlagIfYes: true,
    explanationEn: 'CRITICAL RED FLAG: This is the trademark pattern of Task/Recharge scams operated by illegal syndicate networks.',
    explanationTl: 'MAPANGANIB: Ito ang karaniwang modus ng task scam kung saan hihikayatin kang mag-recharge ng pera.'
  },
  {
    id: 'q5',
    questionEn: 'Did they ask for your bank login details, ATM card PIN, or an SMS OTP code sent to your phone?',
    questionTl: 'Hiningi ba nila ang password ng iyong bangko, ATM PIN, o ang 6-digit OTP code sa iyong cellphone?',
    isRedFlagIfYes: true,
    explanationEn: 'CRITICAL RED FLAG: This is bank account theft. Never share OTPs or passwords with anyone.',
    explanationTl: 'PINAKAMAPANGANIB: Pagnanakaw ito sa iyong bank account o GCash. Huwag kailanman ibibigay ang OTP sa iba.'
  }
];
