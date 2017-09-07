import React, { Component } from 'react';

import BannerContent from './home-components/banner-content';
import Skills from './home-components/skills';

export default class Home extends Component {
    render() {
        return(
            <div className="home-wrapper">
                <div className="banner">
                   
                   
                </div>
                <BannerContent />
                <Skills />
            </div>
        )
    }
}
