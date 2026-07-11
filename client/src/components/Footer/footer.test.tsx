import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Footer from '.';

const bottomLinks = [
  {
    title: 'footer.links.about',
    href: 'links:footer.about-url'
  },
  {
    title: 'footer.links.alumni',
    href: 'https://www.linkedin.com/school/free-code-camp/people/'
  },
  {
    title: 'footer.links.open-source',
    href: 'https://github.com/freeCodeCamp/'
  },
  {
    title: 'footer.links.shop',
    href: 'links:footer.shop-url'
  },
  {
    title: 'footer.links.support',
    href: 'links:footer.support-url'
  },
  {
    title: 'footer.links.sponsors',
    href: 'links:footer.sponsors-url'
  },
  {
    title: 'footer.links.honesty',
    href: 'links:footer.honesty-url'
  },
  {
    title: 'footer.links.coc',
    href: 'links:footer.coc-url'
  },
  {
    title: 'footer.links.privacy',
    href: 'links:footer.privacy-url'
  },
  {
    title: 'footer.links.tos',
    href: 'links:footer.tos-url'
  },
  {
    title: 'footer.links.copyright',
    href: 'links:footer.copyright-url'
  }
];

describe('<Footer />', () => {
  it('renders the nonprofit copy and donation link', () => {
    render(<Footer />);

    expect(screen.getByText('footer.tax-exempt-status')).toBeInTheDocument();
    expect(screen.getByText('footer.mission-statement')).toBeInTheDocument();
    expect(screen.getByText('footer.donation-initiatives')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'make a tax-deductible donation here' })
    ).toHaveAttribute('href', '/donate');
  });

  it('renders the trending guides section', () => {
    render(<Footer />);

    expect(
      screen.getByRole('heading', { name: 'footer.trending-guides' })
    ).toBeInTheDocument();
    const trendingList = screen.getByRole('list', {
      name: 'footer.trending-guides'
    });
    const trendingLinks = within(trendingList).getAllByRole('link');
    expect(trendingLinks).toHaveLength(30);
    expect(trendingLinks[0]).toHaveAttribute('href', 'trending:article0link');
    expect(trendingLinks[29]).toHaveAttribute('href', 'trending:article29link');
  });

  it('renders the mobile app download links', () => {
    render(<Footer />);

    expect(
      screen.getByRole('heading', { name: 'footer.mobile-app' })
    ).toBeInTheDocument();

    const mobileAppLinks = within(
      screen.getByRole('list', { name: 'footer.mobile-app' })
    ).getAllByRole('link');

    expect(mobileAppLinks).toHaveLength(2);
    expect(
      within(mobileAppLinks[0]).getByRole('img', {
        name: 'Download on the App Store'
      })
    ).toBeInTheDocument();
    expect(mobileAppLinks[0]).toHaveAttribute(
      'href',
      'https://apps.apple.com/us/app/freecodecamp/id6446908151?itsct=apps_box_link&itscg=30200'
    );
    expect(
      within(mobileAppLinks[1]).getByRole('img', {
        name: 'Get it on Google Play'
      })
    ).toBeInTheDocument();
    expect(mobileAppLinks[1]).toHaveAttribute(
      'href',
      'https://play.google.com/store/apps/details?id=org.freecodecamp'
    );
  });

  it('renders the footer bottom links', () => {
    render(<Footer />);

    expect(
      screen.getByRole('heading', { name: 'footer.our-nonprofit' })
    ).toBeInTheDocument();

    for (const { title, href } of bottomLinks) {
      expect(screen.getByRole('link', { name: title })).toHaveAttribute(
        'href',
        href
      );
    }
  });
});
