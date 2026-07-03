import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, UserCheck, Sparkles, Loader } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Message } from '../types';

interface ChatbotProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  initialMessage?: string;
}

export default function Chatbot({ isOpen, setIsOpen, initialMessage }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: initialMessage || 'Hello! How can we assist with your solar infrastructure needs today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Update welcome message if initialMessage changes dynamically
  useEffect(() => {
    if (initialMessage) {
      setMessages((prev) => {
        // If first message is welcome and text differs, update it
        if (prev.length > 0 && prev[0].id === 'welcome') {
          return [
            {
              ...prev[0],
              text: initialMessage,
            },
            ...prev.slice(1),
          ];
        }
        return prev;
      });
    }
  }, [initialMessage]);

  // Scroll to bottom whenever messages list updates or chat opens
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Auto-open chatbot after 3 seconds on first load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [setIsOpen]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputValue.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMsg.text,
          history: messages, // pass history for context
        }),
      });

      const data = await response.json();
      
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: data.reply || "I'm having a little trouble connecting. How can I help you regarding solar energy?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error('Error contacting support chatbot:', error);
      const errorMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: 'Our expert advisors are currently offline, but we would love to review your configuration. Please fill out our brief consultation request form in the Contact section!',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="w-80 md:w-96 bg-white border border-gray-200 shadow-2xl rounded-lg overflow-hidden flex flex-col h-[450px]"
          >
            {/* Header */}
            <div className="bg-industrial-charcoal text-white p-4 flex justify-between items-center border-b border-white/5 shadow-sm">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-solar-red animate-pulse" />
                <span className="font-bold text-sm tracking-wide">Power Pulse Support</span>
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block animate-ping" />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-solar-red hover:rotate-90 transition-all duration-200"
                aria-label="Close Chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Conversation Area */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {/* Bot Avatar */}
                  {msg.sender === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-solar-red flex items-center justify-center text-white shadow-sm flex-shrink-0 mt-0.5">
                      <UserCheck className="h-4 w-4" />
                    </div>
                  )}

                  <div className="flex flex-col max-w-[75%]">
                    <div
                      className={`p-3 rounded-lg text-sm shadow-xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-solar-red text-white rounded-br-none'
                          : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className={`text-[10px] text-gray-400 mt-1 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {/* Bot Loading Indicator */}
              {isLoading && (
                <div className="flex gap-2.5 justify-start">
                  <div className="w-8 h-8 rounded-full bg-solar-red flex items-center justify-center text-white shadow-sm flex-shrink-0 mt-0.5">
                    <UserCheck className="h-4 w-4" />
                  </div>
                  <div className="bg-white text-gray-400 p-3 rounded-lg rounded-tl-none text-sm border border-gray-100 flex items-center gap-2 max-w-[75%]">
                    <Loader className="h-4 w-4 animate-spin text-solar-red" />
                    <span>Advisor is analyzing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Form Input Line */}
            <form
              onSubmit={handleSendMessage}
              className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-solar-red text-gray-800 focus:bg-white transition-colors"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isLoading}
                className={`w-10 h-10 rounded flex items-center justify-center text-white transition-all shadow-md ${
                  inputValue.trim() && !isLoading
                    ? 'bg-solar-red hover:bg-red-700 active:scale-95 hover:scale-105 cursor-pointer shadow-solar-red/10'
                    : 'bg-gray-300 cursor-not-allowed shadow-none'
                }`}
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-solar-red rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-red-700 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shadow-solar-red/30 relative"
        aria-label="Toggle Chat"
        animate={{
          boxShadow: [
            '0px 4px 20px rgba(200, 16, 46, 0.4)',
            '0px 4px 30px rgba(200, 16, 46, 0.6)',
            '0px 4px 20px rgba(200, 16, 46, 0.4)',
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.5,
          ease: 'easeInOut',
        }}
      >
        <MessageSquare className="h-7 w-7" />
        {/* Active notification badge */}
        {!isOpen && (
          <span className="absolute top-0 right-0 h-3 w-3 bg-emerald-500 rounded-full border-2 border-white animate-pulse" />
        )}
      </motion.button>
    </div>
  );
}
