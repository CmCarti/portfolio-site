import React from 'react';
import PrismicDOM from 'prismic-dom';

export default (props) => {
    // Determine the content
    console.log(props.body);
    

    return<div dangerouslySetInnerHTML={ {__html: PrismicDOM.RichText.asHtml(props.body)}}/>
}