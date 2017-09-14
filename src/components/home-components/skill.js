import React from 'react';

export default (props) => {
    // Map over the skills from the database
    const skills = props.skills.map((skill) =>{
        return (
            <li key={skill}><strong>{skill}</strong></li>
        )
    }
    );
    return(
            <div className="card z-depth-3">
                <div className="card-image">
                    <img src={ require('../../gradient.png') } alt="" />
                    <span className="card-title ">
                            { props.title }
                    </span>
                </div>
                <div className="card-content">
                   <ul>
                   { skills }    
                    </ul> 
                    
                </div>          
            </div> 
    )
}