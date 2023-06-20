const express = require('express')
const connectDB = require('./src/utils/db');
const bodyParser = require('body-parser')
const matchRoutes = require('./src/routes/matches');
const playerRoutes = require('./src/routes/players');
const teamRoutes = require('./src/routes/teams');
require('dotenv').config();



const app = express()

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(matchRoutes);
app.use(playerRoutes);
app.use(teamRoutes);


connectDB()
  .then(() => {
    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Unable to start server:', error);
  });





