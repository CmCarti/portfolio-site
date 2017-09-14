import React from 'react';

export default (props) => {
    const skills = props.skills.map((skill) =>{
        return (
            <li>{skill}</li>
        )
    }
    )
    return(
            <div className="skill-category">
                        <h3 className="skill-title">
                        {props.title}
                        </h3>
                        <div className="skill-list">
                            <ul>
                                {skills}
                            </ul>
                        </div>
                    </div> 
    )
}