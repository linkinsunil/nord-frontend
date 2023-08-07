import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const Notification = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleClick = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className='relative bg-gray-200 w-full flex items-center justify-center '>
      <Sidebar />
      <div className='flex flex-1 flex-col items-center justify-center'>
        <button
          onClick={handleClick}
          className='transition ease-in-out delay-150 px-3 py-2 bg-red-600 hover:bg-red-500 text-2xl font-bold text-white shadow-gray-950 shadow-2xl'
        >
          Notify Me!
        </button>

        {showNotification && (
          <div className='absolute px-3 py-2 rounded-md bg-blue-500 text-white font-semibold top-2 '>
            You've been notified successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;
