import { AsyncAction } from './AsyncAction';
import { Subscription } from '../Subscription';
import { AsyncScheduler } from './AsyncScheduler';
import { SchedulerAction } from '../types';
export declare class VirtualTimeScheduler extends AsyncScheduler {
    maxFrames: number;
    protected static frameTimeFactor: number;
    frame: number;
    index: number;
    constructor(SchedulerAction?: typeof AsyncAction, maxFrames?: number);
    /**
     * Prompt the Scheduler to execute all of its queued actions, therefore
     * clearing its queue.
     * @return {void}
     */
    flush(): void;
}
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @nodoc
 */
export declare class VirtualAction<T> extends AsyncAction<T> {
    protected scheduler: VirtualTimeScheduler;
    protected work: (this: SchedulerAction<T>, state?: T) => void;
    protected index: number;
    protected active: boolean;
    constructor(scheduler: VirtualTimeScheduler, work: (this: SchedulerAction<T>, state?: T) => void, index?: number);
    schedule(state?: T, delay?: number): Subscription;
    protected requestAsyncId(scheduler: VirtualTimeScheduler, id?: any, delay?: number): any;
    protected recycleAsyncId(scheduler: VirtualTimeScheduler, id?: any, delay?: number): any;
    protected _execute(state: T, delay: number): any;
    static sortActions<T>(a: VirtualAction<T>, b: VirtualAction<T>): 1 | 0 | -1;
}
