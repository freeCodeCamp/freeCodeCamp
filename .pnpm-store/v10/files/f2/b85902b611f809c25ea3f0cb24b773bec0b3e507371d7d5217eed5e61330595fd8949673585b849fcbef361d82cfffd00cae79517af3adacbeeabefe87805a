"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringMatching = stringMatching;
const globals_1 = require("../utils/globals");
const stringify_1 = require("../utils/stringify");
const SanitizeRegexAst_1 = require("./_internals/helpers/SanitizeRegexAst");
const TokenizeRegex_1 = require("./_internals/helpers/TokenizeRegex");
const char_1 = require("./char");
const constant_1 = require("./constant");
const constantFrom_1 = require("./constantFrom");
const integer_1 = require("./integer");
const oneof_1 = require("./oneof");
const stringOf_1 = require("./stringOf");
const tuple_1 = require("./tuple");
const safeStringFromCodePoint = String.fromCodePoint;
const wordChars = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_'];
const digitChars = [...'0123456789'];
const spaceChars = [...' \t\r\n\v\f'];
const newLineChars = [...'\r\n'];
const terminatorChars = [...'\x1E\x15'];
const newLineAndTerminatorChars = [...newLineChars, ...terminatorChars];
const defaultChar = (0, char_1.char)();
function raiseUnsupportedASTNode(astNode) {
    return new globals_1.Error(`Unsupported AST node! Received: ${(0, stringify_1.stringify)(astNode)}`);
}
function toMatchingArbitrary(astNode, constraints, flags) {
    switch (astNode.type) {
        case 'Char': {
            if (astNode.kind === 'meta') {
                switch (astNode.value) {
                    case '\\w': {
                        return (0, constantFrom_1.constantFrom)(...wordChars);
                    }
                    case '\\W': {
                        return defaultChar.filter((c) => (0, globals_1.safeIndexOf)(wordChars, c) === -1);
                    }
                    case '\\d': {
                        return (0, constantFrom_1.constantFrom)(...digitChars);
                    }
                    case '\\D': {
                        return defaultChar.filter((c) => (0, globals_1.safeIndexOf)(digitChars, c) === -1);
                    }
                    case '\\s': {
                        return (0, constantFrom_1.constantFrom)(...spaceChars);
                    }
                    case '\\S': {
                        return defaultChar.filter((c) => (0, globals_1.safeIndexOf)(spaceChars, c) === -1);
                    }
                    case '\\b':
                    case '\\B': {
                        throw new globals_1.Error(`Meta character ${astNode.value} not implemented yet!`);
                    }
                    case '.': {
                        const forbiddenChars = flags.dotAll ? terminatorChars : newLineAndTerminatorChars;
                        return defaultChar.filter((c) => (0, globals_1.safeIndexOf)(forbiddenChars, c) === -1);
                    }
                }
            }
            if (astNode.symbol === undefined) {
                throw new globals_1.Error(`Unexpected undefined symbol received for non-meta Char! Received: ${(0, stringify_1.stringify)(astNode)}`);
            }
            return (0, constant_1.constant)(astNode.symbol);
        }
        case 'Repetition': {
            const node = toMatchingArbitrary(astNode.expression, constraints, flags);
            switch (astNode.quantifier.kind) {
                case '*': {
                    return (0, stringOf_1.stringOf)(node, constraints);
                }
                case '+': {
                    return (0, stringOf_1.stringOf)(node, Object.assign(Object.assign({}, constraints), { minLength: 1 }));
                }
                case '?': {
                    return (0, stringOf_1.stringOf)(node, Object.assign(Object.assign({}, constraints), { minLength: 0, maxLength: 1 }));
                }
                case 'Range': {
                    return (0, stringOf_1.stringOf)(node, Object.assign(Object.assign({}, constraints), { minLength: astNode.quantifier.from, maxLength: astNode.quantifier.to }));
                }
                default: {
                    throw raiseUnsupportedASTNode(astNode.quantifier);
                }
            }
        }
        case 'Quantifier': {
            throw new globals_1.Error(`Wrongly defined AST tree, Quantifier nodes not supposed to be scanned!`);
        }
        case 'Alternative': {
            return (0, tuple_1.tuple)(...(0, globals_1.safeMap)(astNode.expressions, (n) => toMatchingArbitrary(n, constraints, flags))).map((vs) => (0, globals_1.safeJoin)(vs, ''));
        }
        case 'CharacterClass':
            if (astNode.negative) {
                const childrenArbitraries = (0, globals_1.safeMap)(astNode.expressions, (n) => toMatchingArbitrary(n, constraints, flags));
                return defaultChar.filter((c) => (0, globals_1.safeEvery)(childrenArbitraries, (arb) => !arb.canShrinkWithoutContext(c)));
            }
            return (0, oneof_1.oneof)(...(0, globals_1.safeMap)(astNode.expressions, (n) => toMatchingArbitrary(n, constraints, flags)));
        case 'ClassRange': {
            const min = astNode.from.codePoint;
            const max = astNode.to.codePoint;
            return (0, integer_1.integer)({ min, max }).map((n) => safeStringFromCodePoint(n), (c) => {
                if (typeof c !== 'string')
                    throw new globals_1.Error('Invalid type');
                if ([...c].length !== 1)
                    throw new globals_1.Error('Invalid length');
                return (0, globals_1.safeCharCodeAt)(c, 0);
            });
        }
        case 'Group': {
            return toMatchingArbitrary(astNode.expression, constraints, flags);
        }
        case 'Disjunction': {
            const left = astNode.left !== null ? toMatchingArbitrary(astNode.left, constraints, flags) : (0, constant_1.constant)('');
            const right = astNode.right !== null ? toMatchingArbitrary(astNode.right, constraints, flags) : (0, constant_1.constant)('');
            return (0, oneof_1.oneof)(left, right);
        }
        case 'Assertion': {
            if (astNode.kind === '^' || astNode.kind === '$') {
                if (flags.multiline) {
                    if (astNode.kind === '^') {
                        return (0, oneof_1.oneof)((0, constant_1.constant)(''), (0, tuple_1.tuple)((0, stringOf_1.stringOf)(defaultChar), (0, constantFrom_1.constantFrom)(...newLineChars)).map((t) => `${t[0]}${t[1]}`, (value) => {
                            if (typeof value !== 'string' || value.length === 0)
                                throw new globals_1.Error('Invalid type');
                            return [(0, globals_1.safeSubstring)(value, 0, value.length - 1), value[value.length - 1]];
                        }));
                    }
                    else {
                        return (0, oneof_1.oneof)((0, constant_1.constant)(''), (0, tuple_1.tuple)((0, constantFrom_1.constantFrom)(...newLineChars), (0, stringOf_1.stringOf)(defaultChar)).map((t) => `${t[0]}${t[1]}`, (value) => {
                            if (typeof value !== 'string' || value.length === 0)
                                throw new globals_1.Error('Invalid type');
                            return [value[0], (0, globals_1.safeSubstring)(value, 1)];
                        }));
                    }
                }
                return (0, constant_1.constant)('');
            }
            throw new globals_1.Error(`Assertions of kind ${astNode.kind} not implemented yet!`);
        }
        case 'Backreference': {
            throw new globals_1.Error(`Backreference nodes not implemented yet!`);
        }
        default: {
            throw raiseUnsupportedASTNode(astNode);
        }
    }
}
function stringMatching(regex, constraints = {}) {
    for (const flag of regex.flags) {
        if (flag !== 'd' && flag !== 'g' && flag !== 'm' && flag !== 's' && flag !== 'u') {
            throw new globals_1.Error(`Unable to use "stringMatching" against a regex using the flag ${flag}`);
        }
    }
    const sanitizedConstraints = { size: constraints.size };
    const flags = { multiline: regex.multiline, dotAll: regex.dotAll };
    const regexRootToken = (0, SanitizeRegexAst_1.addMissingDotStar)((0, TokenizeRegex_1.tokenizeRegex)(regex));
    return toMatchingArbitrary(regexRootToken, sanitizedConstraints, flags);
}
