import React from 'react';
import Sidebar from '../components/Sidebar';

const menus = [
  {
    path: 'notification',
    name: 'Notification',
  },
  {
    path: 'image',
    name: 'Image',
  },
  {
    path: 'text',
    name: 'Text',
  },
  {
    path: 'calculator',
    name: 'Calculator',
  },
];

const Home = () => {
  return (
    <div className='bg-gray-200'>
      <Sidebar menus={menus} />
    </div>
  );
};

export default Home;
