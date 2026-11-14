import { resolve } from 'path';

import { describe, it, expect } from 'vitest';

import { parseMDSync } from '.';

describe('parseMDSync', () => {
  it('should parse a file without imports', () => {
    const parsed = parseMDSync(resolve(__dirname, '__fixtures__/simple.md'));
    expect(parsed).toBeDefined();
  });

  it('should throw a clear error for files that use ::import', () => {
    const fixture = resolve(__dirname, '__fixtures__/with-imports.md');
    expect(() => parseMDSync(fixture)).toThrow(
      `::import is not supported by parseMDSync, use parseMD instead in file ${fixture}`
    );
  });
});
