import React from 'react';
import renderer from 'react-test-renderer';

import { BlockIntros } from './block';

const arrString = ['first paragraph', 'second paragraph'];

describe('<BlockIntros />', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<BlockIntros intros={arrString} />);
    expect(tree).toMatchSnapshot();
  });
});
