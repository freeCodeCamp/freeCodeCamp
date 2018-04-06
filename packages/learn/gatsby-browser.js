import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import { createStore } from './src/redux/store';

exports.replaceRouterComponent = ({ history }) => {
  const store = createStore(history || {});

  const ConnectedRouterWrapper = ({ children }) => (
    <Provider store={store}>
      <ConnectedRouter history={history}>{children}</ConnectedRouter>
    </Provider>
  );
  ConnectedRouterWrapper.displayName = 'ConnectedRouterWrapper';
  ConnectedRouterWrapper.propTypes = {
    children: PropTypes.node
  };

  return ConnectedRouterWrapper;
};
