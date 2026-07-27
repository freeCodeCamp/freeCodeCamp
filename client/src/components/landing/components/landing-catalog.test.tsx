import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import { catalog } from '@freecodecamp/shared/config/catalog';
import LandingCatalog from './landing-catalog';

const featuredSuperBlocks = [
  SuperBlocks.LearnPythonForBeginners,
  SuperBlocks.ComputerBasics,
  SuperBlocks.BasicHtml
];

describe('LandingCatalog', () => {
  test('renders the catalog heading', () => {
    render(<LandingCatalog />);
    expect(screen.getByText('landing.catalog.heading')).toBeInTheDocument();
  });

  test('renders three featured course items and a see all link', () => {
    render(<LandingCatalog />);
    // 3 featured courses + 1 "See All" link
    expect(screen.getAllByRole('link')).toHaveLength(4);
  });

  test('featured courses link to their superblock learn pages', () => {
    render(<LandingCatalog />);
    for (const superBlock of featuredSuperBlocks) {
      const course = catalog.find(c => c.superBlock === superBlock);
      const link = screen.getByRole('link', {
        name: new RegExp(`topic\\.${course!.topic}`)
      });
      expect(link).toHaveAttribute('href', `/learn/${superBlock}`);
    }
  });

  test('has a "See All Courses" link to /catalog', () => {
    render(<LandingCatalog />);
    const seeAllLink = screen.getByRole('link', {
      name: 'landing.catalog.seeAll'
    });
    expect(seeAllLink).toHaveAttribute('href', '/catalog');
  });
});
