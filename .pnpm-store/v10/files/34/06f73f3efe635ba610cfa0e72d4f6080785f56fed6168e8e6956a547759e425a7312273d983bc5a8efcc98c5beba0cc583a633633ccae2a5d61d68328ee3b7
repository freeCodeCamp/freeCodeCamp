import { isCustomProperty } from '../../utils/names.js';
import {
    Ident,
    Hash,
    Colon,
    Semicolon,
    Delim,
    WhiteSpace
} from '../../tokenizer/index.js';

const EXCLAMATIONMARK = 0x0021; // U+0021 EXCLAMATION MARK (!)
const NUMBERSIGN = 0x0023;      // U+0023 NUMBER SIGN (#)
const DOLLARSIGN = 0x0024;      // U+0024 DOLLAR SIGN ($)
const AMPERSAND = 0x0026;       // U+0026 AMPERSAND (&)
const ASTERISK = 0x002A;        // U+002A ASTERISK (*)
const PLUSSIGN = 0x002B;        // U+002B PLUS SIGN (+)
const SOLIDUS = 0x002F;         // U+002F SOLIDUS (/)

function consumeValueRaw() {
    return this.Raw(this.consumeUntilExclamationMarkOrSemicolon, true);
}

function consumeCustomPropertyRaw() {
    return this.Raw(this.consumeUntilExclamationMarkOrSemicolon, false);
}

function consumeValue() {
    const startValueToken = this.tokenIndex;
    const value = this.Value();

    if (value.type !== 'Raw' &&
        this.eof === false &&
        this.tokenType !== Semicolon &&
        this.isDelim(EXCLAMATIONMARK) === false &&
        this.isBalanceEdge(startValueToken) === false) {
        this.error();
    }

    return value;
}

export const name = 'Declaration';
export const walkContext = 'declaration';
export const structure = {
    important: [Boolean, String],
    property: String,
    value: ['Value', 'Raw']
};

export function parse() {
    const start = this.tokenStart;
    const startToken = this.tokenIndex;
    const property = readProperty.call(this);
    const customProperty = isCustomProperty(property);
    const parseValue = customProperty ? this.parseCustomProperty : this.parseValue;
    const consumeRaw = customProperty ? consumeCustomPropertyRaw : consumeValueRaw;
    let important = false;
    let value;

    this.skipSC();
    this.eat(Colon);

    const valueStart = this.tokenIndex;

    if (!customProperty) {
        this.skipSC();
    }

    if (parseValue) {
        value = this.parseWithFallback(consumeValue, consumeRaw);
    } else {
        value = consumeRaw.call(this, this.tokenIndex);
    }

    if (customProperty && value.type === 'Value' && value.children.isEmpty) {
        for (let offset = valueStart - this.tokenIndex; offset <= 0; offset++) {
            if (this.lookupType(offset) === WhiteSpace) {
                value.children.appendData({
                    type: 'WhiteSpace',
                    loc: null,
                    value: ' '
                });
                break;
            }
        }
    }

    if (this.isDelim(EXCLAMATIONMARK)) {
        important = getImportant.call(this);
        this.skipSC();
    }

    // Do not include semicolon to range per spec
    // https://drafts.csswg.org/css-syntax/#declaration-diagram

    if (this.eof === false &&
        this.tokenType !== Semicolon &&
        this.isBalanceEdge(startToken) === false) {
        this.error();
    }

    return {
        type: 'Declaration',
        loc: this.getLocation(start, this.tokenStart),
        important,
        property,
        value
    };
}

export function generate(node) {
    this.token(Ident, node.property);
    this.token(Colon, ':');
    this.node(node.value);

    if (node.important) {
        this.token(Delim, '!');
        this.token(Ident, node.important === true ? 'important' : node.important);
    }
}

function readProperty() {
    const start = this.tokenStart;

    // hacks
    if (this.tokenType === Delim) {
        switch (this.charCodeAt(this.tokenStart)) {
            case ASTERISK:
            case DOLLARSIGN:
            case PLUSSIGN:
            case NUMBERSIGN:
            case AMPERSAND:
                this.next();
                break;

            // TODO: not sure we should support this hack
            case SOLIDUS:
                this.next();
                if (this.isDelim(SOLIDUS)) {
                    this.next();
                }
                break;
        }
    }

    if (this.tokenType === Hash) {
        this.eat(Hash);
    } else {
        this.eat(Ident);
    }

    return this.substrToCursor(start);
}

// ! ws* important
function getImportant() {
    this.eat(Delim);
    this.skipSC();

    const important = this.consume(Ident);

    // store original value in case it differ from `important`
    // for better original source restoring and hacks like `!ie` support
    return important === 'important' ? true : important;
}
