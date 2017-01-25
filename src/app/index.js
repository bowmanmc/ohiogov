/* eslint-disable import/default */ // - This lets us do the configureStore.dev/prod trick
import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes';


ReactDom.render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);
