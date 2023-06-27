import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import '../../styles/login.css';
function LoginView() {
  return (
    <>
    <div >
    <Container  >
      <Row>
        <Col  className= "col-3 mx-auto">
          <Image src="https://www.pngfind.com/pngs/m/70-704328_edit-page-icon-transparent-index-icon-hd-png.png" thumbnail/>
          
          </Col>
      </Row>
    </Container>
    <div className= "col-md-4 mx-auto">User name or email address</div> 
    </div>
    <div className = "feedo-border col-md-8 mx-auto">
      <Form className="backtheme">
        <Form.Group  controlId="feedoMail">
          <Form.Label>User name or email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
        </Form.Group>
        
        <Form.Group  controlId="feedoPassword">
          <Container>
            <Row>
              <Col className="col-4">Password</Col>
              <Col className="col-2"></Col>
              <Col className="col-6"> <Button variant="light">Forgot password?</Button></Col>
            </Row>       
          </Container> 
          <Form.Control type="password" placeholder="Enter password" /> <br />
        </Form.Group>
      
        <Stack>
           <Button variant="primary">Sign In</Button>
        </Stack>        
      </Form>
    </div>
      <div className = " col-md-6 mx-auto">
        <Stack>
          <Button variant="outline-dark">New to Feedo? Create an account</Button>
        </Stack>
      </div>
    </>
  );
}

export default LoginView;
