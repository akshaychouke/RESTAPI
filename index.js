require('dotenv').config();
const express = require("express");

const app = express();
const {connectDB} = require('./database/connect');
//products routes importing
const products_routes = require("./routes/products");
 
app.get("/", (req, res) => {
  res.send("<h1>Hi I am home directory</h1>");
});


//middleware or to set router
app.use("/api/products", products_routes);

const start = async()=>{
  try{
    // to connect with db calling the function with databse url
    await connectDB(process.env.MONGODB_URI);
    app.listen(8000, () => {
      console.log("Server started listning");
    });
  }
  catch(err){
    console.log(err);
  }
}

start();