import {
    Ident,
    String as StringToken,
    Delim,
    LeftSquareBracket,
    RightSquareBracket
} from '../../tokenizer/index.js';

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
        this.eat(Ident);
    }

    if (this.isDelim(VERTICALLINE)) {
        if (this.charCodeAt(this.tokenStart + 1) !== EQUALSSIGN) {
            this.next();
            this.eat(Ident);
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
export const name = 'AttributeSelector';
export const structure = {
    name: 'Identifier',
    matcher: [String, null],
    value: ['String', 'Identifier', null],
    flags: [String, null]
};

export function parse() {
    const start = this.tokenStart;
    let name;
    let matcher = null;
    let value = null;
    let flags = null;

    this.eat(LeftSquareBracket);
    this.skipSC();

    name = getAttributeName.call(this);
    this.skipSC();

    if (this.tokenType !== RightSquareBracket) {
        // avoid case `[name i]`
        if (this.tokenType !== Ident) {
            matcher = getOperator.call(this);

            this.skipSC();

            value = this.tokenType === StringToken
                ? this.String()
                : this.Identifier();

            this.skipSC();
        }

        // attribute flags
        if (this.tokenType === Ident) {
            flags = this.consume(Ident);

            this.skipSC();
        }
    }

    this.eat(RightSquareBracket);

    return {
        type: 'AttributeSelector',
        loc: this.getLocation(start, this.tokenStart),
        name,
        matcher,
        value,
        flags
    };
}

export function generate(node) {
    this.token(Delim, '[');
    this.node(node.name);

    if (node.matcher !== null) {
        this.tokenize(node.matcher);
        this.node(node.value);
    }

    if (node.flags !== null) {
        this.token(Ident, node.flags);
    }

    this.token(Delim, ']');
}
