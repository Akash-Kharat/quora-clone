/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import logo from "../../assets/logo.jpg";
import { NavLink ,useNavigate} from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useEffect, useState } from 'react';

function NavBar({ isLoggedIn, loginData ,setLogOut}) {

        const history = useNavigate();
        const [userName,setUserName] = useState("");
        const Logout = () => {
        localStorage.removeItem("user_login");
        history("/");
        setLogOut();
    
         }
      const getUserName=()=>{
        if(isLoggedIn){
            const data = loginData[0].name.split(' ');
            const uname =data[0].toUpperCase() 
            setUserName(uname);
             }
        }
      useEffect(()=>{
        getUserName();
      },[])
    return (
        <>
            <Navbar expand="lg" bg="light" data-bs-theme="light" sticky='top' >
                <Container style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Navbar.Brand > {isLoggedIn ?
                        <NavLink to='/logs'><img src={logo} alt="logo" width="100px" /></NavLink>
                        :
                        <NavLink to='/'><img src={logo} alt="logo" width="100px" /></NavLink>
                    }</Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link ><Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-danger">Search</Button>
                        </Form></Nav.Link>
                        <Nav.Link href="/addquestion"><Button variant="danger">Add question</Button></Nav.Link>
                        <Nav.Link href='/answer'><Button variant="danger">Answer question</Button></Nav.Link>

                        <Navbar.Text >
                            {isLoggedIn ?
                                
                                    <Dropdown as={ButtonGroup}>
                                        <h3 style={{color:"black"}}>{userName} </h3>
                                        <Dropdown.Toggle split variant="danger" id="dropdown-split-basic" />
                                        <Dropdown.Menu>
                                            <Dropdown.Item ><Button variant="danger" onClick={Logout}>LogOut</Button></Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    
                                :
                                <NavLink to='/login'> <Button variant="danger">LogIn</Button></NavLink> 
                            }

                        </Navbar.Text>
                    </Nav>
            </Container>
        </Navbar >

        </>
    );
}

export default NavBar;


