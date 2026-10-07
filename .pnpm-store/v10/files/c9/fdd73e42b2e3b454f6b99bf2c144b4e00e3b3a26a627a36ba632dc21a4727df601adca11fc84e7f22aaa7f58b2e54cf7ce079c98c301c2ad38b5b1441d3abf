'use strict';

const types = require('../../tokenizer/types.cjs');

// https://drafts.csswg.org/css-contain-3/#container-rule
// The keywords `none`, `and`, `not`, and `or` are excluded from the <custom-ident> above.
const nonContainerNameKeywords = new Set(['none', 'and', 'not', 'or']);

const container = {
    parse: {
        prelude() {
            const children = this.createList();

            if (this.tokenType === types.Ident) {
                const name = this.substring(this.tokenStart, this.tokenEnd);

                if (!nonContainerNameKeywords.has(name.toLowerCase())) {
                    children.push(this.Identifier());
                }
            }

            children.push(this.Condition('container'));

            return children;
        },
        block(nested = false) {
            return this.Block(nested);
        }
    }
};

module.exports = container;
