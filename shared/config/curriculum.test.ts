import { describe, it, expect } from 'vitest';
import { Languages } from './i18n';
import {
  SuperBlocks,
  SuperBlockStage,
  superBlockStages,
  notAuditedSuperBlocks,
  generateSuperBlockList,
  getAuditedSuperBlocks,
  getSuperBlockLangCode
} from './curriculum';

describe('superBlockOrder', () => {
  it('should contain all SuperBlocks', () => {
    const allSuperBlocks = Object.values(SuperBlocks);
    const superBlockOrderValues = Object.values(superBlockStages).flat();
    expect(superBlockOrderValues).toHaveLength(allSuperBlocks.length);
    expect(superBlockOrderValues).toEqual(
      expect.arrayContaining(allSuperBlocks)
    );
  });
});

describe('generateSuperBlockList', () => {
  it('should return an array of SuperBlocks object with all elements when if all configs are true', () => {
    const result = generateSuperBlockList({
      showUpcomingChanges: true
    });
    expect(result).toHaveLength(Object.values(superBlockStages).flat().length);
  });

  it('should return an array of SuperBlocks without Upcoming when { showUpcomingChanges: false }', () => {
    const result = generateSuperBlockList({
      showUpcomingChanges: false
    });
    const tempSuperBlockMap = { ...superBlockStages };
    tempSuperBlockMap[SuperBlockStage.Upcoming] = [];
    tempSuperBlockMap[SuperBlockStage.Catalog] = [];
    expect(result).toHaveLength(Object.values(tempSuperBlockMap).flat().length);
  });
});

describe('Immutability of superBlockOrder, notAuditedSuperBlocks, and flatSuperBlockMap', () => {
  it('should not allow modification of superBlockOrder', () => {
    expect(() => {
      superBlockStages[SuperBlockStage.Core] = [];
    }).toThrow(TypeError);
  });

  it('should not allow modification of notAuditedSuperBlocks', () => {
    expect(() => {
      notAuditedSuperBlocks[Languages.English] = [];
    }).toThrow(TypeError);
  });

  it('should not allow modification of flatSuperBlockMap', () => {
    expect(() => {
      notAuditedSuperBlocks[Languages.English] = [];
    }).toThrow(TypeError);
  });
});

describe('getAuditedSuperBlocks', () => {
  Object.keys(notAuditedSuperBlocks).forEach(language => {
    it(`should return only audited SuperBlocks for ${language}`, () => {
      const auditedSuperBlocks = getAuditedSuperBlocks({
        language
      });

      auditedSuperBlocks.forEach(superblock => {
        expect(notAuditedSuperBlocks[language as Languages]).not.toContain(
          superblock
        );
      });
    });
  });
});

describe('getSuperBlockLangCode', () => {
  it('should return correct language codes for language superblocks', () => {
    expect(getSuperBlockLangCode(SuperBlocks.A1Spanish)).toBe('es');
    expect(getSuperBlockLangCode(SuperBlocks.A2Spanish)).toBe('es');
    expect(getSuperBlockLangCode(SuperBlocks.A1Chinese)).toBe('zh-CN');
    expect(getSuperBlockLangCode(SuperBlocks.A2Chinese)).toBe('zh-CN');
    expect(getSuperBlockLangCode(SuperBlocks.A2English)).toBe('en-US');
    expect(getSuperBlockLangCode(SuperBlocks.B1English)).toBe('en-US');
  });

  it('should return undefined for non-language superblocks', () => {
    expect(getSuperBlockLangCode(SuperBlocks.JsAlgoDataStruct)).toBeUndefined();
    expect(getSuperBlockLangCode(SuperBlocks.RespWebDesignNew)).toBeUndefined();
    expect(
      getSuperBlockLangCode(SuperBlocks.FoundationalCSharp)
    ).toBeUndefined();
  });
});
