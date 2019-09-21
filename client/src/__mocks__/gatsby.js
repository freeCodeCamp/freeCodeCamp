/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const React = require('react');

const gatsby = jest.requireActual('gatsby');

module.exports = {
  ...gatsby,
  navigate: jest.fn(),
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) =>
      React.createElement('a', {
        ...rest,
        href: to
      })
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn()
};
