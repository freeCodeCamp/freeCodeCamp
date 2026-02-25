"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const curriculum_1 = require("./curriculum");
const catalog_1 = require("./catalog");
(0, vitest_1.describe)('catalog', () => {
    (0, vitest_1.it)('should have exactly one entry for each superblock in SuperBlockStage.Catalog', () => {
        (0, vitest_1.expect)(catalog_1.catalog.map(course => course.superBlock.toString()).sort()).toEqual(curriculum_1.catalogSuperBlocks.map(sb => sb.toString()).sort());
    });
});
