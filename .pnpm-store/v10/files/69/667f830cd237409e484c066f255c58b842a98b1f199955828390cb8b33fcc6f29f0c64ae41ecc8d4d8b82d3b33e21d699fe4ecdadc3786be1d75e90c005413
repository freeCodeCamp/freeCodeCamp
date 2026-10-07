'use strict';

const types = require('../../tokenizer/types.cjs');

const name = 'MediaQuery';
const structure = {
    modifier: [String, null],
    mediaType: [String, null],
    condition: ['Condition', null]
};

function parse() {
    const start = this.tokenStart;
    let modifier = null;
    let mediaType = null;
    let condition = null;

    this.skipSC();

    if (this.tokenType === types.Ident && this.lookupTypeNonSC(1) !== types.LeftParenthesis) {
        // [ not | only ]? <media-type>
        const ident = this.consume(types.Ident);
        const identLowerCase = ident.toLowerCase();

        if (identLowerCase === 'not' || identLowerCase === 'only') {
            this.skipSC();
            modifier = identLowerCase;
            mediaType = this.consume(types.Ident);
        } else {
            mediaType = ident;
        }

        switch (this.lookupTypeNonSC(0)) {
            case types.Ident: {
                // and <media-condition-without-or>
                this.skipSC();
                this.eatIdent('and');
                condition = this.Condition('media');
                break;
            }

            case types.LeftCurlyBracket:
            case types.Semicolon:
            case types.Comma:
            case types.EOF:
                break;

            default:
                this.error('Identifier or parenthesis is expected');
        }
    } else {
        switch (this.tokenType) {
            case types.Ident:
            case types.LeftParenthesis:
            case types.Function: {
                // <media-condition>
                condition = this.Condition('media');
                break;
            }

            case types.LeftCurlyBracket:
            case types.Semicolon:
            case types.EOF:
                break;

            default:
                this.error('Identifier or parenthesis is expected');
        }
    }

    return {
        type: 'MediaQuery',
        loc: this.getLocation(start, this.tokenStart),
        modifier,
        mediaType,
        condition
    };
}

function generate(node) {
    if (node.mediaType) {
        if (node.modifier) {
            this.token(types.Ident, node.modifier);
        }

        this.token(types.Ident, node.mediaType);

        if (node.condition) {
            this.token(types.Ident, 'and');
            this.node(node.condition);
        }
    } else if (node.condition) {
        this.node(node.condition);
    }
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
