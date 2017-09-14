import React from 'react';
import {Link} from 'react-router-dom'
export default (props) => {
    return (
        <header className="z-depth-2">
            
                <div className="container">
                    <div className="row valign-wrapper">
                        <div className="col s6 left-align">
                        <span className="name">Chad Cartier</span>
                    <span className="title">Front End Developer</span>
                        </div>
                        <div className="col s6 right-align"> <Link to="/" className="nav-link">Home</Link> | <Link to="/portfolio" className="nav-link">Portfolio</Link></div>
                    </div>
                    
                </div>

        </header>
    )
}