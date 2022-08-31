import cookies from 'browser-cookies';
import PropTypes from 'prop-types';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import i18n from './i18n/config';
import AppMountNotifier from './src/components/app-mount-notifier';
import { createStore } from './src/redux/createStore';
import layoutSelector from './utils/gatsby/layout-selector';

const store = createStore();

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <AppMountNotifier render={() => element} />
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
  // the token must be erased since it is only valid for the old _csrf secret
  cookies.erase('csrf_token');
};
