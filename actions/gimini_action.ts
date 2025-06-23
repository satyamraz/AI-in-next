"use server"

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEN_AI_KEY });



//await main();


  export async function giminiRun(content:string) {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: content,
    });
    console.log(await response.text);
    return await response.text
  }

  

