import React from 'react';
import "./Marketplace.css"
import Nav from '../shared/nav/nav';
import NFTEarning from '../partials/NFTEarning/NFTEarning';
import Footer from '../shared/footer/footer';
import { Link } from 'react-router-dom';
export default function Marketplace (){

    const imgAvatar = {
        maxWidth: "25px",
        maxHeight: "25px",
    };

    return(
        <div>
            <Nav/>
            <div className="row">
            
                <div className="row single-nft-section">
                    <div className="col-md-6 col-lg-6 ">
                        <div className="one-nft">
                            <img src="/img/spotify.png"></img>
                        </div>
                    </div>
                        <div className="col-md-4 col-lg-4 single-nft-description-section">
                        <svg width="70" height="25" viewBox="0 0 70 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="70" height="25" rx="12.5" fill="#EDEFFF"/>
                            <path d="M11.233 18H17.1989V16.9062H12.4659V7.81818H11.233V18ZM20.6209 7.81818H19.388V18H20.6209V7.81818ZM28.9412 10.3636H30.1344C30.0797 8.82741 28.6628 7.67898 26.6941 7.67898C24.7452 7.67898 23.2139 8.8125 23.2139 10.5227C23.2139 11.8949 24.2083 12.7102 25.7992 13.1676L27.052 13.5256C28.1259 13.8239 29.0804 14.2017 29.0804 15.2159C29.0804 16.3295 28.0066 17.0653 26.5946 17.0653C25.3816 17.0653 24.3077 16.5284 24.2083 15.375H22.9355C23.0549 17.0455 24.4071 18.179 26.5946 18.179C28.9412 18.179 30.2736 16.8864 30.2736 15.2358C30.2736 13.3267 28.4639 12.7102 27.41 12.4318L26.3759 12.1534C25.6202 11.9545 24.4071 11.5568 24.4071 10.4631C24.4071 9.48864 25.302 8.77273 26.6543 8.77273C27.8872 8.77273 28.8219 9.35938 28.9412 10.3636ZM32.0239 8.91193H35.2257V18H36.4586V8.91193H39.6603V7.81818H32.0239V8.91193ZM41.8432 18H48.0676V16.9062H43.0761V13.446H47.6699V12.3523H43.0761V8.91193H47.9881V7.81818H41.8432V18ZM58.5642 7.81818H57.3512V15.8324H57.2517L51.6836 7.81818H50.4904V18H51.7233V10.0057H51.8228L57.3711 18H58.5642V7.81818Z" fill="#B2B2C1"/>
                        </svg>


                        <div className="single-nft-title">
                            Spotify Family
                        </div>
                        <div className="single-nft-description">
                            The best of music available 24/7.
                        </div>
                        <div className="author">
                            <span className="user-avatar"><img src="/img/spotify.png" style={imgAvatar}></img> </span>
                            <span className="username">@Spotify </span>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-6">
                                <button className="buy-nft"> SUBSCRIBE </button>
                            </div>
                            <div className="col-md-6 col-lg-6">
                            <Link to="/singlenft"className="text-link">
                                <button className="view-nft"> DETAILS </button>
                            </Link>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="filer-sort-section">

                    <div className="filer-sort-text">
                        <span className="upper">
                            <svg width="20" height="5" viewBox="0 0 20 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="20" y="3" width="20" height="1" transform="rotate(-180 20 3)" fill="#313439"/>
                                <circle cx="15.5" cy="2.5" r="2.5" transform="rotate(-180 15.5 2.5)" fill="#313439"/>
                            </svg>
                        </span>

                        <span className="down">
                            <svg width="20" height="5" viewBox="0 0 20 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="2" width="20" height="1" fill="#313439"/>
                            <circle cx="4.5" cy="2.5" r="2.5" fill="#313439"/>
                            </svg>
                        </span>
                        FILTER & SORT
                    </div>
                </div>
                <div className="marketplace">
                <div className="row nft-list-marketplace">
                            <div className="col-md-3 col-lg-3" >
                                <NFTEarning image="/img/bankless.png" />
                            </div>
                            <div className="col-md-3 col-lg-3" >
                                <NFTEarning  image="/img/gabriel.png"  />
                            </div>
                            <div className="col-md-3 col-lg-3" >
                                <NFTEarning  image="/img/spotify.png"  />
                            </div>
                            <div className="col-md-3 col-lg-3" >
                                <NFTEarning  image="/img/netflix.png"  />
                            </div>
                    </div>
                    <div className="row nft-list-marketplace">
                    <div className="col-md-3 col-lg-3" >
                                <NFTEarning image="/img/bankless.png" />
                            </div>
                            <div className="col-md-3 col-lg-3" >
                                <NFTEarning  image="/img/gabriel.png"  />
                            </div>
                            <div className="col-md-3 col-lg-3" >
                                <NFTEarning  image="/img/spotify.png"  />
                            </div>
                            <div className="col-md-3 col-lg-3" >
                                <NFTEarning  image="/img/netflix.png"  />
                            </div>
                    </div>
                    <div className="row nft-list-marketplace">
                            <div className="col-md-3 col-lg-3" >
                                <NFTEarning image="/img/bankless.png" />
                            </div>
                            <div className="col-md-3 col-lg-3" >
                                <NFTEarning  image="/img/gabriel.png"  />
                            </div>
                            <div className="col-md-3 col-lg-3" >
                                <NFTEarning  image="/img/spotify.png"  />
                            </div>
                            <div className="col-md-3 col-lg-3" >
                                <NFTEarning  image="/img/netflix.png"  />
                            </div>
                    </div>

                </div>

            </div>
            {/* <Footer/> */}

        </div>
    )
}
