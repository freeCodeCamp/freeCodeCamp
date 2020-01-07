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

// TODO: put these in a common utils file.
const mathJaxCdn = {
  address:
    'https://cdnjs.cloudflare.com/ajax/libs/mathjax/' +
    '2.7.4/MathJax.js?config=TeX-AMS_HTML',
  id: 'mathjax',
  key: 'mathjax',
  type: 'text/javascript'
};

const stripeScript = {
  address: 'https://js.stripe.com/v3/',
  id: 'stripe-js',
  key: 'stripe-js',
  type: 'text/javascript'
};

const challengeRE = new RegExp('/learn/[^/]+/[^/]+/[^/]+/?$');
const donateRE = new RegExp('/donate/?$');

export const wrapPageElement = layoutSelector;

export const onRenderBody = ({
  pathname,
  setHeadComponents,
  setPostBodyComponents
}) => {
  setHeadComponents([...headComponents]);
  const scripts = [
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
    />
  ];

  if (
    pathname.includes('/learn/coding-interview-prep/rosetta-code') ||
    pathname.includes('/learn/coding-interview-prep/project-euler')
  ) {
    scripts.push(
      <script
        async={false}
        id={mathJaxCdn.id}
        key={mathJaxCdn.key}
        src={mathJaxCdn.address}
        type={mathJaxCdn.type}
      />
    );
  }

  if (challengeRE.test(pathname) || donateRE.test(pathname)) {
    scripts.push(
      <script
        async={true}
        id={stripeScript.id}
        key={stripeScript.key}
        src={stripeScript.address}
        type={stripeScript.type}
      />
    );
  }

  setPostBodyComponents(scripts.filter(Boolean));
};
