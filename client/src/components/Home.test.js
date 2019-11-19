import React from 'react';
import { mount } from 'enzyme';
import Home from './Home';

it('Home renders without crashing', () => {
  mount(<Home />);
});