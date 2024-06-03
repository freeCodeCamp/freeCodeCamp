import React from 'react';
import { render, screen } from '@testing-library/react';
import { ShareTemplate } from './share-template';

const redirectURL = 'string';

describe('Share Template Testing', () => {
  render(<ShareTemplate redirectURL={redirectURL} />);
  test('Testing share template Click Redirect Event', () => {
    const link = screen.getByRole('link', {
      name: 'buttons.tweet aria.opens-new-window'
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'string');
  });
});
