import { describe, it, expect } from 'vitest';

import { SuperBlocks } from '../../shared-dist/config/curriculum';
import { createSuperOrder, getSuperOrder } from './super-order.js';

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
