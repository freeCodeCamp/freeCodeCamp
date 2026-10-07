"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegacyTimeoutContext = exports.CSOTTimeoutContext = exports.TimeoutContext = exports.Timeout = exports.TimeoutError = void 0;
const timers_1 = require("timers");
const error_1 = require("./error");
const utils_1 = require("./utils");
/** @internal */
class TimeoutError extends Error {
    get name() {
        return 'TimeoutError';
    }
    constructor(message, options) {
        super(message, options);
        this.duration = options.duration;
    }
    static is(error) {
        return (error != null && typeof error === 'object' && 'name' in error && error.name === 'TimeoutError');
    }
}
exports.TimeoutError = TimeoutError;
/**
 * @internal
 * This class is an abstraction over timeouts
 * The Timeout class can only be in the pending or rejected states. It is guaranteed not to resolve
 * if interacted with exclusively through its public API
 * */
class Timeout extends Promise {
    get remainingTime() {
        if (this.timedOut)
            return 0;
        if (this.duration === 0)
            return Infinity;
        return this.start + this.duration - Math.trunc(performance.now());
    }
    get timeElapsed() {
        return Math.trunc(performance.now()) - this.start;
    }
    /** Create a new timeout that expires in `duration` ms */
    constructor(executor = () => null, options) {
        const duration = options?.duration ?? 0;
        const unref = !!options?.unref;
        const rejection = options?.rejection;
        if (duration < 0) {
            throw new error_1.MongoInvalidArgumentError('Cannot create a Timeout with a negative duration');
        }
        let reject;
        super((_, promiseReject) => {
            reject = promiseReject;
            executor(utils_1.noop, promiseReject);
        });
        this.ended = null;
        this.timedOut = false;
        this.cleared = false;
        this.duration = duration;
        this.start = Math.trunc(performance.now());
        if (rejection == null && this.duration > 0) {
            this.id = (0, timers_1.setTimeout)(() => {
                this.ended = Math.trunc(performance.now());
                this.timedOut = true;
                reject(new TimeoutError(`Expired after ${duration}ms`, { duration }));
            }, this.duration);
            if (typeof this.id.unref === 'function' && unref) {
                // Ensure we do not keep the Node.js event loop running
                this.id.unref();
            }
        }
        else if (rejection != null) {
            this.ended = Math.trunc(performance.now());
            this.timedOut = true;
            reject(rejection);
        }
    }
    /**
     * Clears the underlying timeout. This method is idempotent
     */
    clear() {
        (0, timers_1.clearTimeout)(this.id);
        this.id = undefined;
        this.timedOut = false;
        this.cleared = true;
    }
    throwIfExpired() {
        if (this.timedOut) {
            // This method is invoked when someone wants to throw immediately instead of await the result of this promise
            // Since they won't be handling the rejection from the promise (because we're about to throw here)
            // attach handling to prevent this from bubbling up to Node.js
            this.then(undefined, utils_1.squashError);
            throw new TimeoutError('Timed out', { duration: this.duration });
        }
    }
    static expires(duration, unref) {
        return new Timeout(undefined, { duration, unref });
    }
    static reject(rejection) {
        return new Timeout(undefined, { duration: 0, unref: true, rejection });
    }
}
exports.Timeout = Timeout;
function isLegacyTimeoutContextOptions(v) {
    return (v != null &&
        typeof v === 'object' &&
        'serverSelectionTimeoutMS' in v &&
        typeof v.serverSelectionTimeoutMS === 'number' &&
        'waitQueueTimeoutMS' in v &&
        typeof v.waitQueueTimeoutMS === 'number');
}
function isCSOTTimeoutContextOptions(v) {
    return (v != null &&
        typeof v === 'object' &&
        'serverSelectionTimeoutMS' in v &&
        typeof v.serverSelectionTimeoutMS === 'number' &&
        'timeoutMS' in v &&
        typeof v.timeoutMS === 'number');
}
/** @internal */
class TimeoutContext {
    static create(options) {
        if (options.session?.timeoutContext != null)
            return options.session?.timeoutContext;
        if (isCSOTTimeoutContextOptions(options))
            return new CSOTTimeoutContext(options);
        else if (isLegacyTimeoutContextOptions(options))
            return new LegacyTimeoutContext(options);
        else
            throw new error_1.MongoRuntimeError('Unrecognized options');
    }
}
exports.TimeoutContext = TimeoutContext;
/** @internal */
class CSOTTimeoutContext extends TimeoutContext {
    constructor(options) {
        super();
        this.minRoundTripTime = 0;
        this.start = Math.trunc(performance.now());
        this.timeoutMS = options.timeoutMS;
        this.serverSelectionTimeoutMS = options.serverSelectionTimeoutMS;
        this.socketTimeoutMS = options.socketTimeoutMS;
        this.clearServerSelectionTimeout = false;
    }
    get maxTimeMS() {
        return this.remainingTimeMS - this.minRoundTripTime;
    }
    get remainingTimeMS() {
        const timePassed = Math.trunc(performance.now()) - this.start;
        return this.timeoutMS <= 0 ? Infinity : this.timeoutMS - timePassed;
    }
    csotEnabled() {
        return true;
    }
    get serverSelectionTimeout() {
        // check for undefined
        if (typeof this._serverSelectionTimeout !== 'object' || this._serverSelectionTimeout?.cleared) {
            const { remainingTimeMS, serverSelectionTimeoutMS } = this;
            if (remainingTimeMS <= 0)
                return Timeout.reject(new error_1.MongoOperationTimeoutError(`Timed out in server selection after ${this.timeoutMS}ms`));
            const usingServerSelectionTimeoutMS = serverSelectionTimeoutMS !== 0 &&
                (0, utils_1.csotMin)(remainingTimeMS, serverSelectionTimeoutMS) === serverSelectionTimeoutMS;
            if (usingServerSelectionTimeoutMS) {
                this._serverSelectionTimeout = Timeout.expires(serverSelectionTimeoutMS);
            }
            else {
                if (remainingTimeMS > 0 && Number.isFinite(remainingTimeMS)) {
                    this._serverSelectionTimeout = Timeout.expires(remainingTimeMS);
                }
                else {
                    this._serverSelectionTimeout = null;
                }
            }
        }
        return this._serverSelectionTimeout;
    }
    get connectionCheckoutTimeout() {
        if (typeof this._connectionCheckoutTimeout !== 'object' ||
            this._connectionCheckoutTimeout?.cleared) {
            if (typeof this._serverSelectionTimeout === 'object') {
                // null or Timeout
                this._connectionCheckoutTimeout = this._serverSelectionTimeout;
            }
            else {
                throw new error_1.MongoRuntimeError('Unreachable. If you are seeing this error, please file a ticket on the NODE driver project on Jira');
            }
        }
        return this._connectionCheckoutTimeout;
    }
    get timeoutForSocketWrite() {
        const { remainingTimeMS } = this;
        if (!Number.isFinite(remainingTimeMS))
            return null;
        if (remainingTimeMS > 0)
            return Timeout.expires(remainingTimeMS);
        return Timeout.reject(new error_1.MongoOperationTimeoutError('Timed out before socket write'));
    }
    get timeoutForSocketRead() {
        const { remainingTimeMS } = this;
        if (!Number.isFinite(remainingTimeMS))
            return null;
        if (remainingTimeMS > 0)
            return Timeout.expires(remainingTimeMS);
        return Timeout.reject(new error_1.MongoOperationTimeoutError('Timed out before socket read'));
    }
    refresh() {
        this.start = Math.trunc(performance.now());
        this.minRoundTripTime = 0;
        this._serverSelectionTimeout?.clear();
        this._connectionCheckoutTimeout?.clear();
    }
    clear() {
        this._serverSelectionTimeout?.clear();
        this._connectionCheckoutTimeout?.clear();
    }
    /**
     * @internal
     * Throws a MongoOperationTimeoutError if the context has expired.
     * If the context has not expired, returns the `remainingTimeMS`
     **/
    getRemainingTimeMSOrThrow(message) {
        const { remainingTimeMS } = this;
        if (remainingTimeMS <= 0)
            throw new error_1.MongoOperationTimeoutError(message ?? `Expired after ${this.timeoutMS}ms`);
        return remainingTimeMS;
    }
    /**
     * @internal
     * This method is intended to be used in situations where concurrent operation are on the same deadline, but cannot share a single `TimeoutContext` instance.
     * Returns a new instance of `CSOTTimeoutContext` constructed with identical options, but setting the `start` property to `this.start`.
     */
    clone() {
        const timeoutContext = new CSOTTimeoutContext({
            timeoutMS: this.timeoutMS,
            serverSelectionTimeoutMS: this.serverSelectionTimeoutMS
        });
        timeoutContext.start = this.start;
        return timeoutContext;
    }
    refreshed() {
        return new CSOTTimeoutContext(this);
    }
    addMaxTimeMSToCommand(command, options) {
        if (options.omitMaxTimeMS)
            return;
        const maxTimeMS = this.remainingTimeMS - this.minRoundTripTime;
        if (maxTimeMS > 0 && Number.isFinite(maxTimeMS))
            command.maxTimeMS = maxTimeMS;
    }
    getSocketTimeoutMS() {
        return 0;
    }
}
exports.CSOTTimeoutContext = CSOTTimeoutContext;
/** @internal */
class LegacyTimeoutContext extends TimeoutContext {
    constructor(options) {
        super();
        this.options = options;
        this.clearServerSelectionTimeout = true;
    }
    csotEnabled() {
        return false;
    }
    get serverSelectionTimeout() {
        if (this.options.serverSelectionTimeoutMS != null && this.options.serverSelectionTimeoutMS > 0)
            return Timeout.expires(this.options.serverSelectionTimeoutMS);
        return null;
    }
    get connectionCheckoutTimeout() {
        if (this.options.waitQueueTimeoutMS != null && this.options.waitQueueTimeoutMS > 0)
            return Timeout.expires(this.options.waitQueueTimeoutMS);
        return null;
    }
    get timeoutForSocketWrite() {
        return null;
    }
    get timeoutForSocketRead() {
        return null;
    }
    refresh() {
        return;
    }
    clear() {
        return;
    }
    get maxTimeMS() {
        return null;
    }
    refreshed() {
        return new LegacyTimeoutContext(this.options);
    }
    addMaxTimeMSToCommand(_command, _options) {
        // No max timeMS is added to commands in legacy timeout mode.
    }
    getSocketTimeoutMS() {
        return this.options.socketTimeoutMS;
    }
}
exports.LegacyTimeoutContext = LegacyTimeoutContext;
//# sourceMappingURL=timeout.js.map