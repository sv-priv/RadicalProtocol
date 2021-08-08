import React from 'react';
import './footer.css'

export default function Footer (){

    return(
        <div className="row footer-align">

            <div className="first-section">
                <a className="footer-item">Documentation</a>
            </div>

            <div className="second-section">
                <div className="footer-item"><a href="">Twitter</a></div>
                <div className="footer-item"><a href="">Discord</a></div>
                <div className="footer-item"><a href="">Telegram</a></div>
                <div className="footer-item"><a href="">Github</a></div>

            </div>

            <div className="third-section">
                <div className="footer-item">RADICAL</div>
                <div className="footer-item">2021</div>
            </div>
        </div>
    )



}