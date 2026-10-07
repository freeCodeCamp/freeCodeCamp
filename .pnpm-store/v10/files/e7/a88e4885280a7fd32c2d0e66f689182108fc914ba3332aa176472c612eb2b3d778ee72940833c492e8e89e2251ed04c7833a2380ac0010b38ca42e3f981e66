import { buildReplaceStringWithCasePreserved } from '../../../../base/common/search.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Assigned when the replace pattern is entirely static.
 */
class StaticValueReplacePattern {
    constructor(staticValue) {
        this.staticValue = staticValue;
        this.kind = 0 /* ReplacePatternKind.StaticValue */;
    }
}
/**
 * Assigned when the replace pattern has replacement patterns.
 */
class DynamicPiecesReplacePattern {
    constructor(pieces) {
        this.pieces = pieces;
        this.kind = 1 /* ReplacePatternKind.DynamicPieces */;
    }
}
class ReplacePattern {
    static fromStaticValue(value) {
        return new ReplacePattern([ReplacePiece.staticValue(value)]);
    }
    get hasReplacementPatterns() {
        return (this._state.kind === 1 /* ReplacePatternKind.DynamicPieces */);
    }
    constructor(pieces) {
        if (!pieces || pieces.length === 0) {
            this._state = new StaticValueReplacePattern('');
        }
        else if (pieces.length === 1 && pieces[0].staticValue !== null) {
            this._state = new StaticValueReplacePattern(pieces[0].staticValue);
        }
        else {
            this._state = new DynamicPiecesReplacePattern(pieces);
        }
    }
    buildReplaceString(matches, preserveCase) {
        if (this._state.kind === 0 /* ReplacePatternKind.StaticValue */) {
            if (preserveCase) {
                return buildReplaceStringWithCasePreserved(matches, this._state.staticValue);
            }
            else {
                return this._state.staticValue;
            }
        }
        let result = '';
        for (let i = 0, len = this._state.pieces.length; i < len; i++) {
            const piece = this._state.pieces[i];
            if (piece.staticValue !== null) {
                // static value ReplacePiece
                result += piece.staticValue;
                continue;
            }
            // match index ReplacePiece
            let match = ReplacePattern._substitute(piece.matchIndex, matches);
            if (piece.caseOps !== null && piece.caseOps.length > 0) {
                const repl = [];
                const lenOps = piece.caseOps.length;
                let opIdx = 0;
                for (let idx = 0, len = match.length; idx < len; idx++) {
                    if (opIdx >= lenOps) {
                        repl.push(match.slice(idx));
                        break;
                    }
                    switch (piece.caseOps[opIdx]) {
                        case 'U':
                            repl.push(match[idx].toUpperCase());
                            break;
                        case 'u':
                            repl.push(match[idx].toUpperCase());
                            opIdx++;
                            break;
                        case 'L':
                            repl.push(match[idx].toLowerCase());
                            break;
                        case 'l':
                            repl.push(match[idx].toLowerCase());
                            opIdx++;
                            break;
                        default:
                            repl.push(match[idx]);
                    }
                }
                match = repl.join('');
            }
            result += match;
        }
        return result;
    }
    static _substitute(matchIndex, matches) {
        if (matches === null) {
            return '';
        }
        if (matchIndex === 0) {
            return matches[0];
        }
        let remainder = '';
        while (matchIndex > 0) {
            if (matchIndex < matches.length) {
                // A match can be undefined
                const match = (matches[matchIndex] || '');
                return match + remainder;
            }
            remainder = String(matchIndex % 10) + remainder;
            matchIndex = Math.floor(matchIndex / 10);
        }
        return '$' + remainder;
    }
}
/**
 * A replace piece can either be a static string or an index to a specific match.
 */
class ReplacePiece {
    static staticValue(value) {
        return new ReplacePiece(value, -1, null);
    }
    static caseOps(index, caseOps) {
        return new ReplacePiece(null, index, caseOps);
    }
    constructor(staticValue, matchIndex, caseOps) {
        this.staticValue = staticValue;
        this.matchIndex = matchIndex;
        if (!caseOps || caseOps.length === 0) {
            this.caseOps = null;
        }
        else {
            this.caseOps = caseOps.slice(0);
        }
    }
}
class ReplacePieceBuilder {
    constructor(source) {
        this._source = source;
        this._lastCharIndex = 0;
        this._result = [];
        this._resultLen = 0;
        this._currentStaticPiece = '';
    }
    emitUnchanged(toCharIndex) {
        this._emitStatic(this._source.substring(this._lastCharIndex, toCharIndex));
        this._lastCharIndex = toCharIndex;
    }
    emitStatic(value, toCharIndex) {
        this._emitStatic(value);
        this._lastCharIndex = toCharIndex;
    }
    _emitStatic(value) {
        if (value.length === 0) {
            return;
        }
        this._currentStaticPiece += value;
    }
    emitMatchIndex(index, toCharIndex, caseOps) {
        if (this._currentStaticPiece.length !== 0) {
            this._result[this._resultLen++] = ReplacePiece.staticValue(this._currentStaticPiece);
            this._currentStaticPiece = '';
        }
        this._result[this._resultLen++] = ReplacePiece.caseOps(index, caseOps);
        this._lastCharIndex = toCharIndex;
    }
    finalize() {
        this.emitUnchanged(this._source.length);
        if (this._currentStaticPiece.length !== 0) {
            this._result[this._resultLen++] = ReplacePiece.staticValue(this._currentStaticPiece);
            this._currentStaticPiece = '';
        }
        return new ReplacePattern(this._result);
    }
}
/**
 * \n			=> inserts a LF
 * \t			=> inserts a TAB
 * \\			=> inserts a "\".
 * \u			=> upper-cases one character in a match.
 * \U			=> upper-cases ALL remaining characters in a match.
 * \l			=> lower-cases one character in a match.
 * \L			=> lower-cases ALL remaining characters in a match.
 * $$			=> inserts a "$".
 * $& and $0	=> inserts the matched substring.
 * $n			=> Where n is a non-negative integer lesser than 100, inserts the nth parenthesized submatch string
 * everything else stays untouched
 *
 * Also see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_string_as_a_parameter
 */
function parseReplaceString(replaceString) {
    if (!replaceString || replaceString.length === 0) {
        return new ReplacePattern(null);
    }
    const caseOps = [];
    const result = new ReplacePieceBuilder(replaceString);
    for (let i = 0, len = replaceString.length; i < len; i++) {
        const chCode = replaceString.charCodeAt(i);
        if (chCode === 92 /* CharCode.Backslash */) {
            // move to next char
            i++;
            if (i >= len) {
                // string ends with a \
                break;
            }
            const nextChCode = replaceString.charCodeAt(i);
            // let replaceWithCharacter: string | null = null;
            switch (nextChCode) {
                case 92 /* CharCode.Backslash */:
                    // \\ => inserts a "\"
                    result.emitUnchanged(i - 1);
                    result.emitStatic('\\', i + 1);
                    break;
                case 110 /* CharCode.n */:
                    // \n => inserts a LF
                    result.emitUnchanged(i - 1);
                    result.emitStatic('\n', i + 1);
                    break;
                case 116 /* CharCode.t */:
                    // \t => inserts a TAB
                    result.emitUnchanged(i - 1);
                    result.emitStatic('\t', i + 1);
                    break;
                // Case modification of string replacements, patterned after Boost, but only applied
                // to the replacement text, not subsequent content.
                case 117 /* CharCode.u */:
                // \u => upper-cases one character.
                case 85 /* CharCode.U */:
                // \U => upper-cases ALL following characters.
                case 108 /* CharCode.l */:
                // \l => lower-cases one character.
                case 76 /* CharCode.L */:
                    // \L => lower-cases ALL following characters.
                    result.emitUnchanged(i - 1);
                    result.emitStatic('', i + 1);
                    caseOps.push(String.fromCharCode(nextChCode));
                    break;
            }
            continue;
        }
        if (chCode === 36 /* CharCode.DollarSign */) {
            // move to next char
            i++;
            if (i >= len) {
                // string ends with a $
                break;
            }
            const nextChCode = replaceString.charCodeAt(i);
            if (nextChCode === 36 /* CharCode.DollarSign */) {
                // $$ => inserts a "$"
                result.emitUnchanged(i - 1);
                result.emitStatic('$', i + 1);
                continue;
            }
            if (nextChCode === 48 /* CharCode.Digit0 */ || nextChCode === 38 /* CharCode.Ampersand */) {
                // $& and $0 => inserts the matched substring.
                result.emitUnchanged(i - 1);
                result.emitMatchIndex(0, i + 1, caseOps);
                caseOps.length = 0;
                continue;
            }
            if (49 /* CharCode.Digit1 */ <= nextChCode && nextChCode <= 57 /* CharCode.Digit9 */) {
                // $n
                let matchIndex = nextChCode - 48 /* CharCode.Digit0 */;
                // peek next char to probe for $nn
                if (i + 1 < len) {
                    const nextNextChCode = replaceString.charCodeAt(i + 1);
                    if (48 /* CharCode.Digit0 */ <= nextNextChCode && nextNextChCode <= 57 /* CharCode.Digit9 */) {
                        // $nn
                        // move to next char
                        i++;
                        matchIndex = matchIndex * 10 + (nextNextChCode - 48 /* CharCode.Digit0 */);
                        result.emitUnchanged(i - 2);
                        result.emitMatchIndex(matchIndex, i + 1, caseOps);
                        caseOps.length = 0;
                        continue;
                    }
                }
                result.emitUnchanged(i - 1);
                result.emitMatchIndex(matchIndex, i + 1, caseOps);
                caseOps.length = 0;
                continue;
            }
        }
    }
    return result.finalize();
}

export { ReplacePattern, ReplacePiece, parseReplaceString };
