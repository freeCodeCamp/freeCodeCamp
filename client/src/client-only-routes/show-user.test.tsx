/* eslint-disable */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Provider } from 'react-redux';
import type * as I18next from 'i18next';

import { createStore } from '../redux/create-store';
import { ShowUser } from './show-user';

const store = createStore();

vi.mock('../utils/get-words');

describe('<ShowUser />', () => {
  it('renders login button when user is signed out', () => {
    render(
      <Provider store={store}>
        <ShowUser {...loggedOutProps} />
      </Provider>
    );
    expect(screen.getByText('report.sign-in')).toBeInTheDocument();
  });

  it('renders report form when user is signed in', () => {
    render(
      <Provider store={store}>
        <ShowUser {...loggedInProps} />
      </Provider>
    );
    expect(screen.getByText('report.submit')).toBeInTheDocument();
  });
});

// Mock props for different states
const mockT = vi.fn(key => key) as unknown as I18next.TFunction;

const baseProps = {
  reportUser: vi.fn(),
  t: mockT,
  username: 'testuser',
  userFetchState: {
    pending: false,
    complete: true,
    errored: false,
    error: null
  }
};

const loggedInProps = {
  ...baseProps,
  user: { email: 'test@example.com' }
};

const loggedOutProps = {
  ...baseProps,
  user: null
};
