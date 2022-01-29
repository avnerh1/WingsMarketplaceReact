import './App.scss';
import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/landing/Landing.js';

// import Navbar from './components/landing/header/Navbar.js';
import 'react-toastify/dist/ReactToastify.css';
import { useWeb3React } from '@web3-react/core';

function App() {
  const adminrole = localStorage.getItem("Adminrole");

  // useEagerConnect();
  const { account } = useWeb3React();
  return (
    <>
      {/* <ToastContainer /> */}
      <div className="back">
        <Router>
          <Switch>

            <Route exact path='/' component={Landing} />

          </Switch>
        </Router>
      </div>

    </>
  );
}

export default App;
