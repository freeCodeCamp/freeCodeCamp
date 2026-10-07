import { Scanner } from './scanner.js';

const TAB = 9;
const N = 10;
const F = 12;
const R = 13;
const SPACE = 32;
const EXCLAMATIONMARK = 33;    // !
const NUMBERSIGN = 35;         // #
const AMPERSAND = 38;          // &
const APOSTROPHE = 39;         // '
const LEFTPARENTHESIS = 40;    // (
const RIGHTPARENTHESIS = 41;   // )
const ASTERISK = 42;           // *
const PLUSSIGN = 43;           // +
const COMMA = 44;              // ,
const HYPERMINUS = 45;         // -
const LESSTHANSIGN = 60;       // <
const GREATERTHANSIGN = 62;    // >
const QUESTIONMARK = 63;       // ?
const COMMERCIALAT = 64;       // @
const LEFTSQUAREBRACKET = 91;  // [
const RIGHTSQUAREBRACKET = 93; // ]
const LEFTCURLYBRACKET = 123;  // {
const VERTICALLINE = 124;      // |
const RIGHTCURLYBRACKET = 125; // }
const INFINITY = 8734;         // ∞
const COMBINATOR_PRECEDENCE = {
    ' ': 1,
    '&&': 2,
    '||': 3,
    '|': 4
};

function readMultiplierRange(scanner) {
    let min = null;
    let max = null;

    scanner.eat(LEFTCURLYBRACKET);
    scanner.skipWs();

    min = scanner.scanNumber(scanner);
    scanner.skipWs();

    if (scanner.charCode() === COMMA) {
        scanner.pos++;
        scanner.skipWs();

        if (scanner.charCode() !== RIGHTCURLYBRACKET) {
            max = scanner.scanNumber(scanner);
            scanner.skipWs();
        }
    } else {
        max = min;
    }

    scanner.eat(RIGHTCURLYBRACKET);

    return {
        min: Number(min),
        max: max ? Number(max) : 0
    };
}

function readMultiplier(scanner) {
    let range = null;
    let comma = false;

    switch (scanner.charCode()) {
        case ASTERISK:
            scanner.pos++;

            range = {
                min: 0,
                max: 0
            };

            break;

        case PLUSSIGN:
            scanner.pos++;

            range = {
                min: 1,
                max: 0
            };

            break;

        case QUESTIONMARK:
            scanner.pos++;

            range = {
                min: 0,
                max: 1
            };

            break;

        case NUMBERSIGN:
            scanner.pos++;

            comma = true;

            if (scanner.charCode() === LEFTCURLYBRACKET) {
                range = readMultiplierRange(scanner);
            } else if (scanner.charCode() === QUESTIONMARK) {
                // https://www.w3.org/TR/css-values-4/#component-multipliers
                // > the # and ? multipliers may be stacked as #?
                // In this case just treat "#?" as a single multiplier
                // { min: 0, max: 0, comma: true }
                scanner.pos++;
                range = {
                    min: 0,
                    max: 0
                };
            } else {
                range = {
                    min: 1,
                    max: 0
                };
            }

            break;

        case LEFTCURLYBRACKET:
            range = readMultiplierRange(scanner);
            break;

        default:
            return null;
    }

    return {
        type: 'Multiplier',
        comma,
        min: range.min,
        max: range.max,
        term: null
    };
}

function maybeMultiplied(scanner, node) {
    const multiplier = readMultiplier(scanner);

    if (multiplier !== null) {
        multiplier.term = node;

        // https://www.w3.org/TR/css-values-4/#component-multipliers
        // > The + and # multipliers may be stacked as +#;
        // Represent "+#" as nested multipliers:
        // { ...<multiplier #>,
        //   term: {
        //     ...<multipler +>,
        //     term: node
        //   }
        // }
        if (scanner.charCode() === NUMBERSIGN &&
            scanner.charCodeAt(scanner.pos - 1) === PLUSSIGN) {
            return maybeMultiplied(scanner, multiplier);
        }

        // https://www.w3.org/TR/css-values-4/#component-multipliers
        // > the # and ? multipliers, {A} and ? multipliers, and {A,B} and ? multipliers
        // > may be stacked as #?, {A}?, and {A,B}?, respectively
        // Represent "{}?" as nested multipliers as well as "+#".
        // The "#?" case is already handled above, in maybeMultiplied()
        if (scanner.charCode() === QUESTIONMARK &&
            scanner.charCodeAt(scanner.pos - 1) === RIGHTCURLYBRACKET) {
            return maybeMultiplied(scanner, multiplier);
        }

        return multiplier;
    }

    return node;
}

function maybeToken(scanner) {
    const ch = scanner.peek();

    if (ch === '') {
        return null;
    }

    return maybeMultiplied(scanner, {
        type: 'Token',
        value: ch
    });
}

function readProperty(scanner) {
    let name;

    scanner.eat(LESSTHANSIGN);
    scanner.eat(APOSTROPHE);

    name = scanner.scanWord();

    scanner.eat(APOSTROPHE);
    scanner.eat(GREATERTHANSIGN);

    return maybeMultiplied(scanner, {
        type: 'Property',
        name
    });
}

// https://drafts.csswg.org/css-values-3/#numeric-ranges
// 4.1. Range Restrictions and Range Definition Notation
//
// Range restrictions can be annotated in the numeric type notation using CSS bracketed
// range notation—[min,max]—within the angle brackets, after the identifying keyword,
// indicating a closed range between (and including) min and max.
// For example, <integer [0, 10]> indicates an integer between 0 and 10, inclusive.
function readTypeRange(scanner) {
    // use null for Infinity to make AST format JSON serializable/deserializable
    let min = null; // -Infinity
    let max = null; // Infinity
    let sign = 1;

    scanner.eat(LEFTSQUAREBRACKET);

    if (scanner.charCode() === HYPERMINUS) {
        scanner.peek();
        sign = -1;
    }

    if (sign == -1 && scanner.charCode() === INFINITY) {
        scanner.peek();
    } else {
        min = sign * Number(scanner.scanNumber(scanner));

        if (scanner.isNameCharCode()) {
            min += scanner.scanWord();
        }
    }

    scanner.skipWs();
    scanner.eat(COMMA);
    scanner.skipWs();

    if (scanner.charCode() === INFINITY) {
        scanner.peek();
    } else {
        sign = 1;

        if (scanner.charCode() === HYPERMINUS) {
            scanner.peek();
            sign = -1;
        }

        max = sign * Number(scanner.scanNumber(scanner));

        if (scanner.isNameCharCode()) {
            max += scanner.scanWord();
        }
    }

    scanner.eat(RIGHTSQUAREBRACKET);

    return {
        type: 'Range',
        min,
        max
    };
}

function readType(scanner) {
    let name;
    let opts = null;

    scanner.eat(LESSTHANSIGN);
    name = scanner.scanWord();

    // https://drafts.csswg.org/css-values-5/#boolean
    if (name === 'boolean-expr') {
        scanner.eat(LEFTSQUAREBRACKET);

        const implicitGroup = readImplicitGroup(scanner, RIGHTSQUAREBRACKET);

        scanner.eat(RIGHTSQUAREBRACKET);
        scanner.eat(GREATERTHANSIGN);

        return maybeMultiplied(scanner, {
            type: 'Boolean',
            term: implicitGroup.terms.length === 1
                ? implicitGroup.terms[0]
                : implicitGroup
        });
    }

    if (scanner.charCode() === LEFTPARENTHESIS &&
        scanner.nextCharCode() === RIGHTPARENTHESIS) {
        scanner.pos += 2;
        name += '()';
    }

    if (scanner.charCodeAt(scanner.findWsEnd(scanner.pos)) === LEFTSQUAREBRACKET) {
        scanner.skipWs();
        opts = readTypeRange(scanner);
    }

    scanner.eat(GREATERTHANSIGN);

    return maybeMultiplied(scanner, {
        type: 'Type',
        name,
        opts
    });
}

function readKeywordOrFunction(scanner) {
    const name = scanner.scanWord();

    if (scanner.charCode() === LEFTPARENTHESIS) {
        scanner.pos++;

        return {
            type: 'Function',
            name
        };
    }

    return maybeMultiplied(scanner, {
        type: 'Keyword',
        name
    });
}

function regroupTerms(terms, combinators) {
    function createGroup(terms, combinator) {
        return {
            type: 'Group',
            terms,
            combinator,
            disallowEmpty: false,
            explicit: false
        };
    }

    let combinator;

    combinators = Object.keys(combinators)
        .sort((a, b) => COMBINATOR_PRECEDENCE[a] - COMBINATOR_PRECEDENCE[b]);

    while (combinators.length > 0) {
        combinator = combinators.shift();

        let i = 0;
        let subgroupStart = 0;

        for (; i < terms.length; i++) {
            const term = terms[i];

            if (term.type === 'Combinator') {
                if (term.value === combinator) {
                    if (subgroupStart === -1) {
                        subgroupStart = i - 1;
                    }
                    terms.splice(i, 1);
                    i--;
                } else {
                    if (subgroupStart !== -1 && i - subgroupStart > 1) {
                        terms.splice(
                            subgroupStart,
                            i - subgroupStart,
                            createGroup(terms.slice(subgroupStart, i), combinator)
                        );
                        i = subgroupStart + 1;
                    }
                    subgroupStart = -1;
                }
            }
        }

        if (subgroupStart !== -1 && combinators.length) {
            terms.splice(
                subgroupStart,
                i - subgroupStart,
                createGroup(terms.slice(subgroupStart, i), combinator)
            );
        }
    }

    return combinator;
}

function readImplicitGroup(scanner, stopCharCode = -1) {
    const combinators = Object.create(null);
    const terms = [];
    let prevToken = null;
    let prevTokenPos = scanner.pos;
    let prevTokenIsFunction = false;

    while (scanner.charCode() !== stopCharCode) {
        let token = prevTokenIsFunction
            ? readImplicitGroup(scanner, RIGHTPARENTHESIS)
            : peek(scanner);

        if (!token) {
            break;
        }

        if (token.type === 'Spaces') {
            continue;
        }

        if (prevTokenIsFunction) {
            if (token.terms.length === 0) {
                prevTokenIsFunction = false;
                continue;
            }

            if (token.combinator === ' ') {
                while (token.terms.length > 1) {
                    combinators[' '] = true;  // a b
                    terms.push({
                        type: 'Combinator',
                        value: ' '
                    }, token.terms.shift());
                }

                token = token.terms[0];
            }
        }

        if (token.type === 'Combinator') {
            // check for combinator in group beginning and double combinator sequence
            if (prevToken === null || prevToken.type === 'Combinator') {
                scanner.pos = prevTokenPos;
                scanner.error('Unexpected combinator');
            }

            combinators[token.value] = true;
        } else if (prevToken !== null && prevToken.type !== 'Combinator') {
            combinators[' '] = true;  // a b
            terms.push({
                type: 'Combinator',
                value: ' '
            });
        }

        terms.push(token);
        prevToken = token;
        prevTokenPos = scanner.pos;
        prevTokenIsFunction = token.type === 'Function';
    }

    // check for combinator in group ending
    if (prevToken !== null && prevToken.type === 'Combinator') {
        scanner.pos -= prevTokenPos;
        scanner.error('Unexpected combinator');
    }

    return {
        type: 'Group',
        terms,
        combinator: regroupTerms(terms, combinators) || ' ',
        disallowEmpty: false,
        explicit: false
    };
}

function readGroup(scanner) {
    let result;

    scanner.eat(LEFTSQUAREBRACKET);
    result = readImplicitGroup(scanner, RIGHTSQUAREBRACKET);
    scanner.eat(RIGHTSQUAREBRACKET);

    result.explicit = true;

    if (scanner.charCode() === EXCLAMATIONMARK) {
        scanner.pos++;
        result.disallowEmpty = true;
    }

    return result;
}

function peek(scanner) {
    let code = scanner.charCode();

    switch (code) {
        case RIGHTSQUAREBRACKET:
            // don't eat, stop scan a group
            break;

        case LEFTSQUAREBRACKET:
            return maybeMultiplied(scanner, readGroup(scanner));

        case LESSTHANSIGN:
            return scanner.nextCharCode() === APOSTROPHE
                ? readProperty(scanner)
                : readType(scanner);

        case VERTICALLINE:
            return {
                type: 'Combinator',
                value: scanner.substringToPos(
                    scanner.pos + (scanner.nextCharCode() === VERTICALLINE ? 2 : 1)
                )
            };

        case AMPERSAND:
            scanner.pos++;
            scanner.eat(AMPERSAND);

            return {
                type: 'Combinator',
                value: '&&'
            };

        case COMMA:
            scanner.pos++;
            return {
                type: 'Comma'
            };

        case APOSTROPHE:
            return maybeMultiplied(scanner, {
                type: 'String',
                value: scanner.scanString()
            });

        case SPACE:
        case TAB:
        case N:
        case R:
        case F:
            return {
                type: 'Spaces',
                value: scanner.scanSpaces()
            };

        case COMMERCIALAT:
            code = scanner.nextCharCode();

            if (scanner.isNameCharCode(code)) {
                scanner.pos++;
                return {
                    type: 'AtKeyword',
                    name: scanner.scanWord()
                };
            }

            return maybeToken(scanner);

        case ASTERISK:
        case PLUSSIGN:
        case QUESTIONMARK:
        case NUMBERSIGN:
        case EXCLAMATIONMARK:
            // prohibited tokens (used as a multiplier start)
            break;

        case LEFTCURLYBRACKET:
            // LEFTCURLYBRACKET is allowed since mdn/data uses it w/o quoting
            // check next char isn't a number, because it's likely a disjoined multiplier
            code = scanner.nextCharCode();

            if (code < 48 || code > 57) {
                return maybeToken(scanner);
            }

            break;

        default:
            if (scanner.isNameCharCode(code)) {
                return readKeywordOrFunction(scanner);
            }

            return maybeToken(scanner);
    }
}

export function parse(source) {
    const scanner = new Scanner(source);
    const result = readImplicitGroup(scanner);

    if (scanner.pos !== source.length) {
        scanner.error('Unexpected input');
    }

    // reduce redundant groups with single group term
    if (result.terms.length === 1 && result.terms[0].type === 'Group') {
        return result.terms[0];
    }

    return result;
};
