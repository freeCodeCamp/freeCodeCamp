import '../utils/dataTransfer/Clipboard.js';
import { isDisabled } from '../utils/misc/isDisabled.js';
import { getWindow } from '../utils/misc/getWindow.js';
import { focusElement } from './focus.js';

function walkRadio(instance, el, direction) {
    const window = getWindow(el);
    const group = Array.from(el.ownerDocument.querySelectorAll(el.name ? `input[type="radio"][name="${window.CSS.escape(el.name)}"]` : `input[type="radio"][name=""], input[type="radio"]:not([name])`));
    for(let i = group.findIndex((e)=>e === el) + direction;; i += direction){
        if (!group[i]) {
            i = direction > 0 ? 0 : group.length - 1;
        }
        if (group[i] === el) {
            return;
        }
        if (isDisabled(group[i])) {
            continue;
        }
        focusElement(group[i]);
        instance.dispatchUIEvent(group[i], 'click');
        return;
    }
}

export { walkRadio };
