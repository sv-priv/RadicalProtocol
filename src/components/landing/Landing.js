import React, { Component } from 'react';
import './Landing.css';
import NFTEarning from '../partials/NFTEarning/NFTEarning';
import Nav from '../shared/nav/nav';
import { Link , Redirect }  from 'react-router-dom';
import Footer from '../shared/footer/footer';



export default function Landing () {



    return(
        <div>
            <Nav/>
            <div className="landing-align">

                <div className="row landing-animation">
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-6">
                            A decentralized protocol unlocking endless streamed income generation for NFT creators
                    </div>
                    <div className="col-md-3">

                    </div>
                </div>

                <div className="row total-generated">
                    <div className="col-md-4">

                    </div>
                    <div className="col-md-4">
                            <div>Total generated since inception
                            </div>
                            <div className="number-animation"> $ 1.546.691</div>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>

                <div className="row buttons-landing">
                    <div className="col-lg-1 col-md-1"></div>
                    <div className="col-lg-5 col-md-5 read-documentation-button">
                        <div className="button-text">
                        <Link className="text-link" to="/documentation">
                            Read Documentation
                        </Link>
                        
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 browse-button">
                        <div className="button-text">
                            <Link className="text-link" to="/marketplace">
                                Browse
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-1 col-md-1"></div>

                </div>

                <div className="prices moving-prices">
                    <span> Total volume 1 day <span className="total-volume">+ $12209</span></span>
                    <span> Total volume 1 week <span className="total-volume">+ $12209</span></span>
                    <span> Total volume 1 month <span className="total-volume">+ $12209</span></span>
                    <span> Total volume 1 day <span className="total-volume">+ $12209</span></span>

                    
                </div>
                <div className="row earning-nfts">
                    <div className="title title-earning-section">These NFTS are earning</div>
                    <span className="button-to-left">
                        <svg width="71" height="56" viewBox="0 0 71 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="71" height="56" rx="28" transform="matrix(-1 0 0 1 71 0)" fill="#EDEFFF"/>
                            <path d="M35.6185 26.54L32.9985 29.1H40.2385V30.52H32.9985L35.6385 33.1L34.6985 34.06L30.4385 29.8L34.6985 25.56L35.6185 26.54Z" fill="#B2B2C1"/>
                        </svg>
                    </span>
                    <span className="button-to-right">
                        <svg width="71" height="56" viewBox="0 0 71 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="71" height="56" rx="28" fill="#EDEFFF"/>
                            <path d="M35.3815 26.54L38.0015 29.1H30.7615V30.52H38.0015L35.3615 33.1L36.3015 34.06L40.5615 29.8L36.3015 25.56L35.3815 26.54Z" fill="#313439"/>
                        </svg>
                    </span>

                    <div className="row nft-list">
                            <div className="col-md-2 col-lg-2 " style={{marginLeft:'36px'}} >
                                <NFTEarning/>
                            </div>
                            <div className="col-md-2 col-lg-2"style={{marginLeft:'36px'}}  >
                                <NFTEarning/>
                            </div>
                            <div className="col-md-2 col-lg-2" style={{marginLeft:'36px'}}  >
                                <NFTEarning/>
                            </div>
                            <div className="col-md-2 col-lg-2"  style={{marginLeft:'36px'}} >
                                <NFTEarning/>
                            </div>
                            <div className="col-md-2 col-lg-2" style={{marginLeft:'36px'}}  >
                                <NFTEarning/>
                            </div>
                    </div>
                        <Link  to="/marketplace" className="text-link"><div className="explore" >EXPLORE ALL → </div></Link>
                </div>
                <div className="prices moving-prices">
                    <span> Revenue 1 day <span className="total-revenue">+ $12209</span></span>
                    <span> Revenue 1 week <span className="total-revenue">+ $12209</span></span>
                    <span> Revenue 1 month <span className="total-revenue">+ $12209</span></span>
                    <span> Revenue  1 day <span className="total-revenue">+ $12209</span></span>
                    <span> Revenue 1 week <span className="total-revenue">+ $12209</span></span>

                </div>
        
                <div className="row documentation">
                    <div className="title title-documentation">
                    A revenue model designed for creators

                    </div>
                    <div className="about">
                        <div className="row">
                            <div className="col-md-4 col-lg-4">
                            </div>
                            <div className="col-md-4 col-lg-4">
                            Radical is a decentralized protocol built for developers to unlock a universe of financial applications based on Harberger design.
                            </div>
                            <div className="col-md-4 col-lg-4">
                            </div>
                        </div>

                    </div>
                        <div>
                            <button className="read-documentation" >
                                <Link className="text-link" to="/documentation">
                                READ DOCUMENTATION
                                </Link>
                            </button>
                        </div>
                    <div className="col-md-4 col-lg-4">
                        <div className="shape-svg">
                            <svg width="175" height="175" viewBox="0 0 175 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="147.398" y="27.897" width="119.206" height="119.796" rx="22" transform="rotate(90 147.398 27.897)" fill="#BAC2FF"/>
                                <rect x="87.7086" y="3" width="119.206" height="119.796" rx="22" transform="rotate(45 87.7086 3)" fill="#BAC2FF"/>
                                <g filter="url(#filter0_f)">
                                <circle cx="87.4866" cy="87.4994" r="55.7526" fill="white"/>
                                </g>
                                <defs>
                                <filter id="filter0_f" x="0.507364" y="0.520182" width="173.958" height="173.958" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="15.6133" result="effect1_foregroundBlur"/>
                                </filter>
                                </defs>
                            </svg>

                        </div>
                        <div className="subtitle">
                            Mint a RADICAL
                        </div>
                        <div className="description">
                        A radical NFT collects a patronage streamed from the owner to the creator
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4">
                    <div className="shape-svg">
                        <svg width="177" height="171" viewBox="0 0 177 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M77.4002 20.801L83.9703 27.3711C85.9229 29.3237 89.0888 29.3237 91.0414 27.3711L97.6115 20.801C106.679 11.733 121.382 11.733 130.45 20.801L155.496 45.8473C164.564 54.9153 164.564 69.6174 155.496 78.6853L153.023 81.1582C151.07 83.1108 151.07 86.2766 153.023 88.2292L155.496 90.7021C164.564 99.7701 164.564 114.472 155.496 123.54L130.735 148.301C121.667 157.369 106.965 157.369 97.8966 148.301L91.3265 141.731C89.3739 139.779 86.2081 139.779 84.2554 141.731L77.6853 148.301C68.6174 157.369 53.9153 157.369 44.8473 148.301L19.801 123.255C10.733 114.187 10.733 99.4849 19.801 90.417L22.2738 87.9441C24.2265 85.9915 24.2265 82.8257 22.2738 80.873L19.801 78.4002C10.733 69.3322 10.733 54.6301 19.801 45.5622L44.5622 20.801C53.6301 11.733 68.3322 11.733 77.4002 20.801Z" fill="#BAC2FF"/>
                            <g filter="url(#filter0_f)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M44.7902 125.957C33.7689 114.936 32.315 97.8297 40.5802 85.2986C32.3861 72.7819 33.7019 55.7722 44.6774 44.7968C56.638 32.8362 75.7647 32.3471 88.4334 43.1358C101.101 32.2515 120.318 32.908 132.32 44.9096C143.341 55.9309 144.795 73.037 136.53 85.568C144.724 98.0847 143.408 115.094 132.432 126.07C120.472 138.03 101.345 138.52 88.6763 127.731C76.0087 138.615 56.7918 137.959 44.7902 125.957Z" fill="white"/>
                            </g>
                            <defs>
                            <filter id="filter0_f" x="0.253044" y="0.372429" width="176.604" height="170.122" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="17.5219" result="effect1_foregroundBlur"/>
                            </filter>
                            </defs>
                        </svg>


                        </div>
                        <div className="subtitle">
                            EARN FOREVER
                        </div>
                        <div className="description">
                        Sell your creation for an upfront payment in addition to lifelong income.

                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4">
                    <div className="shape-svg">
                        <svg width="185" height="185" viewBox="0 0 185 185" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M92.5 20L143.765 41.2348L165 92.5L143.765 143.765L92.5 165L41.2348 143.765L20 92.5L41.2348 41.2348L92.5 20Z" fill="#BAC2FF"/>
                            <g filter="url(#filter0_f)">
                            <path d="M92.5 35L133.159 51.8414L150 92.5L133.159 133.159L92.5 150L51.8414 133.159L35 92.5L51.8414 51.8414L92.5 35Z" fill="white"/>
                            </g>
                            <defs>
                            <filter id="filter0_f" x="0" y="0" width="185" height="185" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="17.5" result="effect1_foregroundBlur"/>
                            </filter>
                            </defs>
                        </svg>

                        </div>
                        <div className="subtitle">
                            TRADE CREATIONS
                        </div>
                        <div className="description">
                            Previous collectors receive part of the future patronage.
                        </div>
                    </div>
                </div>
            
                <div className="row sponsors">
                    <div className="title title-sponsors"> BUILT WITH THEM</div>
                        <div className="col-md-3 col-lg-3">
                            <svg width="84" height="137" viewBox="0 0 84 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5" clip-path="url(#clip0)">
                            <path d="M41.9871 0L41.0699 3.1211V93.6883L41.9871 94.6049L83.9746 69.755L41.9871 0Z" fill="#343434"/>
                            <path d="M41.9875 0L0 69.755L41.9875 94.6052V50.6466V0Z" fill="#8C8C8C"/>
                            <path d="M41.9863 102.565L41.4695 103.196V135.458L41.9863 136.969L83.9988 77.7275L41.9863 102.565Z" fill="#3C3C3B"/>
                            <path d="M41.9872 136.969V102.564L-0.000366211 77.7271L41.9872 136.969Z" fill="#8C8C8C"/>
                            <path d="M41.9867 94.6049L83.9736 69.7553L41.9867 50.647V94.6049Z" fill="#141414"/>
                            <path d="M0.000488281 69.7554L41.9874 94.6049V50.647L0.000488281 69.7554Z" fill="#393939"/>
                            </g>
                            <defs>
                            <clipPath id="clip0">
                            <rect width="84" height="137" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>
                    <div className="col-md-3 col-lg-3">
                    <svg width="137" height="137" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M111.312 0H25.6875C11.5007 0 0 11.5007 0 25.6875V111.312C0 125.499 11.5007 137 25.6875 137H111.312C125.499 137 137 125.499 137 111.312V25.6875C137 11.5007 125.499 0 111.312 0Z" fill="#FEDA03"/>
                        <path d="M94.5309 67.998C98.846 66.8765 102.686 63.6487 102.686 57.159C102.686 46.3537 93.5115 43.8394 81.755 43.8394H34.9331V92.4962H54.6403V75.9828H78.0175C81.6191 75.9828 83.7257 77.4099 83.7257 80.9437V92.4962H103.433V80.3321C103.433 73.7062 99.6956 69.5269 94.5309 67.998ZM78.3572 62.8672H54.6403V58.1103H78.3572C80.9394 58.1103 82.5025 58.45 82.5025 60.4887C82.5025 62.5274 80.9394 62.8672 78.3572 62.8672Z" fill="black"/>
                        </svg>

                                        </div>
                                        <div className="col-md-3 col-lg-3">
                                        <svg width="137" height="137" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25.6875 0C11.5007 0 0 11.5007 0 25.6875V111.312C0 125.499 11.5007 137 25.6875 137H111.312C125.499 137 137 125.499 137 111.312V25.6875C137 11.5007 125.499 0 111.312 0H25.6875ZM102.686 57.159C102.686 63.6487 98.8459 66.8765 94.5309 67.998C99.6955 69.5269 103.433 73.7062 103.433 80.3321V92.4962H83.7256V80.9437C83.7256 77.4099 81.619 75.9828 78.0174 75.9828H54.6403V92.4962H34.9331V43.8394H81.755C93.5115 43.8394 102.686 46.3537 102.686 57.159ZM54.6403 62.8672H78.3572C80.9394 62.8672 82.5025 62.5274 82.5025 60.4887C82.5025 58.45 80.9394 58.1103 78.3572 58.1103H54.6403V62.8672Z" fill="black"/>
                    </svg>

                    </div>
                    <div className="col-md-3 col-lg-3">
                    <svg width="131" height="131" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M43.3823 64.8056L65.4117 30.1938L87.4413 64.8056L65.4117 77.3915L43.3823 64.8056Z" fill="white"/>
                            <path d="M43.3823 70.7168L65.4117 83.303L87.4413 70.7168L65.4117 100.609L43.3823 70.7168Z" fill="white"/>
                            <path d="M75.4299 16.1529C72.0087 17.7492 68.6774 19.5316 65.451 21.4922C62.2048 19.5096 58.8452 17.7186 55.3896 16.1282C58.6153 13.9485 61.9485 11.9323 65.3768 10.0874C68.7445 11.8946 72.0954 13.9164 75.4299 16.1529Z" fill="#5F9A34"/>
                            <path d="M122.468 8.3539C110.376 -3.73564 88.339 -2.29148 65.377 10.087C68.7444 11.8942 72.0956 13.916 75.4301 16.1525C84.3193 12.0428 92.7877 9.83935 99.9603 9.83935C106.373 9.83935 111.755 11.5972 115.486 15.3273C123.401 23.2411 122.46 38.5573 114.668 55.3839C116.897 58.7095 118.919 62.0598 120.735 65.4352C133.116 42.4772 134.56 20.4436 122.468 8.3539Z" fill="#FFC750"/>
                            <path d="M75.4303 16.1533C72.0089 17.7496 68.678 19.532 65.4517 21.4926C83.2844 32.5219 98.299 47.5569 109.304 65.4029C111.271 62.1624 113.062 58.8182 114.669 55.3847C109.456 47.6697 103.511 40.4759 96.9147 33.9037C90.3472 27.3029 83.1517 21.358 75.4303 16.1533Z" fill="#FFC750"/>
                            <path d="M120.735 65.435C118.944 68.7606 116.922 72.1109 114.677 75.445C113.07 72.0015 111.277 68.6489 109.303 65.402C111.271 62.1615 113.061 58.8171 114.668 55.3838C116.897 58.7092 118.919 62.0597 120.735 65.435Z" fill="#FF512F"/>
                            <path d="M114.677 75.4453C113.071 72.0021 111.277 68.6494 109.304 65.4023C103.85 74.3199 97.3465 82.5511 89.9319 89.9199C82.5765 97.3372 74.3578 103.845 65.4517 109.305C68.6744 111.271 72.0057 113.054 75.4303 114.644C83.1517 109.439 90.3472 103.494 96.9147 96.8931C103.514 90.3336 109.462 83.1508 114.677 75.4453Z" fill="#FF6895"/>
                            <path d="M127.809 81.9899C125.977 76.2616 123.609 70.719 120.735 65.436C118.944 68.7616 116.922 72.112 114.677 75.446C122.46 92.2642 123.401 107.564 115.485 115.47C107.57 123.384 92.2595 122.435 75.4301 114.644C74.7368 115.115 74.0433 115.569 73.35 116.014C70.7088 117.714 68.0429 119.282 65.377 120.71C77.6008 127.304 89.5605 130.794 99.9025 130.794C108.982 130.794 116.814 128.104 122.468 122.451C131.316 113.605 133.206 99.2374 127.809 81.9899Z" fill="#FF6895"/>
                            <path d="M75.4304 114.644C74.7371 115.115 74.0438 115.569 73.3503 116.014C70.7091 117.714 68.0432 119.282 65.3772 120.71C62.0593 118.928 58.7301 116.914 55.3901 114.669C58.8457 113.079 62.2051 111.288 65.4515 109.305C68.6743 111.272 72.006 113.055 75.4304 114.644Z" fill="#552990"/>
                            <path d="M45.865 118.366C32.2956 122.616 21.4503 121.584 15.3343 115.469C9.2181 109.354 8.18638 98.5109 12.4372 84.944C13.4638 81.6974 14.6961 78.5193 16.1266 75.4291C13.8899 72.1035 11.8759 68.7614 10.0848 65.4438C7.21357 70.7243 4.84795 76.2642 3.01954 81.9896C-2.38661 99.237 -0.488313 113.604 8.35156 122.451C13.8981 127.988 21.607 130.802 30.8347 130.802C36.9454 130.71 43.0065 129.691 48.8116 127.782C54.5436 125.951 60.0901 123.583 65.3768 120.71C62.0589 118.927 58.7299 116.914 55.3897 114.669C52.2974 116.104 49.1159 117.339 45.865 118.366Z" fill="#5666F6"/>
                            <path d="M55.3896 114.668C58.8451 113.078 62.2048 111.287 65.451 109.304C56.5151 103.852 48.268 97.3432 40.8877 89.9198C33.4631 82.5409 26.9535 74.2953 21.4998 65.3608C19.5173 68.6113 17.7233 71.9726 16.1265 75.4286C21.3499 83.1398 27.3065 90.3279 33.9134 96.8929C40.4763 103.503 47.6693 109.456 55.3896 114.668Z" fill="#5666F6"/>
                            <path d="M21.4999 65.3607C19.5176 68.611 17.7236 71.9723 16.1268 75.4285C13.89 72.1027 11.8761 68.7606 10.085 65.4433C11.8925 62.0762 13.923 58.7092 16.1598 55.3838C17.75 58.8076 19.5329 62.1384 21.4999 65.3607Z" fill="#204FA0"/>
                            <path d="M15.3351 15.3275C21.4509 9.21237 32.2964 8.18083 45.8658 12.4392C49.1152 13.4669 52.2965 14.6989 55.3905 16.1279C58.6162 13.9482 61.9494 11.9321 65.3776 10.0872C60.0925 7.21023 54.5457 4.84213 48.8124 3.0149C31.5701 -2.38194 17.2004 -0.492327 8.35238 8.35414C2.69855 14.0071 0.0078125 21.8385 0.0078125 30.916C0.0078125 41.2561 3.49916 53.222 10.0857 65.4437C11.8932 62.0766 13.9237 58.7098 16.1606 55.3842C8.36891 38.5576 7.4197 23.2414 15.3351 15.3275Z" fill="#5FC5A6"/>
                            <path d="M55.3897 16.1274C39.9529 26.6208 26.6419 39.9406 16.1597 55.3836C17.7498 58.8076 19.5328 62.1385 21.4999 65.3606C32.5335 47.5149 47.5837 32.4929 65.4511 21.4914C62.2049 19.5089 58.8453 17.7179 55.3897 16.1274Z" fill="#5FC5A6"/>
                            </svg>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )

}