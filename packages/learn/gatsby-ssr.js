import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';

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

exports.onRenderBody = ({ setPostBodyComponents }) =>
  setPostBodyComponents([
    <script
      async='true'
      key='chai-CDN'
      src='https://cdnjs.cloudflare.com/ajax/libs/chai/4.1.2/chai.min.js'
    />
  ]);
