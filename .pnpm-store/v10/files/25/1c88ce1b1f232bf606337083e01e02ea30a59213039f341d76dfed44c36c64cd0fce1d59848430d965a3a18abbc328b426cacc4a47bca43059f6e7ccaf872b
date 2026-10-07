import { CDC } from '../../tokenizer/index.js';

export const name = 'CDC';
export const structure = [];

export function parse() {
    const start = this.tokenStart;

    this.eat(CDC); // -->

    return {
        type: 'CDC',
        loc: this.getLocation(start, this.tokenStart)
    };
}

export function generate() {
    this.token(CDC, '-->');
}
