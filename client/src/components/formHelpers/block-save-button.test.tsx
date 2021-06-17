import React from 'react';
import { render } from '@testing-library/react';

import BlockSaveButton from './block-save-button';

test('<BlockSaveButton /> snapshot', () => {
  const { container } = render(<BlockSaveButton />);

  expect(container).toMatchSnapshot();
});

test('Button text should default to the correct translation key', () => {
  const { getByRole } = render(<BlockSaveButton />);

  expect(getByRole('button')).toHaveTextContent('buttons.save');
});

test('Button text should match "children"', () => {
  const testText = 'My Text Here';
  const { getByRole } = render(<BlockSaveButton>{testText}</BlockSaveButton>);

  expect(getByRole('button')).toHaveTextContent(testText);
});
