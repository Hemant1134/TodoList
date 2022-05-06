import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom'
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    Nav,
    NavbarBrand,
    Button
} from 'reactstrap';
  
function Home() {
    // Collapse isOpen State
    const navigate=useNavigate();
    const [isOpen, setIsOpen] = React.useState(false);

    const logout=(e)=>{
        e.preventDefault();
        localStorage.clear()
        navigate('/login');
}

    return (
        <div className='home'>
            <Navbar light expand="sm">
                <NavbarBrand href="/">Hemant</NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem > 
                    <Link to="/admin/todo" className=''><Button outline color="secondary">Todo</Button></Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/admin/Bucket" className='ms-4'><Button outline color="secondary">Bucket</Button></Link>
                        </NavItem>
                        <NavItem>

                            <Link  to="/admin/login" className='ms-4' onClick={logout}><Button outline color="secondary">Logout</Button>
                              </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            </div>
    );
}
  
export default Home;