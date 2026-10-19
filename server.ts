import express from 'express';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Initialize Gemini client if API key is provided
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;
if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
  try {
    aiClient = new GoogleGenAI({ apiKey });
  } catch (e) {
    console.warn('Failed to initialize GoogleGenAI client:', e);
  }
}

// Server API: AI resume enhancer
app.post('/api/ai/enhance-resume', async (req, res) => {
  try {
    const { targetJob, profileType, currentSummary, skills, education, experience } = req.body;

    if (!aiClient) {
      return res.status(200).json({
        available: false,
        message: 'Server AI key not configured. Using client ATS template fallback.'
      });
    }

    const prompt = `You are an expert Philippine career coach and ATS resume specialist.
Task: Write a concise, impactful 2-4 sentence Professional Summary / Career Objective for a Filipino jobseeker.
Target Job: ${targetJob || 'General Professional'}
Applicant Category: ${profileType || 'Fresh Graduate'}
User's Draft Summary / Objective: ${currentSummary || 'None provided'}
Skills: ${Array.isArray(skills) ? skills.join(', ') : skills || 'Not specified'}
Education: ${JSON.stringify(education || [])}
Experience: ${JSON.stringify(experience || [])}

RULES:
1. ONLY use the information provided. NEVER invent experiences, companies, GPAs, or degrees.
2. ATS-friendly, professional, active voice.
3. Keep it between 40-75 words.
4. Return ONLY the polished summary text. No preamble or markdown commentary.`;

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    return res.json({
      available: true,
      enhancedSummary: response.text?.trim() || ''
    });
  } catch (error: any) {
    console.error('Error enhancing resume with Gemini:', error);
    return res.status(200).json({
      available: false,
      error: error.message || 'AI generation error',
      message: 'Falling back to offline template.'
    });
  }
});

// Server API: AI Cover Letter Assistant
app.post('/api/ai/generate-cover-letter', async (req, res) => {
  try {
    const { fullName, email, phone, location, targetJob, companyName, tone, language, keyHighlights } = req.body;

    if (!aiClient) {
      return res.status(200).json({
        available: false,
        message: 'Server AI key not configured. Using client template fallback.'
      });
    }

    const langInstruction = language === 'filipino'
      ? 'Write in professional, formal Filipino (Tagalog). Keep standard technical terms in English.'
      : 'Write in clear, professional English standard for Philippine corporate/remote job applications.';

    const prompt = `You are a professional hiring consultant in the Philippines.
Draft an authentic, ATS-friendly cover letter based ONLY on the provided applicant details.

Applicant: ${fullName || 'Applicant'}
Contact: ${email || ''} | ${phone || ''} | ${location || ''}
Target Job: ${targetJob || 'Position'}
Target Company: ${companyName || 'Hiring Manager'}
Tone: ${tone || 'Professional'} (Options: Professional, Friendly, Concise)
Key Highlights provided by user: ${keyHighlights || 'Eager to contribute relevant skills and work diligently.'}
Language: ${langInstruction}

RULES:
1. NEVER invent past companies, degrees, or achievements not implied by the user.
2. Include standard formal business letter layout: Date, Recipient, Salutation, 3 clear paragraphs (Opening/Interest, Value/Fit, Call to Action/Gratitude), and Sign-off.
3. Return ONLY the letter text without preamble.`;

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
    });

    return res.json({
      available: true,
      letter: response.text?.trim() || ''
    });
  } catch (error: any) {
    console.error('Error generating cover letter:', error);
    return res.status(200).json({
      available: false,
      error: error.message || 'AI generation error',
      message: 'Falling back to offline template.'
    });
  }
});

// Server API: Status endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    aiAvailable: !!aiClient,
    app: 'Serbisyo PH',
    timestamp: new Date().toISOString()
  });
});

// Serve ads.txt for Google AdSense crawler verification
app.get('/ads.txt', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.sendFile(path.join(__dirname, 'public', 'ads.txt'));
});

// Direct project ZIP download endpoints
app.get(['/serbisyo.ph.zip', '/serbisyo-ph.zip'], (req, res) => {
  const filePath = path.join(__dirname, 'public', 'serbisyo.ph.zip');
  res.download(filePath, 'Serbisyo.ph.zip');
});

// Setup Vite middleware in dev or static serving in production
async function startServer() {
  const isProduction = process.env.NODE_ENV === 'production';

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Serbisyo PH server running on http://0.0.0.0:${port}`);
  });
}

startServer();
