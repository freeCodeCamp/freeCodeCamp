"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const constants_1 = require("./constants");
(0, vitest_1.describe)('constants', () => {
    (0, vitest_1.describe)('blocklistedUsernames', () => {
        (0, vitest_1.it)('should not contain duplicate values', () => {
            const uniqueValues = new Set(constants_1.blocklistedUsernames);
            (0, vitest_1.expect)(constants_1.blocklistedUsernames.length).toEqual(uniqueValues.size);
        });
        (0, vitest_1.it)('should contain all the letters in the latin alphabet', () => {
            const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
            (0, vitest_1.expect)(constants_1.blocklistedUsernames).toEqual(vitest_1.expect.arrayContaining(alphabet));
        });
    });
});
