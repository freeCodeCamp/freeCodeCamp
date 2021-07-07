const { getProjectMetaPath } = require('./get-project-meta-path');

describe('getProjectMetaPath helper', () => {
  it('should throw if args are invalid', () => {
    expect(() => {
      getProjectMetaPath();
    }).toThrow();

    expect(() => {
      getProjectMetaPath('test-curriculum', {});
    }).toThrow();

    expect(() => {
      getProjectMetaPath([], []);
    }).toThrow();

    expect(() => {
      getProjectMetaPath('', '');
    }).toThrow();
  });

  it('should return the meta path', () => {
    const curriculum = 'test-curriculum';
    const project = 'test-project';
    const expected = `${process.cwd()}/${curriculum}/challenges/_meta/${project}/meta.json`;
    const expectedB = `${process.cwd()}/challenges/_meta/${project}/meta.json`;

    expect(getProjectMetaPath(curriculum, project)).toEqual(expected);
    expect(getProjectMetaPath('', project)).toEqual(expectedB);
  });
});
