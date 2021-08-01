import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { render, screen } from '@testing-library/react';

import i18nConfig from '../../i18n/config';
import { DummyComponent } from './dummy-component';

jest.mock('react-ga');
jest.unmock('react-i18next');

describe('<DummyComponent />', () => {
  const setup = () => {
    render(
      <I18nextProvider i18n={i18nConfig}>
        <DummyComponent />
      </I18nextProvider>
    );
  };

  it('should render a heading', () => {
    setup();

    expect(screen.getByText(/learn to code — for free/i)).toBeInTheDocument();
  });

  it('should render a forum link', () => {
    setup();

    // screen.debug();

    expect(
      screen.getByRole('link', { name: /link to the forum/i })
    ).toHaveAttribute('href', 'https://forum.freecodecamp.org/');
  });
});
