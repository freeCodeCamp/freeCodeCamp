/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class RateLimiter {
    constructor(timesPerSecond = 5) {
        this.timesPerSecond = timesPerSecond;
        this._lastRun = 0;
        this._minimumTimeBetweenRuns = 1000 / timesPerSecond;
    }
    runIfNotLimited(callback) {
        const now = Date.now();
        if (now - this._lastRun >= this._minimumTimeBetweenRuns) {
            this._lastRun = now;
            callback();
        }
    }
}

export { RateLimiter };
