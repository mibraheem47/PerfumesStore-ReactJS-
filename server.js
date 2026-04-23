const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

// Serve static files (HTML, CSS, images) from public folder
app.use(express.static(path.join(__dirname, 'public')));

// API route to get perfumes
app.get('/api/perfumes', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'perfume.json'); // Make sure this file exists
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading perfume.json:', err);
            return res.status(500).json({ error: 'Could not read perfumes' });
        }

        try {
            const perfumes = JSON.parse(data);
            res.json(perfumes);
        } catch (parseErr) {
            console.error('Error parsing perfume.json:', parseErr);
            res.status(500).json({ error: 'Invalid JSON in perfume.json' });
        }
    });
});

// Start server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
