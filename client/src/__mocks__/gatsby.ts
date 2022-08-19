/* eslint-disable no-unused-vars */
import { GatsbyLinkProps } from 'gatsby';
import React from 'react';

const gatsby: NodeModule = jest.requireActual('gatsby');

import envData from '../../../config/env.json';

const { clientLocale } = envData;

module.exports = {
  ...gatsby,
  navigate: jest.fn(),
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({ to, ...rest }: GatsbyLinkProps<boolean | undefined>) =>
      React.createElement('a', {
        ...rest,
        href: to
      })
  ),
  withPrefix: jest.fn().mockImplementation((path: string) => {
    const pathPrefix =
      clientLocale === 'english' || clientLocale === 'chinese'
        ? ''
        : '/' + clientLocale;
    return pathPrefix + path;
  }),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn()
};
