/* global expect */

import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { DynamicForm } from './Form';

Enzyme.configure({ adapter: new Adapter() });

const defaultTestProps = {
  errors: {},
  fields: {
    _meta: {
      allPristine: true,
      name: 'name',
      onChange: () => {},
      value: ''
    }
  },
  handleSubmit: () => {},

  buttonText: 'Submit',
  enableSubmit: true,
  formFields: ['name', 'website'],
  hideButton: false,
  id: 'my-test-form',
  options: {
    types: {
      name: 'text',
      website: 'url'
    },
    required: ['website']
  },
  submit: () => {}
};

test('<DynamicForm /> snapshot', () => {
  const component = renderer.create(<DynamicForm {...defaultTestProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
