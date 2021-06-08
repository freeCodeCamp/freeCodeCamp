/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const React = require('react');

const gatsby = jest.requireActual('gatsby');

const envData = require('../../../config/env.json');

const { clientLocale } = envData;

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
  withPrefix: jest.fn().mockImplementation(path => {
    const pathPrefix =
      clientLocale === 'english' || clientLocale === 'chinese'
        ? ''
        : '/' + clientLocale;
    return pathPrefix + path;
  }),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn()
};
