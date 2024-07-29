const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(cors());

const results = [];

fs.createReadStream('data/publicaciones.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
      console.log('CSV file successfully processed');
  });

app.get('/publicaciones', (req, res) => {
    res.json(results);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
