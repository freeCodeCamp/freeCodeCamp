// --------------------------------------------------------------------------
// IsBetween
// --------------------------------------------------------------------------
function IsBetween(value, min, max) {
    return value >= min && value <= max;
}
// --------------------------------------------------------------------------
// IsRegionalIndicator
// --------------------------------------------------------------------------
function IsRegionalIndicator(value) {
    return IsBetween(value, 0x1F1E6, 0x1F1FF);
}
// --------------------------------------------------------------------------
// IsVariationSelector
// --------------------------------------------------------------------------
function IsVariationSelector(value) {
    return IsBetween(value, 0xFE00, 0xFE0F);
}
// --------------------------------------------------------------------------
// IsCombiningMark
// --------------------------------------------------------------------------
function IsCombiningMark(value) {
    return (IsBetween(value, 0x0300, 0x036F) ||
        IsBetween(value, 0x1AB0, 0x1AFF) ||
        IsBetween(value, 0x1DC0, 0x1DFF) ||
        IsBetween(value, 0xFE20, 0xFE2F));
}
// --------------------------------------------------------------------------
// CodePointLength
// --------------------------------------------------------------------------
function CodePointLength(value) {
    return value > 0xFFFF ? 2 : 1;
}
// --------------------------------------------------------------------------
// ConsumeModifiers (helper)
// --------------------------------------------------------------------------
function ConsumeModifiers(value, index) {
    while (index < value.length) {
        const point = value.codePointAt(index);
        if (IsCombiningMark(point) || IsVariationSelector(point)) {
            index += CodePointLength(point);
        }
        else {
            break;
        }
    }
    return index;
}
// --------------------------------------------------------------------------
// NextGraphemeClusterIndex
// --------------------------------------------------------------------------
function NextGraphemeClusterIndex(value, clusterStart) {
    const startCP = value.codePointAt(clusterStart);
    let clusterEnd = clusterStart + CodePointLength(startCP);
    // Consume combining marks & variation selectors
    clusterEnd = ConsumeModifiers(value, clusterEnd);
    // Handle multi-ZWJ sequences
    while (clusterEnd < value.length - 1 && value[clusterEnd] === '\u200D') {
        const nextCP = value.codePointAt(clusterEnd + 1);
        clusterEnd += 1 + CodePointLength(nextCP);
        clusterEnd = ConsumeModifiers(value, clusterEnd);
    }
    // Handle regional indicator pairs (flags)
    if (IsRegionalIndicator(startCP) &&
        clusterEnd < value.length &&
        IsRegionalIndicator(value.codePointAt(clusterEnd))) {
        clusterEnd += CodePointLength(value.codePointAt(clusterEnd));
    }
    return clusterEnd;
}
// --------------------------------------------------------------------------
// IsGraphemeCodePoint
// --------------------------------------------------------------------------
function IsGraphemeCodePoint(value) {
    return (IsBetween(value, 0xD800, 0xDBFF) || // High surrogate
        IsBetween(value, 0x0300, 0x036F) || // Combining diacritical marks
        (value === 0x200D) // Zero-width joiner
    );
}
// --------------------------------------------------------------------------
// GraphemeCount
// --------------------------------------------------------------------------
/** Returns the number of grapheme clusters in a string */
export function GraphemeCount(value) {
    let count = 0;
    let index = 0;
    while (index < value.length) {
        index = NextGraphemeClusterIndex(value, index);
        count++;
    }
    return count;
}
// --------------------------------------------------------------------------
// IsMinLength
// --------------------------------------------------------------------------
/** Checks if a string has at least a minimum number of grapheme clusters */
function IsMinLength(value, minLength) {
    // ----------------------------------------------------------------
    // Inaccessible via public interface (review)
    //
    // deno-coverage-ignore-start
    // ----------------------------------------------------------------
    if (minLength === 0)
        return true; // 0-length
    // deno-coverage-ignore-stop
    let count = 0;
    let index = 0;
    while (index < value.length) {
        index = NextGraphemeClusterIndex(value, index);
        count++;
        if (count >= minLength)
            return true;
    }
    return false;
}
// --------------------------------------------------------------------------
// IsMaxLength
// --------------------------------------------------------------------------
/** Checks if a string has at most a maximum number of grapheme clusters */
function IsMaxLength(value, maxLength) {
    let count = 0;
    let index = 0;
    while (index < value.length) {
        index = NextGraphemeClusterIndex(value, index);
        count++;
        if (count > maxLength)
            return false;
    }
    return true;
}
// --------------------------------------------------------------------------
// IsMinLengthFast
// --------------------------------------------------------------------------
/** Fast check for minimum grapheme length, falls back to full check if needed */
export function IsMinLengthFast(value, minLength) {
    if (minLength === 0)
        return true; // 0-length
    let index = 0;
    while (index < value.length) {
        if (IsGraphemeCodePoint(value.charCodeAt(index))) {
            return IsMinLength(value, minLength);
        }
        index++;
        if (index >= minLength)
            return true;
    }
    return false;
}
// --------------------------------------------------------------------------
// IsMaxLengthFast
// --------------------------------------------------------------------------
/** Fast check for maximum grapheme length, falls back to full check if needed */
export function IsMaxLengthFast(value, maxLength) {
    let index = 0;
    while (index < value.length) {
        if (IsGraphemeCodePoint(value.charCodeAt(index))) {
            return IsMaxLength(value, maxLength);
        }
        index++;
        if (index > maxLength)
            return false;
    }
    return true;
}
