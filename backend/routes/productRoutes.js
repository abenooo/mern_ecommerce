import express from 'express';
const router = express.Router()
import Product from '../models/productModel.js'
import asyncHandler from "express-async-handler"

router.get('/', asyncHandler(async(req, res) => {
    // fetch all products from model
    // route GET /api/product
    const products = await Product.find({})
    res.json(products)
}))


router.get('/:id', asyncHandler(async(req, res) => {
    // fetch single products from model
    // route GET /api/product/:id
    const product = await Product.findById(req.params.id)

    if (product) {
        res.json(product)
    } else
        res.status(404).json({ message: "Product is not found" })
}))

export default router