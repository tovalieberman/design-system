import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

import App from './components/App';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl });

ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
  document.getElementById('root'));
