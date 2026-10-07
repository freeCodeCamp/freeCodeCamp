/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
'use strict';
export var TokenType;
(function (TokenType) {
    TokenType[TokenType["Ident"] = 0] = "Ident";
    TokenType[TokenType["AtKeyword"] = 1] = "AtKeyword";
    TokenType[TokenType["String"] = 2] = "String";
    TokenType[TokenType["BadString"] = 3] = "BadString";
    TokenType[TokenType["UnquotedString"] = 4] = "UnquotedString";
    TokenType[TokenType["Hash"] = 5] = "Hash";
    TokenType[TokenType["Num"] = 6] = "Num";
    TokenType[TokenType["Percentage"] = 7] = "Percentage";
    TokenType[TokenType["Dimension"] = 8] = "Dimension";
    TokenType[TokenType["UnicodeRange"] = 9] = "UnicodeRange";
    TokenType[TokenType["CDO"] = 10] = "CDO";
    TokenType[TokenType["CDC"] = 11] = "CDC";
    TokenType[TokenType["Colon"] = 12] = "Colon";
    TokenType[TokenType["SemiColon"] = 13] = "SemiColon";
    TokenType[TokenType["CurlyL"] = 14] = "CurlyL";
    TokenType[TokenType["CurlyR"] = 15] = "CurlyR";
    TokenType[TokenType["ParenthesisL"] = 16] = "ParenthesisL";
    TokenType[TokenType["ParenthesisR"] = 17] = "ParenthesisR";
    TokenType[TokenType["BracketL"] = 18] = "BracketL";
    TokenType[TokenType["BracketR"] = 19] = "BracketR";
    TokenType[TokenType["Whitespace"] = 20] = "Whitespace";
    TokenType[TokenType["Includes"] = 21] = "Includes";
    TokenType[TokenType["Dashmatch"] = 22] = "Dashmatch";
    TokenType[TokenType["SubstringOperator"] = 23] = "SubstringOperator";
    TokenType[TokenType["PrefixOperator"] = 24] = "PrefixOperator";
    TokenType[TokenType["SuffixOperator"] = 25] = "SuffixOperator";
    TokenType[TokenType["Delim"] = 26] = "Delim";
    TokenType[TokenType["EMS"] = 27] = "EMS";
    TokenType[TokenType["EXS"] = 28] = "EXS";
    TokenType[TokenType["Length"] = 29] = "Length";
    TokenType[TokenType["Angle"] = 30] = "Angle";
    TokenType[TokenType["Time"] = 31] = "Time";
    TokenType[TokenType["Freq"] = 32] = "Freq";
    TokenType[TokenType["Exclamation"] = 33] = "Exclamation";
    TokenType[TokenType["Resolution"] = 34] = "Resolution";
    TokenType[TokenType["Comma"] = 35] = "Comma";
    TokenType[TokenType["Charset"] = 36] = "Charset";
    TokenType[TokenType["EscapedJavaScript"] = 37] = "EscapedJavaScript";
    TokenType[TokenType["BadEscapedJavaScript"] = 38] = "BadEscapedJavaScript";
    TokenType[TokenType["Comment"] = 39] = "Comment";
    TokenType[TokenType["SingleLineComment"] = 40] = "SingleLineComment";
    TokenType[TokenType["EOF"] = 41] = "EOF";
    TokenType[TokenType["ContainerQueryLength"] = 42] = "ContainerQueryLength";
    TokenType[TokenType["CustomToken"] = 43] = "CustomToken"; // must be last token type
})(TokenType || (TokenType = {}));
export class MultiLineStream {
    constructor(source) {
        this.source = source;
        this.len = source.length;
        this.position = 0;
    }
    substring(from, to = this.position) {
        return this.source.substring(from, to);
    }
    eos() {
        return this.len <= this.position;
    }
    pos() {
        return this.position;
    }
    goBackTo(pos) {
        this.position = pos;
    }
    goBack(n) {
        this.position -= n;
    }
    advance(n) {
        this.position += n;
    }
    nextChar() {
        return this.source.charCodeAt(this.position++) || 0;
    }
    peekChar(n = 0) {
        return this.source.charCodeAt(this.position + n) || 0;
    }
    lookbackChar(n = 0) {
        return this.source.charCodeAt(this.position - n) || 0;
    }
    advanceIfChar(ch) {
        if (ch === this.source.charCodeAt(this.position)) {
            this.position++;
            return true;
        }
        return false;
    }
    advanceIfChars(ch) {
        if (this.position + ch.length > this.source.length) {
            return false;
        }
        let i = 0;
        for (; i < ch.length; i++) {
            if (this.source.charCodeAt(this.position + i) !== ch[i]) {
                return false;
            }
        }
        this.advance(i);
        return true;
    }
    advanceWhileChar(condition) {
        const posNow = this.position;
        while (this.position < this.len && condition(this.source.charCodeAt(this.position))) {
            this.position++;
        }
        return this.position - posNow;
    }
}
const _a = 'a'.charCodeAt(0);
const _f = 'f'.charCodeAt(0);
const _z = 'z'.charCodeAt(0);
const _u = 'u'.charCodeAt(0);
const _A = 'A'.charCodeAt(0);
const _F = 'F'.charCodeAt(0);
const _Z = 'Z'.charCodeAt(0);
const _0 = '0'.charCodeAt(0);
const _9 = '9'.charCodeAt(0);
const _TLD = '~'.charCodeAt(0);
const _HAT = '^'.charCodeAt(0);
const _EQS = '='.charCodeAt(0);
const _PIP = '|'.charCodeAt(0);
const _MIN = '-'.charCodeAt(0);
const _USC = '_'.charCodeAt(0);
const _PRC = '%'.charCodeAt(0);
const _MUL = '*'.charCodeAt(0);
const _LPA = '('.charCodeAt(0);
const _RPA = ')'.charCodeAt(0);
const _LAN = '<'.charCodeAt(0);
const _RAN = '>'.charCodeAt(0);
const _ATS = '@'.charCodeAt(0);
const _HSH = '#'.charCodeAt(0);
const _DLR = '$'.charCodeAt(0);
const _BSL = '\\'.charCodeAt(0);
const _FSL = '/'.charCodeAt(0);
const _NWL = '\n'.charCodeAt(0);
const _CAR = '\r'.charCodeAt(0);
const _LFD = '\f'.charCodeAt(0);
const _DQO = '"'.charCodeAt(0);
const _SQO = '\''.charCodeAt(0);
const _WSP = ' '.charCodeAt(0);
const _TAB = '\t'.charCodeAt(0);
const _SEM = ';'.charCodeAt(0);
const _COL = ':'.charCodeAt(0);
const _CUL = '{'.charCodeAt(0);
const _CUR = '}'.charCodeAt(0);
const _BRL = '['.charCodeAt(0);
const _BRR = ']'.charCodeAt(0);
const _CMA = ','.charCodeAt(0);
const _DOT = '.'.charCodeAt(0);
const _BNG = '!'.charCodeAt(0);
const _QSM = '?'.charCodeAt(0);
const _PLS = '+'.charCodeAt(0);
const staticTokenTable = {};
staticTokenTable[_SEM] = TokenType.SemiColon;
staticTokenTable[_COL] = TokenType.Colon;
staticTokenTable[_CUL] = TokenType.CurlyL;
staticTokenTable[_CUR] = TokenType.CurlyR;
staticTokenTable[_BRR] = TokenType.BracketR;
staticTokenTable[_BRL] = TokenType.BracketL;
staticTokenTable[_LPA] = TokenType.ParenthesisL;
staticTokenTable[_RPA] = TokenType.ParenthesisR;
staticTokenTable[_CMA] = TokenType.Comma;
const staticUnitTable = {};
staticUnitTable['em'] = TokenType.EMS;
staticUnitTable['ex'] = TokenType.EXS;
staticUnitTable['px'] = TokenType.Length;
staticUnitTable['cm'] = TokenType.Length;
staticUnitTable['mm'] = TokenType.Length;
staticUnitTable['in'] = TokenType.Length;
staticUnitTable['pt'] = TokenType.Length;
staticUnitTable['pc'] = TokenType.Length;
staticUnitTable['deg'] = TokenType.Angle;
staticUnitTable['rad'] = TokenType.Angle;
staticUnitTable['grad'] = TokenType.Angle;
staticUnitTable['ms'] = TokenType.Time;
staticUnitTable['s'] = TokenType.Time;
staticUnitTable['hz'] = TokenType.Freq;
staticUnitTable['khz'] = TokenType.Freq;
staticUnitTable['%'] = TokenType.Percentage;
staticUnitTable['fr'] = TokenType.Percentage;
staticUnitTable['dpi'] = TokenType.Resolution;
staticUnitTable['dpcm'] = TokenType.Resolution;
staticUnitTable['cqw'] = TokenType.ContainerQueryLength;
staticUnitTable['cqh'] = TokenType.ContainerQueryLength;
staticUnitTable['cqi'] = TokenType.ContainerQueryLength;
staticUnitTable['cqb'] = TokenType.ContainerQueryLength;
staticUnitTable['cqmin'] = TokenType.ContainerQueryLength;
staticUnitTable['cqmax'] = TokenType.ContainerQueryLength;
export class Scanner {
    constructor() {
        this.stream = new MultiLineStream('');
        this.ignoreComment = true;
        this.ignoreWhitespace = true;
        this.inURL = false;
    }
    setSource(input) {
        this.stream = new MultiLineStream(input);
    }
    finishToken(offset, type, text) {
        return {
            offset: offset,
            len: this.stream.pos() - offset,
            type: type,
            text: text || this.stream.substring(offset)
        };
    }
    substring(offset, len) {
        return this.stream.substring(offset, offset + len);
    }
    pos() {
        return this.stream.pos();
    }
    goBackTo(pos) {
        this.stream.goBackTo(pos);
    }
    scanUnquotedString() {
        const offset = this.stream.pos();
        const content = [];
        if (this._unquotedString(content)) {
            return this.finishToken(offset, TokenType.UnquotedString, content.join(''));
        }
        return null;
    }
    scan() {
        // processes all whitespaces and comments
        const triviaToken = this.trivia();
        if (triviaToken !== null) {
            return triviaToken;
        }
        const offset = this.stream.pos();
        // End of file/input
        if (this.stream.eos()) {
            return this.finishToken(offset, TokenType.EOF);
        }
        return this.scanNext(offset);
    }
    /**
     * Read the range as described in https://www.w3.org/TR/CSS21/syndata.html#tokenization
     * Assume the `u` has aleady been consumed
     * @returns if reading the unicode was successful
     */
    tryScanUnicode() {
        const offset = this.stream.pos();
        if (!this.stream.eos() && this._unicodeRange()) {
            return this.finishToken(offset, TokenType.UnicodeRange);
        }
        this.stream.goBackTo(offset);
        return undefined;
    }
    scanNext(offset) {
        // CDO <!--
        if (this.stream.advanceIfChars([_LAN, _BNG, _MIN, _MIN])) {
            return this.finishToken(offset, TokenType.CDO);
        }
        // CDC -->
        if (this.stream.advanceIfChars([_MIN, _MIN, _RAN])) {
            return this.finishToken(offset, TokenType.CDC);
        }
        let content = [];
        if (this.ident(content)) {
            return this.finishToken(offset, TokenType.Ident, content.join(''));
        }
        // at-keyword
        if (this.stream.advanceIfChar(_ATS)) {
            content = ['@'];
            if (this._name(content)) {
                const keywordText = content.join('');
                if (keywordText === '@charset') {
                    return this.finishToken(offset, TokenType.Charset, keywordText);
                }
                return this.finishToken(offset, TokenType.AtKeyword, keywordText);
            }
            else {
                return this.finishToken(offset, TokenType.Delim);
            }
        }
        // hash
        if (this.stream.advanceIfChar(_HSH)) {
            content = ['#'];
            if (this._name(content)) {
                return this.finishToken(offset, TokenType.Hash, content.join(''));
            }
            else {
                return this.finishToken(offset, TokenType.Delim);
            }
        }
        // Important
        if (this.stream.advanceIfChar(_BNG)) {
            return this.finishToken(offset, TokenType.Exclamation);
        }
        // Numbers
        if (this._number()) {
            const pos = this.stream.pos();
            content = [this.stream.substring(offset, pos)];
            if (this.stream.advanceIfChar(_PRC)) {
                // Percentage 43%
                return this.finishToken(offset, TokenType.Percentage);
            }
            else if (this.ident(content)) {
                const dim = this.stream.substring(pos).toLowerCase();
                const tokenType = staticUnitTable[dim];
                if (typeof tokenType !== 'undefined') {
                    // Known dimension 43px
                    return this.finishToken(offset, tokenType, content.join(''));
                }
                else {
                    // Unknown dimension 43ft
                    return this.finishToken(offset, TokenType.Dimension, content.join(''));
                }
            }
            return this.finishToken(offset, TokenType.Num);
        }
        // String, BadString
        content = [];
        let tokenType = this._string(content);
        if (tokenType !== null) {
            return this.finishToken(offset, tokenType, content.join(''));
        }
        // single character tokens
        tokenType = staticTokenTable[this.stream.peekChar()];
        if (typeof tokenType !== 'undefined') {
            this.stream.advance(1);
            return this.finishToken(offset, tokenType);
        }
        // includes ~=
        if (this.stream.peekChar(0) === _TLD && this.stream.peekChar(1) === _EQS) {
            this.stream.advance(2);
            return this.finishToken(offset, TokenType.Includes);
        }
        // DashMatch |=
        if (this.stream.peekChar(0) === _PIP && this.stream.peekChar(1) === _EQS) {
            this.stream.advance(2);
            return this.finishToken(offset, TokenType.Dashmatch);
        }
        // Substring operator *=
        if (this.stream.peekChar(0) === _MUL && this.stream.peekChar(1) === _EQS) {
            this.stream.advance(2);
            return this.finishToken(offset, TokenType.SubstringOperator);
        }
        // Substring operator ^=
        if (this.stream.peekChar(0) === _HAT && this.stream.peekChar(1) === _EQS) {
            this.stream.advance(2);
            return this.finishToken(offset, TokenType.PrefixOperator);
        }
        // Substring operator $=
        if (this.stream.peekChar(0) === _DLR && this.stream.peekChar(1) === _EQS) {
            this.stream.advance(2);
            return this.finishToken(offset, TokenType.SuffixOperator);
        }
        // Delim
        this.stream.nextChar();
        return this.finishToken(offset, TokenType.Delim);
    }
    trivia() {
        while (true) {
            const offset = this.stream.pos();
            if (this._whitespace()) {
                if (!this.ignoreWhitespace) {
                    return this.finishToken(offset, TokenType.Whitespace);
                }
            }
            else if (this.comment()) {
                if (!this.ignoreComment) {
                    return this.finishToken(offset, TokenType.Comment);
                }
            }
            else {
                return null;
            }
        }
    }
    comment() {
        if (this.stream.advanceIfChars([_FSL, _MUL])) {
            let success = false, hot = false;
            this.stream.advanceWhileChar((ch) => {
                if (hot && ch === _FSL) {
                    success = true;
                    return false;
                }
                hot = ch === _MUL;
                return true;
            });
            if (success) {
                this.stream.advance(1);
            }
            return true;
        }
        return false;
    }
    _number() {
        let npeek = 0;
        let hasDot = false;
        const peekFirst = this.stream.peekChar();
        if (peekFirst === _PLS || peekFirst === _MIN) {
            npeek++;
        }
        if (this.stream.peekChar(npeek) === _DOT) {
            npeek++;
            hasDot = true;
        }
        const ch = this.stream.peekChar(npeek);
        if (ch >= _0 && ch <= _9) {
            this.stream.advance(npeek + 1);
            this.stream.advanceWhileChar((ch) => {
                return ch >= _0 && ch <= _9 || !hasDot && ch === _DOT;
            });
            return true;
        }
        return false;
    }
    _newline(result) {
        const ch = this.stream.peekChar();
        switch (ch) {
            case _CAR:
            case _LFD:
            case _NWL:
                this.stream.advance(1);
                result.push(String.fromCharCode(ch));
                if (ch === _CAR && this.stream.advanceIfChar(_NWL)) {
                    result.push('\n');
                }
                return true;
        }
        return false;
    }
    _escape(result, includeNewLines) {
        let ch = this.stream.peekChar();
        if (ch === _BSL) {
            this.stream.advance(1);
            ch = this.stream.peekChar();
            let hexNumCount = 0;
            while (hexNumCount < 6 && (ch >= _0 && ch <= _9 || ch >= _a && ch <= _f || ch >= _A && ch <= _F)) {
                this.stream.advance(1);
                ch = this.stream.peekChar();
                hexNumCount++;
            }
            if (hexNumCount > 0) {
                try {
                    const hexVal = parseInt(this.stream.substring(this.stream.pos() - hexNumCount), 16);
                    if (hexVal) {
                        result.push(String.fromCharCode(hexVal));
                    }
                }
                catch (e) {
                    // ignore
                }
                // optional whitespace or new line, not part of result text
                if (ch === _WSP || ch === _TAB) {
                    this.stream.advance(1);
                }
                else {
                    this._newline([]);
                }
                return true;
            }
            if (ch !== _CAR && ch !== _LFD && ch !== _NWL) {
                this.stream.advance(1);
                result.push(String.fromCharCode(ch));
                return true;
            }
            else if (includeNewLines) {
                return this._newline(result);
            }
        }
        return false;
    }
    _stringChar(closeQuote, result) {
        // not closeQuote, not backslash, not newline
        const ch = this.stream.peekChar();
        if (ch !== 0 && ch !== closeQuote && ch !== _BSL && ch !== _CAR && ch !== _LFD && ch !== _NWL) {
            this.stream.advance(1);
            result.push(String.fromCharCode(ch));
            return true;
        }
        return false;
    }
    _string(result) {
        if (this.stream.peekChar() === _SQO || this.stream.peekChar() === _DQO) {
            const closeQuote = this.stream.nextChar();
            result.push(String.fromCharCode(closeQuote));
            while (this._stringChar(closeQuote, result) || this._escape(result, true)) {
                // loop
            }
            if (this.stream.peekChar() === closeQuote) {
                this.stream.nextChar();
                result.push(String.fromCharCode(closeQuote));
                return TokenType.String;
            }
            else {
                return TokenType.BadString;
            }
        }
        return null;
    }
    _unquotedChar(result) {
        // not closeQuote, not backslash, not newline
        const ch = this.stream.peekChar();
        if (ch !== 0 && ch !== _BSL && ch !== _SQO && ch !== _DQO && ch !== _LPA && ch !== _RPA && ch !== _WSP && ch !== _TAB && ch !== _NWL && ch !== _LFD && ch !== _CAR) {
            this.stream.advance(1);
            result.push(String.fromCharCode(ch));
            return true;
        }
        return false;
    }
    _unquotedString(result) {
        let hasContent = false;
        while (this._unquotedChar(result) || this._escape(result)) {
            hasContent = true;
        }
        return hasContent;
    }
    _whitespace() {
        const n = this.stream.advanceWhileChar((ch) => {
            return ch === _WSP || ch === _TAB || ch === _NWL || ch === _LFD || ch === _CAR;
        });
        return n > 0;
    }
    _name(result) {
        let matched = false;
        while (this._identChar(result) || this._escape(result)) {
            matched = true;
        }
        return matched;
    }
    ident(result) {
        const pos = this.stream.pos();
        const hasMinus = this._minus(result);
        if (hasMinus) {
            if (this._minus(result) /* -- */ || this._identFirstChar(result) || this._escape(result)) {
                while (this._identChar(result) || this._escape(result)) {
                    // loop
                }
                return true;
            }
        }
        else if (this._identFirstChar(result) || this._escape(result)) {
            while (this._identChar(result) || this._escape(result)) {
                // loop
            }
            return true;
        }
        this.stream.goBackTo(pos);
        return false;
    }
    _identFirstChar(result) {
        const ch = this.stream.peekChar();
        if (ch === _USC || // _
            ch >= _a && ch <= _z || // a-z
            ch >= _A && ch <= _Z || // A-Z
            ch >= 0x80 && ch <= 0xFFFF) { // nonascii
            this.stream.advance(1);
            result.push(String.fromCharCode(ch));
            return true;
        }
        return false;
    }
    _minus(result) {
        const ch = this.stream.peekChar();
        if (ch === _MIN) {
            this.stream.advance(1);
            result.push(String.fromCharCode(ch));
            return true;
        }
        return false;
    }
    _identChar(result) {
        const ch = this.stream.peekChar();
        if (ch === _USC || // _
            ch === _MIN || // -
            ch >= _a && ch <= _z || // a-z
            ch >= _A && ch <= _Z || // A-Z
            ch >= _0 && ch <= _9 || // 0/9
            ch >= 0x80 && ch <= 0xFFFF) { // nonascii
            this.stream.advance(1);
            result.push(String.fromCharCode(ch));
            return true;
        }
        return false;
    }
    _unicodeRange() {
        // follow https://www.w3.org/TR/CSS21/syndata.html#tokenization and https://www.w3.org/TR/css-syntax-3/#urange-syntax
        // assume u has already been parsed
        if (this.stream.advanceIfChar(_PLS)) {
            const isHexDigit = (ch) => (ch >= _0 && ch <= _9 || ch >= _a && ch <= _f || ch >= _A && ch <= _F);
            const codePoints = this.stream.advanceWhileChar(isHexDigit) + this.stream.advanceWhileChar(ch => ch === _QSM);
            if (codePoints >= 1 && codePoints <= 6) {
                if (this.stream.advanceIfChar(_MIN)) {
                    const digits = this.stream.advanceWhileChar(isHexDigit);
                    if (digits >= 1 && digits <= 6) {
                        return true;
                    }
                }
                else {
                    return true;
                }
            }
        }
        return false;
    }
}
