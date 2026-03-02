import React from 'react';
import type { GatsbyLinkProps } from 'gatsby';
import { vi } from 'vitest';
import gatsby from 'gatsby';

import envData from '../config/env.json';
const { clientLocale } = envData;

export const navigate = vi.fn();
export const graphql = vi.fn();
export const Link = vi
  .fn()
  .mockImplementation(({ to, ...rest }: GatsbyLinkProps<undefined | boolean>) =>
    React.createElement('a', { ...rest, href: to })
  );
export const withPrefix = vi.fn().mockImplementation((path: string) => {
  const pathPrefix = clientLocale === 'english' ? '' : '/' + clientLocale;
  return pathPrefix + path;
});
export const StaticQuery = vi.fn();
export const useStaticQuery = vi.fn();

export default {
  // ...existing code...
  // spread the actual gatsby module to keep other exports working
  ...gatsby,
  navigate,
  graphql,
  Link,
  withPrefix,
  StaticQuery,
  useStaticQuery
};
