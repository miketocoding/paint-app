import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        // <nav>
        //     <ul>
        //         <a href="#">Click Me</a>
        //     </ul>
        // </nav>
    // <Navbar bg='primary' variant='dark' expand='md'>
    //     <Navbar.brand href="#">
    //         Paint Your Soul
    //     </Navbar.brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //         <Nav className="ml-auto">
    //             <Nav.Link href="#/">Home</Nav.Link>
    //             <Nav.Link href="#/paint">Paint and Play</Nav.Link>
    //         </Nav>
    //     </Navbar.Collapse>
    // </Navbar>
    <Navbar variant='dark' expand="lg" className="navigation shadow sticky-top">
        <Container>
        <Navbar.Brand href="/paint-app/">Paint Your Soul</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Link><Link to="/" className="text-reset text-decoration-none">Home</Link></Nav.Link>
            <Nav.Link><Link to="/paint/" className="text-reset text-decoration-none">Paint It Out!</Link></Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Header