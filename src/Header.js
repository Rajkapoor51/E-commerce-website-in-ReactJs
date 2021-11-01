import { Navbar, Nav, Container } from 'react-bootstrap'

function Header() {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="/home"><h1>Y3<span>Mart</span></h1></Navbar.Brand> 
                    <Nav className="me-auto">
                        <Nav.Link href="/register">Register</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        
                        <Nav.Link href="/trending">TopTrends</Nav.Link>
                        <Nav.Link href="/offers">BestOffers</Nav.Link>
                        
                       </Nav>
                </Container>
                <Nav className="cart">
                        <Nav.Link href="/Shopping">ShoppingCart</Nav.Link>
                        </Nav>
            </Navbar>
          

        </div>

    )
}

export default Header
