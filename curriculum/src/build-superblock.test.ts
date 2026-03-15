import { describe, it, expect } from 'vitest';

import { BlockLabel } from '../../shared-dist/config/blocks';
import { transformSuperBlock } from './build-superblock';

describe('transformSuperBlock', () => {
  describe('duplicate block detection', () => {
    it('should throw an error when a block appears multiple times in different modules', () => {
      const superblockData = {
        chapters: [
          {
            dashedName: 'javascript',
            modules: [
              {
                dashedName: 'maps-and-sets',
                blocks: [
                  'lecture-working-with-maps-and-sets',
                  'workshop-plant-nursery-catalog',
                  'lab-voting-system',
                  'review-javascript-maps-and-sets',
                  'quiz-javascript-maps-and-sets'
                ]
              },
              {
                moduleType: BlockLabel.certProject,
                dashedName: 'lab-voting-system',
                blocks: ['lab-voting-system']
              }
            ]
          }
        ]
      };

      expect(() => transformSuperBlock(superblockData)).toThrow(
        /duplicate.*lab-voting-system/i
      );
    });

    it('should not throw an error when all blocks are unique', () => {
      const superblockData = {
        chapters: [
          {
            dashedName: 'javascript',
            modules: [
              {
                dashedName: 'maps-and-sets',
                blocks: [
                  'lecture-working-with-maps-and-sets',
                  'workshop-plant-nursery-catalog',
                  'lab-voting-system',
                  'review-javascript-maps-and-sets',
                  'quiz-javascript-maps-and-sets'
                ]
              },
              {
                moduleType: BlockLabel.certProject,
                dashedName: 'another-project',
                blocks: ['lab-another-project']
              }
            ]
          }
        ]
      };

      expect(() => transformSuperBlock(superblockData)).not.toThrow();
    });

    it('should throw an error when a block appears multiple times in simple blocks array', () => {
      const superblockData = {
        blocks: ['block-1', 'block-2', 'block-1', 'block-3']
      };

      expect(() => transformSuperBlock(superblockData)).toThrow(
        /duplicate.*block-1/i
      );
    });

    it('should throw an error listing all duplicate blocks', () => {
      const superblockData = {
        chapters: [
          {
            dashedName: 'chapter-1',
            modules: [
              {
                dashedName: 'module-1',
                blocks: ['block-a', 'block-b', 'block-c']
              },
              {
                dashedName: 'module-2',
                blocks: ['block-a', 'block-d', 'block-b']
              }
            ]
          }
        ]
      };

      expect(() => transformSuperBlock(superblockData)).toThrow(/block-a/i);
      expect(() => transformSuperBlock(superblockData)).toThrow(/block-b/i);
    });

    it('should exclude comingSoon modules', () => {
      const superblockData = {
        chapters: [
          {
            dashedName: 'chapter-1',
            modules: [
              {
                dashedName: 'module-1',
                blocks: ['block-a']
              },
              {
                dashedName: 'module-2',
                comingSoon: true,
                blocks: ['block-a'] // This is a duplicate but should be excluded
              }
            ]
          }
        ]
      };

      // Should not throw because comingSoon module is always excluded
      expect(() => transformSuperBlock(superblockData)).not.toThrow();
    });

    it('should exclude comingSoon chapters', () => {
      const superblockData = {
        chapters: [
          {
            dashedName: 'chapter-1',
            modules: [
              {
                dashedName: 'module-1',
                blocks: ['block-a']
              }
            ]
          },
          {
            dashedName: 'chapter-2',
            comingSoon: true,
            modules: [
              {
                dashedName: 'module-2',
                blocks: ['block-a'] // This is a duplicate but should be excluded
              }
            ]
          }
        ]
      };

      // Should not throw because comingSoon chapter is always excluded
      expect(() => transformSuperBlock(superblockData)).not.toThrow();
    });
  });
});
