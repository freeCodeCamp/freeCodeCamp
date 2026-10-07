import { getActiveWindow } from '../../../base/browser/dom.js';
import { Disposable, toDisposable } from '../../../base/common/lifecycle.js';
import { ILogService } from '../../../platform/log/common/log.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
let TaskQueue = class TaskQueue extends Disposable {
    constructor(_logService) {
        super();
        this._logService = _logService;
        this._tasks = [];
        this._i = 0;
        this._register(toDisposable(() => this.clear()));
    }
    enqueue(task) {
        this._tasks.push(task);
        this._start();
    }
    clear() {
        if (this._idleCallback) {
            this._cancelCallback(this._idleCallback);
            this._idleCallback = undefined;
        }
        this._i = 0;
        this._tasks.length = 0;
    }
    _start() {
        if (!this._idleCallback) {
            this._idleCallback = this._requestCallback(this._process.bind(this));
        }
    }
    _process(deadline) {
        this._idleCallback = undefined;
        let taskDuration = 0;
        let longestTask = 0;
        let lastDeadlineRemaining = deadline.timeRemaining();
        let deadlineRemaining = 0;
        while (this._i < this._tasks.length) {
            taskDuration = Date.now();
            if (!this._tasks[this._i]()) {
                this._i++;
            }
            // other than performance.now, Date.now might not be stable (changes on wall clock changes),
            // this is not an issue here as a clock change during a short running task is very unlikely
            // in case it still happened and leads to negative duration, simply assume 1 msec
            taskDuration = Math.max(1, Date.now() - taskDuration);
            longestTask = Math.max(taskDuration, longestTask);
            // Guess the following task will take a similar time to the longest task in this batch, allow
            // additional room to try avoid exceeding the deadline
            deadlineRemaining = deadline.timeRemaining();
            if (longestTask * 1.5 > deadlineRemaining) {
                // Warn when the time exceeding the deadline is over 20ms, if this happens in practice the
                // task should be split into sub-tasks to ensure the UI remains responsive.
                if (lastDeadlineRemaining - taskDuration < -20) {
                    this._logService.warn(`task queue exceeded allotted deadline by ${Math.abs(Math.round(lastDeadlineRemaining - taskDuration))}ms`);
                }
                this._start();
                return;
            }
            lastDeadlineRemaining = deadlineRemaining;
        }
        this.clear();
    }
};
TaskQueue = __decorate([
    __param(0, ILogService)
], TaskQueue);
/**
 * A queue of that runs tasks over several tasks via setTimeout, trying to maintain above 60 frames
 * per second. The tasks will run in the order they are enqueued, but they will run some time later,
 * and care should be taken to ensure they're non-urgent and will not introduce race conditions.
 */
class PriorityTaskQueue extends TaskQueue {
    _requestCallback(callback) {
        return getActiveWindow().setTimeout(() => callback(this._createDeadline(16)));
    }
    _cancelCallback(identifier) {
        getActiveWindow().clearTimeout(identifier);
    }
    _createDeadline(duration) {
        const end = Date.now() + duration;
        return {
            timeRemaining: () => Math.max(0, end - Date.now())
        };
    }
}
class IdleTaskQueueInternal extends TaskQueue {
    _requestCallback(callback) {
        return getActiveWindow().requestIdleCallback(callback);
    }
    _cancelCallback(identifier) {
        getActiveWindow().cancelIdleCallback(identifier);
    }
}
/**
 * A queue of that runs tasks over several idle callbacks, trying to respect the idle callback's
 * deadline given by the environment. The tasks will run in the order they are enqueued, but they
 * will run some time later, and care should be taken to ensure they're non-urgent and will not
 * introduce race conditions.
 *
 * This reverts to a {@link PriorityTaskQueue} if the environment does not support idle callbacks.
 */
const IdleTaskQueue = ('requestIdleCallback' in getActiveWindow()) ? IdleTaskQueueInternal : PriorityTaskQueue;

export { IdleTaskQueue, PriorityTaskQueue };
