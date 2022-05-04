import React from 'react'
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';
  
function Home() {
  
    // Collapse isOpen State
    const [isOpen, setIsOpen] = React.useState(false);
  
    return (
        <div className='home'>
            <Navbar color="light" light expand="sm">
                <NavbarBrand href="/">Brand</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem > 
                            <NavLink href="!#">Todo</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="!#">Bucket</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="!#">Logout</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            </div>
    );
}
  
export default Home;