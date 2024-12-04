import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Add from './pages/Add'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [token, setToken ] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');

  useEffect(()=>{
    localStorage.setItem('token',token);
  },[token])
  console.log(token);
  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer/>
      {token === "" ?
        <Login setToken={setToken}></Login>
        : <>
          <Navbar setToken={setToken} />
          <hr />
          <div className='flex w-full'>
            <Sidebar />
            <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
              <Routes>
                <Route path='/dashboard' element={<Dashboard token = {token}></Dashboard>}></Route>
                <Route path='/add' element={<Add token = {token}/>}></Route>
              </Routes>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default App
