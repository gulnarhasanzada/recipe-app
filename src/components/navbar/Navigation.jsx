import { Col, Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid  className='d-flex flex-column  m-0 p-0'>
        <Row className='container-fluid text-center py-3'>
            <Col><h1 className='logo'>Recipe App</h1></Col>
        </Row>
        <Row className='container-fluid text-center border  py-3'> 
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center flex-grow-1 gap-5">
            <Link className='nav-item' to="/">Home</Link>
            <Link className='nav-item' to="/about">About</Link>
            <Link className='nav-item' to="/github">Github</Link>
            <Link className='nav-item' to="/contact">Contact</Link>
            <Link className='nav-item' to="/logout">Logout</Link>   
          </Nav>
        </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Navigation
