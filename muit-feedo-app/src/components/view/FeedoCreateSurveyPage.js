import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import '../../styles/login.css';
import React from 'react';


function FeedoCreateSurveyPage() {

    return(
        <>
            <div className = " col-12 mx-auto">
                
                <Container>
                <Row>
                    <Col className= " col-4 "></Col>
                    <Col  className= " col-8 mx-auto">
                    <h2 >Create survey</h2>
                    </Col>
                </Row>
                </Container>
                <div className = "feedo-border backtheme">
                    <Form  >
                    <Container>
                            <Row>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                            Title
                        </Form.Label>
                        <Col sm="9">
                        <Form.Control type="text" placeholder="Title for your syrvey" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                            Start Date
                        </Form.Label>
                        <Col sm="9">
                        <Form.Control type="date"  />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="3">
                            End date 
                        </Form.Label>
                        <Col sm="9">
                        <Form.Control type="date"  />
                        </Col>
                    </Form.Group>
                    <Form.Group  controlId="feedoMail">
                   <Row>
                        <Form.Label className="col-4">Add question</Form.Label>
                        <Col className="col-7"></Col>
                        <Col className="col-1"><a>+</a></Col>
                    </Row>
                        <Col className="col-10"><Form.Control type="text" placeholder="Enter your question" required/></Col> <br />
                        
                        <Col sm="12"></Col>
                        <Row>
                       <Col sm="10"> <Form.Control type="text" placeholder="Enter your question" required/>
                       </Col> <Col sm="1"> </Col> <Col sm="1">-</Col>
                       </Row>
                       
                       <Form.Label className="col-4">Add users</Form.Label>
                       <Form.Select aria-label="Default select example">
                            <option > Select option</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select> <br />
                    </Form.Group>
                    </Row>

                      <Row >
                        <Col className="col-4"></Col>
                        <Col className = "col-5 mx-auto">
                        <Link className="cancel-link button" to = "/">
                        <Button variant="secondary" className ="sub-button">Cancel</Button></Link>{' '}
                        <Button variant="primary" className ="sub-button">Create</Button>{' '}</Col>
                        <Col className="col-3"></Col>
                        </Row>
                    </Container>
                </Form>
            </div>
            <Link className="cancel-link button" to = "/">Back to home</Link>
            </div>
            
        </>
    );

    
}

export default FeedoCreateSurveyPage;