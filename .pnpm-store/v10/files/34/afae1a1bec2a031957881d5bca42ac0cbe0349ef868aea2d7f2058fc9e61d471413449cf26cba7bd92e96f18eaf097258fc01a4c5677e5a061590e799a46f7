"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenizeRegex = tokenizeRegex;
const globals_1 = require("../../../utils/globals");
const ReadRegex_1 = require("./ReadRegex");
const safeStringFromCodePoint = String.fromCodePoint;
function safePop(tokens) {
    const previous = tokens.pop();
    if (previous === undefined) {
        throw new Error('Unable to extract token preceeding the currently parsed one');
    }
    return previous;
}
function isDigit(char) {
    return char >= '0' && char <= '9';
}
function simpleChar(char, escaped) {
    return {
        type: 'Char',
        kind: 'simple',
        symbol: char,
        value: char,
        codePoint: char.codePointAt(0) || -1,
        escaped,
    };
}
function metaEscapedChar(block, symbol) {
    return {
        type: 'Char',
        kind: 'meta',
        symbol,
        value: block,
        codePoint: symbol.codePointAt(0) || -1,
    };
}
function toSingleToken(tokens, allowEmpty) {
    if (tokens.length > 1) {
        return {
            type: 'Alternative',
            expressions: tokens,
        };
    }
    if (!allowEmpty && tokens.length === 0) {
        throw new Error(`Unsupported no token`);
    }
    return tokens[0];
}
function blockToCharToken(block) {
    if (block[0] === '\\') {
        const next = block[1];
        switch (next) {
            case 'x': {
                const allDigits = block.substring(2);
                const codePoint = Number.parseInt(allDigits, 16);
                const symbol = safeStringFromCodePoint(codePoint);
                return { type: 'Char', kind: 'hex', symbol, value: block, codePoint };
            }
            case 'u': {
                if (block === '\\u') {
                    return simpleChar('u', true);
                }
                const allDigits = block[2] === '{' ? block.substring(3, block.length - 1) : block.substring(2);
                const codePoint = Number.parseInt(allDigits, 16);
                const symbol = safeStringFromCodePoint(codePoint);
                return { type: 'Char', kind: 'unicode', symbol, value: block, codePoint };
            }
            case '0': {
                return metaEscapedChar(block, '\0');
            }
            case 'n': {
                return metaEscapedChar(block, '\n');
            }
            case 'f': {
                return metaEscapedChar(block, '\f');
            }
            case 'r': {
                return metaEscapedChar(block, '\r');
            }
            case 't': {
                return metaEscapedChar(block, '\t');
            }
            case 'v': {
                return metaEscapedChar(block, '\v');
            }
            case 'w':
            case 'W':
            case 'd':
            case 'D':
            case 's':
            case 'S':
            case 'b':
            case 'B': {
                return { type: 'Char', kind: 'meta', symbol: undefined, value: block, codePoint: Number.NaN };
            }
            default: {
                if (isDigit(next)) {
                    const allDigits = block.substring(1);
                    const codePoint = Number(allDigits);
                    const symbol = safeStringFromCodePoint(codePoint);
                    return { type: 'Char', kind: 'decimal', symbol, value: block, codePoint };
                }
                if (block.length > 2 && (next === 'p' || next === 'P')) {
                    throw new Error(`UnicodeProperty not implemented yet!`);
                }
                const char = block.substring(1);
                return simpleChar(char, true);
            }
        }
    }
    return simpleChar(block);
}
function pushTokens(tokens, regexSource, unicodeMode, groups) {
    let disjunctions = null;
    for (let index = 0, block = (0, ReadRegex_1.readFrom)(regexSource, index, unicodeMode, ReadRegex_1.TokenizerBlockMode.Full); index !== regexSource.length; index += block.length, block = (0, ReadRegex_1.readFrom)(regexSource, index, unicodeMode, ReadRegex_1.TokenizerBlockMode.Full)) {
        const firstInBlock = block[0];
        switch (firstInBlock) {
            case '|': {
                if (disjunctions === null) {
                    disjunctions = [];
                }
                disjunctions.push(toSingleToken(tokens.splice(0), true) || null);
                break;
            }
            case '.': {
                tokens.push({ type: 'Char', kind: 'meta', symbol: block, value: block, codePoint: Number.NaN });
                break;
            }
            case '*':
            case '+': {
                const previous = safePop(tokens);
                tokens.push({
                    type: 'Repetition',
                    expression: previous,
                    quantifier: { type: 'Quantifier', kind: firstInBlock, greedy: true },
                });
                break;
            }
            case '?': {
                const previous = safePop(tokens);
                if (previous.type === 'Repetition') {
                    previous.quantifier.greedy = false;
                    tokens.push(previous);
                }
                else {
                    tokens.push({
                        type: 'Repetition',
                        expression: previous,
                        quantifier: { type: 'Quantifier', kind: firstInBlock, greedy: true },
                    });
                }
                break;
            }
            case '{': {
                if (block === '{') {
                    tokens.push(simpleChar(block));
                    break;
                }
                const previous = safePop(tokens);
                const quantifierText = block.substring(1, block.length - 1);
                const quantifierTokens = quantifierText.split(',');
                const from = Number(quantifierTokens[0]);
                const to = quantifierTokens.length === 1
                    ? from
                    : quantifierTokens[1].length !== 0
                        ? Number(quantifierTokens[1])
                        : undefined;
                tokens.push({
                    type: 'Repetition',
                    expression: previous,
                    quantifier: { type: 'Quantifier', kind: 'Range', greedy: true, from, to },
                });
                break;
            }
            case '[': {
                const blockContent = block.substring(1, block.length - 1);
                const subTokens = [];
                let negative = undefined;
                let previousWasSimpleDash = false;
                for (let subIndex = 0, subBlock = (0, ReadRegex_1.readFrom)(blockContent, subIndex, unicodeMode, ReadRegex_1.TokenizerBlockMode.Character); subIndex !== blockContent.length; subIndex += subBlock.length,
                    subBlock = (0, ReadRegex_1.readFrom)(blockContent, subIndex, unicodeMode, ReadRegex_1.TokenizerBlockMode.Character)) {
                    if (subIndex === 0 && subBlock === '^') {
                        negative = true;
                        continue;
                    }
                    const newToken = blockToCharToken(subBlock);
                    if (subBlock === '-') {
                        subTokens.push(newToken);
                        previousWasSimpleDash = true;
                    }
                    else {
                        const operand1Token = subTokens.length >= 2 ? subTokens[subTokens.length - 2] : undefined;
                        if (previousWasSimpleDash && operand1Token !== undefined && operand1Token.type === 'Char') {
                            subTokens.pop();
                            subTokens.pop();
                            subTokens.push({ type: 'ClassRange', from: operand1Token, to: newToken });
                        }
                        else {
                            subTokens.push(newToken);
                        }
                        previousWasSimpleDash = false;
                    }
                }
                tokens.push({ type: 'CharacterClass', expressions: subTokens, negative });
                break;
            }
            case '(': {
                const blockContent = block.substring(1, block.length - 1);
                const subTokens = [];
                if (blockContent[0] === '?') {
                    if (blockContent[1] === ':') {
                        pushTokens(subTokens, blockContent.substring(2), unicodeMode, groups);
                        tokens.push({
                            type: 'Group',
                            capturing: false,
                            expression: toSingleToken(subTokens),
                        });
                    }
                    else if (blockContent[1] === '=' || blockContent[1] === '!') {
                        pushTokens(subTokens, blockContent.substring(2), unicodeMode, groups);
                        tokens.push({
                            type: 'Assertion',
                            kind: 'Lookahead',
                            negative: blockContent[1] === '!' ? true : undefined,
                            assertion: toSingleToken(subTokens),
                        });
                    }
                    else if (blockContent[1] === '<' && (blockContent[2] === '=' || blockContent[2] === '!')) {
                        pushTokens(subTokens, blockContent.substring(3), unicodeMode, groups);
                        tokens.push({
                            type: 'Assertion',
                            kind: 'Lookbehind',
                            negative: blockContent[2] === '!' ? true : undefined,
                            assertion: toSingleToken(subTokens),
                        });
                    }
                    else {
                        const chunks = blockContent.split('>');
                        if (chunks.length < 2 || chunks[0][1] !== '<') {
                            throw new Error(`Unsupported regex content found at ${JSON.stringify(block)}`);
                        }
                        const groupIndex = ++groups.lastIndex;
                        const nameRaw = chunks[0].substring(2);
                        groups.named.set(nameRaw, groupIndex);
                        pushTokens(subTokens, chunks.slice(1).join('>'), unicodeMode, groups);
                        tokens.push({
                            type: 'Group',
                            capturing: true,
                            nameRaw,
                            name: nameRaw,
                            number: groupIndex,
                            expression: toSingleToken(subTokens),
                        });
                    }
                }
                else {
                    const groupIndex = ++groups.lastIndex;
                    pushTokens(subTokens, blockContent, unicodeMode, groups);
                    tokens.push({
                        type: 'Group',
                        capturing: true,
                        number: groupIndex,
                        expression: toSingleToken(subTokens),
                    });
                }
                break;
            }
            default: {
                if (block === '^') {
                    tokens.push({ type: 'Assertion', kind: block });
                }
                else if (block === '$') {
                    tokens.push({ type: 'Assertion', kind: block });
                }
                else if (block[0] === '\\' && isDigit(block[1])) {
                    const reference = Number(block.substring(1));
                    if (unicodeMode || reference <= groups.lastIndex) {
                        tokens.push({ type: 'Backreference', kind: 'number', number: reference, reference });
                    }
                    else {
                        tokens.push(blockToCharToken(block));
                    }
                }
                else if (block[0] === '\\' && block[1] === 'k' && block.length !== 2) {
                    const referenceRaw = block.substring(3, block.length - 1);
                    tokens.push({
                        type: 'Backreference',
                        kind: 'name',
                        number: groups.named.get(referenceRaw) || 0,
                        referenceRaw,
                        reference: referenceRaw,
                    });
                }
                else {
                    tokens.push(blockToCharToken(block));
                }
                break;
            }
        }
    }
    if (disjunctions !== null) {
        disjunctions.push(toSingleToken(tokens.splice(0), true) || null);
        let currentDisjunction = {
            type: 'Disjunction',
            left: disjunctions[0],
            right: disjunctions[1],
        };
        for (let index = 2; index < disjunctions.length; ++index) {
            currentDisjunction = {
                type: 'Disjunction',
                left: currentDisjunction,
                right: disjunctions[index],
            };
        }
        tokens.push(currentDisjunction);
    }
}
function tokenizeRegex(regex) {
    const unicodeMode = (0, globals_1.safeIndexOf)([...regex.flags], 'u') !== -1;
    const regexSource = regex.source;
    const tokens = [];
    pushTokens(tokens, regexSource, unicodeMode, { lastIndex: 0, named: new Map() });
    return toSingleToken(tokens);
}
