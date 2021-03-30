import React from 'react'

const Footer = () => {
    return (
        <div className="Footer">
        <div className="container">
            <div className="top-bar">
                <h2>My Services</h2>
            </div>
            <div className="Services">
                <ul>
                    <li>
                        <h4>Front-end Development</h4>
                        <p>
                        A strong penchant for detail and an eye for design allow me to code pixel-perfect webpages that are easy on the eyes and responsive across all major platforms.
                        </p>
                    </li>
                    <li>
                        <h4> WordPress Development </h4>
                        <p>With over 30 different projects under my belt I know just how to build you the perfect website on the most popular Content Management System in the world.</p>
                    </li>
                    <li>
                        <h4> React Js </h4>
                        <p>Getting started with react combining the js and front-end exprience </p>
                    </li>
                </ul>
            </div>
            <div className="Socialmedia">
                <div className="SSIC">
                    <h5>Follow me on</h5>
                    <ul>
                        <li>
                            <a href="https://github.com/ShahzebMalik107" target="black"  ><i className="fab fa-github"></i></a>
                        </li>
                        <li>
                            <a href="https://codepen.io/shahzebmalik" target="black"> <i className="fab fa-codepen"></i> </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/shahzeb-malik-632533180/" traget="black"> <i className="fab fa-linkedin-in"></i> </a>
                        </li>
                    </ul>
                </div>
                <div className="Continfo">
                    <h5>Contact Me</h5>
                    <ul>
                        <li>
                            <a href="tel:+923165977334"><i className="fas fa-phone-alt"></i> +92-316-5977334</a>
                        </li>
                        <li>
                            <a href="mailto:shahzebworks@gmail.com"><i className="fas fa-envelope"></i> shahzebworks@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="copyright">
            <div className="container">
                <p>Copyrght By ShahzebMalik</p>
            </div>
        </div>
    </div>
    )
}

export default Footer
