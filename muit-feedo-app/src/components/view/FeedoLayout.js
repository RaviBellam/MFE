
import FeedoFooter from "./FeedoFooter";
import FeedoHeader from "./FeedoHeader";
import FeedoContent from "./FeedoContent";
import Container from "react-bootstrap/Container";
import "../../App.css";
import LoginView from "./LoginView";
function FeedoLayout() {
    
  return (
    <>
      <Container className="feedo-layout">

        <FeedoHeader></FeedoHeader>
        <hr></hr>
        <FeedoContent></FeedoContent>
      </Container>
    </>
  );
}
export default FeedoLayout;

