'use strict';

const url = require('../../utils/url.cjs');
const string = require('../../utils/string.cjs');
const types = require('../../tokenizer/types.cjs');

const name = 'Url';
const structure = {
    value: String
};

// <url-token> | <function-token> <string> )
function parse() {
    const start = this.tokenStart;
    let value;

    switch (this.tokenType) {
        case types.Url:
            value = url.decode(this.consume(types.Url));
            break;

        case types.Function:
            if (!this.cmpStr(this.tokenStart, this.tokenEnd, 'url(')) {
                this.error('Function name must be `url`');
            }

            this.eat(types.Function);
            this.skipSC();
            value = string.decode(this.consume(types.String));
            this.skipSC();
            if (!this.eof) {
                this.eat(types.RightParenthesis);
            }
            break;

        default:
            this.error('Url or Function is expected');
    }

    return {
        type: 'Url',
        loc: this.getLocation(start, this.tokenStart),
        value
    };
}

function generate(node) {
    this.token(types.Url, url.encode(node.value));
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
