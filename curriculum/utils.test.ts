import fs from 'fs';
import path from 'path';
import { config } from 'dotenv';
import { SuperBlocks } from '../shared/config/curriculum';
import {
  createSuperOrder,
  getSuperOrder,
  getSuperBlockFromDir,
  getChapterFromBlock,
  getModuleFromBlock,
  getBlockOrder
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

const mockSuperBlockStructure = {
  chapters: [
    {
      dashedName: 'html',
      modules: [
        {
          dashedName: 'getting-started-with-freecodecamp',
          blocks: [
            {
              dashedName: 'welcome-to-freecodecamp'
            }
          ]
        }
      ]
    },
    {
      dashedName: 'css',
      modules: [
        {
          dashedName: 'module-one',
          blocks: [
            {
              dashedName: 'block-one-m1'
            },
            {
              dashedName: 'block-two-m1'
            }
          ]
        },
        {
          dashedName: 'module-two',
          blocks: [
            {
              dashedName: 'block-one-m2'
            },
            {
              dashedName: 'block-two-m2'
            }
          ]
        }
      ]
    }
  ]
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

describe('getSuperBlockFromPath', () => {
  const englishFolder = path.join(__dirname, './challenges/english');
  const directories = fs
    .readdirSync(englishFolder)
    .filter(item => fs.lstatSync(path.join(englishFolder, item)).isDirectory());

  it('handles all the directories in ./challenges/english', () => {
    expect.assertions(24);

    for (const directory of directories) {
      expect(() => getSuperBlockFromDir(directory)).not.toThrow();
    }
  });

  it("returns valid superblocks (or 'certifications') for all valid arguments", () => {
    expect.assertions(24);

    const superBlockPaths = directories.filter(x => x !== '00-certifications');

    for (const directory of superBlockPaths) {
      expect(Object.values(SuperBlocks)).toContain(
        getSuperBlockFromDir(directory)
      );
    }
    expect(getSuperBlockFromDir('00-certifications')).toBe('certifications');
  });

  it("returns all valid superblocks (and 'certifications')", () => {
    expect.assertions(1);

    const superBlocks = new Set();
    for (const directory of directories) {
      superBlocks.add(getSuperBlockFromDir(directory));
    }

    // + 1 for 'certifications'
    expect(superBlocks.size).toBe(Object.values(SuperBlocks).length + 1);
  });

  it('throws if a directory is unknown', () => {
    expect.assertions(1);

    expect(() => getSuperBlockFromDir('unknown')).toThrow();
  });
});

describe('getChapterFromBlock', () => {
  it('returns a chapter if it exists', () => {
    expect(
      getChapterFromBlock('welcome-to-freecodecamp', mockSuperBlockStructure)
    ).toEqual('html');
  });

  it('throws if a chapter does not exist', () => {
    expect(() =>
      getChapterFromBlock('welcome-to-freecodecamper', mockSuperBlockStructure)
    ).toThrow(
      'There is no chapter corresponding to block "welcome-to-freecodecamper". It\'s possible that the block is missing in the superblock structure.'
    );
  });
});

describe('getModuleFromBlock', () => {
  it('returns a module if it exists', () => {
    expect(
      getModuleFromBlock('welcome-to-freecodecamp', mockSuperBlockStructure)
    ).toEqual('getting-started-with-freecodecamp');
  });

  it('throws if a module does not exist', () => {
    expect(() =>
      getModuleFromBlock('welcome-to-freecodecamper', mockSuperBlockStructure)
    ).toThrow(
      'There is no module corresponding to block "welcome-to-freecodecamper". It\'s possible that the block is missing in the superblock structure.'
    );
  });
});

describe('getBlockOrder', () => {
  it('returns the correct order when the chapter only contains one module', () => {
    expect(
      getBlockOrder('welcome-to-freecodecamp', mockSuperBlockStructure)
    ).toBe(0);
  });

  it('returns the correct order when the chapter contains multiple modules', () => {
    expect(getBlockOrder('block-one-m2', mockSuperBlockStructure)).toBe(3);
  });

  it('throws if a block does not exist', () => {
    expect(() =>
      getBlockOrder('welcome-to-freecodecamper', mockSuperBlockStructure)
    ).toThrow(
      'The block "welcome-to-freecodecamper" does not appear in the superblock structure.'
    );
  });
});
