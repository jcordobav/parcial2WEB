import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
 return (
   <>
     <Navbar bg="dark" variant="dark">
       <Container>
         <Navbar.Brand>Inicial</Navbar.Brand>
       </Container>
     </Navbar>
   </>
 );
}

export default NavBar;