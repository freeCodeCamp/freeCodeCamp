import { matchesFuzzyIconAware, parseLabelWithIcons } from '../../../../base/common/iconLabels.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class QuickInputTreeFilter {
    constructor() {
        this.filterValue = '';
        this.matchOnLabel = true;
        this.matchOnDescription = false;
    }
    filter(element, parentVisibility) {
        if (!this.filterValue || !(this.matchOnLabel || this.matchOnDescription)) {
            return element.children
                ? { visibility: 2 /* TreeVisibility.Recurse */, data: {} }
                : { visibility: 1 /* TreeVisibility.Visible */, data: {} };
        }
        const labelHighlights = this.matchOnLabel ? matchesFuzzyIconAware(this.filterValue, parseLabelWithIcons(element.label)) ?? undefined : undefined;
        const descriptionHighlights = this.matchOnDescription ? matchesFuzzyIconAware(this.filterValue, parseLabelWithIcons(element.description || '')) ?? undefined : undefined;
        const visibility = parentVisibility === 1 /* TreeVisibility.Visible */
            // Parent is visible because it had matches, so we show all children
            ? 1 /* TreeVisibility.Visible */
            // This would only happen on Parent is recurse so...
            : (labelHighlights || descriptionHighlights)
                // If we have any highlights, we are visible
                ? 1 /* TreeVisibility.Visible */
                // Otherwise, we defer to the children or if no children, we are hidden
                : element.children
                    ? 2 /* TreeVisibility.Recurse */
                    : 0 /* TreeVisibility.Hidden */;
        return {
            visibility,
            data: {
                labelHighlights,
                descriptionHighlights
            }
        };
    }
}

export { QuickInputTreeFilter };
