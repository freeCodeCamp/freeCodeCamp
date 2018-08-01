/* eslint-disable react/display-name */
import React from 'react';
import { Provider } from 'react-redux';

export default function provideStore(Component, store) {
  return (
    <Provider store={ store } >
      <Component />
    </Provider>
  );
}
