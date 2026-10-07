export declare const getCodePoint: (c: string, index: number) => number;
/**
 * Bitset for ASCII characters that need to be escaped in XML.
 */
export declare const XML_BITSET_VALUE = 1342177476;
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using XML entities. Uses a fast bitset scan instead of RegExp.
 *
 * If a character has no equivalent entity, a numeric hexadecimal reference
 * (eg. `&#xfc;`) will be used.
 */
export declare function encodeXML(input: string): string;
/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using numeric hexadecimal reference (eg. `&#xfc;`).
 *
 * Have a look at `escapeUTF8` if you want a more concise output at the expense
 * of reduced transportability.
 *
 * @param data String to escape.
 */
export declare const escape: typeof encodeXML;
/**
 * Encodes all characters not valid in XML documents using XML entities.
 *
 * Note that the output will be character-set dependent.
 *
 * @param data String to escape.
 */
export declare const escapeUTF8: (data: string) => string;
/**
 * Encodes all characters that have to be escaped in HTML attributes,
 * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
 *
 * @param data String to escape.
 */
export declare const escapeAttribute: (data: string) => string;
/**
 * Encodes all characters that have to be escaped in HTML text,
 * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
 *
 * @param data String to escape.
 */
export declare const escapeText: (data: string) => string;
//# sourceMappingURL=escape.d.ts.map