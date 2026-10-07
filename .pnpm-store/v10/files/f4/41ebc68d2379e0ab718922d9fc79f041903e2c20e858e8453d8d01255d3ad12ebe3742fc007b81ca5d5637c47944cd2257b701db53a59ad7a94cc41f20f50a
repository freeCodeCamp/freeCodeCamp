import { Position } from '../../common/core/position.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class ViewUserInputEvents {
    constructor(coordinatesConverter) {
        this.onKeyDown = null;
        this.onKeyUp = null;
        this.onContextMenu = null;
        this.onMouseMove = null;
        this.onMouseLeave = null;
        this.onMouseDown = null;
        this.onMouseUp = null;
        this.onMouseDrag = null;
        this.onMouseDrop = null;
        this.onMouseDropCanceled = null;
        this.onMouseWheel = null;
        this._coordinatesConverter = coordinatesConverter;
    }
    emitKeyDown(e) {
        this.onKeyDown?.(e);
    }
    emitKeyUp(e) {
        this.onKeyUp?.(e);
    }
    emitContextMenu(e) {
        this.onContextMenu?.(this._convertViewToModelMouseEvent(e));
    }
    emitMouseMove(e) {
        this.onMouseMove?.(this._convertViewToModelMouseEvent(e));
    }
    emitMouseLeave(e) {
        this.onMouseLeave?.(this._convertViewToModelMouseEvent(e));
    }
    emitMouseDown(e) {
        this.onMouseDown?.(this._convertViewToModelMouseEvent(e));
    }
    emitMouseUp(e) {
        this.onMouseUp?.(this._convertViewToModelMouseEvent(e));
    }
    emitMouseDrag(e) {
        this.onMouseDrag?.(this._convertViewToModelMouseEvent(e));
    }
    emitMouseDrop(e) {
        this.onMouseDrop?.(this._convertViewToModelMouseEvent(e));
    }
    emitMouseDropCanceled() {
        this.onMouseDropCanceled?.();
    }
    emitMouseWheel(e) {
        this.onMouseWheel?.(e);
    }
    _convertViewToModelMouseEvent(e) {
        if (e.target) {
            return {
                event: e.event,
                target: this._convertViewToModelMouseTarget(e.target)
            };
        }
        return e;
    }
    _convertViewToModelMouseTarget(target) {
        return ViewUserInputEvents.convertViewToModelMouseTarget(target, this._coordinatesConverter);
    }
    static convertViewToModelMouseTarget(target, coordinatesConverter) {
        const result = { ...target };
        if (result.position) {
            result.position = coordinatesConverter.convertViewPositionToModelPosition(result.position);
        }
        if (result.range) {
            result.range = coordinatesConverter.convertViewRangeToModelRange(result.range);
        }
        if (result.type === 5 /* MouseTargetType.GUTTER_VIEW_ZONE */ || result.type === 8 /* MouseTargetType.CONTENT_VIEW_ZONE */) {
            result.detail = this.convertViewToModelViewZoneData(result.detail, coordinatesConverter);
        }
        return result;
    }
    static convertViewToModelViewZoneData(data, coordinatesConverter) {
        return {
            viewZoneId: data.viewZoneId,
            positionBefore: data.positionBefore ? coordinatesConverter.convertViewPositionToModelPosition(data.positionBefore) : data.positionBefore,
            positionAfter: data.positionAfter ? coordinatesConverter.convertViewPositionToModelPosition(data.positionAfter) : data.positionAfter,
            position: coordinatesConverter.convertViewPositionToModelPosition(data.position),
            afterLineNumber: coordinatesConverter.convertViewPositionToModelPosition(new Position(data.afterLineNumber, 1)).lineNumber,
        };
    }
}

export { ViewUserInputEvents };
