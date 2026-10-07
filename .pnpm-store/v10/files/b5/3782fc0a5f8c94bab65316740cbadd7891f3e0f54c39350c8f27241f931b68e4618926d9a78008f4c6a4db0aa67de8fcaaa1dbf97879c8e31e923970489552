import '../../utils/dataTransfer/Clipboard.js';
import { getTreeDiff } from '../../utils/misc/getTreeDiff.js';
import { assertPointerEvents, hasPointerEvents } from '../../utils/pointer/cssPointerEvents.js';
import { isDifferentPointerPosition } from './shared.js';
import { getMouseEventButton } from './buttons.js';

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
class Pointer {
    init(instance) {
        const target = this.getTarget(instance);
        const [, enter] = getTreeDiff(null, target);
        const init = this.getEventInit();
        assertPointerEvents(instance, target);
        instance.dispatchUIEvent(target, 'pointerover', init);
        enter.forEach((el)=>instance.dispatchUIEvent(el, 'pointerenter', init));
        return this;
    }
    move(instance, position) {
        const prevPosition = this.position;
        const prevTarget = this.getTarget(instance);
        this.position = position;
        if (!isDifferentPointerPosition(prevPosition, position)) {
            return;
        }
        const nextTarget = this.getTarget(instance);
        const init = this.getEventInit(-1);
        const [leave, enter] = getTreeDiff(prevTarget, nextTarget);
        return {
            leave: ()=>{
                if (hasPointerEvents(instance, prevTarget)) {
                    if (prevTarget !== nextTarget) {
                        instance.dispatchUIEvent(prevTarget, 'pointerout', init);
                        leave.forEach((el)=>instance.dispatchUIEvent(el, 'pointerleave', init));
                    }
                }
            },
            enter: ()=>{
                assertPointerEvents(instance, nextTarget);
                if (prevTarget !== nextTarget) {
                    instance.dispatchUIEvent(nextTarget, 'pointerover', init);
                    enter.forEach((el)=>instance.dispatchUIEvent(el, 'pointerenter', init));
                }
            },
            move: ()=>{
                instance.dispatchUIEvent(nextTarget, 'pointermove', init);
            }
        };
    }
    down(instance, button = 0) {
        if (this.isDown) {
            return;
        }
        const target = this.getTarget(instance);
        assertPointerEvents(instance, target);
        this.isDown = true;
        this.isPrevented = !instance.dispatchUIEvent(target, 'pointerdown', this.getEventInit(button));
    }
    up(instance, button = 0) {
        if (!this.isDown) {
            return;
        }
        const target = this.getTarget(instance);
        assertPointerEvents(instance, target);
        this.isPrevented = false;
        this.isDown = false;
        instance.dispatchUIEvent(target, 'pointerup', this.getEventInit(button));
    }
    release(instance) {
        const target = this.getTarget(instance);
        const [leave] = getTreeDiff(target, null);
        const init = this.getEventInit();
        // Currently there is no PointerEventsCheckLevel that would
        // make this check not use the *asserted* cached value from `up`.
        /* istanbul ignore else */ if (hasPointerEvents(instance, target)) {
            instance.dispatchUIEvent(target, 'pointerout', init);
            leave.forEach((el)=>instance.dispatchUIEvent(el, 'pointerleave', init));
        }
        this.isCancelled = true;
    }
    getTarget(instance) {
        var _this_position_target;
        return (_this_position_target = this.position.target) !== null && _this_position_target !== void 0 ? _this_position_target : instance.config.document.body;
    }
    getEventInit(/**
     * The `button` that caused the event.
     *
     * This should be `-1` if the event is not caused by a button or touch/pen contact,
     * e.g. a moving pointer.
     */ button) {
        return {
            ...this.position.coords,
            pointerId: this.pointerId,
            pointerType: this.pointerType,
            isPrimary: this.isPrimary,
            button: getMouseEventButton(button),
            buttons: this.buttons.getButtons()
        };
    }
    constructor({ pointerId, pointerType, isPrimary }, buttons){
        _define_property(this, "pointerId", void 0);
        _define_property(this, "pointerType", void 0);
        _define_property(this, "isPrimary", void 0);
        _define_property(this, "buttons", void 0);
        _define_property(this, "isMultitouch", false);
        _define_property(this, "isCancelled", false);
        _define_property(this, "isDown", false);
        _define_property(this, "isPrevented", false);
        _define_property(this, "position", {});
        this.pointerId = pointerId;
        this.pointerType = pointerType;
        this.isPrimary = isPrimary;
        this.isMultitouch = !isPrimary;
        this.buttons = buttons;
    }
}

export { Pointer };
