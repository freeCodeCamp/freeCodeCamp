import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import { i18nextCodes } from '../../../config/i18n';
import i18nTestConfig from '../../i18n/config-for-tests';
import { createStore } from '../redux/create-store';
import AppMountNotifier from './app-mount-notifier';

jest.unmock('react-i18next');

type Language = keyof typeof i18nextCodes;
type LanguagePair = [string, string];

const store = createStore();

// Create a nested array for languages
const languages = Object.keys(i18nextCodes).map(
  (key): LanguagePair => [i18nextCodes[key as Language], key]
);

describe('AppMountNotifier', () => {
  const setup = (lang: string) => {
    i18nTestConfig.language = lang;

    render(
      <Provider store={store}>
        <I18nextProvider i18n={i18nTestConfig}>
          <AppMountNotifier render={() => <p>App content</p>} />
        </I18nextProvider>
      </Provider>
    );
  };

  test.each(languages)(
    'should set the lang attribute to %s if the language is %s',
    async langCode => {
      setup(langCode);

      await waitFor(() => {
        /* eslint-disable-next-line testing-library/no-node-access */
        expect(document.querySelector('html')).toHaveAttribute(
          'lang',
          langCode
        );
      });
    }
  );
});
