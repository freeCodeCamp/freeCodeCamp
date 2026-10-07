import './behavior/click.js';
import './behavior/cut.js';
import './behavior/keydown.js';
import './behavior/keypress.js';
import './behavior/keyup.js';
import './behavior/paste.js';
import { behavior } from './behavior/registry.js';
import { wrapEvent } from './wrapEvent.js';
import { isMouseEvent, isKeyboardEvent } from './eventMap.js';
import { createEvent } from './createEvent.js';

function dispatchUIEvent(target, type, init, preventDefault = false) {
    if (isMouseEvent(type) || isKeyboardEvent(type)) {
        init = {
            ...init,
            ...this.system.getUIEventModifiers()
        };
    }
    const event = createEvent(type, target, init);
    return dispatchEvent.call(this, target, event, preventDefault);
}
function dispatchEvent(target, event, preventDefault = false) {
    var _behavior_type;
    const type = event.type;
    const behaviorImplementation = preventDefault ? ()=>{} : (_behavior_type = behavior[type]) === null || _behavior_type === void 0 ? void 0 : _behavior_type.call(behavior, event, target, this);
    if (behaviorImplementation) {
        event.preventDefault();
        let defaultPrevented = false;
        Object.defineProperty(event, 'defaultPrevented', {
            get: ()=>defaultPrevented
        });
        Object.defineProperty(event, 'preventDefault', {
            value: ()=>{
                defaultPrevented = event.cancelable;
            }
        });
        wrapEvent(()=>target.dispatchEvent(event));
        if (!defaultPrevented) {
            behaviorImplementation();
        }
        return !defaultPrevented;
    }
    return wrapEvent(()=>target.dispatchEvent(event));
}
function dispatchDOMEvent(target, type, init) {
    const event = createEvent(type, target, init);
    wrapEvent(()=>target.dispatchEvent(event));
}

export { dispatchDOMEvent, dispatchEvent, dispatchUIEvent };
