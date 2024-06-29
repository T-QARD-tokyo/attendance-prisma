'use client';
import { useState, useRef } from 'react';

type Props = {
    date: Date;
}

const calcDiffSeconds = (targetDateTime: Date, compareDateTime: Date) => {
    let diffMilliSecond = targetDateTime.getTime() - compareDateTime.getTime();
    // ミリセカンドから秒に変換して返す
    return Math.floor(diffMilliSecond / 1000);
}

const Sec2Time = (sec: number) => {
    let hour = Math.floor(sec / 3600);
    let minute = Math.floor((sec % 3600) / 60);
    let second = sec % 60;
    return `${hour}時間${minute}分${second}秒`;
}

export const TimeKeeper = (props: Props) => {
    // 現在時刻とpropsで受け取った時刻の差分を計算
    const durationSeconds = calcDiffSeconds(new Date(), props.date);

    // 時間の情報をnumberで管理。表示するときにSec2Timeで文字列に変換
    const [time, setTime] = useState(durationSeconds);
    const intervalRef = useRef(null);

    intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10);
    }, 10);

    return (
        <div>
            <p>{Sec2Time(time)}</p>
        </div>
    );
}