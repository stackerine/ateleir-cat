const express = require('express');
const path = require('path');

const app = express();

app.get('/status', (req, res, next) => {
  res.json({ status: 200 });
});

app.use('/', express.static(path.join(__dirname, '../client/build/')));

app.get('*', (req, res, next) => {
  res.json({ status: 455 });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server started'));
