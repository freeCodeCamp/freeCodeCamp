'use strict';

const types = require('../../tokenizer/types.cjs');

const DOLLARSIGN = 0x0024;       // U+0024 DOLLAR SIGN ($)
const ASTERISK = 0x002A;         // U+002A ASTERISK (*)
const EQUALSSIGN = 0x003D;       // U+003D EQUALS SIGN (=)
const CIRCUMFLEXACCENT = 0x005E; // U+005E (^)
const VERTICALLINE = 0x007C;     // U+007C VERTICAL LINE (|)
const TILDE = 0x007E;            // U+007E TILDE (~)

function getAttributeName() {
    if (this.eof) {
        this.error('Unexpected end of input');
    }

    const start = this.tokenStart;
    let expectIdent = false;

    if (this.isDelim(ASTERISK)) {
        expectIdent = true;
        this.next();
    } else if (!this.isDelim(VERTICALLINE)) {
        this.eat(types.Ident);
    }

    if (this.isDelim(VERTICALLINE)) {
        if (this.charCodeAt(this.tokenStart + 1) !== EQUALSSIGN) {
            this.next();
            this.eat(types.Ident);
        } else if (expectIdent) {
            this.error('Identifier is expected', this.tokenEnd);
        }
    } else if (expectIdent) {
        this.error('Vertical line is expected');
    }

    return {
        type: 'Identifier',
        loc: this.getLocation(start, this.tokenStart),
        name: this.substrToCursor(start)
    };
}

function getOperator() {
    const start = this.tokenStart;
    const code = this.charCodeAt(start);

    if (code !== EQUALSSIGN &&        // =
        code !== TILDE &&             // ~=
        code !== CIRCUMFLEXACCENT &&  // ^=
        code !== DOLLARSIGN &&        // $=
        code !== ASTERISK &&          // *=
        code !== VERTICALLINE         // |=
    ) {
        this.error('Attribute selector (=, ~=, ^=, $=, *=, |=) is expected');
    }

    this.next();

    if (code !== EQUALSSIGN) {
        if (!this.isDelim(EQUALSSIGN)) {
            this.error('Equal sign is expected');
        }

        this.next();
    }

    return this.substrToCursor(start);
}

// '[' <wq-name> ']'
// '[' <wq-name> <attr-matcher> [ <string-token> | <ident-token> ] <attr-modifier>? ']'
const name = 'AttributeSelector';
const structure = {
    name: 'Identifier',
    matcher: [String, null],
    value: ['String', 'Identifier', null],
    flags: [String, null]
};

function parse() {
    const start = this.tokenStart;
    let name;
    let matcher = null;
    let value = null;
    let flags = null;

    this.eat(types.LeftSquareBracket);
    this.skipSC();

    name = getAttributeName.call(this);
    this.skipSC();

    if (this.tokenType !== types.RightSquareBracket) {
        // avoid case `[name i]`
        if (this.tokenType !== types.Ident) {
            matcher = getOperator.call(this);

            this.skipSC();

            value = this.tokenType === types.String
                ? this.String()
                : this.Identifier();

            this.skipSC();
        }

        // attribute flags
        if (this.tokenType === types.Ident) {
            flags = this.consume(types.Ident);

            this.skipSC();
        }
    }

    this.eat(types.RightSquareBracket);

    return {
        type: 'AttributeSelector',
        loc: this.getLocation(start, this.tokenStart),
        name,
        matcher,
        value,
        flags
    };
}

function generate(node) {
    this.token(types.Delim, '[');
    this.node(node.name);

    if (node.matcher !== null) {
        this.tokenize(node.matcher);
        this.node(node.value);
    }

    if (node.flags !== null) {
        this.token(types.Ident, node.flags);
    }

    this.token(types.Delim, ']');
}

exports.generate = generate;
exports.name = name;
exports.parse = parse;
exports.structure = structure;
