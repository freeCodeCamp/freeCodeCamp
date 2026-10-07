"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSlashes = void 0;
const get_escaped_any_js_1 = require("./get-escaped-any.js");
const get_escaped_json_unsafe_js_1 = require("./get-escaped-json-unsafe.js");
const addSlashes = (str, options = {}) => {
    const { getEscaped = get_escaped_json_unsafe_js_1.getEscapedJsonUnsafe } = options;
    let result = '';
    for (const char of str) {
        const escaped = getEscaped(char);
        if (!escaped) {
            result += char;
        }
        else if (escaped === true || escaped.length < 2) {
            result += (0, get_escaped_any_js_1.getEscapedAny)(char) || char;
        }
        else {
            result += escaped;
        }
    }
    return result;
};
exports.addSlashes = addSlashes;
//# sourceMappingURL=add-slashes.js.map