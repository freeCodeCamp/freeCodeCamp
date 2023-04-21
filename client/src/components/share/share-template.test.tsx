import React from 'react';
import { render, screen } from '@testing-library/react';
import { ShareTemplate } from './share-template';

const redirectURL = 'string';

describe('Share Template Testing', () => {
  beforeEach(() => {
    render(<ShareTemplate redirectURL={redirectURL} />);
  });

  test('Testing share templete Click Redirect Event', () => {
    const hasTwitterComponent = screen.getByText('share-on-twitter');
    expect(hasTwitterComponent).toBeInTheDocument();
  });
});
