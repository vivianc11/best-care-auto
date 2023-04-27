import React from "react";
import './Footer.css';

function Footer() {

    return (
        <div className="footer">
            <p>
                Address: <br/>
                <a className="directions-link" href='https://www.google.com/maps/dir//Best+Care+Auto+11362+Westminster+Ave+ste+w+Garden+Grove,+CA+92843/@33.7592367,-118.0009812,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80dd27f38ad98e6b:0xc3e6620fa0b73186!2m2!1d-117.9309411!2d33.7592565' target="_blank" rel="noopener noreferrer">11362 Westminster Ave Ste W <br/>
                Garden Grove, CA 92843</a>
            </p>
            <br/><br/>
            <p>
                Copyright © 2023 <br/>
                Best Care Auto - All Rights Reserved.
            </p>
        </div>
    )


}

export default Footer;