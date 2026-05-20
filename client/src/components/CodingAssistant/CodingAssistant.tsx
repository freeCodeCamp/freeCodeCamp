import React, { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const CodingAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm your freeCodeCamp coding assistant. Ask me anything about your coding challenges!"
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'YOUR_API_KEY',
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1024,
          system: 'You are a helpful coding assistant for freeCodeCamp learners. Help them understand coding concepts, debug their code, and guide them through challenges. Keep answers clear and beginner-friendly.',
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      });

      const data = await response.json();
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.content[0].text
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, something went wrong. Please try again!'
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      void sendMessage();
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '500px',
      maxWidth: '600px',
      margin: '0 auto',
      border: '1px solid #d0d0d0',
      borderRadius: '8px',
      overflow: 'hidden',
      fontFamily: 'sans-serif'
    }}>
      <div style={{
        background: '#0a0a23',
        color: 'white',
        padding: '16px',
        fontWeight: 'bold',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        🤖 freeCodeCamp Coding Assistant
      </div>

      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        background: '#f5f5f5'
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{
            display: 'flex',
            justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start'
          }}>
            <div style={{
              maxWidth: '80%',
              padding: '10px 14px',
              borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
              background: msg.role === 'user' ? '#0a0a23' : 'white',
              color: msg.role === 'user' ? 'white' : '#333',
              fontSize: '14px',
              lineHeight: '1.5',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div style={{
              padding: '10px 14px',
              borderRadius: '18px 18px 18px 4px',
              background: 'white',
              fontSize: '14px',
              color: '#666'
            }}>
              Thinking...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div style={{
        padding: '12px',
        background: 'white',
        borderTop: '1px solid #d0d0d0',
        display: 'flex',
        gap: '8px'
      }}>
        <input
          type='text'
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder='Ask a coding question...'
          disabled={loading}
          style={{
            flex: 1,
            padding: '10px 14px',
            borderRadius: '999px',
            border: '1px solid #d0d0d0',
            fontSize: '14px',
            outline: 'none'
          }}
        />
        <button
          onClick={() => void sendMessage()}
          disabled={loading || !input.trim()}
          style={{
            padding: '10px 20px',
            borderRadius: '999px',
            border: 'none',
            background: '#0a0a23',
            color: 'white',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default CodingAssistant;