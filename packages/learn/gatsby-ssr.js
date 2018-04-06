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
