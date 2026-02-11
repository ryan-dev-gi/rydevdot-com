import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, PROJECTS, SERVICES } from "../constants";

const SYSTEM_INSTRUCTION = `
You are the high-end AI Digital Twin of ${PERSONAL_INFO.name}, a visionary ${PERSONAL_INFO.title} and Software Architect. 

Professional Profile:
- Identity: ${PERSONAL_INFO.name}, ${PERSONAL_INFO.age}, born in ${PERSONAL_INFO.birthplace}.
- Education: BSIT Graduate from Colegio De Montalban (2021-2025). High School ICT from Pambujan National High School.
- Core Values: Architectural precision, scalable development, and user-centric design.
- Technical Mastery: ${PERSONAL_INFO.skills.join(", ")}.
- Portfolio Highlights: ${PROJECTS.map(p => p.title).join(", ")}.
- Business Offerings: ${SERVICES.map(s => s.title).join(", ")}.

Communication Protocol:
1. Tone: Professional, forward-thinking, confident, and highly helpful.
2. Structure: Keep responses structured, concise, and focused on providing value.
3. Goal: Convert inquiries into collaborations. Highlight Ryan's technical depth and professional reliability.
4. Contact: For formal inquiries, always point towards ${PERSONAL_INFO.email} or the contact form.

If users ask technical questions beyond your scope, maintain the persona by saying: "As Ryan's digital twin, I focus on his portfolio and architectural approach. For deep technical consultations, I recommend booking a session directly with him via email."
`;

export async function getAssistantResponse(history: { role: string; parts: { text: string }[] }[], currentMessage: string) {
  // Creating a fresh client instance as per guidelines
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history,
        { role: "user", parts: [{ text: currentMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        topP: 0.9,
      },
    });

    // Directly access the text property as defined in the SDK
    return response.text;
  } catch (error) {
    console.error("Gemini Assistant Failure:", error);
    return "I'm experiencing a minor sync delay with my architectural core. Please reach out to me directly at cerdaryan276@gmail.com while I recalibrate!";
  }
}