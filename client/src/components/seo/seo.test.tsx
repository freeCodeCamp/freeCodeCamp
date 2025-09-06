import React from 'react';
import * as Gatsby from 'gatsby';
import { render } from '@testing-library/react';
import Helmet from 'react-helmet';
import i18next from 'i18next';

import SEO from './index';

type Selector = string | (($: unknown) => string);

function mockKeyFromSelector($: Selector): string {
  return typeof $ === 'function'
    ? (
        i18next as typeof i18next & { keyFromSelector: ($: unknown) => string }
      ).keyFromSelector($)
    : $;
}

const useStaticQuery = jest.spyOn(Gatsby, `useStaticQuery`);
const mockUseStaticQuery = {
  site: {
    siteMetadata: {
      title: 'freeCodeCamp',
      siteUrl: 'freeCodeCamp.org'
    }
  }
};

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: ($: Selector) => ({
        title: mockKeyFromSelector($),
        intro: ['Some description']
      })
    };
  }
}));

describe('<SEO />', () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => mockUseStaticQuery);
  });

  afterEach(() => {
    jest.restoreAllMocks();
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
