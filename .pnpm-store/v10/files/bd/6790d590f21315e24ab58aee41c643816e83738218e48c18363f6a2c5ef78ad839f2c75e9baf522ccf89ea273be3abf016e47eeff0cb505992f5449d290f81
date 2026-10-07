import { Event } from '../../../../base/common/event.js';
import { getCodiconAriaLabel } from '../../../../base/common/iconLabels.js';
import { localize } from '../../../../nls.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * Accessibility provider for QuickTree.
 */
class QuickTreeAccessibilityProvider {
    constructor(onCheckedEvent) {
        this.onCheckedEvent = onCheckedEvent;
    }
    getWidgetAriaLabel() {
        return localize(1772, "Quick Tree");
    }
    getAriaLabel(element) {
        return element.ariaLabel || [element.label, element.description]
            .map(s => getCodiconAriaLabel(s))
            .filter(s => !!s)
            .join(', ');
    }
    getWidgetRole() {
        return 'tree';
    }
    getRole(_element) {
        return 'checkbox';
    }
    isChecked(element) {
        return {
            get value() { return element.checked === 'mixed' ? 'mixed' : !!element.checked; },
            onDidChange: e => Event.filter(this.onCheckedEvent, e => e.item === element)(_ => e()),
        };
    }
}

export { QuickTreeAccessibilityProvider };
