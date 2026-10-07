'use strict';

require('./behavior/click.js');
require('./behavior/cut.js');
require('./behavior/keydown.js');
require('./behavior/keypress.js');
require('./behavior/keyup.js');
require('./behavior/paste.js');
var registry = require('./behavior/registry.js');
var wrapEvent = require('./wrapEvent.js');
var eventMap = require('./eventMap.js');
var createEvent = require('./createEvent.js');

function dispatchUIEvent(target, type, init, preventDefault = false) {
    if (eventMap.isMouseEvent(type) || eventMap.isKeyboardEvent(type)) {
        init = {
            ...init,
            ...this.system.getUIEventModifiers()
        };
    }
    const event = createEvent.createEvent(type, target, init);
    return dispatchEvent.call(this, target, event, preventDefault);
}
function dispatchEvent(target, event, preventDefault = false) {
    var _behavior_type;
    const type = event.type;
    const behaviorImplementation = preventDefault ? ()=>{} : (_behavior_type = registry.behavior[type]) === null || _behavior_type === void 0 ? void 0 : _behavior_type.call(registry.behavior, event, target, this);
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
        wrapEvent.wrapEvent(()=>target.dispatchEvent(event));
        if (!defaultPrevented) {
            behaviorImplementation();
        }
        return !defaultPrevented;
    }
    return wrapEvent.wrapEvent(()=>target.dispatchEvent(event));
}
function dispatchDOMEvent(target, type, init) {
    const event = createEvent.createEvent(type, target, init);
    wrapEvent.wrapEvent(()=>target.dispatchEvent(event));
}

exports.dispatchDOMEvent = dispatchDOMEvent;
exports.dispatchEvent = dispatchEvent;
exports.dispatchUIEvent = dispatchUIEvent;
