import React, { useState } from 'react';

const CheckInButton: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleCheckIn = async () => {
    try {
      //const response = await axios.post('/api/attendance/checkin');
      let response = {data: {message: '出勤しました。'}};
      setMessage(response.data.message);
    } catch (error) {
      setMessage('エラーが発生しました。再試行してください。');
    }
  };

  return (
    <div>
      <button onClick={handleCheckIn}>出勤する</button>
    </div>
  );
};