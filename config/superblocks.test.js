"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const i18n_1 = require("./i18n");
const superblocks_1 = require("./superblocks");
describe('superBlockOrder', () => {
    it('should contain all SuperBlocks', () => {
        const allSuperBlocks = Object.values(superblocks_1.SuperBlocks);
        const superBlockOrderValues = Object.values(superblocks_1.superBlockOrder).flat();
        expect(superBlockOrderValues).toHaveLength(allSuperBlocks.length);
        expect(superBlockOrderValues).toEqual(expect.arrayContaining(allSuperBlocks));
    });
});
describe('createSuperBlockMap', () => {
    it('should return an object with New and Upcoming when { showNewCurriculum: true, showUpcomingChanges: true }', () => {
        const result = (0, superblocks_1.createSuperBlockMap)({
            showNewCurriculum: true,
            showUpcomingChanges: true
        });
        expect(result[superblocks_1.SuperBlockStages.New]).toHaveLength(superblocks_1.superBlockOrder[superblocks_1.SuperBlockStages.New].length);
        expect(result[superblocks_1.SuperBlockStages.Upcoming]).toHaveLength(superblocks_1.superBlockOrder[superblocks_1.SuperBlockStages.Upcoming].length);
    });
    it('should return an object without New and Upcoming when { showNewCurriculum: false, showUpcomingChanges: false }', () => {
        const result = (0, superblocks_1.createSuperBlockMap)({
            showNewCurriculum: false,
            showUpcomingChanges: false
        });
        expect(result[superblocks_1.SuperBlockStages.New]).toHaveLength(0);
        expect(result[superblocks_1.SuperBlockStages.Upcoming]).toHaveLength(0);
    });
});
describe('createFlatSuperBlockMap', () => {
    it('should return an array of SuperBlocks object with New and Upcoming when { showNewCurriculum: true, showUpcomingChanges: true }', () => {
        const result = (0, superblocks_1.createFlatSuperBlockMap)({
            showNewCurriculum: true,
            showUpcomingChanges: true
        });
        expect(result).toHaveLength(Object.values(superblocks_1.superBlockOrder).flat().length);
    });
    it('should return an array of SuperBlocks without New and Upcoming when { showNewCurriculum: false, showUpcomingChanges: false }', () => {
        const result = (0, superblocks_1.createFlatSuperBlockMap)({
            showNewCurriculum: false,
            showUpcomingChanges: false
        });
        const tempSuperBlockMap = { ...superblocks_1.superBlockOrder };
        tempSuperBlockMap[superblocks_1.SuperBlockStages.New] = [];
        tempSuperBlockMap[superblocks_1.SuperBlockStages.Upcoming] = [];
        expect(result).toHaveLength(Object.values(tempSuperBlockMap).flat().length);
    });
});
describe('firstNotAuditedSuperBlock', () => {
    it("should return 'null' when language is 'english'", () => {
        const result = (0, superblocks_1.getFirstNotAuditedSuperBlock)({
            language: i18n_1.Languages.English,
            showNewCurriculum: false,
            showUpcomingChanges: false
        });
        expect(result).toBeNull();
    });
    it("should return a SuperBlock when language is 'chinese'", () => {
        const result = (0, superblocks_1.getFirstNotAuditedSuperBlock)({
            language: i18n_1.Languages.Chinese,
            showNewCurriculum: false,
            showUpcomingChanges: false
        });
        expect(result).toEqual(superblocks_1.SuperBlocks.CollegeAlgebraPy);
    });
});
describe('Immutability of superBlockOrder, notAuditedSuperBlocks, and flatSuperBlockMap', () => {
    it('should not allow modification of superBlockOrder', () => {
        expect(() => {
            superblocks_1.superBlockOrder[superblocks_1.SuperBlockStages.FrontEnd] = [];
        }).toThrowError(TypeError);
    });
    it('should not allow modification of notAuditedSuperBlocks', () => {
        expect(() => {
            superblocks_1.notAuditedSuperBlocks[i18n_1.Languages.English] = [];
        }).toThrowError(TypeError);
    });
    it('should not allow modification of flatSuperBlockMap', () => {
        expect(() => {
            superblocks_1.notAuditedSuperBlocks[i18n_1.Languages.English] = [];
        }).toThrowError(TypeError);
    });
});
describe('getAuditedSuperBlocks', () => {
    Object.keys(superblocks_1.notAuditedSuperBlocks).forEach(language => {
        it(`should return only audited SuperBlocks for ${language}`, () => {
            const auditedSuperBlocks = (0, superblocks_1.getAuditedSuperBlocks)({
                showNewCurriculum: true,
                showUpcomingChanges: true,
                language
            });
            auditedSuperBlocks.forEach(superblock => {
                expect(superblocks_1.notAuditedSuperBlocks[language]).not.toContain(superblock);
            });
        });
    });
});
