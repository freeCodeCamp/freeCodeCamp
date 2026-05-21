import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Footer from '.';

describe('<Footer />', () => {
  it('renders footer sections and primary links', () => {
    render(<Footer />);

    expect(screen.getByText('footer.tax-exempt-status')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'make a tax-deductible donation here' })
    ).toHaveAttribute('href', '/donate');

    const trendingList = screen.getByRole('list', {
      name: 'footer.trending-guides'
    });
    const trendingLinks = within(trendingList).getAllByRole('link');
    expect(trendingLinks).toHaveLength(30);
    expect(trendingLinks[0]).toHaveAttribute('href', 'trending:article0link');

    expect(
      screen.getByRole('heading', { name: 'footer.mobile-app' })
    ).toBeInTheDocument();
    expect(
      screen.getByAltText('Download on the App Store')
    ).toBeInTheDocument();
    expect(screen.getByAltText('Get it on Google Play')).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: 'footer.our-nonprofit' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'footer.links.about' })
    ).toHaveAttribute('href', 'links:footer.about-url');
  });
});
