/* eslint-disable turbo/no-undeclared-env-vars */
import { describe, it, expect } from 'vitest';
import { getProjectName, getProjectPath } from './get-project-info.js';

describe('getProjectPath helper', () => {
  it('should return the calling dir path', () => {
    const mockCallingDir = 'calling/dir';
    const expected = `${mockCallingDir}/`;

    // Add mock to test condition
    process.env.INIT_CWD = mockCallingDir;

    expect(getProjectPath()).toEqual(expected);

    // Remove mock to not affect other tests
    delete process.env.INIT_CWD;
  });

  it('should return the projects absolute path', () => {
    const expected = `${process.cwd()}/`;

    expect(getProjectPath()).toEqual(expected);
  });
});

describe('getProjectName helper', () => {
  it('should return the last path segment of the calling dir', () => {
    const mockCallingDir = 'calling/dir';
    const expected = 'dir';

    // Add mock to test condition
    process.env.INIT_CWD = mockCallingDir;

    expect(getProjectName()).toEqual(expected);

    // Remove mock to not affect other tests
    delete process.env.INIT_CWD;
  });
});
