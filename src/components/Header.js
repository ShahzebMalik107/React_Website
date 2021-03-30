import React from 'react'

const header = () => {
    return (
        <header className="Header">
            <div className="inner_header container">
            <div className="Logo">
               <a href="/"> <h1>Shahzeb Malik</h1></a>
            </div>
            <div className="Navbar">
                <ul className="Nav-bar">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#about_me">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#work">Work</a>
                    </li>
                </ul>
            </div>
            </div>
        </header>
    )
}

export default header
