'use client';
import React, { useState } from 'react';
import prisma from '../../lib/prisma';

type Props = {
  userID: string;
}

export const CheckInButton = (props: Props) => {
  const [message, setMessage] = useState('');

  const handleCheckIn = async () => {
    try {
      //const response = await axios.post('/api/attendance/checkin');
      const response = await prisma.user.findUnique(
        {
          where: {
            id: props.userID
          }
        }
      )
      if (response.working) {
        throw new Error('すでに出勤しています。');
      } else {
        await prisma.user.update({
          where: {
            id: props.userID
          },
          data: {
            working: true
          }
        })
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div>
      <button onClick={handleCheckIn}>出勤する</button>
      <p>{message}</p>
    </div>
  );
};