import React, { Component } from 'react';
import Prismic from 'prismic-javascript';

import Loading from './loading';
import LatestPosts from './blog-components/latest-posts';

export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'posts' : null,
            'loaded' : false
        }         
    }
    componentDidMount(){
        const apiEndpoint = "https://chadcartier-blog.prismic.io/api/v2"; 
        const thi$ = this;
        Prismic.getApi(apiEndpoint).then(function(api) {
        return api.query(
            Prismic.Predicates.at('document.type', 'post')
        ); // An empty query will return all the documents
        }).then(function(response) {
            thi$.setState({
                'posts' : response.results,
                'loaded' : true
            })
        console.log("Documents: ", response.results);
        }, function(err) {
        console.log("Something went wrong: ", err);
        });
    }


    render() {
        if(this.state.loaded === false) {
            return(<Loading />)
        }
        return(
            <div className="blog">
                <div className="container">
                    <div className="row">
                        <h2>Blog</h2>
                        <p>I post stuff about the tech I'm learning, and projects I'm working on here.</p>
                    </div>
                    <div className="row">
                        <h3>Latest Posts</h3>
                        <LatestPosts data={this.state.posts} />
                    </div>
                </div>
            </div>
        )
    }
}