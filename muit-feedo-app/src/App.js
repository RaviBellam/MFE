
import React from 'react';
import FeedoLayout from './components/view/FeedoLayout';
import "./App.css";
import FeedoFooter from './components/view/FeedoFooter';
import LoginView from './components/view/LoginView';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ForgotPassword from './components/view/ForgotPassword';
import FeedoContent from './components/view/FeedoContent';

function App() {
  return (

    <div className="App">
      {/*<BrowserRouter>
      <Routes>
        <Route path ='/' element = {<LoginView />} />
        <Route path ='/forgotPassword' element = {<ForgotPassword />} />
      </Routes>
  </BrowserRouter>*/}
        {/*<FeedoLayout></FeedoLayout>
        <FeedoFooter></FeedoFooter>*/}
        <LoginView></LoginView>
        
    </div>

  );
}

export default App;