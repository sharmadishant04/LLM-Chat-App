// src/components/ChatWindow.jsx
import React, { useEffect, useRef, useState } from 'react';

import Message from './Message';

const ChatWindow = ({ messages, isLoading }) => {

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const [editingIndex, setEditingIndex] = useState(null);

  const handleEditMessage = (index) => {
    setEditingIndex(index);
  };

  const handleDeleteMessage = (index) => {
    // Logic to delete the message
  };

  return ( 

    <div className="flex-1 overflow-y-auto p-6">
      {messages.map((msg, index) => (
        <Message 
          onEdit={() => handleEditMessage(index)}
          onDelete={() => handleDeleteMessage(index)}

          key={index}
          role={msg.role}
          content={msg.content}
          timestamp={msg.timestamp}
        />
      ))}
      <div ref={endRef} />
      {isLoading && <div className="loading-spinner">Loading...</div>}

    </div>
  );
};

export default ChatWindow;
