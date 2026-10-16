import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import BreadCrumb from './bread-crumb';

vi.mock('i18next', () => ({
  default: {
    t: (key: string) => key
  }
}));

describe('<BreadCrumb />', () => {
  test('renders superblock and block links', () => {
    render(
      <BreadCrumb
        block='workshop-cat-photo-app'
        superBlock='responsive-web-design-v9'
      />
    );

    expect(
      screen.getByRole('navigation', { name: 'aria.breadcrumb-nav' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: 'intro:responsive-web-design-v9.title'
      })
    ).toHaveAttribute('href', '/learn/responsive-web-design-v9');
    expect(
      screen.getByRole('link', {
        name: 'intro:responsive-web-design-v9.blocks.workshop-cat-photo-app.title'
      })
    ).toHaveAttribute(
      'href',
      '/learn/responsive-web-design-v9/#workshop-cat-photo-app'
    );
  });
});
