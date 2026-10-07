import { isClickableInput } from '../../utils/click/isClickableInput.js';
import '../../utils/dataTransfer/Clipboard.js';
import { behavior } from './registry.js';

behavior.keyup = (event, target, instance)=>{
    var _keyupBehavior_event_key;
    return (_keyupBehavior_event_key = keyupBehavior[event.key]) === null || _keyupBehavior_event_key === void 0 ? void 0 : _keyupBehavior_event_key.call(keyupBehavior, event, target, instance);
};
const keyupBehavior = {
    ' ': (event, target, instance)=>{
        if (isClickableInput(target)) {
            return ()=>instance.dispatchUIEvent(target, 'click');
        }
    }
};
