const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//IMPORT ROUTES
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
});

// CONNECT TO DB
const dbURI = process.env.DB_CONNECTION;
mongoose
  .connect(dbURI)
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));
