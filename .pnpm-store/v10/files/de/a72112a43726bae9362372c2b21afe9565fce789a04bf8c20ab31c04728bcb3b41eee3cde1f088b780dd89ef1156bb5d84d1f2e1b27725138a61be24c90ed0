import '../../event/behavior/click.js';
import '../../event/behavior/cut.js';
import '../../event/behavior/keydown.js';
import '../../event/behavior/keypress.js';
import '../../event/behavior/keyup.js';
import '../../event/behavior/paste.js';
import '@testing-library/dom';
import '../../utils/dataTransfer/Clipboard.js';
import { isDisabled } from '../../utils/misc/isDisabled.js';
import { getTreeDiff } from '../../utils/misc/getTreeDiff.js';
import { focusElement } from '../../event/focus.js';
import { setSelectionPerMouseDown } from '../../event/selection/setSelectionPerMouse.js';
import { modifySelectionPerMouseMove } from '../../event/selection/modifySelectionPerMouse.js';
import { getMouseEventButton, Buttons } from './buttons.js';
import { isDifferentPointerPosition } from './shared.js';

function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
/**
 * This object is the single "virtual" mouse that might be controlled by multiple different pointer devices.
 */ class Mouse {
    move(instance, position, /** Whether `preventDefault()` has been called on the `pointerdown` event */ isPrevented) {
        const prevPosition = this.position;
        const prevTarget = this.getTarget(instance);
        this.position = position;
        if (!isDifferentPointerPosition(prevPosition, position)) {
            return;
        }
        const nextTarget = this.getTarget(instance);
        const init = this.getEventInit('mousemove');
        const [leave, enter] = getTreeDiff(prevTarget, nextTarget);
        return {
            leave: ()=>{
                if (prevTarget !== nextTarget) {
                    instance.dispatchUIEvent(prevTarget, 'mouseout', init);
                    leave.forEach((el)=>instance.dispatchUIEvent(el, 'mouseleave', init));
                }
            },
            enter: ()=>{
                if (prevTarget !== nextTarget) {
                    instance.dispatchUIEvent(nextTarget, 'mouseover', init);
                    enter.forEach((el)=>instance.dispatchUIEvent(el, 'mouseenter', init));
                }
            },
            move: ()=>{
                if (isPrevented) {
                    return;
                }
                instance.dispatchUIEvent(nextTarget, 'mousemove', init);
                this.modifySelecting(instance);
            }
        };
    }
    down(instance, keyDef, /** Whether `preventDefault()` has been called on the `pointerdown` event */ isPrevented) {
        const button = this.buttons.down(keyDef);
        if (button === undefined) {
            return;
        }
        const target = this.getTarget(instance);
        this.buttonDownTarget[button] = target;
        const init = this.getEventInit('mousedown', keyDef.button);
        const disabled = isDisabled(target);
        if (!isPrevented && (disabled || instance.dispatchUIEvent(target, 'mousedown', init))) {
            this.startSelecting(instance, init.detail);
            focusElement(target);
        }
        if (!disabled && getMouseEventButton(keyDef.button) === 2) {
            instance.dispatchUIEvent(target, 'contextmenu', this.getEventInit('contextmenu', keyDef.button));
        }
    }
    up(instance, keyDef, /** Whether `preventDefault()` has been called on the `pointerdown` event */ isPrevented) {
        const button = this.buttons.up(keyDef);
        if (button === undefined) {
            return;
        }
        const target = this.getTarget(instance);
        if (!isDisabled(target)) {
            if (!isPrevented) {
                const mouseUpInit = this.getEventInit('mouseup', keyDef.button);
                instance.dispatchUIEvent(target, 'mouseup', mouseUpInit);
                this.endSelecting();
            }
            const clickTarget = getTreeDiff(this.buttonDownTarget[button], target)[2][0];
            if (clickTarget) {
                const init = this.getEventInit('click', keyDef.button);
                if (init.detail) {
                    instance.dispatchUIEvent(clickTarget, init.button === 0 ? 'click' : 'auxclick', init);
                    if (init.button === 0 && init.detail === 2) {
                        instance.dispatchUIEvent(clickTarget, 'dblclick', {
                            ...this.getEventInit('dblclick', keyDef.button),
                            detail: init.detail
                        });
                    }
                }
            }
        }
    }
    resetClickCount() {
        this.clickCount.reset();
    }
    getEventInit(type, button) {
        const init = {
            ...this.position.coords
        };
        init.button = getMouseEventButton(button);
        init.buttons = this.buttons.getButtons();
        if (type === 'mousedown') {
            init.detail = this.clickCount.getOnDown(init.button);
        } else if (type === 'mouseup') {
            init.detail = this.clickCount.getOnUp(init.button);
        } else if (type === 'click' || type === 'auxclick') {
            init.detail = this.clickCount.incOnClick(init.button);
        }
        return init;
    }
    getTarget(instance) {
        var _this_position_target;
        return (_this_position_target = this.position.target) !== null && _this_position_target !== void 0 ? _this_position_target : instance.config.document.body;
    }
    startSelecting(instance, clickCount) {
        var _this_position_caret, _this_position_caret1;
        // TODO: support extending range (shift)
        this.selecting = setSelectionPerMouseDown({
            document: instance.config.document,
            target: this.getTarget(instance),
            node: (_this_position_caret = this.position.caret) === null || _this_position_caret === void 0 ? void 0 : _this_position_caret.node,
            offset: (_this_position_caret1 = this.position.caret) === null || _this_position_caret1 === void 0 ? void 0 : _this_position_caret1.offset,
            clickCount
        });
    }
    modifySelecting(instance) {
        var _this_position_caret, _this_position_caret1;
        if (!this.selecting) {
            return;
        }
        modifySelectionPerMouseMove(this.selecting, {
            document: instance.config.document,
            target: this.getTarget(instance),
            node: (_this_position_caret = this.position.caret) === null || _this_position_caret === void 0 ? void 0 : _this_position_caret.node,
            offset: (_this_position_caret1 = this.position.caret) === null || _this_position_caret1 === void 0 ? void 0 : _this_position_caret1.offset
        });
    }
    endSelecting() {
        this.selecting = undefined;
    }
    constructor(){
        _define_property(this, "position", {});
        _define_property(this, "buttons", new Buttons());
        _define_property(this, "selecting", void 0);
        _define_property(this, "buttonDownTarget", {});
        // According to spec the `detail` on click events should be the number
        // of *consecutive* clicks with a specific button.
        // On `mousedown` and `mouseup` it should be this number increased by one.
        // But the browsers don't implement it this way.
        // If another button is pressed,
        //   in Webkit: the `mouseup` on the previously pressed button has `detail: 0` and no `click`/`auxclick`.
        //   in Gecko: the `mouseup` and click events have the same detail as the `mousedown`.
        // If there is a delay while a button is pressed,
        // the `mouseup` and `click` are normal, but a following `mousedown` starts a new click count.
        // We'll follow the minimal implementation of Webkit.
        _define_property(this, "clickCount", new class {
            incOnClick(button) {
                const current = this.down[button] === undefined ? undefined : Number(this.down[button]) + 1;
                this.count = this.count[button] === undefined ? {} : {
                    [button]: Number(this.count[button]) + 1
                };
                return current;
            }
            getOnDown(button) {
                var _this_count_button, _this_count_button1;
                this.down = {
                    [button]: (_this_count_button = this.count[button]) !== null && _this_count_button !== void 0 ? _this_count_button : 0
                };
                this.count = {
                    [button]: (_this_count_button1 = this.count[button]) !== null && _this_count_button1 !== void 0 ? _this_count_button1 : 0
                };
                return Number(this.count[button]) + 1;
            }
            getOnUp(button) {
                return this.down[button] === undefined ? undefined : Number(this.down[button]) + 1;
            }
            reset() {
                this.count = {};
            }
            constructor(){
                _define_property(this, "down", {});
                _define_property(this, "count", {});
            }
        }());
    }
}

export { Mouse };
