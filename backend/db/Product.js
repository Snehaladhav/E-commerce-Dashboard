const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  company: String,
  category: String,
  UserId: String,
});
module.exports = mongoose.model("products", productSchema);
