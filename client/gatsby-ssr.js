import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import headComponents from './src/head';
import { createStore } from './src/redux/createStore';

import layoutSelector from './utils/gatsby/layoutSelector';

const store = createStore();

export const wrapRootElement = ({ element }) => {
  return <Provider store={store}>{element}</Provider>;
};

wrapRootElement.propTypes = {
  element: PropTypes.any
};

export const wrapPageElement = layoutSelector;

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([...headComponents]);
  setPostBodyComponents(
    [
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
      <script
        async={true}
        id='stripe-js'
        key='stripe-js'
        src='https://js.stripe.com/v3/'
      />
    ].filter(Boolean)
  );
};
