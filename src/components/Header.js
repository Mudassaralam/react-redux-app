import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingCart } from 'react-icons/fa';


function Header(props) {

  console.log('header',props.data)

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>SHOPPING CART</Navbar.Brand>
        <Nav>
          <button type="button" className="btn btn-light position-relative" style={{marginRight:'50px'}}>
            <FaShoppingCart />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {props.data.length}
              <span className="visually-hidden">unread messages</span>
            </span>
          </button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
