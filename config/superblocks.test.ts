import { Languages } from './i18n';
import {
  SuperBlocks,
  SuperBlockStages,
  superBlockOrder,
  notAuditedSuperBlocks,
  createSuperBlockMap,
  createFlatSuperBlockMap,
  getAuditedSuperBlocks,
  getFirstNotAuditedSuperBlock
} from './superblocks';

describe('superBlockOrder', () => {
  it('should contain all SuperBlocks', () => {
    const allSuperBlocks = Object.values(SuperBlocks);
    const superBlockOrderValues = Object.values(superBlockOrder).flat();
    expect(superBlockOrderValues).toHaveLength(allSuperBlocks.length);
    expect(superBlockOrderValues).toEqual(
      expect.arrayContaining(allSuperBlocks)
    );
  });
});

describe('createSuperBlockMap', () => {
  it('should return an object with New and Upcoming when { showNewCurriculum: true, showUpcomingChanges: true }', () => {
    const result = createSuperBlockMap({
      showNewCurriculum: true,
      showUpcomingChanges: true
    });
    expect(result[SuperBlockStages.New]).toHaveLength(
      superBlockOrder[SuperBlockStages.New].length
    );
    expect(result[SuperBlockStages.Upcoming]).toHaveLength(
      superBlockOrder[SuperBlockStages.Upcoming].length
    );
  });

  it('should return an object without New and Upcoming when { showNewCurriculum: false, showUpcomingChanges: false }', () => {
    const result = createSuperBlockMap({
      showNewCurriculum: false,
      showUpcomingChanges: false
    });
    expect(result[SuperBlockStages.New]).toHaveLength(0);
    expect(result[SuperBlockStages.Upcoming]).toHaveLength(0);
  });
});

describe('createFlatSuperBlockMap', () => {
  it('should return an array of SuperBlocks object with New and Upcoming when { showNewCurriculum: true, showUpcomingChanges: true }', () => {
    const result = createFlatSuperBlockMap({
      showNewCurriculum: true,
      showUpcomingChanges: true
    });
    expect(result).toHaveLength(Object.values(superBlockOrder).flat().length);
  });

  it('should return an array of SuperBlocks without New and Upcoming when { showNewCurriculum: false, showUpcomingChanges: false }', () => {
    const result = createFlatSuperBlockMap({
      showNewCurriculum: false,
      showUpcomingChanges: false
    });
    const tempSuperBlockMap = { ...superBlockOrder };
    tempSuperBlockMap[SuperBlockStages.New] = [];
    tempSuperBlockMap[SuperBlockStages.Upcoming] = [];
    expect(result).toHaveLength(Object.values(tempSuperBlockMap).flat().length);
  });
});

describe('firstNotAuditedSuperBlock', () => {
  it("should return 'null' when language is 'english'", () => {
    const result = getFirstNotAuditedSuperBlock({
      language: Languages.English,
      showNewCurriculum: false,
      showUpcomingChanges: false
    });
    expect(result).toBeNull();
  });

  it("should return a SuperBlock when language is 'chinese'", () => {
    const result = getFirstNotAuditedSuperBlock({
      language: Languages.Chinese,
      showNewCurriculum: false,
      showUpcomingChanges: false
    });
    expect(result).toEqual(SuperBlocks.CollegeAlgebraPy);
  });
});

describe('Immutability of superBlockOrder, notAuditedSuperBlocks, and flatSuperBlockMap', () => {
  it('should not allow modification of superBlockOrder', () => {
    expect(() => {
      superBlockOrder[SuperBlockStages.FrontEnd] = [];
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
        showNewCurriculum: true,
        showUpcomingChanges: true,
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
