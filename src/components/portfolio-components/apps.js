import React from 'react';

import PortfolioObject from './portfolio-object';

export default (props) => {
    const projects = props.data.map(project => 
        <PortfolioObject key={project.title} project={ project } />
    );
    
    return <div>
        {projects}
    </div>
}