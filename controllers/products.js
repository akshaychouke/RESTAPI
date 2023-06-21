const Product = require("../models/products");

const getAllProducts = async (req, res) => {
  //to tackle the empty response object
  const { company, name, featured } = req.query;
  const queryObject = {};

  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" }; //regex is used for regular expression
  }

  if (featured) {
    queryObject.featured = featured;
  }

  //to do pagination
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 3;

  //formula for pagination is
  let skip = (page - 1) * limit;

  // console.log(queryObject);

  try {
    const data = await Product.find(queryObject).skip(skip).limit(limit);
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

//for testing route
const getAllProductsTesting = async (req, res) => {
  try {
    // const data = await Product.find(req.query).sort("-name");  // sort is used the sort the response based on given field and - used to sort in decending order
    const data = await Product.find(req.query).select("name company"); //select is used to show only the data of entered field
    res.status(200).json({ data });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllProducts, getAllProductsTesting };
