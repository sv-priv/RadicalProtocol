import React from 'react';
import "./NFTEarning.css"
import {Link } from 'react-router-dom'

export default function NFTEarning (){


    return(
        <div>
                <div className="card">
                    <div className="card-img-top"  alt=""></div>
                    <div className="card-body">
                            <div className="title-earning">
                                <Link to="/singlenft"className="text-link">
                                    Spherical Harmony
                                </Link>
                                <span className="file-format">
                                    <svg width="42" height="25" viewBox="0 0 42 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="42" height="25" rx="12.5" fill="#EDEFFF"/>
                                        <path d="M10.798 13.114C10.798 16.222 12.282 18.14 14.69 18.14C16.034 18.14 17.014 17.482 17.574 16.334L17.686 18H18.568V13.128H14.788V14.15H17.392C17.308 15.956 16.412 17.048 14.816 17.048C13.094 17.048 12.114 15.648 12.114 13.114C12.114 10.552 13.108 9.166 14.858 9.166C16.174 9.166 16.944 9.978 17.21 11.49L18.456 11.238C18.05 9.166 16.86 8.06 14.872 8.06C12.324 8.06 10.798 9.95 10.798 13.114ZM21.1126 18H22.4006V8.2H21.1126V18ZM25.4121 18H26.6861V13.884H30.4661V12.778H26.6861V9.292H30.9281V8.2H25.4121V18Z" fill="#B2B2C1"/>
                                    </svg>
                                </span>
                            </div>
                        <div className="author-earning">
                            <span className=""><img src=""></img> </span>
                            <span className="">@Username </span>
                        </div>
                        <div className="row earning-price">
                            <div className="col-md-6 col-lg-6 left-part-earning">
                                <div className="listed-price-earning">
                                    1.5 ETH
                                </div>
                                <div className="listed-price-desc-earning">
                                    Listed Price
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 right-part-earning">
                                <div className="patronage-earning">
                                    10%
                                </div>
                                <div className="patronage-desc-earning">
                                    Patronage
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
        </div>
    )
}


