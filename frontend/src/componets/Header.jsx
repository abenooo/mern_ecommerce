import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Container } from "react-bootstrap"

import { Link } from "react-router-dom"
const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Link to='/'>
            <Navbar.Brand>Ecommere</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto gap-4'>
              <Link
                to='/cart'
                className='text-white gap-2 text-decoration-none'
              >
                <i className='fas fa-shopping-cart text-white'></i>
                Cart
              </Link>
              <Link to='/login' className='text-white text-decoration-none'>
                <i className='fas fa-user text-white'></i>
                Sign In
              </Link>
              <Link to='/login' className='text-white text-decoration-none'>
                <i className='fa fa-language txt-white'></i>
                Lang
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
