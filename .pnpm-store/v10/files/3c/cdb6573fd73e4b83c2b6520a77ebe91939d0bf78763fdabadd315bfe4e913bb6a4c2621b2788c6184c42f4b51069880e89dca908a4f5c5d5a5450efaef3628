import { Delim } from '../../tokenizer/index.js';

const AMPERSAND = 0x0026;       // U+0026 AMPERSAND (&)

export const name = 'NestingSelector';
export const structure = {
};

export function parse() {
    const start = this.tokenStart;

    this.eatDelim(AMPERSAND);

    return {
        type: 'NestingSelector',
        loc: this.getLocation(start, this.tokenStart)
    };
}

export function generate() {
    this.token(Delim, '&');
}
