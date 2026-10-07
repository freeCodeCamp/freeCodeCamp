import { isMacintosh } from '../../../common/platform.js';
import { Widget } from '../widget.js';
import './selectBox.css';
import { SelectBoxList } from './selectBoxCustom.js';
import { SelectBoxNative } from './selectBoxNative.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class SelectBox extends Widget {
    constructor(options, selected, contextViewProvider, styles, selectBoxOptions) {
        super();
        // Default to native SelectBox for OSX unless overridden
        if (isMacintosh && !selectBoxOptions?.useCustomDrawn) {
            this.selectBoxDelegate = new SelectBoxNative(options, selected, styles, selectBoxOptions);
        }
        else {
            this.selectBoxDelegate = new SelectBoxList(options, selected, contextViewProvider, styles, selectBoxOptions);
        }
        this._register(this.selectBoxDelegate);
    }
    // Public SelectBox Methods - routed through delegate interface
    get onDidSelect() {
        return this.selectBoxDelegate.onDidSelect;
    }
    setOptions(options, selected) {
        this.selectBoxDelegate.setOptions(options, selected);
    }
    select(index) {
        this.selectBoxDelegate.select(index);
    }
    focus() {
        this.selectBoxDelegate.focus();
    }
    blur() {
        this.selectBoxDelegate.blur();
    }
    setFocusable(focusable) {
        this.selectBoxDelegate.setFocusable(focusable);
    }
    render(container) {
        this.selectBoxDelegate.render(container);
    }
}

export { SelectBox };
