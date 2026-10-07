import { Subscriber } from './Subscriber';
import { InnerSubscriber } from './InnerSubscriber';
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export declare class OuterSubscriber<T, R> extends Subscriber<T> {
    notifyNext(outerValue: T, innerValue: R, outerIndex: number, innerIndex: number, innerSub: InnerSubscriber<T, R>): void;
    notifyError(error: any, innerSub: InnerSubscriber<T, R>): void;
    notifyComplete(innerSub: InnerSubscriber<T, R>): void;
}
