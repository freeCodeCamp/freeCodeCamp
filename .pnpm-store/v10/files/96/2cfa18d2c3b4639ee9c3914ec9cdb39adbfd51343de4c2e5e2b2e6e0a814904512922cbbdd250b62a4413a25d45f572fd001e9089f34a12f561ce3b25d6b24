/**
 * @license
 * Copyright 2025 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Normalizes HTTP header values by handling multiline values.
 * Multiline header values are joined with commas according to HTTP/1.1 spec.
 *
 * @internal
 */
export function normalizeHeaderValue(header: string): string {
  if (!header.includes('\n')) {
    return header;
  }

  return header
    .split('\n')
    .map(v => {
      return v.trim();
    })
    .filter(Boolean)
    .join(', ');
}
