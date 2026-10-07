import { CDO } from '../../tokenizer/index.js';

export const name = 'CDO';
export const structure = [];

export function parse() {
    const start = this.tokenStart;

    this.eat(CDO); // <!--

    return {
        type: 'CDO',
        loc: this.getLocation(start, this.tokenStart)
    };
}

export function generate() {
    this.token(CDO, '<!--');
}
