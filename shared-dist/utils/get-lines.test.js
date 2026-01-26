"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const get_lines_1 = require("./get-lines");
const content = 'one\ntwo\nthree';
(0, vitest_1.describe)('dasherize', () => {
    (0, vitest_1.it)('returns a string', () => {
        (0, vitest_1.expect)((0, get_lines_1.getLines)('')).toBe('');
    });
    (0, vitest_1.it)("returns '' when the second arg is empty", () => {
        (0, vitest_1.expect)((0, get_lines_1.getLines)(content)).toBe('');
    });
    (0, vitest_1.it)("returns '' when the range is negative", () => {
        (0, vitest_1.expect)((0, get_lines_1.getLines)(content, [1, -1])).toBe('');
    });
    (0, vitest_1.it)("returns '' when the range is [n,n]", () => {
        (0, vitest_1.expect)((0, get_lines_1.getLines)(content, [0, 0])).toBe('');
        (0, vitest_1.expect)((0, get_lines_1.getLines)(content, [1, 1])).toBe('');
        (0, vitest_1.expect)((0, get_lines_1.getLines)(content, [2, 2])).toBe('');
    });
    (0, vitest_1.it)('returns the first line when the range is [0,2]', () => {
        (0, vitest_1.expect)((0, get_lines_1.getLines)(content, [0, 2])).toBe('one');
    });
    (0, vitest_1.it)('returns the second line when the range is [1,3]', () => {
        (0, vitest_1.expect)((0, get_lines_1.getLines)(content, [1, 3])).toBe('two');
    });
    (0, vitest_1.it)('returns the first and second lines when the range is [0,3]', () => {
        (0, vitest_1.expect)((0, get_lines_1.getLines)(content, [0, 3])).toBe('one\ntwo');
    });
    (0, vitest_1.it)('returns the second and third lines when the range is [1,4]', () => {
        (0, vitest_1.expect)((0, get_lines_1.getLines)(content, [1, 4])).toBe('two\nthree');
    });
});
