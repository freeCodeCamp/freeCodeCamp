import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BlockIntros from './block-intros';

const arrString = ['first paragraph', 'second paragraph'];

describe('<BlockIntros />', () => {
  it('renders each intro paragraph', () => {
    render(<BlockIntros intros={arrString} />);

    expect(screen.getAllByText(/paragraph/)).toHaveLength(2);
    expect(screen.getByText('first paragraph')).toBeInTheDocument();
    expect(screen.getByText('second paragraph')).toBeInTheDocument();
  });
});
