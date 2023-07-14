import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom';
import Table from "react-bootstrap/Table";
import FeedoSurveysList from "./FeedoSurveysList";
import React, { useState } from "react";


function FeedoHeader() {
    const [show, setShowValue] = useState(false);

    const showSurveys = () => {
        if (show === false) {
            setShowValue(true);
        }
    }

    return (
        <div >
            <Row>
                <Col>
                    <Table>
                        <tbody>
                            <tr>
                                <td><span>You've 2 surveys to complete. Please click </span>
                                    <u onClick={() => showSurveys()} className="feedo-link">here</u>
                                    <span> to see them.</span>
                                </td>
                                <td>
                                    <Link to = "/FeedoCreateSurveyPage"><Button variant="outline-primary">Create Servey</Button></Link>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
            {
                show && <FeedoSurveysList />
            }
        </div>

    );
}
export default FeedoHeader;