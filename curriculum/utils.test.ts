// utils are not typed (yet), so we have to disable some checks
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import fs from 'fs';
import path from 'path';
import { config } from 'dotenv';
import { SuperBlocks } from '../config/certification-settings';
import { createSuperOrder, getSuperOrder, getSuperBlockFromDir } from './utils';

config({ path: path.resolve(__dirname, '../.env') });

const englishTest = {
  [SuperBlocks.RespWebDesignNew]: 0,
  [SuperBlocks.JsAlgoDataStruct]: 1,
  [SuperBlocks.FrontEndDevLibs]: 2,
  [SuperBlocks.DataVis]: 3,
  [SuperBlocks.RelationalDb]: 4,
  [SuperBlocks.BackEndDevApis]: 5,
  [SuperBlocks.QualityAssurance]: 6,
  [SuperBlocks.SciCompPy]: 7,
  [SuperBlocks.DataAnalysisPy]: 8,
  [SuperBlocks.InfoSec]: 9,
  [SuperBlocks.MachineLearningPy]: 10,
  [SuperBlocks.CodingInterviewPrep]: 11,
  [SuperBlocks.RespWebDesign]: 12
};

const upcomingTest = {
  [SuperBlocks.RespWebDesignNew]: 0,
  [SuperBlocks.JsAlgoDataStruct]: 1,
  [SuperBlocks.FrontEndDevLibs]: 2,
  [SuperBlocks.DataVis]: 3,
  [SuperBlocks.RelationalDb]: 4,
  [SuperBlocks.BackEndDevApis]: 5,
  [SuperBlocks.QualityAssurance]: 6,
  [SuperBlocks.SciCompPy]: 7,
  [SuperBlocks.DataAnalysisPy]: 8,
  [SuperBlocks.InfoSec]: 9,
  [SuperBlocks.MachineLearningPy]: 10,
  [SuperBlocks.CodingInterviewPrep]: 11,
  [SuperBlocks.JsAlgoDataStructNew]: 12,
  [SuperBlocks.CollegeAlgebraPy]: 13,
  [SuperBlocks.TheOdinProject]: 14,
  [SuperBlocks.RespWebDesign]: 15
};

const espanolTest = {
  [SuperBlocks.RespWebDesignNew]: 0,
  [SuperBlocks.JsAlgoDataStruct]: 1,
  [SuperBlocks.FrontEndDevLibs]: 2,
  [SuperBlocks.DataVis]: 3,
  [SuperBlocks.BackEndDevApis]: 4,
  [SuperBlocks.QualityAssurance]: 5,
  [SuperBlocks.SciCompPy]: 6,
  [SuperBlocks.DataAnalysisPy]: 7,
  [SuperBlocks.RespWebDesign]: 8,
  [SuperBlocks.RelationalDb]: 9,
  [SuperBlocks.InfoSec]: 10,
  [SuperBlocks.MachineLearningPy]: 11,
  [SuperBlocks.CodingInterviewPrep]: 12
};

const chineseTest = {
  [SuperBlocks.RespWebDesignNew]: 0,
  [SuperBlocks.JsAlgoDataStruct]: 1,
  [SuperBlocks.FrontEndDevLibs]: 2,
  [SuperBlocks.DataVis]: 3,
  [SuperBlocks.BackEndDevApis]: 4,
  [SuperBlocks.QualityAssurance]: 5,
  [SuperBlocks.SciCompPy]: 6,
  [SuperBlocks.DataAnalysisPy]: 7,
  [SuperBlocks.InfoSec]: 8,
  [SuperBlocks.MachineLearningPy]: 9,
  [SuperBlocks.RespWebDesign]: 10,
  [SuperBlocks.RelationalDb]: 11,
  [SuperBlocks.CodingInterviewPrep]: 12
};

describe('createSuperOrder', () => {
  const englishSuperOrder = createSuperOrder({
    language: 'english',
    showNewCurriculum: 'false',
    showUpcomingChanges: 'false'
  });

  const upcomingSuperOrder = createSuperOrder({
    language: 'english',
    showNewCurriculum: 'false',
    showUpcomingChanges: 'true'
  });

  const espanolSuperOrder = createSuperOrder({
    language: 'espanol',
    showNewCurriculum: 'false',
    showUpcomingChanges: 'false'
  });

  const chineseSuperOrder = createSuperOrder({
    language: 'chinese',
    showNewCurriculum: 'false',
    showUpcomingChanges: 'false'
  });

  it("should create the correct object for 'english'", () => {
    expect(englishSuperOrder).toStrictEqual(englishTest);
  });

  it('should create the correct object with upcoming changes shown', () => {
    expect(upcomingSuperOrder).toStrictEqual(upcomingTest);
  });

  it("should create the correct object for 'espanol'", () => {
    expect(espanolSuperOrder).toStrictEqual(espanolTest);
  });

  it("should create the correct object for 'chinese'", () => {
    expect(chineseSuperOrder).toStrictEqual(chineseTest);
  });
});

describe('getSuperOrder', () => {
  it('returns a number for valid superblocks', () => {
    expect.assertions(1);
    expect(typeof getSuperOrder('responsive-web-design')).toBe('number');
  });

  it('throws for unknown superblocks', () => {
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

  it('returns unique numbers for all current superblocks', () => {
    // Skip non-english tests
    if (process.env.CURRICULUM_LOCALE !== 'english') {
      return;
    }

    if (process.env.SHOW_UPCOMING_CHANGES !== 'true') {
      expect.assertions(13);
    } else {
      expect.assertions(16);
    }

    expect(getSuperOrder(SuperBlocks.RespWebDesignNew)).toBe(0);
    expect(getSuperOrder(SuperBlocks.JsAlgoDataStruct)).toBe(1);
    expect(getSuperOrder(SuperBlocks.FrontEndDevLibs)).toBe(2);
    expect(getSuperOrder(SuperBlocks.DataVis)).toBe(3);
    expect(getSuperOrder(SuperBlocks.RelationalDb)).toBe(4);
    expect(getSuperOrder(SuperBlocks.BackEndDevApis)).toBe(5);
    expect(getSuperOrder(SuperBlocks.QualityAssurance)).toBe(6);
    expect(getSuperOrder(SuperBlocks.SciCompPy)).toBe(7);
    expect(getSuperOrder(SuperBlocks.DataAnalysisPy)).toBe(8);
    expect(getSuperOrder(SuperBlocks.InfoSec)).toBe(9);
    expect(getSuperOrder(SuperBlocks.MachineLearningPy)).toBe(10);
    expect(getSuperOrder(SuperBlocks.CodingInterviewPrep)).toBe(11);

    if (process.env.SHOW_UPCOMING_CHANGES === 'true') {
      expect(getSuperOrder(SuperBlocks.JsAlgoDataStructNew)).toBe(12);
      expect(getSuperOrder(SuperBlocks.CollegeAlgebraPy)).toBe(13);
      expect(getSuperOrder(SuperBlocks.TheOdinProject)).toBe(14);
      expect(getSuperOrder(SuperBlocks.RespWebDesign)).toBe(15);
    } else {
      expect(getSuperOrder(SuperBlocks.RespWebDesign)).toBe(12);
    }
  });
});

describe('getSuperBlockFromPath', () => {
  const directories = fs.readdirSync(
    path.join(__dirname, './challenges/english')
  );

  it('handles all the directories in ./challenges/english', () => {
    expect.assertions(17);

    for (const directory of directories) {
      expect(() => getSuperBlockFromDir(directory)).not.toThrow();
    }
  });

  it("returns valid superblocks (or 'certifications') for all valid arguments", () => {
    expect.assertions(17);

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
