"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setImmediate_1 = require("../generic/setImmediate");
/**
 * Non-recursive mutex
 * @hidden
 */
var Mutex = /** @class */ (function () {
    function Mutex() {
        this._locked = false;
        this._waiters = [];
    }
    Mutex.prototype.lock = function (cb) {
        if (this._locked) {
            this._waiters.push(cb);
            return;
        }
        this._locked = true;
        cb();
    };
    Mutex.prototype.unlock = function () {
        if (!this._locked) {
            throw new Error('unlock of a non-locked mutex');
        }
        var next = this._waiters.shift();
        // don't unlock - we want to queue up next for the
        // _end_ of the current task execution, but we don't
        // want it to be called inline with whatever the
        // current stack is.  This way we still get the nice
        // behavior that an unlock immediately followed by a
        // lock won't cause starvation.
        if (next) {
            (0, setImmediate_1.default)(next);
            return;
        }
        this._locked = false;
    };
    Mutex.prototype.tryLock = function () {
        if (this._locked) {
            return false;
        }
        this._locked = true;
        return true;
    };
    Mutex.prototype.isLocked = function () {
        return this._locked;
    };
    return Mutex;
}());
exports.default = Mutex;