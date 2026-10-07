/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class HoverRangeAnchor {
    constructor(priority, range, initialMousePosX, initialMousePosY) {
        this.priority = priority;
        this.range = range;
        this.initialMousePosX = initialMousePosX;
        this.initialMousePosY = initialMousePosY;
        this.type = 1 /* HoverAnchorType.Range */;
    }
    equals(other) {
        return (other.type === 1 /* HoverAnchorType.Range */ && this.range.equalsRange(other.range));
    }
    canAdoptVisibleHover(lastAnchor, showAtPosition) {
        return (lastAnchor.type === 1 /* HoverAnchorType.Range */ && showAtPosition.lineNumber === this.range.startLineNumber);
    }
}
class HoverForeignElementAnchor {
    constructor(priority, owner, range, initialMousePosX, initialMousePosY, supportsMarkerHover) {
        this.priority = priority;
        this.owner = owner;
        this.range = range;
        this.initialMousePosX = initialMousePosX;
        this.initialMousePosY = initialMousePosY;
        this.supportsMarkerHover = supportsMarkerHover;
        this.type = 2 /* HoverAnchorType.ForeignElement */;
    }
    equals(other) {
        return (other.type === 2 /* HoverAnchorType.ForeignElement */ && this.owner === other.owner);
    }
    canAdoptVisibleHover(lastAnchor, showAtPosition) {
        return (lastAnchor.type === 2 /* HoverAnchorType.ForeignElement */ && this.owner === lastAnchor.owner);
    }
}
/**
 * Default implementation of IRenderedHoverParts.
 */
class RenderedHoverParts {
    constructor(renderedHoverParts, disposables) {
        this.renderedHoverParts = renderedHoverParts;
        this.disposables = disposables;
    }
    dispose() {
        for (const part of this.renderedHoverParts) {
            part.dispose();
        }
        this.disposables?.dispose();
    }
}
const HoverParticipantRegistry = (new class HoverParticipantRegistry {
    constructor() {
        this._participants = [];
    }
    register(ctor) {
        this._participants.push(ctor);
    }
    getAll() {
        return this._participants;
    }
}());

export { HoverForeignElementAnchor, HoverParticipantRegistry, HoverRangeAnchor, RenderedHoverParts };
