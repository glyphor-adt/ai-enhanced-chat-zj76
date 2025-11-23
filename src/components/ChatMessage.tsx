import React from 'react';
import { cn } from '@/lib/utils';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ role, content }) => {
  return (
    <div
      className={cn(
        'flex items-start gap-2 py-2',
        role === 'user' ? 'justify-end' : 'justify-start'
      )}
    >
      {role === 'user' ? (
        <>
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">
            <User className="h-4 w-4" />
          </div>
          <div className="max-w-2xl rounded-md bg-blue-100 px-3 py-2 text-sm text-gray-900">
            {content}
          </div>
        </>
      ) : (
        <>
          <div className="max-w-2xl rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-900">
            {content}
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center">
            <Bot className="h-4 w-4" />
          </div>
        </>
      )}
    </div>
  );
};

export default ChatMessage;