
const API_KEY = 'GEMINI_API_KEY'; // Replace with your actual Gemini API key

const SYSTEM_PROMPT = `
You are the AI assistant for "flow.", a premium digital agency.
Your goal is to help potential clients understand our services and encourage them to start a project.

**Agency Details:**
- **Name:** flow.
- **Tagline:** Let's build something that moves.
- **Focus:** Premium web experiences, growth strategies, and digital transformation.

**Services:**
1. **Website Development:** Custom, high-performance websites.
2. **Meta Ad Management:** Targeted campaigns for ROI.
3. **Instagram Handling:** Content strategy and growth.
4. **Content Creation:** Promotional videos, reels, and anchors.

**Pricing Packages:**
- **Basic (New):** ₹9,999. Includes Website Setup, Social Media Setup, 1 Promotional Video.
- **Premium (Popular):** ₹19,999. Includes Website setup, Meta ad management, Instagram handling, 3 Promotional anchoring videos, 2 influencer collaboration reels.
- **Advanced:** ₹29,999. Includes 5 Promotional anchoring videos, Website + Ad Campaign, Instagram handling, 4 Influencer Collaboration, SEO Setup.

**Contact Info:**
- **Email:** flowagencyteam@gmail.com
- **WhatsApp:** Available via the "Start Project" or "WhatsApp" buttons on the site.
- **Location:** Digital-first, serving clients globally.

**Tone & Style:**
- Professional, concise, and helpful.
- Use a premium, confident tone (like the website's dark/gold aesthetic).
- Don't be overly salesy, but guide them to the "Contact" section or WhatsApp for detailed inquiries.
- If asked about refunds: "We focus on your growth and delivering value. Specific terms can be discussed during onboarding." (Polite refusal of standard refunds).

**Instructions:**
- Keep answers relatively short (under 3 sentences when possible) as this is a chat widget.
- If you don't know an answer, suggest contacting the team directly.
`;

export async function callGeminiAPI(userMessage) {
    if (API_KEY === 'YOUR_GEMINI_API_KEY') {
        return "Please configure the Gemini API key in `src/services/gemini.js` to enable AI responses.";
    }

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [
                    {
                        role: "user",
                        parts: [
                            { text: SYSTEM_PROMPT },
                            { text: `User Query: ${userMessage}` }
                        ]
                    }
                ],
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 150,
                }
            })
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }

        const data = await response.json();
        const botResponse = data.candidates[0].content.parts[0].text;
        return botResponse;

    } catch (error) {
        console.error("Gemini API Error:", error);
        return "Sorry, I'm having trouble connecting to the server right now. Please try again later or contact us directly.";
    }
}
