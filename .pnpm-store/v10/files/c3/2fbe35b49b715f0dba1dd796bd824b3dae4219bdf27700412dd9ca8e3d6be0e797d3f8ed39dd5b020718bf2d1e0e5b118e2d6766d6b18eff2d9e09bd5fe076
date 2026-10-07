import { InteropObservable } from '../types';
import { observable as Symbol_observable } from '../symbol/observable';

/** Identifies an input as being Observable (but not necessary an Rx Observable) */
export function isInteropObservable(input: any): input is InteropObservable<any> {
  return input && typeof input[Symbol_observable] === 'function';
}
