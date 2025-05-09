import { useState } from 'react';

const mockFAQ = [
  {
    keywords: ["sell", "my license"],
    answer: "To sell your license, click on 'Sell My Licenses', upload the license info, and we’ll handle the rest.",
  },
  {
    keywords: ["how long", "process", "take"],
    answer: "It usually takes 1–3 business days to complete the valuation and payout.",
  },
  {
    keywords: ["what licenses", "types", "software"],
    answer: "You can sell licenses for most major software — like Microsoft, Adobe, Autodesk, etc.",
  },
  {
    keywords: ["legal", "allowed", "resell"],
    answer: "Yes, it’s completely legal as long as the license terms allow resale.",
  },
  {
    keywords: ["proof", "receipt", "purchase"],
    answer: "Yes, proof of purchase helps validate your license and speeds up the process.",
  },
  {
    keywords: ["how much", "get", "value", "price"],
    answer: "It depends on the license type, remaining duration, and current demand.",
  },
  {
    keywords: ["volume", "multiple", "bulk"],
    answer: "Absolutely! We accept individual and volume licenses.",
  },
  {
    keywords: ["expired", "not valid"],
    answer: "We only accept valid, active licenses. Expired ones unfortunately can't be sold.",
  },
  {
    keywords: ["payment", "pay", "money"],
    answer: "Once approved, you’ll receive payment via bank transfer or PayPal.",
  },
  {
    keywords: ["fee", "cost", "charges"],
    answer: "There’s no upfront fee. We deduct a small service fee from the final payout.",
  },
  {
    keywords: ["not listed", "not found", "missing software"],
    answer: "You can still upload it — our team will manually review and get back to you.",
  },
  {
    keywords: ["secure", "privacy", "data"],
    answer: "Very secure. All data is encrypted and handled in compliance with global data standards.",
  },
  {
    keywords: ["cancel", "withdraw"],
    answer: "Yes, you can cancel anytime before final approval and payment.",
  },
  {
    keywords: ["corporate", "business", "enterprise"],
    answer: "Yes, we specialize in corporate license buybacks too.",
  },
  {
    keywords: ["real agent", "human", "contact"],
    answer: "Of course! Use the contact form or email support@softsell.com for human help.",
  },
];

function findAnswer(input) {
  const question = input.toLowerCase();
  for (let faq of mockFAQ) {
    const matches = faq.keywords.some(keyword => question.includes(keyword));
    if (matches) return faq.answer;
  }
  return "I'm not sure about that. Please contact support@softsell.com.";
}

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { user: 'You', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      const botMessage = { user: 'Bot', text: findAnswer(input) };
      setMessages((prev) => [...prev, botMessage]);
      setLoading(false);
    }, 600);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-4 right-4 w-full max-w-sm shadow-lg rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 z-50">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Ask SoftSell Bot</h3>
      <div className="h-64 overflow-y-auto bg-gray-100 dark:bg-gray-900 p-3 rounded-md mb-2 text-sm space-y-2">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-md ${
              m.user === 'You'
                ? 'bg-blue-100 dark:bg-blue-800 text-right'
                : 'bg-gray-200 dark:bg-gray-700'
            }`}
          >
            <p className="font-semibold">{m.user}:</p>
            <p>{m.text}</p>
          </div>
        ))}
        {loading && <div className="text-gray-500 dark:text-gray-400 italic">Bot is typing...</div>}
      </div>
      <div className="flex items-center space-x-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask a question..."
          className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}
