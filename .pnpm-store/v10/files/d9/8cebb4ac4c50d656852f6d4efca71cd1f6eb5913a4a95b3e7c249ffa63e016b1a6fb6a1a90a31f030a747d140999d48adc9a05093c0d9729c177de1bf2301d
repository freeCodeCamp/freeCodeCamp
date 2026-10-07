'use strict';

var getWindow = require('./getWindow.js');

function isVisible(element) {
    const window = getWindow.getWindow(element);
    for(let el = element; el === null || el === void 0 ? void 0 : el.ownerDocument; el = el.parentElement){
        const { display, visibility } = window.getComputedStyle(el);
        if (display === 'none') {
            return false;
        }
        if (visibility === 'hidden') {
            return false;
        }
    }
    return true;
}

exports.isVisible = isVisible;
