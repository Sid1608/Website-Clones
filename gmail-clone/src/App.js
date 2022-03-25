import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Mail from './components/mail/Mail';
import EmailList from './components/emailList/EmailList'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from 'react-router-dom';
function App() {
  return (
    <Router>
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
      </div>

    </Router>
    
  );
}

export default App;
