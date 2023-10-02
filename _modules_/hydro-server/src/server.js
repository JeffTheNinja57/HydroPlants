const express = require('express');
const app = express();

app.get('/api/plants', (req, res) => {
    // Implement code to retrieve plant data from the database
    // Send the data as a JSON response
    db.all('SELECT * FROM plants', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ plants: rows });
    });
});
