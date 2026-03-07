import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi there! Welcome to flow. How can we help you build your digital presence today?", sender: 'bot' }
    ]);
    const [inputText, setInputText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputText.trim() || isLoading) return;

        const userText = inputText;
        const newUserMessage = {
            id: Date.now(),
            text: userText,
            sender: 'user'
        };

        setMessages(prev => [...prev, newUserMessage]);
        setInputText("");
        setIsLoading(true);

        // Simulate network delay for realistic feel
        setTimeout(() => {
            const keywords = {
                'pricing': "Our pricing scales with your needs. You can view our starting packages on the Pricing page or contact us for a custom quote.",
                'cost': "Our pricing scales with your needs. You can view our starting packages on the Pricing page or contact us for a custom quote.",
                'service': "We specialize in Web Development, UI/UX Design, Branding & Identity, Digital Growth, and Meta Ads.",
                'expertise': "We specialize in Web Development, UI/UX Design, Branding & Identity, Digital Growth, and Meta Ads.",
                'meta ad': "Our Meta Ads service focuses on data-driven campaigns designed to maximize ROI and conversion rates.",
                'contact': "You can reach us through the Contact page.",
                'email': "You can reach us through the Contact page.",
                'hello': "Hello! How can we help you build momentum for your digital presence?",
                'hi': "Hi there! How can we help you today?",
                'help': "I can answer questions about our services, pricing, Meta Ads, or how to contact us. What would you like to know?"
            };

            let botResponseText = "I'm not sure I understand. Could you please try asking about our services, pricing, Meta ads, or contact info?";
            const lowerInput = userText.toLowerCase();

            for (const [key, response] of Object.entries(keywords)) {
                if (lowerInput.includes(key)) {
                    botResponseText = response;
                    break;
                }
            }

            const botResponse = {
                id: Date.now() + 1,
                text: botResponseText,
                sender: 'bot'
            };

            setMessages(prev => [...prev, botResponse]);
            setIsLoading(false);
        }, 600);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="pointer-events-auto bg-[#111] border border-white/10 rounded-2xl shadow-2xl w-[350px] overflow-hidden mb-4 flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-white/5 p-4 flex items-center justify-between border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent">
                                    <Bot size={18} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-white">flow. Assistant</h3>
                                    <span className="flex items-center gap-1 text-[10px] text-gray-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        Online
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="h-[350px] overflow-y-auto p-4 space-y-4 bg-transparent scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${msg.sender === 'user'
                                            ? 'bg-brand-accent text-white rounded-tr-sm'
                                            : 'bg-white/10 text-gray-200 rounded-tl-sm'
                                            }`}
                                    >
                                        <p>{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white/10 text-gray-200 rounded-2xl rounded-tl-sm px-4 py-3">
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSendMessage} className="p-4 border-t border-white/10 bg-white/5 flex gap-2">
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 bg-transparent border-none outline-none text-white text-sm placeholder-gray-500"
                            />
                            <button
                                type="submit"
                                disabled={!inputText.trim()}
                                className="text-brand-accent disabled:text-gray-600 transition-colors p-2 hover:bg-white/5 rounded-full"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                layout
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="pointer-events-auto h-14 w-14 bg-brand-accent rounded-full shadow-lg shadow-brand-accent/20 flex items-center justify-center text-white transition-colors hover:bg-brand-accent/90"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                        >
                            <MessageSquare size={24} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
}
