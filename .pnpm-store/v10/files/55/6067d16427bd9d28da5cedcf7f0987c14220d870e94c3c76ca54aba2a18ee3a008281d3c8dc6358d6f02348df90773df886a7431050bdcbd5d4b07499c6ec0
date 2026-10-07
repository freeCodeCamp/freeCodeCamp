import { isElementType } from '../../utils/misc/isElementType.js';
import '../../utils/dataTransfer/Clipboard.js';
import { isContentEditable } from '../../utils/edit/isContentEditable.js';
import { isEditable } from '../../utils/edit/isEditable.js';
import { input } from '../input.js';
import { behavior } from './registry.js';

behavior.keypress = (event, target, instance)=>{
    if (event.key === 'Enter') {
        if (isElementType(target, 'button') || isElementType(target, 'input') && ClickInputOnEnter.includes(target.type) || isElementType(target, 'a') && Boolean(target.href)) {
            return ()=>{
                instance.dispatchUIEvent(target, 'click');
            };
        } else if (isElementType(target, 'input')) {
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
    if (isEditable(target)) {
        const inputType = event.key === 'Enter' ? isContentEditable(target) && !instance.system.keyboard.modifiers.Shift ? 'insertParagraph' : 'insertLineBreak' : 'insertText';
        const inputData = event.key === 'Enter' ? '\n' : event.key;
        return ()=>input(instance, target, inputData, inputType);
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
