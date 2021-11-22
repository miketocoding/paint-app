import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

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
    <Navbar bg="light" variant='light' expand="lg">
        <Container>
        <Navbar.Brand href="/paint-app/">Landing Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="/paint-app/">Home</Nav.Link>
            <Nav.Link href="/paint-app/paint">Paint and Play</Nav.Link>
        </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Header