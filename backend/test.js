import express from "express"
import connectDb from "./config/db.js"
import dotenv from "dotenv"
import colors from "colors"
import productRoutes from "./routes/productRoutes.js"
// adding dotenv
dotenv.config()
// connection string
connectDb()
const app = express()
app.use("/api/products", productRoutes)
// create middleware fro error message
app.use((err, req, req, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  })
})

const Port = process.env.Port || 5000
app.listen(
  Port,
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on the port ${Port}`
      .yellow.bold
  )
)
