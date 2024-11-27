import { Injectable, OnInit } from '@angular/core';
import { OpenAI, ClientOptions } from 'openai';

@Injectable({
  providedIn: 'root'
})
export class ClapBackGptService {
  openai: OpenAI;
  options: ClientOptions = {
    apiKey: "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"
  }

  constructor(){
    this.openai = new OpenAI(this.options);
  }

  async askGPT() {
    var completion = await this.openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user", content: "What is the circumference of earth?"
        }
      ]
    });

    return (completion.choices[0].message)
  }
  // If using Node.js, import fetch from node-fetch
  // const fetch = require('node-fetch'); // Uncomment if in Node.js

  async getChatGPTResponse(prompt: any) {
    const apiKey = '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'; // Replace with your actual API key

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",  // or "gpt-4" if you have access to it
        messages: [{ role: "user", content: prompt }],
        max_tokens: 100
      })
    });

    const data = await response.json();

    if (response.ok) {
      return data.choices[0].message.content; // Returns the text response from ChatGPT
    } else {
      throw new Error(data.error.message);
    }
  }
}
