import FeedoHeader from './FeedoHeader';
import FeedoCreateSurveyPage from './FeedoCreateSurveyPage';
import ForgotPassword from './ForgotPassword';
import LoginView from './LoginView';
import { BrowserRouter, Routes, Route} from 'react-router-dom';




function FeedoContent() {
    return (
        <div className='feedo-center'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element = {<FeedoHeader/>} />
                    <Route path ='/LoginView' element = {<LoginView />} />
                    <Route path ='/forgotPassword' element = {<ForgotPassword />} />
                    <Route path ='/FeedoCreateSurveyPage' element = {<FeedoCreateSurveyPage />} />
                </Routes>
            </BrowserRouter>
            {/*<FeedoHeader></FeedoHeader>*/}
            {/*<LoginView></LoginView>*/}
            {/*<ForgotPassword></ForgotPassword>*/}
        </div>
    );
}
export default FeedoContent;