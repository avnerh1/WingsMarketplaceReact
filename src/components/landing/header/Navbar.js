import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.scss';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux'
import { changeMode } from "../../../redux/action/index";
import { Searchcoin } from '../../../redux/action/index';
import { useSelector } from 'react-redux';
import OutsideClickHandler from 'react-outside-click-handler';
import axios from 'axios';
import { API_URL } from '../../../utils/ApiURL';
import search from '../Landing';

const Navbar = () => {








    return (
        <>
            <div >
                <section className="main-navbar">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-sm-12 m-auto">
                                <nav className="navbar ptb20 navbar-expand-xl shdbsdhb">
                                    <div className="navbar-brand">
                                        <img src="neww/Logo.svg" alt="" className="img-fluid logoHeight" />
                                    </div>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="mdhfy"> <i class="fas fa-bars"></i></span>
                                    </button>

                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        {/* <OutsideClickHandler onOutsideClick={()=>OutSideClicss} > */}

                                        <div className="search-in">
                                            <div className="LOGOTEXT">
                                                <h3>WINGS</h3>
                                                <h6>PROTOCOL</h6>
                                            </div>


                                        </div>
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item ">
                                                <div className="nav-link">
                                                    <img src="neww/search-icon.png" alt="" className="img-fluid" />
                                                </div>
                                            </li>
                                            <li className="nav-item ">
                                                <div className="nav-link">
                                                    <img src="neww/notification-icon.png" alt="" className="img-fluid" />
                                                </div>
                                            </li>
                                        </ul>
                                        <form className="form-inline my-2 my-lg-0">
                                            {/* <input className="form-control mr-sm-2" type="search" placeholder="Search items" aria-label="Search" /> */}
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <div className="dropdown ml">
                                                        <button type="button" className="btn-haed-disconnect" >
                                                            Connect Wallet
                                                        </button>
                                                    </div>
                                                </li>

                                                <li className="list-inline-item  ml-4">
                                                    <div className="nav-link">
                                                        <img src="neww/menu.png" alt="" className="img-fluid" />
                                                    </div>
                                                </li>

                                                {/* <li className="list-inline-item">
                                                    <button type="button" className=" img-bhu" onClick={changetheme}>
                                                        {lightMode
                                                            ?
                                                            <img src="\coinhunt\Web - Light\dark.svg" alt="" className="img-fluid" />
                                                            :
                                                            <img src="\coinhunt\Web - Light\Web - Light\Frame 4.svg" alt="" className="img-fluid " />
                                                        }
                                                    </button>
                                                </li> */}
                                            </ul>
                                        </form>

                                        {/* </OutsideClickHandler> */}
                                    </div>



                                </nav>
                            </div>
                        </div>
                    </div>
                </section >
            </div >
        </>
    )
}

export default Navbar;
