import { join } from 'path';
import { describe, it, expect, vi } from 'vitest';
import { getBlockStructure } from '../../../curriculum/src/file-handler.js';
import { getMetaData } from './project-metadata.js';

vi.mock('../../../curriculum/src/file-handler');

const commonPath = join('curriculum', 'challenges', 'blocks');
const block = 'block-name';

describe('project-metadata helper', () => {
  describe('getMetaData helper', () => {
    it('should call getBlockStructure with the correct path', () => {
      process.env.CALLING_DIR = join(commonPath, block);
      getMetaData();
      expect(getBlockStructure).toHaveBeenCalledWith(block);
    });
  });
});
