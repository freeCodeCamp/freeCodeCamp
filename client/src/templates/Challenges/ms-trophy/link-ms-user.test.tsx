import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import { describe, expect, it, vi } from 'vitest';

import i18nTestConfig from '../../../../i18n/config-for-tests';
import translations from '../../../../i18n/locales/english/translations.json';
import { linkMsUsername, unlinkMsUsername } from '../../../redux/actions';
import LinkMsUser from './link-ms-user';

vi.unmock('react-i18next');

i18nTestConfig.addResourceBundle(
  'en',
  'translations',
  translations,
  true,
  true
);

interface TestUser {
  msUsername?: string | null;
}

function createTestStore({
  isProcessing = false,
  sessionUser
}: {
  isProcessing?: boolean;
  sessionUser: TestUser | null;
}) {
  return createStore(() => ({
    app: {
      isProcessing,
      user: {
        sessionUser
      }
    }
  }));
}

function renderWithUser({
  isProcessing,
  sessionUser
}: {
  isProcessing?: boolean;
  sessionUser: TestUser | null;
}) {
  const reduxStore = createTestStore({ isProcessing, sessionUser });
  const dispatch = vi.spyOn(reduxStore, 'dispatch');

  render(
    <Provider store={reduxStore}>
      <I18nextProvider i18n={i18nTestConfig}>
        <LinkMsUser />
      </I18nextProvider>
    </Provider>
  );

  return { dispatch };
}

describe('LinkMsUser', () => {
  it('renders sign-in guidance for signed-out users', () => {
    renderWithUser({ sessionUser: null });

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: translations.learn.ms['link-header']
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(translations.learn.ms['link-signin'])
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: translations.buttons['sign-in'] })
    ).toHaveAttribute('href', expect.stringMatching(/\/signin$/));
  });

  it('renders linked Microsoft account state', async () => {
    const user = userEvent.setup();
    const { dispatch } = renderWithUser({
      sessionUser: { msUsername: 'dotnetcamper' }
    });

    expect(
      screen.getByText(
        i18nTestConfig.t('learn.ms.linked', {
          msUsername: 'dotnetcamper'
        })
      )
    ).toBeInTheDocument();

    const unlinkButton = screen.getByRole('button', {
      name: translations.buttons['unlink-account']
    });
    expect(unlinkButton).not.toHaveAttribute('aria-disabled', 'true');

    await user.click(unlinkButton);

    expect(dispatch).toHaveBeenCalledWith(unlinkMsUsername());
  });

  it('disables the unlink button while processing', () => {
    renderWithUser({
      isProcessing: true,
      sessionUser: { msUsername: 'dotnetcamper' }
    });

    expect(
      screen.getByRole('button', {
        name: translations.buttons['unlink-account']
      })
    ).toHaveAttribute('aria-disabled', 'true');
  });

  it('renders unlinked Microsoft account guidance and validates transcript links', async () => {
    const user = userEvent.setup();
    const { dispatch } = renderWithUser({ sessionUser: { msUsername: null } });

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: translations.learn.ms['link-header']
      })
    ).toBeInTheDocument();
    expect(
      screen.getByText(translations.learn.ms.unlinked)
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', {
        name: 'https://learn.microsoft.com/users/me/transcript'
      })
    ).toHaveAttribute(
      'href',
      'https://learn.microsoft.com/users/me/transcript'
    );
    expect(
      screen.getByText(translations.learn.ms['link-li-2'])
    ).toBeInTheDocument();
    expect(
      screen.getByText(translations.learn.ms['link-li-3'])
    ).toBeInTheDocument();
    expect(
      screen.getByText(translations.learn.ms['link-li-4'])
    ).toBeInTheDocument();
    expect(
      screen.getByText(translations.learn.ms['link-li-6'])
    ).toBeInTheDocument();

    const transcriptInput = screen.getByLabelText(
      translations.learn.ms['transcript-label']
    );
    expect(transcriptInput).toHaveAttribute(
      'placeholder',
      'https://learn.microsoft.com/en-us/users/username/transcript/transcriptId'
    );

    const linkButton = screen.getByRole('button', {
      name: translations.buttons['link-account']
    });
    expect(linkButton).toHaveAttribute('aria-disabled', 'true');

    await user.type(transcriptInput, 'https://learn.microsoft.com');

    expect(linkButton).toHaveAttribute('aria-disabled', 'true');
    expect(
      screen.getByText(
        /Your transcript link is not correct, it should have the following form:/
      )
    ).toBeInTheDocument();

    await user.clear(transcriptInput);
    const validTranscriptUrl =
      'https://learn.microsoft.com/en-us/users/dotnetcamper/transcript/abc123';
    await user.type(transcriptInput, validTranscriptUrl);

    expect(linkButton).not.toHaveAttribute('aria-disabled', 'true');

    await user.click(linkButton);

    expect(dispatch).toHaveBeenCalledWith(
      linkMsUsername({ msTranscriptUrl: validTranscriptUrl })
    );
  });
});
