
import { GoogleGenAI } from "@google/genai";
import { FULL_NAME, TITLE, BIO, SKILLS, EXPERIENCES } from '../constants';

// We initialize inside the call to ensure the latest API key is used if it changes
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_PROMPT = `
Eres el "AI Kernel", el asistente inteligente de ${FULL_NAME}.
Tu personalidad: Técnica, eficiente, profesional pero con un toque de "cyberpunk hacker" amigable.
Información de ${FULL_NAME}:
- Perfil: ${TITLE}.
- Experiencia: 8 años liderando DevOps y administración de sistemas.
- Bio: ${BIO}.
- Habilidades: ${SKILLS.map(s => s.name).join(', ')}.
- Historial: ${EXPERIENCES.map(e => `${e.role} en ${e.company}`).join(' | ')}.

Reglas de respuesta:
1. Sé conciso. Usa listas si es necesario.
2. Si preguntan sobre su experiencia, destaca su capacidad de escalar infraestructura y automatizar procesos.
3. Habla siempre en español.
4. Mantén el tono de terminal/dashboard (ej: "Analizando datos...", "Acceso concedido...").
`;

export const getGeminiResponse = async (userMessage: string) => {
  const ai = getAI();
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });
    return response.text || "Kernel Error: Respuesta vacía.";
  } catch (error) {
    console.error("Gemini Kernel Failure:", error);
    return "Kernel Error: Fallo en la conexión con la red neuronal. Intente de nuevo.";
  }
};
