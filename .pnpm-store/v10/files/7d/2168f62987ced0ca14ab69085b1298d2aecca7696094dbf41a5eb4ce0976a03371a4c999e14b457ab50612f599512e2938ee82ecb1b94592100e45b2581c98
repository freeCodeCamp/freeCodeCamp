'use strict';

require('../utils/dataTransfer/Clipboard.js');
var isDisabled = require('../utils/misc/isDisabled.js');
var getWindow = require('../utils/misc/getWindow.js');
var focus = require('./focus.js');

function walkRadio(instance, el, direction) {
    const window = getWindow.getWindow(el);
    const group = Array.from(el.ownerDocument.querySelectorAll(el.name ? `input[type="radio"][name="${window.CSS.escape(el.name)}"]` : `input[type="radio"][name=""], input[type="radio"]:not([name])`));
    for(let i = group.findIndex((e)=>e === el) + direction;; i += direction){
        if (!group[i]) {
            i = direction > 0 ? 0 : group.length - 1;
        }
        if (group[i] === el) {
            return;
        }
        if (isDisabled.isDisabled(group[i])) {
            continue;
        }
        focus.focusElement(group[i]);
        instance.dispatchUIEvent(group[i], 'click');
        return;
    }
}

exports.walkRadio = walkRadio;
