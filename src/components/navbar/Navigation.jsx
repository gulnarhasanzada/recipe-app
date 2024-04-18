import { Col, Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import './Navigation.css'
import { useUserContext } from '../../context/UserContextProvider';

const Navigation = () => {
  const {logout, user} = useUserContext();
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
            <Link className='nav-item' to="/home">Home</Link>
            <Link className='nav-item' to="/about">About</Link>
            <Link className='nav-item' to="/github">Github</Link>
            <Link className='nav-item' to="/contact">Contact</Link>
            {user && <Link className='nav-item' onClick={logout}>Logout</Link>}
            {!user && <Link className='nav-item' to="/login">Login</Link>}   
          </Nav>
        </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Navigation
