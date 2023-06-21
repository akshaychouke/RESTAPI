require('dotenv').config(); // Import and configure dotenv

const { connectDB } = require('./database/connect');
const Product = require('./models/products');
const data = require('./data.json');

const start = async () => {
  try {
    const uri = process.env.MONGODB_URI; // Access the environment variable
    await connectDB(uri);
    // await Product.deleteMany();
    await Product.create(data);
    console.log('Success');
  } catch (error) {
    console.log(error);
  }
};

start();
