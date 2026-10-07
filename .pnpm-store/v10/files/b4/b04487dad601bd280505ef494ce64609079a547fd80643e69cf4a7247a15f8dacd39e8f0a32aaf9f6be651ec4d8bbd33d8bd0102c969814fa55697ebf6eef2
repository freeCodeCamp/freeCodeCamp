import {
    Comma,
    EOF,
    Ident,
    LeftCurlyBracket,
    LeftParenthesis,
    Function as FunctionToken,
    Semicolon
} from '../../tokenizer/index.js';

export const name = 'MediaQuery';
export const structure = {
    modifier: [String, null],
    mediaType: [String, null],
    condition: ['Condition', null]
};

export function parse() {
    const start = this.tokenStart;
    let modifier = null;
    let mediaType = null;
    let condition = null;

    this.skipSC();

    if (this.tokenType === Ident && this.lookupTypeNonSC(1) !== LeftParenthesis) {
        // [ not | only ]? <media-type>
        const ident = this.consume(Ident);
        const identLowerCase = ident.toLowerCase();

        if (identLowerCase === 'not' || identLowerCase === 'only') {
            this.skipSC();
            modifier = identLowerCase;
            mediaType = this.consume(Ident);
        } else {
            mediaType = ident;
        }

        switch (this.lookupTypeNonSC(0)) {
            case Ident: {
                // and <media-condition-without-or>
                this.skipSC();
                this.eatIdent('and');
                condition = this.Condition('media');
                break;
            }

            case LeftCurlyBracket:
            case Semicolon:
            case Comma:
            case EOF:
                break;

            default:
                this.error('Identifier or parenthesis is expected');
        }
    } else {
        switch (this.tokenType) {
            case Ident:
            case LeftParenthesis:
            case FunctionToken: {
                // <media-condition>
                condition = this.Condition('media');
                break;
            }

            case LeftCurlyBracket:
            case Semicolon:
            case EOF:
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

export function generate(node) {
    if (node.mediaType) {
        if (node.modifier) {
            this.token(Ident, node.modifier);
        }

        this.token(Ident, node.mediaType);

        if (node.condition) {
            this.token(Ident, 'and');
            this.node(node.condition);
        }
    } else if (node.condition) {
        this.node(node.condition);
    }
}

