const { getProjectPath } = require('./get-project-path');

describe('getProjectPath helper', () => {
  it('should return the calling dir path', () => {
    const mockCallingDir = 'calling/dir';
    const expected = `${mockCallingDir}/`;

    // Add mock to test condition
    process.env.CALLING_DIR = mockCallingDir;

    expect(getProjectPath()).toEqual(expected);

    // Remove mock to not affect other tests
    delete process.env.CALLING_DIR;
  });

  it('should return the projects absolute path', () => {
    const expected = `${process.cwd()}/`;

    expect(getProjectPath()).toEqual(expected);
  });
});
