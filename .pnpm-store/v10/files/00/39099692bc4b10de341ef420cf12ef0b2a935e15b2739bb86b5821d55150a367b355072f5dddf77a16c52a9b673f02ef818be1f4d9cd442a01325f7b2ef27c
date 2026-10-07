import { Emitter } from '../../base/common/event.js';
import { Disposable } from '../../base/common/lifecycle.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class ViewModelEventDispatcher extends Disposable {
    constructor() {
        super();
        this._onEvent = this._register(new Emitter());
        this.onEvent = this._onEvent.event;
        this._eventHandlers = [];
        this._viewEventQueue = null;
        this._isConsumingViewEventQueue = false;
        this._collector = null;
        this._collectorCnt = 0;
        this._outgoingEvents = [];
    }
    emitOutgoingEvent(e) {
        this._addOutgoingEvent(e);
        this._emitOutgoingEvents();
    }
    _addOutgoingEvent(e) {
        for (let i = 0, len = this._outgoingEvents.length; i < len; i++) {
            const mergeResult = (this._outgoingEvents[i].kind === e.kind ? this._outgoingEvents[i].attemptToMerge(e) : null);
            if (mergeResult) {
                this._outgoingEvents[i] = mergeResult;
                return;
            }
        }
        // not merged
        this._outgoingEvents.push(e);
    }
    _emitOutgoingEvents() {
        while (this._outgoingEvents.length > 0) {
            if (this._collector || this._isConsumingViewEventQueue) {
                // right now collecting or emitting view events, so let's postpone emitting
                return;
            }
            const event = this._outgoingEvents.shift();
            if (event.isNoOp()) {
                continue;
            }
            this._onEvent.fire(event);
        }
    }
    addViewEventHandler(eventHandler) {
        for (let i = 0, len = this._eventHandlers.length; i < len; i++) {
            if (this._eventHandlers[i] === eventHandler) {
                console.warn('Detected duplicate listener in ViewEventDispatcher', eventHandler);
            }
        }
        this._eventHandlers.push(eventHandler);
    }
    removeViewEventHandler(eventHandler) {
        for (let i = 0; i < this._eventHandlers.length; i++) {
            if (this._eventHandlers[i] === eventHandler) {
                this._eventHandlers.splice(i, 1);
                break;
            }
        }
    }
    beginEmitViewEvents() {
        this._collectorCnt++;
        if (this._collectorCnt === 1) {
            this._collector = new ViewModelEventsCollector();
        }
        return this._collector;
    }
    endEmitViewEvents() {
        this._collectorCnt--;
        if (this._collectorCnt === 0) {
            const outgoingEvents = this._collector.outgoingEvents;
            const viewEvents = this._collector.viewEvents;
            this._collector = null;
            for (const outgoingEvent of outgoingEvents) {
                this._addOutgoingEvent(outgoingEvent);
            }
            if (viewEvents.length > 0) {
                this._emitMany(viewEvents);
            }
        }
        this._emitOutgoingEvents();
    }
    emitSingleViewEvent(event) {
        try {
            const eventsCollector = this.beginEmitViewEvents();
            eventsCollector.emitViewEvent(event);
        }
        finally {
            this.endEmitViewEvents();
        }
    }
    _emitMany(events) {
        if (this._viewEventQueue) {
            this._viewEventQueue = this._viewEventQueue.concat(events);
        }
        else {
            this._viewEventQueue = events;
        }
        if (!this._isConsumingViewEventQueue) {
            this._consumeViewEventQueue();
        }
    }
    _consumeViewEventQueue() {
        try {
            this._isConsumingViewEventQueue = true;
            this._doConsumeQueue();
        }
        finally {
            this._isConsumingViewEventQueue = false;
        }
    }
    _doConsumeQueue() {
        while (this._viewEventQueue) {
            // Empty event queue, as events might come in while sending these off
            const events = this._viewEventQueue;
            this._viewEventQueue = null;
            // Use a clone of the event handlers list, as they might remove themselves
            const eventHandlers = this._eventHandlers.slice(0);
            for (const eventHandler of eventHandlers) {
                eventHandler.handleEvents(events);
            }
        }
    }
}
class ViewModelEventsCollector {
    constructor() {
        this.viewEvents = [];
        this.outgoingEvents = [];
    }
    emitViewEvent(event) {
        this.viewEvents.push(event);
    }
    emitOutgoingEvent(e) {
        this.outgoingEvents.push(e);
    }
}
class ContentSizeChangedEvent {
    constructor(oldContentWidth, oldContentHeight, contentWidth, contentHeight) {
        this.kind = 0 /* OutgoingViewModelEventKind.ContentSizeChanged */;
        this._oldContentWidth = oldContentWidth;
        this._oldContentHeight = oldContentHeight;
        this.contentWidth = contentWidth;
        this.contentHeight = contentHeight;
        this.contentWidthChanged = (this._oldContentWidth !== this.contentWidth);
        this.contentHeightChanged = (this._oldContentHeight !== this.contentHeight);
    }
    isNoOp() {
        return (!this.contentWidthChanged && !this.contentHeightChanged);
    }
    attemptToMerge(other) {
        if (other.kind !== this.kind) {
            return null;
        }
        return new ContentSizeChangedEvent(this._oldContentWidth, this._oldContentHeight, other.contentWidth, other.contentHeight);
    }
}
class FocusChangedEvent {
    constructor(oldHasFocus, hasFocus) {
        this.kind = 1 /* OutgoingViewModelEventKind.FocusChanged */;
        this.oldHasFocus = oldHasFocus;
        this.hasFocus = hasFocus;
    }
    isNoOp() {
        return (this.oldHasFocus === this.hasFocus);
    }
    attemptToMerge(other) {
        if (other.kind !== this.kind) {
            return null;
        }
        return new FocusChangedEvent(this.oldHasFocus, other.hasFocus);
    }
}
class WidgetFocusChangedEvent {
    constructor(oldHasFocus, hasFocus) {
        this.kind = 2 /* OutgoingViewModelEventKind.WidgetFocusChanged */;
        this.oldHasFocus = oldHasFocus;
        this.hasFocus = hasFocus;
    }
    isNoOp() {
        return (this.oldHasFocus === this.hasFocus);
    }
    attemptToMerge(other) {
        if (other.kind !== this.kind) {
            return null;
        }
        return new FocusChangedEvent(this.oldHasFocus, other.hasFocus);
    }
}
class ScrollChangedEvent {
    constructor(oldScrollWidth, oldScrollLeft, oldScrollHeight, oldScrollTop, scrollWidth, scrollLeft, scrollHeight, scrollTop) {
        this.kind = 3 /* OutgoingViewModelEventKind.ScrollChanged */;
        this._oldScrollWidth = oldScrollWidth;
        this._oldScrollLeft = oldScrollLeft;
        this._oldScrollHeight = oldScrollHeight;
        this._oldScrollTop = oldScrollTop;
        this.scrollWidth = scrollWidth;
        this.scrollLeft = scrollLeft;
        this.scrollHeight = scrollHeight;
        this.scrollTop = scrollTop;
        this.scrollWidthChanged = (this._oldScrollWidth !== this.scrollWidth);
        this.scrollLeftChanged = (this._oldScrollLeft !== this.scrollLeft);
        this.scrollHeightChanged = (this._oldScrollHeight !== this.scrollHeight);
        this.scrollTopChanged = (this._oldScrollTop !== this.scrollTop);
    }
    isNoOp() {
        return (!this.scrollWidthChanged && !this.scrollLeftChanged && !this.scrollHeightChanged && !this.scrollTopChanged);
    }
    attemptToMerge(other) {
        if (other.kind !== this.kind) {
            return null;
        }
        return new ScrollChangedEvent(this._oldScrollWidth, this._oldScrollLeft, this._oldScrollHeight, this._oldScrollTop, other.scrollWidth, other.scrollLeft, other.scrollHeight, other.scrollTop);
    }
}
class ViewZonesChangedEvent {
    constructor() {
        this.kind = 4 /* OutgoingViewModelEventKind.ViewZonesChanged */;
    }
    isNoOp() {
        return false;
    }
    attemptToMerge(other) {
        if (other.kind !== this.kind) {
            return null;
        }
        return this;
    }
}
class HiddenAreasChangedEvent {
    constructor() {
        this.kind = 5 /* OutgoingViewModelEventKind.HiddenAreasChanged */;
    }
    isNoOp() {
        return false;
    }
    attemptToMerge(other) {
        if (other.kind !== this.kind) {
            return null;
        }
        return this;
    }
}
class CursorStateChangedEvent {
    constructor(oldSelections, selections, oldModelVersionId, modelVersionId, source, reason, reachedMaxCursorCount) {
        this.kind = 7 /* OutgoingViewModelEventKind.CursorStateChanged */;
        this.oldSelections = oldSelections;
        this.selections = selections;
        this.oldModelVersionId = oldModelVersionId;
        this.modelVersionId = modelVersionId;
        this.source = source;
        this.reason = reason;
        this.reachedMaxCursorCount = reachedMaxCursorCount;
    }
    static _selectionsAreEqual(a, b) {
        if (!a && !b) {
            return true;
        }
        if (!a || !b) {
            return false;
        }
        const aLen = a.length;
        const bLen = b.length;
        if (aLen !== bLen) {
            return false;
        }
        for (let i = 0; i < aLen; i++) {
            if (!a[i].equalsSelection(b[i])) {
                return false;
            }
        }
        return true;
    }
    isNoOp() {
        return (CursorStateChangedEvent._selectionsAreEqual(this.oldSelections, this.selections)
            && this.oldModelVersionId === this.modelVersionId);
    }
    attemptToMerge(other) {
        if (other.kind !== this.kind) {
            return null;
        }
        return new CursorStateChangedEvent(this.oldSelections, other.selections, this.oldModelVersionId, other.modelVersionId, other.source, other.reason, this.reachedMaxCursorCount || other.reachedMaxCursorCount);
    }
}
class ReadOnlyEditAttemptEvent {
    constructor() {
        this.kind = 6 /* OutgoingViewModelEventKind.ReadOnlyEditAttempt */;
    }
    isNoOp() {
        return false;
    }
    attemptToMerge(other) {
        if (other.kind !== this.kind) {
            return null;
        }
        return this;
    }
}
class ModelDecorationsChangedEvent {
    constructor(event) {
        this.event = event;
        this.kind = 8 /* OutgoingViewModelEventKind.ModelDecorationsChanged */;
    }
    isNoOp() {
        return false;
    }
    attemptToMerge(other) {
        return null;
    }
}
class ModelLanguageChangedEvent {
    constructor(event) {
        this.event = event;
        this.kind = 9 /* OutgoingViewModelEventKind.ModelLanguageChanged */;
    }
    isNoOp() {
        return false;
    }
    attemptToMerge(other) {
        return null;
    }
}
class ModelLanguageConfigurationChangedEvent {
    constructor(event) {
        this.event = event;
        this.kind = 10 /* OutgoingViewModelEventKind.ModelLanguageConfigurationChanged */;
    }
    isNoOp() {
        return false;
    }
    attemptToMerge(other) {
        return null;
    }
}
class ModelContentChangedEvent {
    constructor(event) {
        this.event = event;
        this.kind = 11 /* OutgoingViewModelEventKind.ModelContentChanged */;
    }
    isNoOp() {
        return false;
    }
    attemptToMerge(other) {
        return null;
    }
}
class ModelOptionsChangedEvent {
    constructor(event) {
        this.event = event;
        this.kind = 12 /* OutgoingViewModelEventKind.ModelOptionsChanged */;
    }
    isNoOp() {
        return false;
    }
    attemptToMerge(other) {
        return null;
    }
}
class ModelTokensChangedEvent {
    constructor(event) {
        this.event = event;
        this.kind = 13 /* OutgoingViewModelEventKind.ModelTokensChanged */;
    }
    isNoOp() {
        return false;
    }
    attemptToMerge(other) {
        return null;
    }
}
class ModelLineHeightChangedEvent {
    constructor(event) {
        this.event = event;
        this.kind = 14 /* OutgoingViewModelEventKind.ModelLineHeightChanged */;
    }
    isNoOp() {
        return false;
    }
    attemptToMerge(other) {
        return null;
    }
}
class ModelFontChangedEvent {
    constructor(event) {
        this.event = event;
        this.kind = 15 /* OutgoingViewModelEventKind.ModelFontChangedEvent */;
    }
    isNoOp() {
        return false;
    }
    attemptToMerge(other) {
        return null;
    }
}

export { ContentSizeChangedEvent, CursorStateChangedEvent, FocusChangedEvent, HiddenAreasChangedEvent, ModelContentChangedEvent, ModelDecorationsChangedEvent, ModelFontChangedEvent, ModelLanguageChangedEvent, ModelLanguageConfigurationChangedEvent, ModelLineHeightChangedEvent, ModelOptionsChangedEvent, ModelTokensChangedEvent, ReadOnlyEditAttemptEvent, ScrollChangedEvent, ViewModelEventDispatcher, ViewModelEventsCollector, ViewZonesChangedEvent, WidgetFocusChangedEvent };
