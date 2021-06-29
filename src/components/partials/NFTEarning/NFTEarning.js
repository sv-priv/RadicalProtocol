import React from 'react';
import "./NFTEarning.css"
import {Link } from 'react-router-dom'

export default function NFTEarning (){


    return(
        <div>
                <div className="card">
                    <div className="card-img-top"  alt=""></div>
                    <div className="card-body">
                        <Link to="/singlenft"className="text-link">
                            <h5 className="title-earning">Spherical Harmony</h5>
                        </Link>
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


