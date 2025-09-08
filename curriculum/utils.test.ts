import path from 'path';
import { config } from 'dotenv';
import { describe, it, expect } from 'vitest';

import { SuperBlocks } from '../shared/config/curriculum';
import {
  closestFilters,
  closestMatch,
  createSuperOrder,
  filterByBlock,
  filterByChallengeId,
  filterBySuperblock,
  getSuperOrder
} from './utils';

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

  it('throws when not given an array of SuperBlocks', () => {
    expect.assertions(4);
    expect(() => getSuperOrder()).toThrow();
    expect(() => getSuperOrder(null)).toThrow();
    expect(() => getSuperOrder('')).toThrow();
    expect(() => getSuperOrder(['respansive-wib-desoin'])).toThrow();
  });
});

describe('getSuperOrder', () => {
  it('returns a number for valid curriculum', () => {
    expect.assertions(1);
    expect(typeof getSuperOrder('responsive-web-design')).toBe('number');
  });

  it('throws for unknown curriculum', () => {
    expect.assertions(4);
    expect(() => getSuperOrder()).toThrow();
    expect(() => getSuperOrder(null)).toThrow();
    expect(() => getSuperOrder('')).toThrow();
    expect(() => getSuperOrder('respansive-wib-desoin')).toThrow();
  });

  it('throws for "certifications"', () => {
    expect.assertions(1);
    expect(() => getSuperOrder('certifications')).toThrow();
  });

  it.skip('returns unique numbers for all current curriculum', () => {
    if (process.env.SHOW_UPCOMING_CHANGES !== 'true') {
      expect.assertions(17);
    } else {
      expect.assertions(19);
    }

    expect(getSuperOrder(SuperBlocks.RespWebDesignNew)).toBe(0);
    expect(getSuperOrder(SuperBlocks.JsAlgoDataStructNew)).toBe(1);
    expect(getSuperOrder(SuperBlocks.FrontEndDevLibs)).toBe(2);
    expect(getSuperOrder(SuperBlocks.DataVis)).toBe(3);
    expect(getSuperOrder(SuperBlocks.RelationalDb)).toBe(4);
    expect(getSuperOrder(SuperBlocks.BackEndDevApis)).toBe(5);
    expect(getSuperOrder(SuperBlocks.QualityAssurance)).toBe(6);
    expect(getSuperOrder(SuperBlocks.SciCompPy)).toBe(7);
    expect(getSuperOrder(SuperBlocks.DataAnalysisPy)).toBe(8);
    expect(getSuperOrder(SuperBlocks.InfoSec)).toBe(9);
    expect(getSuperOrder(SuperBlocks.MachineLearningPy)).toBe(10);
    expect(getSuperOrder(SuperBlocks.CollegeAlgebraPy)).toBe(11);
    expect(getSuperOrder(SuperBlocks.FoundationalCSharp)).toBe(12);
    expect(getSuperOrder(SuperBlocks.CodingInterviewPrep)).toBe(13);
    expect(getSuperOrder(SuperBlocks.ProjectEuler)).toBe(14);
    expect(getSuperOrder(SuperBlocks.RespWebDesign)).toBe(15);
    expect(getSuperOrder(SuperBlocks.JsAlgoDataStruct)).toBe(16);

    if (process.env.SHOW_UPCOMING_CHANGES === 'true') {
      expect(getSuperOrder(SuperBlocks.TheOdinProject)).toBe(17);
      expect(getSuperOrder(SuperBlocks.FullStackDeveloper)).toBe(18);
    }
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
            { dashedName: 'basic-html-and-html5' },
            { dashedName: 'css-flexbox' }
          ]
        },
        {
          name: 'javascript-algorithms-and-data-structures',
          blocks: [{ dashedName: 'basic-javascript' }, { dashedName: 'es6' }]
        }
      ];

      expect(
        closestFilters({ superBlock: 'responsiv web design' }, superblocks)
      ).toEqual({ superBlock: 'responsive-web-design' });
    });

    it('returns the closest matching block filter', () => {
      const superblocks = [
        {
          name: 'responsive-web-design',
          blocks: [
            { dashedName: 'basic-html-and-html5' },
            { dashedName: 'css-flexbox' }
          ]
        },
        {
          name: 'javascript-algorithms-and-data-structures',
          blocks: [{ dashedName: 'basic-javascript' }, { dashedName: 'es6' }]
        }
      ];

      expect(closestFilters({ block: 'basic-javascr' }, superblocks)).toEqual({
        block: 'basic-javascript'
      });
    });
  });
});
