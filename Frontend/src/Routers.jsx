import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import { ThemeProvider } from './context/Theme';
import Protected from './utils/Protected.config';

export default function Routers() {
  return (
    <>
        <BrowserRouter>
        <ThemeProvider>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/dashboard' element={<Protected ><Dashboard /></ Protected>} />
            </Routes>
            </ThemeProvider>
        </BrowserRouter>
    </>
  )
}