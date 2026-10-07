import { illegalState } from '../../../base/common/errors.js';
import { localize } from '../../../nls.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function hintDidYouMean(...meant) {
    switch (meant.length) {
        case 1:
            return localize(1693, "Did you mean {0}?", meant[0]);
        case 2:
            return localize(1694, "Did you mean {0} or {1}?", meant[0], meant[1]);
        case 3:
            return localize(1695, "Did you mean {0}, {1} or {2}?", meant[0], meant[1], meant[2]);
        default: // we just don't expect that many
            return undefined;
    }
}
const hintDidYouForgetToOpenOrCloseQuote = localize(1696, "Did you forget to open or close the quote?");
const hintDidYouForgetToEscapeSlash = localize(1697, "Did you forget to escape the '/' (slash) character? Put two backslashes before it to escape, e.g., '\\\\/\'.");
/**
 * A simple scanner for context keys.
 *
 * Example:
 *
 * ```ts
 * const scanner = new Scanner().reset('resourceFileName =~ /docker/ && !config.docker.enabled');
 * const tokens = [...scanner];
 * if (scanner.errorTokens.length > 0) {
 *     scanner.errorTokens.forEach(err => console.error(`Unexpected token at ${err.offset}: ${err.lexeme}\nHint: ${err.additional}`));
 * } else {
 *     // process tokens
 * }
 * ```
 */
class Scanner {
    constructor() {
        this._input = '';
        this._start = 0;
        this._current = 0;
        this._tokens = [];
        this._errors = [];
        // u - unicode, y - sticky // TODO@ulugbekna: we accept double quotes as part of the string rather than as a delimiter (to preserve old parser's behavior)
        this.stringRe = /[a-zA-Z0-9_<>\-\./\\:\*\?\+\[\]\^,#@;"%\$\p{L}-]+/uy;
    }
    static getLexeme(token) {
        switch (token.type) {
            case 0 /* TokenType.LParen */:
                return '(';
            case 1 /* TokenType.RParen */:
                return ')';
            case 2 /* TokenType.Neg */:
                return '!';
            case 3 /* TokenType.Eq */:
                return token.isTripleEq ? '===' : '==';
            case 4 /* TokenType.NotEq */:
                return token.isTripleEq ? '!==' : '!=';
            case 5 /* TokenType.Lt */:
                return '<';
            case 6 /* TokenType.LtEq */:
                return '<=';
            case 7 /* TokenType.Gt */:
                return '>=';
            case 8 /* TokenType.GtEq */:
                return '>=';
            case 9 /* TokenType.RegexOp */:
                return '=~';
            case 10 /* TokenType.RegexStr */:
                return token.lexeme;
            case 11 /* TokenType.True */:
                return 'true';
            case 12 /* TokenType.False */:
                return 'false';
            case 13 /* TokenType.In */:
                return 'in';
            case 14 /* TokenType.Not */:
                return 'not';
            case 15 /* TokenType.And */:
                return '&&';
            case 16 /* TokenType.Or */:
                return '||';
            case 17 /* TokenType.Str */:
                return token.lexeme;
            case 18 /* TokenType.QuotedStr */:
                return token.lexeme;
            case 19 /* TokenType.Error */:
                return token.lexeme;
            case 20 /* TokenType.EOF */:
                return 'EOF';
            default:
                throw illegalState(`unhandled token type: ${JSON.stringify(token)}; have you forgotten to add a case?`);
        }
    }
    static { this._regexFlags = new Set(['i', 'g', 's', 'm', 'y', 'u'].map(ch => ch.charCodeAt(0))); }
    static { this._keywords = new Map([
        ['not', 14 /* TokenType.Not */],
        ['in', 13 /* TokenType.In */],
        ['false', 12 /* TokenType.False */],
        ['true', 11 /* TokenType.True */],
    ]); }
    reset(value) {
        this._input = value;
        this._start = 0;
        this._current = 0;
        this._tokens = [];
        this._errors = [];
        return this;
    }
    scan() {
        while (!this._isAtEnd()) {
            this._start = this._current;
            const ch = this._advance();
            switch (ch) {
                case 40 /* CharCode.OpenParen */:
                    this._addToken(0 /* TokenType.LParen */);
                    break;
                case 41 /* CharCode.CloseParen */:
                    this._addToken(1 /* TokenType.RParen */);
                    break;
                case 33 /* CharCode.ExclamationMark */:
                    if (this._match(61 /* CharCode.Equals */)) {
                        const isTripleEq = this._match(61 /* CharCode.Equals */); // eat last `=` if `!==`
                        this._tokens.push({ type: 4 /* TokenType.NotEq */, offset: this._start, isTripleEq });
                    }
                    else {
                        this._addToken(2 /* TokenType.Neg */);
                    }
                    break;
                case 39 /* CharCode.SingleQuote */:
                    this._quotedString();
                    break;
                case 47 /* CharCode.Slash */:
                    this._regex();
                    break;
                case 61 /* CharCode.Equals */:
                    if (this._match(61 /* CharCode.Equals */)) { // support `==`
                        const isTripleEq = this._match(61 /* CharCode.Equals */); // eat last `=` if `===`
                        this._tokens.push({ type: 3 /* TokenType.Eq */, offset: this._start, isTripleEq });
                    }
                    else if (this._match(126 /* CharCode.Tilde */)) {
                        this._addToken(9 /* TokenType.RegexOp */);
                    }
                    else {
                        this._error(hintDidYouMean('==', '=~'));
                    }
                    break;
                case 60 /* CharCode.LessThan */:
                    this._addToken(this._match(61 /* CharCode.Equals */) ? 6 /* TokenType.LtEq */ : 5 /* TokenType.Lt */);
                    break;
                case 62 /* CharCode.GreaterThan */:
                    this._addToken(this._match(61 /* CharCode.Equals */) ? 8 /* TokenType.GtEq */ : 7 /* TokenType.Gt */);
                    break;
                case 38 /* CharCode.Ampersand */:
                    if (this._match(38 /* CharCode.Ampersand */)) {
                        this._addToken(15 /* TokenType.And */);
                    }
                    else {
                        this._error(hintDidYouMean('&&'));
                    }
                    break;
                case 124 /* CharCode.Pipe */:
                    if (this._match(124 /* CharCode.Pipe */)) {
                        this._addToken(16 /* TokenType.Or */);
                    }
                    else {
                        this._error(hintDidYouMean('||'));
                    }
                    break;
                // TODO@ulugbekna: 1) rewrite using a regex 2) reconsider what characters are considered whitespace, including unicode, nbsp, etc.
                case 32 /* CharCode.Space */:
                case 13 /* CharCode.CarriageReturn */:
                case 9 /* CharCode.Tab */:
                case 10 /* CharCode.LineFeed */:
                case 160 /* CharCode.NoBreakSpace */: // &nbsp
                    break;
                default:
                    this._string();
            }
        }
        this._start = this._current;
        this._addToken(20 /* TokenType.EOF */);
        return Array.from(this._tokens);
    }
    _match(expected) {
        if (this._isAtEnd()) {
            return false;
        }
        if (this._input.charCodeAt(this._current) !== expected) {
            return false;
        }
        this._current++;
        return true;
    }
    _advance() {
        return this._input.charCodeAt(this._current++);
    }
    _peek() {
        return this._isAtEnd() ? 0 /* CharCode.Null */ : this._input.charCodeAt(this._current);
    }
    _addToken(type) {
        this._tokens.push({ type, offset: this._start });
    }
    _error(additional) {
        const offset = this._start;
        const lexeme = this._input.substring(this._start, this._current);
        const errToken = { type: 19 /* TokenType.Error */, offset: this._start, lexeme };
        this._errors.push({ offset, lexeme, additionalInfo: additional });
        this._tokens.push(errToken);
    }
    _string() {
        this.stringRe.lastIndex = this._start;
        const match = this.stringRe.exec(this._input);
        if (match) {
            this._current = this._start + match[0].length;
            const lexeme = this._input.substring(this._start, this._current);
            const keyword = Scanner._keywords.get(lexeme);
            if (keyword) {
                this._addToken(keyword);
            }
            else {
                this._tokens.push({ type: 17 /* TokenType.Str */, lexeme, offset: this._start });
            }
        }
    }
    // captures the lexeme without the leading and trailing '
    _quotedString() {
        while (this._peek() !== 39 /* CharCode.SingleQuote */ && !this._isAtEnd()) { // TODO@ulugbekna: add support for escaping ' ?
            this._advance();
        }
        if (this._isAtEnd()) {
            this._error(hintDidYouForgetToOpenOrCloseQuote);
            return;
        }
        // consume the closing '
        this._advance();
        this._tokens.push({ type: 18 /* TokenType.QuotedStr */, lexeme: this._input.substring(this._start + 1, this._current - 1), offset: this._start + 1 });
    }
    /*
     * Lexing a regex expression: /.../[igsmyu]*
     * Based on https://github.com/microsoft/TypeScript/blob/9247ef115e617805983740ba795d7a8164babf89/src/compiler/scanner.ts#L2129-L2181
     *
     * Note that we want slashes within a regex to be escaped, e.g., /file:\\/\\/\\// should match `file:///`
     */
    _regex() {
        let p = this._current;
        let inEscape = false;
        let inCharacterClass = false;
        while (true) {
            if (p >= this._input.length) {
                this._current = p;
                this._error(hintDidYouForgetToEscapeSlash);
                return;
            }
            const ch = this._input.charCodeAt(p);
            if (inEscape) { // parsing an escape character
                inEscape = false;
            }
            else if (ch === 47 /* CharCode.Slash */ && !inCharacterClass) { // end of regex
                p++;
                break;
            }
            else if (ch === 91 /* CharCode.OpenSquareBracket */) {
                inCharacterClass = true;
            }
            else if (ch === 92 /* CharCode.Backslash */) {
                inEscape = true;
            }
            else if (ch === 93 /* CharCode.CloseSquareBracket */) {
                inCharacterClass = false;
            }
            p++;
        }
        // Consume flags // TODO@ulugbekna: use regex instead
        while (p < this._input.length && Scanner._regexFlags.has(this._input.charCodeAt(p))) {
            p++;
        }
        this._current = p;
        const lexeme = this._input.substring(this._start, this._current);
        this._tokens.push({ type: 10 /* TokenType.RegexStr */, lexeme, offset: this._start });
    }
    _isAtEnd() {
        return this._current >= this._input.length;
    }
}

export { Scanner };
