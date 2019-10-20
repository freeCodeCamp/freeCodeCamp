/* global expect */

import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BlockSaveWrapper from './BlockSaveWrapper';

Enzyme.configure({ adapter: new Adapter() });

test('<BlockSaveWrapper /> snapshot', () => {
  const component = renderer.create(<BlockSaveWrapper />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
