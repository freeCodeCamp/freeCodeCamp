/**
 * A node inside the encoding trie used by `encode.ts`.
 *
 * There are two physical shapes to minimize allocations and lookup cost:
 *
 * 1. Leaf node (string)
 *    - A plain string (already in the form `"&name;"`).
 *    - Represents a terminal match with no children.
 *
 * 2. Branch / value node (object)
 */
export type EncodeTrieNode = string | {
    /**
     * Entity value for the current code point sequence (wrapped: `&...;`).
     * Present when the path to this node itself is a valid named entity.
     */
    value: string | undefined;
    /** If a number, the next code unit of the only next character. */
    next: number | Map<number, EncodeTrieNode>;
    /** If next is a number, `nextValue` contains the entity value. */
    nextValue?: string;
};
/**
 * Parse a compact encode trie string into a Map structure used for encoding.
 *
 * Format per entry (ascending code points using delta encoding):
 *   <diffBase36>[&name;][{<children>}]  -- diff omitted when 0
 * Where diff = currentKey - previousKey - 1 (first entry stores absolute key).
 * `&name;` is the entity value (already wrapped); a following `{` denotes children.
 */
export declare function parseEncodeTrie(serialized: string): Map<number, EncodeTrieNode>;
//# sourceMappingURL=encode-shared.d.ts.map