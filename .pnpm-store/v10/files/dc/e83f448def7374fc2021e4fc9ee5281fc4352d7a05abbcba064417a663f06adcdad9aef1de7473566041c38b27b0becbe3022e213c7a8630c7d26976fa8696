"use strict";
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.satisfies = void 0;
// This is a custom semantic versioning implementation compatible with the
// `satisfies(version, range, options?)` function from the `semver` npm package;
// with the exception that the `loose` option is not supported.
//
// The motivation for the custom semver implementation is that
// `semver` package has some initialization delay (lots of RegExp init and compile)
// and this leads to coldstart overhead for the OTEL Lambda Node.js layer.
// Hence, we have implemented lightweight version of it internally with required functionalities.
const api_1 = require("@opentelemetry/api");
const VERSION_REGEXP = /^(?:v)?(?<version>(?<major>0|[1-9]\d*)\.(?<minor>0|[1-9]\d*)\.(?<patch>0|[1-9]\d*))(?:-(?<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?<build>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
const RANGE_REGEXP = /^(?<op><|>|=|==|<=|>=|~|\^|~>)?\s*(?:v)?(?<version>(?<major>x|X|\*|0|[1-9]\d*)(?:\.(?<minor>x|X|\*|0|[1-9]\d*))?(?:\.(?<patch>x|X|\*|0|[1-9]\d*))?)(?:-(?<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?<build>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
const operatorResMap = {
    '>': [1],
    '>=': [0, 1],
    '=': [0],
    '<=': [-1, 0],
    '<': [-1],
    '!=': [-1, 1],
};
/**
 * Checks given version whether it satisfies given range expression.
 * @param version the [version](https://github.com/npm/node-semver#versions) to be checked
 * @param range   the [range](https://github.com/npm/node-semver#ranges) expression for version check
 * @param options options to configure semver satisfy check
 */
function satisfies(version, range, options) {
    // Strict semver format check
    if (!_validateVersion(version)) {
        api_1.diag.error(`Invalid version: ${version}`);
        return false;
    }
    // If range is empty, satisfy check succeeds regardless what version is
    if (!range) {
        return true;
    }
    // Cleanup range
    range = range.replace(/([<>=~^]+)\s+/g, '$1');
    // Parse version
    const parsedVersion = _parseVersion(version);
    if (!parsedVersion) {
        return false;
    }
    const allParsedRanges = [];
    // Check given version whether it satisfies given range expression
    const checkResult = _doSatisfies(parsedVersion, range, allParsedRanges, options);
    // If check result is OK,
    // do another final check for pre-release, if pre-release check is included by option
    if (checkResult && !options?.includePrerelease) {
        return _doPreleaseCheck(parsedVersion, allParsedRanges);
    }
    return checkResult;
}
exports.satisfies = satisfies;
function _validateVersion(version) {
    return typeof version === 'string' && VERSION_REGEXP.test(version);
}
function _doSatisfies(parsedVersion, range, allParsedRanges, options) {
    if (range.includes('||')) {
        // A version matches a range if and only if
        // every comparator in at least one of the ||-separated comparator sets is satisfied by the version
        const ranges = range.trim().split('||');
        for (const r of ranges) {
            if (_checkRange(parsedVersion, r, allParsedRanges, options)) {
                return true;
            }
        }
        return false;
    }
    else if (range.includes(' - ')) {
        // Hyphen ranges: https://github.com/npm/node-semver#hyphen-ranges-xyz---abc
        range = replaceHyphen(range, options);
    }
    else if (range.includes(' ')) {
        // Multiple separated ranges and all needs to be satisfied for success
        const ranges = range
            .trim()
            .replace(/\s{2,}/g, ' ')
            .split(' ');
        for (const r of ranges) {
            if (!_checkRange(parsedVersion, r, allParsedRanges, options)) {
                return false;
            }
        }
        return true;
    }
    // Check given parsed version with given range
    return _checkRange(parsedVersion, range, allParsedRanges, options);
}
function _checkRange(parsedVersion, range, allParsedRanges, options) {
    range = _normalizeRange(range, options);
    if (range.includes(' ')) {
        // If there are multiple ranges separated, satisfy each of them
        return _doSatisfies(parsedVersion, range, allParsedRanges, options);
    }
    else {
        // Validate and parse range
        const parsedRange = _parseRange(range);
        allParsedRanges.push(parsedRange);
        // Check parsed version by parsed range
        return _satisfies(parsedVersion, parsedRange);
    }
}
function _satisfies(parsedVersion, parsedRange) {
    // If range is invalid, satisfy check fails (no error throw)
    if (parsedRange.invalid) {
        return false;
    }
    // If range is empty or wildcard, satisfy check succeeds regardless what version is
    if (!parsedRange.version || _isWildcard(parsedRange.version)) {
        return true;
    }
    // Compare version segment first
    let comparisonResult = _compareVersionSegments(parsedVersion.versionSegments || [], parsedRange.versionSegments || []);
    // If versions segments are equal, compare by pre-release segments
    if (comparisonResult === 0) {
        const versionPrereleaseSegments = parsedVersion.prereleaseSegments || [];
        const rangePrereleaseSegments = parsedRange.prereleaseSegments || [];
        if (!versionPrereleaseSegments.length && !rangePrereleaseSegments.length) {
            comparisonResult = 0;
        }
        else if (!versionPrereleaseSegments.length &&
            rangePrereleaseSegments.length) {
            comparisonResult = 1;
        }
        else if (versionPrereleaseSegments.length &&
            !rangePrereleaseSegments.length) {
            comparisonResult = -1;
        }
        else {
            comparisonResult = _compareVersionSegments(versionPrereleaseSegments, rangePrereleaseSegments);
        }
    }
    // Resolve check result according to comparison operator
    return operatorResMap[parsedRange.op]?.includes(comparisonResult);
}
function _doPreleaseCheck(parsedVersion, allParsedRanges) {
    if (parsedVersion.prerelease) {
        return allParsedRanges.some(r => r.prerelease && r.version === parsedVersion.version);
    }
    return true;
}
function _normalizeRange(range, options) {
    range = range.trim();
    range = replaceCaret(range, options);
    range = replaceTilde(range);
    range = replaceXRange(range, options);
    range = range.trim();
    return range;
}
function isX(id) {
    return !id || id.toLowerCase() === 'x' || id === '*';
}
function _parseVersion(versionString) {
    const match = versionString.match(VERSION_REGEXP);
    if (!match) {
        api_1.diag.error(`Invalid version: ${versionString}`);
        return undefined;
    }
    const version = match.groups.version;
    const prerelease = match.groups.prerelease;
    const build = match.groups.build;
    const versionSegments = version.split('.');
    const prereleaseSegments = prerelease?.split('.');
    return {
        op: undefined,
        version,
        versionSegments,
        versionSegmentCount: versionSegments.length,
        prerelease,
        prereleaseSegments,
        prereleaseSegmentCount: prereleaseSegments ? prereleaseSegments.length : 0,
        build,
    };
}
function _parseRange(rangeString) {
    if (!rangeString) {
        return {};
    }
    const match = rangeString.match(RANGE_REGEXP);
    if (!match) {
        api_1.diag.error(`Invalid range: ${rangeString}`);
        return {
            invalid: true,
        };
    }
    let op = match.groups.op;
    const version = match.groups.version;
    const prerelease = match.groups.prerelease;
    const build = match.groups.build;
    const versionSegments = version.split('.');
    const prereleaseSegments = prerelease?.split('.');
    if (op === '==') {
        op = '=';
    }
    return {
        op: op || '=',
        version,
        versionSegments,
        versionSegmentCount: versionSegments.length,
        prerelease,
        prereleaseSegments,
        prereleaseSegmentCount: prereleaseSegments ? prereleaseSegments.length : 0,
        build,
    };
}
function _isWildcard(s) {
    return s === '*' || s === 'x' || s === 'X';
}
function _parseVersionString(v) {
    const n = parseInt(v, 10);
    return isNaN(n) ? v : n;
}
function _normalizeVersionType(a, b) {
    if (typeof a === typeof b) {
        if (typeof a === 'number') {
            return [a, b];
        }
        else if (typeof a === 'string') {
            return [a, b];
        }
        else {
            throw new Error('Version segments can only be strings or numbers');
        }
    }
    else {
        return [String(a), String(b)];
    }
}
function _compareVersionStrings(v1, v2) {
    if (_isWildcard(v1) || _isWildcard(v2)) {
        return 0;
    }
    const [parsedV1, parsedV2] = _normalizeVersionType(_parseVersionString(v1), _parseVersionString(v2));
    if (parsedV1 > parsedV2) {
        return 1;
    }
    else if (parsedV1 < parsedV2) {
        return -1;
    }
    return 0;
}
function _compareVersionSegments(v1, v2) {
    for (let i = 0; i < Math.max(v1.length, v2.length); i++) {
        const res = _compareVersionStrings(v1[i] || '0', v2[i] || '0');
        if (res !== 0) {
            return res;
        }
    }
    return 0;
}
////////////////////////////////////////////////////////////////////////////////
// The rest of this file is adapted from portions of https://github.com/npm/node-semver/tree/868d4bb
// License:
/*
 * The ISC License
 *
 * Copyright (c) Isaac Z. Schlueter and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
 * IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */
const LETTERDASHNUMBER = '[a-zA-Z0-9-]';
const NUMERICIDENTIFIER = '0|[1-9]\\d*';
const NONNUMERICIDENTIFIER = `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`;
const GTLT = '((?:<|>)?=?)';
const PRERELEASEIDENTIFIER = `(?:${NUMERICIDENTIFIER}|${NONNUMERICIDENTIFIER})`;
const PRERELEASE = `(?:-(${PRERELEASEIDENTIFIER}(?:\\.${PRERELEASEIDENTIFIER})*))`;
const BUILDIDENTIFIER = `${LETTERDASHNUMBER}+`;
const BUILD = `(?:\\+(${BUILDIDENTIFIER}(?:\\.${BUILDIDENTIFIER})*))`;
const XRANGEIDENTIFIER = `${NUMERICIDENTIFIER}|x|X|\\*`;
const XRANGEPLAIN = `[v=\\s]*(${XRANGEIDENTIFIER})` +
    `(?:\\.(${XRANGEIDENTIFIER})` +
    `(?:\\.(${XRANGEIDENTIFIER})` +
    `(?:${PRERELEASE})?${BUILD}?` +
    `)?)?`;
const XRANGE = `^${GTLT}\\s*${XRANGEPLAIN}$`;
const XRANGE_REGEXP = new RegExp(XRANGE);
const HYPHENRANGE = `^\\s*(${XRANGEPLAIN})` + `\\s+-\\s+` + `(${XRANGEPLAIN})` + `\\s*$`;
const HYPHENRANGE_REGEXP = new RegExp(HYPHENRANGE);
const LONETILDE = '(?:~>?)';
const TILDE = `^${LONETILDE}${XRANGEPLAIN}$`;
const TILDE_REGEXP = new RegExp(TILDE);
const LONECARET = '(?:\\^)';
const CARET = `^${LONECARET}${XRANGEPLAIN}$`;
const CARET_REGEXP = new RegExp(CARET);
// Borrowed from https://github.com/npm/node-semver/blob/868d4bbe3d318c52544f38d5f9977a1103e924c2/classes/range.js#L285
//
// ~, ~> --> * (any, kinda silly)
// ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
// ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
// ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
// ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
// ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
// ~0.0.1 --> >=0.0.1 <0.1.0-0
function replaceTilde(comp) {
    const r = TILDE_REGEXP;
    return comp.replace(r, (_, M, m, p, pr) => {
        let ret;
        if (isX(M)) {
            ret = '';
        }
        else if (isX(m)) {
            ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
        }
        else if (isX(p)) {
            // ~1.2 == >=1.2.0 <1.3.0-0
            ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
        }
        else if (pr) {
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
        }
        else {
            // ~1.2.3 == >=1.2.3 <1.3.0-0
            ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
        }
        return ret;
    });
}
// Borrowed from https://github.com/npm/node-semver/blob/868d4bbe3d318c52544f38d5f9977a1103e924c2/classes/range.js#L329
//
// ^ --> * (any, kinda silly)
// ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
// ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
// ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
// ^1.2.3 --> >=1.2.3 <2.0.0-0
// ^1.2.0 --> >=1.2.0 <2.0.0-0
// ^0.0.1 --> >=0.0.1 <0.0.2-0
// ^0.1.0 --> >=0.1.0 <0.2.0-0
function replaceCaret(comp, options) {
    const r = CARET_REGEXP;
    const z = options?.includePrerelease ? '-0' : '';
    return comp.replace(r, (_, M, m, p, pr) => {
        let ret;
        if (isX(M)) {
            ret = '';
        }
        else if (isX(m)) {
            ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
        }
        else if (isX(p)) {
            if (M === '0') {
                ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
            }
            else {
                ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
            }
        }
        else if (pr) {
            if (M === '0') {
                if (m === '0') {
                    ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
                }
                else {
                    ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
                }
            }
            else {
                ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
            }
        }
        else {
            if (M === '0') {
                if (m === '0') {
                    ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
                }
                else {
                    ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
                }
            }
            else {
                ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
            }
        }
        return ret;
    });
}
// Borrowed from https://github.com/npm/node-semver/blob/868d4bbe3d318c52544f38d5f9977a1103e924c2/classes/range.js#L390
function replaceXRange(comp, options) {
    const r = XRANGE_REGEXP;
    return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
        const xM = isX(M);
        const xm = xM || isX(m);
        const xp = xm || isX(p);
        const anyX = xp;
        if (gtlt === '=' && anyX) {
            gtlt = '';
        }
        // if we're including prereleases in the match, then we need
        // to fix this to -0, the lowest possible prerelease value
        pr = options?.includePrerelease ? '-0' : '';
        if (xM) {
            if (gtlt === '>' || gtlt === '<') {
                // nothing is allowed
                ret = '<0.0.0-0';
            }
            else {
                // nothing is forbidden
                ret = '*';
            }
        }
        else if (gtlt && anyX) {
            // we know patch is an x, because we have any x at all.
            // replace X with 0
            if (xm) {
                m = 0;
            }
            p = 0;
            if (gtlt === '>') {
                // >1 => >=2.0.0
                // >1.2 => >=1.3.0
                gtlt = '>=';
                if (xm) {
                    M = +M + 1;
                    m = 0;
                    p = 0;
                }
                else {
                    m = +m + 1;
                    p = 0;
                }
            }
            else if (gtlt === '<=') {
                // <=0.7.x is actually <0.8.0, since any 0.7.x should
                // pass.  Similarly, <=7.x is actually <8.0.0, etc.
                gtlt = '<';
                if (xm) {
                    M = +M + 1;
                }
                else {
                    m = +m + 1;
                }
            }
            if (gtlt === '<') {
                pr = '-0';
            }
            ret = `${gtlt + M}.${m}.${p}${pr}`;
        }
        else if (xm) {
            ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
        }
        else if (xp) {
            ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
        }
        return ret;
    });
}
// Borrowed from https://github.com/npm/node-semver/blob/868d4bbe3d318c52544f38d5f9977a1103e924c2/classes/range.js#L488
//
// 1.2 - 3.4.5 => >=1.2.0 <=3.4.5
// 1.2.3 - 3.4 => >=1.2.0 <3.5.0-0 Any 3.4.x will do
// 1.2 - 3.4 => >=1.2.0 <3.5.0-0
function replaceHyphen(comp, options) {
    const r = HYPHENRANGE_REGEXP;
    return comp.replace(r, (_, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) => {
        if (isX(fM)) {
            from = '';
        }
        else if (isX(fm)) {
            from = `>=${fM}.0.0${options?.includePrerelease ? '-0' : ''}`;
        }
        else if (isX(fp)) {
            from = `>=${fM}.${fm}.0${options?.includePrerelease ? '-0' : ''}`;
        }
        else if (fpr) {
            from = `>=${from}`;
        }
        else {
            from = `>=${from}${options?.includePrerelease ? '-0' : ''}`;
        }
        if (isX(tM)) {
            to = '';
        }
        else if (isX(tm)) {
            to = `<${+tM + 1}.0.0-0`;
        }
        else if (isX(tp)) {
            to = `<${tM}.${+tm + 1}.0-0`;
        }
        else if (tpr) {
            to = `<=${tM}.${tm}.${tp}-${tpr}`;
        }
        else if (options?.includePrerelease) {
            to = `<${tM}.${tm}.${+tp + 1}-0`;
        }
        else {
            to = `<=${to}`;
        }
        return `${from} ${to}`.trim();
    });
}
//# sourceMappingURL=semver.js.map