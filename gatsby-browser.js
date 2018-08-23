import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import { createStore } from './src/redux/createStore';

const store = createStore();

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};

wrapRootElement.propTypes = {
  element: PropTypes.any
};
