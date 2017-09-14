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
            <div className="header">
                <div className="container">
                <h2>My Skillset</h2>
                </div>
                
                
            </div>
            <div className="container">
                <div className="row">
                <div className="col s4">
                    <Skill title={ basics.title }
                     skills={ Object.values(basics.skills) } />
                </div>
                <div className="col s4">
                    <Skill title={ javascript.title } 
                    skills={Object.values(javascript.skills)}/>
                </div>
                    <div className="col s4">
                       <Skill 
                        title={ tools.title }
                        skills={Object.values(tools.skills)} />
                    </div>
            </div>
            </div>
        </div>
    );
}