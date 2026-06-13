import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key
  })
}));

import MenuButton from './menu-button';

describe('<MenuButton />', () => {
  it('sets aria-controls to the header menu', () => {
    render(
      <MenuButton displayMenu={false} showMenu={vi.fn()} hideMenu={vi.fn()} />
    );

    const button = screen.getByRole('button', {
      name: 'buttons.menu buttons.menu'
    });
    expect(button).toHaveAttribute('aria-controls', 'header-menu');
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });
});
