/* global expect */

import React from 'react';
import { render } from '@testing-library/react';

import BlockSaveWrapper from './BlockSaveWrapper';

test('<BlockSaveWrapper /> snapshot', () => {
  const { container } = render(<BlockSaveWrapper />);

  expect(container).toMatchSnapshot();
});
