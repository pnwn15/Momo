import './App.css';
import { Routes, Route } from 'react-router-dom';  
import Modern from './Modern/Modern';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/modern" element={<Modern />} />
      </Routes>
    </>
  );
}

export default App;
