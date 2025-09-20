import path from 'path';
import { config } from 'dotenv';
import { describe, it, expect } from 'vitest';

import { SuperBlocks } from '../../shared-dist/config/curriculum';
import {
  closestFilters,
  closestMatch,
  createSuperOrder,
  filterByBlock,
  filterByChallengeId,
  filterBySuperblock,
  getSuperOrder
} from './utils.js';

config({ path: path.resolve(__dirname, '../.env') });

const mockSuperBlocks = [
  SuperBlocks.RespWebDesignNew,
  SuperBlocks.JsAlgoDataStructNew,
  SuperBlocks.FrontEndDevLibs,
  SuperBlocks.DataVis,
  SuperBlocks.RelationalDb,
  SuperBlocks.BackEndDevApis,
  SuperBlocks.QualityAssurance,
  SuperBlocks.SciCompPy,
  SuperBlocks.DataAnalysisPy,
  SuperBlocks.InfoSec,
  SuperBlocks.MachineLearningPy,
  SuperBlocks.CollegeAlgebraPy,
  SuperBlocks.FoundationalCSharp,
  SuperBlocks.CodingInterviewPrep,
  SuperBlocks.ProjectEuler,
  SuperBlocks.RespWebDesign,
  SuperBlocks.JsAlgoDataStruct,
  SuperBlocks.TheOdinProject,
  SuperBlocks.FullStackDeveloper
];

const fullSuperOrder = {
  [SuperBlocks.RespWebDesignNew]: 0,
  [SuperBlocks.JsAlgoDataStructNew]: 1,
  [SuperBlocks.FrontEndDevLibs]: 2,
  [SuperBlocks.DataVis]: 3,
  [SuperBlocks.RelationalDb]: 4,
  [SuperBlocks.BackEndDevApis]: 5,
  [SuperBlocks.QualityAssurance]: 6,
  [SuperBlocks.SciCompPy]: 7,
  [SuperBlocks.DataAnalysisPy]: 8,
  [SuperBlocks.InfoSec]: 9,
  [SuperBlocks.MachineLearningPy]: 10,
  [SuperBlocks.CollegeAlgebraPy]: 11,
  [SuperBlocks.FoundationalCSharp]: 12,
  [SuperBlocks.CodingInterviewPrep]: 13,
  [SuperBlocks.ProjectEuler]: 14,
  [SuperBlocks.RespWebDesign]: 15,
  [SuperBlocks.JsAlgoDataStruct]: 16,
  [SuperBlocks.TheOdinProject]: 17,
  [SuperBlocks.FullStackDeveloper]: 18
};

describe('createSuperOrder', () => {
  const superOrder = createSuperOrder(mockSuperBlocks);

  it('should create the correct object given an array of SuperBlocks', () => {
    expect(superOrder).toStrictEqual(fullSuperOrder);
  });
});

describe('getSuperOrder', () => {
  it('returns a number for valid curriculum', () => {
    expect(typeof getSuperOrder('responsive-web-design')).toBe('number');
  });

  it('returns undefined for unknown curriculum', () => {
    expect(getSuperOrder('')).toBeUndefined();
    expect(getSuperOrder('respansive-wib-desoin')).toBeUndefined();
    expect(getSuperOrder('certifications')).toBeUndefined();
  });

  it('returns numbers for all current curriculum', () => {
    const superBlocks = Object.values(SuperBlocks);

    const superOrderValues = superBlocks.map(sb => getSuperOrder(sb, true));
    const definedValues = superOrderValues.filter(v => typeof v === 'number');

    expect(definedValues.length).toBe(superBlocks.length);
  });

  it('returns unique numbers for all current curriculum', () => {
    const superBlocks = Object.values(SuperBlocks);

    const superOrderValues = superBlocks.map(sb => getSuperOrder(sb, true));
    const uniqueValues = Array.from(new Set(superOrderValues));

    expect(uniqueValues.length).toBe(superBlocks.length);
  });
});

describe('filter utils', () => {
  describe('filterByChallengeId', () => {
    it('returns the same superblocks if no challengeId is provided', () => {
      const superblocks = [
        {
          name: 'superblock-1',
          blocks: [{ dashedName: 'block-1', challengeOrder: [{ id: '1' }] }]
        },
        {
          name: 'superblock-2',
          blocks: [{ dashedName: 'block-2', challengeOrder: [{ id: '2' }] }]
        }
      ];
      expect(filterByChallengeId(superblocks)).toEqual(superblocks);
    });

    it('ignores blocks without the specified challengeId', () => {
      const superblocks = [
        {
          name: 'superblock-1',
          blocks: [
            { dashedName: 'block-1', challengeOrder: [{ id: '1' }] },
            { dashedName: 'block-2', challengeOrder: [{ id: '2' }] }
          ]
        }
      ];
      const filtered = filterByChallengeId(superblocks, { challengeId: '2' });
      expect(filtered).toEqual([
        {
          name: 'superblock-1',
          blocks: [{ dashedName: 'block-2', challengeOrder: [{ id: '2' }] }]
        }
      ]);
    });

    it('returns only the specified challenge and its solution challenge', () => {
      const superblocks = [
        {
          name: 'superblock-1',
          blocks: [
            {
              dashedName: 'block-1',
              challengeOrder: [{ id: '1' }, { id: '2' }, { id: '3' }]
            },
            { dashedName: 'block-2', challengeOrder: [{ id: '4' }] }
          ]
        }
      ];
      const filtered = filterByChallengeId(superblocks, { challengeId: '1' });
      expect(filtered).toEqual([
        {
          name: 'superblock-1',
          blocks: [
            {
              dashedName: 'block-1',
              challengeOrder: [{ id: '1' }, { id: '2' }]
            }
          ]
        }
      ]);
    });

    it('returns only superblocks containing the specified challenge', () => {
      const superblocks = [
        {
          name: 'superblock-1',
          blocks: [
            { dashedName: 'block-1', challengeOrder: [{ id: '1' }] },
            { dashedName: 'block-2', challengeOrder: [{ id: '2' }] }
          ]
        },
        {
          name: 'superblock-2',
          blocks: [{ dashedName: 'block-3', challengeOrder: [{ id: '3' }] }]
        }
      ];
      const filtered = filterByChallengeId(superblocks, { challengeId: '2' });
      expect(filtered).toEqual([
        {
          name: 'superblock-1',
          blocks: [{ dashedName: 'block-2', challengeOrder: [{ id: '2' }] }]
        }
      ]);
    });
  });

  describe('filterByBlock', () => {
    it('returns the same superblocks if no block is provided', () => {
      const superblocks = [
        {
          name: 'superblock-1',
          blocks: [{ dashedName: 'block-1' }, { dashedName: 'block-2' }]
        }
      ];
      expect(filterByBlock(superblocks)).toEqual(superblocks);
    });

    it('returns only the specified block', () => {
      const superblocks = [
        {
          name: 'superblock-1',
          blocks: [{ dashedName: 'block-1' }, { dashedName: 'block-2' }]
        }
      ];
      const filtered = filterByBlock(superblocks, { block: 'block-1' });
      expect(filtered).toEqual([
        {
          name: 'superblock-1',
          blocks: [{ dashedName: 'block-1' }]
        }
      ]);
    });

    it('returns an empty array if no blocks match the specified block', () => {
      const superblocks = [
        {
          name: 'superblock-1',
          blocks: [{ dashedName: 'block-1' }, { dashedName: 'block-2' }]
        }
      ];
      const filtered = filterByBlock(superblocks, {
        block: 'nonexistent-block'
      });
      expect(filtered).toEqual([]);
    });
  });

  describe('filterBySuperblock', () => {
    it('returns the same superblocks if no superBlock is provided', () => {
      const superblocks = [
        {
          name: 'superblock-1',
          blocks: [{ dashedName: 'block-1' }, { dashedName: 'block-2' }]
        }
      ];
      expect(filterBySuperblock(superblocks)).toEqual(superblocks);
    });

    it('returns only the specified superblock', () => {
      const superblocks = [
        {
          name: 'superblock-1',
          blocks: [{ dashedName: 'block-1' }, { dashedName: 'block-2' }]
        },
        {
          name: 'superblock-2',
          blocks: [{ dashedName: 'block-3' }]
        }
      ];
      const filtered = filterBySuperblock(superblocks, {
        superBlock: 'superblock-1'
      });
      expect(filtered).toEqual([
        {
          name: 'superblock-1',
          blocks: [{ dashedName: 'block-1' }, { dashedName: 'block-2' }]
        }
      ]);
    });
  });

  describe('closestMatch', () => {
    it('returns the closest matching element', () => {
      const items = [
        'responsive-web-design',
        'javascript-algorithms-and-data-structures',
        'front-end-development-libraries',
        'data-visualization'
      ];
      const input = 'responsiv web design';
      const closest = 'responsive-web-design';
      expect(closestMatch(input, items)).toBe(closest);
    });

    it('ignores case when finding the closest match', () => {
      const items = [
        'responsive-web-design',
        'ReSPonSivE-WeB-DeSiGne',
        'javascript-algorithms-and-data-structures',
        'front-end-development-libraries',
        'data-visualization'
      ];
      const input = 'ReSPonSiv WeB DeSiGn';
      const closest = 'responsive-web-design';
      expect(closestMatch(input, items)).toBe(closest);
    });
  });

  describe('closestFilters', () => {
    it('returns the closest matching superblock filter', () => {
      const superblocks = [
        {
          name: 'responsive-web-design',
          blocks: [
            { dashedName: 'basic-html-and-html5', challengeOrder: [] },
            { dashedName: 'css-flexbox', challengeOrder: [] }
          ]
        },
        {
          name: 'javascript-algorithms-and-data-structures',
          blocks: [
            { dashedName: 'basic-javascript', challengeOrder: [] },
            { dashedName: 'es6', challengeOrder: [] }
          ]
        }
      ];

      expect(
        closestFilters(superblocks, { superBlock: 'responsiv web design' })
      ).toEqual({ superBlock: 'responsive-web-design' });
    });

    it('returns the closest matching block filter', () => {
      const superblocks = [
        {
          name: 'responsive-web-design',
          blocks: [
            { dashedName: 'basic-html-and-html5', challengeOrder: [] },
            { dashedName: 'css-flexbox', challengeOrder: [] }
          ]
        },
        {
          name: 'javascript-algorithms-and-data-structures',
          blocks: [
            { dashedName: 'basic-javascript', challengeOrder: [] },
            { dashedName: 'es6', challengeOrder: [] }
          ]
        }
      ];

      expect(closestFilters(superblocks, { block: 'basic-javascr' })).toEqual({
        block: 'basic-javascript'
      });
    });
  });
});
