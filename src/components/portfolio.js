import React, { Component } from 'react';
import Loading from './loading';
import fire from '../firebase';


import Apps from './portfolio-components/apps';

export default class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "apps" : null,
            "sites" : null,
            "loaded" : false,

        }
    }
    componentDidMount() {
        const data = fire.database().ref('data/projects');
        data.once('value')
            .then(snapshot => {
               this.setState({
                   'apps': Object.values(snapshot.child('applications').toJSON()),
                   'sites' : Object.values(snapshot.child('websites').toJSON()),
                   'loaded': true
                });            
                console.log(this.state.apps);
                console.log(this.state.sites);
            })
    }
    render(){
        if(this.state.loaded === false) {
            return <Loading />
        }
        
        return (
            <div className="portfolio">
                <div className="container">
                    <div className="row">
                        <h2>Applications</h2>
                        <Apps data={ this.state.apps }/>
                    </div>
                    <div className="row">
                        <h2>Websites</h2>
                        <Apps data={this.state.sites} />
                    </div>
                </div>
            </div>
        )
        
        
    }
}