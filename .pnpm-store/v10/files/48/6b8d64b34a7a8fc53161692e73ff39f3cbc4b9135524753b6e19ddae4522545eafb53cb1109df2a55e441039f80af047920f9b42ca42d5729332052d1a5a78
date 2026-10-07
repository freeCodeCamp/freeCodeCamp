/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
class Throttler {
    constructor() {
        this._timeout = undefined;
    }
    throttle(fn, timeoutMs) {
        if (this._timeout === undefined) {
            this._timeout = setTimeout(() => {
                this._timeout = undefined;
                fn();
            }, timeoutMs);
        }
    }
    dispose() {
        if (this._timeout !== undefined) {
            clearTimeout(this._timeout);
        }
    }
}
function deepAssign(target, source) {
    for (const key in source) {
        if (!!target[key] && typeof target[key] === 'object' && !!source[key] && typeof source[key] === 'object') {
            deepAssign(target[key], source[key]);
        }
        else {
            target[key] = source[key];
        }
    }
}
function deepAssignDeleteNulls(target, source) {
    for (const key in source) {
        if (source[key] === null) {
            delete target[key];
        }
        else if (!!target[key] && typeof target[key] === 'object' && !!source[key] && typeof source[key] === 'object') {
            deepAssignDeleteNulls(target[key], source[key]);
        }
        else {
            target[key] = source[key];
        }
    }
}

export { Throttler, deepAssign, deepAssignDeleteNulls };
