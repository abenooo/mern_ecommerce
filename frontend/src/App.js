import React from "react"
import Footer from "./componets/Footer"
import Header from "./componets/Header"
import {Container} from 'react-bootstrap'
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
        <h1>Welcome to adfhd</h1>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
