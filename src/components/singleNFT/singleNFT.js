import React from 'react';
import './singleNFT.css';
import { useState } from 'react';
import Nav from '../shared/nav/nav';
import Footer from '../shared/footer/footer';
import NFTEarning from '../partials/NFTEarning/NFTEarning';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Field } from 'redux-form';


export default function SingleNFT () {

    const mainNFTImg  = {
        width: "440px",
        height: "440px"
    }
    const modalStyle= {
        padding: "50px"

    }
    const depositEth = {
        width: "100%",
        height: "140px",
        background: "#F0F1F9",
        borderRadius: "20px",
        marginBottom: "30%",
        border: "none"
    }
    const depositEthInput = {
        background: "#F0F1F9",
        borderRadius: "20px",
        marginBottom: "10%",
        border: "none"
    }
    const subscriptionLast = {
        width: "100%",
        height: "60px",
        background: "#F0F1F9",
        borderRadius: "20px",
        marginBottom: "10%",
        border: "none"
    }
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return(
        <div>
                <Modal open={open} onClose={onCloseModal} center style={modalStyle}>
                    <div className="row" style={modalStyle} >
                        <div className="col-md-6 col-lg-6">
                            <NFTEarning image="/img/gabriel.png"></NFTEarning>
                        </div>
                        <div className="col-ld-6 col-md-6">
                            <div style={depositEth}>
                            <input type="text" placeholder="TEST" style={depositEthInput}></input>
                            <div>test</div>
                            </div>

                            <input type="text" placeholder="TEST" style={subscriptionLast}></input>

                            <button class="settings-button">Save new password</button>
                        </div>
                    </div>

   



                </Modal>
            <Nav/>
                <div className="row picture-section"> 
                    <div className="image">
                        <img src="/img/spotify.png" style={mainNFTImg}></img>
                    </div>
                </div>
                <div className="row single-nft-section">
                    <div className="col-md-5 col-lg-5 single-nft-description-section">
                        <svg width="27" height="11" viewBox="0 0 27 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.358 10H1.548V2.23L4.292 8.082H5.342L8.072 2.216V10H9.262V0.199999H7.82L4.838 6.696L1.842 0.199999H0.358V10ZM12.2591 10H13.5471V6.682H15.3391C17.3971 6.682 18.6431 5.492 18.6431 3.462C18.6431 1.404 17.4251 0.199999 15.4231 0.199999H12.2591V10ZM15.2271 1.278C16.5851 1.278 17.3411 2.034 17.3411 3.462C17.3411 4.862 16.5851 5.604 15.2271 5.604H13.5471V1.278H15.2271ZM26.4116 7.34C26.4116 6.094 25.8236 5.282 24.7176 4.932C25.6836 4.582 26.2156 3.756 26.2156 2.58C26.2156 1.012 25.0956 0.0599995 23.3036 0.0599995C21.5536 0.0599995 20.3916 1.082 20.1536 2.804L21.3576 3.056C21.5256 1.81 22.2116 1.138 23.2476 1.138C24.3396 1.138 24.9556 1.754 24.9556 2.776C24.9556 3.854 24.3536 4.47 23.3456 4.47H22.3936V5.52H23.3596C24.4936 5.52 25.1096 6.15 25.1096 7.27C25.1096 8.418 24.4376 9.076 23.2756 9.076C22.0716 9.076 21.3576 8.39 21.2036 7.088L19.9716 7.312C20.1956 9.23 21.4136 10.14 23.3036 10.14C25.1936 10.14 26.4116 9.09 26.4116 7.34Z" fill="#B2B2C1"/>
                        </svg>

                        <div className="single-nft-title">
                            Spotify Family
                        </div>
                        <div className="single-nft-description">
                            The best of music available 24/7.
                        </div>
                        <div className="author">
                            <span className="user-avatar"><img src="/img/spotify.png"></img> </span>
                            <span className="username">@Spotify </span>
                        </div>

                    </div>
                    <div className="col-md-4 col-lg-4 nft-price">
                        <div className="row ">
                            <div className="col-md-6 col-lg-6 left-part">
                                <div className="listed-price">
                                    1.5 ETH
                                </div>
                                <div className="listed-price-desc">
                                    Monthly Subscription
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 right-part">
                                <div className="patronage">
                                    10%
                                </div>
                                <div className="patronage-desc">
                                    Minimum subscription in days
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <button className="buy-button" onClick={onOpenModal}>SUBSCRIBE</button>
                        </div>
                    </div>
                </div>

                <div className="row related-content-section">
                    <div className="row" className="related-content-title">
                        Related Content
                    </div>
                    <div className="row nft-list ">
                        <div className="col-md-3 col-lg-3" >
                            <NFTEarning image="/img/bankless.png"></NFTEarning>
                        </div>
                        <div className="col-md-3 col-lg-3" >
                            <NFTEarning image="/img/gabriel.png"></NFTEarning>
                        </div>
                        <div className="col-md-3 col-lg-3" >
                            <NFTEarning image="/img/netflix.png"></NFTEarning>
                        </div>
                        <div className="col-md-3 col-lg-3" >
                            <NFTEarning image="/img/gabriel.png"></NFTEarning>
                        </div>
                    </div>
                </div>
            {/* <Footer/> */}
        </div>
    )
}
