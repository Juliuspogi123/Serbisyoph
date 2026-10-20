import { InterviewQuestion } from '../types';

export const interviewQuestions: InterviewQuestion[] = [
  // 1. Fresh Graduate Track
  {
    id: 'fg-1',
    category: 'fresh_grad',
    questionEn: 'Tell me about yourself and why you chose this career path.',
    questionTl: 'Ikuwento mo ang iyong sarili at bakit mo pinili ang larangang ito.',
    whyAskedEn: 'Interviewers want to see how you connect your college education, OJT/projects, and character to the role.',
    whyAskedTl: 'Nais malaman ng employer kung paano mo ikinakabit ang iyong kurso, OJT, at personalidad sa trabahong inaaplayan.',
    sampleAnswerEn: 'I recently graduated with a degree in [Degree Name] from [University]. During college, I specialized in [Key Skill/Focus Area], where I led our capstone project that created [Brief Project Description]. In my internship at [Company/Org], I learned how to work with deadlines and coordinate with teams. I am eager to start my career with [Target Company] because of your track record in delivering high-quality work in this field.',
    sampleAnswerTl: 'Kamakailan po akong nagtapos ng kursong [Degree] sa [University]. Sa aking pag-aaral, naging aktibo po ako sa aming capstone project kung saan natutunan ko ang [Key Skill]. Sa aking OJT sa [Company/Org], nahasa ang aking disiplina sa oras at pakikitungo sa mga katrabaho. Nais ko pong simulan ang aking karera sa [Company] dahil kilala po kayo sa magandang pamantayan at pagsasanay sa mga empleyado.',
    tipsEn: [
      'Use the Past-Present-Future structure: What you studied -> What you achieved in projects/OJT -> Why you want this job now.',
      'Do not recite your entire birth-to-college life story; keep it within 90 seconds.',
      'Highlight specific software, tools, or methodologies you know.'
    ],
    tipsTl: [
      'Gamitin ang Past-Present-Future: Pinag-aralan -> Nagawa sa OJT/Project -> Dahilan kung bakit nais ang kumpanya.',
      'Panatilihing maikli at direkta (humigit-kumulang 1 hanggang 2 minuto).',
      'Banggitin ang mga software o kagamitang sanay kang gamitin.'
    ]
  },
  {
    id: 'fg-2',
    category: 'fresh_grad',
    questionEn: 'You do not have formal work experience yet. Why should we hire you over experienced applicants?',
    questionTl: 'Wala ka pang karanasan sa trabaho. Bakit ka namin tatanggapin sa halip na mayroon nang karanasan?',
    whyAskedEn: 'Tests your self-confidence, coachability, work ethic, and ability to translate school activities into workplace value.',
    whyAskedTl: 'Sinusubukan ang iyong kumpiyansa, kahandaang matuto, at kung paano makatutulong ang iyong pinag-aralan.',
    sampleAnswerEn: 'While I do not have years of corporate experience, I offer a clean slate with zero bad workplace habits, a rapid learning curve, and up-to-date academic training in the latest tools. During my college coursework, I consistently maintained [honors/punctual project completion] while balancing student leadership. I am fully committed to learning your systems quickly and giving 100% effort to become a productive team member right away.',
    sampleAnswerTl: 'Kahit wala pa po akong mahabang karanasan sa kumpanya, dala ko po ang bukas na kaisipan, mabilis na pagkatuto, at sariwang kaalaman sa mga modernong kagamitan. Noong ako ay nag-aaral, naipamalas ko ang aking sipag sa pagtatapos ng mga proyekto sa tamang oras. Handa po akong magsumikap upang mabilis na matutunan ang inyong mga proseso.',
    tipsEn: [
      'Frame lack of experience as high enthusiasm and adaptability.',
      'Reference quantifiable academic success, thesis results, or student organization leadership.',
      'Never sound apologetic about being a fresh grad; own your hard work.'
    ],
    tipsTl: [
      'Ipakita ang kakulangan sa karanasan bilang lakas: sariwang pananaw, walang masamang nakasanayan, at mabilis matuto.',
      'Banggitin ang mga aktwal na proyektong naisagawa sa eskwelahan.',
      'Maging magalang ngunit may tiwala sa sarili.'
    ]
  },

  // 2. Customer Service / BPO Track
  {
    id: 'bpo-1',
    category: 'bpo',
    questionEn: 'How do you handle an irate or angry customer shouting over the phone or chat?',
    questionTl: 'Paano mo pakikitunguhan ang isang galit na kostumer na sumisigaw sa telepono o chat?',
    whyAskedEn: 'Crucial for call center and customer service roles. Evaluates de-escalation skills, empathy, patience, and adherence to company process.',
    whyAskedTl: 'Sinusukat ang iyong pasensya, kakayahang magpalamig ng ulo ng kostumer (de-escalation), at pagsunod sa pamantayan.',
    sampleAnswerEn: 'First, I never take the customer\'s anger personally because I understand their frustration is directed at the problem, not me. I listen actively without interrupting until they finish venting. Then, I acknowledge their frustration with genuine empathy, saying: "I completely understand how stressful this delay has been for you, and I am here to help get this resolved today." I verify the account details, explain the exact steps I am taking, and provide a clear resolution or turnaround time while maintaining a calm, reassuring tone throughout.',
    sampleAnswerTl: 'Una sa lahat, hindi ko ito dinaramdam nang personal dahil naiintindihan kong ang problema ang kanilang ikinagagalit at hindi ako. Pinakikinggan ko sila nang maigi nang walang pag-abala hanggang mailabas nila ang kanilang hinaing. Pagkatapos, nagpapahayag ako ng sinserong pag-unawa at ipinapaliwanag ang hakbang na aking gagawin upang ayusin ang problema. Sinisiguro kong kalmado at magalang ang aking boses sa buong pag-uusap.',
    tipsEn: [
      'Remember the HEAT or LAST model: Listen, Apologize/Acknowledge, Solve, Thank.',
      'Explicitly state: "I never take it personally."',
      'Emphasize taking ownership of the customer\'s issue.'
    ],
    tipsTl: [
      'Tandaan ang gintong patakaran: Makinig, Magpakita ng Empathy, Maghanap ng Solusyon.',
      'Huwag makipagtalo sa kostumer kahit mali sila sa simula.',
      'Ipakita na handa mong panagutan ang pagtulong sa kanila.'
    ]
  },
  {
    id: 'bpo-2',
    category: 'bpo',
    questionEn: 'Are you comfortable working night shifts, shifting schedules, and Philippine holidays?',
    questionTl: 'Kumportable ka ba sa night shift, pabago-bagong schedule, at pagpasok kahit holiday?',
    whyAskedEn: 'Verifies availability for 24/7 BPO operations and US/UK/Australia client time zones.',
    whyAskedTl: 'Sinisiguro ng kumpanya na hindi ka magiging pala-absent o aalis agad kapag nadeploy sa panggabing schedule.',
    sampleAnswerEn: 'Yes, absolutely. I understand that serving international clients requires flexibility. I have already arranged my sleep routine, quiet bedroom environment, and family schedule to adapt seamlessly to night shifts and graveyard rotations. I also understand that working on Philippine holidays is standard in the BPO industry and compensated properly under the law.',
    sampleAnswerTl: 'Opo, handang-handa po ako. Naiintindihan ko po na ang ating mga kliyente ay nasa ibang bansa kaya kailangan ang flexible schedule. Nakaayos na po ang aking tulugan at suportado po ako ng aking pamilya sa panggabing trabaho. Handa rin po akong pumasok sa mga holidays.',
    tipsEn: [
      'Answer with an affirmative "Yes" right away; hesitation is a red flag for BPO recruiters.',
      'Mention that you have a supportive household environment.',
      'Reassure them regarding transportation or home setup.'
    ],
    tipsTl: [
      'Diretsahang sabihing "Opo". Ang pag-aatubili ay madalas ikabagsak sa initial screening.',
      'Ipaalam na maayos ang iyong kalusugan at suportado ka ng pamilya.'
    ]
  },

  // 3. Work-From-Home / Remote Track
  {
    id: 'wfh-1',
    category: 'remote',
    questionEn: 'What is your home office setup, internet connection, and power backup plan?',
    questionTl: 'Ano ang iyong home office setup, bilis ng internet, at solusyon kapag nag-brownout?',
    whyAskedEn: 'Remote employers must guarantee zero client downtime due to Philippine typhoons, power outages, or slow internet.',
    whyAskedTl: 'Kailangang tiyakin ng remote employer na hindi ka mawawala sa trabaho kapag nagkaroon ng blackout o bagyo.',
    sampleAnswerEn: 'I have a dedicated, quiet workspace in my home with an ergonomic chair and dual-monitor setup. My primary internet is a [Fiber Provider] 100 Mbps connection with an Ethernet cable to avoid Wi-Fi drops. For backups, I have a secondary prepaid 5G mobile hotspot from a different network, a UPS battery backup for my router that keeps internet running during brownouts, and a laptop with 6+ hours of battery life. I also have an accessible co-working space nearby for emergencies.',
    sampleAnswerTl: 'Mayroon po akong tahimik at sariling workspace sa bahay. Ang aking pangunahing internet ay Fiber connection na may bilis na 100 Mbps. Bilang backup, mayroon po akong 5G mobile pocket Wi-Fi mula sa ibang telco, at power bank/UPS para sa aking router. May laptop din po akong may matagal na baterya sakaling magka-brownout.',
    tipsEn: [
      'State specific numbers: e.g., 50-100+ Mbps Fiber, backup pocket Wi-Fi.',
      'Emphasize that your workspace has a closed door and minimal background noise.',
      'Show that you have already thought about power outages.'
    ],
    tipsTl: [
      'Magsabi ng totoong numero (halimbawa: 50-100 Mbps fiber).',
      'Ipakita na may backup telco ka (hal. Globe Fiber + Smart 5G backup).',
      'Banggitin na tahimik ang iyong kwarto at walang ingay ng aso o motor.'
    ]
  },
  {
    id: 'wfh-2',
    category: 'remote',
    questionEn: 'How do you manage your time and stay productive without someone constantly watching you?',
    questionTl: 'Paano mo pinamamahalaan ang iyong oras nang walang supervisor na nakatayo sa iyong likod?',
    whyAskedEn: 'Evaluates asynchronous communication, self-discipline, and proactive task reporting.',
    whyAskedTl: 'Nais malaman kung mapagkakatiwalaan ka sa sariling kusa at marunong mag-update sa team.',
    sampleAnswerEn: 'I rely on clear structure and proactive communication. Every morning, I review my top priorities using project boards like Trello, Notion, or Asana. I break larger goals into focused blocks of deep work and use Slack or Teams to post brief morning check-ins and end-of-day summary reports for my manager. If I encounter an obstacle or dependency, I flag it immediately with proposed solutions rather than waiting silently.',
    sampleAnswerTl: 'Gumagamit po ako ng maayos na listahan ng gawain at regular na komunikasyon sa aking pinuno. Bawat umaga, sinusuri ko ang mga dapat matapos gamit ang task manager. Nagpapadala po ako ng maikling ulat sa simula at katapusan ng araw. Kapag may nakitang balakid o tanong, agad po akong nagtatanong upang hindi maantala ang buong proyekto.',
    tipsEn: [
      'Mention tools like Trello, Asana, Google Workspace, or Slack.',
      'Highlight the concept of "over-communicating" in remote teams.',
      'Emphasize accountability for results, not just hours clocked in.'
    ],
    tipsTl: [
      'Banggitin ang mga kagamitan tulad ng Google Calendar, Trello, o Slack.',
      'Ipakita na marunong kang magbigay ng regular na update sa iyong supervisor.'
    ]
  },

  // 4. Salary Expectation Track
  {
    id: 'sal-1',
    category: 'salary',
    questionEn: 'What are your salary expectations for this role?',
    questionTl: 'Magkano ang inaasahan mong sweldo (salary expectation) para sa posisyong ito?',
    whyAskedEn: 'Checks if your financial expectations match the company budget without eliminating yourself too early.',
    whyAskedTl: 'Inaalam kung abot-kaya ng budget ng kumpanya ang iyong hinihingi nang hindi ka nalulugi o nadidiskwalipika.',
    sampleAnswerEn: 'Based on my research into the current Philippine market rates for a [Job Title] with my skills, as well as the responsibilities required for this position, my expected monthly salary range is between PHP [Minimum] and PHP [Ideal Target]. However, I am open to discussing the total compensation package, including health insurance (HMO) coverage from day one, government-mandated benefits, allowances, and opportunities for career progression.',
    sampleAnswerTl: 'Ayon po sa aking pagsasaliksik sa karaniwang pasweldo sa industriya para sa posisyong [Job Title] at sa mga kasanayang aking maiaambag, ang aking inaasahang buwanang sahod ay nasa pagitan ng ₱[Minimum] hanggang ₱[Maximum]. Gayunpaman, bukas po ako sa buong benepisyo tulad ng HMO, government contributions, at oportunidad para sa promosyon.',
    tipsEn: [
      'Give a realistic RANGE (e.g., PHP 22,000 - PHP 28,000 for entry BPO/IT) rather than a rigid single number.',
      'Never say "Whatever the company gives is okay" — it shows lack of preparation.',
      'Always consider HMO (Health Card) value and 13th-month pay as part of total compensation.'
    ],
    tipsTl: [
      'Magbigay ng RANGE (halimbawa ₱20,000 hanggang ₱25,000) sa halip na isang eksaktong numero.',
      'Huwag sasabihing "Kahit magkano po" dahil nagpapakita ito ng kawalan ng pagsasaliksik.',
      'Isaalang-alang ang HMO (PhilHealth dagdag na medical card) at 13th month pay.'
    ]
  },

  // 5. Technical Track
  {
    id: 'tech-1',
    category: 'technical',
    questionEn: 'Tell me about a difficult technical problem you faced and how you debugged or solved it.',
    questionTl: 'Ibahagi ang isang mahirap na problemang teknikal na iyong naranasan at paano mo ito inayos.',
    whyAskedEn: 'Evaluates your step-by-step diagnostic reasoning, patience, resourcefulness, and root cause analysis.',
    whyAskedTl: 'Sinusuri kung paano ka mag-isip nang lohikal at kung saan ka humihingi ng tulong o impormasyon.',
    sampleAnswerEn: 'During our final semester capstone project, our web application suddenly failed to process database requests under simulated multiple user traffic. Instead of guessing, I systematically checked the server logs and error codes. I traced the bottleneck to unindexed database queries and unclosed connection pools. I optimized the query structure, tested it in a staging branch, and ran stress tests that reduced response latency by 65%.',
    sampleAnswerTl: 'Noong gumagawa kami ng capstone project, nagka-error ang aming database dahil sa sabay-sabay na traffic. Sa halip na manghula, binasa ko ang server logs upang malaman ang ugat ng problema. Natuklasan kong mabagal ang query dahil sa kawalan ng tamang index. Inayos ko ang database query at nag-test muli hanggang bumilis ang tugon nito.',
    tipsEn: [
      'Use the STAR method: Situation, Task, Action, Result.',
      'Explain your thought process, not just the technical jargon.',
      'Mention how you verified the fix after implementing it.'
    ],
    tipsTl: [
      'Gamitin ang STAR method: Sitwasyon, Gawain, Aksyon, at Resulta.',
      'Ikwento ang lohika ng iyong pag-iisip, hindi lamang purong technical terms.'
    ]
  },

  // 6. General Track
  {
    id: 'gen-1',
    category: 'general',
    questionEn: 'What is your greatest strength and what is an area you are currently improving?',
    questionTl: 'Ano ang iyong pinakamalaking kalakasan at ano naman ang kahinaan na iyong pinagsusumikapang baguhin?',
    whyAskedEn: 'Tests self-awareness, honesty, and whether you take concrete steps to improve your limitations.',
    whyAskedTl: 'Inaalam kung tapat ka sa iyong sarili at kung gumagawa ka ng paraan upang mapabuti ang iyong mga kahinaan.',
    sampleAnswerEn: 'My greatest strength is my proactive attention to detail and dependability; when assigned a deliverable, my supervisors know it will be completed accurately and ahead of schedule. An area I am actively improving is public speaking before large groups. To address this, I volunteered to present project updates in college seminars and enrolled in online workshops to gain structured confidence.',
    sampleAnswerTl: 'Ang aking pinakamalaking kalakasan ay ang aking kasipagan at masusing atensyon sa detalye; kapag may ibinigay na gawain, sinisiguro kong tama at maaga itong natatapos. Ang aking kahinaan na aking inaayos ngayon ay ang pagsasalita sa harap ng napakaraming tao. Dahil dito, nagboluntaryo akong mag-ulat sa aming mga klase upang masanay ang aking sarili.',
    tipsEn: [
      'Never say "I have no weaknesses" or "I am a perfectionist" (cliché).',
      'Pick a REAL skill you are improving and immediately describe the concrete steps you are taking.',
      'Keep strengths grounded in observable work behaviors.'
    ],
    tipsTl: [
      'Huwag sasabihing "Wala akong kahinaan" o "Masyado akong perfectionist".',
      'Pumili ng totoong bagay na maaayos at sabihin kung anong training o gawi ang ginagawa mo para mabago ito.'
    ]
  }
];
