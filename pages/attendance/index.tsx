import React from 'react';
import Link from 'next/link';

const Page: React.FC = () => {
  return (
    <div>
      <h1>勤怠管理</h1>
      <nav>
        <ul>
          <li>
            <Link href="/attendance/record">勤怠記録をつける</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Page;
