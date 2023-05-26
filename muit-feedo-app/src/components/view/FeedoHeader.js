import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";

function FeedoHeader(){
    return(
        <Row>
            <Col>
                <Table>
                    <tr>
                        <td>You've 2 surveys to complete. Please click
                        <a href="#1">Here</a>
                        to see them.
                        </td>
                        <td>
                            <Button variant="outline-primary">Create Servey</Button>
                        </td>
                    </tr>
                </Table>
            </Col>
        </Row>
    );
}
export default FeedoHeader;