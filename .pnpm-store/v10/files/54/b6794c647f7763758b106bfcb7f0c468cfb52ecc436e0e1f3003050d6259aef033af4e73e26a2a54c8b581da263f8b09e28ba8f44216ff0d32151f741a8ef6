"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripSlashes = exports.removeSlashes = void 0;
const get_unescaped_any_js_1 = require("./get-unescaped-any.js");
const removeSlashes = (source, options = {}) => {
    const { getUnescaped = get_unescaped_any_js_1.getUnescapedAny } = options;
    const rx = /(?:(\\(u([0-9a-f]{4})|u\{([0-9a-f]+)\}|x([0-9a-f]{2})|(\d{1,3})|([\s\S]|$)))|([\s\S]))/giu;
    let match;
    let result = '';
    while (null != (match = rx.exec(source))) {
        const [, sequence, fallback, unicode, unicodePoint, hex, octal, char, literal] = match;
        if (literal) {
            result += literal;
            continue;
        }
        let code;
        if (char != null) {
            code = null;
        }
        else if (octal) {
            code = Number.parseInt(octal, 8);
        }
        else {
            code = Number.parseInt((unicodePoint || unicode || hex), 16);
        }
        try {
            const unescaped = getUnescaped(sequence, code);
            if (!unescaped) {
                result += fallback;
            }
            else if (unescaped === true) {
                result += (0, get_unescaped_any_js_1.getUnescapedAny)(sequence, code) || fallback;
            }
            else {
                result += unescaped;
            }
        }
        catch (_error) {
            result += fallback;
        }
    }
    return result;
};
exports.removeSlashes = removeSlashes;
const stripSlashes = removeSlashes;
exports.stripSlashes = stripSlashes;
//# sourceMappingURL=remove-slashes.js.map