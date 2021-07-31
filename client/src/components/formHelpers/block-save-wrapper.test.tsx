import React from 'react';
import { render } from '@testing-library/react';

import BlockSaveWrapper from './block-save-wrapper';

test('<BlockSaveWrapper /> snapshot', () => {
  const { container } = render(<BlockSaveWrapper />);

  expect(container).toMatchSnapshot();
});
