import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { archivedSuperBlocks } from '@freecodecamp/shared/config/curriculum';

import ArchivePage from './archive';

vi.mock('gatsby', () => ({
  graphql: vi.fn(),
  Link: ({
    children,
    to,
    ...rest
  }: {
    children?: React.ReactNode;
    to: string;
  }) => (
    <a href={to} {...rest}>
      {children}
    </a>
  ),
  StaticQuery: vi.fn(),
  useStaticQuery: vi.fn(),
  withPrefix: (path: string) => path
}));

vi.mock('i18next', () => ({
  default: {
    t: (key: string) => key
  }
}));

vi.mock('../../components/layouts/learn', () => ({
  default: ({ children }: { children?: React.ReactNode }) => (
    <main>{children}</main>
  )
}));

describe('ArchivePage', () => {
  test('renders the archive page heading and current curriculum link', () => {
    render(<ArchivePage />);

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'learn.archive.title'
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText('landing.legacy-curriculum-heading')
    ).toBeInTheDocument();

    const currentCurriculumLink = screen.getByRole('link', {
      name: 'placeholder'
    });
    expect(currentCurriculumLink).toHaveAttribute('href', '/learn');
  });

  test('renders archived superblock links in order', () => {
    render(<ArchivePage />);

    const curriculumLinks = screen
      .getAllByRole('link')
      .filter(
        link =>
          link.getAttribute('href')?.startsWith('/learn/') &&
          link.getAttribute('href') !== '/learn'
      );

    expect(curriculumLinks).toHaveLength(archivedSuperBlocks.length);

    for (const [index, superBlock] of archivedSuperBlocks.entries()) {
      const link = curriculumLinks[index];

      expect(link).toHaveAttribute('href', `/learn/${superBlock}/`);
      expect(link).toHaveTextContent(`intro:${superBlock}.title`);
    }
  });
});
