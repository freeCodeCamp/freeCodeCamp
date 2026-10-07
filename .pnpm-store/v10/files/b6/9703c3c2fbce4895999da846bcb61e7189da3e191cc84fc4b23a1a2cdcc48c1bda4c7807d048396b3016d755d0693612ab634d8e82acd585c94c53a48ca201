import { DecodingMode, decodeHTML, decodeXML } from "./decode.js";
import { encodeHTML, encodeNonAsciiHTML } from "./encode.js";
import { encodeXML, escapeAttribute, escapeText, escapeUTF8, } from "./escape.js";
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
 * @param input String to decode.
 * @param options Decoding options.
 */
export function decode(input, options = EntityLevel.XML) {
    const level = typeof options === "number" ? options : options.level;
    if (level === EntityLevel.HTML) {
        const mode = typeof options === "object" ? options.mode : undefined;
        return decodeHTML(input, mode);
    }
    return decodeXML(input);
}
/**
 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
 *
 * @param input String to decode.
 * @param options Decoding options.
 * @deprecated Use `decode` with the `mode` set to `Strict`.
 */
export function decodeStrict(input, options = EntityLevel.XML) {
    var _a;
    const normalizedOptions = typeof options === "number" ? { level: options } : options;
    (_a = normalizedOptions.mode) !== null && _a !== void 0 ? _a : (normalizedOptions.mode = DecodingMode.Strict);
    return decode(input, normalizedOptions);
}
/**
 * Encodes a string with entities.
 *
 * @param input String to encode.
 * @param options Encoding options.
 */
export function encode(input, options = EntityLevel.XML) {
    const { mode = EncodingMode.Extensive, level = EntityLevel.XML } = typeof options === "number" ? { level: options } : options;
    switch (mode) {
        case EncodingMode.UTF8: {
            return escapeUTF8(input);
        }
        case EncodingMode.Attribute: {
            return escapeAttribute(input);
        }
        case EncodingMode.Text: {
            return escapeText(input);
        }
        case EncodingMode.ASCII: {
            return level === EntityLevel.HTML
                ? encodeNonAsciiHTML(input)
                : encodeXML(input);
        }
        // biome-ignore lint/complexity/noUselessSwitchCase: we get an error for the switch not being exhaustive
        case EncodingMode.Extensive: // eslint-disable-line unicorn/no-useless-switch-case
        default: {
            return level === EntityLevel.HTML
                ? encodeHTML(input)
                : encodeXML(input);
        }
    }
}
export { DecodingMode, decodeHTML, 
// Legacy aliases (deprecated)
decodeHTML as decodeHTML4, decodeHTML as decodeHTML5, decodeHTMLAttribute, decodeHTMLStrict, decodeHTMLStrict as decodeHTML4Strict, decodeHTMLStrict as decodeHTML5Strict, decodeXML, decodeXML as decodeXMLStrict, EntityDecoder, } from "./decode.js";
export { encodeHTML, 
// Legacy aliases (deprecated)
encodeHTML as encodeHTML4, encodeHTML as encodeHTML5, encodeNonAsciiHTML, } from "./encode.js";
export { encodeXML, escape, escapeAttribute, escapeText, escapeUTF8, } from "./escape.js";
//# sourceMappingURL=index.js.map