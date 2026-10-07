'use strict';

var isElementType = require('../../utils/misc/isElementType.js');
require('../../utils/dataTransfer/Clipboard.js');
var getWindow = require('../../utils/misc/getWindow.js');
var isFocusable = require('../../utils/focus/isFocusable.js');
var cloneEvent = require('../../utils/misc/cloneEvent.js');
var focus = require('../focus.js');
var registry = require('./registry.js');

registry.behavior.click = (event, target, instance)=>{
    const context = target.closest('button,input,label,select,textarea');
    const control = context && isElementType.isElementType(context, 'label') && context.control;
    if (control && control !== target) {
        return ()=>{
            if (isFocusable.isFocusable(control)) {
                focus.focusElement(control);
                instance.dispatchEvent(control, cloneEvent.cloneEvent(event));
            }
        };
    } else if (isElementType.isElementType(target, 'input', {
        type: 'file'
    })) {
        return ()=>{
            // blur fires when the file selector pops up
            focus.blurElement(target);
            target.dispatchEvent(new (getWindow.getWindow(target)).Event('fileDialog'));
            // focus fires after the file selector has been closed
            focus.focusElement(target);
        };
    }
};
