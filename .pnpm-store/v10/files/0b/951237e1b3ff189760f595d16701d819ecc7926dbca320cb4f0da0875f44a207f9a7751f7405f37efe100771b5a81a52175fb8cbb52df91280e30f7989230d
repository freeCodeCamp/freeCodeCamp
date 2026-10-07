export const xmlReplacer: RegExp = /["$&'<>\u0080-\uFFFF]/g;

const xmlCodeMap = new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [39, "&apos;"],
    [60, "&lt;"],
    [62, "&gt;"],
]);

// For compatibility with node < 4, we wrap `codePointAt`
export const getCodePoint: (c: string, index: number) => number =
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    String.prototype.codePointAt == null
        ? (c: string, index: number): number =>
              (c.charCodeAt(index) & 0xfc_00) === 0xd8_00
                  ? (c.charCodeAt(index) - 0xd8_00) * 0x4_00 +
                    c.charCodeAt(index + 1) -
                    0xdc_00 +
                    0x1_00_00
                  : c.charCodeAt(index)
        : // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
          (input: string, index: number): number => input.codePointAt(index)!;

/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using XML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
export function encodeXML(input: string): string {
    let returnValue = "";
    let lastIndex = 0;
    let match;

    while ((match = xmlReplacer.exec(input)) !== null) {
        const { index } = match;
        const char = input.charCodeAt(index);
        const next = xmlCodeMap.get(char);

        if (next === undefined) {
            returnValue += `${input.substring(lastIndex, index)}&#x${getCodePoint(
                input,
                index,
            ).toString(16)};`;
            // Increase by 1 if we have a surrogate pair
            lastIndex = xmlReplacer.lastIndex += Number(
                (char & 0xfc_00) === 0xd8_00,
            );
        } else {
            returnValue += input.substring(lastIndex, index) + next;
            lastIndex = index + 1;
        }
    }

    return returnValue + input.substr(lastIndex);
}

/**
 * Encodes all non-ASCII characters, as well as characters not valid in XML
 * documents using numeric hexadecimal reference (eg. `&#xfc;`).
 *
 * Have a look at `escapeUTF8` if you want a more concise output at the expense
 * of reduced transportability.
 *
 * @param data String to escape.
 */
export const escape: typeof encodeXML = encodeXML;

/**
 * Creates a function that escapes all characters matched by the given regular
 * expression using the given map of characters to escape to their entities.
 *
 * @param regex Regular expression to match characters to escape.
 * @param map Map of characters to escape to their entities.
 *
 * @returns Function that escapes all characters matched by the given regular
 * expression using the given map of characters to escape to their entities.
 */
function getEscaper(
    regex: RegExp,
    map: Map<number, string>,
): (data: string) => string {
    return function escape(data: string): string {
        let match;
        let lastIndex = 0;
        let result = "";

        while ((match = regex.exec(data))) {
            if (lastIndex !== match.index) {
                result += data.substring(lastIndex, match.index);
            }

            // We know that this character will be in the map.
            result += map.get(match[0].charCodeAt(0))!;

            // Every match will be of length 1
            lastIndex = match.index + 1;
        }

        return result + data.substring(lastIndex);
    };
}

/**
 * Encodes all characters not valid in XML documents using XML entities.
 *
 * Note that the output will be character-set dependent.
 *
 * @param data String to escape.
 */
export const escapeUTF8: (data: string) => string = /* #__PURE__ */ getEscaper(
    /["&'<>]/g,
    xmlCodeMap,
);

/**
 * Encodes all characters that have to be escaped in HTML attributes,
 * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
 *
 * @param data String to escape.
 */
export const escapeAttribute: (data: string) => string =
    /* #__PURE__ */ getEscaper(
        /["&\u00A0]/g,
        new Map([
            [34, "&quot;"],
            [38, "&amp;"],
            [160, "&nbsp;"],
        ]),
    );

/**
 * Encodes all characters that have to be escaped in HTML text,
 * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
 *
 * @param data String to escape.
 */
export const escapeText: (data: string) => string = /* #__PURE__ */ getEscaper(
    /[&<>\u00A0]/g,
    new Map([
        [38, "&amp;"],
        [60, "&lt;"],
        [62, "&gt;"],
        [160, "&nbsp;"],
    ]),
);
