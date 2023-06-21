const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: [true, "name should not be empty"] },
  price: { type: Number, required: [true, "Price must be provided"] },
  featured: { type: Boolean, default: false },
  rating: { type: Number, default: 4.5 },
  creatAt: { type: Date, default: Date.now() },
  company: {
    type: String,
    enum: {
      values: ["apple", "samsung", "oppo", "dell", "mi"],
      message: `{VALUE} is not supported `,
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
