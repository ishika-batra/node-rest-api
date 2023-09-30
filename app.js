const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

// ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
});

app.get('/posts', (req, res) => {
  res.send('We are on posts');
});

// CONNECT TO DB
const dbURI = process.env.DB_CONNECTION;
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));
