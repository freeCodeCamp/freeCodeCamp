/* eslint-disable */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { afterAll, describe, it, expect, vi } from 'vitest';
import { Provider } from 'react-redux';
import i18next from 'i18next';

import { createStore } from '../redux/create-store';
import { ShowUser } from './show-user';

const store = createStore();

vi.mock('../utils/get-words');

const selectorToKey = <S, T>(selector: ($: S) => T) => {
  const keyResolver = Reflect.get(i18next, 'keyFromSelector');
  if (typeof keyResolver === 'function') {
    const key = String(keyResolver(selector));
    if (key) return key;
  }

  const path: string[] = [];
  const proxy = new Proxy<Record<string, unknown>>(
    {},
    {
      get(_target, prop) {
        path.push(String(prop));
        return proxy;
      }
    }
  );
  Reflect.apply(selector, undefined, [proxy]);
  return path.join('.');
};

const i18nSpy = vi
  .spyOn(i18next, 't')
  .mockImplementation(selector => selectorToKey(selector));

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
const baseProps = {
  reportUser: vi.fn(),
  t: i18next.t,
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

afterAll(() => {
  i18nSpy.mockRestore();
});
