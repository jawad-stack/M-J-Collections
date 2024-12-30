const Product = require('../models/product');

// Get all products
const getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
};

// Create product
const createProduct = async (req, res) => {
    const { name, price, description, stock } = req.body;
    const product = new Product({ name, price, description, stock });

    await product.save();
    res.status(201).json(product);
};

module.exports = { getAllProducts, createProduct };
