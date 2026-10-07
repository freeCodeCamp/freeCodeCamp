'use strict';

var dispatchEvent = require('../event/dispatchEvent.js');
var isElementType = require('../utils/misc/isElementType.js');
require('../utils/dataTransfer/Clipboard.js');
var UI = require('./UI.js');
require('@testing-library/dom');
var interceptor = require('./interceptor.js');

const isPrepared = Symbol('Node prepared with document state workarounds');
function prepareDocument(document) {
    if (document[isPrepared]) {
        return;
    }
    document.addEventListener('focus', (e)=>{
        const el = e.target;
        prepareElement(el);
    }, {
        capture: true,
        passive: true
    });
    // Our test environment defaults to `document.body` as `activeElement`.
    // In other environments this might be `null` when preparing.
    // istanbul ignore else
    if (document.activeElement) {
        prepareElement(document.activeElement);
    }
    document.addEventListener('blur', (e)=>{
        const el = e.target;
        const initialValue = UI.getInitialValue(el);
        if (initialValue !== undefined) {
            if (el.value !== initialValue) {
                dispatchEvent.dispatchDOMEvent(el, 'change');
            }
            UI.clearInitialValue(el);
        }
    }, {
        capture: true,
        passive: true
    });
    document[isPrepared] = isPrepared;
}
function prepareElement(el) {
    if (el[isPrepared]) {
        return;
    }
    if (isElementType.isElementType(el, [
        'input',
        'textarea'
    ])) {
        interceptor.prepareValueInterceptor(el);
        interceptor.prepareSelectionInterceptor(el);
        interceptor.prepareRangeTextInterceptor(el);
    }
    el[isPrepared] = isPrepared;
}

exports.prepareDocument = prepareDocument;
