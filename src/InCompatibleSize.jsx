import React from "react";
import incompabtibleImg from "./incompatibleDP.jpg";
const InCompatibleSize = () => {
    return (<>

        <div className="incompatible-box">
            <div className="incompatible-center-box">
                <div className="incompatible-img">
                    <img src={incompabtibleImg} alt="loading"/>
                </div>
                <h2>RDX CV Maker</h2>
                <p>Your device is incompatible to view the content. Kindly use tablet, laptop or computer to view the content.</p>
            </div>
        </div>
    </>)
}
export default InCompatibleSize;