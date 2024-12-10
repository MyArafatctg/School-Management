import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { assets } from '../assets/assets';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log('email', email);
    console.log('password', password);
    try {
        const response = await fetch(`http://182.163.101.182:9080/fdml/edu/eeom/auth/getAuth?userName=${email}&password=${password}`); 
        const data = await response.json();
        if(data.success){
          setToken(data.token);
          toast.success("Login successfully");
        }else{
          toast.error(data.message);
        }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div
      className='min-h-screen flex items-center justify-center w-full bg-cover bg-center'
      style={{ backgroundImage: `url(${assets.bg_login_1})` }}>
      <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
        <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className='mb-2 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
              type="text"
              placeholder='your@email.com'
              required />
          </div>
          <div className='mb-2 min-w-72'>
            <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none'
              type="password"
              placeholder='Enter your password'
              required />
          </div>
          <button
            className='mt-2 w-full py-2 rounded-md text-white bg-black'
            type='submit'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
