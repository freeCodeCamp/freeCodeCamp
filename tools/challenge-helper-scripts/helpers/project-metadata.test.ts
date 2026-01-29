import { join } from 'path';
import { describe, it, expect, vi } from 'vitest';
import { getBlockStructure } from '@freecodecamp/curriculum/file-handler';
import { getMetaData } from './project-metadata.js';

vi.mock('@freecodecamp/curriculum/file-handler');

const commonPath = join('curriculum', 'challenges', 'blocks');
const block = 'block-name';

describe('project-metadata helper', () => {
  describe('getMetaData helper', () => {
    it('should call getBlockStructure with the correct path', () => {
      process.env.INIT_CWD = join(commonPath, block);
      getMetaData();
      expect(getBlockStructure).toHaveBeenCalledWith(block);
    });
  });
});
