"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { MessageCircle, Send, X, Minus } from "lucide-react"
import messagesData from "@/app/chatbox/messages.json"

type Message = {
  id: number;
  sender: string;
  text: string;
  timestamp: string;
  avatar: string;
};

export function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'assistant',
      text: 'Hello! I am your task management assistant. How can I help you organize your work today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      avatar: messagesData.assistant.avatar
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen, isMinimized]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue;
    const time = new Date().toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    setInputValue('');
    setIsLoading(true);

    const userMsg: Message = {
      id: Date.now(),
      sender: 'user',
      text: userText,
      timestamp: time,
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user',
    };

    setMessages((prev) => [...prev, userMsg]);

    try {
      const apiMessages = messages.map((m) => ({
        role: m.sender === 'user' ? 'user' : 'assistant',
        content: m.text,
      }));
      apiMessages.push({ role: 'user', content: userText });

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!res.ok) throw new Error('API Error');

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'assistant',
          text: data.reply,
          timestamp: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          }),
          avatar: messagesData.assistant.avatar,
        },
      ]);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="h-16 w-16 rounded-full bg-linear-to-br from-blue-500 to-blue-600 text-white shadow-lg hover:from-blue-600 hover:to-blue-700 hover:shadow-xl transition-all flex items-center justify-center"
          aria-label="Open Chatbox"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <Card className={`w-[350px] shadow-2xl transition-all duration-300 ease-in-out ${isMinimized ? 'h-16' : 'h-[500px]'} flex flex-col`}>
          <CardHeader className="p-4 border-b flex flex-row items-center justify-between space-y-0 bg-primary/5">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={messagesData.assistant.avatar} />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold">{messagesData.assistant.name}</p>
                 {!isMinimized && (
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  <span className="text-xs text-muted-foreground">{messagesData.assistant.status}</span>
                </div>
                 )}
              </div>
            </div>
            <div className="flex gap-1" >
               <Button size="icon" variant="ghost" className="h-8 w-8" onClick={() => setIsMinimized(!isMinimized)}>
                   <Minus className="h-4 w-4" />
               </Button>
               <Button size="icon" variant="ghost" className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive" onClick={() => setIsOpen(false)}>
                   <X className="h-4 w-4" />
               </Button>
            </div>
          </CardHeader>

          {!isMinimized && (
              <>
                <CardContent className="p-0 flex-1 overflow-hidden">
                    <ScrollArea className="h-full px-4 py-4">
                        <div ref={scrollRef} className="space-y-4">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex gap-3 ${
                                    msg.sender === 'assistant' ? '' : 'flex-row-reverse'
                                    }`}
                                >
                                    <Avatar className="h-8 w-8 mt-1">
                                    <AvatarImage src={msg.avatar} />
                                    <AvatarFallback>
                                        {msg.sender === 'user' ? 'U' : 'A'}
                                    </AvatarFallback>
                                    </Avatar>

                                    <div className={`flex flex-col max-w-[75%] ${msg.sender === 'assistant' ? 'items-start' : 'items-end'}`}>
                                       <div
                                            className={`px-3 py-2 rounded-lg text-sm ${
                                            msg.sender === 'assistant'
                                                ? 'bg-muted text-foreground'
                                                : 'bg-primary text-primary-foreground'
                                            }`}
                                        >
                                            {msg.text}
                                        </div>
                                        <span className="text-[10px] text-muted-foreground mt-1">
                                            {msg.timestamp}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </CardContent>

                <CardFooter className="p-3 border-t bg-background">
                    <form 
                        onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
                        className="flex w-full items-center gap-2"
                    >
                        <Input
                            placeholder="Type a message..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            className="flex-1"
                        />
                        <Button type="submit" size="icon" disabled={!inputValue.trim() || isLoading}>
                            <Send className="h-4 w-4" />
                        </Button>
                    </form>
                </CardFooter>
              </>
          )}
        </Card>
    </div>
  )
}
