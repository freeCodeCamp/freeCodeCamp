import { getActiveWindow } from '../../../../../base/browser/dom.js';
import '../../../../../base/common/observableInternal/index.js';
import { observableSignal } from '../../../../../base/common/observableInternal/observables/observableSignal.js';
import { observableValue } from '../../../../../base/common/observableInternal/observables/observableValue.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class AnimatedValue {
    constructor(startValue, endValue, durationMs, _interpolationFunction = easeOutExpo) {
        this.startValue = startValue;
        this.endValue = endValue;
        this.durationMs = durationMs;
        this._interpolationFunction = _interpolationFunction;
        this.startTimeMs = Date.now();
        if (startValue === endValue) {
            this.durationMs = 0;
        }
    }
    isFinished() {
        return Date.now() >= this.startTimeMs + this.durationMs;
    }
    getValue() {
        const timePassed = Date.now() - this.startTimeMs;
        if (timePassed >= this.durationMs) {
            return this.endValue;
        }
        const value = this._interpolationFunction(timePassed, this.startValue, this.endValue - this.startValue, this.durationMs);
        return value;
    }
}
function easeOutExpo(passedTime, start, length, totalDuration) {
    return passedTime === totalDuration
        ? start + length
        : length * (-Math.pow(2, -10 * passedTime / totalDuration) + 1) + start;
}
function easeOutCubic(passedTime, start, length, totalDuration) {
    return length * ((passedTime = passedTime / totalDuration - 1) * passedTime * passedTime + 1) + start;
}
class ObservableAnimatedValue {
    constructor(initialValue) {
        this._value = observableValue(this, initialValue);
    }
    getValue(reader) {
        const value = this._value.read(reader);
        if (!value.isFinished()) {
            AnimationFrameScheduler.instance.invalidateOnNextAnimationFrame(reader);
        }
        return value.getValue();
    }
}
class AnimationFrameScheduler {
    constructor() {
        this._counter = observableSignal(this);
        this._isScheduled = false;
    }
    static { this.instance = new AnimationFrameScheduler(); }
    invalidateOnNextAnimationFrame(reader) {
        this._counter.read(reader);
        if (!this._isScheduled) {
            this._isScheduled = true;
            getActiveWindow().requestAnimationFrame(() => {
                this._isScheduled = false;
                this._update();
            });
        }
    }
    _update() {
        this._counter.trigger(undefined);
    }
}

export { AnimatedValue, AnimationFrameScheduler, ObservableAnimatedValue, easeOutCubic, easeOutExpo };
