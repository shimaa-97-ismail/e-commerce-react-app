import {useContext} from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { CartContext } from "../../../context/cartContext";
import "./header.css";
import { Link } from 'react-router-dom';
const Header = () => {
  const { cartItems } = useContext(CartContext);
  
  // calculate total quantity
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <section className="container d-flex justify-content-between text-dark">
        <img
          className="img-fluid my-2"
          width={"100"}
          src="https://cdn.shopify.com/s/files/1/1691/0147/t/3/assets/logo.png?v=128804864739962265131483514779"
        />
        <Navbar variant="light">
          <Container>
            <Nav>
              <Link className="d-none d-sm-block text-dark" to="/login">
                Login
              </Link>
              <Link className="mx-1 d-none d-sm-block text-dark" to="/register">
                Register
              </Link>
              <Link className="ms-2 text-dark" to="/cart">
                My cart({totalQuantity})
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </section>
      <section>
        <Navbar collapseOnSelect expand="lg" className="mainColor">
          <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto mainColor">
                <Link className="me-2 text-light active" to="/">
                  HOME
                </Link>
                <Link className="me-2 text-light" to="/products">
                  SHOP
                </Link>
            
                <Link className="me-2 text-light" to="/about-us">
                  ABOUT US
                </Link>
                <Link className="text-light" to="/contact-us">CONTACT US</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
};

export default Header;
