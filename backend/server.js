const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// API endpoint
app.get('/api/data', (req, res) => {
    res.json({
        message: 'Chào từ Backend!',
        timestamp: new Date().toISOString(),
        status: 'success'
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', uptime: process.uptime() });
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});