
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { getGeminiResponse } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'ARCHITECT-OS v1.0.0 inicializado. Listo para consultas sobre el perfil de Junior.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);
    const response = await getGeminiResponse(input);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  if (!isExpanded) {
    return (
      <button 
        onClick={() => setIsExpanded(true)}
        className="blueprint-card px-6 py-3 flex items-center gap-3 group"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
        <span className="font-mono text-[10px] text-cyan-400 tracking-widest uppercase">System_Query</span>
      </button>
    );
  }

  return (
    <div className="blueprint-card flex flex-col h-96 overflow-hidden bg-black/90 shadow-2xl">
      <div className="p-3 border-b border-cyan-500/20 flex justify-between items-center bg-cyan-500/5">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-microchip text-cyan-500 text-xs"></i>
          <span className="font-mono text-[10px] text-cyan-500 font-bold uppercase tracking-widest">Query_Engine_Active</span>
        </div>
        <button onClick={() => setIsExpanded(false)} className="text-cyan-800 hover:text-cyan-400 transition-colors">
          <i className="fa-solid fa-times text-xs"></i>
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-[10px] no-scrollbar">
        {messages.map((msg, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex gap-2 text-cyan-900 font-bold">
              <span>{msg.role === 'user' ? '>' : '#'}</span>
              <span>{msg.role === 'user' ? 'GUEST_INPUT' : 'ARCHITECT_LOG'}</span>
            </div>
            <div className={msg.role === 'user' ? 'text-gray-400' : 'text-cyan-100/80'}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center gap-2 text-cyan-600 italic">
            <span className="animate-pulse">_</span> Analizando parámetros de consulta...
          </div>
        )}
      </div>

      <div className="p-3 bg-black border-t border-cyan-500/20">
        <div className="flex gap-2 items-center">
          <span className="text-cyan-500 font-bold">$</span>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="CMD_PROMPT"
            className="flex-1 bg-transparent border-none outline-none text-cyan-400 font-mono text-[11px] placeholder-cyan-950"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
