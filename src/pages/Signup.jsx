import { useState } from 'react';
import FormInput from '../components/FormInput';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      label: 'Email',
      errorMessage: 'Please enter a valid email address!',
      required: true,
    },
    {
      id: 2,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      errorMessage:
        'Password should be 8-20 characters long and should include 1 number, 1 letter and 1 special character!',
      required: true,
    },
  ];
  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    values.email && values.password && navigate('/home');
  };

  return (
    <div className='bg-gray-200 flex items-center justify-center h-screen'>
      <div className='flex flex-col bg-white w-80 text-center p-8 rounded-2xl'>
        <p className='font-bold text-4xl text-black font-montserrat mb-2'>
          Sign Up
        </p>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col items-start text-base font-lato w-full mt-6  bg-white rounded-[1.25rem] mb-2'
        >
          {inputs.map(input => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <a href='/#' className='text-blue-500 mb-2 text-xs p-2 self-end'>
            Forgot Password?
          </a>

          <button className='bg-black text-white font-bold py-2 px-4 rounded-[0.625rem] w-full font-montserrat'>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
