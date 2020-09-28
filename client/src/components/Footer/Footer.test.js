/* global expect */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';

import Footer from './';

describe('<Footer />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
