import { NavLink } from 'react-router-dom';

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

const Sidebar = () => {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
    };
  };
  return (
    <div className='w-52 px-3 h-screen flex flex-col justify-center shadow-2xl shadow-gray-900'>
      {menus.map((menu, i) => (
        <NavLink
          style={navLinkStyle}
          to={`/${menu.path}`}
          key={i}
          className='p-3 cursor-pointer rounded-md hover:bg-white'
        >
          {menu.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
