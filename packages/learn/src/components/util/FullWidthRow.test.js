/* global expect */

import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FullWidthRow from './FullWidthRow';

Enzyme.configure({ adapter: new Adapter() });

test('<FullWidthRow /> snapshot', () => {
  const component = renderer.create(<FullWidthRow />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
