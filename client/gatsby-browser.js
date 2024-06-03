import cookies from 'browser-cookies';
import PropTypes from 'prop-types';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';

import i18n from './i18n/config';
import { stripe } from './src/utils/stripe';
import AppMountNotifier from './src/components/app-mount-notifier';
import { createStore } from './src/redux/create-store';
import layoutSelector from './utils/gatsby/layout-selector';
import GrowthBookProvider from './src/components/growth-book/growth-book-wrapper';

const store = createStore();

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <GrowthBookProvider>
          <AppMountNotifier>
            <Elements stripe={stripe}>{element}</Elements>
          </AppMountNotifier>
        </GrowthBookProvider>
      </I18nextProvider>
    </Provider>
  );
};

wrapRootElement.propTypes = {
  element: PropTypes.any
};

export const wrapPageElement = layoutSelector;

export const disableCorePrefetching = () => true;

export const onClientEntry = () => {
  // Letting the users' browsers expire the cookie seems to have caused issues
  // for some users. Until we have time to investigate further, we should remove
  // the cookie on every page load.
  cookies.erase('csrf_token');
};
