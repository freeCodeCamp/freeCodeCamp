/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class ContentHoverResult {
    constructor(hoverParts, isComplete, options) {
        this.hoverParts = hoverParts;
        this.isComplete = isComplete;
        this.options = options;
    }
    filter(anchor) {
        const filteredHoverParts = this.hoverParts.filter((m) => m.isValidForHoverAnchor(anchor));
        if (filteredHoverParts.length === this.hoverParts.length) {
            return this;
        }
        return new FilteredContentHoverResult(this, filteredHoverParts, this.isComplete, this.options);
    }
}
class FilteredContentHoverResult extends ContentHoverResult {
    constructor(original, messages, isComplete, options) {
        super(messages, isComplete, options);
        this.original = original;
    }
    filter(anchor) {
        return this.original.filter(anchor);
    }
}

export { ContentHoverResult, FilteredContentHoverResult };
