'use strict';

var dom = require('@testing-library/dom');
var isElementType = require('../utils/misc/isElementType.js');
require('../utils/dataTransfer/Clipboard.js');
var isDisabled = require('../utils/misc/isDisabled.js');
var wait = require('../utils/misc/wait.js');
var cssPointerEvents = require('../utils/pointer/cssPointerEvents.js');
require('../event/behavior/click.js');
require('../event/behavior/cut.js');
require('../event/behavior/keydown.js');
require('../event/behavior/keypress.js');
require('../event/behavior/keyup.js');
require('../event/behavior/paste.js');
var focus = require('../event/focus.js');

async function selectOptions(select, values) {
    return selectOptionsBase.call(this, true, select, values);
}
async function deselectOptions(select, values) {
    return selectOptionsBase.call(this, false, select, values);
}
async function selectOptionsBase(newValue, select, values) {
    if (!newValue && !select.multiple) {
        throw dom.getConfig().getElementError(`Unable to deselect an option in a non-multiple select. Use selectOptions to change the selection instead.`, select);
    }
    const valArray = Array.isArray(values) ? values : [
        values
    ];
    const allOptions = Array.from(select.querySelectorAll('option, [role="option"]'));
    const selectedOptions = valArray.map((val)=>{
        if (typeof val !== 'string' && allOptions.includes(val)) {
            return val;
        } else {
            const matchingOption = allOptions.find((o)=>o.value === val || o.innerHTML === val);
            if (matchingOption) {
                return matchingOption;
            } else {
                throw dom.getConfig().getElementError(`Value "${String(val)}" not found in options`, select);
            }
        }
    }).filter((option)=>!isDisabled.isDisabled(option));
    if (isDisabled.isDisabled(select) || !selectedOptions.length) return;
    const selectOption = (option)=>{
        option.selected = newValue;
        this.dispatchUIEvent(select, 'input', {
            bubbles: true,
            cancelable: false,
            composed: true
        });
        this.dispatchUIEvent(select, 'change');
    };
    if (isElementType.isElementType(select, 'select')) {
        if (select.multiple) {
            for (const option of selectedOptions){
                const withPointerEvents = this.config.pointerEventsCheck === 0 ? true : cssPointerEvents.hasPointerEvents(this, option);
                // events fired for multiple select are weird. Can't use hover...
                if (withPointerEvents) {
                    this.dispatchUIEvent(option, 'pointerover');
                    this.dispatchUIEvent(select, 'pointerenter');
                    this.dispatchUIEvent(option, 'mouseover');
                    this.dispatchUIEvent(select, 'mouseenter');
                    this.dispatchUIEvent(option, 'pointermove');
                    this.dispatchUIEvent(option, 'mousemove');
                    this.dispatchUIEvent(option, 'pointerdown');
                    this.dispatchUIEvent(option, 'mousedown');
                }
                focus.focusElement(select);
                if (withPointerEvents) {
                    this.dispatchUIEvent(option, 'pointerup');
                    this.dispatchUIEvent(option, 'mouseup');
                }
                selectOption(option);
                if (withPointerEvents) {
                    this.dispatchUIEvent(option, 'click');
                }
                await wait.wait(this.config);
            }
        } else if (selectedOptions.length === 1) {
            const withPointerEvents = this.config.pointerEventsCheck === 0 ? true : cssPointerEvents.hasPointerEvents(this, select);
            // the click to open the select options
            if (withPointerEvents) {
                await this.click(select);
            } else {
                focus.focusElement(select);
            }
            selectOption(selectedOptions[0]);
            if (withPointerEvents) {
                // the browser triggers another click event on the select for the click on the option
                // this second click has no 'down' phase
                this.dispatchUIEvent(select, 'pointerover');
                this.dispatchUIEvent(select, 'pointerenter');
                this.dispatchUIEvent(select, 'mouseover');
                this.dispatchUIEvent(select, 'mouseenter');
                this.dispatchUIEvent(select, 'pointerup');
                this.dispatchUIEvent(select, 'mouseup');
                this.dispatchUIEvent(select, 'click');
            }
            await wait.wait(this.config);
        } else {
            throw dom.getConfig().getElementError(`Cannot select multiple options on a non-multiple select`, select);
        }
    } else if (select.getAttribute('role') === 'listbox') {
        for (const option of selectedOptions){
            await this.click(option);
            await this.unhover(option);
        }
    } else {
        throw dom.getConfig().getElementError(`Cannot select options on elements that are neither select nor listbox elements`, select);
    }
}

exports.deselectOptions = deselectOptions;
exports.selectOptions = selectOptions;
