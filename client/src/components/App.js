import React from 'react';
import { Route } from 'react-router';

import Home from './Home';
import NavMenu from './NavMenu';
import Components from './Components';
// import '../styles/bootstrap-theme.css';

export default () => (
  <div>
    <div className='row'>
      <NavMenu />
    </div>
    <div className='row'>
      <div className="container" style={{paddingTop: 20}}>
        <Route exact path='/' component={Home} />
        <Route path='/components' component={Components} />
      </div>
    </div>
  </div>
);
