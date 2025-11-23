import React, { useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isLoading = false }) => {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (message.trim() === '') {
      toast({
        title: "Empty Message",
        description: "Please enter a message before sending.",
        variant: "destructive",
      });
      return;
    }

    onSendMessage(message);
    setMessage('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };


  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2 p-4 bg-secondary/10 rounded-md border border-secondary/30 dark:bg-secondary/20 dark:border-secondary/40">
      <Input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={handleInputChange}
        ref={inputRef}
        disabled={isLoading}
        className="flex-grow shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send'}
      </Button>
    </form>
  );
};

export default ChatInput;