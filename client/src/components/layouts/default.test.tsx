/* eslint-disable testing-library/no-node-access */
// Cannot manage to access head with testing library

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from '../../redux/create-store';
import DefaultLayout from './default';

const searchBarProps = {
  fetchState: { pending: false },
  children: null,
  hasMessage: false,
  examInProgress: false,
  pathname: '/learn',
  theme: null,
  user: null,
  fetchUser: jest.fn()
};

const store = createStore();

afterEach(() => {
  jest.resetModules(); // this ensures the mock is reset between tests
});

describe('<Default/>', () => {
  it('contains the NotoSansJP font when client locale is Japanese', () => {
    jest.mock('../../../config/env.json', () => ({
      clientLocale: 'japanese' // default locale
    }));

    render(
      <Provider store={store}>
        <DefaultLayout {...searchBarProps} />
      </Provider>
    );

    console.log(document.querySelectorAll<HTMLLinkElement>('link'));

    const fontLink = document.querySelector<HTMLLinkElement>(
      "link[type='font/woff']"
    );
    expect(fontLink!.href).toContain('NotoSansJP');
  });

  it('contains the Lato font when client locale is English', () => {
    jest.mock('../../../config/env.json', () => ({
      clientLocale: 'english' // default locale
    }));

    render(
      <Provider store={store}>
        <DefaultLayout {...searchBarProps} />
      </Provider>
    );

    const fontLink = document.querySelector<HTMLLinkElement>(
      "link[type='font/woff']"
    );
    expect(fontLink!.href).toContain('Lato');
  });
});
