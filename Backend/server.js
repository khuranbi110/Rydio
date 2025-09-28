const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Low } = require('lowdb');
const { JSONFile } = require('lowdb/node');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database setup
const dbFile = path.join(__dirname, 'db.json');
const adapter = new JSONFile(dbFile);
const db = new Low(adapter, { bikes: [], showrooms: [], bookings: [] });

// Load database before handling requests
async function initDB() {
  await db.read();
  db.data ||= { bikes: [], showrooms: [], bookings: [] };
  await db.write();
}
initDB();

// --- API Routes ---

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is running 🚀' });
});

// Get all bikes
app.get('/api/bikes', async (req, res) => {
  await db.read();
  res.json(db.data.bikes);
});

// Get bike by ID
app.get('/api/bikes/:id', async (req, res) => {
  await db.read();
  const bike = db.data.bikes.find(b => b.id === req.params.id);
  if (bike) res.json(bike);
  else res.status(404).json({ error: 'Bike not found' });
});

// Get showrooms
app.get('/api/showrooms', async (req, res) => {
  await db.read();
  res.json(db.data.showrooms);
});

// Get bookings
app.get('/api/bookings', async (req, res) => {
  await db.read();
  res.json(db.data.bookings);
});

// Create booking
app.post('/api/bookings', async (req, res) => {
  const booking = req.body;
  if (!booking || !booking.bikeId || !booking.user) {
    return res.status(400).json({ error: 'Invalid booking data' });
  }

  await db.read();
  booking.id = Date.now().toString();
  db.data.bookings.push(booking);
  await db.write();

  res.status(201).json(booking);
});

// --- Serve frontend build (if exists) ---
const frontendPath = path.join(__dirname, '../dist');
app.use(express.static(frontendPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
