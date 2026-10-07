'use strict';

var UI = require('../../document/UI.js');
var getValueOrTextContent = require('../../document/getValueOrTextContent.js');
var isElementType = require('../../utils/misc/isElementType.js');
require('../../utils/dataTransfer/Clipboard.js');
var isContentEditable = require('../../utils/edit/isContentEditable.js');
var isEditable = require('../../utils/edit/isEditable.js');
var getActiveElement = require('../../utils/focus/getActiveElement.js');
var getTabDestination = require('../../utils/focus/getTabDestination.js');
var selection = require('../../utils/focus/selection.js');
var focus = require('../focus.js');
var input = require('../input.js');
var moveSelection = require('../selection/moveSelection.js');
var selectAll = require('../selection/selectAll.js');
var setSelectionRange = require('../selection/setSelectionRange.js');
var radio = require('../radio.js');
var registry = require('./registry.js');

registry.behavior.keydown = (event, target, instance)=>{
    var _ref;
    var _keydownBehavior_event_key;
    return (_ref = (_keydownBehavior_event_key = keydownBehavior[event.key]) === null || _keydownBehavior_event_key === void 0 ? void 0 : _keydownBehavior_event_key.call(keydownBehavior, event, target, instance)) !== null && _ref !== void 0 ? _ref : combinationBehavior(event, target, instance);
};
const keydownBehavior = {
    ArrowDown: (event, target, instance)=>{
        /* istanbul ignore else */ if (isElementType.isElementType(target, 'input', {
            type: 'radio'
        })) {
            return ()=>radio.walkRadio(instance, target, 1);
        }
    },
    ArrowLeft: (event, target, instance)=>{
        if (isElementType.isElementType(target, 'input', {
            type: 'radio'
        })) {
            return ()=>radio.walkRadio(instance, target, -1);
        }
        return ()=>moveSelection.moveSelection(target, -1);
    },
    ArrowRight: (event, target, instance)=>{
        if (isElementType.isElementType(target, 'input', {
            type: 'radio'
        })) {
            return ()=>radio.walkRadio(instance, target, 1);
        }
        return ()=>moveSelection.moveSelection(target, 1);
    },
    ArrowUp: (event, target, instance)=>{
        /* istanbul ignore else */ if (isElementType.isElementType(target, 'input', {
            type: 'radio'
        })) {
            return ()=>radio.walkRadio(instance, target, -1);
        }
    },
    Backspace: (event, target, instance)=>{
        if (isEditable.isEditable(target)) {
            return ()=>{
                input.input(instance, target, '', 'deleteContentBackward');
            };
        }
    },
    Delete: (event, target, instance)=>{
        if (isEditable.isEditable(target)) {
            return ()=>{
                input.input(instance, target, '', 'deleteContentForward');
            };
        }
    },
    End: (event, target)=>{
        if (isElementType.isElementType(target, [
            'input',
            'textarea'
        ]) || isContentEditable.isContentEditable(target)) {
            return ()=>{
                var _ref;
                var _getValueOrTextContent;
                const newPos = (_ref = (_getValueOrTextContent = getValueOrTextContent.getValueOrTextContent(target)) === null || _getValueOrTextContent === void 0 ? void 0 : _getValueOrTextContent.length) !== null && _ref !== void 0 ? _ref : /* istanbul ignore next */ 0;
                setSelectionRange.setSelectionRange(target, newPos, newPos);
            };
        }
    },
    Home: (event, target)=>{
        if (isElementType.isElementType(target, [
            'input',
            'textarea'
        ]) || isContentEditable.isContentEditable(target)) {
            return ()=>{
                setSelectionRange.setSelectionRange(target, 0, 0);
            };
        }
    },
    PageDown: (event, target)=>{
        if (isElementType.isElementType(target, [
            'input'
        ])) {
            return ()=>{
                const newPos = UI.getUIValue(target).length;
                setSelectionRange.setSelectionRange(target, newPos, newPos);
            };
        }
    },
    PageUp: (event, target)=>{
        if (isElementType.isElementType(target, [
            'input'
        ])) {
            return ()=>{
                setSelectionRange.setSelectionRange(target, 0, 0);
            };
        }
    },
    Tab: (event, target, instance)=>{
        return ()=>{
            const dest = getTabDestination.getTabDestination(// get target here because target would be stale, it's the element that keydown happened on, but
            // focus may have been moved to another element so that browser tab behaviour picks up from there
            getActiveElement.getActiveElementOrBody(instance.config.document), instance.system.keyboard.modifiers.Shift);
            focus.focusElement(dest);
            if (selection.hasOwnSelection(dest)) {
                UI.setUISelection(dest, {
                    anchorOffset: 0,
                    focusOffset: dest.value.length
                });
            }
        };
    }
};
const combinationBehavior = (event, target, instance)=>{
    if (event.code === 'KeyA' && instance.system.keyboard.modifiers.Control) {
        return ()=>selectAll.selectAll(target);
    }
};
