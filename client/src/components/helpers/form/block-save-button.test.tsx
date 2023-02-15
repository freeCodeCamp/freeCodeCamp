import { render, screen } from '@testing-library/react';
import React from 'react';

import BlockSaveButton from './block-save-button';

test('<BlockSaveButton /> snapshot', () => {
  const { container } = render(<BlockSaveButton />);

  expect(container).toMatchSnapshot();
});

test('Button text should default to the correct translation key', () => {
  render(<BlockSaveButton />);

  expect(screen.getByRole('button')).toHaveTextContent('buttons.save');
});

test('Button text should match "children"', () => {
  const testText = 'My Text Here';
  render(<BlockSaveButton>{testText}</BlockSaveButton>);

  expect(screen.getByRole('button')).toHaveTextContent(testText);
});
