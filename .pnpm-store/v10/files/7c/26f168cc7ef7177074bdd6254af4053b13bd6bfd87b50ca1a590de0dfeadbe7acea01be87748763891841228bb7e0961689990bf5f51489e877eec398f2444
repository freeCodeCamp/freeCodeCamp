import { DecodingMode } from "./decode.js";
/** The level of entities to support. */
export declare enum EntityLevel {
    /** Support only XML entities. */
    XML = 0,
    /** Support HTML entities, which are a superset of XML entities. */
    HTML = 1
}
export declare enum EncodingMode {
    /**
     * The output is UTF-8 encoded. Only characters that need escaping within
     * XML will be escaped.
     */
    UTF8 = 0,
    /**
     * The output consists only of ASCII characters. Characters that need
     * escaping within HTML, and characters that aren't ASCII characters will
     * be escaped.
     */
    ASCII = 1,
    /**
     * Encode all characters that have an equivalent entity, as well as all
     * characters that are not ASCII characters.
     */
    Extensive = 2,
    /**
     * Encode all characters that have to be escaped in HTML attributes,
     * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
     */
    Attribute = 3,
    /**
     * Encode all characters that have to be escaped in HTML text,
     * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
     */
    Text = 4
}
export interface DecodingOptions {
    /**
     * The level of entities to support.
     * @default {@link EntityLevel.XML}
     */
    level?: EntityLevel;
    /**
     * Decoding mode. If `Legacy`, will support legacy entities not terminated
     * with a semicolon (`;`).
     *
     * Always `Strict` for XML. For HTML, set this to `true` if you are parsing
     * an attribute value.
     *
     * The deprecated `decodeStrict` function defaults this to `Strict`.
     *
     * @default {@link DecodingMode.Legacy}
     */
    mode?: DecodingMode | undefined;
}
/**
 * Decodes a string with entities.
 *
 * @param data String to decode.
 * @param options Decoding options.
 */
export declare function decode(data: string, options?: DecodingOptions | EntityLevel): string;
/**
 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
 *
 * @param data String to decode.
 * @param options Decoding options.
 * @deprecated Use `decode` with the `mode` set to `Strict`.
 */
export declare function decodeStrict(data: string, options?: DecodingOptions | EntityLevel): string;
/**
 * Options for `encode`.
 */
export interface EncodingOptions {
    /**
     * The level of entities to support.
     * @default {@link EntityLevel.XML}
     */
    level?: EntityLevel;
    /**
     * Output format.
     * @default {@link EncodingMode.Extensive}
     */
    mode?: EncodingMode;
}
/**
 * Encodes a string with entities.
 *
 * @param data String to encode.
 * @param options Encoding options.
 */
export declare function encode(data: string, options?: EncodingOptions | EntityLevel): string;
export { encodeXML, escape, escapeUTF8, escapeAttribute, escapeText, } from "./escape.js";
export { encodeHTML, encodeNonAsciiHTML, encodeHTML as encodeHTML4, encodeHTML as encodeHTML5, } from "./encode.js";
export { EntityDecoder, DecodingMode, decodeXML, decodeHTML, decodeHTMLStrict, decodeHTMLAttribute, decodeHTML as decodeHTML4, decodeHTML as decodeHTML5, decodeHTMLStrict as decodeHTML4Strict, decodeHTMLStrict as decodeHTML5Strict, decodeXML as decodeXMLStrict, } from "./decode.js";
//# sourceMappingURL=index.d.ts.map