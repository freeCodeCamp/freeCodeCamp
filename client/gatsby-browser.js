import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import { createStore } from './src/redux/createStore';
import AppMountNotifier from './src/components/AppMountNotifier';
import GuideNavContextProvider from './src/contexts/GuideNavigationContext';

const store = createStore();

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <GuideNavContextProvider>
        <AppMountNotifier render={() => element} />
      </GuideNavContextProvider>
    </Provider>
  );
};

wrapRootElement.propTypes = {
  element: PropTypes.any
};
