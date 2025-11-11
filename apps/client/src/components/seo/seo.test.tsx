import React from 'react';
import { render } from '@testing-library/react';
import Helmet from 'react-helmet';
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

  it('renders', () => {
    render(<SEO />);

    const helmet = Helmet.peek();

    expect(helmet.title).toBe('freeCodeCamp');
  });

  it('renders structure data script tag', () => {
    render(<SEO />);

    const helmet = Helmet.peek();
    const structuredDataScript = helmet.scriptTags.find(
      ({ type, innerHTML }) => {
        return (
          type === 'application/ld+json' &&
          innerHTML.includes('https://schema.org')
        );
      }
    );

    expect(structuredDataScript).toBeTruthy();
  });
});
