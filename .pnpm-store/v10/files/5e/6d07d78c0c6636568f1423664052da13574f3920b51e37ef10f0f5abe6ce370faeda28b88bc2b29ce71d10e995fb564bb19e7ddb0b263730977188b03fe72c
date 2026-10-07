"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUrlIgnored = exports.urlMatches = void 0;
/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
function urlMatches(url, urlToMatch) {
    if (typeof urlToMatch === 'string') {
        return url === urlToMatch;
    }
    else {
        return !!url.match(urlToMatch);
    }
}
exports.urlMatches = urlMatches;
/**
 * Check if {@param url} should be ignored when comparing against {@param ignoredUrls}
 * @param url
 * @param ignoredUrls
 */
function isUrlIgnored(url, ignoredUrls) {
    if (!ignoredUrls) {
        return false;
    }
    for (const ignoreUrl of ignoredUrls) {
        if (urlMatches(url, ignoreUrl)) {
            return true;
        }
    }
    return false;
}
exports.isUrlIgnored = isUrlIgnored;
//# sourceMappingURL=url.js.map