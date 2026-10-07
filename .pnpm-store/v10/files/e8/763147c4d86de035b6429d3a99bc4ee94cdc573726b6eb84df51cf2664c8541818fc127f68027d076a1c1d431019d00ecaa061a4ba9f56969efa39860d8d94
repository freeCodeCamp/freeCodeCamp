import { Scheduler } from '../Scheduler';
import { Action } from './Action';
import { AsyncAction } from './AsyncAction';
import { SchedulerAction } from '../types';
import { Subscription } from '../Subscription';

export class AsyncScheduler extends Scheduler {
  public static delegate?: Scheduler;
  public actions: Array<AsyncAction<any>> = [];
  /**
   * A flag to indicate whether the Scheduler is currently executing a batch of
   * queued actions.
   * @type {boolean}
   * @deprecated internal use only
   */
  public active: boolean = false;
  /**
   * An internal ID used to track the latest asynchronous task such as those
   * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
   * others.
   * @type {any}
   * @deprecated internal use only
   */
  public scheduled: any = undefined;

  constructor(SchedulerAction: typeof Action,
              now: () => number = Scheduler.now) {
    super(SchedulerAction, () => {
      if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
        return AsyncScheduler.delegate.now();
      } else {
        return now();
      }
    });
  }

  public schedule<T>(work: (this: SchedulerAction<T>, state?: T) => void, delay: number = 0, state?: T): Subscription {
    if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
      return AsyncScheduler.delegate.schedule(work, delay, state);
    } else {
      return super.schedule(work, delay, state);
    }
  }

  public flush(action: AsyncAction<any>): void {

    const {actions} = this;

    if (this.active) {
      actions.push(action);
      return;
    }

    let error: any;
    this.active = true;

    do {
      if (error = action.execute(action.state, action.delay)) {
        break;
      }
    } while (action = actions.shift()); // exhaust the scheduler queue

    this.active = false;

    if (error) {
      while (action = actions.shift()) {
        action.unsubscribe();
      }
      throw error;
    }
  }
}
