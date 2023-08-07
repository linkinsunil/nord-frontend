import { useState } from 'react';
import axios from 'axios';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState(null);
  const [result, setResult] = useState('');

  console.log('num1', num1);
  console.log('num2', num2);
  console.log('operation', operation);

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`http://localhost:8000/${operation}`, {
        num1: Number(num1),
        num2: Number(num2),
      });

      console.log(res);
      setResult(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='bg-gray-200 w-full flex items-center justify-center p-4'>
      <div className='flex flex-col'>
        <div className='flex w-full flex-wrap'>
          <input
            type='number'
            className='w-24 py-2 px-1 outline-none m-2'
            placeholder='Enter #1'
            value={num1}
            onChange={e => setNum1(e.target.value)}
          />
          <input
            type='number'
            className='w-24 py-2 px-1 outline-none m-2'
            placeholder='Enter #2'
            value={num2}
            onChange={e => setNum2(e.target.value)}
          />
          <select
            onChange={e => setOperation(e.target.value)}
            className='py-2 w-24 px-1 m-2 cursor-pointer outline-none'
          >
            <option value=''>Select</option>
            <option value='add'>Add</option>
            <option value='subtract'>Subtract</option>
            <option value='multiply'>Multiply</option>
          </select>
        </div>
        <button
          onClick={handleSubmit}
          className='w-full py-2 self-center bg-black text-white font-semibold hover:font-bold m-2'
        >
          Calculate
        </button>

        {result && <p className='text-xl font-bold'>Result : {result}</p>}
      </div>
    </div>
  );
};

export default Calculator;
