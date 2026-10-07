'use strict';

const types = require('../../tokenizer/types.cjs');

function parseLanguageRangeList() {
    const children = this.createList();

    this.skipSC();

    loop: while (!this.eof) {
        switch (this.tokenType) {
            case types.Ident:
                children.push(this.Identifier());
                break;

            case types.String:
                children.push(this.String());
                break;

            case types.Comma:
                children.push(this.Operator());
                break;

            case types.RightParenthesis:
                break loop;

            default:
                this.error('Identifier, string or comma is expected');
        }

        this.skipSC();
    }

    return children;
}

exports.parseLanguageRangeList = parseLanguageRangeList;
