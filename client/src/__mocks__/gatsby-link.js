/* eslint-disable */
import { createElement } from 'react';

const mockComponent = name => props =>
  createElement(name, props, props.children);

export const navigateTo = () => {};
export default mockComponent('MockedLink');
