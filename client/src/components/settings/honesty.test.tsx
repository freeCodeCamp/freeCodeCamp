import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import Honesty from './honesty';

describe('<Honesty />', () => {
  const updateIsHonestMock = vi.fn();

  test('renders pending honesty state', () => {
    render(<Honesty isHonest={false} updateIsHonest={updateIsHonestMock} />);

    expect(
      screen.getByRole('heading', { name: 'settings.headings.honesty' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'buttons.agree-honesty' })
    ).toBeEnabled();
    expect(screen.getByRole('link', { name: '{{email}}' })).toHaveAttribute(
      'href',
      'mailto:support@freecodecamp.org'
    );
  });

  test('renders accepted honesty state', () => {
    render(<Honesty isHonest={true} updateIsHonest={updateIsHonestMock} />);

    expect(
      screen.getByRole('button', { name: 'buttons.accepted-honesty' })
    ).toHaveAttribute('aria-disabled', 'true');
  });

  test('should call updateIsHonest method on clicking agree button', () => {
    render(<Honesty isHonest={false} updateIsHonest={updateIsHonestMock} />);
    fireEvent.click(screen.getByRole('button', { name: /agree/i }));
    expect(updateIsHonestMock).toHaveBeenCalledWith({ isHonest: true });
  });
});
