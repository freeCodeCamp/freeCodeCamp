/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class StickyRange {
    constructor(startLineNumber, endLineNumber) {
        this.startLineNumber = startLineNumber;
        this.endLineNumber = endLineNumber;
    }
}
class StickyElement {
    constructor(
    /**
     * Range of line numbers spanned by the current scope
     */
    range, 
    /**
     * Must be sorted by start line number
    */
    children, 
    /**
     * Parent sticky outline element
     */
    parent) {
        this.range = range;
        this.children = children;
        this.parent = parent;
    }
}
class StickyModel {
    constructor(uri, version, element, outlineProviderId) {
        this.uri = uri;
        this.version = version;
        this.element = element;
        this.outlineProviderId = outlineProviderId;
    }
}

export { StickyElement, StickyModel, StickyRange };
