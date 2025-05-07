import './App.css';
import { Routes, Route } from 'react-router-dom';  
import Modern from './Modern/Modern';
import Navbar from './navbar/Navbar';
import EcommerceDashboard from './Ecommerce/Ecommerce';

function App() {
  return (
    <>
      <Routes>
        <Route path="/modern" element={<Modern />} />
        <Route path="/ecommerce" element={<EcommerceDashboard />} />
      </Routes>
    </>
  );
}

export default App;
