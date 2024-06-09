// const productdata = require("../util/productdata.json");
const ProductCollection = require("../models/ProductSchema");

const productcontroller = async (req, res) => {
  try {
    // const filterdata = productdata.filter(
    //   (product) => product.category === "Food"
    // );
    const productdata = await ProductCollection.find({ category: "Health" });
    res.status(200).json(productdata);
  } catch (error) {
    console.log(`Error in fetching Product`.bgRed.white);
  }
};
module.exports = productcontroller;

//db.product.find({category:"food"})

// db.product.aggregate({
// $match:{categoy:"food"}
// })

//products.filter((product)=>{
// return product.category=="food"
// })
