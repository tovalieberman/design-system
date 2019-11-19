import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

it('App renders without crashing', () => {
  mount(<Router><App /></Router>);  
});