import { clearTimeout, setTimeout } from 'timers';

import { type Document } from './bson';
import { MongoInvalidArgumentError, MongoOperationTimeoutError, MongoRuntimeError } from './error';
import { type ClientSession } from './sessions';
import { csotMin, noop, squashError } from './utils';

/** @internal */
export class TimeoutError extends Error {
  duration: number;
  override get name(): 'TimeoutError' {
    return 'TimeoutError';
  }

  constructor(message: string, options: { cause?: Error; duration: number }) {
    super(message, options);
    this.duration = options.duration;
  }

  static is(error: unknown): error is TimeoutError {
    return (
      error != null && typeof error === 'object' && 'name' in error && error.name === 'TimeoutError'
    );
  }
}

type Executor = ConstructorParameters<typeof Promise<never>>[0];
type Reject = Parameters<ConstructorParameters<typeof Promise<never>>[0]>[1];
/**
 * @internal
 * This class is an abstraction over timeouts
 * The Timeout class can only be in the pending or rejected states. It is guaranteed not to resolve
 * if interacted with exclusively through its public API
 * */
export class Timeout extends Promise<never> {
  private id?: NodeJS.Timeout;

  public readonly start: number;
  public ended: number | null = null;
  public duration: number;
  private timedOut = false;
  public cleared = false;

  get remainingTime(): number {
    if (this.timedOut) return 0;
    if (this.duration === 0) return Infinity;
    return this.start + this.duration - Math.trunc(performance.now());
  }

  get timeElapsed(): number {
    return Math.trunc(performance.now()) - this.start;
  }

  /** Create a new timeout that expires in `duration` ms */
  private constructor(
    executor: Executor = () => null,
    options?: { duration: number; unref?: true; rejection?: Error }
  ) {
    const duration = options?.duration ?? 0;
    const unref = !!options?.unref;
    const rejection = options?.rejection;

    if (duration < 0) {
      throw new MongoInvalidArgumentError('Cannot create a Timeout with a negative duration');
    }

    let reject!: Reject;
    super((_, promiseReject) => {
      reject = promiseReject;

      executor(noop, promiseReject);
    });

    this.duration = duration;
    this.start = Math.trunc(performance.now());

    if (rejection == null && this.duration > 0) {
      this.id = setTimeout(() => {
        this.ended = Math.trunc(performance.now());
        this.timedOut = true;
        reject(new TimeoutError(`Expired after ${duration}ms`, { duration }));
      }, this.duration);
      if (typeof this.id.unref === 'function' && unref) {
        // Ensure we do not keep the Node.js event loop running
        this.id.unref();
      }
    } else if (rejection != null) {
      this.ended = Math.trunc(performance.now());
      this.timedOut = true;
      reject(rejection);
    }
  }

  /**
   * Clears the underlying timeout. This method is idempotent
   */
  clear(): void {
    clearTimeout(this.id);
    this.id = undefined;
    this.timedOut = false;
    this.cleared = true;
  }

  throwIfExpired(): void {
    if (this.timedOut) {
      // This method is invoked when someone wants to throw immediately instead of await the result of this promise
      // Since they won't be handling the rejection from the promise (because we're about to throw here)
      // attach handling to prevent this from bubbling up to Node.js
      this.then(undefined, squashError);
      throw new TimeoutError('Timed out', { duration: this.duration });
    }
  }

  public static expires(duration: number, unref?: true): Timeout {
    return new Timeout(undefined, { duration, unref });
  }

  static override reject(rejection?: Error): Timeout {
    return new Timeout(undefined, { duration: 0, unref: true, rejection });
  }
}

/** @internal */
export type TimeoutContextOptions = (LegacyTimeoutContextOptions | CSOTTimeoutContextOptions) & {
  session?: ClientSession;
};

/** @internal */
export type LegacyTimeoutContextOptions = {
  serverSelectionTimeoutMS: number;
  waitQueueTimeoutMS: number;
  socketTimeoutMS?: number;
};

/** @internal */
export type CSOTTimeoutContextOptions = {
  timeoutMS: number;
  serverSelectionTimeoutMS: number;
  socketTimeoutMS?: number;
};

function isLegacyTimeoutContextOptions(v: unknown): v is LegacyTimeoutContextOptions {
  return (
    v != null &&
    typeof v === 'object' &&
    'serverSelectionTimeoutMS' in v &&
    typeof v.serverSelectionTimeoutMS === 'number' &&
    'waitQueueTimeoutMS' in v &&
    typeof v.waitQueueTimeoutMS === 'number'
  );
}

function isCSOTTimeoutContextOptions(v: unknown): v is CSOTTimeoutContextOptions {
  return (
    v != null &&
    typeof v === 'object' &&
    'serverSelectionTimeoutMS' in v &&
    typeof v.serverSelectionTimeoutMS === 'number' &&
    'timeoutMS' in v &&
    typeof v.timeoutMS === 'number'
  );
}

/** @internal */
export abstract class TimeoutContext {
  static create(options: TimeoutContextOptions): TimeoutContext {
    if (options.session?.timeoutContext != null) return options.session?.timeoutContext;
    if (isCSOTTimeoutContextOptions(options)) return new CSOTTimeoutContext(options);
    else if (isLegacyTimeoutContextOptions(options)) return new LegacyTimeoutContext(options);
    else throw new MongoRuntimeError('Unrecognized options');
  }

  abstract get maxTimeMS(): number | null;

  abstract get serverSelectionTimeout(): Timeout | null;

  abstract get connectionCheckoutTimeout(): Timeout | null;

  abstract get clearServerSelectionTimeout(): boolean;

  abstract get timeoutForSocketWrite(): Timeout | null;

  abstract get timeoutForSocketRead(): Timeout | null;

  abstract csotEnabled(): this is CSOTTimeoutContext;

  abstract refresh(): void;

  abstract clear(): void;

  /** Returns a new instance of the TimeoutContext, with all timeouts refreshed and restarted. */
  abstract refreshed(): TimeoutContext;

  abstract addMaxTimeMSToCommand(command: Document, options: { omitMaxTimeMS?: boolean }): void;

  abstract getSocketTimeoutMS(): number | undefined;
}

/** @internal */
export class CSOTTimeoutContext extends TimeoutContext {
  timeoutMS: number;
  serverSelectionTimeoutMS: number;
  socketTimeoutMS?: number;

  clearServerSelectionTimeout: boolean;

  private _serverSelectionTimeout?: Timeout | null;
  private _connectionCheckoutTimeout?: Timeout | null;
  public minRoundTripTime = 0;
  public start: number;

  constructor(options: CSOTTimeoutContextOptions) {
    super();
    this.start = Math.trunc(performance.now());

    this.timeoutMS = options.timeoutMS;

    this.serverSelectionTimeoutMS = options.serverSelectionTimeoutMS;

    this.socketTimeoutMS = options.socketTimeoutMS;

    this.clearServerSelectionTimeout = false;
  }

  get maxTimeMS(): number {
    return this.remainingTimeMS - this.minRoundTripTime;
  }

  get remainingTimeMS() {
    const timePassed = Math.trunc(performance.now()) - this.start;
    return this.timeoutMS <= 0 ? Infinity : this.timeoutMS - timePassed;
  }

  csotEnabled(): this is CSOTTimeoutContext {
    return true;
  }

  get serverSelectionTimeout(): Timeout | null {
    // check for undefined
    if (typeof this._serverSelectionTimeout !== 'object' || this._serverSelectionTimeout?.cleared) {
      const { remainingTimeMS, serverSelectionTimeoutMS } = this;
      if (remainingTimeMS <= 0)
        return Timeout.reject(
          new MongoOperationTimeoutError(`Timed out in server selection after ${this.timeoutMS}ms`)
        );
      const usingServerSelectionTimeoutMS =
        serverSelectionTimeoutMS !== 0 &&
        csotMin(remainingTimeMS, serverSelectionTimeoutMS) === serverSelectionTimeoutMS;
      if (usingServerSelectionTimeoutMS) {
        this._serverSelectionTimeout = Timeout.expires(serverSelectionTimeoutMS);
      } else {
        if (remainingTimeMS > 0 && Number.isFinite(remainingTimeMS)) {
          this._serverSelectionTimeout = Timeout.expires(remainingTimeMS);
        } else {
          this._serverSelectionTimeout = null;
        }
      }
    }

    return this._serverSelectionTimeout;
  }

  get connectionCheckoutTimeout(): Timeout | null {
    if (
      typeof this._connectionCheckoutTimeout !== 'object' ||
      this._connectionCheckoutTimeout?.cleared
    ) {
      if (typeof this._serverSelectionTimeout === 'object') {
        // null or Timeout
        this._connectionCheckoutTimeout = this._serverSelectionTimeout;
      } else {
        throw new MongoRuntimeError(
          'Unreachable. If you are seeing this error, please file a ticket on the NODE driver project on Jira'
        );
      }
    }
    return this._connectionCheckoutTimeout;
  }

  get timeoutForSocketWrite(): Timeout | null {
    const { remainingTimeMS } = this;
    if (!Number.isFinite(remainingTimeMS)) return null;
    if (remainingTimeMS > 0) return Timeout.expires(remainingTimeMS);
    return Timeout.reject(new MongoOperationTimeoutError('Timed out before socket write'));
  }

  get timeoutForSocketRead(): Timeout | null {
    const { remainingTimeMS } = this;
    if (!Number.isFinite(remainingTimeMS)) return null;
    if (remainingTimeMS > 0) return Timeout.expires(remainingTimeMS);
    return Timeout.reject(new MongoOperationTimeoutError('Timed out before socket read'));
  }

  refresh(): void {
    this.start = Math.trunc(performance.now());
    this.minRoundTripTime = 0;
    this._serverSelectionTimeout?.clear();
    this._connectionCheckoutTimeout?.clear();
  }

  clear(): void {
    this._serverSelectionTimeout?.clear();
    this._connectionCheckoutTimeout?.clear();
  }

  /**
   * @internal
   * Throws a MongoOperationTimeoutError if the context has expired.
   * If the context has not expired, returns the `remainingTimeMS`
   **/
  getRemainingTimeMSOrThrow(message?: string): number {
    const { remainingTimeMS } = this;
    if (remainingTimeMS <= 0)
      throw new MongoOperationTimeoutError(message ?? `Expired after ${this.timeoutMS}ms`);
    return remainingTimeMS;
  }

  /**
   * @internal
   * This method is intended to be used in situations where concurrent operation are on the same deadline, but cannot share a single `TimeoutContext` instance.
   * Returns a new instance of `CSOTTimeoutContext` constructed with identical options, but setting the `start` property to `this.start`.
   */
  clone(): CSOTTimeoutContext {
    const timeoutContext = new CSOTTimeoutContext({
      timeoutMS: this.timeoutMS,
      serverSelectionTimeoutMS: this.serverSelectionTimeoutMS
    });
    timeoutContext.start = this.start;
    return timeoutContext;
  }

  override refreshed(): CSOTTimeoutContext {
    return new CSOTTimeoutContext(this);
  }

  override addMaxTimeMSToCommand(command: Document, options: { omitMaxTimeMS?: boolean }): void {
    if (options.omitMaxTimeMS) return;
    const maxTimeMS = this.remainingTimeMS - this.minRoundTripTime;
    if (maxTimeMS > 0 && Number.isFinite(maxTimeMS)) command.maxTimeMS = maxTimeMS;
  }

  override getSocketTimeoutMS(): number | undefined {
    return 0;
  }
}

/** @internal */
export class LegacyTimeoutContext extends TimeoutContext {
  options: LegacyTimeoutContextOptions;
  clearServerSelectionTimeout: boolean;

  constructor(options: LegacyTimeoutContextOptions) {
    super();
    this.options = options;
    this.clearServerSelectionTimeout = true;
  }

  csotEnabled(): this is CSOTTimeoutContext {
    return false;
  }

  get serverSelectionTimeout(): Timeout | null {
    if (this.options.serverSelectionTimeoutMS != null && this.options.serverSelectionTimeoutMS > 0)
      return Timeout.expires(this.options.serverSelectionTimeoutMS);
    return null;
  }

  get connectionCheckoutTimeout(): Timeout | null {
    if (this.options.waitQueueTimeoutMS != null && this.options.waitQueueTimeoutMS > 0)
      return Timeout.expires(this.options.waitQueueTimeoutMS);
    return null;
  }

  get timeoutForSocketWrite(): Timeout | null {
    return null;
  }

  get timeoutForSocketRead(): Timeout | null {
    return null;
  }

  refresh(): void {
    return;
  }

  clear(): void {
    return;
  }

  get maxTimeMS() {
    return null;
  }

  override refreshed(): LegacyTimeoutContext {
    return new LegacyTimeoutContext(this.options);
  }

  override addMaxTimeMSToCommand(_command: Document, _options: { omitMaxTimeMS?: boolean }): void {
    // No max timeMS is added to commands in legacy timeout mode.
  }

  override getSocketTimeoutMS(): number | undefined {
    return this.options.socketTimeoutMS;
  }
}
