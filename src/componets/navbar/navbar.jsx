import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "../../logi.png";
function MyNav(props) {
  return (
    <Navbar className='bg-trasparent' collapseOnSelect expand="lg"  variant="dark">
      <Container>
        <Navbar.Brand href="#home">
            <img className="logo-img" src={logo} alt="logo img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
          <Nav.Link className="hover-before nav-link-font active" href="#">HOME</Nav.Link>
          <Nav.Link className="hover-before nav-link-font" href="#">About us</Nav.Link>
          <Nav.Link className="hover-before nav-link-font" href="#">SERVICES</Nav.Link>
          <Nav.Link className="hover-before nav-link-font" href="#">BRANDS</Nav.Link>
          <Nav.Link className="hover-before nav-link-font" href="#">CONTACT US</Nav.Link>
          <Nav.Link className="hover-before nav-link-font" href="#">BLOG</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className='nav-link-font' href="#"  onClick={()=>{
props.setIntro(true)}}>info</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;