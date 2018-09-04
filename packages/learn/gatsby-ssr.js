import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

import headComponents from './src/head';

import { createStore } from './src/redux/store';

exports.replaceRenderer = ({
  history,
  bodyComponent,
  replaceBodyHTMLString
}) => {
  const store = createStore(history);

  const ConnectedBody = () => (
    <Provider store={store}>{bodyComponent}</Provider>
  );
  replaceBodyHTMLString(renderToString(<ConnectedBody />));
};

exports.onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([...headComponents]);
  setPostBodyComponents([
    <script
      async='true'
      key='chai-CDN'
      src='https://cdnjs.cloudflare.com/ajax/libs/chai/4.1.2/chai.min.js'
    />,
    <script
      async={true}
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
    />
  ]);
};
