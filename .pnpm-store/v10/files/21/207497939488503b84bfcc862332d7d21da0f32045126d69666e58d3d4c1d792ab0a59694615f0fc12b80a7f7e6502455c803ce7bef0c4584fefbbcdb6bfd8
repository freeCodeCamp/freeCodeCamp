'use strict';

const types = require('./types.cjs');
const charCodeDefinitions = require('./char-code-definitions.cjs');
const utils = require('./utils.cjs');
const names = require('./names.cjs');
const OffsetToLocation = require('./OffsetToLocation.cjs');
const TokenStream = require('./TokenStream.cjs');

function tokenize(source, onToken) {
    function getCharCode(offset) {
        return offset < sourceLength ? source.charCodeAt(offset) : 0;
    }

    // § 4.3.3. Consume a numeric token
    function consumeNumericToken() {
        // Consume a number and let number be the result.
        offset = utils.consumeNumber(source, offset);

        // If the next 3 input code points would start an identifier, then:
        if (charCodeDefinitions.isIdentifierStart(getCharCode(offset), getCharCode(offset + 1), getCharCode(offset + 2))) {
            // Create a <dimension-token> with the same value and type flag as number, and a unit set initially to the empty string.
            // Consume a name. Set the <dimension-token>’s unit to the returned value.
            // Return the <dimension-token>.
            type = types.Dimension;
            offset = utils.consumeName(source, offset);
            return;
        }

        // Otherwise, if the next input code point is U+0025 PERCENTAGE SIGN (%), consume it.
        if (getCharCode(offset) === 0x0025) {
            // Create a <percentage-token> with the same value as number, and return it.
            type = types.Percentage;
            offset++;
            return;
        }

        // Otherwise, create a <number-token> with the same value and type flag as number, and return it.
        type = types.Number;
    }

    // § 4.3.4. Consume an ident-like token
    function consumeIdentLikeToken() {
        const nameStartOffset = offset;

        // Consume a name, and let string be the result.
        offset = utils.consumeName(source, offset);

        // If string’s value is an ASCII case-insensitive match for "url",
        // and the next input code point is U+0028 LEFT PARENTHESIS ((), consume it.
        if (utils.cmpStr(source, nameStartOffset, offset, 'url') && getCharCode(offset) === 0x0028) {
            // While the next two input code points are whitespace, consume the next input code point.
            offset = utils.findWhiteSpaceEnd(source, offset + 1);

            // If the next one or two input code points are U+0022 QUOTATION MARK ("), U+0027 APOSTROPHE ('),
            // or whitespace followed by U+0022 QUOTATION MARK (") or U+0027 APOSTROPHE ('),
            // then create a <function-token> with its value set to string and return it.
            if (getCharCode(offset) === 0x0022 ||
                getCharCode(offset) === 0x0027) {
                type = types.Function;
                offset = nameStartOffset + 4;
                return;
            }

            // Otherwise, consume a url token, and return it.
            consumeUrlToken();
            return;
        }

        // Otherwise, if the next input code point is U+0028 LEFT PARENTHESIS ((), consume it.
        // Create a <function-token> with its value set to string and return it.
        if (getCharCode(offset) === 0x0028) {
            type = types.Function;
            offset++;
            return;
        }

        // Otherwise, create an <ident-token> with its value set to string and return it.
        type = types.Ident;
    }

    // § 4.3.5. Consume a string token
    function consumeStringToken(endingCodePoint) {
        // This algorithm may be called with an ending code point, which denotes the code point
        // that ends the string. If an ending code point is not specified,
        // the current input code point is used.
        if (!endingCodePoint) {
            endingCodePoint = getCharCode(offset++);
        }

        // Initially create a <string-token> with its value set to the empty string.
        type = types.String;

        // Repeatedly consume the next input code point from the stream:
        for (; offset < source.length; offset++) {
            const code = source.charCodeAt(offset);

            switch (charCodeDefinitions.charCodeCategory(code)) {
                // ending code point
                case endingCodePoint:
                    // Return the <string-token>.
                    offset++;
                    return;

                    // EOF
                    // case EofCategory:
                    // This is a parse error. Return the <string-token>.
                    // return;

                // newline
                case charCodeDefinitions.WhiteSpaceCategory:
                    if (charCodeDefinitions.isNewline(code)) {
                        // This is a parse error. Reconsume the current input code point,
                        // create a <bad-string-token>, and return it.
                        offset += utils.getNewlineLength(source, offset, code);
                        type = types.BadString;
                        return;
                    }
                    break;

                // U+005C REVERSE SOLIDUS (\)
                case 0x005C:
                    // If the next input code point is EOF, do nothing.
                    if (offset === source.length - 1) {
                        break;
                    }

                    const nextCode = getCharCode(offset + 1);

                    // Otherwise, if the next input code point is a newline, consume it.
                    if (charCodeDefinitions.isNewline(nextCode)) {
                        offset += utils.getNewlineLength(source, offset + 1, nextCode);
                    } else if (charCodeDefinitions.isValidEscape(code, nextCode)) {
                        // Otherwise, (the stream starts with a valid escape) consume
                        // an escaped code point and append the returned code point to
                        // the <string-token>’s value.
                        offset = utils.consumeEscaped(source, offset) - 1;
                    }
                    break;

                // anything else
                // Append the current input code point to the <string-token>’s value.
            }
        }
    }

    // § 4.3.6. Consume a url token
    // Note: This algorithm assumes that the initial "url(" has already been consumed.
    // This algorithm also assumes that it’s being called to consume an "unquoted" value, like url(foo).
    // A quoted value, like url("foo"), is parsed as a <function-token>. Consume an ident-like token
    // automatically handles this distinction; this algorithm shouldn’t be called directly otherwise.
    function consumeUrlToken() {
        // Initially create a <url-token> with its value set to the empty string.
        type = types.Url;

        // Consume as much whitespace as possible.
        offset = utils.findWhiteSpaceEnd(source, offset);

        // Repeatedly consume the next input code point from the stream:
        for (; offset < source.length; offset++) {
            const code = source.charCodeAt(offset);

            switch (charCodeDefinitions.charCodeCategory(code)) {
                // U+0029 RIGHT PARENTHESIS ())
                case 0x0029:
                    // Return the <url-token>.
                    offset++;
                    return;

                    // EOF
                    // case EofCategory:
                    // This is a parse error. Return the <url-token>.
                    // return;

                // whitespace
                case charCodeDefinitions.WhiteSpaceCategory:
                    // Consume as much whitespace as possible.
                    offset = utils.findWhiteSpaceEnd(source, offset);

                    // If the next input code point is U+0029 RIGHT PARENTHESIS ()) or EOF,
                    // consume it and return the <url-token>
                    // (if EOF was encountered, this is a parse error);
                    if (getCharCode(offset) === 0x0029 || offset >= source.length) {
                        if (offset < source.length) {
                            offset++;
                        }
                        return;
                    }

                    // otherwise, consume the remnants of a bad url, create a <bad-url-token>,
                    // and return it.
                    offset = utils.consumeBadUrlRemnants(source, offset);
                    type = types.BadUrl;
                    return;

                // U+0022 QUOTATION MARK (")
                // U+0027 APOSTROPHE (')
                // U+0028 LEFT PARENTHESIS (()
                // non-printable code point
                case 0x0022:
                case 0x0027:
                case 0x0028:
                case charCodeDefinitions.NonPrintableCategory:
                    // This is a parse error. Consume the remnants of a bad url,
                    // create a <bad-url-token>, and return it.
                    offset = utils.consumeBadUrlRemnants(source, offset);
                    type = types.BadUrl;
                    return;

                // U+005C REVERSE SOLIDUS (\)
                case 0x005C:
                    // If the stream starts with a valid escape, consume an escaped code point and
                    // append the returned code point to the <url-token>’s value.
                    if (charCodeDefinitions.isValidEscape(code, getCharCode(offset + 1))) {
                        offset = utils.consumeEscaped(source, offset) - 1;
                        break;
                    }

                    // Otherwise, this is a parse error. Consume the remnants of a bad url,
                    // create a <bad-url-token>, and return it.
                    offset = utils.consumeBadUrlRemnants(source, offset);
                    type = types.BadUrl;
                    return;

                // anything else
                // Append the current input code point to the <url-token>’s value.
            }
        }
    }

    // ensure source is a string
    source = String(source || '');

    const sourceLength = source.length;
    let start = charCodeDefinitions.isBOM(getCharCode(0));
    let offset = start;
    let type;

    // https://drafts.csswg.org/css-syntax-3/#consume-token
    // § 4.3.1. Consume a token
    while (offset < sourceLength) {
        const code = source.charCodeAt(offset);

        switch (charCodeDefinitions.charCodeCategory(code)) {
            // whitespace
            case charCodeDefinitions.WhiteSpaceCategory:
                // Consume as much whitespace as possible. Return a <whitespace-token>.
                type = types.WhiteSpace;
                offset = utils.findWhiteSpaceEnd(source, offset + 1);
                break;

            // U+0022 QUOTATION MARK (")
            case 0x0022:
                // Consume a string token and return it.
                consumeStringToken();
                break;

            // U+0023 NUMBER SIGN (#)
            case 0x0023:
                // If the next input code point is a name code point or the next two input code points are a valid escape, then:
                if (charCodeDefinitions.isName(getCharCode(offset + 1)) || charCodeDefinitions.isValidEscape(getCharCode(offset + 1), getCharCode(offset + 2))) {
                    // Create a <hash-token>.
                    type = types.Hash;

                    // If the next 3 input code points would start an identifier, set the <hash-token>’s type flag to "id".
                    // if (isIdentifierStart(getCharCode(offset + 1), getCharCode(offset + 2), getCharCode(offset + 3))) {
                    //     // TODO: set id flag
                    // }

                    // Consume a name, and set the <hash-token>’s value to the returned string.
                    offset = utils.consumeName(source, offset + 1);

                    // Return the <hash-token>.
                } else {
                    // Otherwise, return a <delim-token> with its value set to the current input code point.
                    type = types.Delim;
                    offset++;
                }

                break;

            // U+0027 APOSTROPHE (')
            case 0x0027:
                // Consume a string token and return it.
                consumeStringToken();
                break;

            // U+0028 LEFT PARENTHESIS (()
            case 0x0028:
                // Return a <(-token>.
                type = types.LeftParenthesis;
                offset++;
                break;

            // U+0029 RIGHT PARENTHESIS ())
            case 0x0029:
                // Return a <)-token>.
                type = types.RightParenthesis;
                offset++;
                break;

            // U+002B PLUS SIGN (+)
            case 0x002B:
                // If the input stream starts with a number, ...
                if (charCodeDefinitions.isNumberStart(code, getCharCode(offset + 1), getCharCode(offset + 2))) {
                    // ... reconsume the current input code point, consume a numeric token, and return it.
                    consumeNumericToken();
                } else {
                    // Otherwise, return a <delim-token> with its value set to the current input code point.
                    type = types.Delim;
                    offset++;
                }
                break;

            // U+002C COMMA (,)
            case 0x002C:
                // Return a <comma-token>.
                type = types.Comma;
                offset++;
                break;

            // U+002D HYPHEN-MINUS (-)
            case 0x002D:
                // If the input stream starts with a number, reconsume the current input code point, consume a numeric token, and return it.
                if (charCodeDefinitions.isNumberStart(code, getCharCode(offset + 1), getCharCode(offset + 2))) {
                    consumeNumericToken();
                } else {
                    // Otherwise, if the next 2 input code points are U+002D HYPHEN-MINUS U+003E GREATER-THAN SIGN (->), consume them and return a <CDC-token>.
                    if (getCharCode(offset + 1) === 0x002D &&
                        getCharCode(offset + 2) === 0x003E) {
                        type = types.CDC;
                        offset = offset + 3;
                    } else {
                        // Otherwise, if the input stream starts with an identifier, ...
                        if (charCodeDefinitions.isIdentifierStart(code, getCharCode(offset + 1), getCharCode(offset + 2))) {
                            // ... reconsume the current input code point, consume an ident-like token, and return it.
                            consumeIdentLikeToken();
                        } else {
                            // Otherwise, return a <delim-token> with its value set to the current input code point.
                            type = types.Delim;
                            offset++;
                        }
                    }
                }
                break;

            // U+002E FULL STOP (.)
            case 0x002E:
                // If the input stream starts with a number, ...
                if (charCodeDefinitions.isNumberStart(code, getCharCode(offset + 1), getCharCode(offset + 2))) {
                    // ... reconsume the current input code point, consume a numeric token, and return it.
                    consumeNumericToken();
                } else {
                    // Otherwise, return a <delim-token> with its value set to the current input code point.
                    type = types.Delim;
                    offset++;
                }

                break;

            // U+002F SOLIDUS (/)
            case 0x002F:
                // If the next two input code point are U+002F SOLIDUS (/) followed by a U+002A ASTERISK (*),
                if (getCharCode(offset + 1) === 0x002A) {
                    // ... consume them and all following code points up to and including the first U+002A ASTERISK (*)
                    // followed by a U+002F SOLIDUS (/), or up to an EOF code point.
                    type = types.Comment;
                    offset = source.indexOf('*/', offset + 2);
                    offset = offset === -1 ? source.length : offset + 2;
                } else {
                    type = types.Delim;
                    offset++;
                }
                break;

            // U+003A COLON (:)
            case 0x003A:
                // Return a <colon-token>.
                type = types.Colon;
                offset++;
                break;

            // U+003B SEMICOLON (;)
            case 0x003B:
                // Return a <semicolon-token>.
                type = types.Semicolon;
                offset++;
                break;

            // U+003C LESS-THAN SIGN (<)
            case 0x003C:
                // If the next 3 input code points are U+0021 EXCLAMATION MARK U+002D HYPHEN-MINUS U+002D HYPHEN-MINUS (!--), ...
                if (getCharCode(offset + 1) === 0x0021 &&
                    getCharCode(offset + 2) === 0x002D &&
                    getCharCode(offset + 3) === 0x002D) {
                    // ... consume them and return a <CDO-token>.
                    type = types.CDO;
                    offset = offset + 4;
                } else {
                    // Otherwise, return a <delim-token> with its value set to the current input code point.
                    type = types.Delim;
                    offset++;
                }

                break;

            // U+0040 COMMERCIAL AT (@)
            case 0x0040:
                // If the next 3 input code points would start an identifier, ...
                if (charCodeDefinitions.isIdentifierStart(getCharCode(offset + 1), getCharCode(offset + 2), getCharCode(offset + 3))) {
                    // ... consume a name, create an <at-keyword-token> with its value set to the returned value, and return it.
                    type = types.AtKeyword;
                    offset = utils.consumeName(source, offset + 1);
                } else {
                    // Otherwise, return a <delim-token> with its value set to the current input code point.
                    type = types.Delim;
                    offset++;
                }

                break;

            // U+005B LEFT SQUARE BRACKET ([)
            case 0x005B:
                // Return a <[-token>.
                type = types.LeftSquareBracket;
                offset++;
                break;

            // U+005C REVERSE SOLIDUS (\)
            case 0x005C:
                // If the input stream starts with a valid escape, ...
                if (charCodeDefinitions.isValidEscape(code, getCharCode(offset + 1))) {
                    // ... reconsume the current input code point, consume an ident-like token, and return it.
                    consumeIdentLikeToken();
                } else {
                    // Otherwise, this is a parse error. Return a <delim-token> with its value set to the current input code point.
                    type = types.Delim;
                    offset++;
                }
                break;

            // U+005D RIGHT SQUARE BRACKET (])
            case 0x005D:
                // Return a <]-token>.
                type = types.RightSquareBracket;
                offset++;
                break;

            // U+007B LEFT CURLY BRACKET ({)
            case 0x007B:
                // Return a <{-token>.
                type = types.LeftCurlyBracket;
                offset++;
                break;

            // U+007D RIGHT CURLY BRACKET (})
            case 0x007D:
                // Return a <}-token>.
                type = types.RightCurlyBracket;
                offset++;
                break;

            // digit
            case charCodeDefinitions.DigitCategory:
                // Reconsume the current input code point, consume a numeric token, and return it.
                consumeNumericToken();
                break;

            // name-start code point
            case charCodeDefinitions.NameStartCategory:
                // Reconsume the current input code point, consume an ident-like token, and return it.
                consumeIdentLikeToken();
                break;

                // EOF
                // case EofCategory:
                // Return an <EOF-token>.
                // break;

            // anything else
            default:
                // Return a <delim-token> with its value set to the current input code point.
                type = types.Delim;
                offset++;
        }

        // put token to stream
        onToken(type, start, start = offset);
    }
}

exports.AtKeyword = types.AtKeyword;
exports.BadString = types.BadString;
exports.BadUrl = types.BadUrl;
exports.CDC = types.CDC;
exports.CDO = types.CDO;
exports.Colon = types.Colon;
exports.Comma = types.Comma;
exports.Comment = types.Comment;
exports.Delim = types.Delim;
exports.Dimension = types.Dimension;
exports.EOF = types.EOF;
exports.Function = types.Function;
exports.Hash = types.Hash;
exports.Ident = types.Ident;
exports.LeftCurlyBracket = types.LeftCurlyBracket;
exports.LeftParenthesis = types.LeftParenthesis;
exports.LeftSquareBracket = types.LeftSquareBracket;
exports.Number = types.Number;
exports.Percentage = types.Percentage;
exports.RightCurlyBracket = types.RightCurlyBracket;
exports.RightParenthesis = types.RightParenthesis;
exports.RightSquareBracket = types.RightSquareBracket;
exports.Semicolon = types.Semicolon;
exports.String = types.String;
exports.Url = types.Url;
exports.WhiteSpace = types.WhiteSpace;
exports.tokenTypes = types;
exports.DigitCategory = charCodeDefinitions.DigitCategory;
exports.EofCategory = charCodeDefinitions.EofCategory;
exports.NameStartCategory = charCodeDefinitions.NameStartCategory;
exports.NonPrintableCategory = charCodeDefinitions.NonPrintableCategory;
exports.WhiteSpaceCategory = charCodeDefinitions.WhiteSpaceCategory;
exports.charCodeCategory = charCodeDefinitions.charCodeCategory;
exports.isBOM = charCodeDefinitions.isBOM;
exports.isDigit = charCodeDefinitions.isDigit;
exports.isHexDigit = charCodeDefinitions.isHexDigit;
exports.isIdentifierStart = charCodeDefinitions.isIdentifierStart;
exports.isLetter = charCodeDefinitions.isLetter;
exports.isLowercaseLetter = charCodeDefinitions.isLowercaseLetter;
exports.isName = charCodeDefinitions.isName;
exports.isNameStart = charCodeDefinitions.isNameStart;
exports.isNewline = charCodeDefinitions.isNewline;
exports.isNonAscii = charCodeDefinitions.isNonAscii;
exports.isNonPrintable = charCodeDefinitions.isNonPrintable;
exports.isNumberStart = charCodeDefinitions.isNumberStart;
exports.isUppercaseLetter = charCodeDefinitions.isUppercaseLetter;
exports.isValidEscape = charCodeDefinitions.isValidEscape;
exports.isWhiteSpace = charCodeDefinitions.isWhiteSpace;
exports.cmpChar = utils.cmpChar;
exports.cmpStr = utils.cmpStr;
exports.consumeBadUrlRemnants = utils.consumeBadUrlRemnants;
exports.consumeEscaped = utils.consumeEscaped;
exports.consumeName = utils.consumeName;
exports.consumeNumber = utils.consumeNumber;
exports.decodeEscaped = utils.decodeEscaped;
exports.findDecimalNumberEnd = utils.findDecimalNumberEnd;
exports.findWhiteSpaceEnd = utils.findWhiteSpaceEnd;
exports.findWhiteSpaceStart = utils.findWhiteSpaceStart;
exports.getNewlineLength = utils.getNewlineLength;
exports.tokenNames = names;
exports.OffsetToLocation = OffsetToLocation.OffsetToLocation;
exports.TokenStream = TokenStream.TokenStream;
exports.tokenize = tokenize;
