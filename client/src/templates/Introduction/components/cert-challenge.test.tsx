import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Provider } from 'react-redux';

import { SuperBlocks } from '@freecodecamp/shared/config/curriculum';
import { User } from '../../../redux/prop-types';
import { createStore } from '../../../redux/create-store';
import { initialState } from '../../../redux';
import CertChallenge from './cert-challenge';

vi.mock('../../../analytics');
vi.mock('../../../utils/get-words');

const signedInStore = (sessionUser: object) =>
  createStore({
    app: {
      ...initialState,
      user: { sessionUser },
      userFetchState: { pending: false, complete: true, errored: false }
    }
  });

const baseUser = {
  username: 'testuser',
  completedChallenges: [],
  isFrontEndLibsCert: false
} as unknown as User;

const certifiedUser = {
  username: 'certifieduser',
  completedChallenges: [],
  isFrontEndLibsCert: true
} as unknown as User;

describe('<CertChallenge />', () => {
  it('shows a "go to settings" link when the user has not claimed the cert', () => {
    const store = signedInStore(baseUser);

    render(
      <Provider store={store}>
        <CertChallenge
          superBlock={SuperBlocks.FrontEndDevLibs}
          user={baseUser}
        />
      </Provider>
    );

    const link = screen.getByRole('link', {
      name: /buttons\.go-to-settings/
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      'href',
      '/settings#cert-front-end-development-libraries'
    );
  });

  it('shows a "show cert" link when the user has claimed the cert', () => {
    const store = signedInStore(certifiedUser);

    render(
      <Provider store={store}>
        <CertChallenge
          superBlock={SuperBlocks.FrontEndDevLibs}
          user={certifiedUser}
        />
      </Provider>
    );

    const link = screen.getByRole('link', {
      name: /buttons\.show-cert/
    });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      'href',
      '/certification/certifieduser/front-end-development-libraries'
    );
  });

  it('renders nothing when the user is not signed in', () => {
    const store = createStore({
      app: {
        ...initialState,
        user: { sessionUser: null },
        userFetchState: { pending: false, complete: true, errored: false }
      }
    });

    render(
      <Provider store={store}>
        <CertChallenge
          superBlock={SuperBlocks.FrontEndDevLibs}
          user={baseUser}
        />
      </Provider>
    );

    expect(screen.queryByRole('link')).toBeNull();
  });
});
