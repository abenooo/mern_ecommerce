import  express from "express"
import products from "./data/products.js"
import connectDb from "./config/db.js"
import  dotenv from "dotenv"
import colors from 'colors'
const app = express()
// adding dotenv
dotenv.config()
// connection string
connectDb()
const Port = process.env.Port || 5000
app.listen(Port, console.log(`server is running in ${process.env.NODE_ENV} mode on the port ${Port}`.yellow.bold))
app.get("/", (req, res) => {
  res.send("Backend running on nodemon ....., no refresh using nodemon")
})
app.get("/api/products", (req, res) => {
  res.json(products)
})
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === req.params.id)
  res.json(product)
})
