import express from "express"
import connectDb from "./config/db.js"
import dotenv from "dotenv"
import colors from "colors"
import productRoutes from "./routes/productRoutes.js"
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
// adding dotenv
dotenv.config()
    // connection string
connectDb()
const app = express()
app.use("/api/products", productRoutes)

// 404 
app.use(notFound)

// create middleware fro error message
app.use(errorHandler)

const Port = process.env.Port || 5000
app.listen(
    Port,
    console.log(
        `server is running in ${process.env.NODE_ENV} mode on the port ${Port}`
        .yellow.bold
    )
)