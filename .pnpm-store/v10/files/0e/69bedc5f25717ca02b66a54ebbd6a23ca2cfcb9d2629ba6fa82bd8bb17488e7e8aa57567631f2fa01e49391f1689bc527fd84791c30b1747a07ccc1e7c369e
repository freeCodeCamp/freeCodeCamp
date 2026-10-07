import { createCancelableAsyncIterableProducer, RunOnceScheduler } from '../../../../base/common/async.js';
import { onUnexpectedError } from '../../../../base/common/errors.js';
import { Emitter } from '../../../../base/common/event.js';
import { Disposable } from '../../../../base/common/lifecycle.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class HoverResult {
    constructor(value, isComplete, hasLoadingMessage, options) {
        this.value = value;
        this.isComplete = isComplete;
        this.hasLoadingMessage = hasLoadingMessage;
        this.options = options;
    }
}
/**
 * Computing the hover is very fine tuned.
 *
 * Suppose the hover delay is 300ms (the default). Then, when resting the mouse at an anchor:
 * - at 150ms, the async computation is triggered (i.e. semantic hover)
 *   - if async results already come in, they are not rendered yet.
 * - at 300ms, the sync computation is triggered (i.e. decorations, markers)
 *   - if there are sync or async results, they are rendered.
 * - at 900ms, if the async computation hasn't finished, a "Loading..." result is added.
 */
class HoverOperation extends Disposable {
    constructor(_editor, _computer) {
        super();
        this._editor = _editor;
        this._computer = _computer;
        this._onResult = this._register(new Emitter());
        this.onResult = this._onResult.event;
        this._asyncComputationScheduler = this._register(new Debouncer((options) => this._triggerAsyncComputation(options), 0));
        this._syncComputationScheduler = this._register(new Debouncer((options) => this._triggerSyncComputation(options), 0));
        this._loadingMessageScheduler = this._register(new Debouncer((options) => this._triggerLoadingMessage(options), 0));
        this._state = 0 /* HoverOperationState.Idle */;
        this._asyncIterable = null;
        this._asyncIterableDone = false;
        this._result = [];
    }
    dispose() {
        if (this._asyncIterable) {
            this._asyncIterable.cancel();
            this._asyncIterable = null;
        }
        this._options = undefined;
        super.dispose();
    }
    get _hoverTime() {
        return this._editor.getOption(69 /* EditorOption.hover */).delay;
    }
    get _firstWaitTime() {
        return this._hoverTime / 2;
    }
    get _secondWaitTime() {
        return this._hoverTime - this._firstWaitTime;
    }
    get _loadingMessageTime() {
        return 3 * this._hoverTime;
    }
    _setState(state, options) {
        this._options = options;
        this._state = state;
        this._fireResult(options);
    }
    _triggerAsyncComputation(options) {
        this._setState(2 /* HoverOperationState.SecondWait */, options);
        this._syncComputationScheduler.schedule(options, this._secondWaitTime);
        if (this._computer.computeAsync) {
            this._asyncIterableDone = false;
            this._asyncIterable = createCancelableAsyncIterableProducer(token => this._computer.computeAsync(options, token));
            (async () => {
                try {
                    for await (const item of this._asyncIterable) {
                        if (item) {
                            this._result.push(item);
                            this._fireResult(options);
                        }
                    }
                    this._asyncIterableDone = true;
                    if (this._state === 3 /* HoverOperationState.WaitingForAsync */ || this._state === 4 /* HoverOperationState.WaitingForAsyncShowingLoading */) {
                        this._setState(0 /* HoverOperationState.Idle */, options);
                    }
                }
                catch (e) {
                    onUnexpectedError(e);
                }
            })();
        }
        else {
            this._asyncIterableDone = true;
        }
    }
    _triggerSyncComputation(options) {
        if (this._computer.computeSync) {
            this._result = this._result.concat(this._computer.computeSync(options));
        }
        this._setState(this._asyncIterableDone ? 0 /* HoverOperationState.Idle */ : 3 /* HoverOperationState.WaitingForAsync */, options);
    }
    _triggerLoadingMessage(options) {
        if (this._state === 3 /* HoverOperationState.WaitingForAsync */) {
            this._setState(4 /* HoverOperationState.WaitingForAsyncShowingLoading */, options);
        }
    }
    _fireResult(options) {
        if (this._state === 1 /* HoverOperationState.FirstWait */ || this._state === 2 /* HoverOperationState.SecondWait */) {
            // Do not send out results before the hover time
            return;
        }
        const isComplete = (this._state === 0 /* HoverOperationState.Idle */);
        const hasLoadingMessage = (this._state === 4 /* HoverOperationState.WaitingForAsyncShowingLoading */);
        this._onResult.fire(new HoverResult(this._result.slice(0), isComplete, hasLoadingMessage, options));
    }
    start(mode, options) {
        if (mode === 0 /* HoverStartMode.Delayed */) {
            if (this._state === 0 /* HoverOperationState.Idle */) {
                this._setState(1 /* HoverOperationState.FirstWait */, options);
                this._asyncComputationScheduler.schedule(options, this._firstWaitTime);
                this._loadingMessageScheduler.schedule(options, this._loadingMessageTime);
            }
        }
        else {
            switch (this._state) {
                case 0 /* HoverOperationState.Idle */:
                    this._triggerAsyncComputation(options);
                    this._syncComputationScheduler.cancel();
                    this._triggerSyncComputation(options);
                    break;
                case 2 /* HoverOperationState.SecondWait */:
                    this._syncComputationScheduler.cancel();
                    this._triggerSyncComputation(options);
                    break;
            }
        }
    }
    cancel() {
        this._asyncComputationScheduler.cancel();
        this._syncComputationScheduler.cancel();
        this._loadingMessageScheduler.cancel();
        if (this._asyncIterable) {
            this._asyncIterable.cancel();
            this._asyncIterable = null;
        }
        this._result = [];
        this._options = undefined;
        this._state = 0 /* HoverOperationState.Idle */;
    }
    get options() {
        return this._options;
    }
}
class Debouncer extends Disposable {
    constructor(runner, debounceTimeMs) {
        super();
        this._scheduler = this._register(new RunOnceScheduler(() => runner(this._options), debounceTimeMs));
    }
    schedule(options, debounceTimeMs) {
        this._options = options;
        this._scheduler.schedule(debounceTimeMs);
    }
    cancel() {
        this._scheduler.cancel();
    }
}

export { HoverOperation, HoverResult };
