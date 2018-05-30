/* eslint-disable react/display-name */
import { createElement } from 'react';
import { Provider } from 'react-redux';

export default function provideStore(Component, store) {
  return createElement(
    Provider,
    { store },
    createElement(Component)
  );
}
