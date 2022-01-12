import path from 'path';
import { getProjectMetaPath } from './get-project-meta-path';

describe('getProjectMetaPath helper', () => {
  it('should return the meta path', () => {
    const expected = path.join(
      'curriculum',
      'challenges',
      `_meta/mock-project/meta.json`
    );

    process.env.CALLING_DIR =
      'curriculum/challenges/english/superblock/mock-project';

    expect(getProjectMetaPath()).toEqual(expected);
  });

  afterEach(() => {
    delete process.env.CALLING_DIR;
  });
});
