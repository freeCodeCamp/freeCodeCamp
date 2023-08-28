"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_lines_1 = require("./get-lines");
const content = 'one\ntwo\nthree';
describe('dasherize', () => {
    it('returns a string', () => {
        expect((0, get_lines_1.getLines)('')).toBe('');
    });
    it("returns '' when the second arg is empty", () => {
        expect((0, get_lines_1.getLines)(content)).toBe('');
    });
    it("returns '' when the range is negative", () => {
        expect((0, get_lines_1.getLines)(content, [1, -1])).toBe('');
    });
    it("returns '' when the range is [n,n]", () => {
        expect((0, get_lines_1.getLines)(content, [0, 0])).toBe('');
        expect((0, get_lines_1.getLines)(content, [1, 1])).toBe('');
        expect((0, get_lines_1.getLines)(content, [2, 2])).toBe('');
    });
    it('returns the first line when the range is [0,2]', () => {
        expect((0, get_lines_1.getLines)(content, [0, 2])).toBe('one');
    });
    it('returns the second line when the range is [1,3]', () => {
        expect((0, get_lines_1.getLines)(content, [1, 3])).toBe('two');
    });
    it('returns the first and second lines when the range is [0,3]', () => {
        expect((0, get_lines_1.getLines)(content, [0, 3])).toBe('one\ntwo');
    });
    it('returns the second and third lines when the range is [1,4]', () => {
        expect((0, get_lines_1.getLines)(content, [1, 4])).toBe('two\nthree');
    });
});
