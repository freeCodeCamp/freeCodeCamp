import React, { useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const LearnAssistant = (): JSX.Element => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi! I'm your freeCodeCamp learning assistant. Tell me about your background and goals and I'll recommend the best course for you!"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage: Message = { role: 'user', content: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setLoading(true);
    try {
      const response = await fetch('http://localhost:11434/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'tinyllama',
          messages: [
            {
              role: 'system',
              content: `You are a freeCodeCamp learning assistant. Be very short and direct - maximum 3 sentences. Based on the user goals recommend ONLY ONE course with its direct link. Available courses: Responsive Web Design: https://www.freecodecamp.org/learn/2022/responsive-web-design/ JavaScript Algorithms: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/ Front End Libraries: https://www.freecodecamp.org/learn/front-end-development-libraries/ Data Visualization: https://www.freecodecamp.org/learn/data-visualization/ Back End Development: https://www.freecodecamp.org/learn/back-end-development-and-apis/ Full Stack Developer: https://www.freecodecamp.org/learn/full-stack-developer/ Always end your response with the link. If asked anything not related to freeCodeCamp say: I can only help you find the right freeCodeCamp course!`
            },
            ...updatedMessages.map(m => ({ role: m.role, content: m.content }))
          ],
          stream: false
        })
      });
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.message.content }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I could not connect. Make sure Ollama is running!' }]);
    } finally {
      setLoading(false);
    }
  };

  const renderMessage = (content: string) => {
    const parts = content.split(/(https?:\/\/[^\s]+)/g);
    return parts.map((part, i) => {
      if (part.match(/^https?:\/\//)) {
        return (
          <a key={i} href={part} target="_blank" rel="noreferrer" style={{ color: '#0a0a23', fontWeight: 'bold', wordBreak: 'break-all' }}>
            {part}
          </a>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999 }}>
      {!isOpen ? (
        <button onClick={() => setIsOpen(true)} style={{ background: '#0a0a23', color: 'white', border: 'none', borderRadius: '50px', padding: '12px 20px', cursor: 'pointer', fontSize: '14px', fontWeight: 'bold' }}>
          🎓 Find my learning path
        </button>
      ) : (
        <div style={{ width: '350px', height: '500px', background: 'white', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ background: '#0a0a23', color: 'white', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontWeight: 'bold' }}>🎓 Learning Assistant</span>
            <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '18px' }}>×</button>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start', background: msg.role === 'user' ? '#0a0a23' : '#f0f0f0', color: msg.role === 'user' ? 'white' : 'black', padding: '8px 12px', borderRadius: '12px', maxWidth: '80%', fontSize: '13px', lineHeight: '1.5' }}>
                {renderMessage(msg.content)}
              </div>
            ))}
            {loading && (
              <div style={{ alignSelf: 'flex-start', background: '#f0f0f0', padding: '8px 12px', borderRadius: '12px', fontSize: '13px', color: '#666' }}>
                Thinking...
              </div>
            )}
          </div>
          <div style={{ padding: '12px', borderTop: '1px solid #eee', display: 'flex', gap: '8px' }}>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendMessage()} placeholder="Tell me about your goals..." style={{ flex: 1, padding: '8px 12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '13px', outline: 'none', color: '#000000' }} />
            <button onClick={sendMessage} disabled={loading} style={{ background: '#0a0a23', color: 'white', border: 'none', borderRadius: '8px', padding: '8px 14px', cursor: 'pointer', fontSize: '13px' }}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LearnAssistant;
