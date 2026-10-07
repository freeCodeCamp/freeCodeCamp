'use strict';

var isClickableInput = require('../../utils/click/isClickableInput.js');
require('../../utils/dataTransfer/Clipboard.js');
var registry = require('./registry.js');

registry.behavior.keyup = (event, target, instance)=>{
    var _keyupBehavior_event_key;
    return (_keyupBehavior_event_key = keyupBehavior[event.key]) === null || _keyupBehavior_event_key === void 0 ? void 0 : _keyupBehavior_event_key.call(keyupBehavior, event, target, instance);
};
const keyupBehavior = {
    ' ': (event, target, instance)=>{
        if (isClickableInput.isClickableInput(target)) {
            return ()=>instance.dispatchUIEvent(target, 'click');
        }
    }
};
