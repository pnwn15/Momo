import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import pkg from 'pg';
const { Pool } = pkg;

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// 👇 แก้ชื่อ database ให้ถูกต้องตรงกับที่คุณสร้างไว้ (เช่น silo_data)
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'silo_data',
  password: '64010226', // <--- ใส่รหัสผ่านที่ถูกต้องของคุณ
  port: 5432,
});

// 🔧 API POST สำหรับรับข้อมูลจาก frontend
app.post('/api/silos', async (req, res) => {
  const { silo_id, temperature, humidity, weight, percent } = req.body;

  console.log("Received from frontend:", req.body);

  try {
    await pool.query(
      'INSERT INTO silos (silo_id, temperature, humidity, weight, percent) VALUES ($1, $2, $3, $4, $5)',
      [silo_id, temperature, humidity, weight, percent]
    );
    res.status(200).json({ message: '✅ Data inserted into database' });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: '❌ Database error' });
  }
});
app.listen(port, () => {
  console.log(`✅ Server running on http://localhost:${port}`);
});
