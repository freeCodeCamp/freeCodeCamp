"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = extractHostname;
/**
 * @param url - URL we want to extract a hostname from.
 * @param urlIsValidHostname - hint from caller; true if `url` is already a valid hostname.
 */
function extractHostname(url, urlIsValidHostname) {
    let start = 0;
    let end = url.length;
    let hasUpper = false;
    // If url is not already a valid hostname, then try to extract hostname.
    if (!urlIsValidHostname) {
        // Special handling of data URLs
        if (url.startsWith('data:')) {
            return null;
        }
        // Trim leading spaces
        while (start < url.length && url.charCodeAt(start) <= 32) {
            start += 1;
        }
        // Trim trailing spaces
        while (end > start + 1 && url.charCodeAt(end - 1) <= 32) {
            end -= 1;
        }
        // Skip scheme.
        if (url.charCodeAt(start) === 47 /* '/' */ &&
            url.charCodeAt(start + 1) === 47 /* '/' */) {
            start += 2;
        }
        else {
            const indexOfProtocol = url.indexOf(':/', start);
            if (indexOfProtocol !== -1) {
                // Implement fast-path for common protocols. We expect most protocols
                // should be one of these 4 and thus we will not need to perform the
                // more expansive validity check most of the time.
                const protocolSize = indexOfProtocol - start;
                const c0 = url.charCodeAt(start);
                const c1 = url.charCodeAt(start + 1);
                const c2 = url.charCodeAt(start + 2);
                const c3 = url.charCodeAt(start + 3);
                const c4 = url.charCodeAt(start + 4);
                if (protocolSize === 5 &&
                    c0 === 104 /* 'h' */ &&
                    c1 === 116 /* 't' */ &&
                    c2 === 116 /* 't' */ &&
                    c3 === 112 /* 'p' */ &&
                    c4 === 115 /* 's' */) {
                    // https
                }
                else if (protocolSize === 4 &&
                    c0 === 104 /* 'h' */ &&
                    c1 === 116 /* 't' */ &&
                    c2 === 116 /* 't' */ &&
                    c3 === 112 /* 'p' */) {
                    // http
                }
                else if (protocolSize === 3 &&
                    c0 === 119 /* 'w' */ &&
                    c1 === 115 /* 's' */ &&
                    c2 === 115 /* 's' */) {
                    // wss
                }
                else if (protocolSize === 2 &&
                    c0 === 119 /* 'w' */ &&
                    c1 === 115 /* 's' */) {
                    // ws
                }
                else {
                    // Check that scheme is valid
                    for (let i = start; i < indexOfProtocol; i += 1) {
                        const lowerCaseCode = url.charCodeAt(i) | 32;
                        if (!(((lowerCaseCode >= 97 && lowerCaseCode <= 122) || // [a, z]
                            (lowerCaseCode >= 48 && lowerCaseCode <= 57) || // [0, 9]
                            lowerCaseCode === 46 || // '.'
                            lowerCaseCode === 45 || // '-'
                            lowerCaseCode === 43) // '+'
                        )) {
                            return null;
                        }
                    }
                }
                // Skip 0, 1 or more '/' after ':/'
                start = indexOfProtocol + 2;
                while (url.charCodeAt(start) === 47 /* '/' */) {
                    start += 1;
                }
            }
        }
        // Detect first occurrence of '/', '?' or '#'. We also keep track of the
        // last occurrence of '@', ']' or ':' to speed-up subsequent parsing of
        // (respectively), identifier, ipv6 or port.
        let indexOfIdentifier = -1;
        let indexOfClosingBracket = -1;
        let indexOfPort = -1;
        for (let i = start; i < end; i += 1) {
            const code = url.charCodeAt(i);
            if (code === 35 || // '#'
                code === 47 || // '/'
                code === 63 // '?'
            ) {
                end = i;
                break;
            }
            else if (code === 64) {
                // '@'
                indexOfIdentifier = i;
            }
            else if (code === 93) {
                // ']'
                indexOfClosingBracket = i;
            }
            else if (code === 58) {
                // ':'
                indexOfPort = i;
            }
            else if (code >= 65 && code <= 90) {
                hasUpper = true;
            }
        }
        // Detect identifier: '@'
        if (indexOfIdentifier !== -1 &&
            indexOfIdentifier > start &&
            indexOfIdentifier < end) {
            start = indexOfIdentifier + 1;
        }
        // Handle ipv6 addresses
        if (url.charCodeAt(start) === 91 /* '[' */) {
            if (indexOfClosingBracket !== -1) {
                return url.slice(start + 1, indexOfClosingBracket).toLowerCase();
            }
            return null;
        }
        else if (indexOfPort !== -1 && indexOfPort > start && indexOfPort < end) {
            // Detect port: ':'
            end = indexOfPort;
        }
    }
    // Trim trailing dots
    while (end > start + 1 && url.charCodeAt(end - 1) === 46 /* '.' */) {
        end -= 1;
    }
    const hostname = start !== 0 || end !== url.length ? url.slice(start, end) : url;
    if (hasUpper) {
        return hostname.toLowerCase();
    }
    return hostname;
}
//# sourceMappingURL=extract-hostname.js.map