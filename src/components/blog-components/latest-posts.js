import React from 'react';

import PostCard from './post-card';

export default (props) => {

    const posts = props.data.map(post => (
        <PostCard key={post.id} post={post} />
    ))


    return( 
        <div>
            {posts}
        </div>
    )
}