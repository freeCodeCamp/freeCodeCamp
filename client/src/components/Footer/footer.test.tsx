import React from 'react';
import renderer from 'react-test-renderer';
import { describe, expect, it } from 'vitest';

import Footer from '.';

describe('<Footer />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Footer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
