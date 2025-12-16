import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll } from 'vitest';
import { Provider } from 'react-redux';
import envData from '../../config/env.json';
import ShowSettings from './show-settings';

import { createStore } from '../redux/create-store';
import { initialState } from '../redux';

vi.mock('../utils/get-words');

const { apiLocation } = envData;

describe('<ShowSettings />', () => {
  beforeAll(() => {
    // Location is not writable normally, so we have to delete and recreate
    // https://github.com/jestjs/jest/issues/890#issuecomment-682286025
    const location = window.location as string & Location;
    // @ts-expect-error TS is warning us that this breaks the type of
    // window.location, since it is not optional, but we are replacing it with
    // an object of the same type, it is safe to ignore.
    delete global.window.location;
    global.window.location = Object.assign({}, location);
  });

  it('does not navigate if already signed in', () => {
    const store = createStore({
      app: { ...initialState, user: { sessionUser: 'anything truthy' } }
    });
    const spy = vi.spyOn(window.location, 'href', 'set');

    render(
      <Provider store={store}>
        <ShowSettings />
      </Provider>
    );
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('redirects to sign in page when user is not logged in', () => {
    const store = createStore({
      app: { ...initialState, user: { sessionUser: null } }
    });
    const spy = vi.spyOn(window.location, 'href', 'set');

    render(
      <Provider store={store}>
        <ShowSettings />
      </Provider>
    );
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(`${apiLocation}/signin`);
  });
});
