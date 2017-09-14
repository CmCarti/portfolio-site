import React from 'react';

import Skill from './skill';

export default (props) => {
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
                    <Skill title={ 'The Essentials'}
                     skills={[
                         'JavaScript',
                         'HTML',
                         'CSS',
                         'Bootstrap',
                         'PHP',
                         'WordPress'
                     ] } />
                </div>
                <div className="col s4">
                    <Skill title={'JavaScript In-Depth'} 
                    skills={[
                        'ES6',
                        'React',
                        'Redux',
                        'lodash',
                        'Node',
                        'Express',
                        'Meteor',
                        'Server Side Rendering'
                    ]}/>
                </div>
                    <div className="col s4">
                       <Skill 
                        title={'Tools'}
                        skills={[
                            'git', 
                            'Command Line',
                            'Webpack',
                            'Babel', 
                            'SASS',
                            'Photoshop',
                            'Affinity Designer',
                            'Illustrator',
                            'Visual Studio Code',
                        ]} />
                    </div>
            </div>
            </div>
        </div>
    );
}