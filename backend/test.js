const express = require("express")
const products = require("./data/products")
const dotenv = require("dotenv")
const app = express()
// adding dotenv
dotenv.config()
const Port = process.env.Port || 5000
app.listen(Port, console.log(`server is running in ${process.env.NODE_ENV} mode on the port ${Port}`))
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
