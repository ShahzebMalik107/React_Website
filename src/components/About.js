import React from 'react'
const about = () => {
    return (
        <div className="About">
            <div className="Banner">
                <div className="Inner-benner">
                    <h1>Shahzeb Malik</h1>
                    <h2>Web Problem Solver</h2>
                </div>
            </div>  
            <div className="About-section">
                <div className="profile-image" id="about_me">
                    <img src="/images/Shahzeb_Malik.jpg" alt="Shahzeb Malik"/>
                    <span className="image_hover"><img src="/images/shahzeb_cartoon.jpg" alt="Shahzeb Malik cartoon" /></span>
                </div>
                <div className="text-section container">
                    <h3>About Me</h3>
                    <p>I'm a person not afraid of any kind of challenge. Someone who can implement design through various programming languages and CMS. All these descriptions can go for a good front-end developer. But who is this software professional whose work we can see everywhere on the Internet and without whom we wouldn't be able to enjoy our favorite websites the way we do? It's someone with extensive knowledge of technologies like HTML, CSS, and JavaScript. Someone who gives you (a user) the opportunity to interact with the website and website applications directly. And finally, someone that makes sure you can open up and browse the site on any device or in any browser and the information will still be relevant and easy to read. For me, communication plays an instrumental role in the development process and I strive to keep my clients involved every stage. My penchant for detail allows me to balance form and function every step of the way.</p>
                </div>
            </div>
        </div>
    )
}

export default about
