import { Observable } from '../Observable';
import { ObservableInput } from '../types';

/**
 * Tests to see if the object is an RxJS {@link Observable}
 * @param obj the object to test
 */
export function isObservable<T>(obj: any): obj is Observable<T> {
  return !!obj && (obj instanceof Observable || (typeof obj.lift === 'function' && typeof obj.subscribe === 'function'));
}
