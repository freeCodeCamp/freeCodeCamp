import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { I18nextProvider } from 'react-i18next';
import { describe, it, expect, beforeAll, vi } from 'vitest';

import i18nTestConfig from '../../../i18n/config-for-tests';
import translations from '../../../i18n/locales/english/translations.json';
import { initialState as appInitialState } from '../../redux';
import { createStore } from '../../redux/create-store';
import SignoutModal from '.';
import { pathAfterSignout } from './path-after-signout';

vi.unmock('react-i18next');

vi.mock('../../utils/get-words');

i18nTestConfig.addResourceBundle(
  'en',
  'translations',
  translations,
  true,
  true
);
const t = i18nTestConfig.t.bind(i18nTestConfig);

describe('pathAfterSignout', () => {
  it('should default to the supplied path', () => {
    const unexceptionalPath = 'a/normal/path/';
    expect(pathAfterSignout(unexceptionalPath)).toBe(unexceptionalPath);
  });

  it('should redirect paths that automatically sign in back to /learn', () => {
    const pathsThatAttemptToSignIn = ['/settings', '/update-email'];
    const newPaths = pathsThatAttemptToSignIn.map(pathAfterSignout);

    expect(newPaths).toEqual(['/learn', '/learn']);
  });

  it('should redirect paths with trailing slashes', () => {
    const pathsThatAttemptToSignIn = ['/settings/', '/update-email/'];
    const newPaths = pathsThatAttemptToSignIn.map(pathAfterSignout);

    expect(newPaths).toEqual(['/learn', '/learn']);
  });

  it('should only redirect exact matches', () => {
    const similarPaths = ['/settingss', '/update-emails/', '/settings/2'];
    const newPaths = similarPaths.map(pathAfterSignout);

    expect(newPaths).toEqual(similarPaths);
  });
});

function renderSignoutModal({ isOpen = true }: { isOpen?: boolean } = {}) {
  const store = createStore({
    app: {
      ...appInitialState,
      showSignoutModal: isOpen
    }
  });

  render(
    <Provider store={store}>
      <I18nextProvider i18n={i18nTestConfig}>
        <SignoutModal />
      </I18nextProvider>
    </Provider>
  );
}

describe('<SignoutModal />', () => {
  beforeAll(() => {
    vi.stubGlobal(
      'ResizeObserver',
      class ResizeObserver {
        observe = vi.fn();
        unobserve = vi.fn();
        disconnect = vi.fn();
      }
    );
  });

  it('renders the modal content when the signout modal is open', () => {
    renderSignoutModal();

    expect(
      screen.getByRole('dialog', { name: t('signout.heading') })
    ).toBeInTheDocument();

    expect(screen.getByText(t('signout.p1'))).toBeInTheDocument();
    expect(screen.getByText(t('signout.p2'))).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: t('signout.nevermind') })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: t('signout.certain') })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: t('buttons.close') })
    ).toBeInTheDocument();
  });

  it('does not render the modal when the signout modal is closed', () => {
    renderSignoutModal({ isOpen: false });

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('closes the modal when the user cancels signing out', async () => {
    const user = userEvent.setup();
    renderSignoutModal();

    await user.click(
      screen.getByRole('button', { name: t('signout.nevermind') })
    );

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });

  it('closes the modal with the header close button', async () => {
    const user = userEvent.setup();
    renderSignoutModal();

    await user.click(screen.getByRole('button', { name: t('buttons.close') }));

    await waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });
});
