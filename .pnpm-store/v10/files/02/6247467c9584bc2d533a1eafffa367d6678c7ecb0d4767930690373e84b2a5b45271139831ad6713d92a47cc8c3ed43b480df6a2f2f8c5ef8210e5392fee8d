'use strict';

var isElementType = require('./isElementType.js');

// This should probably just rely on the :disabled pseudo-class, but JSDOM doesn't implement it properly.
function isDisabled(element) {
    for(let el = element; el; el = el.parentElement){
        if (isElementType.isElementType(el, [
            'button',
            'input',
            'select',
            'textarea',
            'optgroup',
            'option'
        ])) {
            if (el.hasAttribute('disabled')) {
                return true;
            }
        } else if (isElementType.isElementType(el, 'fieldset')) {
            var _el_querySelector;
            if (el.hasAttribute('disabled') && !((_el_querySelector = el.querySelector(':scope > legend')) === null || _el_querySelector === void 0 ? void 0 : _el_querySelector.contains(element))) {
                return true;
            }
        } else if (el.tagName.includes('-')) {
            if (el.constructor.formAssociated && el.hasAttribute('disabled')) {
                return true;
            }
        }
    }
    return false;
}

exports.isDisabled = isDisabled;
