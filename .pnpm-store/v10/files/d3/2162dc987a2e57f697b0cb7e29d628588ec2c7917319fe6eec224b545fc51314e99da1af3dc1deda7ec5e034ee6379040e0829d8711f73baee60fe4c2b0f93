import { parse } from '../definition-syntax/parse.js';

export const MATCH = { type: 'Match' };
export const MISMATCH = { type: 'Mismatch' };
export const DISALLOW_EMPTY = { type: 'DisallowEmpty' };

const LEFTPARENTHESIS = 40;  // (
const RIGHTPARENTHESIS = 41; // )

function createCondition(match, thenBranch, elseBranch) {
    // reduce node count
    if (thenBranch === MATCH && elseBranch === MISMATCH) {
        return match;
    }

    if (match === MATCH && thenBranch === MATCH && elseBranch === MATCH) {
        return match;
    }

    if (match.type === 'If' && match.else === MISMATCH && thenBranch === MATCH) {
        thenBranch = match.then;
        match = match.match;
    }

    return {
        type: 'If',
        match,
        then: thenBranch,
        else: elseBranch
    };
}

function isFunctionType(name) {
    return (
        name.length > 2 &&
        name.charCodeAt(name.length - 2) === LEFTPARENTHESIS &&
        name.charCodeAt(name.length - 1) === RIGHTPARENTHESIS
    );
}

function isEnumCapatible(term) {
    return (
        term.type === 'Keyword' ||
        term.type === 'AtKeyword' ||
        term.type === 'Function' ||
        term.type === 'Type' && isFunctionType(term.name)
    );
}

function groupNode(terms, combinator = ' ', explicit = false) {
    return {
        type: 'Group',
        terms,
        combinator,
        disallowEmpty: false,
        explicit
    };
}

function replaceTypeInGraph(node, replacements, visited = new Set()) {
    if (!visited.has(node)) {
        visited.add(node);

        switch (node.type) {
            case 'If':
                node.match = replaceTypeInGraph(node.match, replacements, visited);
                node.then = replaceTypeInGraph(node.then, replacements, visited);
                node.else = replaceTypeInGraph(node.else, replacements, visited);
                break;

            case 'Type':
                return replacements[node.name] || node;
        }
    }

    return node;
}

function buildGroupMatchGraph(combinator, terms, atLeastOneTermMatched) {
    switch (combinator) {
        case ' ': {
            // Juxtaposing components means that all of them must occur, in the given order.
            //
            // a b c
            // =
            // match a
            //   then match b
            //     then match c
            //       then MATCH
            //       else MISMATCH
            //     else MISMATCH
            //   else MISMATCH
            let result = MATCH;

            for (let i = terms.length - 1; i >= 0; i--) {
                const term = terms[i];

                result = createCondition(
                    term,
                    result,
                    MISMATCH
                );
            };

            return result;
        }

        case '|': {
            // A bar (|) separates two or more alternatives: exactly one of them must occur.
            //
            // a | b | c
            // =
            // match a
            //   then MATCH
            //   else match b
            //     then MATCH
            //     else match c
            //       then MATCH
            //       else MISMATCH

            let result = MISMATCH;
            let map = null;

            for (let i = terms.length - 1; i >= 0; i--) {
                let term = terms[i];

                // reduce sequence of keywords into a Enum
                if (isEnumCapatible(term)) {
                    if (map === null && i > 0 && isEnumCapatible(terms[i - 1])) {
                        map = Object.create(null);
                        result = createCondition(
                            {
                                type: 'Enum',
                                map
                            },
                            MATCH,
                            result
                        );
                    }

                    if (map !== null) {
                        const key = (isFunctionType(term.name) ? term.name.slice(0, -1) : term.name).toLowerCase();
                        if (key in map === false) {
                            map[key] = term;
                            continue;
                        }
                    }
                }

                map = null;

                // create a new conditonal node
                result = createCondition(
                    term,
                    MATCH,
                    result
                );
            };

            return result;
        }

        case '&&': {
            // A double ampersand (&&) separates two or more components,
            // all of which must occur, in any order.

            // Use MatchOnce for groups with a large number of terms,
            // since &&-groups produces at least N!-node trees
            if (terms.length > 5) {
                return {
                    type: 'MatchOnce',
                    terms,
                    all: true
                };
            }

            // Use a combination tree for groups with small number of terms
            //
            // a && b && c
            // =
            // match a
            //   then [b && c]
            //   else match b
            //     then [a && c]
            //     else match c
            //       then [a && b]
            //       else MISMATCH
            //
            // a && b
            // =
            // match a
            //   then match b
            //     then MATCH
            //     else MISMATCH
            //   else match b
            //     then match a
            //       then MATCH
            //       else MISMATCH
            //     else MISMATCH
            let result = MISMATCH;

            for (let i = terms.length - 1; i >= 0; i--) {
                const term = terms[i];
                let thenClause;

                if (terms.length > 1) {
                    thenClause = buildGroupMatchGraph(
                        combinator,
                        terms.filter(function(newGroupTerm) {
                            return newGroupTerm !== term;
                        }),
                        false
                    );
                } else {
                    thenClause = MATCH;
                }

                result = createCondition(
                    term,
                    thenClause,
                    result
                );
            };

            return result;
        }

        case '||': {
            // A double bar (||) separates two or more options:
            // one or more of them must occur, in any order.

            // Use MatchOnce for groups with a large number of terms,
            // since ||-groups produces at least N!-node trees
            if (terms.length > 5) {
                return {
                    type: 'MatchOnce',
                    terms,
                    all: false
                };
            }

            // Use a combination tree for groups with small number of terms
            //
            // a || b || c
            // =
            // match a
            //   then [b || c]
            //   else match b
            //     then [a || c]
            //     else match c
            //       then [a || b]
            //       else MISMATCH
            //
            // a || b
            // =
            // match a
            //   then match b
            //     then MATCH
            //     else MATCH
            //   else match b
            //     then match a
            //       then MATCH
            //       else MATCH
            //     else MISMATCH
            let result = atLeastOneTermMatched ? MATCH : MISMATCH;

            for (let i = terms.length - 1; i >= 0; i--) {
                const term = terms[i];
                let thenClause;

                if (terms.length > 1) {
                    thenClause = buildGroupMatchGraph(
                        combinator,
                        terms.filter(function(newGroupTerm) {
                            return newGroupTerm !== term;
                        }),
                        true
                    );
                } else {
                    thenClause = MATCH;
                }

                result = createCondition(
                    term,
                    thenClause,
                    result
                );
            };

            return result;
        }
    }
}

function buildMultiplierMatchGraph(node) {
    let result = MATCH;
    let matchTerm = buildMatchGraphInternal(node.term);

    if (node.max === 0) {
        // disable repeating of empty match to prevent infinite loop
        matchTerm = createCondition(
            matchTerm,
            DISALLOW_EMPTY,
            MISMATCH
        );

        // an occurrence count is not limited, make a cycle;
        // to collect more terms on each following matching mismatch
        result = createCondition(
            matchTerm,
            null, // will be a loop
            MISMATCH
        );

        result.then = createCondition(
            MATCH,
            MATCH,
            result // make a loop
        );

        if (node.comma) {
            result.then.else = createCondition(
                { type: 'Comma', syntax: node },
                result,
                MISMATCH
            );
        }
    } else {
        // create a match node chain for [min .. max] interval with optional matches
        for (let i = node.min || 1; i <= node.max; i++) {
            if (node.comma && result !== MATCH) {
                result = createCondition(
                    { type: 'Comma', syntax: node },
                    result,
                    MISMATCH
                );
            }

            result = createCondition(
                matchTerm,
                createCondition(
                    MATCH,
                    MATCH,
                    result
                ),
                MISMATCH
            );
        }
    }

    if (node.min === 0) {
        // allow zero match
        result = createCondition(
            MATCH,
            MATCH,
            result
        );
    } else {
        // create a match node chain to collect [0 ... min - 1] required matches
        for (let i = 0; i < node.min - 1; i++) {
            if (node.comma && result !== MATCH) {
                result = createCondition(
                    { type: 'Comma', syntax: node },
                    result,
                    MISMATCH
                );
            }

            result = createCondition(
                matchTerm,
                result,
                MISMATCH
            );
        }
    }

    return result;
}

function buildMatchGraphInternal(node) {
    if (typeof node === 'function') {
        return {
            type: 'Generic',
            fn: node
        };
    }

    switch (node.type) {
        case 'Group': {
            let result = buildGroupMatchGraph(
                node.combinator,
                node.terms.map(buildMatchGraphInternal),
                false
            );

            if (node.disallowEmpty) {
                result = createCondition(
                    result,
                    DISALLOW_EMPTY,
                    MISMATCH
                );
            }

            return result;
        }

        case 'Multiplier':
            return buildMultiplierMatchGraph(node);

        // https://drafts.csswg.org/css-values-5/#boolean
        case 'Boolean': {
            const term = buildMatchGraphInternal(node.term);
            // <boolean-expr[ <test> ]> = not <boolean-expr-group> | <boolean-expr-group> [ [ and <boolean-expr-group> ]* | [ or <boolean-expr-group> ]* ]
            const matchNode = buildMatchGraphInternal(groupNode([
                groupNode([
                    { type: 'Keyword', name: 'not' },
                    { type: 'Type', name: '!boolean-group' }
                ]),
                groupNode([
                    { type: 'Type', name: '!boolean-group' },
                    groupNode([
                        { type: 'Multiplier', comma: false, min: 0, max: 0, term: groupNode([
                            { type: 'Keyword', name: 'and' },
                            { type: 'Type', name: '!boolean-group' }
                        ]) },
                        { type: 'Multiplier', comma: false, min: 0, max: 0, term: groupNode([
                            { type: 'Keyword', name: 'or' },
                            { type: 'Type', name: '!boolean-group' }
                        ]) }
                    ], '|')
                ])
            ], '|'));
            // <boolean-expr-group> = <test> | ( <boolean-expr[ <test> ]> ) | <general-enclosed>
            const booleanGroup = buildMatchGraphInternal(
                groupNode([
                    { type: 'Type', name: '!term' },
                    groupNode([
                        { type: 'Token', value: '(' },
                        { type: 'Type', name: '!self' },
                        { type: 'Token', value: ')' }
                    ]),
                    { type: 'Type', name: 'general-enclosed' }
                ], '|')
            );

            replaceTypeInGraph(booleanGroup, { '!term': term, '!self': matchNode });
            replaceTypeInGraph(matchNode, { '!boolean-group': booleanGroup });

            return matchNode;
        }

        case 'Type':
        case 'Property':
            return {
                type: node.type,
                name: node.name,
                syntax: node
            };

        case 'Keyword':
            return {
                type: node.type,
                name: node.name.toLowerCase(),
                syntax: node
            };

        case 'AtKeyword':
            return {
                type: node.type,
                name: '@' + node.name.toLowerCase(),
                syntax: node
            };

        case 'Function':
            return {
                type: node.type,
                name: node.name.toLowerCase() + '(',
                syntax: node
            };

        case 'String':
            // convert a one char length String to a Token
            if (node.value.length === 3) {
                return {
                    type: 'Token',
                    value: node.value.charAt(1),
                    syntax: node
                };
            }

            // otherwise use it as is
            return {
                type: node.type,
                value: node.value.substr(1, node.value.length - 2).replace(/\\'/g, '\''),
                syntax: node
            };

        case 'Token':
            return {
                type: node.type,
                value: node.value,
                syntax: node
            };

        case 'Comma':
            return {
                type: node.type,
                syntax: node
            };

        default:
            throw new Error('Unknown node type:', node.type);
    }
}

export function buildMatchGraph(syntaxTree, ref) {
    if (typeof syntaxTree === 'string') {
        syntaxTree = parse(syntaxTree);
    }

    return {
        type: 'MatchGraph',
        match: buildMatchGraphInternal(syntaxTree),
        syntax: ref || null,
        source: syntaxTree
    };
}
