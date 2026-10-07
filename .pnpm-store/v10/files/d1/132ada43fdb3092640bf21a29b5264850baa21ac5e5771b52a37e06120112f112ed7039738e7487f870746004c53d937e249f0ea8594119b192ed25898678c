import { append, $ } from '../../dom.js';
import { format } from '../../../common/strings.js';
import './countBadge.css';
import { Disposable, MutableDisposable, toDisposable } from '../../../common/lifecycle.js';
import { getBaseLayerHoverDelegate } from '../hover/hoverDelegate2.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class CountBadge extends Disposable {
    constructor(container, options, styles) {
        super();
        this.options = options;
        this.styles = styles;
        this.count = 0;
        this.hover = this._register(new MutableDisposable());
        this.element = append(container, $('.monaco-count-badge'));
        this._register(toDisposable(() => container.removeChild(this.element)));
        this.countFormat = this.options.countFormat || '{0}';
        this.titleFormat = this.options.titleFormat || '';
        this.setCount(this.options.count || 0);
        this.updateHover();
    }
    setCount(count) {
        this.count = count;
        this.render();
    }
    setTitleFormat(titleFormat) {
        this.titleFormat = titleFormat;
        this.updateHover();
        this.render();
    }
    updateHover() {
        if (this.titleFormat !== '' && !this.hover.value) {
            this.hover.value = getBaseLayerHoverDelegate().setupDelayedHoverAtMouse(this.element, () => ({ content: format(this.titleFormat, this.count), appearance: { compact: true } }));
        }
        else if (this.titleFormat === '' && this.hover.value) {
            this.hover.value = undefined;
        }
    }
    render() {
        this.element.textContent = format(this.countFormat, this.count);
        this.element.style.backgroundColor = this.styles.badgeBackground ?? '';
        this.element.style.color = this.styles.badgeForeground ?? '';
        if (this.styles.badgeBorder) {
            this.element.style.border = `1px solid ${this.styles.badgeBorder}`;
        }
    }
}

export { CountBadge };
