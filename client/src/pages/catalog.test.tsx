import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { catalog } from '@freecodecamp/shared/config/catalog';
import CatalogPage from './catalog';

vi.mock('../components/catalog-item', () => ({
  default: ({ superBlock }: { superBlock: string }) => (
    <a data-testid='catalog-item' href={`/learn/${superBlock}`}>
      {superBlock}
    </a>
  )
}));

describe('CatalogPage', () => {
  test('renders the catalog page title', () => {
    render(<CatalogPage />);
    expect(screen.getByText('curriculum.catalog.title')).toBeInTheDocument();
  });

  test('renders a catalog item for each entry', () => {
    render(<CatalogPage />);
    const items = screen.getAllByTestId('catalog-item');
    expect(items).toHaveLength(catalog.length);
  });

  test('catalog items link to their superblock learn pages', () => {
    render(<CatalogPage />);
    for (const course of catalog) {
      const item = screen.getByRole('link', { name: course.superBlock });
      expect(item).toHaveAttribute('href', `/learn/${course.superBlock}`);
    }
  });

  test('renders level and topic filter dropdowns', () => {
    render(<CatalogPage />);
    expect(screen.getByText(/Level:/)).toBeInTheDocument();
    expect(screen.getByText(/Topic:/)).toBeInTheDocument();
  });
});
