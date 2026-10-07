import { equals } from '../../../../base/common/arrays.js';
import { RunOnceScheduler } from '../../../../base/common/async.js';
import { Emitter } from '../../../../base/common/event.js';
import { Disposable } from '../../../../base/common/lifecycle.js';
import { LineRange } from '../../core/ranges/lineRange.js';
import '../../../../base/common/observableInternal/index.js';
import { itemsEquals, itemEquals, equalsIfDefined } from '../../../../base/common/equals.js';
import { observableSignal } from '../../../../base/common/observableInternal/observables/observableSignal.js';
import { observableValueOpts } from '../../../../base/common/observableInternal/observables/observableValueOpts.js';
import { derivedOpts } from '../../../../base/common/observableInternal/observables/derived.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
/**
 * @internal
 */
class AttachedViews {
    constructor() {
        this._onDidChangeVisibleRanges = new Emitter();
        this.onDidChangeVisibleRanges = this._onDidChangeVisibleRanges.event;
        this._views = new Set();
        this._viewsChanged = observableSignal(this);
        this.visibleLineRanges = derivedOpts({
            owner: this,
            equalsFn: itemsEquals(itemEquals())
        }, reader => {
            this._viewsChanged.read(reader);
            const ranges = LineRange.joinMany([...this._views].map(view => view.state.read(reader)?.visibleLineRanges ?? []));
            return ranges;
        });
    }
    attachView() {
        const view = new AttachedViewImpl((state) => {
            this._onDidChangeVisibleRanges.fire({ view, state });
        });
        this._views.add(view);
        this._viewsChanged.trigger(undefined);
        return view;
    }
    detachView(view) {
        this._views.delete(view);
        this._onDidChangeVisibleRanges.fire({ view, state: undefined });
        this._viewsChanged.trigger(undefined);
    }
}
/**
 * @internal
 */
class AttachedViewState {
    constructor(visibleLineRanges, stabilized) {
        this.visibleLineRanges = visibleLineRanges;
        this.stabilized = stabilized;
    }
    equals(other) {
        if (this === other) {
            return true;
        }
        if (!equals(this.visibleLineRanges, other.visibleLineRanges, (a, b) => a.equals(b))) {
            return false;
        }
        if (this.stabilized !== other.stabilized) {
            return false;
        }
        return true;
    }
}
class AttachedViewImpl {
    get state() { return this._state; }
    constructor(handleStateChange) {
        this.handleStateChange = handleStateChange;
        this._state = observableValueOpts({ owner: this, equalsFn: equalsIfDefined((a, b) => a.equals(b)) }, undefined);
    }
    setVisibleLines(visibleLines, stabilized) {
        const visibleLineRanges = visibleLines.map((line) => new LineRange(line.startLineNumber, line.endLineNumber + 1));
        const state = new AttachedViewState(visibleLineRanges, stabilized);
        this._state.set(state, undefined, undefined);
        this.handleStateChange(state);
    }
}
class AttachedViewHandler extends Disposable {
    get lineRanges() { return this._lineRanges; }
    constructor(_refreshTokens) {
        super();
        this._refreshTokens = _refreshTokens;
        this.runner = this._register(new RunOnceScheduler(() => this.update(), 50));
        this._computedLineRanges = [];
        this._lineRanges = [];
    }
    update() {
        if (equals(this._computedLineRanges, this._lineRanges, (a, b) => a.equals(b))) {
            return;
        }
        this._computedLineRanges = this._lineRanges;
        this._refreshTokens();
    }
    handleStateChange(state) {
        this._lineRanges = state.visibleLineRanges;
        if (state.stabilized) {
            this.runner.cancel();
            this.update();
        }
        else {
            this.runner.schedule();
        }
    }
}
class AbstractSyntaxTokenBackend extends Disposable {
    get backgroundTokenizationState() {
        return this._backgroundTokenizationState;
    }
    constructor(_languageIdCodec, _textModel) {
        super();
        this._languageIdCodec = _languageIdCodec;
        this._textModel = _textModel;
        this._onDidChangeTokens = this._register(new Emitter());
        /** @internal, should not be exposed by the text model! */
        this.onDidChangeTokens = this._onDidChangeTokens.event;
    }
    tokenizeIfCheap(lineNumber) {
        if (this.isCheapToTokenize(lineNumber)) {
            this.forceTokenization(lineNumber);
        }
    }
}

export { AbstractSyntaxTokenBackend, AttachedViewHandler, AttachedViewState, AttachedViews };
