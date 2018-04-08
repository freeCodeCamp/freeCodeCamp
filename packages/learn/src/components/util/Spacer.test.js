/* global expect */

import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Spacer from './Spacer';

Enzyme.configure({ adapter: new Adapter() });

test('<Spacer /> snapshot', () => {
  const component = renderer.create(
    <Spacer />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
