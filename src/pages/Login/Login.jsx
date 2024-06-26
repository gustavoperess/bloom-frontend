import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { login } from "../../services/authentication";
import { Col, Form , Row, Button, Container} from 'react-bootstrap';
import "./Login.css"
import NavbarComponent from '../../components/Navbar/NavbarComponent.jsx';
import logo from "../../assets/bloom-logo.png";



export const Login = () => {
    const [username_email, setUsername_email] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setError] = useState()
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
        const response = await login(username_email, password);
        window.localStorage.setItem("token", response.token);
        window.localStorage.setItem("user_id", response.user_id)
        navigate("/");
        } catch (err) {
        setError(err.message)
        navigate("/login");
        }
    };
    
    const loginPage = () => {
        navigate(`/login`);
        
    }

    const signupPage = () => {
        navigate(`/signup`);
        
    }

    const handleUsernameEmailChange = (event) => {
        setUsername_email(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    return (
        <> 
        <NavbarComponent  />
        <div className="app-container"> 
            <div className="mainLogo">
                    <img alt='logo' src={String(logo)} />
            </div>
            <div className="ItemsToNavigate">
                    <button type="button" 
                            className={`itemstoNavigateButton ${location.pathname === '/login' ? 'active-nav-item' : ''}`} 
                            onClick={loginPage}>
                        Login
                    </button>
                    <button type="button" 
                            className={`itemstoNavigateButton ${location.pathname === '/signup' ? 'active-nav-item' : ''}`} 
                            onClick={signupPage}>
                        Create an account
                    </button>
            </div>
            <Container className="d-flex align-items-center justify-content-center">
    
                <div className="login-container">
                    <Form className="Login d-flex flex-column align-items-center" onSubmit={handleSubmit}>
                        <h4 className="white-text">I already have an account</h4>
                        <h6 className="white-text">Sign in with your email/username and password</h6>
                        <hr className="white-line" />
                        {loginError && <div className="wrongCredentials">
                            <p>Wrong credentials</p>
                            <p>{loginError}</p>
                        </div> }
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Col sm="12"> 
                                <Form.Control required type="text"  placeholder="Email or Username" value={username_email} onChange={handleUsernameEmailChange} />
                            </Col>
                        </Form.Group>
    
                        <Form.Group as={Row} className="mb-3 justify-content-center" controlId="formPlaintextPassword">
                            <Col sm="12">
                                <Form.Control required type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                            </Col>
                        </Form.Group>
                        <Button variant="success" type="submit">Sign in</Button>
                    </Form>
                  
                </div>
              
            </Container>
            <div className="outside-exiting-account">
            <div className="existing-account">
                    <p>Use an existing account to test the features</p>
                    <p>Username: tee-jay</p>
                    <p>Password: Password123!</p>
            </div>
            </div>
        </div>
    </>

        );
    };

