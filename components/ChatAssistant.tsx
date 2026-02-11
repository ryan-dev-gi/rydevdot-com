/** @jsxImportSource react */
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, User, Loader2 } from 'lucide-react';
import { getAssistantResponse } from '../services/geminiService';
import { Message } from '../types';
import { PERSONAL_INFO } from '../constants';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: `Hello! I am RyDev AI, ${PERSONAL_INFO.name.split(' ')[0]}'s digital assistant. How can I help you with your project or business needs today?` }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const avatarUrl = PERSONAL_INFO.avatar;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const history = messages.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }]
      }));

      const response = await getAssistantResponse(history as any, userMessage);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "My cognitive link is unstable. Please check your connection or reach out via email." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[550px] glass rounded-[2rem] shadow-2xl overflow-hidden flex flex-col border border-indigo-500/30 transition-colors fade-in">
          {/* Header */}
          <div className="bg-indigo-600 p-6 flex justify-between items-center shadow-lg relative z-20">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-white/20 shadow-lg bg-slate-900">
                  <img src={avatarUrl} alt="RyDev AI Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-indigo-600 rounded-full" />
              </div>
              <div>
                <h3 className="text-white font-bold leading-none">RyDev AI</h3>
                <span className="text-indigo-200 text-xs flex items-center mt-1">
                  Ready to assist
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors p-2"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Body */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth bg-slate-50/50 dark:bg-slate-950/20"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex max-w-[85%] space-x-3 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-lg flex-shrink-0 overflow-hidden flex items-center justify-center ${msg.role === 'user' ? 'bg-indigo-600 shadow-lg' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm'}`}>
                    {msg.role === 'user' ? (
                      <User size={14} className="text-white" />
                    ) : (
                      <img src={avatarUrl} alt="AI" className="w-full h-full object-cover" />
                    )}
                  </div>
                  <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-indigo-600 text-white rounded-tr-none shadow-md shadow-indigo-500/20' 
                      : 'bg-white dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200 dark:border-slate-700 backdrop-blur-sm shadow-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex space-x-3 items-center">
                  <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden">
                    <img src={avatarUrl} alt="AI Thinking" className="w-full h-full object-cover opacity-50" />
                  </div>
                  <div className="bg-white/50 dark:bg-slate-800/50 px-4 py-3 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-700">
                    <div className="flex space-x-1.5">
                      <div className="w-1.5 h-1.5 bg-indigo-500 dark:bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                      <div className="w-1.5 h-1.5 bg-indigo-500 dark:bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <div className="w-1.5 h-1.5 bg-indigo-500 dark:bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Input */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/60 backdrop-blur-md">
            <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-2 focus-within:border-indigo-500/50 transition-all duration-300">
              <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask about my services..."
                className="flex-1 bg-transparent border-none focus:outline-none text-sm px-3 text-slate-800 dark:text-slate-200"
              />
              <button 
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="bg-indigo-600 p-2.5 rounded-xl text-white hover:bg-indigo-500 transition-all transform active:scale-95 disabled:opacity-50 disabled:grayscale shadow-lg shadow-indigo-500/20"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-16 h-16 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-xl hover:shadow-[0_20px_50px_rgba(79,70,229,0.4)] transition-all border-2 border-indigo-400/20 overflow-hidden hover:scale-110 active:scale-95"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
        </div>
      </button>
    </div>
  );
};

export default ChatAssistant;