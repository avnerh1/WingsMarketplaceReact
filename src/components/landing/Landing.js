// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import '../../App.scss';
import Navbar from '../landing/header/Navbar'
import Mainpage from '../sidebar/Main';

// import Addshows from '../addssshow/Addshow';

function Landing() {
 

  return (
    <>
     <div className="landing">
       <Navbar />
       <Mainpage />
     </div>
    </>
  );
}

export default Landing;