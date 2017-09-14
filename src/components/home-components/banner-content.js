import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
    return(
        <div className="banner-content">
            <div className="container center">
            <h1>I Develop Web Apps<span className="line-break"> &amp; Websites</span></h1>
            <Link to="/portfolio" className="btn">My Work</Link>
            
            <div className="sub-links">
            <p>Or view my code:</p>
            <a href="https://github.com/CmCarti" target="_blank" className="sub-link">Github</a>
            &nbsp;|&nbsp; 
            <a href="" target="_blank"  className="sub-link">Codepen</a>
            </div>
            </div>
            
        </div>
    
    );
}