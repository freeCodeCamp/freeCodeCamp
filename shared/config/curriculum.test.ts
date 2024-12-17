import { Languages } from './i18n';
import {
  SuperBlocks,
  SuperBlockStage,
  superBlockStages,
  notAuditedSuperBlocks,
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
      showNewCurriculum: true,
      showUpcomingChanges: true,
      showNextCurriculum: true
    });
    expect(result).toHaveLength(Object.values(superBlockStages).flat().length);
  });

  it('should return an array of SuperBlocks without New and Upcoming when { showNewCurriculum: false, showUpcomingChanges: false }', () => {
    const result = generateSuperBlockList({
      showNewCurriculum: false,
      showUpcomingChanges: false,
      showNextCurriculum: true
    });
    const tempSuperBlockMap = { ...superBlockStages };
    tempSuperBlockMap[SuperBlockStage.New] = [];
    tempSuperBlockMap[SuperBlockStage.Upcoming] = [];
    expect(result).toHaveLength(Object.values(tempSuperBlockMap).flat().length);
  });

  it('should exclude the Next SuperBlocks when { showNextCurriculum: false }', () => {
    const result = generateSuperBlockList({
      showNewCurriculum: false,
      showUpcomingChanges: false,
      showNextCurriculum: false
    });
    const tempSuperBlockMap = { ...superBlockStages };
    tempSuperBlockMap[SuperBlockStage.New] = [];
    tempSuperBlockMap[SuperBlockStage.Upcoming] = [];
    tempSuperBlockMap[SuperBlockStage.Next] = [];
    expect(result).toHaveLength(Object.values(tempSuperBlockMap).flat().length);
  });
});

describe('Immutability of superBlockOrder, notAuditedSuperBlocks, and flatSuperBlockMap', () => {
  it('should not allow modification of superBlockOrder', () => {
    expect(() => {
      superBlockStages[SuperBlockStage.Core] = [];
    }).toThrowError(TypeError);
  });

  it('should not allow modification of notAuditedSuperBlocks', () => {
    expect(() => {
      notAuditedSuperBlocks[Languages.English] = [];
    }).toThrowError(TypeError);
  });

  it('should not allow modification of flatSuperBlockMap', () => {
    expect(() => {
      notAuditedSuperBlocks[Languages.English] = [];
    }).toThrowError(TypeError);
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
