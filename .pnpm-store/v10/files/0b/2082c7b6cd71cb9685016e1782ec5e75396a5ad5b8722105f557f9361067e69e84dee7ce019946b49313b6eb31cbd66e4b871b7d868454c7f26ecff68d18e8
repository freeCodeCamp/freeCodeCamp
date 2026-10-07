import { PointerEventsCheckLevel } from '../../options.js';
import { getWindow } from '../misc/getWindow.js';
import { isElementType } from '../misc/isElementType.js';
import { ApiLevel, getLevelRef } from '../misc/level.js';

function hasPointerEvents(instance, element) {
    var _checkPointerEvents;
    return ((_checkPointerEvents = checkPointerEvents(instance, element)) === null || _checkPointerEvents === void 0 ? void 0 : _checkPointerEvents.pointerEvents) !== 'none';
}
function closestPointerEventsDeclaration(element) {
    const window = getWindow(element);
    for(let el = element, tree = []; el === null || el === void 0 ? void 0 : el.ownerDocument; el = el.parentElement){
        tree.push(el);
        const pointerEvents = window.getComputedStyle(el).pointerEvents;
        if (pointerEvents && ![
            'inherit',
            'unset'
        ].includes(pointerEvents)) {
            return {
                pointerEvents,
                tree
            };
        }
    }
    return undefined;
}
const PointerEventsCheck = Symbol('Last check for pointer-events');
function checkPointerEvents(instance, element) {
    const lastCheck = element[PointerEventsCheck];
    const needsCheck = instance.config.pointerEventsCheck !== PointerEventsCheckLevel.Never && (!lastCheck || hasBitFlag(instance.config.pointerEventsCheck, PointerEventsCheckLevel.EachApiCall) && lastCheck[ApiLevel.Call] !== getLevelRef(instance, ApiLevel.Call) || hasBitFlag(instance.config.pointerEventsCheck, PointerEventsCheckLevel.EachTrigger) && lastCheck[ApiLevel.Trigger] !== getLevelRef(instance, ApiLevel.Trigger));
    if (!needsCheck) {
        return lastCheck === null || lastCheck === void 0 ? void 0 : lastCheck.result;
    }
    const declaration = closestPointerEventsDeclaration(element);
    element[PointerEventsCheck] = {
        [ApiLevel.Call]: getLevelRef(instance, ApiLevel.Call),
        [ApiLevel.Trigger]: getLevelRef(instance, ApiLevel.Trigger),
        result: declaration
    };
    return declaration;
}
function assertPointerEvents(instance, element) {
    const declaration = checkPointerEvents(instance, element);
    if ((declaration === null || declaration === void 0 ? void 0 : declaration.pointerEvents) === 'none') {
        throw new Error([
            `Unable to perform pointer interaction as the element ${declaration.tree.length > 1 ? 'inherits' : 'has'} \`pointer-events: none\`:`,
            '',
            printTree(declaration.tree)
        ].join('\n'));
    }
}
function printTree(tree) {
    return tree.reverse().map((el, i)=>[
            ''.padEnd(i),
            el.tagName,
            el.id && `#${el.id}`,
            el.hasAttribute('data-testid') && `(testId=${el.getAttribute('data-testid')})`,
            getLabelDescr(el),
            tree.length > 1 && i === 0 && '  <-- This element declared `pointer-events: none`',
            tree.length > 1 && i === tree.length - 1 && '  <-- Asserted pointer events here'
        ].filter(Boolean).join('')).join('\n');
}
function getLabelDescr(element) {
    var _element_labels;
    let label;
    if (element.hasAttribute('aria-label')) {
        label = element.getAttribute('aria-label');
    } else if (element.hasAttribute('aria-labelledby')) {
        var _element_ownerDocument_getElementById_textContent, _element_ownerDocument_getElementById;
        label = (_element_ownerDocument_getElementById = element.ownerDocument.getElementById(element.getAttribute('aria-labelledby'))) === null || _element_ownerDocument_getElementById === void 0 ? void 0 : (_element_ownerDocument_getElementById_textContent = _element_ownerDocument_getElementById.textContent) === null || _element_ownerDocument_getElementById_textContent === void 0 ? void 0 : _element_ownerDocument_getElementById_textContent.trim();
    } else if (isElementType(element, [
        'button',
        'input',
        'meter',
        'output',
        'progress',
        'select',
        'textarea'
    ]) && ((_element_labels = element.labels) === null || _element_labels === void 0 ? void 0 : _element_labels.length)) {
        label = Array.from(element.labels).map((el)=>{
            var _el_textContent;
            return (_el_textContent = el.textContent) === null || _el_textContent === void 0 ? void 0 : _el_textContent.trim();
        }).join('|');
    } else if (isElementType(element, 'button')) {
        var _element_textContent;
        label = (_element_textContent = element.textContent) === null || _element_textContent === void 0 ? void 0 : _element_textContent.trim();
    }
    label = label === null || label === void 0 ? void 0 : label.replace(/\n/g, '  ');
    if (Number(label === null || label === void 0 ? void 0 : label.length) > 30) {
        label = `${label === null || label === void 0 ? void 0 : label.substring(0, 29)}…`;
    }
    return label ? `(label=${label})` : '';
}
// With the eslint rule and prettier the bitwise operation isn't nice to read
function hasBitFlag(conf, flag) {
    return (conf & flag) > 0;
}

export { assertPointerEvents, hasPointerEvents };
