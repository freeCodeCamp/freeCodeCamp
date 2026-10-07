import { setUISelection, getUIValue } from '../../document/UI.js';
import { getValueOrTextContent } from '../../document/getValueOrTextContent.js';
import { isElementType } from '../../utils/misc/isElementType.js';
import '../../utils/dataTransfer/Clipboard.js';
import { isContentEditable } from '../../utils/edit/isContentEditable.js';
import { isEditable } from '../../utils/edit/isEditable.js';
import { getActiveElementOrBody } from '../../utils/focus/getActiveElement.js';
import { getTabDestination } from '../../utils/focus/getTabDestination.js';
import { hasOwnSelection } from '../../utils/focus/selection.js';
import { focusElement } from '../focus.js';
import { input } from '../input.js';
import { moveSelection } from '../selection/moveSelection.js';
import { selectAll } from '../selection/selectAll.js';
import { setSelectionRange } from '../selection/setSelectionRange.js';
import { walkRadio } from '../radio.js';
import { behavior } from './registry.js';

behavior.keydown = (event, target, instance)=>{
    var _ref;
    var _keydownBehavior_event_key;
    return (_ref = (_keydownBehavior_event_key = keydownBehavior[event.key]) === null || _keydownBehavior_event_key === void 0 ? void 0 : _keydownBehavior_event_key.call(keydownBehavior, event, target, instance)) !== null && _ref !== void 0 ? _ref : combinationBehavior(event, target, instance);
};
const keydownBehavior = {
    ArrowDown: (event, target, instance)=>{
        /* istanbul ignore else */ if (isElementType(target, 'input', {
            type: 'radio'
        })) {
            return ()=>walkRadio(instance, target, 1);
        }
    },
    ArrowLeft: (event, target, instance)=>{
        if (isElementType(target, 'input', {
            type: 'radio'
        })) {
            return ()=>walkRadio(instance, target, -1);
        }
        return ()=>moveSelection(target, -1);
    },
    ArrowRight: (event, target, instance)=>{
        if (isElementType(target, 'input', {
            type: 'radio'
        })) {
            return ()=>walkRadio(instance, target, 1);
        }
        return ()=>moveSelection(target, 1);
    },
    ArrowUp: (event, target, instance)=>{
        /* istanbul ignore else */ if (isElementType(target, 'input', {
            type: 'radio'
        })) {
            return ()=>walkRadio(instance, target, -1);
        }
    },
    Backspace: (event, target, instance)=>{
        if (isEditable(target)) {
            return ()=>{
                input(instance, target, '', 'deleteContentBackward');
            };
        }
    },
    Delete: (event, target, instance)=>{
        if (isEditable(target)) {
            return ()=>{
                input(instance, target, '', 'deleteContentForward');
            };
        }
    },
    End: (event, target)=>{
        if (isElementType(target, [
            'input',
            'textarea'
        ]) || isContentEditable(target)) {
            return ()=>{
                var _ref;
                var _getValueOrTextContent;
                const newPos = (_ref = (_getValueOrTextContent = getValueOrTextContent(target)) === null || _getValueOrTextContent === void 0 ? void 0 : _getValueOrTextContent.length) !== null && _ref !== void 0 ? _ref : /* istanbul ignore next */ 0;
                setSelectionRange(target, newPos, newPos);
            };
        }
    },
    Home: (event, target)=>{
        if (isElementType(target, [
            'input',
            'textarea'
        ]) || isContentEditable(target)) {
            return ()=>{
                setSelectionRange(target, 0, 0);
            };
        }
    },
    PageDown: (event, target)=>{
        if (isElementType(target, [
            'input'
        ])) {
            return ()=>{
                const newPos = getUIValue(target).length;
                setSelectionRange(target, newPos, newPos);
            };
        }
    },
    PageUp: (event, target)=>{
        if (isElementType(target, [
            'input'
        ])) {
            return ()=>{
                setSelectionRange(target, 0, 0);
            };
        }
    },
    Tab: (event, target, instance)=>{
        return ()=>{
            const dest = getTabDestination(// get target here because target would be stale, it's the element that keydown happened on, but
            // focus may have been moved to another element so that browser tab behaviour picks up from there
            getActiveElementOrBody(instance.config.document), instance.system.keyboard.modifiers.Shift);
            focusElement(dest);
            if (hasOwnSelection(dest)) {
                setUISelection(dest, {
                    anchorOffset: 0,
                    focusOffset: dest.value.length
                });
            }
        };
    }
};
const combinationBehavior = (event, target, instance)=>{
    if (event.code === 'KeyA' && instance.system.keyboard.modifiers.Control) {
        return ()=>selectAll(target);
    }
};
