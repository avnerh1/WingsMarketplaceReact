import React, { useState, useEffect } from 'react';

import './mainpage.scss';


const Mainpage = () => {

    return (
        <>
            <div >
                <section className="Mainpage">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="maininner">
                                <div className="SIDEBAR">
                                    <div className="AA">
                                        <div className="ff">
                                            <button>
                                                <img src="neww/menu-icon.png" alt="" className="img-fluid sdsdsdsdsd" />
                                                <h6>Dashboard</h6>
                                            </button>
                                        </div>
                                        <div className="ff">
                                            <button>
                                                <img src="neww/place-icon.png" alt="" className="img-fluid sdsdsdsdsd" />
                                                <h6>MarketPlace</h6>
                                            </button>
                                        </div>
                                        <div className="ff">
                                            <button>
                                                <img src="neww/wallet-icon.png" alt="" className="img-fluid sdsdsdsdsd" />
                                                <h6>Wallet</h6>
                                            </button>
                                        </div>
                                        <div className="ff">
                                            <button>
                                                <img src="neww/file-icon.png" alt="" className="img-fluid sdsdsdsdsd" />
                                                <h6>Staking</h6>
                                            </button>
                                        </div>
                                        <div className="ff">
                                            <button>
                                                <img src="neww/launchpad-icon.png" alt="" className="img-fluid sdsdsdsdsd" />
                                                <h6>LaunchPad</h6>
                                            </button>
                                        </div>
                                        <div className="ff">
                                            <button>
                                                <img src="neww/news-icon.png" alt="" className="img-fluid sdsdsdsdsd" />
                                                <h6>News</h6>
                                            </button>
                                        </div>
                                        <div className="ff">
                                            <button>
                                                <img src="neww/games-icon.png" alt="" className="img-fluid sdsdsdsdsd" />
                                                <h6>Mini Games</h6>
                                            </button>
                                        </div>

                                    </div>
                                    <div className="BB">
                                        <div className="ff">
                                            <button>
                                                <img src="neww/settins-icon.png" alt="" className="img-fluid sdsdsdsdsd" />
                                                <h6>Settings</h6>
                                            </button>
                                        </div>
                                        <div className="ff">
                                            <button>
                                                <img src="neww/help-icon.png" alt="" className="img-fluid sdsdsdsdsd" />
                                                <h6>Help</h6>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="MAINPANNEL">
                                    <div className="row">
                                        <div className="col-xl-7 col-lg-10 offset-3 m-auto">
                                            <div className="contentstack">
                                                <h4 className="text-center">STAKING</h4>
                                                <div className="doubless">
                                                    <div className="left">
                                                        <div className="inner">
                                                            <h6>xWIP Ballance</h6>
                                                            <h3>3.800</h3>
                                                        </div>
                                                    </div>
                                                    <div className="right">
                                                        <div className="inner">
                                                            <h6>Total Staked</h6>
                                                            <h3>2.900</h3>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="stack">
                                                    <div className="textss">
                                                        <h4>Lock duration and rate</h4>
                                                        <h6>Learn more about buying tokens</h6>
                                                    </div>
                                                    <div className="timmerss">
                                                        <div className="outer">
                                                            <div className="inner">
                                                                <h3>7</h3>
                                                                <h6>Days</h6>
                                                                <div className="butt">
                                                                    <h6>2 %</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="outer bbb">
                                                            <div className="inner">
                                                                <h3>14</h3>
                                                                <h6>Days</h6>
                                                                <div className="butt">
                                                                    <h6>7 %</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="outer ddd">
                                                            <div className="inner">
                                                                <h3>30</h3>
                                                                <h6>Days</h6>
                                                                <div className="butt">
                                                                    <h6>15 %</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="outer">
                                                            <div className="inner">
                                                                <h3>60</h3>
                                                                <h6>Days</h6>
                                                                <div className="butt">
                                                                    <h6>18 %</h6>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="inputss">
                                                        <h6>Lock duration and rate</h6>
                                                        <div className="snd">
                                                            <input type="text" placeholder="Enter amount"></input>
                                                        </div>
                                                    </div>
                                                    <div className="perxentagess">
                                                        <div className="outers">
                                                            <div className="inner">
                                                                <h5>25%</h5>
                                                            </div>
                                                        </div>
                                                        <div className="outers">
                                                            <div className="inner">
                                                                <h5>50%</h5>
                                                            </div>
                                                        </div>
                                                        <div className="outers">
                                                            <div className="inner">
                                                                <h5>75%</h5>
                                                            </div>
                                                        </div>
                                                        <div className="outers">
                                                            <div className="inner">
                                                                <h5>100%</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="approne">
                                                        <button>Approve Locl</button>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div className="col-xl-9 col-lg-11 col-md-12  m-auto">
                                            <div className='sdsdsd'>
                                                <div className="main">
                                                    <div className="outer sdnaswdwdw">
                                                       <h4>$ 0.00003829</h4>
                                                       <p>Token Price</p>
                                                    </div>
                                                    <div className="assd"></div>
                                                    <div className="outer">
                                                       <h4>$ 3.800.000</h4>
                                                       <p>Market Cap</p>
                                                    </div>
                                                    <div className="assd"></div>
                                                    <div className="outer sdsdsds">
                                                       <h4>100.000.000.000</h4>
                                                       <p>Circulating Supply</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        </>
    )
}

export default Mainpage;
