import React, { Component } from 'react';
import fire from '../firebase';
import BannerContent from './home-components/banner-content';
import Skills from './home-components/skills';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = { 'data' : null }
    }
    componentDidMount() {
        // Grab the data we need from Firebase and set the state
        
        const skills = fire.database().ref('data/skills');
        skills.once('value')
            .then(snapshot => {
               this.setState({'data': snapshot.toJSON()});
            })
    }
    render() {
        
        
        return(
            <div className="home-wrapper">
                <div className="banner">                  
                   
                </div>
                <BannerContent />
                <Skills data={ this.state.data }/>
            </div>
        )
    }
}
