/* global expect */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';

import Footer from './';

describe('<Footer />', () => {
  it('renders to the DOM', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
