import React from 'react'

const skills = () => {
    return (
        <div className="skills_section">
            <div className="Breaking-point">
                <div className="inner-skills container">
                    <div className="Wordpress"> <h4>Wordpress</h4></div>
                    <div className="HTML"><h4>HTML/CSS</h4></div>
                    <div className="JS"><h4>JavaScript</h4></div>
                </div>
            </div>
            <div className="skill_main container">
                <ul className="skill-list">
                    <li>
                        <label htmlFor="HTML/CSS">HTML/CSS</label>
                        <progress className="progress-bar" value='85' max='100'></progress>
                    </li>
                    <li>
                        <label htmlFor="Bootstrap">BootStrap</label>
                        <progress className="progress-bar" value='65' max='100'></progress>
                    </li>
                    <li>
                        <label htmlFor="Javascript">JavaScript</label>
                        <progress className="progress-bar" value='75' max='100'></progress>
                    </li>
                    <li>
                        <label htmlFor="Wordpress">Wordpress</label>
                        <progress className="progress-bar" value='90' max='100'></progress>
                    </li>
                    <li>
                        <label htmlFor="React">React</label>
                        <progress className="progress-bar" value='45' max='100'></progress>
                    </li>
                    <li>
                        <label htmlFor="Photoshop">Photoshop</label>
                        <progress className="progress-bar" value='65' max='100'></progress>
                    </li>
                    <li>
                        <label htmlFor="XD">XD</label>
                        <progress className="progress-bar" value='50' max='100'></progress>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default skills
