import React from 'react';

export default (props) => {
    const project = props.project;
    const action = project.github === undefined ? (
    <div className="card-action"> 
        <a href={`http://${project.url}`} target="_blank">Visit Site</a>
    </div>) : (
        <div className="card-action"> 
        <a href={`http://${project.url}`} target="_blank">Demo</a>
        <a href={project.github} target="_blank">Github</a>
    </div>
    )
    const tech = Object.values(project.technology).map(tech => (<span className="tech-btn" key={tech}>{tech}</span>))
    return(
        <div key={project.title} className="col m4">
            <div className="card">
                <div className="card-image">
                    <img src={`gs://portfolio-site-5f4f0.appspot.com/images/${project.image_path}`} />
                </div>
                <div className="card-content">
                    <span className="card-title">{project.title}</span>
                     {tech}
                    <p>{ project.description }</p>
                </div>
                { action }
                
            </div>
        </div>
    )
}