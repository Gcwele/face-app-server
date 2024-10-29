const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorMiddleware');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use(cors({ origin: 'http://localhost:3000' })); 
// Error handling middleware
app.use(errorHandler);

module.exports = app;
