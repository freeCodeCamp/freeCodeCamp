import { Subscriber } from './Subscriber';
import { TeardownLogic } from './types';

export interface Operator<T, R> {
  call(subscriber: Subscriber<R>, source: any): TeardownLogic;
}
