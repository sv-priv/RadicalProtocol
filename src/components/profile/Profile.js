import React from 'react';
import "./Profile.css"
import ProfileNav from "../shared/profile-nav/profile-nav"
import { Link } from 'react-router-dom';

export default function Profile (){


    return(
        <div>
            <div className="row">
                <div className="col-md-3 col-lg-3 left-profile">
                <Link className="text-link" to="/">
                            <div className="logo-profile">
                                <span>
                                    <svg width="132" height="23" viewBox="0 0 132 23" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                                    <path d="M0.79258 0.999999V22H3.79258V13H10.5726L15.7926 22H19.2426C16.8726 17.8 15.0126 13.06 9.82258 11.89V11.8C10.8126 12.01 11.8026 12.13 12.8226 12.13C16.2726 12.13 18.5826 10.72 18.5826 7C18.5826 3.58 15.8526 0.999999 12.4626 0.999999H0.79258ZM12.4626 4C14.1726 4 15.5826 5.26 15.5826 7C15.5826 8.74 14.1726 10 12.4626 10H3.79258V4H12.4626ZM30.4797 0.999999L37.3797 22H40.5297L33.6297 0.999999H27.3297L20.4297 22H23.5797L30.4797 0.999999ZM42.6262 22H51.5062C57.3262 22 61.8262 17.47 61.8262 11.56C61.8262 5.65 57.3262 0.999999 51.5062 0.999999H42.6262V22ZM51.5362 4C55.7062 4 58.8262 7.3 58.8262 11.56C58.8262 15.85 55.7062 19 51.5362 19H45.6262V4H51.5362ZM64.9785 22H67.9785V0.999999H64.9785V22ZM82.0844 22.45C84.9044 22.45 87.6644 21.46 89.7344 19.48V13.75C88.7744 17.26 85.6844 19.45 82.0844 19.45C77.5544 19.45 74.1344 16.03 74.1344 11.5C74.1344 6.97 77.5544 3.55 82.0844 3.55C85.6844 3.55 88.7744 5.74 89.7344 9.25V3.52C87.6644 1.54 84.9044 0.549999 82.0844 0.549999C75.8444 0.549999 71.1344 5.26 71.1344 11.5C71.1344 17.74 75.8444 22.45 82.0844 22.45ZM101.579 0.999999L108.479 22H111.629L104.729 0.999999H98.4285L91.5285 22H94.6785L101.579 0.999999ZM113.725 0.999999V22H131.695V19H116.725V0.999999H113.725Z" fill="#282828"/>
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    <div className="profile-nav">
                        <div>Overview</div>
                        <div>Active Listings</div>
                        <div>Radical NFTs</div>
                        <div>Patronage NFTs</div>
                        <div>Collected NFTs</div>
                        <div>Account Settings</div>
                    </div>                
                </div>
                <div className="col-md-9 col-lg-9 overview right-profile" >
                    <div className="row">
                            <div className="col-md-9 col-lg-9 back-to-markeplace">
                                ← Back to marketplace
                            </div>
                            <span className="col-md-3 col-lg-3 right-profile-menu">
                                <Link className="text-link" to="/search">
                                    <span className=" nav-item">
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="5.5" cy="5" r="4.5" stroke="#282828" stroke-linejoin="round"/>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2715 12.5L8 8.27523L8.72845 7.5L13 11.7248L12.2715 12.5Z" fill="#282828"/>
                                        </svg>
                                            Search
                                    </span>
                                </Link>

                                <span className=" nav-item"> Mint</span>

                                <Link to="/profile" className="text-link">
                                    <span className="profile"> U </span>
                                </Link>

                            </span>
                    </div>
                        <div>Overview</div>
                        <div>Interdum convallis odio scelerisque amet eu pharetra quam pulvinar imperdiet.</div>
                        <div className="row">
                            <div className="col-md-9 col-lg-9">
                                <div className="current-patronage"></div>
                            </div>
                            <div className="col-md-3 col-lg-3">
                                <div className="collect-patronage">
                                    
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 col-lg-4">
                                <div className="total-patronage">
                                    
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="deposit-patronage">
                                    
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4"></div>
                        </div>
                </div>

            </div>
        </div>
    )
}
