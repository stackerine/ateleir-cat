const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.json({ status: 200 });
});

app.listen(3000, () => console.log('Server started'));
