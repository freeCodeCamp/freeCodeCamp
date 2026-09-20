import React from 'react';
import { render, screen } from '@testing-library/react';
import Helmet from 'react-helmet';
import { describe, expect, it, vi } from 'vitest';

import translations from '../../../i18n/locales/english/translations.json';
import FourOhFour from '.';
import { randomQuote } from '../../utils/get-words';

vi.mock('../../utils/get-words');

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => {
      const translationsByKey = {
        '404.heres-a-quote': translations['404']['heres-a-quote'],
        '404.not-found': translations['404']['not-found'],
        '404.page-not-found': translations['404']['page-not-found'],
        'buttons.view-curriculum': translations.buttons['view-curriculum']
      } as Record<string, string>;

      return translationsByKey[key] ?? key;
    }
  })
}));

describe('<FourOhFour />', () => {
  it('renders the not found page content', () => {
    render(<FourOhFour />);

    expect(Helmet.peek().title).toBe(
      `${translations['404']['page-not-found']} | freeCodeCamp.org`
    );
    expect(randomQuote).toHaveBeenCalledOnce();
    expect(
      screen.getByRole('img', { name: translations['404']['not-found'] })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: `${translations['404']['page-not-found']}.`
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(translations['404']['heres-a-quote'])
    ).toBeInTheDocument();
    expect(screen.getByText('Test quote')).toBeInTheDocument();
    expect(screen.getByText('- Test author')).toBeInTheDocument();
    expect(
      screen.getByRole('link', {
        name: translations.buttons['view-curriculum']
      })
    ).toHaveAttribute('href', '/learn');
  });
});
