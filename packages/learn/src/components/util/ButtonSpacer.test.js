/* global expect */

import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ButtonSpacer from './ButtonSpacer';

Enzyme.configure({ adapter: new Adapter() });

test('<ButtonSpacer /> snapshot', () => {
  const component = renderer.create(<ButtonSpacer />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
