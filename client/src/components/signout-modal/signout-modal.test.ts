import { describe, it, expect } from 'vitest';

import { pathAfterSignout } from '.';

describe('pathAfterSignout', () => {
  it('should default to the supplied path', () => {
    const unexceptionalPath = 'a/normal/path/';
    expect(pathAfterSignout(unexceptionalPath)).toBe(unexceptionalPath);
  });

  it('should redirect paths that automatically sign in back to /learn', () => {
    const pathsThatAttemptToSignIn = ['/settings', '/update-email'];
    const newPaths = pathsThatAttemptToSignIn.map(pathAfterSignout);

    expect(newPaths).toEqual(['/learn', '/learn']);
  });

  it('should redirect paths with trailing slashes', () => {
    const pathsThatAttemptToSignIn = ['/settings/', '/update-email/'];
    const newPaths = pathsThatAttemptToSignIn.map(pathAfterSignout);

    expect(newPaths).toEqual(['/learn', '/learn']);
  });

  it('should only redirect exact matches', () => {
    const similarPaths = ['/settingss', '/update-emails/', '/settings/2'];
    const newPaths = similarPaths.map(pathAfterSignout);

    expect(newPaths).toEqual(similarPaths);
  });
});
