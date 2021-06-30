import React from 'react';
import "./Profile.css"
import ProfileNav from "../shared/profile-nav/profile-nav"

export default function Profile (){


    return(
        <div>
            <ProfileNav/>
            <div className="row">
                <div className="col-md-3 col-lg-3 left-profile" style={{height:"800px"}}>
                    <div className="profile-nav">
                        <div>Overview</div>
                        <div>Active Listings</div>
                        <div>Radical NFTs</div>
                        <div>Patronage NFTs</div>
                        <div>Collected NFTs</div>
                        <div>Account Settings</div>
                    </div>                
                </div>
                <div className="col-md-9 col-lg-9 overview" style={{height:"800px"}}>
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
