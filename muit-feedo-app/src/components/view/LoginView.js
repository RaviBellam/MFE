import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import '../../styles/login.css';
function LoginView() {
  return (
    <>
      <Form className="backtheme">
        <Form.Group className="mb-3" controlId="feedoMail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="feedoPassword">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="password" placeholder="Enter password" />          
        </Form.Group>
        <Stack>
           <Button variant="primary">Login</Button>
           <Button variant="outline-secondary">Sign In?</Button>
           <div>Forgot password? Reset <a href="#retrivePwd">Here </a> </div>
        </Stack>        
      </Form>
    </>
  );
}

export default LoginView;
