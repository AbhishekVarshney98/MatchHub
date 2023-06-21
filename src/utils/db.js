const mongoose = require('mongoose');
require('dotenv').config();
// MongoDB connection URL
const url = process.env.MONGO_URI;

// Database Name
const dbName = 'Matchhub';

//function to establish DB connection
const connectDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
  }
};

module.exports = connectDB;


