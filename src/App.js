import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage, ErrorPage } from '@/pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/test" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
