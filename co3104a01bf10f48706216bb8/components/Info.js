import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img src="./images/Russell_Mink.jpg" className="info--img" />
            <h1 className="info--name"> Russell Mink </h1>
            <h4 className="info--title"> Frontend Developer </h4>
            <div className="info--link">
                <a href="https://rmink1202.GitHub.io/Russell-Mink-Portfolio-2/" className="info--profile">Portfolio Site Link</a>
            </div>
            <div className="info--buttons"> 
                <button className="mail--button"><a className="email" href = "mailto: russellmink@yahoo.com">Email</a></button>
                <button className="social--button"><a className="link" href = "https://www.linkedin.com/in/russell-mink-74b871b3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bgh81Wh3hSf6VQLItFMc6Rw%3D%3D">LinkedIn</a></button>
            </div>
        </div>
    )
}