"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenizerBlockMode = void 0;
exports.readFrom = readFrom;
function charSizeAt(text, pos) {
    return text[pos] >= '\uD800' && text[pos] <= '\uDBFF' && text[pos + 1] >= '\uDC00' && text[pos + 1] <= '\uDFFF'
        ? 2
        : 1;
}
function isHexaDigit(char) {
    return (char >= '0' && char <= '9') || (char >= 'a' && char <= 'f') || (char >= 'A' && char <= 'F');
}
function isDigit(char) {
    return char >= '0' && char <= '9';
}
function squaredBracketBlockContentEndFrom(text, from) {
    for (let index = from; index !== text.length; ++index) {
        const char = text[index];
        if (char === '\\') {
            index += 1;
        }
        else if (char === ']') {
            return index;
        }
    }
    throw new Error(`Missing closing ']'`);
}
function parenthesisBlockContentEndFrom(text, from) {
    let numExtraOpened = 0;
    for (let index = from; index !== text.length; ++index) {
        const char = text[index];
        if (char === '\\') {
            index += 1;
        }
        else if (char === ')') {
            if (numExtraOpened === 0) {
                return index;
            }
            numExtraOpened -= 1;
        }
        else if (char === '[') {
            index = squaredBracketBlockContentEndFrom(text, index);
        }
        else if (char === '(') {
            numExtraOpened += 1;
        }
    }
    throw new Error(`Missing closing ')'`);
}
function curlyBracketBlockContentEndFrom(text, from) {
    let foundComma = false;
    for (let index = from; index !== text.length; ++index) {
        const char = text[index];
        if (isDigit(char)) {
        }
        else if (from === index) {
            return -1;
        }
        else if (char === ',') {
            if (foundComma) {
                return -1;
            }
            foundComma = true;
        }
        else if (char === '}') {
            return index;
        }
        else {
            return -1;
        }
    }
    return -1;
}
var TokenizerBlockMode;
(function (TokenizerBlockMode) {
    TokenizerBlockMode[TokenizerBlockMode["Full"] = 0] = "Full";
    TokenizerBlockMode[TokenizerBlockMode["Character"] = 1] = "Character";
})(TokenizerBlockMode || (exports.TokenizerBlockMode = TokenizerBlockMode = {}));
function blockEndFrom(text, from, unicodeMode, mode) {
    switch (text[from]) {
        case '[': {
            if (mode === TokenizerBlockMode.Character) {
                return from + 1;
            }
            return squaredBracketBlockContentEndFrom(text, from + 1) + 1;
        }
        case '{': {
            if (mode === TokenizerBlockMode.Character) {
                return from + 1;
            }
            const foundEnd = curlyBracketBlockContentEndFrom(text, from + 1);
            if (foundEnd === -1) {
                return from + 1;
            }
            return foundEnd + 1;
        }
        case '(': {
            if (mode === TokenizerBlockMode.Character) {
                return from + 1;
            }
            return parenthesisBlockContentEndFrom(text, from + 1) + 1;
        }
        case ']':
        case '}':
        case ')':
            return from + 1;
        case '\\': {
            const next1 = text[from + 1];
            switch (next1) {
                case 'x':
                    if (isHexaDigit(text[from + 2]) && isHexaDigit(text[from + 3])) {
                        return from + 4;
                    }
                    throw new Error(`Unexpected token '${text.substring(from, from + 4)}' found`);
                case 'u':
                    if (text[from + 2] === '{') {
                        if (!unicodeMode) {
                            return from + 2;
                        }
                        if (text[from + 4] === '}') {
                            if (isHexaDigit(text[from + 3])) {
                                return from + 5;
                            }
                            throw new Error(`Unexpected token '${text.substring(from, from + 5)}' found`);
                        }
                        if (text[from + 5] === '}') {
                            if (isHexaDigit(text[from + 3]) && isHexaDigit(text[from + 4])) {
                                return from + 6;
                            }
                            throw new Error(`Unexpected token '${text.substring(from, from + 6)}' found`);
                        }
                        if (text[from + 6] === '}') {
                            if (isHexaDigit(text[from + 3]) && isHexaDigit(text[from + 4]) && isHexaDigit(text[from + 5])) {
                                return from + 7;
                            }
                            throw new Error(`Unexpected token '${text.substring(from, from + 7)}' found`);
                        }
                        if (text[from + 7] === '}') {
                            if (isHexaDigit(text[from + 3]) &&
                                isHexaDigit(text[from + 4]) &&
                                isHexaDigit(text[from + 5]) &&
                                isHexaDigit(text[from + 6])) {
                                return from + 8;
                            }
                            throw new Error(`Unexpected token '${text.substring(from, from + 8)}' found`);
                        }
                        if (text[from + 8] === '}' &&
                            isHexaDigit(text[from + 3]) &&
                            isHexaDigit(text[from + 4]) &&
                            isHexaDigit(text[from + 5]) &&
                            isHexaDigit(text[from + 6]) &&
                            isHexaDigit(text[from + 7])) {
                            return from + 9;
                        }
                        throw new Error(`Unexpected token '${text.substring(from, from + 9)}' found`);
                    }
                    if (isHexaDigit(text[from + 2]) &&
                        isHexaDigit(text[from + 3]) &&
                        isHexaDigit(text[from + 4]) &&
                        isHexaDigit(text[from + 5])) {
                        return from + 6;
                    }
                    throw new Error(`Unexpected token '${text.substring(from, from + 6)}' found`);
                case 'p':
                case 'P': {
                    if (!unicodeMode) {
                        return from + 2;
                    }
                    let subIndex = from + 2;
                    for (; subIndex < text.length && text[subIndex] !== '}'; subIndex += text[subIndex] === '\\' ? 2 : 1) {
                    }
                    if (text[subIndex] !== '}') {
                        throw new Error(`Invalid \\P definition`);
                    }
                    return subIndex + 1;
                }
                case 'k': {
                    let subIndex = from + 2;
                    for (; subIndex < text.length && text[subIndex] !== '>'; ++subIndex) {
                    }
                    if (text[subIndex] !== '>') {
                        if (!unicodeMode) {
                            return from + 2;
                        }
                        throw new Error(`Invalid \\k definition`);
                    }
                    return subIndex + 1;
                }
                default: {
                    if (isDigit(next1)) {
                        const maxIndex = unicodeMode ? text.length : Math.min(from + 4, text.length);
                        let subIndex = from + 2;
                        for (; subIndex < maxIndex && isDigit(text[subIndex]); ++subIndex) {
                        }
                        return subIndex;
                    }
                    const charSize = unicodeMode ? charSizeAt(text, from + 1) : 1;
                    return from + charSize + 1;
                }
            }
        }
        default: {
            const charSize = unicodeMode ? charSizeAt(text, from) : 1;
            return from + charSize;
        }
    }
}
function readFrom(text, from, unicodeMode, mode) {
    const to = blockEndFrom(text, from, unicodeMode, mode);
    return text.substring(from, to);
}
