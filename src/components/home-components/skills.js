import React from 'react';
import Skill from './skill';




export default (props) => {
    
    if(props.data == null) {
        return(<div>Loading...</div>)
    }
    const data = props.data;
    const basics = data.the_basics;
    const javascript = data.javascript;
    const tools = data.tools;
    return(
        <div className="skills-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col s12 center-align">
                        <h2>Skillset</h2>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                <div className="col m4">
                    <Skill title={ basics.title }
                     skills={ Object.values(basics.skills) } />
                </div>
                <div className="col m4">
                    <Skill title={ javascript.title } 
                    skills={Object.values(javascript.skills)}/>
                </div>
                    <div className="col m4">
                       <Skill 
                        title={ tools.title }
                        skills={Object.values(tools.skills)} />
                    </div>
            </div>
            </div>
        </div>
    );
}