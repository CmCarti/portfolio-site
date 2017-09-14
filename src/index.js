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


ReactDOM.render(
    <BrowserRouter>
        <div className="app-wrapper">
            <Route path="/" component={ Header } />
            <Switch>
                <Route path="/" component={ Home } />
            </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
