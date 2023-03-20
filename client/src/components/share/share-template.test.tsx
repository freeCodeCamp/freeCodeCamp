import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ShareTemplate } from './share-template';

const handleRedirectToTwitter = jest.fn();

describe('Share Template Testing', () => {
  beforeEach(() => {
    render(<ShareTemplate handleRedirectToTwitter={handleRedirectToTwitter} />);
  });

  test('Testing share templete Click Redirect Event', () => {
    const hasTwitterComponent = screen.getByTitle('twitterIcon');
    expect(hasTwitterComponent).toBeInTheDocument();
    fireEvent.click(hasTwitterComponent);
    expect(handleRedirectToTwitter).toBeCalledTimes(1);
  });
});
