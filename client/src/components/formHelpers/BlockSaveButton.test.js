/* global expect */

import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BlockSaveButton from './BlockSaveButton';

Enzyme.configure({ adapter: new Adapter() });

test('<BlockSaveButton /> snapshot', () => {
  const component = renderer.create(<BlockSaveButton />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button text should default to "Save"', () => {
  const enzymeWrapper = Enzyme.render(<BlockSaveButton />);

  expect(enzymeWrapper.text()).toBe('Save');
});

test('Button text should match "children"', () => {
  const enzymeWrapper = Enzyme.render(
    <BlockSaveButton>My Text Here</BlockSaveButton>
  );

  expect(enzymeWrapper.text()).toBe('My Text Here');
});
