import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
    
    const post_data = props.post.data;
    const last_pub = props.post.last_publication_date;
    const pub_date = `${last_pub.substr(5, 2)}/${last_pub.substr(8,2)}/${last_pub.substr(0,4)}`;

    const tags = props.post.tags.map(tag => (
        <span key={tag} className="tag">{tag}</span>
    ))

    console.log(pub_date);
    return(
        <div className="col m4">
        <div className="card" >
            <div className="card-image">
                <img src={post_data.featured_image.url} alt={post_data.featured_image.alt} />
               
            </div>
            <div className="card-content">
                <span className="card-title">{post_data.title[0].text}</span>
                <p><em><small>{pub_date} </small></em></p>
                <p className="tags">Tags:{tags}</p>
            </div>
            <div className="card-action">
                <Link to={ `/blog/posts/${props.post.id}/${props.post.slugs[0]}` }>Read</Link>
            </div>
        </div>
        </div>
    )
}