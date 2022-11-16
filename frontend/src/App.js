import React from "react"
import Footer from "./componets/Footer"
import Header from "./componets/Header"
import { Routes, Route } from "react-router-dom"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen"
const App = () => {
  return (
    <Routes>
      {/* home screen  */}
      <Route
        path='/'
        exact
        element={
          <>
            <Header />
            <HomeScreen />
            <Footer />
          </>
        }
      />
      <Route
        path='/product/:id'
        element={
          <>
            <Header />
            <ProductScreen />
            <Footer />
          </>
        }
      />
    </Routes>
  )
}

export default App
