// @flow

import _isURL from 'is-url';

// Matches anchor (ie: #raptors)
const ANCHOR_REGEXP = /^#/;

// Matches scheme (ie: tel:, mailto:, data:, itms-apps:)
const SCHEME_REGEXP = /^[a-z][a-z0-9\-+.]*:/i;

export default function isURL(url: string): boolean {
  return _isURL(url) || ANCHOR_REGEXP.test(url) || SCHEME_REGEXP.test(url);
}
