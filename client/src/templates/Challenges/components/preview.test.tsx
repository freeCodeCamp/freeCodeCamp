import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import Preview from './preview';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key })
}));

describe('Preview', () => {
  it('grants the placeholder exactly the preview sandbox tokens', () => {
    render(<Preview previewMounted={vi.fn()} />);

    const granted = screen
      .getByTitle('learn.chal-preview')
      .getAttribute('sandbox')
      ?.split(' ');

    expect(granted).toEqual(['allow-scripts', 'allow-forms']);
  });
});
