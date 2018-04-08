import React from 'react';

const mockComponent = name => props =>
  React.createElement(name, props, props.children);

export default mockComponent('MockedLink');
