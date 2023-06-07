import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} className='m' to="/">Home</Nav.Link>
            <Nav.Link as={Link} className='m' to="/register">Register</Nav.Link>  
            <Nav.Link as={Link} className='m' to="/show">ShowUser</Nav.Link>  
            <Nav.Link as={Link} className='m' to="/update">Update</Nav.Link>  
          
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;