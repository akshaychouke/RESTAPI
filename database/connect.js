const mongoose = require("mongoose");
// const uri =
//   "mongodb+srv://akshaychauke50:Akshaymongo1@cluster0.cgclfqo.mongodb.net/cluster0?retryWrites=true&w=majority";

const connectDB = (uri) => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = { connectDB };
