import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import '../../styles/login.css';
import swal from 'sweetalert';
import React from 'react';


function LoginView() {

  const Alert = () => {
    swal({
      title: "your feedo login completed sucessfully!",
      icon: "success",
      
    });
  }

  return (
    <>
    
    <div className = " col-8 mx-auto">
    <Container  >
      <Row>
        <Col className= " col-md-4"></Col>
        <Col  className= " col-md-4 col-sm-4 col-11 mx-auto logo">
          <Image src ="https://www.pngfind.com/pngs/m/70-704328_edit-page-icon-transparent-index-icon-hd-png.png" thumbnail />
          
          </Col>
          <Col className= " col-md-4"></Col>
      </Row>
      <Row>
        <Col className= " col-4 "></Col>
        <Col  className= " col-8 mx-auto">
        <p >Sign into Feedo</p>
          </Col>
          
      </Row>
    </Container>
    </div>
    <div className = "feedo-border col-8 mx-auto backtheme">
      <Form  >
      
        <Form.Group  controlId="feedoMail">
        <Container>
            <Row>
          <Col className="col-md-12"><Form.Label> User name or email </Form.Label></Col>
            <Form.Control type="email" placeholder="User name or email" required/>
              <Form.Text className="text-muted form-text">
                We'll never share your email with anyone else.
              </Form.Text>
              </Row>       
          </Container> 
        </Form.Group>
        
        <Form.Group  controlId="feedoPassword" >
        <Container>
            <Row>
              <Col className=" col-sm-2 col-md-4 " >Password</Col>
              <Col className="col-sm-2 col-md-4 "></Col>
              <Col className=" col-sm-8 col-md-4 "> 
              <Link  to = '/ForgotPassword' className="forget-pass">Forgot password?</Link></Col>
              </Row>       
          </Container> 
          <Form.Control type="password" placeholder="Enter password" required/> <br />
         
        </Form.Group>
       
        <Stack>
           <Button variant="primary" onClick={Alert} > Sign In</Button>
           
        </Stack>        
      </Form>
      
    </div>
      <div >
        <Stack>
        <Link className="cancel-link-two  button col-8 mx-auto "   >
          <Button variant="outline-dark" className=" col-12">New to Feedo? Create an account</Button></Link>
        </Stack>
        </div>
        
    </>
  );
  
  
}
export default LoginView;




