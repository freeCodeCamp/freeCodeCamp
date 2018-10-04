import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import headComponents from './src/head';
import { createStore } from './src/redux/createStore';

import GuideNavigationContextProvider from './src/contexts/GuideNavigationContext';

const store = createStore();

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <GuideNavigationContextProvider>{element}</GuideNavigationContextProvider>
    </Provider>
  );
};

wrapRootElement.propTypes = {
  element: PropTypes.any
};

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([...headComponents]);
  setPostBodyComponents([
    <script
      async={true}
      key='chai-CDN'
      src='https://cdnjs.cloudflare.com/ajax/libs/chai/4.1.2/chai.min.js'
    />,
    <script
      async={true}
      key='gtag-script'
      src='https://www.googletagmanager.com/gtag/js?id=AW-795617839'
    />,
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-795617839');
        `
      }}
      key='gtag-dataLayer'
    />,
    <script async={true} id='stripe-js' src='https://js.stripe.com/v3/' />
  ]);
};
