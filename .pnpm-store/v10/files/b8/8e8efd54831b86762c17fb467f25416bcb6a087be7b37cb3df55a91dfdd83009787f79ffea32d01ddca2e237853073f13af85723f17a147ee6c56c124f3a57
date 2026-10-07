'use strict';

var isElementType = require('../../utils/misc/isElementType.js');
require('../../utils/dataTransfer/Clipboard.js');
var isContentEditable = require('../../utils/edit/isContentEditable.js');
var isEditable = require('../../utils/edit/isEditable.js');
var input = require('../input.js');
var registry = require('./registry.js');

registry.behavior.keypress = (event, target, instance)=>{
    if (event.key === 'Enter') {
        if (isElementType.isElementType(target, 'button') || isElementType.isElementType(target, 'input') && ClickInputOnEnter.includes(target.type) || isElementType.isElementType(target, 'a') && Boolean(target.href)) {
            return ()=>{
                instance.dispatchUIEvent(target, 'click');
            };
        } else if (isElementType.isElementType(target, 'input')) {
            const form = target.form;
            const submit = form === null || form === void 0 ? void 0 : form.querySelector('input[type="submit"], button:not([type]), button[type="submit"]');
            if (submit) {
                return ()=>instance.dispatchUIEvent(submit, 'click');
            } else if (form && SubmitSingleInputOnEnter.includes(target.type) && form.querySelectorAll('input').length === 1) {
                return ()=>instance.dispatchUIEvent(form, 'submit');
            } else {
                return;
            }
        }
    }
    if (isEditable.isEditable(target)) {
        const inputType = event.key === 'Enter' ? isContentEditable.isContentEditable(target) && !instance.system.keyboard.modifiers.Shift ? 'insertParagraph' : 'insertLineBreak' : 'insertText';
        const inputData = event.key === 'Enter' ? '\n' : event.key;
        return ()=>input.input(instance, target, inputData, inputType);
    }
};
const ClickInputOnEnter = [
    'button',
    'color',
    'file',
    'image',
    'reset',
    'submit'
];
const SubmitSingleInputOnEnter = [
    'email',
    'month',
    'password',
    'search',
    'tel',
    'text',
    'url',
    'week'
];
