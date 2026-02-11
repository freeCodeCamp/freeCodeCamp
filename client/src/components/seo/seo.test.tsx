import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';

import SEO from './index';

const mockUseStaticQuery = {
  site: {
    siteMetadata: {
      title: 'freeCodeCamp'
    }
  }
};

vi.mock('gatsby', () => ({
  useStaticQuery: vi.fn(() => mockUseStaticQuery),
  graphql: vi.fn()
}));

vi.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => ({
        title: str,
        intro: ['Some description']
      })
    };
  }
}));

describe('<SEO />', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders with default title', () => {
    const { container } = render(<SEO />);

    const titleEl = container.querySelector('title');
    expect(titleEl?.textContent).toBe('freeCodeCamp');
  });

  it('renders structured data script tag', () => {
    const { container } = render(<SEO />);

    const scriptEl = container.querySelector(
      'script[type="application/ld+json"]'
    );
    expect(scriptEl).toBeTruthy();
    expect(scriptEl?.textContent).toContain('https://schema.org');
  });
});
