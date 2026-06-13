import { describe, it, expect } from 'vitest';
import { pathAfterSignout } from './index';

describe('pathAfterSignout', () => {
  it('redirects /settings to /learn', () => {
    expect(pathAfterSignout('/settings')).toBe('/learn');
  });

  it('redirects /settings/ to /learn', () => {
    expect(pathAfterSignout('/settings/')).toBe('/learn');
  });

  it('redirects /update-email to /learn', () => {
    expect(pathAfterSignout('/update-email')).toBe('/learn');
  });

  it('does not change unrelated paths', () => {
    expect(pathAfterSignout('/learn')).toBe('/learn');
    expect(pathAfterSignout('/some/other/path')).toBe('/some/other/path');
  });
});
