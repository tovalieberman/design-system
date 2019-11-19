import React from 'react';
import { mount } from 'enzyme';
import Components from './Components';

it('Components renders without crashing', () => {
  mount(<Components />);
});
