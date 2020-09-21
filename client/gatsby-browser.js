import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import { createStore } from './src/redux/createStore';
import AppMountNotifier from './src/components/AppMountNotifier';
import layoutSelector from './utils/gatsby/layoutSelector';

const store = createStore();

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <AppMountNotifier render={() => element} />
    </Provider>
  );
};

wrapRootElement.propTypes = {
  element: PropTypes.any
};

export const onServiceWorkerUpdateReady = () => {
  // eslint-disable-next-line
  const answer = window.confirm(
    'This application has been updated. ' +
      'Reload to display the latest version?'
  );

  if (answer) {
    window.location.reload();
  }
};

export const wrapPageElement = layoutSelector;

export const disableCorePrefetching = () => true;
