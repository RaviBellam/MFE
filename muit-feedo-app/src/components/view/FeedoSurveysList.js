import Accordion from 'react-bootstrap/Accordion';
import '../../styles/feedo.css';

function FeedoSurveysList() {
    return (
        <Accordion >
            <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-btn' >survey 1</Accordion.Header>
                <Accordion.Body>
                    Survey 1 Body
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header >survey 2</Accordion.Header>
                <Accordion.Body>
                    Survey 2 Body
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default FeedoSurveysList;