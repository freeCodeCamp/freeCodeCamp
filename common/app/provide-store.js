/* eslint-disable react/display-name */
import React from 'react';
import { Provider } from 'react-redux';

export default function provideStore(element, store) {
  return React.createElement(
    Provider,
    { store },
    element
  );
}
