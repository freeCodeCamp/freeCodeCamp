import { Subject } from './Subject';
import { SchedulerLike } from './types';
import { Subscriber } from './Subscriber';
import { Subscription } from './Subscription';
/**
 * A variant of Subject that "replays" or emits old values to new subscribers.
 * It buffers a set number of values and will emit those values immediately to
 * any new subscribers in addition to emitting new values to existing subscribers.
 *
 * @class ReplaySubject<T>
 */
export declare class ReplaySubject<T> extends Subject<T> {
    private scheduler?;
    private _events;
    private _bufferSize;
    private _windowTime;
    private _infiniteTimeWindow;
    constructor(bufferSize?: number, windowTime?: number, scheduler?: SchedulerLike);
    private nextInfiniteTimeWindow;
    private nextTimeWindow;
    /** @deprecated This is an internal implementation detail, do not use. */
    _subscribe(subscriber: Subscriber<T>): Subscription;
    _getNow(): number;
    private _trimBufferThenGetEvents;
}
