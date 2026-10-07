import { safeIntl } from './date.js';
import { Lazy } from './lazy.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
// When comparing large numbers of strings it's better for performance to create an
// Intl.Collator object and use the function provided by its compare property
// than it is to use String.prototype.localeCompare()
// A collator with numeric sorting enabled, and no sensitivity to case, accents or diacritics.
const intlFileNameCollatorBaseNumeric = new Lazy(() => {
    const collator = safeIntl.Collator(undefined, { numeric: true, sensitivity: 'base' }).value;
    return {
        collator,
        collatorIsNumeric: collator.resolvedOptions().numeric
    };
});
// A collator with numeric sorting enabled.
new Lazy(() => {
    const collator = safeIntl.Collator(undefined, { numeric: true }).value;
    return {
        collator
    };
});
// A collator with numeric sorting enabled, and sensitivity to accents and diacritics but not case.
new Lazy(() => {
    const collator = safeIntl.Collator(undefined, { numeric: true, sensitivity: 'accent' }).value;
    return {
        collator
    };
});
/** Compares filenames without distinguishing the name from the extension. Disambiguates by unicode comparison. */
function compareFileNames(one, other, caseSensitive = false) {
    const a = one || '';
    const b = other || '';
    const result = intlFileNameCollatorBaseNumeric.value.collator.compare(a, b);
    // Using the numeric option will make compare(`foo1`, `foo01`) === 0. Disambiguate.
    if (intlFileNameCollatorBaseNumeric.value.collatorIsNumeric && result === 0 && a !== b) {
        return a < b ? -1 : 1;
    }
    return result;
}
function compareAnything(one, other, lookFor) {
    const elementAName = one.toLowerCase();
    const elementBName = other.toLowerCase();
    // Sort prefix matches over non prefix matches
    const prefixCompare = compareByPrefix(one, other, lookFor);
    if (prefixCompare) {
        return prefixCompare;
    }
    // Sort suffix matches over non suffix matches
    const elementASuffixMatch = elementAName.endsWith(lookFor);
    const elementBSuffixMatch = elementBName.endsWith(lookFor);
    if (elementASuffixMatch !== elementBSuffixMatch) {
        return elementASuffixMatch ? -1 : 1;
    }
    // Understand file names
    const r = compareFileNames(elementAName, elementBName);
    if (r !== 0) {
        return r;
    }
    // Compare by name
    return elementAName.localeCompare(elementBName);
}
function compareByPrefix(one, other, lookFor) {
    const elementAName = one.toLowerCase();
    const elementBName = other.toLowerCase();
    // Sort prefix matches over non prefix matches
    const elementAPrefixMatch = elementAName.startsWith(lookFor);
    const elementBPrefixMatch = elementBName.startsWith(lookFor);
    if (elementAPrefixMatch !== elementBPrefixMatch) {
        return elementAPrefixMatch ? -1 : 1;
    }
    // Same prefix: Sort shorter matches to the top to have those on top that match more precisely
    else if (elementAPrefixMatch && elementBPrefixMatch) {
        if (elementAName.length < elementBName.length) {
            return -1;
        }
        if (elementAName.length > elementBName.length) {
            return 1;
        }
    }
    return 0;
}

export { compareAnything, compareByPrefix, compareFileNames };
