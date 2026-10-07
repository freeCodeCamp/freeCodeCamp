import { SchedulerLike } from '../types';

export function isScheduler(value: any): value is SchedulerLike {
  return value && typeof (<any>value).schedule === 'function';
}
