/**
 * This file contains a list of utility functions which are useful in other
 * files.
 */

import type {AnyParseNode} from "./parseNode";

// hyphenate and escape adapted from Facebook's React under Apache 2 license
const uppercase = /([A-Z])/g;
export const hyphenate = (str: string): string =>
    str.replace(uppercase, "-$1").toLowerCase();

const ESCAPE_LOOKUP: Record<string, string> = {
    "&": "&amp;",
    ">": "&gt;",
    "<": "&lt;",
    "\"": "&quot;",
    "'": "&#x27;",
};

const ESCAPE_REGEX = /[&><"']/g;

/**
 * Escapes text to prevent scripting attacks.
 */
export const escape = (text: unknown): string =>
    String(text).replace(ESCAPE_REGEX, match => ESCAPE_LOOKUP[match]);

/**
 * Sometimes we want to pull out the innermost element of a group. In most
 * cases, this will just be the group itself, but when ordgroups and colors have
 * a single element, we want to pull that out.
 */
export const getBaseElem = (group: AnyParseNode): AnyParseNode => {
    if (group.type === "ordgroup") {
        if (group.body.length === 1) {
            return getBaseElem(group.body[0]);
        } else {
            return group;
        }
    } else if (group.type === "color") {
        if (group.body.length === 1) {
            return getBaseElem(group.body[0]);
        } else {
            return group;
        }
    } else if (group.type === "font") {
        return getBaseElem(group.body);
    } else {
        return group;
    }
};

const characterNodesTypes = new Set(["mathord", "textord", "atom"]);

/**
 * TeXbook algorithms often reference "character boxes", which are simply groups
 * with a single character in them. To decide if something is a character box,
 * we find its innermost group, and see if it is a single character.
 */
export const isCharacterBox = (group: AnyParseNode): boolean =>
    characterNodesTypes.has(getBaseElem(group).type);

/**
 * Return the protocol of a URL, or "_relative" if the URL does not specify a
 * protocol (and thus is relative), or `null` if URL has invalid protocol
 * (so should be outright rejected).
 */
export const protocolFromUrl = (url: string): string | null => {
    // Check for possible leading protocol.
    // https://url.spec.whatwg.org/#url-parsing strips leading whitespace
    // (U+20) or C0 control (U+00-U+1F) characters.
    // eslint-disable-next-line no-control-regex
    const protocol = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i
    .exec(url);
    if (!protocol) {
        return "_relative";
    }
    // Reject weird colons
    if (protocol[2] !== ":") {
        return null;
    }
    // Reject invalid characters in scheme according to
    // https://datatracker.ietf.org/doc/html/rfc3986#section-3.1
    if (!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(protocol[1])) {
        return null;
    }
    // Lowercase the protocol
    return protocol[1].toLowerCase();
};
