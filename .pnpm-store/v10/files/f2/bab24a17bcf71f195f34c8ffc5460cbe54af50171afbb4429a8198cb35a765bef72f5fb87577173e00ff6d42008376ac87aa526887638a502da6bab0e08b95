import { Subscriber } from './Subscriber';
import { OuterSubscriber } from './OuterSubscriber';
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export declare class InnerSubscriber<T, R> extends Subscriber<R> {
    private parent;
    outerValue: T;
    outerIndex: number;
    private index;
    constructor(parent: OuterSubscriber<T, R>, outerValue: T, outerIndex: number);
    protected _next(value: R): void;
    protected _error(error: any): void;
    protected _complete(): void;
}
