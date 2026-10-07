import { safeCharCodeAt, safeEvery, safeJoin, safeSubstring, Error, safeIndexOf, safeMap } from '../utils/globals.js';
import { stringify } from '../utils/stringify.js';
import { addMissingDotStar } from './_internals/helpers/SanitizeRegexAst.js';
import { tokenizeRegex } from './_internals/helpers/TokenizeRegex.js';
import { char } from './char.js';
import { constant } from './constant.js';
import { constantFrom } from './constantFrom.js';
import { integer } from './integer.js';
import { oneof } from './oneof.js';
import { stringOf } from './stringOf.js';
import { tuple } from './tuple.js';
const safeStringFromCodePoint = String.fromCodePoint;
const wordChars = [...'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_'];
const digitChars = [...'0123456789'];
const spaceChars = [...' \t\r\n\v\f'];
const newLineChars = [...'\r\n'];
const terminatorChars = [...'\x1E\x15'];
const newLineAndTerminatorChars = [...newLineChars, ...terminatorChars];
const defaultChar = char();
function raiseUnsupportedASTNode(astNode) {
    return new Error(`Unsupported AST node! Received: ${stringify(astNode)}`);
}
function toMatchingArbitrary(astNode, constraints, flags) {
    switch (astNode.type) {
        case 'Char': {
            if (astNode.kind === 'meta') {
                switch (astNode.value) {
                    case '\\w': {
                        return constantFrom(...wordChars);
                    }
                    case '\\W': {
                        return defaultChar.filter((c) => safeIndexOf(wordChars, c) === -1);
                    }
                    case '\\d': {
                        return constantFrom(...digitChars);
                    }
                    case '\\D': {
                        return defaultChar.filter((c) => safeIndexOf(digitChars, c) === -1);
                    }
                    case '\\s': {
                        return constantFrom(...spaceChars);
                    }
                    case '\\S': {
                        return defaultChar.filter((c) => safeIndexOf(spaceChars, c) === -1);
                    }
                    case '\\b':
                    case '\\B': {
                        throw new Error(`Meta character ${astNode.value} not implemented yet!`);
                    }
                    case '.': {
                        const forbiddenChars = flags.dotAll ? terminatorChars : newLineAndTerminatorChars;
                        return defaultChar.filter((c) => safeIndexOf(forbiddenChars, c) === -1);
                    }
                }
            }
            if (astNode.symbol === undefined) {
                throw new Error(`Unexpected undefined symbol received for non-meta Char! Received: ${stringify(astNode)}`);
            }
            return constant(astNode.symbol);
        }
        case 'Repetition': {
            const node = toMatchingArbitrary(astNode.expression, constraints, flags);
            switch (astNode.quantifier.kind) {
                case '*': {
                    return stringOf(node, constraints);
                }
                case '+': {
                    return stringOf(node, Object.assign(Object.assign({}, constraints), { minLength: 1 }));
                }
                case '?': {
                    return stringOf(node, Object.assign(Object.assign({}, constraints), { minLength: 0, maxLength: 1 }));
                }
                case 'Range': {
                    return stringOf(node, Object.assign(Object.assign({}, constraints), { minLength: astNode.quantifier.from, maxLength: astNode.quantifier.to }));
                }
                default: {
                    throw raiseUnsupportedASTNode(astNode.quantifier);
                }
            }
        }
        case 'Quantifier': {
            throw new Error(`Wrongly defined AST tree, Quantifier nodes not supposed to be scanned!`);
        }
        case 'Alternative': {
            return tuple(...safeMap(astNode.expressions, (n) => toMatchingArbitrary(n, constraints, flags))).map((vs) => safeJoin(vs, ''));
        }
        case 'CharacterClass':
            if (astNode.negative) {
                const childrenArbitraries = safeMap(astNode.expressions, (n) => toMatchingArbitrary(n, constraints, flags));
                return defaultChar.filter((c) => safeEvery(childrenArbitraries, (arb) => !arb.canShrinkWithoutContext(c)));
            }
            return oneof(...safeMap(astNode.expressions, (n) => toMatchingArbitrary(n, constraints, flags)));
        case 'ClassRange': {
            const min = astNode.from.codePoint;
            const max = astNode.to.codePoint;
            return integer({ min, max }).map((n) => safeStringFromCodePoint(n), (c) => {
                if (typeof c !== 'string')
                    throw new Error('Invalid type');
                if ([...c].length !== 1)
                    throw new Error('Invalid length');
                return safeCharCodeAt(c, 0);
            });
        }
        case 'Group': {
            return toMatchingArbitrary(astNode.expression, constraints, flags);
        }
        case 'Disjunction': {
            const left = astNode.left !== null ? toMatchingArbitrary(astNode.left, constraints, flags) : constant('');
            const right = astNode.right !== null ? toMatchingArbitrary(astNode.right, constraints, flags) : constant('');
            return oneof(left, right);
        }
        case 'Assertion': {
            if (astNode.kind === '^' || astNode.kind === '$') {
                if (flags.multiline) {
                    if (astNode.kind === '^') {
                        return oneof(constant(''), tuple(stringOf(defaultChar), constantFrom(...newLineChars)).map((t) => `${t[0]}${t[1]}`, (value) => {
                            if (typeof value !== 'string' || value.length === 0)
                                throw new Error('Invalid type');
                            return [safeSubstring(value, 0, value.length - 1), value[value.length - 1]];
                        }));
                    }
                    else {
                        return oneof(constant(''), tuple(constantFrom(...newLineChars), stringOf(defaultChar)).map((t) => `${t[0]}${t[1]}`, (value) => {
                            if (typeof value !== 'string' || value.length === 0)
                                throw new Error('Invalid type');
                            return [value[0], safeSubstring(value, 1)];
                        }));
                    }
                }
                return constant('');
            }
            throw new Error(`Assertions of kind ${astNode.kind} not implemented yet!`);
        }
        case 'Backreference': {
            throw new Error(`Backreference nodes not implemented yet!`);
        }
        default: {
            throw raiseUnsupportedASTNode(astNode);
        }
    }
}
export function stringMatching(regex, constraints = {}) {
    for (const flag of regex.flags) {
        if (flag !== 'd' && flag !== 'g' && flag !== 'm' && flag !== 's' && flag !== 'u') {
            throw new Error(`Unable to use "stringMatching" against a regex using the flag ${flag}`);
        }
    }
    const sanitizedConstraints = { size: constraints.size };
    const flags = { multiline: regex.multiline, dotAll: regex.dotAll };
    const regexRootToken = addMissingDotStar(tokenizeRegex(regex));
    return toMatchingArbitrary(regexRootToken, sanitizedConstraints, flags);
}
