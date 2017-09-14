import React, { Component } from 'react';
import fire from '../firebase';
import BannerContent from './home-components/banner-content';
import Skills from './home-components/skills';
import About from './home-components/about';
import Loading from './loading';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = { 
            'skills' : null,
            'about' : null,
            'loaded': false
    }
    }
    componentDidMount() {
        // Grab the data we need from Firebase and set the state
        
        const data = fire.database().ref('data');
        data.once('value')
            .then(snapshot => {
               this.setState({
                   'skills': snapshot.child('skills').toJSON(),
                   'about' : snapshot.child('about').toJSON(),
                   'loaded': true
                });            
               
            })
    }
    render() {
        
        if(this.state.loaded === false){
            return (
                <Loading />
            )
        }
        
        return(
            <div className="home-wrapper">
               
                <BannerContent />
                <Skills data={ this.state.skills }/>
                <About data={ this.state.about } />
            </div>
        )
    }
}
