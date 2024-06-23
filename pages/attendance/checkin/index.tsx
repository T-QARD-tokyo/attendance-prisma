"use client"
import React, { useState } from 'react';
import axios from 'axios';

const CheckIn: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleCheckIn = async () => {
    try {
      const response = await axios.post('/api/attendance/checkin');
      setMessage(response.data.message);
    } catch (error) {
      setMessage('エラーが発生しました。再試行してください。');
    }
  };

  return (
    <div>
      <h1>出勤</h1>
      <button onClick={handleCheckIn}>出勤する</button>
      <p>{message}</p>
    </div>
  );
};

export default CheckIn;
