/* eslint-disable */
import React from 'react';

const mockComponent =
  (name: string) =>
  (
    props: React.InputHTMLAttributes<HTMLInputElement> &
      React.ClassAttributes<HTMLInputElement>
  ) =>
    React.createElement(name, props, props.children);

export const navigateTo = () => {};
export default mockComponent('MockedLink');
