import path from 'path';
import { getProjectMetaPath } from './get-project-meta-path';

const mockProjectName = 'mock-project';

jest.mock('./get-project-info', () => {
  return {
    getProjectPath: jest.fn(
      () => `curriculum/challenges/english/superblock/${mockProjectName}/`
    ),
    getProjectName: jest.fn(() => mockProjectName)
  };
});

describe('getProjectMetaPath helper', () => {
  it('should throw if args are invalid', () => {
    expect(() => {
      getProjectMetaPath('');
    }).toThrow();
  });

  it('should return the meta path', () => {
    const expected = path.resolve(
      process.cwd(),
      'curriculum',
      'challenges',
      `_meta/${mockProjectName}/meta.json`
    );

    expect(getProjectMetaPath(mockProjectName)).toEqual(expected);
  });
});
