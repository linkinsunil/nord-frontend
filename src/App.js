import './App.css';
import Signup from './pages/Signup';
import Notification from './pages/Notification';
import Image from './pages/Image';
import Text from './pages/Text';
import Calculator from './pages/Calculator';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='bg-gray-200 flex'>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/image' element={<Image />} />
        <Route path='/text' element={<Text />} />
        <Route path='/calculator' element={<Calculator />} />
      </Routes>
    </div>
  );
}

export default App;
