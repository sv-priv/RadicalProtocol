import React from 'react';
import './footer.css'

export default function Footer (){

    return(
        <div className="row footer-align">

            <div className="row socials">
                <div className="col-md-3 col-lg-3 social-item">
                <div className="socials-text"> Twitter</div>

                </div>
                <div className="col-md-3 col-lg-3 social-item">
                        
                        <div className="socials-text"> Discord</div>

                </div>
                <div className="col-md-3 col-lg-3 social-item">
                        <div className="socials-text"> Forum</div>
                       
                </div>
                <div className="col-md-3 col-lg-3 social-item">
                        <div className="socials-text">Contracts</div>

                        
                </div>
            </div>
            <div className="first-section">
                <div className="footer-item">Explore</div>
                <div className="footer-item"> Manage</div>
                <div className="footer-item">Mint</div>
                <div className="footer-item">Documentation</div>
            </div>

            <div className="second-section">
                <div className="footer-item">My Account</div>
                <div className="footer-item">Help</div>
                <div className="footer-item">Contact Us</div>
            </div>

            <div className="third-section">
                <div className="footer-item">RADICAL</div>
                <div className="footer-item">2021</div>
            </div>
        </div>
    )



}