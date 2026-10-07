import { dispatchDOMEvent } from '../event/dispatchEvent.js';
import { isElementType } from '../utils/misc/isElementType.js';
import '../utils/dataTransfer/Clipboard.js';
import { getInitialValue, clearInitialValue } from './UI.js';
import '@testing-library/dom';
import { prepareValueInterceptor, prepareSelectionInterceptor, prepareRangeTextInterceptor } from './interceptor.js';

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
        const initialValue = getInitialValue(el);
        if (initialValue !== undefined) {
            if (el.value !== initialValue) {
                dispatchDOMEvent(el, 'change');
            }
            clearInitialValue(el);
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
    if (isElementType(el, [
        'input',
        'textarea'
    ])) {
        prepareValueInterceptor(el);
        prepareSelectionInterceptor(el);
        prepareRangeTextInterceptor(el);
    }
    el[isPrepared] = isPrepared;
}

export { prepareDocument };
