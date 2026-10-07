import { Observable } from '../Observable';
import { Notification } from '../Notification';
import { ColdObservable } from './ColdObservable';
import { HotObservable } from './HotObservable';
import { TestMessage } from './TestMessage';
import { SubscriptionLog } from './SubscriptionLog';
import { Subscription } from '../Subscription';
import { VirtualTimeScheduler, VirtualAction } from '../scheduler/VirtualTimeScheduler';
import { AsyncScheduler } from '../scheduler/AsyncScheduler';

const defaultMaxFrame: number = 750;

export interface RunHelpers {
  cold: typeof TestScheduler.prototype.createColdObservable;
  hot: typeof TestScheduler.prototype.createHotObservable;
  flush: typeof TestScheduler.prototype.flush;
  expectObservable: typeof TestScheduler.prototype.expectObservable;
  expectSubscriptions: typeof TestScheduler.prototype.expectSubscriptions;
}

interface FlushableTest {
  ready: boolean;
  actual?: any[];
  expected?: any[];
}

export type observableToBeFn = (marbles: string, values?: any, errorValue?: any) => void;
export type subscriptionLogsToBeFn = (marbles: string | string[]) => void;

export class TestScheduler extends VirtualTimeScheduler {
  public readonly hotObservables: HotObservable<any>[] = [];
  public readonly coldObservables: ColdObservable<any>[] = [];
  private flushTests: FlushableTest[] = [];
  private runMode = false;

  constructor(public assertDeepEqual: (actual: any, expected: any) => boolean | void) {
    super(VirtualAction, defaultMaxFrame);
  }

  createTime(marbles: string): number {
    const indexOf: number = marbles.indexOf('|');
    if (indexOf === -1) {
      throw new Error('marble diagram for time should have a completion marker "|"');
    }
    return indexOf * TestScheduler.frameTimeFactor;
  }

  /**
   * @param marbles A diagram in the marble DSL. Letters map to keys in `values` if provided.
   * @param values Values to use for the letters in `marbles`. If ommitted, the letters themselves are used.
   * @param error The error to use for the `#` marble (if present).
   */
  createColdObservable<T = string>(marbles: string, values?: { [marble: string]: T }, error?: any): ColdObservable<T> {
    if (marbles.indexOf('^') !== -1) {
      throw new Error('cold observable cannot have subscription offset "^"');
    }
    if (marbles.indexOf('!') !== -1) {
      throw new Error('cold observable cannot have unsubscription marker "!"');
    }
    const messages = TestScheduler.parseMarbles(marbles, values, error, undefined, this.runMode);
    const cold = new ColdObservable<T>(messages, this);
    this.coldObservables.push(cold);
    return cold;
  }

  /**
   * @param marbles A diagram in the marble DSL. Letters map to keys in `values` if provided.
   * @param values Values to use for the letters in `marbles`. If ommitted, the letters themselves are used.
   * @param error The error to use for the `#` marble (if present).
   */
  createHotObservable<T = string>(marbles: string, values?: { [marble: string]: T }, error?: any): HotObservable<T> {
    if (marbles.indexOf('!') !== -1) {
      throw new Error('hot observable cannot have unsubscription marker "!"');
    }
    const messages = TestScheduler.parseMarbles(marbles, values, error, undefined, this.runMode);
    const subject = new HotObservable<T>(messages, this);
    this.hotObservables.push(subject);
    return subject;
  }

  private materializeInnerObservable(observable: Observable<any>,
                                     outerFrame: number): TestMessage[] {
    const messages: TestMessage[] = [];
    observable.subscribe((value) => {
      messages.push({ frame: this.frame - outerFrame, notification: Notification.createNext(value) });
    }, (err) => {
      messages.push({ frame: this.frame - outerFrame, notification: Notification.createError(err) });
    }, () => {
      messages.push({ frame: this.frame - outerFrame, notification: Notification.createComplete() });
    });
    return messages;
  }

  expectObservable(observable: Observable<any>,
                   subscriptionMarbles: string = null): ({ toBe: observableToBeFn }) {
    const actual: TestMessage[] = [];
    const flushTest: FlushableTest = { actual, ready: false };
    const subscriptionParsed = TestScheduler.parseMarblesAsSubscriptions(subscriptionMarbles, this.runMode);
    const subscriptionFrame = subscriptionParsed.subscribedFrame === Number.POSITIVE_INFINITY ?
      0 : subscriptionParsed.subscribedFrame;
    const unsubscriptionFrame = subscriptionParsed.unsubscribedFrame;
    let subscription: Subscription;

    this.schedule(() => {
      subscription = observable.subscribe(x => {
        let value = x;
        // Support Observable-of-Observables
        if (x instanceof Observable) {
          value = this.materializeInnerObservable(value, this.frame);
        }
        actual.push({ frame: this.frame, notification: Notification.createNext(value) });
      }, (err) => {
        actual.push({ frame: this.frame, notification: Notification.createError(err) });
      }, () => {
        actual.push({ frame: this.frame, notification: Notification.createComplete() });
      });
    }, subscriptionFrame);

    if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
      this.schedule(() => subscription.unsubscribe(), unsubscriptionFrame);
    }

    this.flushTests.push(flushTest);
    const { runMode } = this;

    return {
      toBe(marbles: string, values?: any, errorValue?: any) {
        flushTest.ready = true;
        flushTest.expected = TestScheduler.parseMarbles(marbles, values, errorValue, true, runMode);
      }
    };
  }

  expectSubscriptions(actualSubscriptionLogs: SubscriptionLog[]): ({ toBe: subscriptionLogsToBeFn }) {
    const flushTest: FlushableTest = { actual: actualSubscriptionLogs, ready: false };
    this.flushTests.push(flushTest);
    const { runMode } = this;
    return {
      toBe(marbles: string | string[]) {
        const marblesArray: string[] = (typeof marbles === 'string') ? [marbles] : marbles;
        flushTest.ready = true;
        flushTest.expected = marblesArray.map(marbles =>
          TestScheduler.parseMarblesAsSubscriptions(marbles, runMode)
        );
      }
    };
  }

  flush() {
    const hotObservables = this.hotObservables;
    while (hotObservables.length > 0) {
      hotObservables.shift().setup();
    }

    super.flush();

    this.flushTests = this.flushTests.filter(test => {
      if (test.ready) {
        this.assertDeepEqual(test.actual, test.expected);
        return false;
      }
      return true;
    });
  }

  /** @nocollapse */
  static parseMarblesAsSubscriptions(marbles: string, runMode = false): SubscriptionLog {
    if (typeof marbles !== 'string') {
      return new SubscriptionLog(Number.POSITIVE_INFINITY);
    }
    const len = marbles.length;
    let groupStart = -1;
    let subscriptionFrame = Number.POSITIVE_INFINITY;
    let unsubscriptionFrame = Number.POSITIVE_INFINITY;
    let frame = 0;

    for (let i = 0; i < len; i++) {
      let nextFrame = frame;
      const advanceFrameBy = (count: number) => {
        nextFrame += count * this.frameTimeFactor;
      };
      const c = marbles[i];
      switch (c) {
        case ' ':
          // Whitespace no longer advances time
          if (!runMode) {
            advanceFrameBy(1);
          }
          break;
        case '-':
          advanceFrameBy(1);
          break;
        case '(':
          groupStart = frame;
          advanceFrameBy(1);
          break;
        case ')':
          groupStart = -1;
          advanceFrameBy(1);
          break;
        case '^':
          if (subscriptionFrame !== Number.POSITIVE_INFINITY) {
            throw new Error('found a second subscription point \'^\' in a ' +
              'subscription marble diagram. There can only be one.');
          }
          subscriptionFrame = groupStart > -1 ? groupStart : frame;
          advanceFrameBy(1);
          break;
        case '!':
          if (unsubscriptionFrame !== Number.POSITIVE_INFINITY) {
            throw new Error('found a second subscription point \'^\' in a ' +
              'subscription marble diagram. There can only be one.');
          }
          unsubscriptionFrame = groupStart > -1 ? groupStart : frame;
          break;
        default:
          // time progression syntax
          if (runMode && c.match(/^[0-9]$/)) {
            // Time progression must be preceeded by at least one space
            // if it's not at the beginning of the diagram
            if (i === 0 || marbles[i - 1] === ' ') {
              const buffer = marbles.slice(i);
              const match = buffer.match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /);
              if (match) {
                i += match[0].length - 1;
                const duration = parseFloat(match[1]);
                const unit = match[2];
                let durationInMs: number;

                switch (unit) {
                  case 'ms':
                    durationInMs = duration;
                    break;
                  case 's':
                    durationInMs = duration * 1000;
                    break;
                  case 'm':
                    durationInMs = duration * 1000 * 60;
                    break;
                  default:
                    break;
                }

                advanceFrameBy(durationInMs / this.frameTimeFactor);
                break;
              }
            }
          }

          throw new Error('there can only be \'^\' and \'!\' markers in a ' +
            'subscription marble diagram. Found instead \'' + c + '\'.');
      }

      frame = nextFrame;
    }

    if (unsubscriptionFrame < 0) {
      return new SubscriptionLog(subscriptionFrame);
    } else {
      return new SubscriptionLog(subscriptionFrame, unsubscriptionFrame);
    }
  }

  /** @nocollapse */
  static parseMarbles(marbles: string,
                      values?: any,
                      errorValue?: any,
                      materializeInnerObservables: boolean = false,
                      runMode = false): TestMessage[] {
    if (marbles.indexOf('!') !== -1) {
      throw new Error('conventional marble diagrams cannot have the ' +
        'unsubscription marker "!"');
    }
    const len = marbles.length;
    const testMessages: TestMessage[] = [];
    const subIndex = runMode ? marbles.replace(/^[ ]+/, '').indexOf('^') : marbles.indexOf('^');
    let frame = subIndex === -1 ? 0 : (subIndex * -this.frameTimeFactor);
    const getValue = typeof values !== 'object' ?
      (x: any) => x :
      (x: any) => {
        // Support Observable-of-Observables
        if (materializeInnerObservables && values[x] instanceof ColdObservable) {
          return values[x].messages;
        }
        return values[x];
      };
    let groupStart = -1;

    for (let i = 0; i < len; i++) {
      let nextFrame = frame;
      const advanceFrameBy = (count: number) => {
        nextFrame += count * this.frameTimeFactor;
      };

      let notification: Notification<any>;
      const c = marbles[i];
      switch (c) {
        case ' ':
          // Whitespace no longer advances time
          if (!runMode) {
            advanceFrameBy(1);
          }
          break;
        case '-':
          advanceFrameBy(1);
          break;
        case '(':
          groupStart = frame;
          advanceFrameBy(1);
          break;
        case ')':
          groupStart = -1;
          advanceFrameBy(1);
          break;
        case '|':
          notification = Notification.createComplete();
          advanceFrameBy(1);
          break;
        case '^':
          advanceFrameBy(1);
          break;
        case '#':
          notification = Notification.createError(errorValue || 'error');
          advanceFrameBy(1);
          break;
        default:
          // Might be time progression syntax, or a value literal
          if (runMode && c.match(/^[0-9]$/)) {
            // Time progression must be preceeded by at least one space
            // if it's not at the beginning of the diagram
            if (i === 0 || marbles[i - 1] === ' ') {
              const buffer = marbles.slice(i);
              const match = buffer.match(/^([0-9]+(?:\.[0-9]+)?)(ms|s|m) /);
              if (match) {
                i += match[0].length - 1;
                const duration = parseFloat(match[1]);
                const unit = match[2];
                let durationInMs: number;

                switch (unit) {
                  case 'ms':
                    durationInMs = duration;
                    break;
                  case 's':
                    durationInMs = duration * 1000;
                    break;
                  case 'm':
                    durationInMs = duration * 1000 * 60;
                    break;
                  default:
                    break;
                }

                advanceFrameBy(durationInMs / this.frameTimeFactor);
                break;
              }
            }
          }

          notification = Notification.createNext(getValue(c));
          advanceFrameBy(1);
          break;
      }

      if (notification) {
        testMessages.push({ frame: groupStart > -1 ? groupStart : frame, notification });
      }

      frame = nextFrame;
    }
    return testMessages;
  }

  run<T>(callback: (helpers: RunHelpers) => T): T {
    const prevFrameTimeFactor = TestScheduler.frameTimeFactor;
    const prevMaxFrames = this.maxFrames;

    TestScheduler.frameTimeFactor = 1;
    this.maxFrames = Number.POSITIVE_INFINITY;
    this.runMode = true;
    AsyncScheduler.delegate = this;

    const helpers = {
      cold: this.createColdObservable.bind(this),
      hot: this.createHotObservable.bind(this),
      flush: this.flush.bind(this),
      expectObservable: this.expectObservable.bind(this),
      expectSubscriptions: this.expectSubscriptions.bind(this),
    };
    try {
      const ret = callback(helpers);
      this.flush();
      return ret;
    } finally {
      TestScheduler.frameTimeFactor = prevFrameTimeFactor;
      this.maxFrames = prevMaxFrames;
      this.runMode = false;
      AsyncScheduler.delegate = undefined;
    }
  }
}
