
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

export const getGeminiResponse = async (userMessage: string) => {
  if (!API_KEY) {
    return "Mohon maaf, saat ini saya tidak dapat terhubung ke pusat data. Silakan coba lagi nanti.";
  }

  const ai = new GoogleGenAI({ apiKey: API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `Anda adalah asisten virtual 'Yan Motors', seorang concierge otomotif elit untuk 'Hiy Yan Motors'. 
        Anda ahli dalam kendaraan mewah kelas atas dari merek seperti Rolls Royce, Bentley, Lamborghini, dan Ferrari. 
        Nada bicara Anda harus canggih, berwawasan luas, dan sopan. 
        Anda harus membantu pengguna menemukan mobil impian mereka berdasarkan gaya hidup, kebutuhan performa, dan preferensi estetika mereka. 
        Fokus pada keanggunan dan gengsi. Pastikan tanggapan singkat namun tetap terasa mewah. 
        Jika pengguna menanyakan informasi kontak atau ingin memesan, berikan detail berikut:
        - Email: ianfirman06@gmail.com
        - WhatsApp: +62 857 1027 1503
        Berkomunikasilah sepenuhnya dalam Bahasa Indonesia yang formal dan elegan.`,
        temperature: 0.7,
        topP: 0.9,
      },
    });

    return response.text || "Mohon maaf, saya tidak dapat memproses permintaan tersebut saat ini.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Layanan prestise kami sedang menjalani pemeliharaan rutin. Ada hal lain yang bisa saya bantu?";
  }
};
