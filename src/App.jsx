import './App.css'
import Header from './components/header/Header'
import AppRouter from './router/AppRouter'
import {Outlet} from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Container fluid className='d-flex flex-column mx-0 px-0'>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <AppRouter/>
          <Outlet />
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  )
}

export default App
