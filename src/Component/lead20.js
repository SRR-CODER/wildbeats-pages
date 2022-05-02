import React from "react"
// import pic from "../images/newlead.png";

export default function Lead() {
    return (
        <div className="lead">
            <div className="lead1-20">
                <div>
                    <img alt='asd' className="leadimg" />
                    <h1>Lead</h1>
                    <h4>Ishaan</h4>
                    {/* <div className="connections">
                        <button onClick={() => window.location = 'mailto:techclub@iiitkottayam.ac.in'} className="email-icon"><img src={pic1} /></button>
                        <button className="linkedin-icon"><a href="www.google.com"><img src={pic2} /></a></button>
                    </div> */}
                </div>
                <div>
                    <img alt='asd' className="leadimg" />
                    <h1>Lead</h1>
                    <h4>Fahad</h4>
                    {/* <div className="connections">
                        <button onClick={() => window.location = 'mailto:techclub@iiitkottayam.ac.in'} className="email-icon"><img src={pic1} /></button>
                        <button className="linkedin-icon"><a href="www.google.com"><img src={pic2} /></a></button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}