import { Sash } from '../../../../../base/browser/ui/sash/sash.js';
import { Disposable } from '../../../../../base/common/lifecycle.js';
import '../../../../../base/common/observableInternal/index.js';
import { derivedWithSetter } from '../../../../../base/common/observableInternal/observables/derived.js';
import { observableValue } from '../../../../../base/common/observableInternal/observables/observableValue.js';
import { autorun } from '../../../../../base/common/observableInternal/reactions/autorun.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class SashLayout {
    resetSash() {
        this._sashRatio.set(undefined, undefined);
    }
    constructor(_options, dimensions) {
        this._options = _options;
        this.dimensions = dimensions;
        this.sashLeft = derivedWithSetter(this, reader => {
            const ratio = this._sashRatio.read(reader) ?? this._options.splitViewDefaultRatio.read(reader);
            return this._computeSashLeft(ratio, reader);
        }, (value, tx) => {
            const contentWidth = this.dimensions.width.get();
            this._sashRatio.set(value / contentWidth, tx);
        });
        this._sashRatio = observableValue(this, undefined);
    }
    /** @pure */
    _computeSashLeft(desiredRatio, reader) {
        const contentWidth = this.dimensions.width.read(reader);
        const midPoint = Math.floor(this._options.splitViewDefaultRatio.read(reader) * contentWidth);
        const sashLeft = this._options.enableSplitViewResizing.read(reader) ? Math.floor(desiredRatio * contentWidth) : midPoint;
        const MINIMUM_EDITOR_WIDTH = 100;
        if (contentWidth <= MINIMUM_EDITOR_WIDTH * 2) {
            return midPoint;
        }
        if (sashLeft < MINIMUM_EDITOR_WIDTH) {
            return MINIMUM_EDITOR_WIDTH;
        }
        if (sashLeft > contentWidth - MINIMUM_EDITOR_WIDTH) {
            return contentWidth - MINIMUM_EDITOR_WIDTH;
        }
        return sashLeft;
    }
}
class DiffEditorSash extends Disposable {
    constructor(_domNode, _dimensions, _enabled, _boundarySashes, sashLeft, _resetSash) {
        super();
        this._domNode = _domNode;
        this._dimensions = _dimensions;
        this._enabled = _enabled;
        this._boundarySashes = _boundarySashes;
        this.sashLeft = sashLeft;
        this._resetSash = _resetSash;
        this._sash = this._register(new Sash(this._domNode, {
            getVerticalSashTop: (_sash) => 0,
            getVerticalSashLeft: (_sash) => this.sashLeft.get(),
            getVerticalSashHeight: (_sash) => this._dimensions.height.get(),
        }, { orientation: 0 /* Orientation.VERTICAL */ }));
        this._startSashPosition = undefined;
        this._register(this._sash.onDidStart(() => {
            this._startSashPosition = this.sashLeft.get();
        }));
        this._register(this._sash.onDidChange((e) => {
            this.sashLeft.set(this._startSashPosition + (e.currentX - e.startX), undefined);
        }));
        this._register(this._sash.onDidEnd(() => this._sash.layout()));
        this._register(this._sash.onDidReset(() => this._resetSash()));
        this._register(autorun(reader => {
            const sashes = this._boundarySashes.read(reader);
            if (sashes) {
                this._sash.orthogonalEndSash = sashes.bottom;
            }
        }));
        this._register(autorun(reader => {
            /** @description DiffEditorSash.layoutSash */
            const enabled = this._enabled.read(reader);
            this._sash.state = enabled ? 3 /* SashState.Enabled */ : 0 /* SashState.Disabled */;
            this.sashLeft.read(reader);
            this._dimensions.height.read(reader);
            this._sash.layout();
        }));
    }
}

export { DiffEditorSash, SashLayout };
