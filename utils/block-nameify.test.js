"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_nameify_1 = require("./block-nameify");
describe('blockNameify', () => {
    it('should return a preformatted name when it exists', () => {
        const result = (0, block_nameify_1.blockNameify)('back-end-development-and-apis');
        expect(result).toBe('Back End Development and APIs');
    });
    it('should not format prepositions', () => {
        const result = (0, block_nameify_1.blockNameify)('and-for-of-the-up-with');
        expect(result).toBe('and for of the up with');
    });
    it('should format javascript to JavaScript', () => {
        const result = (0, block_nameify_1.blockNameify)('javascript');
        expect(result).toBe('JavaScript');
    });
    it('should transform "-" to " " and uppercase each word', () => {
        const result = (0, block_nameify_1.blockNameify)('hello-world');
        expect(result).toBe('Hello World');
    });
});
