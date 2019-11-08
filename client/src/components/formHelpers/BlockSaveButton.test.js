/* global expect */

import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import BlockSaveButton from './BlockSaveButton';

test('<BlockSaveButton /> snapshot', () => {
  const { container } = render(<BlockSaveButton />);

  expect(container).toMatchSnapshot();
});

test('Button text should default to "Save"', () => {
  const { getByRole } = render(<BlockSaveButton />);

  expect(getByRole('button')).toHaveTextContent('Save');
});

test('Button text should match "children"', () => {
  const testText = 'My Text Here';
  const { getByRole } = render(<BlockSaveButton>{testText}</BlockSaveButton>);

  expect(getByRole('button')).toHaveTextContent(testText);
});
