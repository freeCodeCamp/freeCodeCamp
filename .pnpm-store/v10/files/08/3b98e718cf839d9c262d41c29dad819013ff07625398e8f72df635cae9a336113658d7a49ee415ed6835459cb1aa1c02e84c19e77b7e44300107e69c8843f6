import { getCodePoint, XML_BITSET_VALUE } from "./escape.js";
import { htmlTrie } from "./generated/encode-html.js";

/**
 * We store the characters to consider as a compact bitset for fast lookups.
 */
const HTML_BITSET = /* #__PURE__ */ new Uint32Array([
    0x16_00, // Bits for 09,0A,0C
    0xfc_00_ff_fe, // 32..63 -> 21-2D (minus space), 2E,2F,3A-3F
    0xf8_00_00_01, // 64..95 -> 40, 5B-5F
    0x38_00_00_01, // 96..127-> 60, 7B-7D
]);

const XML_BITSET = /* #__PURE__ */ new Uint32Array([0, XML_BITSET_VALUE, 0, 0]);

/**
 * Encodes all characters in the input using HTML entities. This includes
 * characters that are valid ASCII characters in HTML documents, such as `#`.
 *
 * To get a more compact output, consider using the `encodeNonAsciiHTML`
 * function, which will only encode characters that are not valid in HTML
 * documents, as well as non-ASCII characters.
 *
 * If a character has no equivalent entity, a numeric hexadecimal reference
 * (eg. `&#xfc;`) will be used.
 */
export function encodeHTML(input: string): string {
    return encodeHTMLTrieRe(HTML_BITSET, input);
}
/**
 * Encodes all non-ASCII characters, as well as characters not valid in HTML
 * documents using HTML entities. This function will not encode characters that
 * are valid in HTML documents, such as `#`.
 *
 * If a character has no equivalent entity, a numeric hexadecimal reference
 * (eg. `&#xfc;`) will be used.
 */
export function encodeNonAsciiHTML(input: string): string {
    return encodeHTMLTrieRe(XML_BITSET, input);
}

function encodeHTMLTrieRe(bitset: Uint32Array, input: string): string {
    let out: string | undefined;
    let last = 0; // Start of the next untouched slice.
    const { length } = input;

    for (let index = 0; index < length; index++) {
        const char = input.charCodeAt(index);
        // Skip ASCII characters that don't need encoding
        if (char < 0x80 && !((bitset[char >>> 5] >>> char) & 1)) {
            continue;
        }

        if (out === undefined) out = input.substring(0, index);
        else if (last !== index) out += input.substring(last, index);

        let node = htmlTrie.get(char);

        if (typeof node === "object") {
            if (index + 1 < length) {
                const nextChar = input.charCodeAt(index + 1);
                const value =
                    typeof node.next === "number"
                        ? node.next === nextChar
                            ? node.nextValue
                            : undefined
                        : node.next.get(nextChar);

                if (value !== undefined) {
                    out += value;
                    index++;
                    last = index + 1;
                    continue;
                }
            }
            node = node.value;
        }

        if (node === undefined) {
            const cp = getCodePoint(input, index);
            out += `&#x${cp.toString(16)};`;
            if (cp !== char) index++;
            last = index + 1;
        } else {
            out += node;
            last = index + 1;
        }
    }

    if (out === undefined) return input;
    if (last < length) out += input.substr(last);
    return out;
}
