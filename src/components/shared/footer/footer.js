import React from 'react';
import './footer.css'

export default function Footer (){

    return(
        <div className="row footer-align">

            <div className="first-section">
                <a className="footer-item" href="https://radical.gitbook.io/radical-nft/" target="_blank">Documentation</a>
            </div>

            <div className="second-section">
                <div className="footer-item"><a href="https://twitter.com/RadicalProtocol" target="_blank">Twitter</a></div>
                <div className="footer-item"><a href="https://discord.gg/a2MsyBzVWG" target="_blank">Discord</a></div>
                <div className="footer-item"><a href="https://t.me/joinchat/B-vpINAj250xZGU0"  target="_blank">Telegram</a></div>
                <div className="footer-item"><a href="https://github.com/RadicalFinance" target="_blank">Github</a></div>

            </div>

            <div className="third-section">
                <div className="footer-item" >RADICAL</div>
                <div className="footer-item">2021</div>
            </div>
        </div>
    )



}