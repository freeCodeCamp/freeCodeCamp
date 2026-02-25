"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const i18n_1 = require("./i18n");
const curriculum_1 = require("./curriculum");
(0, vitest_1.describe)('superBlockOrder', () => {
    (0, vitest_1.it)('should contain all SuperBlocks', () => {
        const allSuperBlocks = Object.values(curriculum_1.SuperBlocks);
        const superBlockOrderValues = Object.values(curriculum_1.superBlockStages).flat();
        (0, vitest_1.expect)(superBlockOrderValues).toHaveLength(allSuperBlocks.length);
        (0, vitest_1.expect)(superBlockOrderValues).toEqual(vitest_1.expect.arrayContaining(allSuperBlocks));
    });
});
(0, vitest_1.describe)('generateSuperBlockList', () => {
    (0, vitest_1.it)('should return an array of SuperBlocks object with all elements when if all configs are true', () => {
        const result = (0, curriculum_1.generateSuperBlockList)({
            showUpcomingChanges: true
        });
        (0, vitest_1.expect)(result).toHaveLength(Object.values(curriculum_1.superBlockStages).flat().length);
    });
    (0, vitest_1.it)('should return an array of SuperBlocks without Upcoming when { showUpcomingChanges: false }', () => {
        const result = (0, curriculum_1.generateSuperBlockList)({
            showUpcomingChanges: false
        });
        const tempSuperBlockMap = { ...curriculum_1.superBlockStages };
        tempSuperBlockMap[curriculum_1.SuperBlockStage.Upcoming] = [];
        tempSuperBlockMap[curriculum_1.SuperBlockStage.Catalog] = [];
        (0, vitest_1.expect)(result).toHaveLength(Object.values(tempSuperBlockMap).flat().length);
    });
});
(0, vitest_1.describe)('Immutability of superBlockOrder, notAuditedSuperBlocks, and flatSuperBlockMap', () => {
    (0, vitest_1.it)('should not allow modification of superBlockOrder', () => {
        (0, vitest_1.expect)(() => {
            curriculum_1.superBlockStages[curriculum_1.SuperBlockStage.Core] = [];
        }).toThrow(TypeError);
    });
    (0, vitest_1.it)('should not allow modification of notAuditedSuperBlocks', () => {
        (0, vitest_1.expect)(() => {
            curriculum_1.notAuditedSuperBlocks[i18n_1.Languages.English] = [];
        }).toThrow(TypeError);
    });
    (0, vitest_1.it)('should not allow modification of flatSuperBlockMap', () => {
        (0, vitest_1.expect)(() => {
            curriculum_1.notAuditedSuperBlocks[i18n_1.Languages.English] = [];
        }).toThrow(TypeError);
    });
});
(0, vitest_1.describe)('getAuditedSuperBlocks', () => {
    Object.keys(curriculum_1.notAuditedSuperBlocks).forEach(language => {
        (0, vitest_1.it)(`should return only audited SuperBlocks for ${language}`, () => {
            const auditedSuperBlocks = (0, curriculum_1.getAuditedSuperBlocks)({
                language
            });
            auditedSuperBlocks.forEach(superblock => {
                (0, vitest_1.expect)(curriculum_1.notAuditedSuperBlocks[language]).not.toContain(superblock);
            });
        });
    });
});
