import PropTypes from 'prop-types';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';

import i18n from './i18n/config';
import { stripe } from './src/utils/stripe';
import { createStore } from './src/redux/create-store';
import layoutSelector from './utils/gatsby/layout-selector';
import { getheadTagComponents, getPostBodyComponents } from './utils/tags';
import GrowthBookProvider from './src/components/growth-book/growth-book-wrapper';

const store = createStore();

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <GrowthBookProvider>
          <Elements stripe={stripe}>{element}</Elements>
        </GrowthBookProvider>
      </I18nextProvider>
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

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents
}) => {
  const headComponents = getHeadComponents();
  headComponents.sort((x, y) => {
    if (x.key === 'bootstrap-min-preload' || x.key === 'bootstrap-min') {
      return -1;
    } else if (y.key === 'bootstrap-min-preload' || y.key === 'bootstrap-min') {
      return 1;
    }
    return 0;
  });
  replaceHeadComponents(headComponents);
};
