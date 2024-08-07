import fs from 'fs/promises';
import path from 'path';
import { SuperBlocks } from '../../shared/config/curriculum';
import { getSuperBlockSubPath } from './fs-utils';

describe('getSuperBlockSubPath', () => {
  it('should return sub-paths that exist', async () => {
    const subPaths = Object.values(SuperBlocks).map(getSuperBlockSubPath);
    const paths = subPaths.map(sub =>
      path.resolve(__dirname, '../../curriculum/challenges/english', sub)
    );

    await Promise.all(paths.map(path => fs.access(path)));
  });
});
