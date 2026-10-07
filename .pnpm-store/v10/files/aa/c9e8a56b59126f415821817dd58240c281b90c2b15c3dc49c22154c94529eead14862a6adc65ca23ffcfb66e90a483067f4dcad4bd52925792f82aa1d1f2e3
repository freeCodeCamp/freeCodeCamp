/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Copyright (c) 2013, Nick Fitzgerald
 *  Licensed under the MIT License. See LICENCE.md in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
function createRegex(glob, opts) {
    if (typeof glob !== 'string') {
        throw new TypeError('Expected a string');
    }
    const str = String(glob);
    // The regexp we are building, as a string.
    let reStr = "";
    // Whether we are matching so called "extended" globs (like bash) and should
    // support single character matching, matching ranges of characters, group
    // matching, etc.
    const extended = opts ? true : false;
    // When globstar is _false_ (default), '/foo/*' is translated a regexp like
    // '^\/foo\/.*$' which will match any string beginning with '/foo/'
    // When globstar is _true_, '/foo/*' is translated to regexp like
    // '^\/foo\/[^/]*$' which will match any string beginning with '/foo/' BUT
    // which does not have a '/' to the right of it.
    // E.g. with '/foo/*' these will match: '/foo/bar', '/foo/bar.txt' but
    // these will not '/foo/bar/baz', '/foo/bar/baz.txt'
    // Lastely, when globstar is _true_, '/foo/**' is equivelant to '/foo/*' when
    // globstar is _false_
    const globstar = opts ? true : false;
    // If we are doing extended matching, this boolean is true when we are inside
    // a group (eg {*.html,*.js}), and false otherwise.
    let inGroup = false;
    // RegExp flags (eg "i" ) to pass in to RegExp constructor.
    const flags = opts && typeof (opts.flags) === "string" ? opts.flags : "";
    let c;
    for (let i = 0, len = str.length; i < len; i++) {
        c = str[i];
        switch (c) {
            case "/":
            case "$":
            case "^":
            case "+":
            case ".":
            case "(":
            case ")":
            case "=":
            case "!":
            case "|":
                reStr += "\\" + c;
                break;
            case "?":
                if (extended) {
                    reStr += ".";
                    break;
                }
            case "[":
            case "]":
                if (extended) {
                    reStr += c;
                    break;
                }
            case "{":
                if (extended) {
                    inGroup = true;
                    reStr += "(";
                    break;
                }
            case "}":
                if (extended) {
                    inGroup = false;
                    reStr += ")";
                    break;
                }
            case ",":
                if (inGroup) {
                    reStr += "|";
                    break;
                }
                reStr += "\\" + c;
                break;
            case "*":
                // Move over all consecutive "*"'s.
                // Also store the previous and next characters
                const prevChar = str[i - 1];
                let starCount = 1;
                while (str[i + 1] === "*") {
                    starCount++;
                    i++;
                }
                const nextChar = str[i + 1];
                if (!globstar) {
                    // globstar is disabled, so treat any number of "*" as one
                    reStr += ".*";
                }
                else {
                    // globstar is enabled, so determine if this is a globstar segment
                    const isGlobstar = starCount > 1 // multiple "*"'s
                        && (prevChar === "/" || prevChar === undefined || prevChar === '{' || prevChar === ',') // from the start of the segment
                        && (nextChar === "/" || nextChar === undefined || nextChar === ',' || nextChar === '}'); // to the end of the segment
                    if (isGlobstar) {
                        if (nextChar === "/") {
                            i++; // move over the "/"
                        }
                        else if (prevChar === '/' && reStr.endsWith('\\/')) {
                            reStr = reStr.substr(0, reStr.length - 2);
                        }
                        // it's a globstar, so match zero or more path segments
                        reStr += "((?:[^/]*(?:\/|$))*)";
                    }
                    else {
                        // it's not a globstar, so only match one path segment
                        reStr += "([^/]*)";
                    }
                }
                break;
            default:
                reStr += c;
        }
    }
    // When regexp 'g' flag is specified don't
    // constrain the regular expression with ^ & $
    if (!flags || !~flags.indexOf('g')) {
        reStr = "^" + reStr + "$";
    }
    return new RegExp(reStr, flags);
}

export { createRegex };
