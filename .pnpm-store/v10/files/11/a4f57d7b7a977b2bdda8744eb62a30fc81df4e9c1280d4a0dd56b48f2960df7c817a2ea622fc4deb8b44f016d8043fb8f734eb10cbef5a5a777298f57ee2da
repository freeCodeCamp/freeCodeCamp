import { AsyncAction } from './AsyncAction';
import { AnimationFrameScheduler } from './AnimationFrameScheduler';
import { SchedulerAction } from '../types';

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export class AnimationFrameAction<T> extends AsyncAction<T> {

  constructor(protected scheduler: AnimationFrameScheduler,
              protected work: (this: SchedulerAction<T>, state?: T) => void) {
    super(scheduler, work);
  }

  protected requestAsyncId(scheduler: AnimationFrameScheduler, id?: any, delay: number = 0): any {
    // If delay is greater than 0, request as an async action.
    if (delay !== null && delay > 0) {
      return super.requestAsyncId(scheduler, id, delay);
    }
    // Push the action to the end of the scheduler queue.
    scheduler.actions.push(this);
    // If an animation frame has already been requested, don't request another
    // one. If an animation frame hasn't been requested yet, request one. Return
    // the current animation frame request id.
    return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(
      () => scheduler.flush(null)));
  }
  protected recycleAsyncId(scheduler: AnimationFrameScheduler, id?: any, delay: number = 0): any {
    // If delay exists and is greater than 0, or if the delay is null (the
    // action wasn't rescheduled) but was originally scheduled as an async
    // action, then recycle as an async action.
    if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
      return super.recycleAsyncId(scheduler, id, delay);
    }
    // If the scheduler queue is empty, cancel the requested animation frame and
    // set the scheduled flag to undefined so the next AnimationFrameAction will
    // request its own.
    if (scheduler.actions.length === 0) {
      cancelAnimationFrame(id);
      scheduler.scheduled = undefined;
    }
    // Return undefined so the action knows to request a new async id if it's rescheduled.
    return undefined;
  }
}
