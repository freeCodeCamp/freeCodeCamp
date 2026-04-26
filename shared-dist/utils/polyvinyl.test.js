"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const polyvinyl_1 = require("./polyvinyl");
const polyData = {
    name: 'test',
    ext: 'js',
    contents: 'var hello = world;',
    history: ['test.js']
};
(0, vitest_1.describe)('createSource', () => {
    (0, vitest_1.it)('should return a vinyl object with a source matching the contents', () => {
        const original = (0, polyvinyl_1.createPoly)(polyData);
        const updated = (0, polyvinyl_1.createSource)(original);
        (0, vitest_1.expect)(original).not.toHaveProperty('source');
        (0, vitest_1.expect)(updated).toHaveProperty('source', 'var hello = world;');
        (0, vitest_1.expect)(updated).toMatchObject(original);
    });
    (0, vitest_1.it)('should not update the source if it already exists', () => {
        const original = (0, polyvinyl_1.createPoly)({
            ...polyData,
            source: 'const hello = world;'
        });
        const updated = (0, polyvinyl_1.createSource)(original);
        (0, vitest_1.expect)(updated).toStrictEqual(original);
    });
});
