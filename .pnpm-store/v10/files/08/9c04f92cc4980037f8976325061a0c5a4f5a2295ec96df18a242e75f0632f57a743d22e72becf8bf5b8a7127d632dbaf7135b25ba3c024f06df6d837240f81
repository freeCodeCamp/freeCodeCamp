import { isThenable } from './async.js';
import { isEqualOrParent } from './extpath.js';
import { LRUCache } from './map.js';
import { sep, posix, basename, extname } from './path.js';
import { isLinux } from './platform.js';
import { ltrim, escapeRegExpCharacters, endsWithIgnoreCase, equalsIgnoreCase } from './strings.js';

const GLOBSTAR = '**';
const GLOB_SPLIT = '/';
const PATH_REGEX = '[/\\\\]'; // any slash or backslash
const NO_PATH_REGEX = '[^/\\\\]'; // any non-slash and non-backslash
const ALL_FORWARD_SLASHES = /\//g;
function starsToRegExp(starCount, isLastPattern) {
    switch (starCount) {
        case 0:
            return '';
        case 1:
            return `${NO_PATH_REGEX}*?`; // 1 star matches any number of characters except path separator (/ and \) - non greedy (?)
        default:
            // Matches:  (Path Sep OR Path Val followed by Path Sep) 0-many times except when it's the last pattern
            //           in which case also matches (Path Sep followed by Path Val)
            // Group is non capturing because we don't need to capture at all (?:...)
            // Overall we use non-greedy matching because it could be that we match too much
            return `(?:${PATH_REGEX}|${NO_PATH_REGEX}+${PATH_REGEX}${isLastPattern ? `|${PATH_REGEX}${NO_PATH_REGEX}+` : ''})*?`;
    }
}
function splitGlobAware(pattern, splitChar) {
    if (!pattern) {
        return [];
    }
    const segments = [];
    let inBraces = false;
    let inBrackets = false;
    let curVal = '';
    for (const char of pattern) {
        switch (char) {
            case splitChar:
                if (!inBraces && !inBrackets) {
                    segments.push(curVal);
                    curVal = '';
                    continue;
                }
                break;
            case '{':
                inBraces = true;
                break;
            case '}':
                inBraces = false;
                break;
            case '[':
                inBrackets = true;
                break;
            case ']':
                inBrackets = false;
                break;
        }
        curVal += char;
    }
    // Tail
    if (curVal) {
        segments.push(curVal);
    }
    return segments;
}
function parseRegExp(pattern) {
    if (!pattern) {
        return '';
    }
    let regEx = '';
    // Split up into segments for each slash found
    const segments = splitGlobAware(pattern, GLOB_SPLIT);
    // Special case where we only have globstars
    if (segments.every(segment => segment === GLOBSTAR)) {
        regEx = '.*';
    }
    // Build regex over segments
    else {
        let previousSegmentWasGlobStar = false;
        segments.forEach((segment, index) => {
            // Treat globstar specially
            if (segment === GLOBSTAR) {
                // if we have more than one globstar after another, just ignore it
                if (previousSegmentWasGlobStar) {
                    return;
                }
                regEx += starsToRegExp(2, index === segments.length - 1);
            }
            // Anything else, not globstar
            else {
                // States
                let inBraces = false;
                let braceVal = '';
                let inBrackets = false;
                let bracketVal = '';
                for (const char of segment) {
                    // Support brace expansion
                    if (char !== '}' && inBraces) {
                        braceVal += char;
                        continue;
                    }
                    // Support brackets
                    if (inBrackets && (char !== ']' || !bracketVal) /* ] is literally only allowed as first character in brackets to match it */) {
                        let res;
                        // range operator
                        if (char === '-') {
                            res = char;
                        }
                        // negation operator (only valid on first index in bracket)
                        else if ((char === '^' || char === '!') && !bracketVal) {
                            res = '^';
                        }
                        // glob split matching is not allowed within character ranges
                        // see http://man7.org/linux/man-pages/man7/glob.7.html
                        else if (char === GLOB_SPLIT) {
                            res = '';
                        }
                        // anything else gets escaped
                        else {
                            res = escapeRegExpCharacters(char);
                        }
                        bracketVal += res;
                        continue;
                    }
                    switch (char) {
                        case '{':
                            inBraces = true;
                            continue;
                        case '[':
                            inBrackets = true;
                            continue;
                        case '}': {
                            const choices = splitGlobAware(braceVal, ',');
                            // Converts {foo,bar} => [foo|bar]
                            const braceRegExp = `(?:${choices.map(choice => parseRegExp(choice)).join('|')})`;
                            regEx += braceRegExp;
                            inBraces = false;
                            braceVal = '';
                            break;
                        }
                        case ']': {
                            regEx += ('[' + bracketVal + ']');
                            inBrackets = false;
                            bracketVal = '';
                            break;
                        }
                        case '?':
                            regEx += NO_PATH_REGEX; // 1 ? matches any single character except path separator (/ and \)
                            continue;
                        case '*':
                            regEx += starsToRegExp(1);
                            continue;
                        default:
                            regEx += escapeRegExpCharacters(char);
                    }
                }
                // Tail: Add the slash we had split on if there is more to
                // come and the remaining pattern is not a globstar
                // For example if pattern: some/**/*.js we want the "/" after
                // some to be included in the RegEx to prevent a folder called
                // "something" to match as well.
                if (index < segments.length - 1 && // more segments to come after this
                    (segments[index + 1] !== GLOBSTAR || // next segment is not **, or...
                        index + 2 < segments.length // ...next segment is ** but there is more segments after that
                    )) {
                    regEx += PATH_REGEX;
                }
            }
            // update globstar state
            previousSegmentWasGlobStar = (segment === GLOBSTAR);
        });
    }
    return regEx;
}
// regexes to check for trivial glob patterns that just check for String#endsWith
const T1 = /^\*\*\/\*\.[\w\.-]+$/; // **/*.something
const T2 = /^\*\*\/([\w\.-]+)\/?$/; // **/something
const T3 = /^{\*\*\/\*?[\w\.-]+\/?(,\*\*\/\*?[\w\.-]+\/?)*}$/; // {**/*.something,**/*.else} or {**/package.json,**/project.json}
const T3_2 = /^{\*\*\/\*?[\w\.-]+(\/(\*\*)?)?(,\*\*\/\*?[\w\.-]+(\/(\*\*)?)?)*}$/; // Like T3, with optional trailing /**
const T4 = /^\*\*((\/[\w\.-]+)+)\/?$/; // **/something/else
const T5 = /^([\w\.-]+(\/[\w\.-]+)*)\/?$/; // something/else
const CACHE = new LRUCache(10000); // bounded to 10000 elements
const FALSE = function () {
    return false;
};
const NULL = function () {
    return null;
};
function parsePattern(arg1, options) {
    if (!arg1) {
        return NULL;
    }
    // Handle relative patterns
    let pattern;
    if (typeof arg1 !== 'string') {
        pattern = arg1.pattern;
    }
    else {
        pattern = arg1;
    }
    // Whitespace trimming
    pattern = pattern.trim();
    const ignoreCase = options.ignoreCase ?? false;
    const internalOptions = {
        ...options,
        equals: ignoreCase ? equalsIgnoreCase : (a, b) => a === b,
        endsWith: ignoreCase ? endsWithIgnoreCase : (str, candidate) => str.endsWith(candidate),
        // TODO: the '!isLinux' part below is to keep current behavior unchanged, but it should probably be removed
        // in favor of passing correct options from the caller.
        isEqualOrParent: (base, candidate) => isEqualOrParent(base, candidate, !isLinux || ignoreCase)
    };
    // Check cache
    const patternKey = `${ignoreCase ? pattern.toLowerCase() : pattern}_${!!options.trimForExclusions}_${ignoreCase}`;
    let parsedPattern = CACHE.get(patternKey);
    if (parsedPattern) {
        return wrapRelativePattern(parsedPattern, arg1, internalOptions);
    }
    // Check for Trivials
    let match;
    if (T1.test(pattern)) {
        parsedPattern = trivia1(pattern.substring(4), pattern, internalOptions); // common pattern: **/*.txt just need endsWith check
    }
    else if (match = T2.exec(trimForExclusions(pattern, internalOptions))) { // common pattern: **/some.txt just need basename check
        parsedPattern = trivia2(match[1], pattern, internalOptions);
    }
    else if ((options.trimForExclusions ? T3_2 : T3).test(pattern)) { // repetition of common patterns (see above) {**/*.txt,**/*.png}
        parsedPattern = trivia3(pattern, internalOptions);
    }
    else if (match = T4.exec(trimForExclusions(pattern, internalOptions))) { // common pattern: **/something/else just need endsWith check
        parsedPattern = trivia4and5(match[1].substring(1), pattern, true, internalOptions);
    }
    else if (match = T5.exec(trimForExclusions(pattern, internalOptions))) { // common pattern: something/else just need equals check
        parsedPattern = trivia4and5(match[1], pattern, false, internalOptions);
    }
    // Otherwise convert to pattern
    else {
        parsedPattern = toRegExp(pattern, internalOptions);
    }
    // Cache
    CACHE.set(patternKey, parsedPattern);
    return wrapRelativePattern(parsedPattern, arg1, internalOptions);
}
function wrapRelativePattern(parsedPattern, arg2, options) {
    if (typeof arg2 === 'string') {
        return parsedPattern;
    }
    const wrappedPattern = function (path, basename) {
        if (!options.isEqualOrParent(path, arg2.base)) {
            // skip glob matching if `base` is not a parent of `path`
            return null;
        }
        // Given we have checked `base` being a parent of `path`,
        // we can now remove the `base` portion of the `path`
        // and only match on the remaining path components
        // For that we try to extract the portion of the `path`
        // that comes after the `base` portion. We have to account
        // for the fact that `base` might end in a path separator
        // (https://github.com/microsoft/vscode/issues/162498)
        return parsedPattern(ltrim(path.substring(arg2.base.length), sep), basename);
    };
    // Make sure to preserve associated metadata
    wrappedPattern.allBasenames = parsedPattern.allBasenames;
    wrappedPattern.allPaths = parsedPattern.allPaths;
    wrappedPattern.basenames = parsedPattern.basenames;
    wrappedPattern.patterns = parsedPattern.patterns;
    return wrappedPattern;
}
function trimForExclusions(pattern, options) {
    return options.trimForExclusions && pattern.endsWith('/**') ? pattern.substring(0, pattern.length - 2) : pattern; // dropping **, tailing / is dropped later
}
// common pattern: **/*.txt just need endsWith check
function trivia1(base, pattern, options) {
    return function (path, basename) {
        return typeof path === 'string' && options.endsWith(path, base) ? pattern : null;
    };
}
// common pattern: **/some.txt just need basename check
function trivia2(base, pattern, options) {
    const slashBase = `/${base}`;
    const backslashBase = `\\${base}`;
    const parsedPattern = function (path, basename) {
        if (typeof path !== 'string') {
            return null;
        }
        if (basename) {
            return options.equals(basename, base) ? pattern : null;
        }
        return options.equals(path, base) || options.endsWith(path, slashBase) || options.endsWith(path, backslashBase) ? pattern : null;
    };
    const basenames = [base];
    parsedPattern.basenames = basenames;
    parsedPattern.patterns = [pattern];
    parsedPattern.allBasenames = basenames;
    return parsedPattern;
}
// repetition of common patterns (see above) {**/*.txt,**/*.png}
function trivia3(pattern, options) {
    const parsedPatterns = aggregateBasenameMatches(pattern.slice(1, -1)
        .split(',')
        .map(pattern => parsePattern(pattern, options))
        .filter(pattern => pattern !== NULL), pattern);
    const patternsLength = parsedPatterns.length;
    if (!patternsLength) {
        return NULL;
    }
    if (patternsLength === 1) {
        return parsedPatterns[0];
    }
    const parsedPattern = function (path, basename) {
        for (let i = 0, n = parsedPatterns.length; i < n; i++) {
            if (parsedPatterns[i](path, basename)) {
                return pattern;
            }
        }
        return null;
    };
    const withBasenames = parsedPatterns.find(pattern => !!pattern.allBasenames);
    if (withBasenames) {
        parsedPattern.allBasenames = withBasenames.allBasenames;
    }
    const allPaths = parsedPatterns.reduce((all, current) => current.allPaths ? all.concat(current.allPaths) : all, []);
    if (allPaths.length) {
        parsedPattern.allPaths = allPaths;
    }
    return parsedPattern;
}
// common patterns: **/something/else just need endsWith check, something/else just needs and equals check
function trivia4and5(targetPath, pattern, matchPathEnds, options) {
    const usingPosixSep = sep === posix.sep;
    const nativePath = usingPosixSep ? targetPath : targetPath.replace(ALL_FORWARD_SLASHES, sep);
    const nativePathEnd = sep + nativePath;
    const targetPathEnd = posix.sep + targetPath;
    let parsedPattern;
    if (matchPathEnds) {
        parsedPattern = function (path, basename) {
            return typeof path === 'string' && ((options.equals(path, nativePath) || options.endsWith(path, nativePathEnd)) ||
                !usingPosixSep && (options.equals(path, targetPath) || options.endsWith(path, targetPathEnd))) ? pattern : null;
        };
    }
    else {
        parsedPattern = function (path, basename) {
            return typeof path === 'string' && (options.equals(path, nativePath) || (!usingPosixSep && options.equals(path, targetPath))) ? pattern : null;
        };
    }
    parsedPattern.allPaths = [(matchPathEnds ? '*/' : './') + targetPath];
    return parsedPattern;
}
function toRegExp(pattern, options) {
    try {
        const regExp = new RegExp(`^${parseRegExp(pattern)}$`, options.ignoreCase ? 'i' : undefined);
        return function (path) {
            regExp.lastIndex = 0; // reset RegExp to its initial state to reuse it!
            return typeof path === 'string' && regExp.test(path) ? pattern : null;
        };
    }
    catch {
        return NULL;
    }
}
function match(arg1, path, options) {
    if (!arg1 || typeof path !== 'string') {
        return false;
    }
    return parse(arg1, options)(path);
}
function parse(arg1, options = {}) {
    if (!arg1) {
        return FALSE;
    }
    // Glob with String
    if (typeof arg1 === 'string' || isRelativePattern(arg1)) {
        const parsedPattern = parsePattern(arg1, options);
        if (parsedPattern === NULL) {
            return FALSE;
        }
        const resultPattern = function (path, basename) {
            return !!parsedPattern(path, basename);
        };
        if (parsedPattern.allBasenames) {
            resultPattern.allBasenames = parsedPattern.allBasenames;
        }
        if (parsedPattern.allPaths) {
            resultPattern.allPaths = parsedPattern.allPaths;
        }
        return resultPattern;
    }
    // Glob with Expression
    return parsedExpression(arg1, options);
}
function isRelativePattern(obj) {
    const rp = obj;
    if (!rp) {
        return false;
    }
    return typeof rp.base === 'string' && typeof rp.pattern === 'string';
}
function parsedExpression(expression, options) {
    const parsedPatterns = aggregateBasenameMatches(Object.getOwnPropertyNames(expression)
        .map(pattern => parseExpressionPattern(pattern, expression[pattern], options))
        .filter(pattern => pattern !== NULL));
    const patternsLength = parsedPatterns.length;
    if (!patternsLength) {
        return NULL;
    }
    if (!parsedPatterns.some(parsedPattern => !!parsedPattern.requiresSiblings)) {
        if (patternsLength === 1) {
            return parsedPatterns[0];
        }
        const resultExpression = function (path, basename) {
            let resultPromises = undefined;
            for (let i = 0, n = parsedPatterns.length; i < n; i++) {
                const result = parsedPatterns[i](path, basename);
                if (typeof result === 'string') {
                    return result; // immediately return as soon as the first expression matches
                }
                // If the result is a promise, we have to keep it for
                // later processing and await the result properly.
                if (isThenable(result)) {
                    if (!resultPromises) {
                        resultPromises = [];
                    }
                    resultPromises.push(result);
                }
            }
            // With result promises, we have to loop over each and
            // await the result before we can return any result.
            if (resultPromises) {
                return (async () => {
                    for (const resultPromise of resultPromises) {
                        const result = await resultPromise;
                        if (typeof result === 'string') {
                            return result;
                        }
                    }
                    return null;
                })();
            }
            return null;
        };
        const withBasenames = parsedPatterns.find(pattern => !!pattern.allBasenames);
        if (withBasenames) {
            resultExpression.allBasenames = withBasenames.allBasenames;
        }
        const allPaths = parsedPatterns.reduce((all, current) => current.allPaths ? all.concat(current.allPaths) : all, []);
        if (allPaths.length) {
            resultExpression.allPaths = allPaths;
        }
        return resultExpression;
    }
    const resultExpression = function (path, base, hasSibling) {
        let name = undefined;
        let resultPromises = undefined;
        for (let i = 0, n = parsedPatterns.length; i < n; i++) {
            // Pattern matches path
            const parsedPattern = parsedPatterns[i];
            if (parsedPattern.requiresSiblings && hasSibling) {
                if (!base) {
                    base = basename(path);
                }
                if (!name) {
                    name = base.substring(0, base.length - extname(path).length);
                }
            }
            const result = parsedPattern(path, base, name, hasSibling);
            if (typeof result === 'string') {
                return result; // immediately return as soon as the first expression matches
            }
            // If the result is a promise, we have to keep it for
            // later processing and await the result properly.
            if (isThenable(result)) {
                if (!resultPromises) {
                    resultPromises = [];
                }
                resultPromises.push(result);
            }
        }
        // With result promises, we have to loop over each and
        // await the result before we can return any result.
        if (resultPromises) {
            return (async () => {
                for (const resultPromise of resultPromises) {
                    const result = await resultPromise;
                    if (typeof result === 'string') {
                        return result;
                    }
                }
                return null;
            })();
        }
        return null;
    };
    const withBasenames = parsedPatterns.find(pattern => !!pattern.allBasenames);
    if (withBasenames) {
        resultExpression.allBasenames = withBasenames.allBasenames;
    }
    const allPaths = parsedPatterns.reduce((all, current) => current.allPaths ? all.concat(current.allPaths) : all, []);
    if (allPaths.length) {
        resultExpression.allPaths = allPaths;
    }
    return resultExpression;
}
function parseExpressionPattern(pattern, value, options) {
    if (value === false) {
        return NULL; // pattern is disabled
    }
    const parsedPattern = parsePattern(pattern, options);
    if (parsedPattern === NULL) {
        return NULL;
    }
    // Expression Pattern is <boolean>
    if (typeof value === 'boolean') {
        return parsedPattern;
    }
    // Expression Pattern is <SiblingClause>
    if (value) {
        const when = value.when;
        if (typeof when === 'string') {
            const result = (path, basename, name, hasSibling) => {
                if (!hasSibling || !parsedPattern(path, basename)) {
                    return null;
                }
                const clausePattern = when.replace('$(basename)', () => name);
                const matched = hasSibling(clausePattern);
                return isThenable(matched) ?
                    matched.then(match => match ? pattern : null) :
                    matched ? pattern : null;
            };
            result.requiresSiblings = true;
            return result;
        }
    }
    // Expression is anything
    return parsedPattern;
}
function aggregateBasenameMatches(parsedPatterns, result) {
    const basenamePatterns = parsedPatterns.filter(parsedPattern => !!parsedPattern.basenames);
    if (basenamePatterns.length < 2) {
        return parsedPatterns;
    }
    const basenames = basenamePatterns.reduce((all, current) => {
        const basenames = current.basenames;
        return basenames ? all.concat(basenames) : all;
    }, []);
    let patterns;
    if (result) {
        patterns = [];
        for (let i = 0, n = basenames.length; i < n; i++) {
            patterns.push(result);
        }
    }
    else {
        patterns = basenamePatterns.reduce((all, current) => {
            const patterns = current.patterns;
            return patterns ? all.concat(patterns) : all;
        }, []);
    }
    const aggregate = function (path, basename) {
        if (typeof path !== 'string') {
            return null;
        }
        if (!basename) {
            let i;
            for (i = path.length; i > 0; i--) {
                const ch = path.charCodeAt(i - 1);
                if (ch === 47 /* CharCode.Slash */ || ch === 92 /* CharCode.Backslash */) {
                    break;
                }
            }
            basename = path.substring(i);
        }
        const index = basenames.indexOf(basename);
        return index !== -1 ? patterns[index] : null;
    };
    aggregate.basenames = basenames;
    aggregate.patterns = patterns;
    aggregate.allBasenames = basenames;
    const aggregatedPatterns = parsedPatterns.filter(parsedPattern => !parsedPattern.basenames);
    aggregatedPatterns.push(aggregate);
    return aggregatedPatterns;
}

export { GLOBSTAR, GLOB_SPLIT, isRelativePattern, match, parse, splitGlobAware };
