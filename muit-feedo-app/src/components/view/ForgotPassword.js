import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import '../../styles/login.css';
import React from 'react';
import {Link} from 'react-router-dom';


function ForgotPassword (){
return (
    <>
<div className = "feedo-border-forget col-8 mx-auto backtheme">
    <Form >
        <Form.Group  controlId="feedoMail">
          
            <Form.Control type="email" placeholder="Enter user name or email " />
              
        </Form.Group>
        <Stack>
           <Button variant="primary" className="sub-button button-sub"> <Link style={{textDecoration: 'none'}} to ='/' className="sub-Link">Submit</Link></Button>
        </Stack>
    </Form>
</div>

</>
);
}
export default ForgotPassword;