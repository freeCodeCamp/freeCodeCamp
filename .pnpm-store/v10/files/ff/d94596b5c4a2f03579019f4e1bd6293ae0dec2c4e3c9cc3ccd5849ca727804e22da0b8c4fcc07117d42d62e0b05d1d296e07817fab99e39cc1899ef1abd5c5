/**
 * Parse a compact encode trie string into a Map structure used for encoding.
 *
 * Format per entry (ascending code points using delta encoding):
 *   <diffBase36>[&name;][{<children>}]  -- diff omitted when 0
 * Where diff = currentKey - previousKey - 1 (first entry stores absolute key).
 * `&name;` is the entity value (already wrapped); a following `{` denotes children.
 */
export function parseEncodeTrie(serialized) {
    const top = new Map();
    const totalLength = serialized.length;
    let cursor = 0;
    let lastTopKey = -1;
    function readDiff() {
        const start = cursor;
        while (cursor < totalLength) {
            const char = serialized.charAt(cursor);
            if ((char < "0" || char > "9") && (char < "a" || char > "z")) {
                break;
            }
            cursor++;
        }
        if (cursor === start)
            return 0;
        return Number.parseInt(serialized.slice(start, cursor), 36);
    }
    function readEntity() {
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
        let value;
        if (serialized[cursor] === "&")
            value = readEntity();
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
            }
            else {
                const childMap = new Map();
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
        }
        else if (value === undefined) {
            throw new Error(`Malformed encode trie: missing value at index ${cursor}`);
        }
        else {
            top.set(key, value);
        }
        lastTopKey = key;
    }
    return top;
}
//# sourceMappingURL=encode-shared.js.map