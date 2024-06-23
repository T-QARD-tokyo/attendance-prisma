"use client"
import React, { useState } from 'react';
import axios from 'axios';

const CheckOut: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleCheckOut = async () => {
    try {
      const response = await axios.post('/api/attendance/checkout');
      setMessage(response.data.message);
    } catch (error) {
      setMessage('エラーが発生しました。再試行してください。');
    }
  };

  return (
    <div>
      <h1>退勤</h1>
      <button onClick={handleCheckOut}>退勤する</button>
      <p>{message}</p>
    </div>
  );
};

export default CheckOut;
