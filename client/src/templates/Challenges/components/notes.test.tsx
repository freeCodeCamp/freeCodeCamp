import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Notes from './notes';

describe('<Notes />', () => {
  it('renders note content', () => {
    render(<Notes notes='<p>This is a test note</p>' />);

    expect(screen.getByText('This is a test note')).toBeVisible();
  });

  it('renders nothing when there are no notes', () => {
    const { container } = render(<Notes />);

    expect(container).toBeEmptyDOMElement();
  });
});
