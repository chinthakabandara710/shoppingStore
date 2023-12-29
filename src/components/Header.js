
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { logo } from "../assets";
import "../App.css";
import { useSelector } from "react-redux";
import { FaCartArrowDown } from "react-icons/fa";
import Badge from "react-bootstrap/Badge";

function Header() {
  const productData = useSelector((state) => state.shop.productData);
  const userInfo = useSelector((state) => state.shop.userInfo);
  return (
    <Navbar expand="md" className="navBar" fixed="top">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Brand href="#">
          <img
            className="navBarLogo justify-content-end"
            src={logo}
            alt="Your Company"
          />
          l
        </Navbar.Brand>
        <div>
          <a href="/login">
            <img
              className="profileImg m-3"
              src={
                userInfo
                  ? userInfo.image
                  : "https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
              }
              alt="userLogo"
            />
          </a>
        </div>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="d-flex justify-content-around me-auto ">
            <Nav.Link href="/cart">
              {productData.length !== 0 ? (
                <Badge bg="danger">{productData.length}</Badge>
              ) : null}{" "}
              <FaCartArrowDown className="cart" />
            </Nav.Link>
            <Nav.Link className="navs" href="/">
              <p className="navs">Home</p>
            </Nav.Link>

            <Nav.Link className="navs" href="/productsList">
              <p className="navs">Products</p>
            </Nav.Link>
            <Nav.Link className="navs" href="/gallery">
              <p className="navs">Gallery</p>
            </Nav.Link>
            <Nav.Link className="navs" href="/blog">
              <p className="navs">Blog</p>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Nav.Link>
              {userInfo && <p className="navs">{userInfo.name}</p>}
            </Nav.Link>
          </Form>
        </Navbar.Collapse>{" "}
      </Container>
    </Navbar>
  );
}

export default Header;
