import React, {Component} from 'react';
import Prismic from 'prismic-javascript';
import Loading from '../loading';
import BlogBody from './blog-body';

export default class Post extends Component {
    constructor(props){
        super(props)
        this.state = {
            'post': null            
        }
    }

    componentDidMount(){
        const apiEndpoint = "https://chadcartier-blog.prismic.io/api/v2"; 
        const id = this.props.match.params.id;
        const thi$ = this;
        Prismic.getApi(apiEndpoint).then(function(api) {
        return api.query(
            Prismic.Predicates.at('document.id', id)
        ); // An empty query will return all the documents
        }).then(function(response) {
            thi$.setState({
               'post': response.results
            })
        console.log("Documents: ", response.results);
        }, function(err) {
        console.log("Something went wrong: ", err);
        });
    }

    render(){
        if(this.state.post === null) {
            return <Loading />
        }
        const post_meta = this.state.post;
        const post = this.state.post[0].data;
        return(
            <div className="blog-post">
                
                <div className="container">
                <img src={post.featured_image.url} alt="" className="responsive-img" />
                    <div className="row">                        
                        <h2>{post.title[0].text}</h2>
                        <BlogBody body={post.body} />
                    </div>
                </div>
               
            </div>
        )
    }
}