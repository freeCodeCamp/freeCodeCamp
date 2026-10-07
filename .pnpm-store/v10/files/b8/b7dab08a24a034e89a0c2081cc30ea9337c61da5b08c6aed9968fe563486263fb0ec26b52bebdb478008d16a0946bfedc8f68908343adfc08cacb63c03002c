"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeUTF8 = exports.escapeText = exports.escapeAttribute = exports.encodeXML = exports.encodeNonAsciiHTML = exports.encodeHTML5 = exports.encodeHTML4 = exports.encodeHTML = exports.EntityDecoder = exports.decodeXMLStrict = exports.decodeXML = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTMLStrict = exports.decodeHTMLAttribute = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTML = exports.DecodingMode = exports.EncodingMode = exports.EntityLevel = void 0;
exports.decode = decode;
exports.decodeStrict = decodeStrict;
exports.encode = encode;
const decode_js_1 = require("./decode.js");
const encode_js_1 = require("./encode.js");
const escape_js_1 = require("./escape.js");
/** The level of entities to support. */
var EntityLevel;
(function (EntityLevel) {
    /** Support only XML entities. */
    EntityLevel[EntityLevel["XML"] = 0] = "XML";
    /** Support HTML entities, which are a superset of XML entities. */
    EntityLevel[EntityLevel["HTML"] = 1] = "HTML";
})(EntityLevel || (exports.EntityLevel = EntityLevel = {}));
var EncodingMode;
(function (EncodingMode) {
    /**
     * The output is UTF-8 encoded. Only characters that need escaping within
     * XML will be escaped.
     */
    EncodingMode[EncodingMode["UTF8"] = 0] = "UTF8";
    /**
     * The output consists only of ASCII characters. Characters that need
     * escaping within HTML, and characters that aren't ASCII characters will
     * be escaped.
     */
    EncodingMode[EncodingMode["ASCII"] = 1] = "ASCII";
    /**
     * Encode all characters that have an equivalent entity, as well as all
     * characters that are not ASCII characters.
     */
    EncodingMode[EncodingMode["Extensive"] = 2] = "Extensive";
    /**
     * Encode all characters that have to be escaped in HTML attributes,
     * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
     */
    EncodingMode[EncodingMode["Attribute"] = 3] = "Attribute";
    /**
     * Encode all characters that have to be escaped in HTML text,
     * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
     */
    EncodingMode[EncodingMode["Text"] = 4] = "Text";
})(EncodingMode || (exports.EncodingMode = EncodingMode = {}));
/**
 * Decodes a string with entities.
 *
 * @param input String to decode.
 * @param options Decoding options.
 */
function decode(input, options = EntityLevel.XML) {
    const level = typeof options === "number" ? options : options.level;
    if (level === EntityLevel.HTML) {
        const mode = typeof options === "object" ? options.mode : undefined;
        return (0, decode_js_1.decodeHTML)(input, mode);
    }
    return (0, decode_js_1.decodeXML)(input);
}
/**
 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
 *
 * @param input String to decode.
 * @param options Decoding options.
 * @deprecated Use `decode` with the `mode` set to `Strict`.
 */
function decodeStrict(input, options = EntityLevel.XML) {
    var _a;
    const normalizedOptions = typeof options === "number" ? { level: options } : options;
    (_a = normalizedOptions.mode) !== null && _a !== void 0 ? _a : (normalizedOptions.mode = decode_js_1.DecodingMode.Strict);
    return decode(input, normalizedOptions);
}
/**
 * Encodes a string with entities.
 *
 * @param input String to encode.
 * @param options Encoding options.
 */
function encode(input, options = EntityLevel.XML) {
    const { mode = EncodingMode.Extensive, level = EntityLevel.XML } = typeof options === "number" ? { level: options } : options;
    switch (mode) {
        case EncodingMode.UTF8: {
            return (0, escape_js_1.escapeUTF8)(input);
        }
        case EncodingMode.Attribute: {
            return (0, escape_js_1.escapeAttribute)(input);
        }
        case EncodingMode.Text: {
            return (0, escape_js_1.escapeText)(input);
        }
        case EncodingMode.ASCII: {
            return level === EntityLevel.HTML
                ? (0, encode_js_1.encodeNonAsciiHTML)(input)
                : (0, escape_js_1.encodeXML)(input);
        }
        // biome-ignore lint/complexity/noUselessSwitchCase: we get an error for the switch not being exhaustive
        case EncodingMode.Extensive: // eslint-disable-line unicorn/no-useless-switch-case
        default: {
            return level === EntityLevel.HTML
                ? (0, encode_js_1.encodeHTML)(input)
                : (0, escape_js_1.encodeXML)(input);
        }
    }
}
var decode_js_2 = require("./decode.js");
Object.defineProperty(exports, "DecodingMode", { enumerable: true, get: function () { return decode_js_2.DecodingMode; } });
Object.defineProperty(exports, "decodeHTML", { enumerable: true, get: function () { return decode_js_2.decodeHTML; } });
// Legacy aliases (deprecated)
Object.defineProperty(exports, "decodeHTML4", { enumerable: true, get: function () { return decode_js_2.decodeHTML; } });
Object.defineProperty(exports, "decodeHTML5", { enumerable: true, get: function () { return decode_js_2.decodeHTML; } });
Object.defineProperty(exports, "decodeHTMLAttribute", { enumerable: true, get: function () { return decode_js_2.decodeHTMLAttribute; } });
Object.defineProperty(exports, "decodeHTMLStrict", { enumerable: true, get: function () { return decode_js_2.decodeHTMLStrict; } });
Object.defineProperty(exports, "decodeHTML4Strict", { enumerable: true, get: function () { return decode_js_2.decodeHTMLStrict; } });
Object.defineProperty(exports, "decodeHTML5Strict", { enumerable: true, get: function () { return decode_js_2.decodeHTMLStrict; } });
Object.defineProperty(exports, "decodeXML", { enumerable: true, get: function () { return decode_js_2.decodeXML; } });
Object.defineProperty(exports, "decodeXMLStrict", { enumerable: true, get: function () { return decode_js_2.decodeXML; } });
Object.defineProperty(exports, "EntityDecoder", { enumerable: true, get: function () { return decode_js_2.EntityDecoder; } });
var encode_js_2 = require("./encode.js");
Object.defineProperty(exports, "encodeHTML", { enumerable: true, get: function () { return encode_js_2.encodeHTML; } });
// Legacy aliases (deprecated)
Object.defineProperty(exports, "encodeHTML4", { enumerable: true, get: function () { return encode_js_2.encodeHTML; } });
Object.defineProperty(exports, "encodeHTML5", { enumerable: true, get: function () { return encode_js_2.encodeHTML; } });
Object.defineProperty(exports, "encodeNonAsciiHTML", { enumerable: true, get: function () { return encode_js_2.encodeNonAsciiHTML; } });
var escape_js_2 = require("./escape.js");
Object.defineProperty(exports, "encodeXML", { enumerable: true, get: function () { return escape_js_2.encodeXML; } });
Object.defineProperty(exports, "escape", { enumerable: true, get: function () { return escape_js_2.escape; } });
Object.defineProperty(exports, "escapeAttribute", { enumerable: true, get: function () { return escape_js_2.escapeAttribute; } });
Object.defineProperty(exports, "escapeText", { enumerable: true, get: function () { return escape_js_2.escapeText; } });
Object.defineProperty(exports, "escapeUTF8", { enumerable: true, get: function () { return escape_js_2.escapeUTF8; } });
//# sourceMappingURL=index.js.map