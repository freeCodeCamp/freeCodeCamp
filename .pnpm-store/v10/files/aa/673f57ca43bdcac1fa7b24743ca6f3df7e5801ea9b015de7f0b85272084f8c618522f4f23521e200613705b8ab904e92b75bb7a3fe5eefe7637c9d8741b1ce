import { Action } from './Action';
import { SchedulerAction } from '../types';
import { Subscription } from '../Subscription';
import { AsyncScheduler } from './AsyncScheduler';
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export declare class AsyncAction<T> extends Action<T> {
    protected scheduler: AsyncScheduler;
    protected work: (this: SchedulerAction<T>, state?: T) => void;
    id: any;
    state: T;
    delay: number;
    protected pending: boolean;
    constructor(scheduler: AsyncScheduler, work: (this: SchedulerAction<T>, state?: T) => void);
    schedule(state?: T, delay?: number): Subscription;
    protected requestAsyncId(scheduler: AsyncScheduler, id?: any, delay?: number): any;
    protected recycleAsyncId(scheduler: AsyncScheduler, id: any, delay?: number): any;
    /**
     * Immediately executes this action and the `work` it contains.
     * @return {any}
     */
    execute(state: T, delay: number): any;
    protected _execute(state: T, delay: number): any;
    /** @deprecated This is an internal implementation detail, do not use. */
    _unsubscribe(): void;
}
