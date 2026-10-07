'use strict';

const matchGraph = require('./match-graph.cjs');
const types = require('../tokenizer/types.cjs');

const { hasOwnProperty } = Object.prototype;
const STUB = 0;
const TOKEN = 1;
const OPEN_SYNTAX = 2;
const CLOSE_SYNTAX = 3;

const EXIT_REASON_MATCH = 'Match';
const EXIT_REASON_MISMATCH = 'Mismatch';
const EXIT_REASON_ITERATION_LIMIT = 'Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)';

const ITERATION_LIMIT = 15000;

function reverseList(list) {
    let prev = null;
    let next = null;
    let item = list;

    while (item !== null) {
        next = item.prev;
        item.prev = prev;
        prev = item;
        item = next;
    }

    return prev;
}

function areStringsEqualCaseInsensitive(testStr, referenceStr) {
    if (testStr.length !== referenceStr.length) {
        return false;
    }

    for (let i = 0; i < testStr.length; i++) {
        const referenceCode = referenceStr.charCodeAt(i);
        let testCode = testStr.charCodeAt(i);

        // testCode.toLowerCase() for U+0041 LATIN CAPITAL LETTER A (A) .. U+005A LATIN CAPITAL LETTER Z (Z).
        if (testCode >= 0x0041 && testCode <= 0x005A) {
            testCode = testCode | 32;
        }

        if (testCode !== referenceCode) {
            return false;
        }
    }

    return true;
}

function isContextEdgeDelim(token) {
    if (token.type !== types.Delim) {
        return false;
    }

    // Fix matching for unicode-range: U+30??, U+FF00-FF9F
    // Probably we need to check out previous match instead
    return token.value !== '?';
}

function isCommaContextStart(token) {
    if (token === null) {
        return true;
    }

    return (
        token.type === types.Comma ||
        token.type === types.Function ||
        token.type === types.LeftParenthesis ||
        token.type === types.LeftSquareBracket ||
        token.type === types.LeftCurlyBracket ||
        isContextEdgeDelim(token)
    );
}

function isCommaContextEnd(token) {
    if (token === null) {
        return true;
    }

    return (
        token.type === types.RightParenthesis ||
        token.type === types.RightSquareBracket ||
        token.type === types.RightCurlyBracket ||
        (token.type === types.Delim && token.value === '/')
    );
}

function internalMatch(tokens, state, syntaxes) {
    function moveToNextToken() {
        do {
            tokenIndex++;
            token = tokenIndex < tokens.length ? tokens[tokenIndex] : null;
        } while (token !== null && (token.type === types.WhiteSpace || token.type === types.Comment));
    }

    function getNextToken(offset) {
        const nextIndex = tokenIndex + offset;

        return nextIndex < tokens.length ? tokens[nextIndex] : null;
    }

    function stateSnapshotFromSyntax(nextState, prev) {
        return {
            nextState,
            matchStack,
            syntaxStack,
            thenStack,
            tokenIndex,
            prev
        };
    }

    function pushThenStack(nextState) {
        thenStack = {
            nextState,
            matchStack,
            syntaxStack,
            prev: thenStack
        };
    }

    function pushElseStack(nextState) {
        elseStack = stateSnapshotFromSyntax(nextState, elseStack);
    }

    function addTokenToMatch() {
        matchStack = {
            type: TOKEN,
            syntax: state.syntax,
            token,
            prev: matchStack
        };

        moveToNextToken();
        syntaxStash = null;

        if (tokenIndex > longestMatch) {
            longestMatch = tokenIndex;
        }
    }

    function openSyntax() {
        syntaxStack = {
            syntax: state.syntax,
            opts: state.syntax.opts || (syntaxStack !== null && syntaxStack.opts) || null,
            prev: syntaxStack
        };

        matchStack = {
            type: OPEN_SYNTAX,
            syntax: state.syntax,
            token: matchStack.token,
            prev: matchStack
        };
    }

    function closeSyntax() {
        if (matchStack.type === OPEN_SYNTAX) {
            matchStack = matchStack.prev;
        } else {
            matchStack = {
                type: CLOSE_SYNTAX,
                syntax: syntaxStack.syntax,
                token: matchStack.token,
                prev: matchStack
            };
        }

        syntaxStack = syntaxStack.prev;
    }

    let syntaxStack = null;
    let thenStack = null;
    let elseStack = null;

    // null – stashing allowed, nothing stashed
    // false – stashing disabled, nothing stashed
    // anithing else – fail stashable syntaxes, some syntax stashed
    let syntaxStash = null;

    let iterationCount = 0; // count iterations and prevent infinite loop
    let exitReason = null;

    let token = null;
    let tokenIndex = -1;
    let longestMatch = 0;
    let matchStack = {
        type: STUB,
        syntax: null,
        token: null,
        prev: null
    };

    moveToNextToken();

    while (exitReason === null && ++iterationCount < ITERATION_LIMIT) {
        // function mapList(list, fn) {
        //     const result = [];
        //     while (list) {
        //         result.unshift(fn(list));
        //         list = list.prev;
        //     }
        //     return result;
        // }
        // console.log('--\n',
        //     '#' + iterationCount,
        //     require('util').inspect({
        //         match: mapList(matchStack, x => x.type === TOKEN ? x.token && x.token.value : x.syntax ? ({ [OPEN_SYNTAX]: '<', [CLOSE_SYNTAX]: '</' }[x.type] || x.type) + '!' + x.syntax.name : null),
        //         token: token && token.value,
        //         tokenIndex,
        //         syntax: syntax.type + (syntax.id ? ' #' + syntax.id : '')
        //     }, { depth: null })
        // );
        switch (state.type) {
            case 'Match':
                if (thenStack === null) {
                    // turn to MISMATCH when some tokens left unmatched
                    if (token !== null) {
                        // doesn't mismatch if just one token left and it's an IE hack
                        if (tokenIndex !== tokens.length - 1 || (token.value !== '\\0' && token.value !== '\\9')) {
                            state = matchGraph.MISMATCH;
                            break;
                        }
                    }

                    // break the main loop, return a result - MATCH
                    exitReason = EXIT_REASON_MATCH;
                    break;
                }

                // go to next syntax (`then` branch)
                state = thenStack.nextState;

                // check match is not empty
                if (state === matchGraph.DISALLOW_EMPTY) {
                    if (thenStack.matchStack === matchStack) {
                        state = matchGraph.MISMATCH;
                        break;
                    } else {
                        state = matchGraph.MATCH;
                    }
                }

                // close syntax if needed
                while (thenStack.syntaxStack !== syntaxStack) {
                    closeSyntax();
                }

                // pop stack
                thenStack = thenStack.prev;
                break;

            case 'Mismatch':
                // when some syntax is stashed
                if (syntaxStash !== null && syntaxStash !== false) {
                    // there is no else branches or a branch reduce match stack
                    if (elseStack === null || tokenIndex > elseStack.tokenIndex) {
                        // restore state from the stash
                        elseStack = syntaxStash;
                        syntaxStash = false; // disable stashing
                    }
                } else if (elseStack === null) {
                    // no else branches -> break the main loop
                    // return a result - MISMATCH
                    exitReason = EXIT_REASON_MISMATCH;
                    break;
                }

                // go to next syntax (`else` branch)
                state = elseStack.nextState;

                // restore all the rest stack states
                thenStack = elseStack.thenStack;
                syntaxStack = elseStack.syntaxStack;
                matchStack = elseStack.matchStack;
                tokenIndex = elseStack.tokenIndex;
                token = tokenIndex < tokens.length ? tokens[tokenIndex] : null;

                // pop stack
                elseStack = elseStack.prev;
                break;

            case 'MatchGraph':
                state = state.match;
                break;

            case 'If':
                // IMPORTANT: else stack push must go first,
                // since it stores the state of thenStack before changes
                if (state.else !== matchGraph.MISMATCH) {
                    pushElseStack(state.else);
                }

                if (state.then !== matchGraph.MATCH) {
                    pushThenStack(state.then);
                }

                state = state.match;
                break;

            case 'MatchOnce':
                state = {
                    type: 'MatchOnceBuffer',
                    syntax: state,
                    index: 0,
                    mask: 0
                };
                break;

            case 'MatchOnceBuffer': {
                const terms = state.syntax.terms;

                if (state.index === terms.length) {
                    // no matches at all or it's required all terms to be matched
                    if (state.mask === 0 || state.syntax.all) {
                        state = matchGraph.MISMATCH;
                        break;
                    }

                    // a partial match is ok
                    state = matchGraph.MATCH;
                    break;
                }

                // all terms are matched
                if (state.mask === (1 << terms.length) - 1) {
                    state = matchGraph.MATCH;
                    break;
                }

                for (; state.index < terms.length; state.index++) {
                    const matchFlag = 1 << state.index;

                    if ((state.mask & matchFlag) === 0) {
                        // IMPORTANT: else stack push must go first,
                        // since it stores the state of thenStack before changes
                        pushElseStack(state);
                        pushThenStack({
                            type: 'AddMatchOnce',
                            syntax: state.syntax,
                            mask: state.mask | matchFlag
                        });

                        // match
                        state = terms[state.index++];
                        break;
                    }
                }
                break;
            }

            case 'AddMatchOnce':
                state = {
                    type: 'MatchOnceBuffer',
                    syntax: state.syntax,
                    index: 0,
                    mask: state.mask
                };
                break;

            case 'Enum':
                if (token !== null) {
                    let name = token.value.toLowerCase();

                    // drop \0 and \9 hack from keyword name
                    if (name.indexOf('\\') !== -1) {
                        name = name.replace(/\\[09].*$/, '');
                    }

                    if (hasOwnProperty.call(state.map, name)) {
                        state = state.map[name];
                        break;
                    }
                }

                state = matchGraph.MISMATCH;
                break;

            case 'Generic': {
                const opts = syntaxStack !== null ? syntaxStack.opts : null;
                const lastTokenIndex = tokenIndex + Math.floor(state.fn(token, getNextToken, opts));

                if (!isNaN(lastTokenIndex) && lastTokenIndex > tokenIndex) {
                    while (tokenIndex < lastTokenIndex) {
                        addTokenToMatch();
                    }

                    state = matchGraph.MATCH;
                } else {
                    state = matchGraph.MISMATCH;
                }

                break;
            }

            case 'Type':
            case 'Property': {
                const syntaxDict = state.type === 'Type' ? 'types' : 'properties';
                const dictSyntax = hasOwnProperty.call(syntaxes, syntaxDict) ? syntaxes[syntaxDict][state.name] : null;

                if (!dictSyntax || !dictSyntax.match) {
                    throw new Error(
                        'Bad syntax reference: ' +
                        (state.type === 'Type'
                            ? '<' + state.name + '>'
                            : '<\'' + state.name + '\'>')
                    );
                }

                // stash a syntax for types with low priority
                if (syntaxStash !== false && token !== null && state.type === 'Type') {
                    const lowPriorityMatching =
                        // https://drafts.csswg.org/css-values-4/#custom-idents
                        // When parsing positionally-ambiguous keywords in a property value, a <custom-ident> production
                        // can only claim the keyword if no other unfulfilled production can claim it.
                        (state.name === 'custom-ident' && token.type === types.Ident) ||

                        // https://drafts.csswg.org/css-values-4/#lengths
                        // ... if a `0` could be parsed as either a <number> or a <length> in a property (such as line-height),
                        // it must parse as a <number>
                        (state.name === 'length' && token.value === '0');

                    if (lowPriorityMatching) {
                        if (syntaxStash === null) {
                            syntaxStash = stateSnapshotFromSyntax(state, elseStack);
                        }

                        state = matchGraph.MISMATCH;
                        break;
                    }
                }

                openSyntax();
                state = dictSyntax.matchRef || dictSyntax.match;
                break;
            }

            case 'Keyword': {
                const name = state.name;

                if (token !== null) {
                    let keywordName = token.value;

                    // drop \0 and \9 hack from keyword name
                    if (keywordName.indexOf('\\') !== -1) {
                        keywordName = keywordName.replace(/\\[09].*$/, '');
                    }

                    if (areStringsEqualCaseInsensitive(keywordName, name)) {
                        addTokenToMatch();
                        state = matchGraph.MATCH;
                        break;
                    }
                }

                state = matchGraph.MISMATCH;
                break;
            }

            case 'AtKeyword':
            case 'Function':
                if (token !== null && areStringsEqualCaseInsensitive(token.value, state.name)) {
                    addTokenToMatch();
                    state = matchGraph.MATCH;
                    break;
                }

                state = matchGraph.MISMATCH;
                break;

            case 'Token':
                if (token !== null && token.value === state.value) {
                    addTokenToMatch();
                    state = matchGraph.MATCH;
                    break;
                }

                state = matchGraph.MISMATCH;
                break;

            case 'Comma':
                if (token !== null && token.type === types.Comma) {
                    if (isCommaContextStart(matchStack.token)) {
                        state = matchGraph.MISMATCH;
                    } else {
                        addTokenToMatch();
                        state = isCommaContextEnd(token) ? matchGraph.MISMATCH : matchGraph.MATCH;
                    }
                } else {
                    state = isCommaContextStart(matchStack.token) || isCommaContextEnd(token) ? matchGraph.MATCH : matchGraph.MISMATCH;
                }

                break;

            case 'String':
                let string = '';
                let lastTokenIndex = tokenIndex;

                for (; lastTokenIndex < tokens.length && string.length < state.value.length; lastTokenIndex++) {
                    string += tokens[lastTokenIndex].value;
                }

                if (areStringsEqualCaseInsensitive(string, state.value)) {
                    while (tokenIndex < lastTokenIndex) {
                        addTokenToMatch();
                    }

                    state = matchGraph.MATCH;
                } else {
                    state = matchGraph.MISMATCH;
                }

                break;

            default:
                throw new Error('Unknown node type: ' + state.type);
        }
    }

    switch (exitReason) {
        case null:
            console.warn('[csstree-match] BREAK after ' + ITERATION_LIMIT + ' iterations');
            exitReason = EXIT_REASON_ITERATION_LIMIT;
            matchStack = null;
            break;

        case EXIT_REASON_MATCH:
            while (syntaxStack !== null) {
                closeSyntax();
            }
            break;

        default:
            matchStack = null;
    }

    return {
        tokens,
        reason: exitReason,
        iterations: iterationCount,
        match: matchStack,
        longestMatch
    };
}

function matchAsList(tokens, matchGraph, syntaxes) {
    const matchResult = internalMatch(tokens, matchGraph, syntaxes || {});

    if (matchResult.match !== null) {
        let item = reverseList(matchResult.match).prev;

        matchResult.match = [];

        while (item !== null) {
            switch (item.type) {
                case OPEN_SYNTAX:
                case CLOSE_SYNTAX:
                    matchResult.match.push({
                        type: item.type,
                        syntax: item.syntax
                    });
                    break;

                default:
                    matchResult.match.push({
                        token: item.token.value,
                        node: item.token.node
                    });
                    break;
            }

            item = item.prev;
        }
    }

    return matchResult;
}

function matchAsTree(tokens, matchGraph, syntaxes) {
    const matchResult = internalMatch(tokens, matchGraph, syntaxes || {});

    if (matchResult.match === null) {
        return matchResult;
    }

    let item = matchResult.match;
    let host = matchResult.match = {
        syntax: matchGraph.syntax || null,
        match: []
    };
    const hostStack = [host];

    // revert a list and start with 2nd item since 1st is a stub item
    item = reverseList(item).prev;

    // build a tree
    while (item !== null) {
        switch (item.type) {
            case OPEN_SYNTAX:
                host.match.push(host = {
                    syntax: item.syntax,
                    match: []
                });
                hostStack.push(host);
                break;

            case CLOSE_SYNTAX:
                hostStack.pop();
                host = hostStack[hostStack.length - 1];
                break;

            default:
                host.match.push({
                    syntax: item.syntax || null,
                    token: item.token.value,
                    node: item.token.node
                });
        }

        item = item.prev;
    }

    return matchResult;
}

exports.matchAsList = matchAsList;
exports.matchAsTree = matchAsTree;
