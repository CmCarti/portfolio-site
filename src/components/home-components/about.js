import React from 'react';

export default (props) => {
    if(props.data === null) {
        return(<div className="container">Loading...</div>)
    }
    const data = props.data;
    const bio = data.bio;
    const contact_info = data.contact_info;
    const work_history = Object.values(data.work_history).map( job => (
            <div key={job.title} className="job">
                <h4>{ job.title }</h4>
                <h5>{ job.position } <span className="location"><em>{job.location}</em></span></h5>                
                <h6><em>{job.start_date}-{job.end_date}</em></h6>
            </div>
        )
     );
   
    return(
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col m7">
                        <h3>About Me</h3>
                        <p>{ bio }</p>
                    </div>
                    <div className="col m3">
                        <h3>Work History</h3>
                        {work_history}
                    </div>
                    <div className="col m2">
                        <h3>Contact</h3>
                        <ul>
                            <li><a href={contact_info.twitter} target="blank">Twitter</a></li>
                            <li><a href={`mailto:${contact_info.email}`} target="blank">chadmcartier@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}