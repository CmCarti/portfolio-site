import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js'
import './index.css';

// Initialize Firebase


import registerServiceWorker from './registerServiceWorker';

import Header from './components/header';
import Home from './components/home';
import Portfolio from './components/portfolio';
import Blog from './components/blog';
import Post from './components/blog-components/post';


ReactDOM.render(
    <BrowserRouter>
        <div className="app-wrapper">
            <Route path="/" component={ Header } />
            <Switch>
                <Route path="/blog/posts/:id/:slug" component={Post}/>
                <Route path="/blog" component={Blog} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/" component={ Home } />
            </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
