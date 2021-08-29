import React from 'react';
import "./Profile.css"
import ProfileNav from "../shared/profile-nav/profile-nav"
import { Link } from 'react-router-dom';
import NFTEarning from '../partials/NFTEarning/NFTEarning';

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
                        <div><a>Your Subscriptions</a></div>
                        <div><a>Active Subscription</a></div>
                        <div><a>Subscription History</a></div>
                        <div><a>USERS OVERVIEw</a></div>
                        <div><a>YOUR SUBSCRIBERS</a></div>
                        <div><a href="/mint">Create Subscription</a></div>
                        <div><a href="/marketplace">← BACK TO CONTENT</a></div>
                    </div>                
                </div>
                <div className="col-md-9 col-lg-9 overview right-profile" >

                    <div className="my-subscriptions">
                        <div className="my-subscription-text">My Subscriptions</div>
                        <div className="overview">
                            <div className="profile-section-title">Overview</div>
                            <div className="profile-section-desc">Manage your subscriptions.</div>
                            <div className="row collect-row">
                                <div className="col-md-12 col-lg-12 col-sm-12">
                                    <div className="current-patronage">
                                        <div className="price-desc">Monthly payment</div>
                                        <div className="price-dollars">$ 3.200</div>
                                        <div className="price-eth">1 ETH</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="active-listings">
                            <div className="profile-section-title">Active Subscriptions</div>
                            <div className="profile-section-desc">What are u enjoying at the moment</div>
                            <div className="row active-listing-nft">
                                <div className="col-md-4 col-lg-4">
                                    <NFTEarning image="/img/gabriel.png"></NFTEarning>
                                </div>
                                <div className="col-md-8 col-lg-8">
                                    <div className="listed-nft-desc">
                                        <div className="active-subscription-desc">
                                        All leaks in one.
                                        Access premium community content, investment opportunities and exclusive discord chan.
                                        </div>
                                    </div>
                                    <div className="row manage-funds-buttons">
                                        <button className="col-md-5 col-lg-5 deposit-subscription-button">
                                                DEPOSIT
                                        </button>
                                        <button className="col-md-5 col-lg-5 cancel-subscription-button">
                                                CANCEL

                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="row active-listing-nft">
                                <div className="col-md-4 col-lg-4">
                                    <NFTEarning image="/img/gabriel.png"></NFTEarning>
                                </div>
                                <div className="col-md-8 col-lg-8">
                                    <div className="listed-nft-desc">
                                        <div className="active-subscription-desc">
                                        All leaks in one.
                                        Access premium community content, investment opportunities and exclusive discord chan.
                                        </div>
                                    </div>
                                    <div className="row  manage-funds-buttons">
                                        <button className="col-md-5 col-lg-5 deposit-subscription-button">
                                            DEPOSIT
                                        </button>
                                        <button className="col-md-5 col-lg-5 cancel-subscription-button">
                                            CANCEL 
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="radical-nfts">
                            <div className="profile-section-title">Subscription History</div>
                            <div className="profile-section-desc">Consume the way you want.</div>
                            <div className="row patronage-table-nav">
                                <div className="col-lg-4 col-md-4">
                                        Name
                                    </div>
                                    <div className="col-lg-2 col-md-2">
                                    </div>
                                    <div className="col-lg-2 col-md-2">
                                    </div>
                                    <div className="col-lg-2 col-md-2">
                                        Starting Date
                                    </div>
                                    <div className="col-lg-2 col-md-2">
                                        Ending Date
                                    </div>
                            </div>

                            <div className="row patronage-table-row">
                                <div className="col-lg-4 col-md-4">
                                    <span className="small-image"></span>
                                    Spotify Premium
                                </div>
                                <div className="col-lg-2 col-md-2">
                                </div>
                                <div className="col-lg-2 col-md-2">
                                </div>
                                <div className="col-lg-2 col-md-2">
                                    <span className="starting-date">15.06.21</span>
                                </div>
                                <div className="col-lg-2 col-md-2">
                                <span className="ending-date">02.08.21</span>
                                </div>
                            </div>

                            <div className="row patronage-table-row">
                                <div className="col-lg-4 col-md-4">
                                    <span className="small-image"></span>
                                    Spotify Family
                                </div>
                                <div className="col-lg-2 col-md-2">
                                </div>
                                <div className="col-lg-2 col-md-2">
                                </div>
                                <div className="col-lg-2 col-md-2">
                                    <span className="starting-date">03.01.21</span>
                                </div>
                                <div className="col-lg-2 col-md-2">
                                    <span className="ending-date">09.06.21</span>
                                </div>
                            </div>

                            <div className="row patronage-table-row">
                                <div className="col-lg-4 col-md-4">
                                    <span className="small-image"></span>
                                    Gabriel Haines
                                </div>
                                <div className="col-lg-2 col-md-2">
                                </div>
                                <div className="col-lg-2 col-md-2">
                                </div>
                                <div className="col-lg-2 col-md-2">
                                    <span className="starting-date">12.04.21</span>
                                </div>
                                <div className="col-lg-2 col-md-2">
                                    <span className="ending-date">20.04.21</span>
                                </div>
                            </div>

                            <div className="row patronage-table-row">
                                <div className="col-lg-4 col-md-4">
                                    <span className="small-image"></span>
                                    Netflix
                                </div>
                                <div className="col-lg-2 col-md-2">
                                </div>
                                <div className="col-lg-2 col-md-2">
                                </div>
                                <div className="col-lg-2 col-md-2">
                                    <span className="starting-date">15.06.21</span>
                                </div>
                                <div className="col-lg-2 col-md-2">
                                    <span className="ending-date">25.07.21</span>
                                </div>
                            </div>

                            <div className="row patronage-table-row">
                                <div className="col-lg-4 col-md-4">
                                    <span className="small-image"></span>
                                    Hulu
                                </div>
                                <div className="col-lg-2 col-md-2">
                                </div>
                                <div className="col-lg-2 col-md-2">
                                </div>
                                <div className="col-lg-2 col-md-2">
                                    <span className="starting-date">13.02.21</span>
                                </div>
                                <div className="col-lg-2 col-md-2">
                                    <span className="ending-date">13.03.21</span>
                                </div>
                            </div>
         
                    </div>


                    </div>

                    <div className="my-users">
                        <div className="my-subscription-text">My Users</div>
                    </div>
                    <div className="row collect-row">
                            <div className="col-md-9 col-lg-9 col-sm-12">
                                <div className="current-patronage">
                                    <div className="price-desc">Total Revenue Generated</div>
                                    <div className="price-dollars">$ 3.200</div>
                                    <div className="price-eth">1 ETH</div>

                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3">
                                <button className="collect-patronage">
                                    Collect
                                </button>

                            </div>
                        </div>
                        <div className="row patronages-row" >
                            <div className="col-md-6 col-lg-6 box">
                                <div className="total-patronage">
                                    <div className="price-desc">  Monthly Revenue Generated</div>
                                    <div className="price-dollars">$ 5.200</div>
                                    <div className="price-eth">2.1 ETH</div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 box">
                                <div className="deposit-patronage">
                                    <div className="price-desc">Number of Subscribers</div>
                                    <div className="price-dollars">$ 0</div>
                                    <div className="price-eth">0 ETH</div>
                                </div>
                            </div>

                        </div>


                    

                    <div className="patronage-nfts">
                        <div className="profile-section-title">Your SUBSCRIBERS</div>
                        <div className="profile-section-desc">Manage your community</div>
                        <div className="row patronage-table-nav">
                            <div className="col-lg-2 col-md-2">
                                Subscriber Name
                            </div>
                            <div className="col-lg-4 col-md-4">
                                
                            </div>
                            <div className="col-lg-3 col-md-3">
                                CONSECUTIVE DAYS
                            </div>
                            <div className="col-lg-3 col-md-3">
                                CONTENT
                            </div>
                        </div>
                        <div className="row patronage-table-row">
                            <div className="col-lg-2 col-md-2">
                                <span className="small-image"></span>
                                    velkoskis.eth
                            </div>
                            <div className="col-lg-4 col-md-4">
                            </div>
                            <div className="col-lg-3 col-md-3">
                                56
                            </div>
                            <div className="col-lg-3 col-md-3">
                                Spotify Premium
                            </div>
                        </div>
                        <div className="row patronage-table-row">
                            <div className="col-lg-2 col-md-2">
                                <span className="small-image"></span>
                                    eric.eth
                            </div>
                            <div className="col-lg-4 col-md-4">
                            </div>
                            <div className="col-lg-3 col-md-3">
                                60
                            </div>
                            <div className="col-lg-3 col-md-3">
                            Spotify Premium
                            </div>
                        </div>
                        <div className="row patronage-table-row">
                            <div className="col-lg-2 col-md-2">
                                <span className="small-image"></span>
                                    kalis.eth
                            </div>
                            <div className="col-lg-4 col-md-4">
                            </div>
                            <div className="col-lg-3 col-md-3">
                                23
                            </div>
                            <div className="col-lg-3 col-md-3">
                            Spotify Premium
                            </div>
                        </div>
                        <div className="row patronage-table-row">
                            <div className="col-lg-2 col-md-2">
                                <span className="small-image"></span>
                                    trcx.eth
                            </div>
                            <div className="col-lg-4 col-md-4">
                            </div>
                            <div className="col-lg-3 col-md-3">
                                25
                            </div>
                            <div className="col-lg-3 col-md-3">
                            Spotify Premium
                            </div>
                        </div>
                       
                    </div>

                   
                </div>

            </div>
        </div>
    )
}
