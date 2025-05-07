import './App.css';
import { Routes, Route } from 'react-router-dom';  // ไม่ต้องใช้ BrowserRouter ซ้ำแล้ว
import Modern from './Modern/Modern';
import Navbar from './navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Modern />} />
      </Routes>
    </>
  );
}

export default App;
