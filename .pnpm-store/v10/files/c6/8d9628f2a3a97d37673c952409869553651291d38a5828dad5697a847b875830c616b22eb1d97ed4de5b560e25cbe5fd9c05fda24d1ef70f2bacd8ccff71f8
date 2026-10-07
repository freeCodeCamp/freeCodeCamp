/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
export function urlMatches(url, urlToMatch) {
    if (typeof urlToMatch === 'string') {
        return url === urlToMatch;
    }
    else {
        return !!url.match(urlToMatch);
    }
}
/**
 * Check if {@param url} should be ignored when comparing against {@param ignoredUrls}
 * @param url
 * @param ignoredUrls
 */
export function isUrlIgnored(url, ignoredUrls) {
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
//# sourceMappingURL=url.js.map