import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Footer = () => {
    const lightMode = useSelector((state) => state.themereducer.lightMode)
    return (
        <>
            <div className={lightMode ? "" : "light"}>
                <section className="main-footer">
                    <div className="container-fluid p-0">
                        <div className=""></div>
                        <div className="col-sm-11 m-auto">
                            <div className="row">
                                <div className="col-lg-6 p-md-0">
                                    <div className="community">
                                        <h1>Join the community</h1>
                                        <p>RC LAUNCHPAD is a blockchain platform designed to provide an easy to use launchpad that aims to help new quality blockchain projects to raise capital and easily distribute their tokens at the same time.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12 p-md-0">
                                    <div className="socials">
                                        <a href="https://discord.gg/3u3SZYebEM" target="_blank" className='linkss'  > <img src="\coinhunt\Web - Light\discord-8236 1.svg" alt="" className="img-fluid" /></a>
                                        {/* <a href="https://www.facebook.com/RCLaunchpad/" className='ass' target="_blank" > <img src="\coinhunt\Web - Light\facebook-logo-2163 1.svg" alt="" className="img-fluid" /></a> */}
                                        <a href="https://rewardcycle.medium.com/about" className='linkss' target="_blank" > <img src="\coinhunt\Web - Light\medium-2177 1.svg" alt="" className="img-fluid" /></a>
                                        <a href="https://t.me/rewardcycle" className='linkss' target="_blank" > <img src="\coinhunt\Web - Light\telegram 1.svg" alt="" className="img-fluid" /></a>
                                        <a href="https://twitter.com/rewardcycle?t=2E8NjrwNpmpjnJ868PpOHw&s=09" className='linkss' target="_blank" > <img src="\coinhunt\Web - Light\twitter 1.svg" alt="" className="img-fluid" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 p-md-0">
                                    <div className="text-center text-mnbv">
                                        <p>© 2021 RC 2 Token. All Rights  Reserved</p>
                                       <a href="https://rewardcycle.club/terms-of-use/" target="_blank"> <p>Term & Condition</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Footer;
