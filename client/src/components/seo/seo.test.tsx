import React from 'react';
import { render } from '@testing-library/react';
import Helmet from 'react-helmet';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';

import SEO, { type ListItem } from './index';

const mockUseStaticQuery = {
  site: {
    siteMetadata: {
      title: 'freeCodeCamp',
      siteUrl: 'https://www.freecodecamp.org'
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

  it('injects valid JSON-LD with one ItemList entry per superblock', () => {
    render(<SEO />);

    const helmet = Helmet.peek();
    const script = helmet.scriptTags.find(
      ({ type }) => type === 'application/ld+json'
    );
    expect(script).toBeTruthy();

    const data = JSON.parse(script!.innerHTML) as {
      '@context': string;
      '@type': string;
      itemListElement: ListItem[];
    };

    expect(data['@context']).toBe('https://schema.org');
    expect(data['@type']).toBe('ItemList');
    expect(data.itemListElement).toHaveLength(
      Object.values(SuperBlocks).length
    );

    data.itemListElement.forEach((listItem, index) => {
      expect(listItem['@type']).toBe('ListItem');
      expect(listItem.position).toBe(index + 1);

      const { item } = listItem;
      expect(item['@type']).toBe('Course');
      expect(item.url).toContain(`/learn/${Object.values(SuperBlocks)[index]}`);
      expect(item.name).toBeTruthy();
      expect(item.description).toBeTruthy();
      expect(item.provider['@type']).toBe('Organization');
      expect(item.provider.name).toBe('freeCodeCamp');
      expect(item.provider.sameAs).toBe('https://freecodecamp.org');
      expect(item.provider.nonprofitStatus).toBe('Nonprofit501c3');
    });
  });
});
