import type { GatsbySSR } from 'gatsby';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';

import i18n from './i18n/config';
import { stripe } from './src/utils/stripe';
import { createStore } from './src/redux/create-store';
import layoutSelector from './utils/gatsby/layout-selector';
import { webmanifestComponents } from './src/components/webmanifest';
import {
  getheadTagComponents,
  getPostBodyComponents,
  getPreBodyThemeScript
} from './utils/tags';
import GrowthBookProvider from './src/components/growth-book/growth-book-wrapper';

const store = createStore();

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => {
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

export const wrapPageElement: GatsbySSR['wrapPageElement'] = layoutSelector;

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  pathname,
  setHeadComponents,
  setPreBodyComponents,
  setPostBodyComponents
}) => {
  setHeadComponents([...getheadTagComponents(), ...webmanifestComponents]);
  setPreBodyComponents(getPreBodyThemeScript());
  setPostBodyComponents(getPostBodyComponents(pathname));
};

export const onPreRenderHTML: GatsbySSR['onPreRenderHTML'] = ({
  getHeadComponents,
  replaceHeadComponents
}) => {
  const isBootstrapScript = (key: React.Key | null) =>
    key === 'bootstrap-min-preload' || key === 'bootstrap-min';

  const headComponents = getHeadComponents();
  headComponents.sort((x, y) => {
    const xKey = React.isValidElement(x) ? x.key : null;
    const yKey = React.isValidElement(y) ? y.key : null;

    if (isBootstrapScript(xKey)) {
      return -1;
    } else if (isBootstrapScript(yKey)) {
      return 1;
    }
    return 0;
  });
  replaceHeadComponents(headComponents);
};
