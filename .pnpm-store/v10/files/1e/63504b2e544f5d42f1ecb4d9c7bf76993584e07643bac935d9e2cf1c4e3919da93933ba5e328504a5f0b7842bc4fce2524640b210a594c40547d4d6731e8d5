/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class ViewCompositionStartEvent {
    constructor() {
        this.type = 0 /* ViewEventType.ViewCompositionStart */;
    }
}
class ViewCompositionEndEvent {
    constructor() {
        this.type = 1 /* ViewEventType.ViewCompositionEnd */;
    }
}
class ViewConfigurationChangedEvent {
    constructor(source) {
        this.type = 2 /* ViewEventType.ViewConfigurationChanged */;
        this._source = source;
    }
    hasChanged(id) {
        return this._source.hasChanged(id);
    }
}
class ViewCursorStateChangedEvent {
    constructor(selections, modelSelections, reason) {
        this.selections = selections;
        this.modelSelections = modelSelections;
        this.reason = reason;
        this.type = 3 /* ViewEventType.ViewCursorStateChanged */;
    }
}
class ViewDecorationsChangedEvent {
    constructor(source) {
        this.type = 4 /* ViewEventType.ViewDecorationsChanged */;
        if (source) {
            this.affectsMinimap = source.affectsMinimap;
            this.affectsOverviewRuler = source.affectsOverviewRuler;
            this.affectsGlyphMargin = source.affectsGlyphMargin;
            this.affectsLineNumber = source.affectsLineNumber;
        }
        else {
            this.affectsMinimap = true;
            this.affectsOverviewRuler = true;
            this.affectsGlyphMargin = true;
            this.affectsLineNumber = true;
        }
    }
}
class ViewFlushedEvent {
    constructor() {
        this.type = 5 /* ViewEventType.ViewFlushed */;
        // Nothing to do
    }
}
class ViewFocusChangedEvent {
    constructor(isFocused) {
        this.type = 6 /* ViewEventType.ViewFocusChanged */;
        this.isFocused = isFocused;
    }
}
class ViewLanguageConfigurationEvent {
    constructor() {
        this.type = 7 /* ViewEventType.ViewLanguageConfigurationChanged */;
    }
}
class ViewLineMappingChangedEvent {
    constructor() {
        this.type = 8 /* ViewEventType.ViewLineMappingChanged */;
        // Nothing to do
    }
}
class ViewLinesChangedEvent {
    constructor(
    /**
     * The first line that has changed.
     */
    fromLineNumber, 
    /**
     * The number of lines that have changed.
     */
    count) {
        this.fromLineNumber = fromLineNumber;
        this.count = count;
        this.type = 9 /* ViewEventType.ViewLinesChanged */;
    }
}
class ViewLinesDeletedEvent {
    constructor(fromLineNumber, toLineNumber) {
        this.type = 10 /* ViewEventType.ViewLinesDeleted */;
        this.fromLineNumber = fromLineNumber;
        this.toLineNumber = toLineNumber;
    }
}
class ViewLinesInsertedEvent {
    constructor(fromLineNumber, toLineNumber) {
        this.type = 11 /* ViewEventType.ViewLinesInserted */;
        this.fromLineNumber = fromLineNumber;
        this.toLineNumber = toLineNumber;
    }
}
class ViewRevealRangeRequestEvent {
    constructor(
    /**
     * Source of the call that caused the event.
     */
    source, 
    /**
     * Reduce the revealing to a minimum (e.g. avoid scrolling if the bounding box is visible and near the viewport edge).
     */
    minimalReveal, 
    /**
     * Range to be reavealed.
     */
    range, 
    /**
     * Selections to be revealed.
     */
    selections, 
    /**
     * The vertical reveal strategy.
     */
    verticalType, 
    /**
     * If true: there should be a horizontal & vertical revealing.
     * If false: there should be just a vertical revealing.
     */
    revealHorizontal, 
    /**
     * The scroll type.
     */
    scrollType) {
        this.source = source;
        this.minimalReveal = minimalReveal;
        this.range = range;
        this.selections = selections;
        this.verticalType = verticalType;
        this.revealHorizontal = revealHorizontal;
        this.scrollType = scrollType;
        this.type = 12 /* ViewEventType.ViewRevealRangeRequest */;
    }
}
class ViewScrollChangedEvent {
    constructor(source) {
        this.type = 13 /* ViewEventType.ViewScrollChanged */;
        this.scrollWidth = source.scrollWidth;
        this.scrollLeft = source.scrollLeft;
        this.scrollHeight = source.scrollHeight;
        this.scrollTop = source.scrollTop;
        this.scrollWidthChanged = source.scrollWidthChanged;
        this.scrollLeftChanged = source.scrollLeftChanged;
        this.scrollHeightChanged = source.scrollHeightChanged;
        this.scrollTopChanged = source.scrollTopChanged;
    }
}
class ViewThemeChangedEvent {
    constructor(theme) {
        this.theme = theme;
        this.type = 14 /* ViewEventType.ViewThemeChanged */;
    }
}
class ViewTokensChangedEvent {
    constructor(ranges) {
        this.type = 15 /* ViewEventType.ViewTokensChanged */;
        this.ranges = ranges;
    }
}
class ViewTokensColorsChangedEvent {
    constructor() {
        this.type = 16 /* ViewEventType.ViewTokensColorsChanged */;
        // Nothing to do
    }
}
class ViewZonesChangedEvent {
    constructor() {
        this.type = 17 /* ViewEventType.ViewZonesChanged */;
        // Nothing to do
    }
}

export { ViewCompositionEndEvent, ViewCompositionStartEvent, ViewConfigurationChangedEvent, ViewCursorStateChangedEvent, ViewDecorationsChangedEvent, ViewFlushedEvent, ViewFocusChangedEvent, ViewLanguageConfigurationEvent, ViewLineMappingChangedEvent, ViewLinesChangedEvent, ViewLinesDeletedEvent, ViewLinesInsertedEvent, ViewRevealRangeRequestEvent, ViewScrollChangedEvent, ViewThemeChangedEvent, ViewTokensChangedEvent, ViewTokensColorsChangedEvent, ViewZonesChangedEvent };
