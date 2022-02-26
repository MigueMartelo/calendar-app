import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<CalendarScreen />} />
        <Route path='/login' exact element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
};
