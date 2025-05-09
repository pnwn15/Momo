// src/App.tsx
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';  
import Modern from './Modern/Modern';
import EcommerceDashboard from './Ecommerce/Ecommerce';
import Loading from './Components/Loading';
import React, { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // โหลด 1 วินาทีหลังเปลี่ยนหน้า
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isLoading) return <Loading />;

  return (
    <Routes>
      <Route path="/" element={<Modern />} />
      <Route path="/ecommerce" element={<EcommerceDashboard />} />
    </Routes>
  );
}

export default App;
