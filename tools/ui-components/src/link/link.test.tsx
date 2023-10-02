import React from 'react';
import { render, screen } from '@testing-library/react';

import { Link } from '.';

describe('<Link />', () => {
  it('should render correctly', () => {
    const url = 'https://www.freecodecamp.org';
    render(<Link to={url}>Go to freeCodeCamp</Link>);

    expect(
      screen.getByRole('link', { name: /Go to freeCodeCamp/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Go to freeCodeCamp/i })
    ).toHaveAttribute('href', url);
  });
});
