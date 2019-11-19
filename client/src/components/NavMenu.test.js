import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import NavMenu from './NavMenu';

it('NavMenu renders without crashing', () => {
  mount(<Router><NavMenu /></Router>);  
});