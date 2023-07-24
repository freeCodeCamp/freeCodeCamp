"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const slugs_1 = require("./slugs");
describe('dasherize', () => {
    it('returns a string', () => {
        expect((0, slugs_1.dasherize)('')).toBe('');
    });
    it('converts characters to lower case', () => {
        expect((0, slugs_1.dasherize)('UPPERCASE')).toBe('uppercase');
    });
    it('converts spaces to dashes', () => {
        expect((0, slugs_1.dasherize)('the space  between')).toBe('the-space--between');
    });
    it('converts dots to dashes', () => {
        expect((0, slugs_1.dasherize)('the..dots.. between')).toBe('the--dots---between');
    });
    it('trims off surrounding whitespace', () => {
        expect((0, slugs_1.dasherize)('  the space  between    ')).toBe('the-space--between');
    });
    it('removes everything except letters, numbers and -', () => {
        expect((0, slugs_1.dasherize)('1a!"£$%^*()_+=-.b2')).toBe('1a--b2');
    });
});
describe('nameify', () => {
    it('returns a string', () => {
        expect((0, slugs_1.nameify)('')).toBe('');
    });
    it('removes everything except letters, numbers and spaces', () => {
        expect((0, slugs_1.nameify)('1A !"£$%^*()_+=-.b  2')).toBe('1A b  2');
    });
});
describe('unDasherize', () => {
    it('returns a string', () => {
        expect((0, slugs_1.unDasherize)('')).toBe('');
    });
    it('converts dashes to spaces', () => {
        expect((0, slugs_1.unDasherize)('the-space--between')).toBe('the space  between');
    });
    it('removes everything except letters, numbers and spaces', () => {
        expect((0, slugs_1.unDasherize)('1A !"£$%^*()_+=-.b  2')).toBe('1A  b  2');
    });
    it('trims off surrounding whitespace', () => {
        expect((0, slugs_1.unDasherize)('--the-space--between----')).toBe('the space  between');
    });
});
