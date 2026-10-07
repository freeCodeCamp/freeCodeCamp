import { isElementType } from '../../utils/misc/isElementType.js';
import '../../utils/dataTransfer/Clipboard.js';
import { getWindow } from '../../utils/misc/getWindow.js';
import { isFocusable } from '../../utils/focus/isFocusable.js';
import { cloneEvent } from '../../utils/misc/cloneEvent.js';
import { focusElement, blurElement } from '../focus.js';
import { behavior } from './registry.js';

behavior.click = (event, target, instance)=>{
    const context = target.closest('button,input,label,select,textarea');
    const control = context && isElementType(context, 'label') && context.control;
    if (control && control !== target) {
        return ()=>{
            if (isFocusable(control)) {
                focusElement(control);
                instance.dispatchEvent(control, cloneEvent(event));
            }
        };
    } else if (isElementType(target, 'input', {
        type: 'file'
    })) {
        return ()=>{
            // blur fires when the file selector pops up
            blurElement(target);
            target.dispatchEvent(new (getWindow(target)).Event('fileDialog'));
            // focus fires after the file selector has been closed
            focusElement(target);
        };
    }
};
