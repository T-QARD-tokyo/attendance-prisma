'use client';

import { CheckInButton } from "../../../components/checkin/CheckInButton";
import { CheckOutButton } from "../../../components/checkout/CheckOutButton";
import { SendData } from "../../../components/sendData/SendData";
import { TimeKeeper } from "../../../components/timeKeeper/TimeKeeper";

import { useState } from 'react';
import prisma from "../../../lib/prisma";

const Page = () => {
    const userID = '1';
    const [checkInTime, setCheckInTime] = useState(new Date());

    return (
        <div>
            <h1>勤怠記録</h1>
            <CheckInButton userID={userID} />
            <CheckOutButton userID={userID} setState={setCheckInTime}/>
            <SendData userID={userID} comment="コメント" checkIn={checkInTime} checkOut={new Date()}/>
        </div>
    )
}

export default Page;