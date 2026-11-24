import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { describe, expect, test, vi } from 'vitest';

import i18nTestConfig from '../../../i18n/config-for-tests';
import { DonationFaqText } from './donation-text-components';

vi.unmock('react-i18next');

const renderWithI18n = (ui: React.ReactElement) =>
  render(<I18nextProvider i18n={i18nTestConfig}>{ui}</I18nextProvider>);

describe('<DonationFaqText />', () => {
  test('renders each FAQ item under its own heading', () => {
    renderWithI18n(<DonationFaqText />);

    const headings = screen.getAllByRole('heading', { level: 3 });
    const buttons = screen.getAllByRole('button');

    expect(headings.length).toBeGreaterThan(1);
    expect(buttons).toHaveLength(headings.length);
  });

  test('expanding one FAQ item does not expand or affect the others', () => {
    renderWithI18n(<DonationFaqText />);
    const buttons = screen.getAllByRole('button');

    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[2]);

    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true');
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'false');
    expect(buttons[2]).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(buttons[0]);
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false');
    expect(buttons[2]).toHaveAttribute('aria-expanded', 'true');
  });

  test('does not violate the rules of hooks (no console errors) when toggling items', () => {
    const errorSpy = vi.spyOn(console, 'error');
    renderWithI18n(<DonationFaqText />);
    const buttons = screen.getAllByRole('button');

    buttons.forEach(button => fireEvent.click(button));

    expect(errorSpy).not.toHaveBeenCalled();
  });
});
