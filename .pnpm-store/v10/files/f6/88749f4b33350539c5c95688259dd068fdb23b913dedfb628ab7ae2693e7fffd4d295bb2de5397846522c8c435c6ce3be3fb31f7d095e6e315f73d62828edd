import {
  FLAG,
  getEmptyResult,
  IOptions,
  IResult,
  parseImpl,
  resetResult,
} from 'tldts-core';

import suffixLookup from './src/suffix-trie';

// For all methods but 'parse', it does not make sense to allocate an object
// every single time to only return the value of a specific attribute. To avoid
// this un-necessary allocation, we use a global object which is re-used.
const RESULT: IResult = getEmptyResult();

export function parse(url: string, options: Partial<IOptions> = {}): IResult {
  return parseImpl(url, FLAG.ALL, suffixLookup, options, getEmptyResult());
}

export function getHostname(
  url: string,
  options: Partial<IOptions> = {},
): string | null {
  /*@__INLINE__*/ resetResult(RESULT);
  return parseImpl(url, FLAG.HOSTNAME, suffixLookup, options, RESULT).hostname;
}

export function getPublicSuffix(
  url: string,
  options: Partial<IOptions> = {},
): string | null {
  /*@__INLINE__*/ resetResult(RESULT);
  return parseImpl(url, FLAG.PUBLIC_SUFFIX, suffixLookup, options, RESULT)
    .publicSuffix;
}

export function getDomain(
  url: string,
  options: Partial<IOptions> = {},
): string | null {
  /*@__INLINE__*/ resetResult(RESULT);
  return parseImpl(url, FLAG.DOMAIN, suffixLookup, options, RESULT).domain;
}

export function getSubdomain(
  url: string,
  options: Partial<IOptions> = {},
): string | null {
  /*@__INLINE__*/ resetResult(RESULT);
  return parseImpl(url, FLAG.SUB_DOMAIN, suffixLookup, options, RESULT)
    .subdomain;
}

export function getDomainWithoutSuffix(
  url: string,
  options: Partial<IOptions> = {},
): string | null {
  /*@__INLINE__*/ resetResult(RESULT);
  return parseImpl(url, FLAG.ALL, suffixLookup, options, RESULT)
    .domainWithoutSuffix;
}
