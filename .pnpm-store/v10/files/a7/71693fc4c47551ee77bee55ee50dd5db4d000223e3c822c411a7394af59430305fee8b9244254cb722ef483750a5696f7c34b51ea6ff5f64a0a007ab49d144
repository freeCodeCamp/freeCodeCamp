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
export type EncodeTrieNode =
    | string
    | {
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
export function parseEncodeTrie(
    serialized: string,
): Map<number, EncodeTrieNode> {
    const top = new Map<number, EncodeTrieNode>();
    const totalLength = serialized.length;
    let cursor = 0;
    let lastTopKey = -1;

    function readDiff(): number {
        const start = cursor;
        while (cursor < totalLength) {
            const char = serialized.charAt(cursor);

            if ((char < "0" || char > "9") && (char < "a" || char > "z")) {
                break;
            }
            cursor++;
        }
        if (cursor === start) return 0;
        return Number.parseInt(serialized.slice(start, cursor), 36);
    }

    function readEntity(): string {
        if (serialized[cursor] !== "&") {
            throw new Error(`Child entry missing value near index ${cursor}`);
        }

        // Cursor currently points at '&'
        const start = cursor;
        const end = serialized.indexOf(";", cursor + 1);
        if (end === -1) {
            throw new Error(`Unterminated entity starting at index ${start}`);
        }
        cursor = end + 1; // Move past ';'
        return serialized.slice(start, cursor); // Includes & ... ;
    }

    while (cursor < totalLength) {
        const keyDiff = readDiff();
        const key = lastTopKey === -1 ? keyDiff : lastTopKey + keyDiff + 1;

        let value: string | undefined;
        if (serialized[cursor] === "&") value = readEntity();

        if (serialized[cursor] === "{") {
            cursor++; // Skip '{'
            // Parse first child
            let diff = readDiff();
            let childKey = diff; // First key (lastChildKey = -1)
            const firstValue = readEntity();
            if (serialized[cursor] === "{") {
                throw new Error("Unexpected nested '{' beyond depth 2");
            }
            // If end of block -> single child optimization
            if (serialized[cursor] === "}") {
                top.set(key, { value, next: childKey, nextValue: firstValue });
                cursor++; // Skip '}'
            } else {
                const childMap = new Map<number, EncodeTrieNode>();
                childMap.set(childKey, firstValue);
                let lastChildKey = childKey;
                while (cursor < totalLength && serialized[cursor] !== "}") {
                    diff = readDiff();
                    childKey = lastChildKey + diff + 1;
                    const childValue = readEntity();
                    if (serialized[cursor] === "{") {
                        throw new Error("Unexpected nested '{' beyond depth 2");
                    }
                    childMap.set(childKey, childValue);
                    lastChildKey = childKey;
                }
                if (serialized[cursor] !== "}") {
                    throw new Error("Unterminated child block");
                }
                cursor++; // Skip '}'
                top.set(key, { value, next: childMap });
            }
        } else if (value === undefined) {
            throw new Error(
                `Malformed encode trie: missing value at index ${cursor}`,
            );
        } else {
            top.set(key, value);
        }
        lastTopKey = key;
    }
    return top;
}
