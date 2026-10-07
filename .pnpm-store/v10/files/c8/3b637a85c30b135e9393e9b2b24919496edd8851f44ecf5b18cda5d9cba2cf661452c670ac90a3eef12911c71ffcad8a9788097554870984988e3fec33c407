import { decodeXML, decodeHTML, DecodingMode } from "./decode.js";
import { encodeHTML, encodeNonAsciiHTML } from "./encode.js";
import { encodeXML, escapeUTF8, escapeAttribute, escapeText, } from "./escape.js";
/** The level of entities to support. */
export var EntityLevel;
(function (EntityLevel) {
    /** Support only XML entities. */
    EntityLevel[EntityLevel["XML"] = 0] = "XML";
    /** Support HTML entities, which are a superset of XML entities. */
    EntityLevel[EntityLevel["HTML"] = 1] = "HTML";
})(EntityLevel || (EntityLevel = {}));
export var EncodingMode;
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
})(EncodingMode || (EncodingMode = {}));
/**
 * Decodes a string with entities.
 *
 * @param data String to decode.
 * @param options Decoding options.
 */
export function decode(data, options = EntityLevel.XML) {
    const level = typeof options === "number" ? options : options.level;
    if (level === EntityLevel.HTML) {
        const mode = typeof options === "object" ? options.mode : undefined;
        return decodeHTML(data, mode);
    }
    return decodeXML(data);
}
/**
 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
 *
 * @param data String to decode.
 * @param options Decoding options.
 * @deprecated Use `decode` with the `mode` set to `Strict`.
 */
export function decodeStrict(data, options = EntityLevel.XML) {
    var _a;
    const opts = typeof options === "number" ? { level: options } : options;
    (_a = opts.mode) !== null && _a !== void 0 ? _a : (opts.mode = DecodingMode.Strict);
    return decode(data, opts);
}
/**
 * Encodes a string with entities.
 *
 * @param data String to encode.
 * @param options Encoding options.
 */
export function encode(data, options = EntityLevel.XML) {
    const opts = typeof options === "number" ? { level: options } : options;
    // Mode `UTF8` just escapes XML entities
    if (opts.mode === EncodingMode.UTF8)
        return escapeUTF8(data);
    if (opts.mode === EncodingMode.Attribute)
        return escapeAttribute(data);
    if (opts.mode === EncodingMode.Text)
        return escapeText(data);
    if (opts.level === EntityLevel.HTML) {
        if (opts.mode === EncodingMode.ASCII) {
            return encodeNonAsciiHTML(data);
        }
        return encodeHTML(data);
    }
    // ASCII and Extensive are equivalent
    return encodeXML(data);
}
export { encodeXML, escape, escapeUTF8, escapeAttribute, escapeText, } from "./escape.js";
export { encodeHTML, encodeNonAsciiHTML, 
// Legacy aliases (deprecated)
encodeHTML as encodeHTML4, encodeHTML as encodeHTML5, } from "./encode.js";
export { EntityDecoder, DecodingMode, decodeXML, decodeHTML, decodeHTMLStrict, decodeHTMLAttribute, 
// Legacy aliases (deprecated)
decodeHTML as decodeHTML4, decodeHTML as decodeHTML5, decodeHTMLStrict as decodeHTML4Strict, decodeHTMLStrict as decodeHTML5Strict, decodeXML as decodeXMLStrict, } from "./decode.js";
//# sourceMappingURL=index.js.map