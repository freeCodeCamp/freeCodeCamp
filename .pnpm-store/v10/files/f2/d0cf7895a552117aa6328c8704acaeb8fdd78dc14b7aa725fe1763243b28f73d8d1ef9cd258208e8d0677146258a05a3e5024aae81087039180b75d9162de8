'use strict';

var isElementType = require('../utils/misc/isElementType.js');
require('../utils/dataTransfer/Clipboard.js');
var trackValue = require('./trackValue.js');
var UI = require('./UI.js');

const Interceptor = Symbol('Interceptor for programmatical calls');
function prepareInterceptor(element, propName, interceptorImpl) {
    const prototypeDescriptor = Object.getOwnPropertyDescriptor(element.constructor.prototype, propName);
    const objectDescriptor = Object.getOwnPropertyDescriptor(element, propName);
    const target = (prototypeDescriptor === null || prototypeDescriptor === void 0 ? void 0 : prototypeDescriptor.set) ? 'set' : 'value';
    /* istanbul ignore if */ if (typeof (prototypeDescriptor === null || prototypeDescriptor === void 0 ? void 0 : prototypeDescriptor[target]) !== 'function' || prototypeDescriptor[target][Interceptor]) {
        throw new Error(`Element ${element.tagName} does not implement "${String(propName)}".`);
    }
    function intercept(...args) {
        const { applyNative = false, realArgs, then } = interceptorImpl.call(this, ...args);
        const realFunc = (!applyNative && objectDescriptor || prototypeDescriptor)[target];
        if (target === 'set') {
            realFunc.call(this, realArgs);
        } else {
            realFunc.call(this, ...realArgs);
        }
        then === null || then === void 0 ? void 0 : then();
    }
    intercept[Interceptor] = Interceptor;
    Object.defineProperty(element, propName, {
        ...objectDescriptor !== null && objectDescriptor !== void 0 ? objectDescriptor : prototypeDescriptor,
        [target]: intercept
    });
}
function prepareValueInterceptor(element) {
    prepareInterceptor(element, 'value', function interceptorImpl(v) {
        const isUI = UI.isUIValue(v);
        if (isUI) {
            trackValue.startTrackValue(this);
        }
        return {
            applyNative: !!isUI,
            realArgs: sanitizeValue(this, v),
            then: isUI ? undefined : ()=>trackValue.trackOrSetValue(this, String(v))
        };
    });
}
function sanitizeValue(element, v) {
    // Workaround for JSDOM
    if (isElementType.isElementType(element, 'input', {
        type: 'number'
    }) && String(v) !== '' && !Number.isNaN(Number(v))) {
        // Setting value to "1." results in `null` in JSDOM
        return String(Number(v));
    }
    return String(v);
}
function prepareSelectionInterceptor(element) {
    prepareInterceptor(element, 'setSelectionRange', function interceptorImpl(start, ...others) {
        const isUI = UI.isUISelectionStart(start);
        return {
            applyNative: !!isUI,
            realArgs: [
                Number(start),
                ...others
            ],
            then: ()=>isUI ? undefined : UI.setUISelectionClean(element)
        };
    });
    prepareInterceptor(element, 'selectionStart', function interceptorImpl(v) {
        return {
            realArgs: v,
            then: ()=>UI.setUISelectionClean(element)
        };
    });
    prepareInterceptor(element, 'selectionEnd', function interceptorImpl(v) {
        return {
            realArgs: v,
            then: ()=>UI.setUISelectionClean(element)
        };
    });
    prepareInterceptor(element, 'select', function interceptorImpl() {
        return {
            realArgs: [],
            then: ()=>UI.setUISelectionRaw(element, {
                    anchorOffset: 0,
                    focusOffset: UI.getUIValue(element).length
                })
        };
    });
}
function prepareRangeTextInterceptor(element) {
    prepareInterceptor(element, 'setRangeText', function interceptorImpl(...realArgs) {
        return {
            realArgs,
            then: ()=>{
                UI.setUIValueClean(element);
                UI.setUISelectionClean(element);
            }
        };
    });
}

exports.prepareInterceptor = prepareInterceptor;
exports.prepareRangeTextInterceptor = prepareRangeTextInterceptor;
exports.prepareSelectionInterceptor = prepareSelectionInterceptor;
exports.prepareValueInterceptor = prepareValueInterceptor;
