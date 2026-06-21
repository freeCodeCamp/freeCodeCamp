import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Output from './output';

describe('Output', () => {
  it('renders HTML entities as text instead of interpreting them as HTML', () => {
    render(<Output defaultOutput='' output={'Dolce &amp; Gabbana'} />);

    expect(screen.getByText('Dolce &amp; Gabbana')).toBeInTheDocument();
    expect(screen.queryByText('Dolce & Gabbana')).not.toBeInTheDocument();
  });

  it('renders the default output when output is empty', () => {
    render(<Output defaultOutput='Default output' output='' />);

    expect(screen.getByText('Default output')).toBeInTheDocument();
  });
});
