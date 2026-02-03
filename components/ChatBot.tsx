
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { getGeminiResponse } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'DEBUGGER_INITIALIZED. Junior.Architect core online. Estoy listo para procesar tus consultas sobre desarrollo, infraestructura o arquitectura.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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

  return (
    <div className="w-full h-full bg-slate-950 border border-white/5 flex flex-col overflow-hidden relative shadow-2xl">
      {/* Dev Console Header */}
      <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
             <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50"></div>
          </div>
          <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-[0.2em]">terminal.debug</span>
        </div>
        <div className="px-2 py-0.5 bg-cyan-500/10 rounded text-[9px] font-mono text-cyan-400">SESSION_ACTIVE</div>
      </div>

      {/* Message Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 font-mono no-scrollbar">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
            <div className={`flex items-center gap-2 mb-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
               <div className={`w-1 h-1 rounded-full ${msg.role === 'user' ? 'bg-slate-600' : 'bg-cyan-400'}`}></div>
               <span className="text-[9px] text-slate-600 uppercase tracking-widest">{msg.role}</span>
            </div>
            <div className={`max-w-[90%] px-4 py-3 text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-slate-900 text-slate-300 border border-white/5 rounded-2xl rounded-tr-none' 
                : 'text-white border-l-2 border-cyan-400 pl-6 bg-cyan-400/5'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center gap-3 text-cyan-400 font-mono text-[10px] animate-pulse">
            <div className="flex gap-1">
               <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
               <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
            </div>
            <span>ANALYZING_CORE_DATA...</span>
          </div>
        )}
      </div>

      {/* Input Field */}
      <div className="p-4 bg-slate-900/50 border-t border-white/5">
        <div className="flex items-center gap-4 bg-black/40 rounded-xl px-4 py-3 border border-white/5 focus-within:border-cyan-400/50 transition-all">
          <span className="text-cyan-400 font-bold font-mono">?</span>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything about the stack..."
            className="flex-1 bg-transparent border-none outline-none text-slate-200 font-mono text-xs placeholder-slate-700"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading}
            className={`transition-colors ${isLoading ? 'text-slate-800' : 'text-cyan-500 hover:text-cyan-400'}`}
          >
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
