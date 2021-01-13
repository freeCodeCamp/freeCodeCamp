import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import i18n from './i18n/config';
import { createStore } from './src/redux/createStore';
import layoutSelector from './utils/gatsby/layoutSelector';
import { getheadTagComponents, getPostBodyComponents } from './utils/tags';

const store = createStore();

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>{element}</I18nextProvider>
    </Provider>
  );
};

wrapRootElement.propTypes = {
  element: PropTypes.any
};

export const wrapPageElement = layoutSelector;

export const onRenderBody = ({
  pathname,
  setHeadComponents,
  setPostBodyComponents
}) => {
  setHeadComponents(getheadTagComponents());
  setPostBodyComponents(getPostBodyComponents(pathname));
};
