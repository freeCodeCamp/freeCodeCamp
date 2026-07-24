import { describe, it, expect } from 'vitest';
import { Languages } from './i18n';
import {
  SuperBlocks,
  SuperBlockStage,
  superBlockStages,
  notAuditedSuperBlocks,
  hiddenSuperBlocks,
  getHiddenSuperBlocks,
  generateSuperBlockList,
  getAuditedSuperBlocks
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

describe('hiddenSuperBlocks', () => {
  it('should not allow modification of hiddenSuperBlocks', () => {
    expect(() => {
      hiddenSuperBlocks[Languages.Espanol] = [];
    }).toThrow(TypeError);
  });

  it('should only contain valid languages and superblocks', () => {
    Object.entries(hiddenSuperBlocks).forEach(([language, superblocks]) => {
      expect(Object.values(Languages)).toContain(language);
      superblocks.forEach(superblock => {
        expect(Object.values(SuperBlocks)).toContain(superblock);
      });
    });
  });
});

describe('getHiddenSuperBlocks', () => {
  it('should return the configured superblocks for a language', () => {
    expect(getHiddenSuperBlocks(Languages.Espanol)).toEqual([
      SuperBlocks.A1Spanish,
      SuperBlocks.A2Spanish
    ]);
  });

  it('should return an empty array for languages with no hidden superblocks', () => {
    expect(getHiddenSuperBlocks(Languages.English)).toEqual([]);
    expect(getHiddenSuperBlocks('not-a-language')).toEqual([]);
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
