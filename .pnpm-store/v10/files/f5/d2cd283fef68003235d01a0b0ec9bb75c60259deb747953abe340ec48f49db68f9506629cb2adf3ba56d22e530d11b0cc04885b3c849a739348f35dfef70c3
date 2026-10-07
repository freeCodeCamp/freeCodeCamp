import { baggageEntryMetadataFromString } from '@opentelemetry/api';
import { BAGGAGE_ITEMS_SEPARATOR, BAGGAGE_PROPERTIES_SEPARATOR, BAGGAGE_KEY_PAIR_SEPARATOR, BAGGAGE_MAX_TOTAL_LENGTH, BAGGAGE_MAX_NAME_VALUE_PAIRS, BAGGAGE_MAX_PER_NAME_VALUE_PAIRS, } from './constants';
export function serializeKeyPairs(keyPairs) {
    return keyPairs.reduce((hValue, current) => {
        const value = `${hValue}${hValue !== '' ? BAGGAGE_ITEMS_SEPARATOR : ''}${current}`;
        return value.length > BAGGAGE_MAX_TOTAL_LENGTH ? hValue : value;
    }, '');
}
export function getKeyPairs(baggage) {
    return baggage.getAllEntries().map(([key, value]) => {
        let entry = `${encodeURIComponent(key)}=${encodeURIComponent(value.value)}`;
        // include opaque metadata if provided
        // NOTE: we intentionally don't URI-encode the metadata - that responsibility falls on the metadata implementation
        if (value.metadata !== undefined) {
            entry += BAGGAGE_PROPERTIES_SEPARATOR + value.metadata.toString();
        }
        return entry;
    });
}
export function parsePairKeyValue(entry) {
    if (!entry)
        return;
    const metadataSeparatorIndex = entry.indexOf(BAGGAGE_PROPERTIES_SEPARATOR);
    const keyPairPart = metadataSeparatorIndex === -1
        ? entry
        : entry.substring(0, metadataSeparatorIndex);
    const separatorIndex = keyPairPart.indexOf(BAGGAGE_KEY_PAIR_SEPARATOR);
    if (separatorIndex <= 0)
        return;
    const rawKey = keyPairPart.substring(0, separatorIndex).trim();
    const rawValue = keyPairPart.substring(separatorIndex + 1).trim();
    if (!rawKey || !rawValue)
        return;
    let key;
    let value;
    try {
        key = decodeURIComponent(rawKey);
        value = decodeURIComponent(rawValue);
    }
    catch {
        return;
    }
    let metadata;
    if (metadataSeparatorIndex !== -1 &&
        metadataSeparatorIndex < entry.length - 1) {
        const metadataString = entry.substring(metadataSeparatorIndex + 1);
        metadata = baggageEntryMetadataFromString(metadataString);
    }
    return { key, value, metadata };
}
/**
 * Parses a single baggage header string into the provided record, applying limits defined in this package.
 * Uses indexOf/substring in a while loop to avoid allocating a full array of split entries.
 * Returns the updated pair count so callers can track totals across multiple header values.
 */
export function parseBaggageHeaderString(value, baggage, count, totalSize) {
    let start = 0;
    while (start < value.length && count < BAGGAGE_MAX_NAME_VALUE_PAIRS) {
        const end = value.indexOf(BAGGAGE_ITEMS_SEPARATOR, start);
        const entryEnd = end === -1 ? value.length : end;
        const entryLength = entryEnd - start;
        if (entryLength <= BAGGAGE_MAX_PER_NAME_VALUE_PAIRS) {
            const keyPair = parsePairKeyValue(value.substring(start, entryEnd));
            if (keyPair) {
                // Comma separator is counted for every accepted entry after the first
                const entrySize = (count === 0 ? 0 : 1) + entryLength;
                if (totalSize + entrySize > BAGGAGE_MAX_TOTAL_LENGTH)
                    break;
                baggage[keyPair.key] = keyPair.metadata
                    ? { value: keyPair.value, metadata: keyPair.metadata }
                    : { value: keyPair.value };
                count++;
                totalSize += entrySize;
            }
        }
        if (end === -1)
            break;
        start = end + 1;
    }
    return [count, totalSize];
}
/**
 * Parse a string serialized in the baggage HTTP Format (without metadata):
 * https://github.com/w3c/baggage/blob/master/baggage/HTTP_HEADER_FORMAT.md
 */
export function parseKeyPairsIntoRecord(value) {
    const result = {};
    if (typeof value === 'string' && value.length > 0) {
        value.split(BAGGAGE_ITEMS_SEPARATOR).forEach(entry => {
            const keyPair = parsePairKeyValue(entry);
            if (keyPair !== undefined && keyPair.value.length > 0) {
                result[keyPair.key] = keyPair.value;
            }
        });
    }
    return result;
}
//# sourceMappingURL=utils.js.map