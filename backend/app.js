
//un: ecigwe
//pwd: NFIWCuavuHO4dNaB
//mgogodb conn: mongodb+srv://ecigwe:<password>@cluster0-7gwk5.mongodb.net/test?retryWrites=true&w=majority
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const Thing = require('./models/thing');

const app = express();

mongoose.connect('mongodb+srv://ecigwe:NFIWCuavuHO4dNaB@cluster0-7gwk5.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  app.use(bodyParser.json());
  app.use('/images', express.static(path.join(__dirname, 'images')));
  const stuffRoutes = require('./route/stuff');
  const userRoutes = require('./route/user');

  app.use('/api/stuff', stuffRoutes);
  app.use('/api/auth', userRoutes);

  

module.exports = app;