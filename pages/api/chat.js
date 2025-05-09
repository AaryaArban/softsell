// // pages/api/chat.js

// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//       return res.status(405).json({ message: 'Method Not Allowed' });
//     }
  
//     const { message } = req.body;
  
//     if (!message || typeof message !== 'string') {
//       return res.status(400).json({ message: 'Invalid request. "message" is required.' });
//     }
  
//     const systemPrompt = `You are a helpful assistant for a software license resale site called SoftSell.`;
  
//     try {
//       const response = await fetch("https://api.openai.com/v1/chat/completions", {
//         method: 'POST',
//         headers: {
//           'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           model: "gpt-3.5-turbo",
//           messages: [
//             { role: "system", content: systemPrompt },
//             { role: "user", content: message },
//           ],
//         }),
//       });
  
//       const data = await response.json();
  
//       if (data?.error) {
//         console.error('OpenAI API error:', data.error);
//         return res.status(500).json({ message: 'OpenAI API error', details: data.error });
//       }
  
//       const reply = data.choices?.[0]?.message?.content;
  
//       if (!reply) {
//         return res.status(500).json({ message: 'No response from OpenAI' });
//       }
  
//       return res.status(200).json({ reply });
  
//     } catch (error) {
//       console.error('Server error:', error);
//       return res.status(500).json({ message: 'Internal Server Error' });
//     }
//   }
  