import React from 'react';
import "./Profile.css"
import ProfileNav from "../shared/profile-nav/profile-nav"

export default function Profile (){


    return(
        <div>
            <ProfileNav/>
            <div className="row">
                <div className="col-md-2 col-lg-2 left-profile" style={{height:"800px"}}>
                    <div className="profile-nav">
                        <div>Overview</div>
                        <div>Active Listings</div>
                        <div>Radical NFTs</div>
                        <div>Patronage NFTs</div>
                        <div>Collected NFTs</div>
                        <div>Account Settings</div>
                    </div>                
                </div>
                <div className="col-md-9" style={{height:"800px"}}>
                        test
                </div>

            </div>
        </div>
    )
}
