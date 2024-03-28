import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import "./ManageHelpRequestsNavBar.css"
import { Link } from 'react-router-dom';

const ManageHelpRequestsNavBar = ({ requestsActive, receivedOffersActive, helpOffersActive }) => {
    return (
        <div className="nav-bar-container">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first" className="justify-content-center">
                <Row className="spacing">
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/create_request" className={requestsActive ? "btn-format btn-format-active" : "btn-format btn-format-inactive"}>My Requests</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/request_management/received_offers" className={receivedOffersActive ? "btn-format btn-format-active" : "btn-format btn-format-inactive"} >My Received Offers</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link as={Link}  to="/request_management/my_offers" className={helpOffersActive ? "btn-format btn-format-active" : "btn-format btn-format-inactive"}>My Help Offers</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Tab.Container>
        </div >
    );
}

export default ManageHelpRequestsNavBar;