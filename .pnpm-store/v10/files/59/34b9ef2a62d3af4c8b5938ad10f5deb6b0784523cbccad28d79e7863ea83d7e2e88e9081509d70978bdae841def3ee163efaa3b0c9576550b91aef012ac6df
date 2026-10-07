import { LeftCurlyBracket } from '../../tokenizer/index.js';

function consumeRaw() {
    return this.Raw(this.consumeUntilLeftCurlyBracket, true);
}

function consumePrelude() {
    const prelude = this.SelectorList();

    if (prelude.type !== 'Raw' &&
        this.eof === false &&
        this.tokenType !== LeftCurlyBracket) {
        this.error();
    }

    return prelude;
}

export const name = 'Rule';
export const walkContext = 'rule';
export const structure = {
    prelude: ['SelectorList', 'Raw'],
    block: ['Block']
};

export function parse() {
    const startToken = this.tokenIndex;
    const startOffset = this.tokenStart;
    let prelude;
    let block;

    if (this.parseRulePrelude) {
        prelude = this.parseWithFallback(consumePrelude, consumeRaw);
    } else {
        prelude = consumeRaw.call(this, startToken);
    }

    block = this.Block(true);

    return {
        type: 'Rule',
        loc: this.getLocation(startOffset, this.tokenStart),
        prelude,
        block
    };
}
export function generate(node) {
    this.node(node.prelude);
    this.node(node.block);
}

