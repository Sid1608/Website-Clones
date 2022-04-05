import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Mail from './components/mail/Mail';
import EmailList from './components/emailList/EmailList';
import {useSelector} from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from 'react-router-dom';
import SendMail from './components/sendMail/SendMail';
import { selectSendMessageIsOpen } from './features/mailSlice';
import {useSelector} from 'react-redux';
function App() {
  const sendMessageIsOpen=useSelector(selectSendMessageIsOpen)
  const user=useSelector(selectUser);
  return (
    <Router>
      {!user ?(<Login/>):(
        <div className="app">
        <Header/>
        <div className="app__body">
          <Sidebar/>
          <Routes>
            <Route path="/mail" element={<Mail/>}/>
            <Route path="/" element={ <EmailList/>}/>

          </Routes>
        </div>
        {/* <Sidebar/> */}
        {sendMessageIsOpen &&<SendMail/> }
      </div>
      )}
      

    </Router>
    
  );
}

export default App;
