import { fuzzyScore, createMatches } from './filters.js';
import { sep } from './path.js';
import { isWindows } from './platform.js';

const NO_SCORE2 = [undefined, []];
function scoreFuzzy2(target, query, patternStart = 0, wordStart = 0) {
    // Score: multiple inputs
    const preparedQuery = query;
    if (preparedQuery.values && preparedQuery.values.length > 1) {
        return doScoreFuzzy2Multiple(target, preparedQuery.values, patternStart, wordStart);
    }
    // Score: single input
    return doScoreFuzzy2Single(target, query, patternStart, wordStart);
}
function doScoreFuzzy2Multiple(target, query, patternStart, wordStart) {
    let totalScore = 0;
    const totalMatches = [];
    for (const queryPiece of query) {
        const [score, matches] = doScoreFuzzy2Single(target, queryPiece, patternStart, wordStart);
        if (typeof score !== 'number') {
            // if a single query value does not match, return with
            // no score entirely, we require all queries to match
            return NO_SCORE2;
        }
        totalScore += score;
        totalMatches.push(...matches);
    }
    // if we have a score, ensure that the positions are
    // sorted in ascending order and distinct
    return [totalScore, normalizeMatches(totalMatches)];
}
function doScoreFuzzy2Single(target, query, patternStart, wordStart) {
    const score = fuzzyScore(query.original, query.originalLowercase, patternStart, target, target.toLowerCase(), wordStart, { firstMatchCanBeWeak: true, boostFullMatch: true });
    if (!score) {
        return NO_SCORE2;
    }
    return [score[0], createMatches(score)];
}
function normalizeMatches(matches) {
    // sort matches by start to be able to normalize
    const sortedMatches = matches.sort((matchA, matchB) => {
        return matchA.start - matchB.start;
    });
    // merge matches that overlap
    const normalizedMatches = [];
    let currentMatch = undefined;
    for (const match of sortedMatches) {
        // if we have no current match or the matches
        // do not overlap, we take it as is and remember
        // it for future merging
        if (!currentMatch || !matchOverlaps(currentMatch, match)) {
            currentMatch = match;
            normalizedMatches.push(match);
        }
        // otherwise we merge the matches
        else {
            currentMatch.start = Math.min(currentMatch.start, match.start);
            currentMatch.end = Math.max(currentMatch.end, match.end);
        }
    }
    return normalizedMatches;
}
function matchOverlaps(matchA, matchB) {
    if (matchA.end < matchB.start) {
        return false; // A ends before B starts
    }
    if (matchB.end < matchA.start) {
        return false; // B ends before A starts
    }
    return true;
}
/*
 * If a query is wrapped in quotes, the user does not want to
 * use fuzzy search for this query.
 */
function queryExpectsExactMatch(query) {
    return query.startsWith('"') && query.endsWith('"');
}
/**
 * Helper function to prepare a search value for scoring by removing unwanted characters
 * and allowing to score on multiple pieces separated by whitespace character.
 */
const MULTIPLE_QUERY_VALUES_SEPARATOR = ' ';
function prepareQuery(original) {
    if (typeof original !== 'string') {
        original = '';
    }
    const originalLowercase = original.toLowerCase();
    const { pathNormalized, normalized, normalizedLowercase } = normalizeQuery(original);
    const containsPathSeparator = pathNormalized.indexOf(sep) >= 0;
    const expectExactMatch = queryExpectsExactMatch(original);
    let values = undefined;
    const originalSplit = original.split(MULTIPLE_QUERY_VALUES_SEPARATOR);
    if (originalSplit.length > 1) {
        for (const originalPiece of originalSplit) {
            const expectExactMatchPiece = queryExpectsExactMatch(originalPiece);
            const { pathNormalized: pathNormalizedPiece, normalized: normalizedPiece, normalizedLowercase: normalizedLowercasePiece } = normalizeQuery(originalPiece);
            if (normalizedPiece) {
                if (!values) {
                    values = [];
                }
                values.push({
                    original: originalPiece,
                    originalLowercase: originalPiece.toLowerCase(),
                    pathNormalized: pathNormalizedPiece,
                    normalized: normalizedPiece,
                    normalizedLowercase: normalizedLowercasePiece,
                    expectContiguousMatch: expectExactMatchPiece
                });
            }
        }
    }
    return { original, originalLowercase, pathNormalized, normalized, normalizedLowercase, values, containsPathSeparator, expectContiguousMatch: expectExactMatch };
}
function normalizeQuery(original) {
    let pathNormalized;
    if (isWindows) {
        pathNormalized = original.replace(/\//g, sep); // Help Windows users to search for paths when using slash
    }
    else {
        pathNormalized = original.replace(/\\/g, sep); // Help macOS/Linux users to search for paths when using backslash
    }
    // remove certain characters that help find better results:
    // - quotes: are used for exact match search
    // - wildcards: are used for fuzzy matching
    // - whitespace: are used to separate queries
    // - ellipsis: sometimes used to indicate any path segments
    const normalized = pathNormalized.replace(/[\*\u2026\s"]/g, '');
    return {
        pathNormalized,
        normalized,
        normalizedLowercase: normalized.toLowerCase()
    };
}
function pieceToQuery(arg1) {
    if (Array.isArray(arg1)) {
        return prepareQuery(arg1.map(piece => piece.original).join(MULTIPLE_QUERY_VALUES_SEPARATOR));
    }
    return prepareQuery(arg1.original);
}
//#endregion

export { pieceToQuery, prepareQuery, scoreFuzzy2 };
