import { getWindow, addDisposableListener, EventType, getDomNodePagePosition, addStandardDisposableListener, isInShadowDOM } from '../../base/browser/dom.js';
import { createStyleSheet } from '../../base/browser/domStylesheets.js';
import { GlobalPointerMoveMonitor } from '../../base/browser/globalPointerMoveMonitor.js';
import { StandardMouseEvent } from '../../base/browser/mouseEvent.js';
import { RunOnceScheduler } from '../../base/common/async.js';
import { Disposable, DisposableMap, DisposableStore } from '../../base/common/lifecycle.js';
import { asCssVariable } from '../../platform/theme/common/colorUtils.js';
import '../../platform/theme/common/colors/baseColors.js';
import '../../platform/theme/common/colors/chartsColors.js';
import '../../platform/theme/common/colors/editorColors.js';
import '../../platform/theme/common/colors/inputColors.js';
import '../../platform/theme/common/colors/listColors.js';
import '../../platform/theme/common/colors/menuColors.js';
import '../../platform/theme/common/colors/minimapColors.js';
import '../../platform/theme/common/colors/miscColors.js';
import '../../platform/theme/common/colors/quickpickColors.js';
import '../../platform/theme/common/colors/searchColors.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Coordinates relative to the whole document (e.g. mouse event's pageX and pageY)
 */
class PageCoordinates {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this._pageCoordinatesBrand = undefined;
    }
    toClientCoordinates(targetWindow) {
        return new ClientCoordinates(this.x - targetWindow.scrollX, this.y - targetWindow.scrollY);
    }
}
/**
 * Coordinates within the application's client area (i.e. origin is document's scroll position).
 *
 * For example, clicking in the top-left corner of the client area will
 * always result in a mouse event with a client.x value of 0, regardless
 * of whether the page is scrolled horizontally.
 */
class ClientCoordinates {
    constructor(clientX, clientY) {
        this.clientX = clientX;
        this.clientY = clientY;
        this._clientCoordinatesBrand = undefined;
    }
    toPageCoordinates(targetWindow) {
        return new PageCoordinates(this.clientX + targetWindow.scrollX, this.clientY + targetWindow.scrollY);
    }
}
/**
 * The position of the editor in the page.
 */
class EditorPagePosition {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this._editorPagePositionBrand = undefined;
    }
}
/**
 * Coordinates relative to the (top;left) of the editor that can be used safely with other internal editor metrics.
 * **NOTE**: This position is obtained by taking page coordinates and transforming them relative to the
 * editor's (top;left) position in a way in which scale transformations are taken into account.
 * **NOTE**: These coordinates could be negative if the mouse position is outside the editor.
 */
class CoordinatesRelativeToEditor {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this._positionRelativeToEditorBrand = undefined;
    }
}
function createEditorPagePosition(editorViewDomNode) {
    const editorPos = getDomNodePagePosition(editorViewDomNode);
    return new EditorPagePosition(editorPos.left, editorPos.top, editorPos.width, editorPos.height);
}
function createCoordinatesRelativeToEditor(editorViewDomNode, editorPagePosition, pos) {
    // The editor's page position is read from the DOM using getBoundingClientRect().
    //
    // getBoundingClientRect() returns the actual dimensions, while offsetWidth and offsetHeight
    // reflect the unscaled size. We can use this difference to detect a transform:scale()
    // and we will apply the transformation in inverse to get mouse coordinates that make sense inside the editor.
    //
    // This could be expanded to cover rotation as well maybe by walking the DOM up from `editorViewDomNode`
    // and computing the effective transformation matrix using getComputedStyle(element).transform.
    //
    const scaleX = editorPagePosition.width / editorViewDomNode.offsetWidth;
    const scaleY = editorPagePosition.height / editorViewDomNode.offsetHeight;
    // Adjust mouse offsets if editor appears to be scaled via transforms
    const relativeX = (pos.x - editorPagePosition.x) / scaleX;
    const relativeY = (pos.y - editorPagePosition.y) / scaleY;
    return new CoordinatesRelativeToEditor(relativeX, relativeY);
}
class EditorMouseEvent extends StandardMouseEvent {
    constructor(e, isFromPointerCapture, editorViewDomNode) {
        super(getWindow(editorViewDomNode), e);
        this._editorMouseEventBrand = undefined;
        this.isFromPointerCapture = isFromPointerCapture;
        this.pos = new PageCoordinates(this.posx, this.posy);
        this.editorPos = createEditorPagePosition(editorViewDomNode);
        this.relativePos = createCoordinatesRelativeToEditor(editorViewDomNode, this.editorPos, this.pos);
    }
}
class EditorMouseEventFactory {
    constructor(editorViewDomNode) {
        this._editorViewDomNode = editorViewDomNode;
    }
    _create(e) {
        return new EditorMouseEvent(e, false, this._editorViewDomNode);
    }
    onContextMenu(target, callback) {
        return addDisposableListener(target, EventType.CONTEXT_MENU, (e) => {
            callback(this._create(e));
        });
    }
    onMouseUp(target, callback) {
        return addDisposableListener(target, EventType.MOUSE_UP, (e) => {
            callback(this._create(e));
        });
    }
    onMouseDown(target, callback) {
        return addDisposableListener(target, EventType.MOUSE_DOWN, (e) => {
            callback(this._create(e));
        });
    }
    onPointerDown(target, callback) {
        return addDisposableListener(target, EventType.POINTER_DOWN, (e) => {
            callback(this._create(e), e.pointerId);
        });
    }
    onMouseLeave(target, callback) {
        return addDisposableListener(target, EventType.MOUSE_LEAVE, (e) => {
            callback(this._create(e));
        });
    }
    onMouseMove(target, callback) {
        return addDisposableListener(target, EventType.MOUSE_MOVE, (e) => callback(this._create(e)));
    }
}
class EditorPointerEventFactory {
    constructor(editorViewDomNode) {
        this._editorViewDomNode = editorViewDomNode;
    }
    _create(e) {
        return new EditorMouseEvent(e, false, this._editorViewDomNode);
    }
    onPointerUp(target, callback) {
        return addDisposableListener(target, 'pointerup', (e) => {
            callback(this._create(e));
        });
    }
    onPointerDown(target, callback) {
        return addDisposableListener(target, EventType.POINTER_DOWN, (e) => {
            callback(this._create(e), e.pointerId);
        });
    }
    onPointerLeave(target, callback) {
        return addDisposableListener(target, EventType.POINTER_LEAVE, (e) => {
            callback(this._create(e));
        });
    }
    onPointerMove(target, callback) {
        return addDisposableListener(target, 'pointermove', (e) => callback(this._create(e)));
    }
}
class GlobalEditorPointerMoveMonitor extends Disposable {
    constructor(editorViewDomNode) {
        super();
        this._editorViewDomNode = editorViewDomNode;
        this._globalPointerMoveMonitor = this._register(new GlobalPointerMoveMonitor());
        this._keydownListener = null;
    }
    startMonitoring(initialElement, pointerId, initialButtons, pointerMoveCallback, onStopCallback) {
        // Add a <<capture>> keydown event listener that will cancel the monitoring
        // if something other than a modifier key is pressed
        this._keydownListener = addStandardDisposableListener(initialElement.ownerDocument, 'keydown', (e) => {
            const chord = e.toKeyCodeChord();
            if (chord.isModifierKey()) {
                // Allow modifier keys
                return;
            }
            this._globalPointerMoveMonitor.stopMonitoring(true, e.browserEvent);
        }, true);
        this._globalPointerMoveMonitor.startMonitoring(initialElement, pointerId, initialButtons, (e) => {
            pointerMoveCallback(new EditorMouseEvent(e, true, this._editorViewDomNode));
        }, (e) => {
            this._keydownListener.dispose();
            onStopCallback(e);
        });
    }
    stopMonitoring() {
        this._globalPointerMoveMonitor.stopMonitoring(true);
    }
}
/**
 * A helper to create dynamic css rules, bound to a class name.
 * Rules are reused.
 * Reference counting and delayed garbage collection ensure that no rules leak.
*/
class DynamicCssRules {
    static { this._idPool = 0; }
    constructor(_editor) {
        this._editor = _editor;
        this._instanceId = ++DynamicCssRules._idPool;
        this._counter = 0;
        this._rules = new DisposableMap();
        // We delay garbage collection so that hanging rules can be reused.
        this._garbageCollectionScheduler = new RunOnceScheduler(() => this.garbageCollect(), 1000);
    }
    dispose() {
        this._rules.dispose();
        this._garbageCollectionScheduler.dispose();
    }
    createClassNameRef(options) {
        const rule = this.getOrCreateRule(options);
        rule.increaseRefCount();
        return {
            className: rule.className,
            dispose: () => {
                rule.decreaseRefCount();
                this._garbageCollectionScheduler.schedule();
            }
        };
    }
    getOrCreateRule(properties) {
        const key = this.computeUniqueKey(properties);
        let existingRule = this._rules.get(key);
        if (!existingRule) {
            const counter = this._counter++;
            existingRule = new RefCountedCssRule(key, `dyn-rule-${this._instanceId}-${counter}`, isInShadowDOM(this._editor.getContainerDomNode())
                ? this._editor.getContainerDomNode()
                : undefined, properties);
            this._rules.set(key, existingRule);
        }
        return existingRule;
    }
    computeUniqueKey(properties) {
        return JSON.stringify(properties);
    }
    garbageCollect() {
        for (const rule of this._rules.values()) {
            if (!rule.hasReferences()) {
                this._rules.deleteAndDispose(rule.key);
            }
        }
    }
}
class RefCountedCssRule {
    constructor(key, className, _containerElement, properties) {
        this.key = key;
        this.className = className;
        this.properties = properties;
        this._referenceCount = 0;
        this._styleElementDisposables = new DisposableStore();
        this._styleElement = createStyleSheet(_containerElement, undefined, this._styleElementDisposables);
        this._styleElement.textContent = this.getCssText(this.className, this.properties);
    }
    getCssText(className, properties) {
        let str = `.${className} {`;
        for (const prop in properties) {
            const value = properties[prop];
            let cssValue;
            if (typeof value === 'object') {
                cssValue = asCssVariable(value.id);
            }
            else {
                cssValue = value;
            }
            const cssPropName = camelToDashes(prop);
            str += `\n\t${cssPropName}: ${cssValue};`;
        }
        str += `\n}`;
        return str;
    }
    dispose() {
        this._styleElementDisposables.dispose();
        this._styleElement = undefined;
    }
    increaseRefCount() {
        this._referenceCount++;
    }
    decreaseRefCount() {
        this._referenceCount--;
    }
    hasReferences() {
        return this._referenceCount > 0;
    }
}
function camelToDashes(str) {
    return str.replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
        .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);
}

export { ClientCoordinates, CoordinatesRelativeToEditor, DynamicCssRules, EditorMouseEvent, EditorMouseEventFactory, EditorPagePosition, EditorPointerEventFactory, GlobalEditorPointerMoveMonitor, PageCoordinates, createCoordinatesRelativeToEditor, createEditorPagePosition };
