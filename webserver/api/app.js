const express = require('express');
const cors = require('cors');
const compression = require('compression');

const app = express();

// Middleware
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route
app.get('/', (req, res) => {
  res.json({
    message: 'Backend server is running',
    status: 'OK'
  });
});

// Health check route
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

// Hello API route
app.get('/api/hello', (req, res) => {
  const name = req.query.name || "User";
  
  res.json({
    message: `Hello ${name}, welcome to wealth management!`,
    project: "Azure Function App demo"
  });
});

module.exports = app;