
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import ChatMessage from '@/components/ChatMessage';

const Mobile = () => {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    {
      text: "Welcome to HopeHub!\nReply with a number:\n1- My Points\n2- Find Work\n3- Report Crime",
      isUser: false,
    },
  ]);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleOption = (option: string) => {
    // Add user's choice as a message
    setMessages(prev => [...prev, { text: option, isUser: true }]);

    // Process the response
    switch (option) {
      case "1":
        setMessages(prev => [...prev, {
          text: "HopePoints: 750\nPoints needed for next milestone: 250\nWant to redeem?\n1- Redeem Food Coupon\n2- Redeem Transport Ticket\n3- No Redeem",
          isUser: false
        }]);
        break;
      case "2":
        setMessages(prev => [...prev, {
          text: "Available Work:\n1- Community Wall Painting\n2- Minor Repairing\n0- Back",
          isUser: false
        }]);
        break;
      case "3":
        setMessages(prev => [...prev, {
          text: "Please type the crime location and type of crime.",
          isUser: false
        }]);
        setShowInput(true);
        break;
      default:
        // Return to main menu
        setMessages(prev => [...prev, {
          text: "Welcome back!\nReply with a number:\n1- My Points\n2- Find Work\n3- Report Crime",
          isUser: false
        }]);
    }
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setMessages(prev => [
        ...prev,
        { text: inputValue, isUser: true },
        { 
          text: "Thank you for your report. We'll investigate this right away.\n\nMain Menu:\n1- My Points\n2- Find Work\n3- Report Crime",
          isUser: false 
        }
      ]);
      setInputValue('');
      setShowInput(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto space-y-4 pb-20">
        {messages.map((message, index) => (
          <ChatMessage key={index} text={message.text} isUser={message.isUser} />
        ))}
        
        {!showInput ? (
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
            <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
              <Button 
                onClick={() => handleOption("1")}
                className="w-full text-lg py-6"
              >
                1
              </Button>
              <Button 
                onClick={() => handleOption("2")}
                className="w-full text-lg py-6"
              >
                2
              </Button>
              <Button 
                onClick={() => handleOption("3")}
                className="w-full text-lg py-6"
              >
                3
              </Button>
            </div>
          </div>
        ) : (
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t">
            <div className="max-w-md mx-auto flex gap-2">
              <Textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="text-lg"
                placeholder="Type your report here..."
              />
              <Button onClick={handleSubmit} className="whitespace-nowrap">
                Send
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mobile;
