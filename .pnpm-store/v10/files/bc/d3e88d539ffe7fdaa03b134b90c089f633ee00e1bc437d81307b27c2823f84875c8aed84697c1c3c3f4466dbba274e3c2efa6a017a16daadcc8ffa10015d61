import { AsyncAction } from './AsyncAction';
import { AsapScheduler } from './AsapScheduler';
import { SchedulerAction } from '../types';
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export declare class AsapAction<T> extends AsyncAction<T> {
    protected scheduler: AsapScheduler;
    protected work: (this: SchedulerAction<T>, state?: T) => void;
    constructor(scheduler: AsapScheduler, work: (this: SchedulerAction<T>, state?: T) => void);
    protected requestAsyncId(scheduler: AsapScheduler, id?: any, delay?: number): any;
    protected recycleAsyncId(scheduler: AsapScheduler, id?: any, delay?: number): any;
}
